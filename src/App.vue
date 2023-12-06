<template>
  <v-app id="inspire">
    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>JSON Wizard</v-app-bar-title>

      <!-- <v-list-item link title="devices" :href="`#/devices`"></v-list-item> -->
    </v-app-bar>

    <v-main>

      <!-- <Route path="/devices"> -->
        <v-navigation-drawer v-model="drawer">
          <!-- create facet filters from an object -->
          <v-card-title>Filters</v-card-title>
          <v-card-text>
            <Facets :items="devices.items" v-model="form" />
          </v-card-text>
        </v-navigation-drawer>

        <v-container fluid>
          <div v-if="!devices.items.length">
            <Dropzone @stats="devices.meta = $event" @drop="devices.items = JSON.parse($event)" />
          </div>

          <div>
            <v-card-title>Stats</v-card-title>
            <div>
              <Keys :items="devices.items" v-model="form" />
            </div>
          </div>


          <div>
            <Flex>
              <v-card-title>Objects ({{ _items.length }} / {{ devices.items.length }})</v-card-title>
              <v-spacer />
              <v-btn color="primary" @click="devices.items = []">clear</v-btn>
            </Flex>

            <v-card flat v-if="false">
              <v-card-title>Stats</v-card-title>
              <v-card-text>
                <pre>{{ devices.meta }}</pre>
              </v-card-text>
            </v-card>

            <Grid direction="row">
              <v-card v-for="device in _items.slice(0, end)" style="height: 200px; width: 300px; overflow: auto">
                <pre>{{ device }}</pre>
              </v-card>
            </Grid>
            <v-btn @click="end += 50">show more</v-btn>
          </div>
        </v-container>
      <!-- </Route> -->
    </v-main>
  </v-app>
</template>

<script setup>
import { onMounted, ref, reactive } from "vue";
import { computed } from "vue";

const end = ref(50)

class Collection {
  loading = false;
  items = [];
  strategy = "local";

  constructor(storage) {
    this.storage = storage || {
      create: (item) => {
        console.log("create", item);
      },
    };
  }

  async push(item) {
    this.items.push(item);
    // sync with storage
    this.storage.create(item);
  }
  async remove(item) {
    this.storage.deleteById(item.id);
  }
  async update(item) {
    this.storage.update(item.id, item);
  }
}

const devices = ref(new Collection());
const selected = ref(null);

const form = reactive({});

function filterItemsWithFacets(items, facets) {
  const filtered = items.filter((item) => {
    let match = true;
    Object.keys(facets).forEach((key) => {
      // filter on range if array of numbers
      if (Array.isArray(facets[key]) &&
        typeof (facets[key][0]) === 'number'
        && typeof (facets[key][1]) === 'number') {
        if (item[key] < facets[key][0] || item[key] > facets[key][1]) {
          match = false;
        }
        return
      }
      // filter on string value
      if (facets[key] && facets[key].length) {
        if (!facets[key].includes(item[key])) {
          match = false;
        }
      }
    });
    return match;
  });
  return filtered;
}

const _items = computed(() => {
  return filterItemsWithFacets(devices.value.items, form);
});

const drawer = ref(null);

function findDeviceByParams(params) {
  const r = devices.value.items.find((e) => e.id === params.id);
  console.log(r);
  return r || {};
}
</script>
