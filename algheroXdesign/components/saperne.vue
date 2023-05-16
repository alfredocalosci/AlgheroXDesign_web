<template>
    <div id="modulo" class="col-span-8 col-start-3 border-t border-black pt-12">
        <p class="text-4xl px-6">Vuoi saperne di più? Scopri la storia del corso di design, i <NuxtLink to="/docenti">docenti</NuxtLink> e le materie del <NuxtLink to="/piano-studi">piano di studi</NuxtLink>.</p>
    </div>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>
#modulo{
        background-image: url("@/assets/img/axd_gray.svg");
    // background-color: #cccccc;
  // height: 500px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 90% auto;
    position: relative;

    padding-bottom: 3rem;

        p{
            letter-spacing: -0.05em;
            line-height: 2.75rem;
        }
        
    }
</style>