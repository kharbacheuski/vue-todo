<template>
    <Nav />
    <section class="about">
        <div class="container">
            <div class="about_inner">
                <h1>About</h1>

                <p>This project was created using <b>Vue + Vite</b></p>
                <p>
                    This is my first Vue project and perhaps you will find some errors in it if you
                    go to my <a href="https://github.com/kharbacheuski/vue-todo">github</a>, you can
                    also give this project a star
                </p>

                <p>
                    In addition to Vue itself, the project uses the <b>vue-router</b> library and
                    the primevue component <b>primevue</b>
                </p>

                <div class="tags">
                    <Tag severity="success" value="Vue.js"></Tag>
                    <Tag severity="warning" value="Primevue"></Tag>
                    <Tag severity="secondary" value="Vite"></Tag>
                    <Tag severity="primary" value="Typescript"></Tag>
                    <Tag severity="danger" value="Vue Router"></Tag>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import PageNavigation from '@/components/layout/PageNavigation.vue'
import Button from 'primevue/button'
import Tag from 'primevue/tag'
import './style.scss'
/**
 * @module AboutPage editing and saving note title
 */
export default {
    name: 'AboutPage',
    components: {
        Button: Button,
        Nav: PageNavigation,
        Tag: Tag
    },
    data() {
        return {
            value: ''
        }
    }
}
</script>
