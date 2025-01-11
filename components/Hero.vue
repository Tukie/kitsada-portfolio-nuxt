<script lang="ts" setup>
import { IconDownload } from "@tabler/icons-vue"

const visible = ref(false)
</script>

<template>
    <div class="">
        <Dialog v-model:visible="visible" modal header="Download Resume" :style="{ width: '25rem' }">
            <div class="d-flex gap-3">
                <a href="/resume/resume-kitsada-butnam-en.pdf" download
                    class="w-100 p-3 rounded-4 bg-primary-c1 text-white d-flex align-items-center gap-3 fw-semibold d-flex justify-content-center">
                    <NuxtImg src="/us_flag.svg" alt="icon" class="img-fluid" width="32" height="32" />
                    EN
                </a>
                <a href="/resume/resume-kitsada-butnam-th.pdf" download 
                    class="w-100 p-3 rounded-4 bg-primary-c1 text-white d-flex align-items-center gap-3 fw-semibold d-flex justify-content-center">
                    <NuxtImg src="/thai_flag.svg" alt="icon" class="img-fluid" width="32" height="32" />
                    TH
                </a>
            </div>
        </Dialog>
    </div>
    <div class="pt-5 container d-flex flex-column flex-md-row gap-3 align-items-center justify-content-evenly"
        style="min-height:30rem">
        <div class="text-center text-md-start" data-aos="fade-in">
            <span class="mb-2 d-block">{{ $t('hero.title') }}</span>
            <h1 class="display-1 fw-bold">{{ $t('hero.name') }} <br> {{ $t('hero.lastName') }}</h1>
            <Button @click="visible = true"
                class="bg-primary-c1 text-white my-4 rounded-5 fw-semibold d-flex align-items-center gap-2 px-5 mx-auto mx-md-0">
                <IconDownload size="32" />
                <span class="fs-5">{{ $t('hero.resume') }}</span>
            </Button>
        </div>
        <div class="d-flex flex-column justify-content-center align-items-center" data-aos="fade-in">
            <NuxtImg src="/profile.png" alt="hero" class="img-fluid rounded-5 img-profile" width="350" height="350"
                sizes="100vw sm:50vw md:400px" placeholder />
        </div>
    </div>
</template>

<style scoped>
.img-profile {
    transition: all .2s ease-in-out;
}

.img-profile:hover {
    scale: 1.05;
    box-shadow: 0 0 50px var(--primary-color);
}
</style>
