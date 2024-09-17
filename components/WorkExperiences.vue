<script lang="js" setup>
const calBetweenTwoDate = (date1, date2) => {
    // Ensure date1 is the earlier date and date2 is the later date
    if (date1 > date2) {
        [date1, date2] = [date2, date1];
    }

    // Get the year, month, and day from the dates
    const year1 = date1.getFullYear();
    const month1 = date1.getMonth();
    const day1 = date1.getDate();

    const year2 = date2.getFullYear();
    const month2 = date2.getMonth();
    const day2 = date2.getDate();

    let years = year2 - year1;
    let months = month2 - month1;
    let days = day2 - day1 + 1;

    // Adjust for negative months
    if (months < 0) {
        years -= 1;
        months += 12;
    }

    // Adjust for negative days
    if (days < 0) {
        months -= 1;
        const lastMonthDate = new Date(year2, month2, 0);
        days += lastMonthDate.getDate();
    }

    let result = "";

    if (years > 0) {
        result += `${years} Years `;
    }

    if (months > 0) {
        result += `${months} Months `;
    }

    result += `${days} Days`;

    // Return the result as a string
    return result;
}

const workExperiences = ref([
    {
        dateRange: "July 10, 2566 - Present",
        companyName: "Vanness Plus Consulting Co., Ltd.",
        position: "Programmer",
        responsibilities: "Build and implement fully functional websites using modern programming languages (PHP, Vue, Nuxt, MySQL), ensuring responsiveness, scalability, and performance. Design intuitive and visually appealing user interfaces, focusing on user experience (UX) and user-centered design principles to improve usability and functionality. Write comprehensive user guides and documentation, providing step-by-step instructions and troubleshooting tips for end users and team members. Ensure ongoing website functionality through regular maintenance, security updates, performance optimization, and resolving technical issues promptly.",
        length: calBetweenTwoDate(new Date(2023, 6, 10), new Date())
    },
    {
        dateRange: "April 1, 2565 - June 17, 2565",
        companyName: "BANK FOR AGRICULTURE AND AGRICULTURAL COOPERATIVES, BANGKOK, THAILAND (BAAC)",
        position: "Internship student",
        responsibilities: "Customer Service Opening new accounts for customers. Processing ATM card applications, including A-GEN cards and gold cards. Assisting customers with the A-Mobile application and Mobile Banking application of the bank. Support Functions for Financial Services: Printing and photocopying documents. Handling cash boxes for ATM replenishment. Support Functions for Credit Services: Printing invoice statements and folding them. Data entry for insurance applications, Taweesap 99, and Morakot Cooperative.",
        length: calBetweenTwoDate(new Date(2023, 3, 1), new Date(2023, 5, 17))
    },
])

</script>

<template>
    <div>
        <div class="mb-5" data-aos="fade-in">
            <h2 class="text-center text-dark-light fw-bold fs-2 mb-2">Work experience</h2>
            <p class="text-center text-dark-light">Information about my work history.</p>
        </div>
        <div class="d-none d-lg-block">
            <Timeline :value="workExperiences" align="alternate" class="w-100">
                <template #content="slotProps">
                    <div class=" d-flex align-items-center gap-3 p-5 shadow rounded-4" data-aos="fade-up"
                        data-aos-delay="200">
                        <div class="">
                            <span class="fw-bold d-block mb-3 bg-primary-c1 text-white p-2 rounded-5 text-center">
                                {{ slotProps.item.dateRange }}

                                <span>({{ slotProps.item.length }})</span>
                            </span>
                            <span class="fw-bold d-block mb-1 fs-5"> {{ slotProps.item.companyName }}</span>
                            <span class="text-dark-light d-block mb-2 fw-semibold">
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
            <div class=" d-flex align-items-center gap-3 p-5 shadow rounded-4" data-aos="fade-right"
                data-aos-delay="200" v-for="workExp in workExperiences" :key="workExp.companyName">
                <div class="">
                    <span class="fw-bold d-block mb-3 bg-primary-c1 text-white p-2 rounded-5 text-center">
                        {{ workExp.dateRange }}
                        <span>({{ workExp.length }})</span>
                    </span>
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
