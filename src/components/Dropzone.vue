<template>
    <div class="dropzone" @dragover="handleDragOver" @drop="handleDrop">
        <p>Drop files here</p>
    </div>
</template>

<script setup>
const emit = defineEmits(['drop', 'stats']);

const handleDragOver = (event) => {
    event.preventDefault();
};

const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    readFileContent(file);
};

const readFileContent = (file) => {
    const reader = new FileReader();
    reader.onload = (event) => {
        const content = event.target.result;
        emit('stats', {
            name: file.name,
            size: file.size,
            type: file.type,
        });
        emit('drop', content);
    };
    reader.readAsText(file);
};
</script>

<style>
.dropzone {
    width: 300px;
    height: 200px;
    border: 2px dashed #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
