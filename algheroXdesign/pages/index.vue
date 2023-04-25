<template>
    <div class="container mx-auto border-black">
        <!-- testata -->
        <div class="relative h-[60vh] overflow-hidden min-h-[475px] sm:h-[25vh]">
            <img src="~assets/img/alghero.png" alt="cupola di san michele" class="object-cover">
            <h1 class="px-4 absolute top-[5vh] left-0 text-white text-[70px] leading-[101%]  tracking-[-.05em] sm:w-full sm:text-center sm:top-[45%]">15 anni di design ad Alghero</h1>
        </div>
    </div>

    <!-- news -->
    <div class="container px-4 mt-[20px] md:mx-auto">
        <div class="grid md:grid-cols-4 gap-6">
            <div>
                <p class="data">23.03.2023</p>
                <p class="news">Aperte le iscrizioni al test di ammissione</p>
            </div>

            <div>
                <p class="data">23.03.2023</p>
                <p class="news">Prima scadenza per le prove di ammissione</p>
            </div>

            <div>
                <p class="data">23.03.2023</p>
                <p class="news">Seconda scadenxa prove di ammissione</p>
            </div>

            <div>
                <p class="data">23.03.2023</p>
                <p class="news">Terza sessione prove di ammissione</p>
            </div>


        </div>
    </div>

    <!-- main content -->
    <div class="container mx-auto my-12">
        <div class="grid md:grid-cols-2 gap-6">
            <!-- colonna sinistra-->
            <div>
               <div class="blocco mb-0 sm:mb-4">
                    <img src="/img/girl.jpg" alt="" class="w-full">
                    <h2 class="px-4 absolute top-[5vh] left-0 text-white text-[70px] leading-[90%]  tracking-[-.05em]">Perché design ad Alghero?</h2>
                    <a href="/studiare-ad-alghero" class="button absolute bottom-4 left-4">Si può!</a>
                </div>

                <div class="blocco mb-0 sm:mb-4">
                    <img src="@/assets/img/axd_color.svg" alt="" class="w-full object-none">
                    <div class="absolute top-8 left-4 w-[90%]">
                        <h2>Workshops</h2>
                        <p>Curro Claret, Johao Schlitter, Matteo Moretti</p>
                    </div>
                   
                    <a href="#" class="button absolute bottom-4 left-4 text-black border-black">Edizione 2023</a>
                </div>

                <div class="blocco mb-0 sm:mb-4">
                    <img src="/img/design-duo.png" alt="" class="w-full object-fit">
                    <div class="absolute top-8 left-4 w-[90%]">
                        <h2>Design Duo</h2>
                        <p>un ciclo di incontri su alcuni dei grandi temi del design</p>
                    </div>
                   
                    <a href="#" class="button absolute bottom-4 left-4 text-black border-black">Scopri di più</a>
                </div>

                

            </div>

            <!-- colonna destra-->
            <div>
                <div class="blocco px-4 py-4 mb-4">
                    <p class="">AlgheroXDesign è la Laurea Triennale in Design, capace di attivare studi, ricerche e iniziative per contribuire al rilancio del territorio, riprendendo a formare le figure di giovani designer di prodotto, della comunicazione e dei servizi, con cui ricominciare a immaginare, comunicare e innovare la Sardegna.</p>
                </div>        

                <div class="blocco mb-0 sm:mb-4">
                    <img src="/img/start.jpg" alt="" class="w-full object-fit">
                    <div class="absolute top-8 left-4 w-[90%] text-white">
                        <h2>Da dove si inizia?</h2>
                    </div>
                    <a href="https://www.architettura.aho.uniss.it/it/didattica/corso-di-laurea-design" target="_blank" class="button absolute bottom-4 left-4">Da qui</a>
                </div>

                <!-- play alghero -->
                <div class="blocco mb-0 sm:mb-4">
                    <div class="grid grid-cols-2 gap-0 h-80">
                        <img src="/img/nicole.png" alt="" class="h-full object-cover">
                        <div class="bg-rosso relative p-4">
                            <h2 class="w-[90%] block text-white">Play Alghero</h2>
                            <a href="https://www.youtube.com/watch?v=RILcP5B7wbA" target="_blank" class="button absolute bottom-4 left-4">Scopri di più</a>
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
    // h1{
    //     // color: $fucsia_axd;
    //     font-family: 'basier_circle';
    //     text-shadow: 0px 4px 6px #333;
    // }

    // p.data{
    //     color: $grigio_axd;
    //     margin-bottom: 6px;
    //     // font-kerning: normal;
    //     letter-spacing: -1px;
    // }

    h2{
        letter-spacing: -.08rem;
    }

    .blocco{
        // margin-bottom: 24px;
        position: relative;
    }
</style>