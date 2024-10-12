<script lang="js" setup>

const projects = ref([
    {
        name: "project1.title",
        image: "project1.png",
        link: "https://bung-kan-community-learning-center.vercel.app/",
    },
    {
        name: "project2.title",
        image: "project2.png",
        link: "http://time-ad-pj.rf.gd/Time-ad-PJ/landing.php",
    },
])

const openLink = (link) => {
    window.open(link, "_blank")
}
</script>

<template>
    <div>
            <div class="mb-5" data-aos="fade-in">
                <h2 class="text-center text-dark-light fw-bold fs-2 mb-2">{{ $t('project.title') }}</h2>
                <p class="text-center text-dark-light">{{ $t('project.description') }}</p>
            </div>
            <div class="row g-4">
                <div class="col-lg-6" v-for="project in projects" :key="project.name" data-aos="fade-up" data-aos-delay="200">
                    <div class="w-100 rounded-4 overflow-hidden shadow">
                        <div class="" style="height: 300px;">
                            <NuxtImg :src="project.image" alt="" class="img-fluid w-100 h-100 object-fit-cover"
                                placeholder height="300" fit="cover" />
                        </div>
                        <div class="my-5 text-center">
                            <span class="fw-bold mb-4 fs-5 d-block">{{ $t(`project.${project.name}`) }}</span>
                            <Button @click="openLink(project.link)"
                                class="bg-primary-c1 text-white my-3 rounded-5 fw-semibold d-flex align-items-center gap-2 d-inline-block m-auto px-5">
                                <span class="fs-5">{{ $t('project.view') }}</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>
