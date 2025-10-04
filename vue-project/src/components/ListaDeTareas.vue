<template>
    <div>
        <h2>Lista de Tareas</h2>
        <input type="text" v-model="nuevaTarea" @keyup.enter="addTarea">
        <ul>
            <li v-for="(tarea, index) in tarea" :key="index">
                {{ tarea }}
            </li>
        </ul>
    </div>
</template>
<script setup>
import {ref} from 'vue';
const tarea = ref([]);
const nuevaTarea = ref('');
const addTarea = () => {
    tarea.value.push(nuevaTarea.value);
    nuevaTarea.value = '';
}
</script>
<style></style>