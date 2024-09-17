<script lang="js" setup>

onMounted(() => {
    chartData.value = setChartData();
    chartOptions.value = setChartOptions();
});

const chartData = ref();
const chartOptions = ref();

const setChartData = () => {
    return {
        labels: ['PHP', 'Vue.js', 'Nuxt.js', 'MySQL', 'Docker', 'Git', 'Bootstrap', 'Tailwind', 'Leaf PHP (Framework)'],
        datasets: [
            {
                data: [40, 17, 3, 10, 5, 5, 15, 2, 3],
                backgroundColor: ["#767CBA", "#43B684", "#00DF84", "#2989CD", "#7EACB5", "#000000", "#37BEF7", "#C96868", "#624E88"],
            }
        ]
    };
};

const setChartOptions = () => {
    return {
        plugins: {
            legend: {
                display: false
            },
            datalabels: {
                display: true,
                formatter: (value) => {
                    console.log(value);
                    return value + '%';
                },
            },
        }
    };
};

const skillLists = ref([
    {
        name: "Bootstrap",
        icon: "bootstrap.png",
        level: "Advanced"
    },
    {
        name: "Tailwind",
        icon: "tailwind.webp",
        level: "Intermediate"
    },
    {
        name: "Vue.js",
        icon: "vue.svg",
        level: "Intermediate"
    },
    {
        name: "Nuxt.js",
        icon: "nuxt.svg",
        level: "Beginner"
    },
    {
        name: "PHP",
        icon: "php.png",
        level: "Advanced"
    },
    {
        name: "Docker",
        icon: "docker.webp",
        level: "Beginner"
    },
    {
        name: "Git",
        icon: "github.png",
        level: "Intermediate"
    },
    {
        name: "MySQL",
        icon: "sql.png",
        level: "Intermediate"
    },
    {
        name: "Leaf PHP",
        icon: "leaf.png",
        level: "Beginner"
    },
])
</script>


<template>
    <div>
        <div class="mb-5" data-aos="fade-in">
            <h2 class="text-center text-light fw-bold fs-2 mb-2">Skills</h2>
            <p class="text-center text-light">Information about my skills.</p>
        </div>
        <div class="bg-card p-5 rounded-4" data-aos="fade-up" data-aos-delay="100">
            <div class="row g-4">
                <div class="col-lg-4 h-100" data-aos="fade-right" data-aos-delay="400">
                    <div class="h-100 d-flex justify-content-center align-items-center">
                        <Chart type="doughnut" :data="chartData" :options="chartOptions" style="height:280px;" />
                    </div>
                </div>
                <div class="col-lg-8 h-100" data-aos="fade-left" data-aos-delay="400">
                    <div class="d-flex flex-column justify-content-center align-items-center h-100">
                        <div class="row g-4">
                            <div class="col-md-4 h-100" v-for="skill in skillLists" :key="skill.name">
                                <Button
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
                                            {{ skill.level }}
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