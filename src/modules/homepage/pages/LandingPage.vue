<script setup>

import Banner from "../components/Banner.vue";
import Main from "../components/Main.vue";
import Navbar from "../shared/components/Navbar.vue";
import Services from "../components/Services.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
    <section class="h-auto bg-stone-950">
        <Navbar></Navbar>
        <Main></Main>
        <Services></Services>
        <Banner></Banner>
        <Footer></Footer>
    </section>
</template>