<script setup lang="ts">
</script>
<template>
    <div class="shadow-md shadow-green-500 p-5 rounded-lg">
        <div class="flex-1">
            <slot name="title" />
        </div>
        <div class="mt-2">
            <slot name="text" />
        </div>
        <div class="mt-2 lg:grid-cols-3 grid grid-cols-2 gap-2 items-center">
            <slot name="tags" />
        </div>
    </div>
</template>