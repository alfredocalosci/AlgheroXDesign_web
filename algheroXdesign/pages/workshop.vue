<template>
    <div class="container mx-auto" id="pds">
     <titolo titoloPagina="La sede"></titolo>
        <div class="grid grid-cols-12 gap-x-6 mb-12">
            <div class="px-4 col-span-12 col-start-1 sm:px-0 lg:col-span-8 lg:col-start-3 ">
               
                <h4 class="pt-4">Workshop interclasse</h4>
                <p>Momento chiave del progetto formativo di Alghero Design, i workshop interclasse consentono ai nostri studenti di affrontare, in una settimana a cavallo tra i due semestri, un’esperienza di progettazione intensiva.

                Caratteristica dell’iniziativa è la sua articolazione: per una breve finestra temporale (e ben tre volte nel loro percorso formativo), i nostri studenti non si  dunque in aula “per classe”, ma raggruppati per tema, interesse, curiosità o passione.
                </p>

                <div class="py-3 carousel__item">
                    <img src="@/assets/img/workshop.png" alt="Brainstorming a inizio workshop"/>
                    <p class="caption"> Brainstorming a inizio workshop</p>
                </div>
             

            </div>
          

            <div class="px-4 col-span-12 col-start-1 sm:px-0 lg:col-span-8 lg:col-start-3 mb-3">
               
                <h4 class="pt-4">Contesto </h4>

                <p>
                    Collocati temporalmente a cardine tra i semestri dell’Anno Accademico, i workshop interclasse sono un momento di formazione curricolare, in cui studenti di tre anni di corso, progettano e imparano assieme, incrociando e contaminando le reciproche competenze e conoscenze. Oltre a costituire un elemento caratterizzante il CdS in Design, cui portano occasioni di confronto progettuale con il mondo reale, rappresentano un’occasione per creare reti con docenti nazionali e internazionali, promuovere il Corso e il Dipartimento oltre i confini locali, e offrire agli studenti nuove prospettive attraverso cui guardare alla progettazione.
                </p>
                
              
                     
                <h4 class="pt-4">Funzionamento </h4>
                <p> Della durata, indicativamente, di 5+2 giorni (2 CFU), a cavallo di una settimana, ogni workshop prevede che un docente, (che può o meno essere coadiuvato da un tutor), guidi un gruppo di circa 15 studenti in un percorso laboratoriale formativo, nel quale sperimentazione, pratica e riflessione concettuale si combinano, su tematiche espresse dal mondo del lavoro e dai territori grazie a  interazioni con soggetti esterni (enti, aziende, artigiani, iniziative imprenditoriali). </p>

                <h4 class="pt-4 pb-4">Edizione 2024 </h4>
                <div class="col-span-12 col-start-1 sm:px-0 lg:col-span-8 lg:col-start-3">   
                    
                    
                <!-- WS-->

                <div class="grid grid-cols-8 workshop mb-2  border-b border-black pb-2">
                    <img alt="foto di Viola Orgiano" src="/img/ws-24-orgiano.png"/>
                    <div class="col-span-6 p-4">
                        <p><strong>Viola Orgiano</strong></p>
                        <p>Il progetto del Pop-Up  per i Territori</p>
                        <p class="italic">In collaborazione con l’amministrazione Comunale di Aggius</p> 
                    </div>

                    <div class="py-4 justify-self-end self-center ">
                        <a @click.prevent="myAccordion" class="more_btn" href="#"></a>
                    </div>

                    <!-- extra content -->
                    <div class="col-span-8 col-start-1 extra_content">
                        <p>extra content here</p>
                    </div>
                </div>

                <div class="grid grid-cols-8 workshop mb-2 border-b  border-black pb-2">
                    <img alt="foto di Viola Orgiano" src="/img/ws-24-orgiano.png"/>
                    <div class="col-span-6 p-4">
                        <p><strong>Viola Orgiano</strong></p>
                        <p >Il progetto del Pop-Up  per i Territori</p>
                        <p class="italic">In collaborazione con l’amministrazione Comunale di Aggius</p>
                    </div>

                    <div class="py-4 justify-self-end self-center">
                        <a @click.prevent="myAccordion" class="more_btn" href="#"></a>
                    </div>

                          <!-- extra content -->
                          <div class="col-span-8 col-start-1 extra_content ">
                        <p>extra content here</p>
                    </div>
                </div>

                <!--
                <div class="flex flex-wrap flex-col space-y-4 md:flex-row workshop">
                    <div class="sm:w-1/3">
                        <img alt="foto di Viola Orgiano" src="/img/ws-24-orgiano.png"/>
                        <p><strong>Viola Orgiano</strong></p>
                        <p>Il progetto del Pop-Up  per i Territori</p>
                        <p>In collaborazione con l’amministrazione Comunale di Aggius</p>                
                    </div>
                    
                    <div class="sm:w-1/3"><p>Daniele Murga</p></div>

                    <div class="sm:w-1/3"><p>Viola Orgiano</p></div>

                    <div class="sm:w-1/3"><p>Nicolò Ceccareli e Nađa Beretić</p></div>
                    
                    <div class="sm:w-1/3"><p>Rodrigo Ramírez</p></div>
                </div>
                -->
               
                <!-- II sem -->
                
            </div>



                <h4 class="pt-4">Edizione 2023 </h4>
                <p> Il porto passeggeri più vicino ad Alghero è a Porto Torres (circa. 40 km). Il porto di Porto Torres è collegato a Barcellona,  Genova, Civitavecchia, Marsiglia, Propriano  e Ajaccio (Corsica). Alcuni itinerari sono solo stagionali.Per ulteriori informazioni sulla frequenza, orari e tariffe si prega di visitare i siti delle compagnie di navigazione.
                  
                </p>
               
                

            
            </div>

            
            
        </div>
        
        <saperne></saperne>    
    </div>
</template>



<script lang="ts">

    // vanilla script accordion



    /*
    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function(ev) {

            console.log(ev.target);

            // this.classList.toggle("active");

            // var panel = this.nextElementSibling;

           
    });
    }
    */

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
        methods: {
            myAccordion(e) {
                let p = e.target.parentNode.parentNode;
                let t = p.getElementsByClassName('extra_content')

                e.target.classList.toggle("open");
                t[0].classList.toggle("open");

               //  console.log(e.target.parentNode.parentNode)
               // console.log("clicked")
            }
        }
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

<style lang="scss" scoped>
    .workshop{
        p{
            font-size: 18px;
            letter-spacing: 0;
        }
    }    

    .more_btn{
        transition: background-color 0.5s, color 0.5s;

        background-color: #EEEAEC;
        font-size: 2rem;
        text-align: center;
        text-decoration: none;
        width: 3rem;
        height: 3rem;
        display: block;
        border-radius: 1.5rem;
        font-weight: 300;
        text-shadow: none;
        border-color: transparent;

        &::before{
            content: "+";
        }

        &:hover{
            background-color: #333;
            color: #fff;
        }

        &.open{
            background-color: #000;
            color: #fff;

            &::before{
            content: "-";
        }
        }
    }

    .extra_content{
        transition: height 0.5s;

        height: 0px;
        overflow: hidden;

        &.open{
            height: auto;
            padding: 0.75rem 0;
        }
    }

    
</style>