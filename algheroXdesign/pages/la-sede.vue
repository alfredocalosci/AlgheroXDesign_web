<template>
    <div class="container mx-auto" id="pds">
     <titolo titoloPagina="La sede"></titolo>
        <div class="grid grid-cols-12 gap-x-6 mb-12">
            <div class="px-4 col-span-12 col-start-1 sm:px-0 lg:col-span-8 lg:col-start-3 ">
               
                <h4 class="pt-4">La sede di Alghero</h4>
                <p>La Facoltà di Architettura di Alghero, ora Dipartimento, è nata nel 2002, prima facoltà di architettura in Sardegna.</p>

            </div>
            <div class="px-4 col-span-12 col-start-1 sm:px-0 lg:col-span-8 lg:col-start-3 ">
               
                <h4 class="pt-4">Ambiente locale e qualità delle relazioni</h4>
                <p>L'offerta formativa di AlgheroXDesign è unica nel suo genere. Coniuga di fatto la dimensione locale, punto di forza del Corso di Laurea, con la visione e la portata globale dei temi e degli insegnamenti proposti. Questi sono caratterizzati da un rapporto docente-studente di qualità, attento alle relazioni e ai bisogni, complice anche il numero limitato di posti. Questo garantisce la qualità e la sostenibilità dell'offerta durante tutto il ciclo di studi.</p>
            </div>
            <div class="col-span-12 col-start-1 sm:col-span-10 sm:col-start-2 my-12">
                <img src="/img/233_architettura_0.jpg" alt="">
                <p class="caption">La sede di Santa Chiara in Alghero.</p>
             </div>

            <div class="px-4 col-span-12 col-start-1 sm:px-0 lg:col-span-8 lg:col-start-3 ">
                <h4 class="pt-4">Sbocchi professionali </h4>
                <p>
                    Una volta laureati, gli studenti lavorano nel campo del visual e motion design, così come in quello del graphic design o dell'editoria multimediale, declinando le varie competenze alle esigenze e ai linguaggi della progettazione contemporanea. Studi di progettazione, istituzioni culturali, imprese creative di media e grande dimensione sono tra i principali ambiti nei quali i nostri laureati lavorano.
                </p>
            </div>
            <div class="col-span-12 col-start-1 sm:col-span-10 sm:col-start-2 my-12">
                <img src="/img/239_architettura.jpg" alt="">
                <p class="caption"> Biblioteca della sede di Santa Chiara - Alghero.</p>
             </div>
            <div class="px-4 col-span-12 col-start-1 sm:px-0 lg:col-span-8 lg:col-start-3 mb-3">
                <h4 class="pt-4">Come raggiungere Alghero </h4>
                <p>
                  Di seguito una selezione di chi ha voluto raccontarci la sua esperienza tra Londra, Barcellona, e Italia.

                </p><br/>
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