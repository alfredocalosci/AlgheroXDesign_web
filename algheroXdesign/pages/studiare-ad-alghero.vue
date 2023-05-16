<template>
    <div class="container mx-auto" id="pds">
     <titolo titoloPagina="Perché studiare ad Alghero"></titolo>
        <div class="grid grid-cols-12 gap-x-6 mb-12">
            <div class="px-4 col-span-12 col-start-1 sm:px-0 lg:col-span-8 lg:col-start-3 ">
               
                <h4 class="pt-4">Studiare ad Alghero</h4>
                <p>Il corso risponde alla domanda, che sull'Isola non si è mai attenuata, di una formazione universitaria nel campo del design, con un progetto culturale e didattico rigoroso e aggiornato, ma anche sensibile alle peculiarità – e potenzialità – di un territorio per molti aspetti unico. Con l'obiettivo di formare figure di giovani designer di prodotto, della comunicazione e dei servizi per ricominciare a immaginare, comunicare e innovare la Sardegna.
                Scegliere di studiare ad AlgheroXDesign permette di attingere a tutti quei saperi e competenze per approcciare in maniera critica e consapevole le tecnologie, le questioni sociali ed etiche. Si tratta di un percorso interdisciplinare, che combina corsi progettuali e teorici, affinchè gli studenti possano lavorare nel mondo del design una volta completati gli studi.
                </p>
            </div>
            <div class="px-4 col-span-12 col-start-1 sm:px-0 lg:col-span-8 lg:col-start-3 ">
               
                <h4 class="pt-4">Ambiente locale e qualità delle relazioni</h4>
                <p>L'offerta formativa di AlgheroXDesign è unica nel suo genere. Coniuga di fatto la dimensione locale, punto di forza del Corso di Laurea, con la visione e la portata globale dei temi e degli insegnamenti proposti. Questi sono caratterizzati da un rapporto docente-studente di qualità, attento alle relazioni e ai bisogni, complice anche il numero limitato di posti. Questo garantisce la qualità e la sostenibilità dell'offerta durante tutto il ciclo di studi.</p>
            </div>
            <div class="col-span-12 col-start-1 sm:col-span-10 sm:col-start-2 my-12">
                <img src="/img/p_S59241.jpg" alt="">
                <p class="caption"> Gli studenti che hanno partecipato alla Summer School 2022.</p>
             </div>

            <div class="px-4 col-span-12 col-start-1 sm:px-0 lg:col-span-8 lg:col-start-3 ">
                <h4 class="pt-4">Sbocchi professionali </h4>
                <p>
                    Una volta laureati, gli studenti lavorano nel campo del visual e motion design, così come in quello del graphic design o dell'editoria multimediale, declinando le varie competenze alle esigenze e i linguaggi della progettazione contemporanea. Studi di progettazione, istituzioni culturali, imprese creative di media e grande dimensione sono tra i principali ambiti nei quali i nostri laureati lavorano.
                </p>
            </div>
            
            <div class="px-4 col-span-12 col-start-1 sm:px-0 lg:col-span-8 lg:col-start-3 mb-3">
                <h4 class="pt-4">Chi sono e di cosa si occupano i nostri diplomati? </h4>
                <p>
                  Di seguito una selezione di chi ha voluto raccontarci la sua esperienza tra Londra, Barcellona, e Italia.

                </p>
            </div>
            <div class="px-4 col-span-12 sm:col-span-4 col-start-1 sm:px-0 mb-6">
                <video  poster="/img/video/emanuel_serra.jpg" controls >
                <source src="/img/video/emanuel_serra.mp4" type="video/mp4">
                Your browser does not support the video tag.
                </video>
                    <p class="nome">
                        Emanuel Serra
                    </p>
                    <p class="qualifica">
                        Digital Media & Marketing Manager<br/>
                        Go Adventures, Bristol, UK

                    </p>
            </div>
            <div class="px-4 col-span-12 sm:col-span-4 col-start-1 sm:px-0 mb-6">
                <video  poster="/img/video/antonella_sechi.jpg" controls >
                <source src="/img/video/antonella_sechi.mp4" type="video/mp4">
                Your browser does not support the video tag.
                </video>
                    <p class="nome">
                        Antonella Sechi  
                    </p>
                    <p class="qualifica">
                        designer e founder di Oralae S.r.l.<br/>
                        Milano, IT

                    </p>
            </div>
            <div class="px-4 col-span-12 sm:col-span-4 col-start-1 sm:px-0 mb-6">
                <video  poster="/img/video/francesco_frulio.jpg" controls >
                <source src="/img/video/francesco_frulio.mp4" type="video/mp4">
                Your browser does not support the video tag.
                </video>
                    <p class="nome">
                    Francesco Frulio 
                    </p>
                    <p class="qualifica">
                    Interior e product designer<br/>
                    Milano, IT
                    </p>
            </div>
        </div>
        <saperne></saperne>    
    </div>
</template>

<script lang="ts">
    export default {
        
    }
</script>

<script setup lang="ts">
    definePageMeta({ layout: 'default' })

    useHead({
        title: 'AlgheroXDesign - Perché studiare ad Alghero',
        meta: [
            { name: 'description', content: 'this description.' }
        ],
  
       // script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
    })
</script>

<style lang="scss" scoped>

   
    
</style>