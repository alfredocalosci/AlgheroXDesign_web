<template>
      <div class="grid grid-cols-12 gap-x-6 ">
            <div class="col-span-10 col-start-2 py-12">
                <h1 class="text-5xl">{{ props.testo }}</h1>
                
            </div>
        </div>

</template>

<script setup>
    const props = defineProps({
        testo: {
            type: String,
            default: 'default value',
            required: true
        }
    })
</script>


<style lang="scss" scoped>

</style>