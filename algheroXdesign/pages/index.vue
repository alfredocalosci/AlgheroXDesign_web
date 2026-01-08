<template>
    <div class="container mx-auto border-black">
        <!-- testata -->
        <div class="relative h-[60vh] overflow-hidden min-h-[475px] sm:h-[25vh]">
            <img src="~assets/img/alghero-play-desktop.jpg" alt="cupola di san michele"
                class="object-cover hidden sm:block">
            <img src="~assets/img/alghero-play-mobile.jpg" alt="cupola di san michele"
                class="object-cover block sm:hidden">
            <h1
                class="px-4 absolute top-[5vh] left-0 text-white text-[70px] leading-[101%]  tracking-[-.05em] sm:w-full sm:text-center sm:top-[45%]">
                15 anni di design ad Alghero</h1>
        </div>
    </div>

    <!-- news -->
    <div class="container px-4 mt-[20px] sm:mx-auto mb-8 sm:mb-0" id="news-list">
        <div class="grid md:grid-cols-4 gap-6">
            <div>
                <a href="https://www.architettura.aho.uniss.it/it/didattica/corso-di-laurea-design" target="_blank"
                    alt="Aperte le iscrizioni al test di ammissione">
                    <p class="data">07.06.2023</p>
                    <p class="news">Apertura iscrizioni al test di ammissione</p>
                </a>
            </div>

            <div>
                <a href="https://www.architettura.aho.uniss.it/it/didattica/corso-di-laurea-design" target="_blank"
                    alt="Terza sessione prove di ammissione">
                    <p class="data">25.08.2023</p>
                    <p class="news">Chiusura iscrizioni al test di ammissione</p>
                </a>
            </div>

            <div>
                <a href="https://www.architettura.aho.uniss.it/it/didattica/corso-di-laurea-design" target="_blank"
                    alt="Prima scadenza per le prove di ammissione">
                    <p class="data">04.09.2023</p>
                    <p class="news">Prova grafica test di ammissione </p>
                </a>
            </div>

            <div>
                <a href="https://www.architettura.aho.uniss.it/it/didattica/corso-di-laurea-design" target="_blank"
                    alt="Seconda scadenza prove di ammissione">
                    <p class="data">05.09.2023</p>
                    <p class="news">Colloqui test di ammissione </p>
                </a>
            </div>




        </div>
    </div>

    <!-- main content -->
    <div class="container mx-auto my-0 sm:my-12" id="main">
        <div class="grid sm:grid-cols-2 gap-6">
            <!-- colonna sinistra-->
            <div>
                <div class="blocco mb-0 sm:mb-4" id="perche">
                    <img src="/img/studiare.jpg" alt="" class="w-full">
                    <h2 class="px-4 absolute top-[5vh] left-0 text-white text-[70px] leading-[90%]  tracking-[-.05em]">
                        Perché design ad Alghero?</h2>
                    <NuxtLink to="/studiare-ad-alghero" class="button absolute bottom-4 left-4">Si può!</NuxtLink>

                </div>


                <div class="blocco mb-0 sm:mb-4" id="start">
                    <img src="/img/start.jpg" alt="" class="w-full object-fit">
                    <div class="absolute top-8 left-4 w-[90%] text-white">
                        <h2>Da dove si inizia?</h2>
                        <p>Vuoi iscriverti? Scopri come fare sul sito Uniss.it</p>
                    </div>
                    <a href="https://www.architettura.uniss.it/it/i-nostri-corsi/iscriversi/ammissione-al-corso-di-laurea-design"
                        target="_blank" class="button absolute bottom-4 left-4">Da qui</a>
                </div>

                <div class="blocco mb-0 sm:mb-4" id="workshop">
                    <img src="/img/ws-25-cover.png" alt="" class="w-full">
                    <div class="absolute top-8 left-4 w-[90%] text-[#38FF6A]">
                        <h2>Workshops</h2>
                        <p>Martina Labarta, Claudia Piredda, Nicolò Ceccarelli, Ilaria Mundula, Nada Beretic</p>
                    </div>

                    <a href="/workshop" class="button absolute bottom-4 left-4 border-[#38FF6A] text-[#38FF6A]">Edizione
                        2025</a>
                </div>

                <div class="blocco mb-0 sm:mb-4" id="design-duo">
                    <img src="/img/design-duo.png" alt="" class="w-full object-fit">
                    <div class="absolute top-8 left-4 w-[90%]">
                        <h2>Design Duo</h2>
                        <p>un ciclo di incontri su alcuni dei grandi temi del design</p>
                    </div>

                    <a href="http://designduo.it/" class="button absolute bottom-4 left-4 text-black border-black"
                        target="_blank">Scopri di più</a>
                </div>
                <div class="blocco mb-0 sm:mb-4" id="expo">
                    <img src="/img/expo-2.jpg" alt="" class="w-full object-fit">
                    <div class="absolute top-8 left-4 w-[90%]">
                        <h2>Animazione e Design</h2>
                        <p>L'esperienza di AlgheroXDesign al servizio dell'expo di Milano</p>
                    </div>

                    <a href="https://www.youtube.com/watch?v=4WbXogfzRUw"
                        class="button absolute bottom-4 left-4 text-black border-black">Scopri di più</a>
                </div>
                <!--
                <div class="blocco mb-0 sm:mb-4" id="2co">
                    <img src="@/assets/img/2co.svg" alt="" class="w-full object-fit">
                    <div class="absolute top-8 left-4 w-[90%] text-white">
                        <h2>Comunicare la complessità, dal 2013</h2>
                    </div>
                    <a href="http://www.2coconference.org" target="_blank" class="button absolute bottom-4 left-4">Wow</a>
                </div>
                -->
            </div>

            <!-- colonna destra-->
            <div>
                <div class="blocco px-4 py-4 mb-4">
                    <h2>AlgheroXDesign è la Laurea Triennale in Design con cui il Dipartimento di Architettura, Design e
                        Urbanistica dell'Università di Sassari, ad Alghero, riprende a formare le figure di giovani
                        designer di prodotto, della comunicazione e dei servizi, per immaginare, comunicare e innovare
                        la Sardegna.
                    </h2>
                </div>
                <!-- BIP -->
                <div class="blocco mb-0 sm:mb-4" id="prova-finale">
                    <img src="/img/prova-finale.jpg" alt="" class="w-full object-fit">
                    <div class="absolute top-8 left-4 w-[90%] text-black">
                        <h2>Prova finale</h2>
                        <p>Tutto quello che serve sapere!</p>
                    </div>
                    <a href="https://algheroxdesign.it/prova-finale/" target="_blank"
                        class="button absolute bottom-4 left-4 text-black border-black">Scopri di più</a>
                </div>
                <!-- test ammissione -->
                <div class="blocco mb-0 sm:mb-4" id="2co">
                    <img src="/img/ammissione.jpg" alt="" class="w-full object-fit">
                    <div class="absolute top-8 left-4 w-[90%] text-black">
                        <h2>Guida al test di ammissione</h2>
                        <p>Come funziona? Cosa serve fare? </p>
                    </div>
                    <a href="/ammissione" target="_blank"
                        class="button absolute bottom-4 left-4 text-black border-black">Scopri di più</a>
                </div>


                <!-- 2co4 -->
                <div class="blocco mb-0 sm:mb-4" id="2co">
                    <img src="/img/2CO25.jpg" alt="" class="w-full object-fit">
                    <div class="absolute top-8 left-4 w-[90%] text-white">
                        <h2><strong>2CO </strong> Saõ Paulo</h2>
                        <p>L'edizione Everyday vola in Brasile</p>
                    </div>
                    <a href="https://2coconference.org/saopaulo/" target="_blank"
                        class="button absolute bottom-4 left-4 text-black border-black">Eu gosto!</a>
                </div>


                <!-- play alghero -->
                <div class="blocco mb-0 sm:mb-4" id="play">
                    <div class="grid grid-cols-2 gap-0">
                        <img src="/img/play-adi.png" alt="" class="h-full object-cover">
                        <div class="bg-rosso relative p-4">
                            <h2 class="w-[90%] block text-white">Play Alghero</h2>
                            <h2 class="w-[90%] block text-white py-9"><img src="/img/logo-adi.svg"></h2>
                            <a href="/adi-design-index" target="_blank" class="button absolute bottom-4 left-4">Scopri
                                di più</a>
                        </div>
                    </div>
                </div>

                <!--

                <div class="blocco mb-0 sm:mb-4" id="play">
                    <div class="grid grid-cols-2 gap-0">
                        <img src="/img/nicole.png" alt="" class="h-full object-cover">
                        <div class="bg-rosso relative p-4">
                            <h2 class="w-[90%] block text-white">Play Alghero</h2>
                            <a href="https://playalghero.it" target="_blank" class="button absolute bottom-4 left-4">Scopri di più</a>
                        </div>
                    </div>
                </div>
                 -->









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
        { name: 'description', content: 'AlgheroXDesign forma giovani designer di prodotto, della comunicazione e dei servizi per ricominciare a immaginare, comunicare e innovare la società, a partire dalla Sardegna.' },
        { name: 'og:description', content: 'AlgheroXDesign forma giovani designer di prodotto, della comunicazione e dei servizi per ricominciare a immaginare, comunicare e innovare la società, a partire dalla Sardegna.' },
        { name: 'twitter:description', content: 'AlgheroXDesign forma giovani designer di prodotto, della comunicazione e dei servizi per ricominciare a immaginare, comunicare e innovare la società, a partire dalla Sardegna.' },
        { name: 'title', content: 'AlgheroXDesign, ricominciare a immaginare, comunicare e innovare la società, a partire dalla Sardegna.' },
        { name: 'keywords', content: 'Design, sardegna, università, grafica, digital, prodotto, servizio' },
        { name: 'og:title', content: 'AlgheroXDesign, ricominciare a immaginare, comunicare e innovare la società, a partire dalla Sardegna.' },
        { name: 'og:image', content: '/img/og-graph.png' },
        { name: 'twitter:title', content: 'AlgheroXDesign, ricominciare a immaginare, comunicare e innovare la società, a partire dalla Sardegna.' }
    ],
    link: [
        { rel: 'canonical', href: 'http://algheroxdesign.it' }
    ]
    // script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
})
</script>

<style lang="scss" scoped>
#footer {
    margin-top: 10rem;
}


h2 {
    letter-spacing: -.08rem;
    margin-bottom: 10px;
}

.blocco {
    // margin-bottom: 24px;
    position: relative;
}
</style>