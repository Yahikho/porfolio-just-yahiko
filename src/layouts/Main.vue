<script setup lang="ts">
import PresentationCard from '../components/PresentationCard.vue'
import Menu from './Menu.vue'
import AboutProfessional from '../views/AboutProfessional.vue'
import Footer from '../layouts/Footer.vue'
import Projects from '../views/Projects.vue'
</script>
<template>
    <main id="about-me">
        <Menu />
        <div class="lg:flex lg:px-56 px-5 sm:px-24 md:h-screen grid grid-cols-1 pt-16 sm:0">
            <div class="h-48 w-48 overflow-hidden self-center relative mx-auto ">
                <img src="/imgs/jhon.jpg" alt="Imagen Normal"
                    class="rounded-full w-full h-full object-cover transition-transform transform duration-1000 filter grayscale hover:filter-none"
                    title="¡Gracias por pasarte por aquí!" />
            </div>
            <PresentationCard />
        </div>
    </main>
    <Projects class="lg:px-56 px-5 sm:px-24"/>
    <AboutProfessional class="lg:px-56 px-5 sm:px-24 pt-2" />
    <Footer />
</template>
<style scoped></style>
