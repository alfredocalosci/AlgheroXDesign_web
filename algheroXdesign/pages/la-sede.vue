<template>
    <div class="container mx-auto" id="pds">
     <titolo titoloPagina="La sede"></titolo>
        <div class="grid grid-cols-12 gap-x-6 mb-12">
            <div class="px-4 col-span-12 col-start-1 sm:px-0 lg:col-span-8 lg:col-start-3 ">
               
                <h4 class="pt-4">La sede di Alghero</h4>
                <p>La Facoltà di Architettura di Alghero, ora Dipartimento, è nata nel 2002, prima facoltà di architettura in Sardegna. Sono tre le sedi in Alghero: <i>Palazzo del Pou Salit</i>,sede amministrativa, segreteria studenti e studi docenti; <i>Ex Ospedale di Santa Chiara</i>, sede didattica; <i>Ex Asilo Sella</i>, sede didattica e studi docenti.</p>
                <p>
                    Le sedi sono facilmente raggiungibili a piedi, situate nel centro storico di Alghero, e collegate tra di loro, dal centro storico 
                </p>
            </div>
            <div class="col-span-12 col-start-1 sm:col-span-10 sm:col-start-2 my-12">
                <img src="/img/233_architettura_0.jpg" alt="">
                <p class="caption">La sede di Santa Chiara in Alghero.</p>
             </div>
             <div class="col-span-12 col-start-1 sm:col-span-10 sm:col-start-2 my-12">
                <img src="/img/239_architettura.jpg" alt="">
                <p class="caption"> Biblioteca della sede di Santa Chiara - Alghero.</p>
             </div>
             
             <div class="col-span-12 col-start-1 sm:col-span-10 sm:col-start-2 my-12">
                <img src="/img/233_architettura.jpg" alt="">
                <p class="caption"> Una lezione di laboratorio nella sede di Santa Chiara - Alghero.</p>
             </div>

            
            <div class="px-4 col-span-12 col-start-1 sm:px-0 lg:col-span-8 lg:col-start-3 ">
                <h4 class="pt-4">Raggiungere Alghero </h4>
                <p>
                   Alghero 
                </p>
            </div>
           
            <div class="px-4 col-span-12 col-start-1 sm:px-0 lg:col-span-8 lg:col-start-3 mb-3">
                <h4 class="pt-4">Autobus </h4>
                <p> Alghero è servita dalle linee del <a href="http://www.arst.sardegna.it/orari_e_autolinee/servizi_urbani/alghero.html">Trasporto regionale della Sardegna</a>.
                  
                </p>

                <h4 class="pt-4">In aereo </h4>
                <p> Alghero è comodamente collegata alle principali città Italiane, e con voli quotidiani da Milano, Roma e Napoli. <a href="http://www.aeroportodialghero.it">L'aeroporto Fertilia "Riviera del Corallo"</a> si trova a circa 10 km dal centro della città <a href="https://www.aeroportodialghero.it/autobus.html">collegato da diverse autolinee</a>.
                  
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