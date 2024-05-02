<script setup lang="ts">
import Card from '../components/Card.vue'
import Experience from './Experience.vue'
</script>
<template>
    <div id="abaout-professional">
        <h3 class="text-green-500 text-2xl">Como Profecional.</h3>
        <Card class="mt-2">
            <template #text>
                <article>
                    Desarrollador web Full-Stack con más de 3 años experticia en creación de soluciones para la gestión
                    de la
                    información,
                    participe de iniciativas la para mejora de procesos y creación de novedades en el desarrollo de
                    software,
                    habilidades técnicas en BackEnd (PHP, Laravel, TypeScript, SQL(T-SQL),
                    Node.js y Nest.js), FrontEnd (Tailwind.css, Vue.js y jQuery), GIT y Linux, con mucha iniciativa a la hora de
                    tomar
                    riesgos y propositivo a raíz de mi experiencia.
                </article>
            </template>
        </Card>
        <h3 class="text-green-500 text-2xl mt-4">Experiencia.</h3>
        <Experience class="mt-4"/>
    </div>
</template>