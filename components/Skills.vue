<script lang="js" setup>
const skillLists = ref([
    {
        name: "Bootstrap",
        icon: "bootstrap.png",
        href: "https://getbootstrap.com/",
        level: "advanced"
    },
    {
        name: "Tailwind",
        icon: "tailwind.webp",
        href: "https://tailwindcss.com/",
        level: "intermediate"
    },
    {
        name: "Vue.js",
        icon: "vue.svg",
        href: "https://vuejs.org/",
        level: "intermediate"
    },
    {
        name: "Nuxt.js",
        icon: "nuxt.svg",
        href: "https://nuxt.com/",
        level: "beginner"
    },
    {
        name: "PHP",
        icon: "php.png",
        href: "https://www.php.net/",
        level: "advanced"
    },
    {
        name: "Hono.js",
        icon: "hono.png",
        href: "https://hono.dev/",
        level: "beginner"
    },
    {
        name: "Git",
        icon: "github.png",
        href: "https://github.com/",
        level: "intermediate"
    },
    {
        name: "MySQL",
        icon: "sql.png",
        href: "https://www.mysql.com/",
        level: "intermediate"
    },
    {
        name: "Leaf PHP",
        icon: "leaf.png",
        href: "https://leafphp.dev/",
        level: "beginner"
    },
    {
        name: "Express.js",
        icon: "express.webp",
        href: "https://expressjs.com/",
        level: "beginner"
    },
    {
        name: "Sequelize",
        icon: "sequelize.svg",
        href: "https://sequelize.org/",
        level: "beginner"
    },
])

const openLink = (url) => {
    window.open(url, '_blank');
}
</script>


<template>
    <div>
        <div class="mb-5" data-aos="fade-in">
            <h2 class="text-center text-light fw-bold fs-2 mb-2">
                {{ $t('skills.title') }}
            </h2>
            <p class="text-center text-light">
                {{ $t('skills.description') }}
            </p>
        </div>
        <div class="bg-card p-5 rounded-4" data-aos="fade-up" data-aos-delay="100">
            <div class="row g-4">
                <div class="col-12 h-100" data-aos="fade-up" data-aos-delay="400">
                    <div class="d-flex flex-column justify-content-center align-items-center h-100">
                        <div class="row g-4">
                            <div class="col-md-4 h-100" v-for="skill in skillLists" :key="skill.name">
                                <Button @click="openLink(skill.href)"
                                    class=" w-100 d-flex align-items-center justify-content-start gap-3 text-start border-0 bg-transparent">
                                    <div class="bg-icon p-2 rounded-3 text-primary-c1 d-flex  align-items-center position-relative flex-shrink-0"
                                        style="width: 60px; height: 60px">
                                        <NuxtImg :src="`/${skill.icon}`" alt="icon" class="img-fluid object-fit-contain"
                                            width="60" format="webp" placeholder />
                                    </div>
                                    <div class="">
                                        <span class="fw-bold d-block mb-1 text-dark-light">
                                            {{ skill.name }}
                                        </span>
                                        <span class="text-dark-light d-block">
                                            {{ $t(`skills.level.${skill.level}`) }}
                                        </span>
                                    </div>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>