<template>
    <div class="container mx-auto">
        <!-- testata -->
        <div class="relative mt-4">
            <img src="~assets/img/san-michele.jpg" alt="cupola di san michele" class="object-cover h-96 w-full">
            <h1 class="font-sans text-6xl absolute top-[45%] left-0 text-white block w-full text-center">15 anni di design ad Alghero</h1>
        </div>
    </div>

    <!-- news -->
    <div class="container mx-auto mt-8 mb-12">
        <div class="grid grid-cols-4 gap-6">
            <div>
                <p class="data">23.03.2023</p>
                <p class="news">Aperte le iscrizioni al test di ammissione</p>
            </div>

            <div>
                <p class="data">23.03.2023</p>
                <p class="news">Aperte le iscrizioni al test di ammissione</p>
            </div>

            <div>
                <p class="data">23.03.2023</p>
                <p class="news">Aperte le iscrizioni al test di ammissione</p>
            </div>

            <div>
                <p class="data">23.03.2023</p>
                <p class="news">Aperte le iscrizioni al test di ammissione</p>
            </div>


        </div>
    </div>

    <!-- main content -->
    <div class="container mx-auto my-12">
        <div class="grid grid-cols-2 gap-6">
            <!-- colonna sinistra-->
            <div>
               <div class="blocco">
                    <img src="/img/girl.jpg" alt="" class="w-full">
                    <h2 class="absolute top-8 left-4 w-full block text-white text-5xl">Perchè design ad Alghero?</h2>
                    <a href="#" class="absolute bottom-4 left-4 text-white border border-white text-2xl px-4 py-2 rounded-lg hover:bg-black hover:opacity-50">Si può!</a>

                </div>

                <div class="blocco">
                    <img src="@/assets/img/axd_color.svg" alt="" class="w-full">
                    <div class="absolute top-8 left-4 w-full">
                        <h2 class="block  text-5xl">Workshops</h2>
                        <p class="leading-tight mt-2  text-sm opacity-75">Curro Claret, Johao , Matteo Moretti</p>
                    </div>
                   
                    <a href="#" class="absolute bottom-4 left-4 border border-black text-xl px-4 py-2 rounded-lg">edizione 2023</a>
                </div>

                <div class="blocco ">
                    <div class="grid grid-cols-2 h-80">
                        <div class="bg-fucsia relative p-4">
                            <h2 class=" w-full block text-white text-3xl">Design Duo</h2>
                            <p class="leading-tight mt-2 text-white text-sm opacity-75">un ciclo di incontri su alcuni dei grandi temi del design</p>
                            <a href="#" class="absolute bottom-4 left-4 text-white border border-white  px-4 py-2 rounded-lg">Scopri di più</a>
                        </div>
                        <img src="/img/sedie_duo.png" alt="" class="h-full object-cover">
                        
                    </div>
                </div>

            </div>

            <!-- colonna destra-->
            <div>
                <div class="blocco">
                    <p class="text-3xl">AlgheroXDesign è la Laurea Triennale in Design, capace di attivare studi, ricerche e iniziative per contribuire al rilancio del territorio, riprendendo a formare le figure di giovani designer di prodotto, della comunicazione e dei servizi, con cui ricominciare a immaginare, comunicare e innovare la Sardegna.</p>
                </div>

                <div class="blocco">
                    <img src="/img/start.jpg" alt="" class="w-full">
                    <h2 class="absolute top-8 left-4 w-full block text-white text-5xl">Da dove si inizia?</h2>
                    <a href="#" class="absolute bottom-4 left-4 text-white border border-white text-xl px-4 py-2 rounded-lg">Da qui</a>
                </div>

                <div class="blocco">
                    <div class="grid grid-cols-2 h-80">
                        <img src="/img/nicole.png" alt="" class="h-full object-cover">
                        <div class="bg-rosso relative p-4">
                            <h2 class=" w-full block text-white text-3xl">Play Alghero</h2>
                            <a href="#" class="absolute bottom-4 left-4 text-white border border-white  px-4 py-2 rounded-lg">Scopri di più</a>
                        </div>
                    </div>
                </div>


            </div>

          
        </div>
    </div>

</template>

<script lang="ts">
    
    export default {
        
    }
</script>

<script setup lang="ts">
    definePageMeta({ layout: 'default' })

    useHead({
        title: 'AlgheroXDesign',
        meta: [
            { name: 'description', content: 'My amazing site.' }
        ],
  
       // script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
    })
</script>

<style lang="scss" scoped>
    h1{
        // color: $fucsia_axd;
        font-family: 'basier_circle';
        text-shadow: 0px 4px 6px #333;
    }

    p.data{
        color: $grigio_axd;
        margin-bottom: 6px;
        // font-kerning: normal;
        letter-spacing: -1px;
    }

    h2{
        letter-spacing: -.08rem;
    }

    .blocco{
        margin-bottom: 24px;
        position: relative;
    }
</style>