<script lang="js" setup>

import { IconUser, IconPhone, IconMail, IconAt, IconWorldWww, IconSchool, IconOld } from "@tabler/icons-vue"

const personalDetails = ref([
    {
        title: "name",
        text: ``,
        icon: IconUser
    },
    {
        title: "age",
        text: `${new Date().getFullYear() - 2000}`,
        icon: IconOld
    },
    {
        title: "phone",
        text: "061 050 1728",
        icon: IconPhone
    },
    {
        title: "email",
        text: "sadawutsunee.2885@gmail.com",
        icon: IconMail
    },
    {
        title: "lineId",
        text: "nookkitsada1",
        icon: IconAt
    },
])

const educationDetails = ref([
    {
        title: "highSchoolTitle",
        text: "highSchoolText",
        icon: IconSchool
    },
    {
        title: "universityTitle",
        text: "universityText",
        icon: IconSchool
    },
])

</script>

<template>
    <div class="mb-5" data-aos="fade-in">
        <h2 class="text-center text-light fw-bold fs-2 mb-2">{{ $t('about.title') }}</h2>
        <p class="text-center text-light">{{ $t('about.description') }}</p>
    </div>
    <div class="row g-4">

        <div class="col-lg-6" data-aos="fade-right" data-aos-delay="200">
            <div class="p-5 rounded-4 bg-card h-100">
                <h3 class="bg-primary-c1 text-white p-3 fs-5 fw-semibold rounded-5 text-center mb-4">
                    {{ $t('about.personalInformation') }}
                </h3>

                <div class="mb-3 d-flex align-items-center gap-3" v-for="personal in personalDetails"
                    :key="personal.title">
                    <div class="bg-icon p-2 rounded-3 text-primary-c1 d-flex justify-content-center align-items-center"
                        style="width: 60px; height: 60px">
                        <component :is="personal.icon" size="34" />
                    </div>
                    <div class="">
                        <span class="fw-bold d-block mb-1">
                            {{ $t(`about.${personal.title}`) }}
                        </span>
                        <span class="text-dark-light d-block" style="word-break: break-all;">
                            <span v-if="personal.title === 'name'">{{ $t('about.nameText') }}</span>
                            <span v-else>{{ personal.text }}</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-lg-6" data-aos="fade-left" data-aos-delay="400">
            <div class="p-5 rounded-4 bg-card h-100">
                <h3 class="bg-primary-c1 text-white p-3 fs-5 fw-semibold rounded-5 text-center mb-4">
                    {{ $t('about.educationInformation') }}
                </h3>

                <div class="mb-3 d-flex align-items-center gap-3" v-for="(education, index) in educationDetails"
                    :key="education.title">
                    <div class="bg-icon p-1 rounded-3 text-primary-c1 d-flex justify-content-center align-items-center position-relative"
                        :class="{ 'time-line': index !== educationDetails.length - 1 }"
                        style="width: 60px; height: 60px">
                        <component :is="education.icon" size="34" />
                    </div>
                    <div class="">
                        <span class="fw-bold d-block mb-1">{{ $t(`about.education.${education.title}`) }}</span>
                        <span class="text-dark-light d-block">{{ $t(`about.education.${education.text}`) }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.time-line::before {
    position: absolute;
    width: 3px;
    height: 20px;
    content: "";
    bottom: 0;
    background-color: rgb(255, 255, 255, 0.4);
    transform: translateY(20px);
    z-index: 0;
}
</style>