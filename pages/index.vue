<template>
    <section class="my-5">
        <Hero />
    </section>
    <section class="mb-5 bg-section" id="about">
        <NuxtLayout name="section">
            <About />
        </NuxtLayout>
    </section>
    <section class="mb-5" id="experience">
        <NuxtLayout name="section">
            <WorkExperiences />
        </NuxtLayout>
    </section>
    <section class="mb-5 bg-section" id="skills">
        <NuxtLayout name="section">
            <Skills />
        </NuxtLayout>
    </section>
    <section class="mb-5" id="projects">
        <NuxtLayout name="section">
            <Project />
        </NuxtLayout>
    </section>
    <section class=" bg-section" id="contact">
        <NuxtLayout name="section">
            <Contact />
        </NuxtLayout>
    </section>
</template>