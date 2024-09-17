<script lang="js" setup>
import { IconMoonFilled, IconBrightnessDownFilled } from "@tabler/icons-vue"

const colorMode = useColorMode()
const mode = ref("light")

const toggleColorMode = () => {
    if (colorMode.preference === "light") {
        colorMode.preference = "dark"
        mode.value = "dark"
    } else {
        colorMode.preference = "light"
        mode.value = "light"
    }
}

setTimeout(() => {
    mode.value = colorMode.preference
}, 100)

</script>

<template>
    <!-- Dark Mode -->
    <Button class="bg-transparent rounded-circle border-0 p-0" @click="toggleColorMode()" title="Toggle Dark Mode">
        <IconBrightnessDownFilled size="24" stroke="1.5" class="text-light" v-cloak v-if="mode === 'dark'" />
        <IconMoonFilled size="24" stroke="1.5" class="text-primary-c1" v-cloak v-else />
    </Button>
</template>
