<script setup lang="ts">
import { ref } from 'vue'
import Card from '../components/Card.vue'

const projects = ref([
    {
        name: 'Sefl-Money',
        description: `Una SPA creada een Laravel, liveware, SQL Server y Laravel sanctum, la principal función de la app es mostrar y personalizar los ingresos y egresos de un usuario.`,
        skils: [],
        img: '/imgs/self-money.png'
    }
])
</script>
<template>
    <div id="projects">
        <h3 class="text-green-500 text-2xl">Lista de Proyectos.</h3>
        <Card v-for="(item, index) in projects">

        </Card>
    </div>
</template>