<template>
    <slot v-if="isPathMatched" v-bind="{params: extractVariables(props.path, locationHash)}"/>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const props = defineProps({
    path: {
        type: String,
        required: true
    }
})

const locationHash = ref(window.location.hash.replace('#', ''));

onMounted(() => {
    window.addEventListener('hashchange', () => {
        locationHash.value = window.location.hash.replace('#', '');
    });
});

const isPathMatched = computed(() => {
    const regex = new RegExp(props.path.replace(/:[^\s/]+/g, '[^/]+'));
    return regex.test(locationHash.value);
});

/**
 * @example extractVariables('/user/:id', '/user/5'); // would yield {id:5}
 * @param {*} path 
 * @param {*} matchedPath 
 */
const extractVariables = (path, matchedPath) => {
    const pathSegments = path.split('/');
    const matchedSegments = matchedPath.split('/');
    const variables = {};

    for (let i = 0; i < pathSegments.length; i++) {
        const segment = pathSegments[i];
        if (segment.startsWith(':')) {
            const variableName = segment.slice(1);
            const variableValue = matchedSegments[i];
            variables[variableName] = variableValue;
        }
    }

    return variables;
};
</script>
