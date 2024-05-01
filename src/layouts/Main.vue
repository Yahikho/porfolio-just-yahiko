<script setup lang="ts">
import PresentationCard  from '../components/PresentationCard.vue'
</script>
<template>
    <main class="lg:flex lg:px-56 px-5 sm:px-24 h-screen grid grid-cols-1">
        <div class="h-48 w-48 overflow-hidden self-center relative mx-auto">
            <img src="/imgs/yahiko.jpg" alt="Imagen Normal"
                class="rounded-full w-full h-full object-cover transition-transform transform duration-1000 hover:rotate-45 filter grayscale hover:filter-none " />
            <img src="/imgs/2.png" alt="Imagen Hover"
                class="rounded-full absolute top-0 left-0 w-full h-full object-cover opacity-0 duration-1000 transition-opacity hover:opacity-100"
                title="¡Gracias por pasarte por aquí!" />
        </div>
        <PresentationCard />
    </main>
</template>
