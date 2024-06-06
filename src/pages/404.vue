<template>
    <Nav />
    <section class="not-found">
        <div class="container">
            <div class="not-found_inner">
                <h1>404</h1>
                <p>The page you are looking for does not exist</p>
                <RouterLink to="/">
                    <Button label="Home" class="not-found_button" />
                </RouterLink>
            </div>
        </div>
    </section>
</template>

<script>
import PageNavigation from '@/components/layout/PageNavigation.vue'
import Button from 'primevue/button'
/**
 * @module NotFoundPage editing and saving note title
 */
export default {
    name: 'NotFoundPage',
    components: {
        Button: Button,
        Nav: PageNavigation
    }
}
</script>

<style>
.not-found {
    height: calc(100vh - 160px);
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
        font-size: 5rem;
    }

    .not-found_inner {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .not-found_button {
        margin-top: 50px;
    }
}
</style>
