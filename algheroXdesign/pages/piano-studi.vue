<template>
    <div class="container mx-auto" id="pds">
     <titolo titoloPagina="il piano di studi"></titolo>
        <div class="grid grid-cols-12 gap-x-6">
            <div class="px-4 col-span-12 col-start-1 sm:px-0 lg:col-span-8 lg:col-start-3 ">
                <p>
                    La didattica è organizzata in laboratori progettuali e insegnamenti teorici, Maecenas faucibus mollis interdum. Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas sed diam eget risus varius blandit sit amet non magna. Donec ullamcorper nulla non metus auctor fringilla. Maecenas sed diam eget risus varius blandit sit amet non magna.
                    Nullam id dolor id nibh ultricies vehicula ut id elit. Donec id elit non mi porta gravida at eget metus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Curabitur blandit tempus porttitor. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.
                    </p>
            </div>
        </div>
        <div class="grid grid-cols-12 gap-x-6" id="desc">
            <div class="col-span-12 col-start-1 px-4 sm:px-0 py-7 lg:col-span-6 lg:col-start-3 md:col-span-8 ">
                    <h6>Primo anno</h6>
                <p>
                    Al primo semestre del primo anno di studi il laboratorio di Design per il pianeta pone l'accento sugli emergenti problemi alla scala planetaria, sottolineando la necessità di intervenire a livello di sistema, e indirizzando sin da subito il corso di studi verso una linea di piena consapevolezza ambientale.
                </p>
                <p>
                    Nel secondo semestre, con il laboratorio integrato di Design e Luoghi l'enfasi si trasferisce sulla dimensione territoriale, evidenziando la necessità di un confronto costante dell'uomo con il suo intorno e – per i progettisti – l'importanza di acuire la propria capacità di ascolto. 
                    Al corso di Culture del Design è assegnato il compito di sensibilizzare gli studenti sugli aspetti me- todologici della progettazione e sull'insostituibile ruolo di media- zione culturale che il design è chiamato a svolgere per la società.
                </p>
            </div>
            <div class="col-span-12 col-start-1 px-4 sm:px-0 xl:col-span-2 lg:col-span-3 md:col-span-3 col-span-12 col-start-1 py-7">
                    <ul>1 semestre
                    <li>Lab di Design per il pianeta</li>
                    <li>Immagini I - Disegno</li>
                    <li>Immagini I - Fotografia</li>
                    <li> Geometria</li>
                    </ul>
                    
                    <ul>
                    <li class="py-[15.75px]">workshop interclasse</li>
                    </ul>
                    
                    <ul>2 semestre
                    <li>Lab di Design per il pianeta</li>
                    <li>Immagini I - Disegno</li>
                    <li>Immagini I - Fotografia</li>
                    <li> Geometria</li>
                    </ul>
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
        title: 'AlgheroXDesign - il piano di studi',
        meta: [
            { name: 'description', content: 'this description.' }
        ],
  
       // script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
    })
</script>

<style lang="scss" scoped>

    p{
        margin-bottom: 1.5rem;

        &:last-of-type{
            margin-bottom: 0;
        }

        strong{
            font-weight: 700;
        }
    }

#pds{
    #desc{
        p{
        @apply normal-case;
        @apply text-[20px];
        @apply font-[400];
        @apply leading-[28px];
    }
    }
    h6{
        @apply normal-case;
        @apply text-[20px];
        @apply font-[500];
        @apply leading-[28px];       
    }
    ul{
        @apply text-[14px];
        @apply uppercase;
        @apply font-[500];
        @apply leading-[28px];
        li{
            @apply normal-case;
            @apply text-[16px];
            @apply font-[500];
            @apply tracking-[-.02em];
            @apply border-b;
            @apply border-solid;
            @apply border-slate-200;
            @apply leading-[28px];
            // @apply lg:text-[25px];
            // @apply lg:leading-[125%];
            // @apply lg:font-[400];
            // @apply lg:tracking-[-.02em];
        }


    }
}    

    
</style>