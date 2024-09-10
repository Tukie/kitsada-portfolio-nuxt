<script lang="ts" setup>
import { IconDownload } from "@tabler/icons-vue"
</script>

<template>
    <div class="pt-5 container d-flex flex-column flex-md-row gap-3 align-items-center justify-content-evenly"
        style="min-height:30rem">
        <div class="text-center text-md-start" data-aos="fade-in">
            <span class="mb-2 d-block">Welcome to My portfolio Website I'm</span>
            <h1 class="display-1 fw-bold">Kitsada <br> Butnam</h1>
            <Button
                class="bg-primary-c1 text-white my-4 rounded-5 fw-semibold d-flex align-items-center gap-2 d-block m-auto d-md-inline-block px-5">
                <IconDownload size="32" />
                <span class="fs-5">Resume</span>
            </Button>
        </div>
        <div class="d-flex flex-column justify-content-center align-items-center" data-aos="fade-in">
            <NuxtImg src="/profile.png" alt="hero" class="img-fluid rounded-5" width="350" height="350"
                sizes="100vw sm:50vw md:400px" placeholder />
        </div>
    </div>
</template>
