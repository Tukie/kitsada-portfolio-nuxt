<script lang="js" setup>
const selectedLang = ref("EN");

const toggleLang = () => {
    if (selectedLang.value === 'TH') {
        selectedLang.value = 'EN';
    } else {
        selectedLang.value = 'TH';
    }
}
</script>

<template>
    <div>
        <Button class="bg-primary-c1 py-1 px-3 border-0 text-white rounded-5 border-0"
            @click="toggleLang()">
            {{ selectedLang }}
        </Button>
    </div>
</template>
