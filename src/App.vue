<template>
    <RouterView />
</template>

<script>
import { RouterView } from 'vue-router'
import Header from '@/components/layout/Header.vue'
/**
 * @module App
 */
export default {
    name: 'App',
    components: {
        Header: Header
    }
}
</script>
