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
        dateRange: "workExperience.experience1.dateRange",
        companyName: "workExperience.experience1.companyName",
        position: "workExperience.experience1.position",
        responsibilities: "workExperience.experience1.responsibilities",
        length: calBetweenTwoDate(new Date(2023, 6, 10), new Date())
    },
    {
        dateRange: "workExperience.experience2.dateRange",
        companyName: "workExperience.experience2.companyName",
        position: "workExperience.experience2.position",
        responsibilities: "workExperience.experience2.responsibilities",
        length: calBetweenTwoDate(new Date(2022, 3, 1), new Date(2022, 5, 17))
    },
])

</script>

<template>
    <div>
        <div class="mb-5" data-aos="fade-in">
            <h2 class="text-center text-dark-light fw-bold fs-2 mb-2">
                {{ $t('workExperience.title') }}
            </h2>
            <p class="text-center text-dark-light">
                {{ $t('workExperience.description') }}
            </p>
        </div>
        <div class="d-none d-lg-block">
            <Timeline :value="workExperiences" align="alternate" class="w-100">
                <template #content="slotProps">
                    <div class=" d-flex align-items-center gap-3 p-5 shadow rounded-4" data-aos="fade-up"
                        data-aos-delay="200">
                        <div class="">
                            <span class="fw-bold d-block mb-3 bg-primary-c1 text-white p-2 rounded-5 text-center">
                                {{ $t(slotProps.item.dateRange) }}

                                <span>({{ slotProps.item.length }})</span>
                            </span>
                            <span class="fw-bold d-block mb-1 fs-5"> {{ $t(slotProps.item.companyName) }}</span>
                            <span class="text-dark-light d-block mb-2 fw-semibold">
                                {{ $t(slotProps.item.position) }}
                            </span>
                            <hr />
                            <span class="text-dark-light d-block" style="font-size: .9rem;">
                                {{ $t(slotProps.item.responsibilities) }}
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
                        {{ $t(workExp.dateRange) }}
                        <span>({{ workExp.length }})</span>
                    </span>
                    <span class="fw-bold d-block mb-1 fs-5"> {{ $t(workExp.companyName) }}</span>
                    <span class="text-dark-light d-block mb-1 fw-semibold">
                        {{ $t(workExp.position) }}
                    </span>
                    <hr />
                    <span class="text-dark-light d-block" style="font-size: .9rem;">
                        {{ $t(workExp.responsibilities) }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>
