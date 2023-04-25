<template>
    <div class="container mx-auto" id="pds">
     <titolo titoloPagina="Perché studiare ad Alghero"></titolo>
        <div class="grid grid-cols-12 gap-x-6 mb-12">
            <div class="px-4 col-span-12 col-start-1 sm:px-0 lg:col-span-8 lg:col-start-3 ">
               
                <h4 class="pt-4">Studiare ad Alghero</h4>
                <p>Il corso risponde alla domanda, che sull'Isola non si è mai attenuata, di una formazione universitaria nel campo del design, con un progetto culturale e didattico rigoroso e aggiornato, ma anche sensibile alle peculiarità – e potenzialità – di un territorio per molti aspetti unico. Con l'obiettivo di formare figure di giovani designer di prodotto, della comunicazione e dei servizi per ricominciare a immaginare, comunicare e innovare la Sardegna.
                Scegliere di studiare ad AlgheroXDesign permette di attingere a tutti quei saperi e competenze per approcciare in maniera critica e consapevole le tecnologie, le questioni sociali ed etiche. Si tratta di un percorso interdisciplinare, che combina corsi progettuali e teorici, affinchè gli studenti possano lavorare nel mondo del design una volta compltetati gli studi.
                </p>
            </div>
            <div class="col-span-12 col-start-1 sm:col-span-10 sm:col-start-2 my-12">
                <img src="/img/students-at-work.png" alt="">
                <p class="caption"> Lorem ipsum Nullam quis risus eget urna mollis.</p>
             </div>

            <div class="px-4 col-span-12 col-start-1 sm:px-0 lg:col-span-8 lg:col-start-3 ">
                <h4 class="pt-4">Sbocchi professionali </h4>
                <p>
                    Una volta laureati, gli studenti lavorano nel campo del visual e motion design, così come in quello del graphic design o dell'editoria multinediale, declinando le varie competenze alle esigenze e i linguaggi della progettazione contemporanea. Studi di progettazione, istituzioni culturali, imprese creative di media e grande dimensione sono tra i principali ambiti nei quali i nostri laureati lavorano.
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