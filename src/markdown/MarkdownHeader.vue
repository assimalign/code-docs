<template>
    <h1 v-bind:class="class"><slot/></h1>
</template>
<script lang="ts" setup>
defineProps({
    class: {
        type: String
    }
})
</script>