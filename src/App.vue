<template>
    <RouterView v-slot="{ Component, route }">
        <transition name="fade" mode="out-in">
            <div :class="getClass(route.path)" :key="route.path">
                <component :key="route.path" :is="Component" />
            </div>
        </transition>
    </RouterView>
</template>

<script>
import Header from '@/components/layout/Header.vue'

/**
 * @module App
 */
export default {
    name: 'App',
    components: {
        Header: Header
    },
    methods: {
        getClass(path) {
            let route = path.replace('/', '')
            if (route == '') route = 'home'

            return 'page-' + route
        }
    }
}
</script>
