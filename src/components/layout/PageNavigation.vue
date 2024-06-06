<template>
    <section class="page-nav">
        <div class="container">
            <div class="page-nav_inner">
                <i class="pi pi-arrow-left" @click="$router.go(-1)" style="font-size: 1.2rem"></i>
                <!-- <i class="pi pi-arrow-right" @click="$router.go(1)" style="font-size: 1.2rem"></i> -->
            </div>
        </div>
    </section>
</template>

<style>
.page-nav {
    margin: 20px 0;

    .page-nav_inner {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .pi-arrow-left,
    .pi-arrow-right {
        cursor: pointer;

        &:hover {
            color: var(--primary-color);
        }
    }
}
</style>
