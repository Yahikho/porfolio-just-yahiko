<script setup lang="ts">

interface Props {
    width: number

}
</script>
<template>
    <div class="shadow-sm shadow-green-500 p-5 rounded-lg">
        <div>
            <slot name="title" />
        </div>
        <div class="">
            <slot name="text" />
        </div>
        <div>
            <slot name="tags" />
        </div>
    </div>
</template>