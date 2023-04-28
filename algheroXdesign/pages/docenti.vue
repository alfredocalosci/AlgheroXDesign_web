<template>
    <div class="container mx-auto" id="docenti">
     <titolo titoloPagina="i docenti"></titolo>
        <div class="grid grid-cols-12 gap-x-6 px-4 sm:px-0">
            <div class="col-span-12 col-start-1 sm:px-0 lg:col-span-8 lg:col-start-3 mb-12">
                <p>
                La natura interdiscipinare e progettuale che caratterizza il corso di studi è garantita da un gruppo eterogeneo di docenti provenienti dal mondo dell'accademia e della professione.
                </p>
            </div>
            
            <div class="col-span-12 col-start-1">
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <div>
                  <img class="object-cover h-60 w-48 rounded-sm" src="/img/nicolo-ceccarelli.jpg"/>  
                    <p class="nome"><a alt="Nicolò Ceccarelli" href="https://www.architettura.aho.uniss.it/it/node/2183" target="_blank">Nicolò Ceccarelli</a></p>
                    <p class="qualifica">Dir. del C.so di Laurea</p>
                </div>
                <div>
                  <img class="object-cover h-60 w-48 rounded-sm" src="/img/enrico-cicalo.jpg"/>  
                    <p class="nome"><a alt="Enrico Cicalo" href="https://www.architettura.aho.uniss.it/it/persone/docenti/cicalo-enrico" target="_blank">Enrico Cicalò</a></p>
                    <p class="qualifica">Professore associato</p>
                </div>
                <div>
                  <img class="object-cover h-60 w-48 rounded-sm" src="/img/cecilia-rostagni.jpg"/>  
                    <p class="nome"><a alt="Cecilia Rostagni" href="https://www.architettura.aho.uniss.it/it/la-scuola/persone/docenti-strutturati/rostagni-cecilia" target="_blank">Nicolò Ceccarelli</a></p>
                    <p class="qualifica">Professore associato</p>
                </div>
                <div>
                  <img class="object-cover h-60 w-48 rounded-sm" src="/img/lidia-decandia.jpg"/>  
                    <p class="nome"><a alt="Lidia Decandia" href="https://www.architettura.aho.uniss.it/it/persone/docenti/decandia-lidia" target="_blank">Nicolò Ceccarelli</a></p>
                    <p class="qualifica">Professore associato</p>
                </div>
                <div>
                  <img class="object-cover h-60 w-48 rounded-sm" src="/img/matteo-moretti.png"/>  
                  <p class="nome"><a alt="Matteo Maria Moretti" href="https://msite.uniss.it/ugov/person/107364" target="_blank">Matteo Moretti</a></p>
                  <p class="qualifica">Professore associato</p>
                </div>
                <div>
                    <img class="object-cover h-60 w-48 rounded-sm" src="/img/marco-sironi.jpg"/>  
                    <p class="nome"><a alt="Marco Sironi" href="https://www.uniss.it/ugov/person/8832" target="_blank">Marco Sironi</a></p>
                    <p class="qualifica">Ricercatore</p>
                </div>
                <div>
                    <img class="object-cover h-60 w-48 rounded-sm" src="/img/alfredo-calosci.jpg"/>  
                    <p class="nome"><a alt="Alfredo Calosci" href="https://www.uniss.it/ugov/person/14159" target="_blank">Alfredo Calosci</a></p>
                    <p class="qualifica">Ricercatore</p>
                </div>
            

              </div>
            </div>

            <div class="col-span-12 col-start-1 sm:px-0 lg:col-span-9 lg:col-start-3">
                <h2>Unità di ricerca</h2>
            </div>
            <div class="col-span-12 col-start-1">
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div>
                    <img class="object-cover h-60 w-48 rounded-sm" src="/img/nada-beretic.jpg"/>  
                    <p class="nome"><a alt="Nada Beretic" href="https://www.uniss.it/ugov/trasparenza/1083720" target="_blank">Nada Beretic</a></p>
                    <p class="qualifica">Ricercatrice</p>
                </div>
                <div>
                  <img class="object-cover h-60 w-48 rounded-sm" src="/img/sabrina-melis.jpg"/>  
                  <p class="nome"><a alt="Sabrina Melis" href="#" target="_blank">Sabrina Melis</a></p>
                  <p class="qualifica">Dottoranda</p>
                </div>
                <div>
                    <img class="object-cover h-60 w-48 rounded-sm" src="/img/daniele-murgia.jpg"/>  
                    <p class="nome"><a alt="Daniele Murgia" href="#" target="_blank">Daniele Murgia</a></p>
                    <p class="qualifica">Dottoranda</p>
                </div>
                <div>
                    <img class="object-cover h-60 w-48 rounded-sm" src="/img/viola.jpg"/>  
                    <p class="nome"><a alt="#" href="https://www.uniss.it/ugov/person/14159" target="_blank">Viola</a></p>
                    <p class="qualifica">Ricercatore</p>
                </div>
                <div>
                    <img class="object-cover h-60 w-48 rounded-sm" src="/img/paola.jpg"/>  
                    <p class="nome"><a alt="#" href="https://www.uniss.it/ugov/trasparenza/1083720" target="_blank">Paola</a></p>
                    <p class="qualifica">Ricercatrice</p>
                </div>

              </div>
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
        title: 'AlgheroXDesign - i docenti',
        meta: [
            { name: 'description', content: 'this description.' }
        ],
  
       // script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
    })
</script>

