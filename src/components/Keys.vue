<template>
    <!-- <v-btn @click="form = {}">reset</v-btn> -->
    <div style="display: flex; flex-wrap: no-wrap; gap: 10px; overflow: scroll;">
        <v-card v-for="(values, key) in getFacets(items)" style="height: 200px; min-width: 300px; overflow: auto">
            <v-card-title>{{ key }} ({{ values.length }})</v-card-title>
            <v-card-subtitle>{{ getTypes(values) }}</v-card-subtitle>
            <v-list :items="values" @click:item="console.log"/>
        </v-card>
    </div>
</template>

<script setup>
const form = defineModel({
    local: true, 
    default: () => ({})
});

const props = defineProps(['items']);

// a function to detect type of all values
function getTypes(items) {
    const types=  items.map(e => typeof(e));
    // if all are the same type then return that as string
    if (types.every((t) => t === types[0])) {
        return types[0];
    }
    return 'mixed'
}

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