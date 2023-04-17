<template>
      <div class="grid grid-cols-12 gap-x-6 ">
            <div class="col-span-10 col-start-2 py-12">
                <h1 class="text-5xl">{{ props.titoloPagina }}</h1>
                
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