<script lang="js" setup>
const selectedLang = ref("EN");
const { locale, setLocale } = useI18n()

const toggleLang = () => {
    if (selectedLang.value === 'TH') {
        selectedLang.value = 'EN';
        setLocale('th')
    } else {
        selectedLang.value = 'TH';
        setLocale('en')
    }
}
</script>

<template>
    <div>
        <Button class="bg-primary-c1 py-1 px-3 border-0 text-white rounded-5 border-0" title="Toggle Language"
            @click="toggleLang()">
            {{ selectedLang }}
        </Button>
    </div>
</template>
