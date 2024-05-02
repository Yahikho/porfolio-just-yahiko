<script setup lang="ts">
import Card from '../components/Card.vue'
import { ref } from 'vue';

const events = ref([
    {
        date: 'Abr 2022 - Actualidad', icon: 'pi pi-check', company: 'Imagine', title: 'Desarrollador Web Junior', text: `
        • Análisis y mantenimiento de requerimientos solicitados por los clientes.<br>
        • Migración de herramientas y procesos a nuevas tecnologías.<br>
        • Ajustes en seguridad para aplicación desarrollada en PHP nativo.<br><br>

        Logros 🚀<br><br>

        • Dar inicio a un nuevo ambiente de desarrollo y producción con la implementación de nuevas tecnologías, un paso de PHP a Node.js (Nest.js) junto con Vue.js, complementadas con arquitecturas Clean Code, y respetando los principios SOLID.<br>
        • Mejoramiento de la seguridad de la aplicación en un 20%.`
    },
    {
        date: 'Oct 2021 - Mar 2022', icon: 'pi pi-check', company: 'SOFTRONE', title: 'Analista de Sistemas', text: `
    • Ejecución de soluciones de rendimiento sincrónico y asincrónico con PHP/JS.<br>
    • Administración de la información con Talend.<br>
    • Desarrollo de REST-API's Express, PHP, Laravel, y consumos con Angular, JS y jQuery.<br>
    • Administración de Bases de datos MySQL y SQLServer.<br><br>

    Logros 🚀<br><br>

    Se realizó un frontend que mejora los tiempos de consumo y respuesta para productos de biometría y digitación utilizando en procesos electorales.`},
    {
        date: 'Feb 2020 - Oct 2021', icon: 'pi pi-check', company: 'DELTEC S.A.', title: 'Gestion De Calidad', text: `
        • Control de calidad para cada una de las inspecciones realizadas por el cuerpo Técnico.<br>
        • Creación de plataformas y formatos para el acceso de información.<br>
        • Auditorias para socialización de procesos estipulados por ENEL – CODENSA.<br>
        • Creación de scripts para encapsular y posterior gestión de la información.<br><br>

        Logros 🚀<br><br>
 
        • Contribuir en la mejora de índices de calidad de las inpecciones, una mejora de mas del 60%.<br>
        • Mejorar mis habilidades de comunicación asertiva.<br>
        • Desarrollo de sistemas para mapear y gestionar grandes volúmenes de información para determinar acciones a mejorar en el cuerpo técnico.`},
    { date: 'Ago 2019 - Ene 2020', icon: 'pi pi-check', company: 'SOFTRONE', title: 'Analista de Sistemas',text: `
    • Mantenimiento y desarrollo de requerimientos basados en: PLSQL-ORACLE, PHP, HTML, SQL, JS.<br>
    • Intervenciones con clientes para determinar ideas de negocio.` },
]);
</script>
<template>
    <div id="experience">
        <Timeline :value="events" align="alternate" class="w-full md:w-20rem">
            <template #marker="slotProps">
                <span
                    class="flex w-2rem h-2rem align-items-center justify-content-center text-white border-circle z-1 shadow-1"
                    :style="{ backgroundColor: slotProps.item.color }">
                    <i :class="slotProps.item.icon"></i>
                </span>
            </template>
            <template #content="slotProps">
                <Card class="text-sm">
                    <template #title>
                        <p  class="text-left"><strong> {{ slotProps.item.company }}</strong> {{ slotProps.item.date }}</p>
                    </template>
                    <template #text>
                        <p v-html="slotProps.item.text" class="text-left">
                        </p>
                    </template>
                </Card>
            </template>
        </Timeline>
    </div>
</template>
<style scoped></style>