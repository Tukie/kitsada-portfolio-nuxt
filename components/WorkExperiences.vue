<script lang="js" setup>
const workExperiences = ref([
    {
        dateRange: "July 10, 2566 - Present",
        companyName: "Vanness Plus Consulting Co., Ltd.",
        position: "Programmer",
        responsibilities: "Build and implement fully functional websites using modern programming languages (PHP, Vue, Nuxt, MySQL), ensuring responsiveness, scalability, and performance. Design intuitive and visually appealing user interfaces, focusing on user experience (UX) and user-centered design principles to improve usability and functionality. Write comprehensive user guides and documentation, providing step-by-step instructions and troubleshooting tips for end users and team members. Ensure ongoing website functionality through regular maintenance, security updates, performance optimization, and resolving technical issues promptly.",
    },
    {
        dateRange: "April 1, 2565 - June 17, 2565",
        companyName: "BANK FOR AGRICULTURE AND AGRICULTURAL COOPERATIVES, BANGKOK, THAILAND (BAAC)",
        position: "Internship student",
        responsibilities: "Customer Service Opening new accounts for customers. Processing ATM card applications, including A-GEN cards and gold cards. Assisting customers with the A-Mobile application and Mobile Banking application of the bank. Support Functions for Financial Services: Printing and photocopying documents. Handling cash boxes for ATM replenishment. Support Functions for Credit Services: Printing invoice statements and folding them. Data entry for insurance applications, Taweesap 99, and Morakot Cooperative.",
    },
])


</script>

<template>
    <div>
        <div class="mb-5"  data-aos="fade-in">
            <h2 class="text-center text-dark-light fw-bold fs-2 mb-2">Work experience</h2>
            <p class="text-center text-dark-light">Information about my work history.</p>
        </div>
        <div class="d-none d-lg-block">
            <Timeline :value="workExperiences" align="alternate" class="w-100">
                <template #content="slotProps">
                    <div class=" mb-5 d-flex align-items-center gap-3 p-5 shadow rounded-4"  data-aos="fade-up" data-aos-delay="200">
                        <div class="">
                            <span class="fw-bold d-block mb-3 bg-primary-c1 text-white p-2 rounded-5 text-center">
                                {{ slotProps.item.dateRange }}</span>
                            <span class="fw-bold d-block mb-1 fs-5"> {{ slotProps.item.companyName }}</span>
                            <span class="text-dark-light d-block mb-1 fw-semibold">
                                {{ slotProps.item.position }}
                            </span>
                            <hr />
                            <span class="text-dark-light d-block" style="font-size: .9rem;">
                                {{ slotProps.item.responsibilities }}
                            </span>
                        </div>
                    </div>
                </template>
            </Timeline>
        </div>
        <div class="d-block d-lg-none">
            <div class=" mb-5 d-flex align-items-center gap-3 p-5 shadow rounded-4"  data-aos="fade-right" data-aos-delay="200" v-for="workExp in workExperiences"
                :key="workExp.companyName">
                <div class="">
                    <span class="fw-bold d-block mb-3 bg-primary-c1 text-white p-2 rounded-5 text-center">
                        {{ workExp.dateRange }}</span>
                    <span class="fw-bold d-block mb-1 fs-5"> {{ workExp.companyName }}</span>
                    <span class="text-dark-light d-block mb-1 fw-semibold">
                        {{ workExp.position }}
                    </span>
                    <hr />
                    <span class="text-dark-light d-block" style="font-size: .9rem;">
                        {{ workExp.responsibilities }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>
