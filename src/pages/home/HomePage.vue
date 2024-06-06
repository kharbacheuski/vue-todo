<template>
    <section class="home">
        <div class="container">
            <div class="home_inner">
                <h1>Select tab</h1>
                <div class="home_tabs">
                    <RouterLink class="card-link" to="/notes">
                        <article class="card">
                            <h3 class="card_title">Notes</h3>
                            <p class="card_description">
                                You can create and store your imporrtant notes
                            </p>
                        </article>
                    </RouterLink>

                    <RouterLink class="card-link" to="/calculator">
                        <article class="card">
                            <h3 class="card_title">Calculator</h3>
                            <p class="card_description">Calculate your math</p>
                        </article>
                    </RouterLink>

                    <RouterLink class="card-link" to="/about">
                        <article class="card">
                            <h3 class="card_title">About</h3>
                            <p class="card_description">Read about the project</p>
                        </article>
                    </RouterLink>

                    <RouterLink class="card-link" to="/contacts">
                        <article class="card">
                            <h3 class="card_title">Contacts</h3>
                            <p class="card_description">You can contact me here</p>
                        </article>
                    </RouterLink>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import './style.scss'
/**
 * @module Home list of all user notes
 */
export default {
    name: 'Home'
}
</script>
