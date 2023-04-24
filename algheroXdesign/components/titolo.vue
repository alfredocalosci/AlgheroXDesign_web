<template>
      <div class="grid grid-cols-12 gap-x-6 ">
            <div class="px-5 col-span-10 col-start-1 sm:col-start-1 sm:px-0 py-12">
                <h1>{{ props.titoloPagina }}</h1>
            </div>
        </div>

</template>

<script setup lang="ts">
    const props = defineProps({
        titoloPagina: {
            type: String,
            default: 'default value',
            required: true
        }
    })
</script>

<script lang="ts">
    
    export default {
        data() {
        return {
            testo: 'default value',
        }
    },
    }
</script>


<style lang="scss" scoped>

</style>