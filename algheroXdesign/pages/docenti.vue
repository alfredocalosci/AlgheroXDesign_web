

<template>
      <div class="container mx-auto" id="docenti">
     <titolo titoloPagina="i docenti"></titolo>
        <div class="grid grid-cols-12 gap-x-6 px-4 sm:px-0">
            <div class="col-span-12 col-start-1 sm:px-0 lg:col-span-8 lg:col-start-3 mb-12">
                <p>
                La natura interdiscipinare e progettuale che caratterizza il corso di studi è garantita da un gruppo eterogeneo di docenti provenienti dal mondo dell'accademia e della professione.
                </p>
            </div>
            
            <div class="col-span-12 col-start-1 sm:px-0 lg:col-span-8 lg:col-start-3 mb-12 mt-0">
              <div class="grid grid-cols-2 gap-x-[1px] sm:grid-cols-3 md:grid-cols-4 gap-4">

                <div v-for="people in table" 
                >
                  
                  <p class="nome">
                    <a 
                    :alt= people.cognome
                    :href= people.url
                    target="_blank">
                      {{ people.nome }}  {{ people.cognome }}
                    </a>

                  </p>
                  <p class="qualifica">{{  people.ruolo }}</p>

                </div>

              

              </div>
            </div>

            <div class="col-span-12 col-start-1 sm:px-0 lg:col-span-9 lg:col-start-3">
                <h2>Unità di ricerca</h2>
                <p>
                Ricercatori e dottorandi esplorano nuovi ambiti, sperimentano nuovi approcci e contribuiscono alla crescita delle competenze degli studenti e del corso di laurea stesso.</p>
            </div>
            <div class="col-span-12 col-start-1 sm:px-0 lg:col-span-8 lg:col-start-3 mb-12 mt-12">
              <div class="grid grid-cols-2 gap-x-[1px] sm:grid-cols-3 md:grid-cols-4 gap-4">

                <div v-for="people in table2">
                  <p class="nome">
                    <a 
                    :alt= people.cognome
                    :href= people.url
                    target="_blank">
                      {{ people.nome }}  {{ people.cognome }}
                    </a>

                  </p>
                  <p class="qualifica">{{  people.ruolo }}</p>
                </div>

               
              </div>
            </div>

           
           
            
        </div>  
       

        <saperne></saperne>

    
    </div>
</template>

<!--
<script  >
    
     export default {
      props: {
        url: {
        type: String,
        default:
        'https://docs.google.com/spreadsheets/d/e/2PACX-1vS1BwX4vGL-Rh_KzM0UXvTsesA60EPg9cLjCUUakOOycOChRkN_eZ4Vtq8qB_uTIdrNGsiLUQDrb2bZ/pub?gid=0&single=true&output=csv'
        },
    },
    data() {
      return {
        tableDataRaw: [],
        rawText: '',
        columns: []
      }
    },
   //  const { data, error } = await useAsyncData('users', () => d3.text(url)),
    computed: {
      testData(){
        console.log("computed")
        console.log(this.tableDataRaw )
      }
    },
    watch: {
    tableDataRaw(newValue, oldValue) {
       console.log("new value ...")
       console.log(newValue)
    }
  },
      mounted() {
        console.log('mounted')
        console.log(this.url)
        console.log(this.tableDataRaw)
        
         // console.log(d3)
         // https://docs.google.com/spreadsheets/d/e/2PACX-1vS1BwX4vGL-Rh_KzM0UXvTsesA60EPg9cLjCUUakOOycOChRkN_eZ4Vtq8qB_uTIdrNGsiLUQDrb2bZ/pub?gid=0&single=true&output=csv
     
         /*
         d3.csv("https://docs.google.com/spreadsheets/d/e/2PACX-1vS1BwX4vGL-Rh_KzM0UXvTsesA60EPg9cLjCUUakOOycOChRkN_eZ4Vtq8qB_uTIdrNGsiLUQDrb2bZ/pub?gid=0&single=true&output=csv", function(data) {
         
            for (var i = 0; i < data.length; i++) {
                console.log(data[i].Name);
                console.log(data[i].Age);
            }
           

            console.log(data)
          });
          */
          
      },
    }
</script>
-->
<script setup lang="ts">

  import * as d3 from 'd3';
  
  let myUrl =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vTztHd0DIS0sEtaNTalhUmrP6Mq2bIHGHMmGGwVqEw_NwMgV2pYw8CxevqSHLYyls9DJt22thhvw01n/pub?gid=0&single=true&output=csv";

  let myUrl2= 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTztHd0DIS0sEtaNTalhUmrP6Mq2bIHGHMmGGwVqEw_NwMgV2pYw8CxevqSHLYyls9DJt22thhvw01n/pub?gid=1703948614&single=true&output=csv';

  // let table2= ref([])
  // const table2 = useState('table', '[]');

  // ESto es un composable que nos ofrece nuxt, la ventaje de usarlo sobre hacer un d3.csv en el mount es que se pre-renderiza cuando generas la página, y no cuando se monta el componente.
  const {
    data: table,
    pending,
    error,
  } = await useAsyncData("table", () => d3.csv(myUrl),{
    // watch: [table2]
  });

  const {
    data: table2,
  } = await useAsyncData("table2", () => d3.csv(myUrl2),{
    // watch: [table2]
  });

 //  console.log(table2.value)
    
  // just for pages - NOT components
    definePageMeta({ layout: 'default' })

    useHead({
        title: 'AlgheroXDesign - i docenti',
        meta: [
            { name: 'description', content: 'AlgheroXDesign forma giovani designer di prodotto, della comunicazione e dei servizi per ricominciare a immaginare, comunicare e innovare la società, a partire dalla Sardegna.' },
            { name: 'og:description', content: 'AlgheroXDesign forma giovani designer di prodotto, della comunicazione e dei servizi per ricominciare a immaginare, comunicare e innovare la società, a partire dalla Sardegna.' },
            { name: 'twitter:description', content: 'AlgheroXDesign forma giovani designer di prodotto, della comunicazione e dei servizi per ricominciare a immaginare, comunicare e innovare la società, a partire dalla Sardegna.' },
            { name: 'title', content: 'AlgheroXDesign, Laurea triennale in Design: i docenti' },
            { name: 'keywords', content: 'Design, sardegna, università, grafica, digital, prodotto, servizio, docenti' },
            { name: 'og:title', content: 'AlgheroXDesign, Laurea triennale in Design: i docenti' },
            { name: 'og:image', content: '/img/studiare.jpg' },
            { name: 'twitter:title', content: 'AlgheroXDesign, Laurea triennale in Design: i docenti' }
        ],
        link: [
          { rel:'canonical', href:'http://algheroxdesign.it/docenti'}
        ]
    })
</script>

