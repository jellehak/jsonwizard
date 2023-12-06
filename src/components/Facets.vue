<template>
    <v-btn @click="form = {}">reset</v-btn>
    <div v-for="(values, key) in getFacets(items)">
        <!-- {{ form[key] }} -->
        <v-range-slider
        :label="key"
        v-if="typeof values[0] === 'number'"
        v-model="form[key]"
        thumb-label="always"
        :min="Math.min(...values)"
        :max="Math.max(...values)"
        strict
      ></v-range-slider>
      <div v-else>
          <v-autocomplete multiple :items="values" v-model="form[key]" :label="key" clearable></v-autocomplete>
      </div>
    </div>
</template>

<script setup>
const form = defineModel({
    local: true, 
    default: () => ({})
});

const props = defineProps(['items']);

function getFacets(items) {
    const facets = {};
    items.forEach((item) => {
        Object.keys(item).forEach((key) => {
            if (!facets[key]) {
                facets[key] = [];
            }
            if (!facets[key].includes(item[key])) {
                facets[key].push(item[key]);
            }
        });
    });
    return facets;
}
</script>