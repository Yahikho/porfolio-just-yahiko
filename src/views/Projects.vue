<script setup lang="ts">
import { ref, Ref } from 'vue'
import Card from '../components/Card.vue'

const visibleModal = ref(false)
const listImgs: Ref<string[]> = ref([])
const projects = ref([
    {
        name: 'Self-Money | 2021',
        description: `Una SPA creada en <strong class="text-green-500">Laravel</strong> su principal función de la app es mostrar y personalizar los ingresos y egresos de un usuario.`,
        skils: ['Laravel 8', 'SQL Server', 'Livewire', 'Laravel Sanctum'],
        imgs: ['/imgs/self-money.png', '/imgs/self-money-1.png', '/imgs/self-money-2.png'],
        url: 'https://github.com/Yahikho/self_money_livewire/tree/master'
    },
    {
        name: 'SPA Imagine | 2022 / Actualidad',
        description: `Una SPA tipo Rest-API construida con <strong class="text-green-500">Nest.js</strong> para la gestión de documentos y la administración de usuarios roles y menús.`,
        skils: ['Nest.js', 'Postgres', 'JWT', 'TypeORM', 'Vue 3', 'Tailwind', 'Pinea', 'Vue Router', 'PrimeVue'],
        imgs: ['/imgs/imagine.png', '/imgs/imagine2.png', '/imgs/imagine3.png'],
        url: ''
    },
    {
        name: 'BoxDinner | 2022',
        description: `Una SPA tipo Rest-API construida con <strong class="text-green-500">Node.js (Express)</strong> para el manejo de caja registradora.`,
        skils: ['Node.js', 'MySQL', 'Express', 'Prisma', 'Vue 3', 'Tailwind', 'Vue Router'],
        imgs: ['/imgs/boxdinner.png', '/imgs/boxdinner1.png', '/imgs/boxdinner2.png'],
        url: 'https://github.com/Yahikho/boxdinner/tree/master'
    },
])
const responsiveOptions = ref([
    {
        breakpoint: '1500px',
        numVisible: 5
    },
    {
        breakpoint: '1024px',
        numVisible: 3
    },
    {
        breakpoint: '768px',
        numVisible: 2
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
]);

const createListImgs = (id: number) => {
    visibleModal.value = true
    listImgs.value = projects.value[id].imgs
}

</script>
<template>
    <div id="projects">
        <h3 class="text-green-500 text-2xl">Lista de Proyectos.</h3>
        <div class="grid grid-cols-1 gap-6 lg:grid-cols-3 md:grid-cols-2 mt-2">
            <Card v-for="(item, index) in projects" v-bind:key="index">
                <template #title>
                    <p class="pb-4 flex gap-8 items-center"><strong class="text-green-500">{{ item.name }}
                        </strong><a :href="item.url" target="_blank" title="Code"><i v-if="item.url"
                                class="pi pi-github text-2xl hover:text-green-500 cursor-pointer"></i></a>
                    </p>
                    <div class="d px-9">
                        <img :src="item.imgs[0]" alt="img-self-money" class="rounded-lg w-full cursor-pointer"
                            @click="createListImgs(index)">
                    </div>
                </template>
                <template #text>
                    <p v-html="item.description"></p>
                </template>
                <template #tags>
                    <div v-for="(tag, indexTag) in item.skils" v-bind:key="indexTag" class="rounded-lg border-2 border-green-500 shadow-sm shadow-green-500">
                        <p class="text-center px-2 text-sm ">{{ tag }}</p>
                    </div>
                </template>
            </Card>
        </div>
        <div class="card flex justify-content-center">
            <Galleria v-model:visible="visibleModal" :value="listImgs" :responsiveOptions="responsiveOptions" :numVisible="9" containerStyle="max-width: 80%" :circular="true" :fullScreen="true" :showItemNavigators="true"  :showThumbnails="false">
            <template #item="slotProps">
                <img :src="slotProps.item" :alt="slotProps.item.alt" style="width: 100%; display: block" />
            </template>
            <template #thumbnail="slotProps">
                <img :src="slotProps.item" :alt="slotProps.item.alt" style="display: block" />
            </template>
        </Galleria>
        </div>
    </div>
</template>