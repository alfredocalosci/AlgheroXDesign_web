<template>
    <div class="px-4 border-b border-black">
        <div  id="holder" class="container  md:mx-auto py-2">

            <div  class="flex justify-between">
                <img src="~assets/img/logo_architecture_at_alghero.jpg" alt="architettura ad alghero" class="h-8 mt-1">
            
                <div class="grow">
                    <p class="text-2xl mt-1 text-center hover:opacity-30">
                        <NuxtLink to="/" @click.native="closeNav()">
                        AlgheroXDesign
                        </NuxtLink>
                    </p>
                </div>
            
                <img 
                    @click="toggleNav"
                    src="~assets/img/hamburger_icon.svg" 
                    alt="nav" 
                    class="h-8 cursor-pointer hover:opacity-30">
            </div>

        </div>
        
        <div v-if="isOpen" class="container mx-auto">

            <nav>
                <ul>
                    <li>
                        Studiare ad Alghero
                    </li>
                    <li>
                        <NuxtLink to="/piano-studi" @click.native="closeNav()">Piano di Studi</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/tipo" @click.native="closeNav()">Pagina tipo</NuxtLink>
                    </li>
                </ul>
            </nav>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            isOpen: false,
        }
    },
    methods: {
        toggleNav() {
            this.isOpen = !this.isOpen
        },

        closeNav(){
            this.isOpen = false
        }
    }
}
</script>

<style lang="scss" scoped>

nav{
    ul{
        border-top: solid 1px #ccc;
        margin-top: 24px;
        margin-bottom: 64px;

        li{
            text-align: center;
            border-bottom: solid 1px #ccc;
            font-size: 21px;
            cursor: pointer;
            letter-spacing: -1px;
            padding: 4px 0;

            &:hover{
                background-color: #efefef;
            }

            a{
                display: block;
            }
        }
    }
}

#holder{
    background-image: url("@/assets/img/axd_logo_bg.png");
    // background-color: #cccccc;
  // height: 500px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: auto 64px;
    position: relative;
}

</style>

