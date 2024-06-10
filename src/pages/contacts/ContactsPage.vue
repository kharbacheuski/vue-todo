<template>
    <Nav />
    <section class="contacts">
        <div class="container">
            <div class="contacts_inner">
                <h1>Do you want contact me?</h1>

                <p>My name is <b>Kiryl Harbacheuski</b>. I am a Frontend Developer</p>
                <p>
                    You can write to me by email
                    <a href="mailto:k.harbacheuski@gmail.com">k.harbacheuski@gmail.com</a> or
                    contact me in another way, using the links below
                </p>
                <p>Also you can see my <a href="https://kh.peabody28.com/">portfolio </a></p>

                <div class="links">
                    <a href="https://www.instagram.com/k.harbacheuski/">
                        <i class="pi pi-instagram"></i>
                    </a>

                    <a href="mailto:k.harbacheuski@gmail.com">
                        <i class="pi pi-envelope"></i>
                    </a>

                    <a href="https://github.com/kharbacheuski/">
                        <i class="pi pi-github"></i>
                    </a>
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
