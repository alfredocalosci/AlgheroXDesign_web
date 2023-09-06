<template>
    <div class="container mx-auto" id="pds">
     <titolo titoloPagina="La sede"></titolo>
        <div class="grid grid-cols-12 gap-x-6 mb-12">
            <div class="px-4 col-span-12 col-start-1 sm:px-0 lg:col-span-8 lg:col-start-3 ">
               
                <h4 class="pt-4">La sede di Alghero</h4>
                <p>La Facoltà di Architettura di Alghero, ora Dipartimento, è nata nel 2002, prima facoltà di architettura in Sardegna. Sono tre le sedi in Alghero: <i><a href="https://goo.gl/maps/9YTQJgFXMnCnv3Ei7" target="_blank">Palazzo del Pou Salit</a></i>, sede amministrativa, segreteria studenti e studi docenti; <i><a href="https://goo.gl/maps/zAmRRwox8wGz2ZnQ6" target="_blank">Ex Ospedale di Santa Chiara</a></i>, sede didattica; <i><a href="https://goo.gl/maps/RfJ4qZYvX7h18yZe6" target="_blank">Ex Asilo Sella</a></i>, sede didattica e studi docenti.</p>
                <p>Le sedi sono facilmente raggiungibili a piedi, collegate tra di loro dal centro storico.</p>

                <Carousel class="py-3 ">
                        <Slide key="slide_0">
                            <div class="carousel__item">
                            <img src="/img/233_architettura_0.jpg" alt="La sede di Santa Chiara in Alghero." />
                            <p class="caption"> La sede di Santa Chiara in Alghero. </p>
                            </div>
                        </Slide>

                        <Slide key="slide_1">
                            <div class="carousel__item">
                            <img src="/img/239_architettura.jpg" alt="Biblioteca della sede di Santa Chiara - Alghero." />
                            <p class="caption"> Biblioteca della sede di Santa Chiara - Alghero. </p>
                            </div>
                        </Slide>
                        
                        <Slide key="slide_2">
                            <div class="carousel__item">
                            <img src="/img/233_architettura.jpg" alt="Una lezione di laboratorio nella sede di Santa Chiara - Alghero." />
                            <p class="caption"> Una lezione di laboratorio nella sede di Santa Chiara - Alghero. </p>
                            </div>
                        </Slide>

                        <template #addons>
                        <Navigation />
                        <Pagination />
                        </template>
                </Carousel>
                <Slide v-for="slide in 3" :key="slide">
              
                </Slide>
             

            </div>
          

            
         
            <div class="px-4 col-span-12 col-start-1 sm:px-0 lg:col-span-8 lg:col-start-3 mb-3">
               
                <h4 class="pt-4">Raggiungere Alghero </h4>

                <p>
                  Situata a nord-ovest, in provincia di Sassari,<a href="https://goo.gl/maps/UbpUguEUHcSmticq8" target="_blank">  Alghero</a> è la terza città universitaria della Sardegna, con la sede del <a href="https://www.google.com/search?client=safari&rls=en&q=dadu+uniss&ie=UTF-8&oe=UTF-8" target="_blank">Dipartimento di Architettura, Design e Urbanistica dell'Università degli Studi di Sassari</a>.
                </p>
                
                <div class="py-3 carousel__item">
                           <img src="@/assets/img/map.jpg" alt="Mappa di Alghero"/>
                           <p class="caption">Mappa di Alghero </p>
                </div>
                     
                <h4 class="pt-4">In Autobus </h4>
                <p> Alghero è servita dalle linee del <a href="http://www.arst.sardegna.it/orari_e_autolinee/servizi_urbani/alghero.html" target="_blank">Trasporto regionale della Sardegna</a>.
                  
                </p>

                <h4 class="pt-4">In aereo </h4>
                <p> Alghero è comodamente collegata alle principali città Italiane, e con voli quotidiani da Milano, Roma e Napoli. <a href="http://www.aeroportodialghero.it" target="_blank">L'aeroporto Fertilia "Riviera del Corallo"</a> si trova a circa 10 km dal centro della città <a href="https://www.aeroportodialghero.it/autobus.html">collegato da diverse autolinee</a>.
                  
                </p>
                
                <h4 class="pt-4">Via mare </h4>
                <p> Il porto passeggeri più vicino ad Alghero è a Porto Torres (circa. 40 km). Il porto di Porto Torres è collegato a Barcellona,  Genova, Civitavecchia, Marsiglia, Propriano  e Ajaccio (Corsica). Alcuni itinerari sono solo stagionali.Per ulteriori informazioni sulla frequenza, orari e tariffe si prega di visitare i siti delle compagnie di navigazione.
                  
                </p>
               
                

            
            </div>

            
            
        </div>
        <saperne></saperne>    
    </div>
</template>

<script lang="ts">

    // carousel
    import { defineComponent } from 'vue'
    import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
    import 'vue3-carousel/dist/carousel.css'

    export default defineComponent({
        name: 'Basic',
        components: {
            Carousel,
            Slide,
            Pagination,
            Navigation,
    },
})

</script>

<script setup lang="ts">
    definePageMeta({ layout: 'default' })

    useHead({
        title: 'AlgheroXDesign - La sede',
        meta: [
            { name: 'description', content: 'AlgheroXDesign forma giovani designer di prodotto, della comunicazione e dei servizi per ricominciare a immaginare, comunicare e innovare la società, a partire dalla Sardegna.' },
            { name: 'og:description', content: 'AlgheroXDesign forma giovani designer di prodotto, della comunicazione e dei servizi per ricominciare a immaginare, comunicare e innovare la società, a partire dalla Sardegna.' },
            { name: 'twitter:description', content: 'AlgheroXDesign forma giovani designer di prodotto, della comunicazione e dei servizi per ricominciare a immaginare, comunicare e innovare la società, a partire dalla Sardegna.' },
            { name: 'title', content: 'AlgheroXDesign, Laurea triennale in Design: la sede' },
            { name: 'keywords', content: 'Design, sardegna, università, grafica, digital, prodotto, servizio' },
            { name: 'og:title', content: 'AlgheroXDesign, Laurea triennale in Design: la sede' },
            { name: 'twitter:title', content: 'AlgheroXDesign, Laurea triennale in Design: la sede' }
        ],
        link: [
          { rel:'canonical', href:'http://algheroxdesign.it/la-sede'}
        ]
  
    })
</script>
