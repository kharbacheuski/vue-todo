<template>
    <Nav />
    <section class="calculator">
        <div class="container">
            <div class="calculator_inner">
                <h2>Сalculator!</h2>
            </div>
        </div>
    </section>
</template>

<script>
import PageNavigation from '@/components/layout/PageNavigation.vue'
import Button from 'primevue/button'
/**
 * @module CalculatorPage editing and saving note title
 */
export default {
    name: 'CalculatorPage',
    components: {
        Button: Button,
        Nav: PageNavigation
    },
    data() {
        return {
            value: ''
        }
    }
}
</script>
