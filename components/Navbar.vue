<script setup>
import { IconMenu2 } from "@tabler/icons-vue"
const navItems = ref([
    {
        name: "About",
        to: "#about",
    },
    {
        name: "Experience",
        to: "#experience",
    },
    {
        name: "Skills",
        to: "#skills",
    },
    {
        name: "Projects",
        to: "#projects",
    },
    {
        name: "Contact",
        to: "#contact",
    },
])

const currentSection = ref(null)
const openSidebar = ref(false)

</script>

<template>

    <Drawer v-model:visible="openSidebar" header="KITSADA">
        <div class=" ">
            <div class="d-flex flex-column text-decoration-none list-unstyled p-0 m-0 gap-2">
                <a :href="nav.to" class="text-dark text-decoration-none py-2 px-4 rounded-5 fw-semibold nav-items"
                    :class="{ 'active-nav': currentSection === nav.name }" @click="currentSection = nav.name"
                    v-for="nav in navItems" :key="nav.name">
                    {{ nav.name }}
                </a>
            </div>
        </div>
    </Drawer>

    <nav class="w-100 py-2 nav-bg position-fixed top-0 z-3">
        <div class="container d-flex justify-content-between align-items-center">
            <div class="d-flex justify-content-between align-items-center gap-2">
                <Button @click="openSidebar = true" class="p-0 m-0 border-0 bg-transparent d-lg-none">
                    <IconMenu2 size="24" stroke="1.4" class="text-dark-light" />
                </Button>
                <p class="fs-5 fw-semibold text-primary-c1">KITSADA</p>
            </div>


            <div class="d-flex text-decoration-none list-unstyled p-0 m-0 gap-2 d-none d-lg-flex">
                <a :href="nav.to" class="text-dark-light text-decoration-none py-2 px-4 rounded-5 nav-items"
                    :class="{ 'active-nav': currentSection === nav.name }" @click="currentSection = nav.name"
                    v-for="nav in navItems" :key="nav.name">
                    {{ nav.name }}
                </a>
            </div>

            <div class="d-flex align-items-center gap-3">
                <a href="https://github.com/Tukie" class="text-dark-light" target="_blank">
                    <NuxtImg src="/github.png" alt="github" width="24" height="24" class="bg-white rounded-circle" />
                </a>
                <LangSwitch />
                <SwitchDarkMode />
            </div>
        </div>
    </nav>
</template>

<style scoped>
.nav-bg {
    background-color: var(--bg-nav);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
}

.nav-items {
    transition: all 0.3s ease-in-out;
}

.active-nav {
    background-color: var(--primary-color);
    color: #ffff !important;
}
</style>
