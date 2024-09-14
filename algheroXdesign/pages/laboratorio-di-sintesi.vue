<template>
    <div class="container mx-auto" id="pds">
        <titolo titoloPagina="Laboratorio di sintesi finale"></titolo>
        <div class="grid grid-cols-12 gap-x-6 mb-12">
            <div class="col-span-12 col-start-1 sm:col-span-10 sm:col-start-2 my-12">
                <img src="/img/sintesi-finale.jpg" alt="">
                <!-- <p class="caption"> &nbsp;</p> -->
            </div>

            <div class="px-4 col-span-12 col-start-1 sm:px-0 lg:col-span-8 lg:col-start-3 ">

                <h4 class="pt-4">Laboratorio di sintesi finale</h4>
                <p>A partire dall'autunno dell'a.a. 23/23 prendono il via le attività dei laboratori di sintesi finale
                    del corso di laurea Triennale in Design.
                    I laboratori sono strutture informali a guida dei docenti di design del corso – che di questo
                    compito si fanno carico in forma volontaria – a supporto degli studenti impegnati nell'elaborazione
                    dell'elaborato di fine carriera (già noto in passato come... Tesi di Laurea). Obbiettivo dei
                    laboratori è offrire una guida alla popolazione studentesca, cercando contestualmente di ottimizzare
                    energie e risorse per il raggiungimento di un risultato importante costituito da un'esercitazione
                    che rappresenti una sintesi esauriente del loro percorso formativo Triennale.
                </p>
                <p class="pt-4">
                    I laboratori, che si organizzeranno indipendentemente sul piano dell'organizzazione interna, delle
                    regole di partecipazione e della forma didattica, si articolano in serie di temi di riferimento, sui
                    quali l'interesse dei proponenti si intreccia con la loro capacità di offrire un supporto efficace
                    ai partecipanti.<br />
                    A partire da questi principali indirizzi sarà possibile prevedere ulteriori articolazioni, come
                    anche interazioni e intrecci verso altre aree tematiche.
                    Non sono poi da escludere interazioni con soggetti altri, che possano seguire le ricerche come
                    'co-relatori'. Il coinvolgimento di soggetti esterni (“enti, aziende, artigiani, iniziative
                    imprenditoriali”) è anzi è del tutto auspicabile.

                </p>
                <p class="pt-4">
                    <i>Il laboratorio di sintesi finale è dunque idealmente il punto di atterraggio di un percorso
                        che va
                        maturando nei tre anni…e che si intreccia alle traiettorie – per esempio dei workshops
                        interclasse –
                        imboccate nel corso dei tre anni, e/o all'individuazione di un tirocinio mirato, da incrociare
                        proprio con l'elaborato finale.</i>
                </p>
                <p class="pt-4">
                    I laboratori possono quindi essere viste come strutture, 'spazi' di comunità in cui le candidate e i
                    candidati si confrontano con loro stessi e con i propri relatori, presentando – al grado di
                    elaborazione cui il loro lavoro si trova via via – gli sviluppi dei loro sforzi. Ma anche
                    confrontandosi con il come altre/i stanno lavorando.
                    Ai laboratori saranno probabilmente invitati esperti – a fare lezione, a partecipare alle revisioni,
                    ad avanzare suggerimenti e direzioni di lavoro.
                </p>
                <p class="pt-4">
                    La partecipazione attiva ai laboratori per lo sviluppo dell'elaborato finale, da diritto al
                    riconoscimento di CFU liberi, ed è assimilato a quelli a ciò previsti al 3 anno.
                    Per questa ragione, questa parecipazione dev'essere continuativa e attiva.
                </p>
            </div>


            <div class="px-4 col-span-12 col-start-1 sm:px-0 lg:col-span-8 lg:col-start-3 ">

                <h4 class="pt-8">Ma come funzionano?</h4>
                <p>Il laboratorio, ognuno dei quai si organizzerà indipendentemente, si articola idealmente in incontri
                    periodici, la cui frequenza può variare in funzione del periodo dell'anno.
                    Gli incontri possono essere plenari – comuni a tutti o a più laboratori per le comunicazioni più
                    generali – e specifici di laboratorio.<br />
                    Man mano che ci si avvicina alla scadenza finale, ci saranno molto probabilmente incontri/revisioni
                    su appuntamento ad personam.
                </p>

            </div>
            <div class="px-4 col-span-12 col-start-1 sm:px-0 lg:col-span-8 lg:col-start-3 ">

                <h4 class="pt-8">La cadenza? </h4>
                <p>Da incontri ogni tre settimane/un mese a più fitti, in determinati periodi dell'anno (modo tra marzo
                    e novembre…in preparazione delle sessioni).

                    Presenteremo in via generale l'offerta dei laboratori di sintesi nelle prossime settimane.
                    A questa prima introduzione faranno seguito le presentazioni dei singoli laboratori.
                    Successivamente sarà possibile candidarsi a seguirne i lavori (secondo le modalità che ogni singolo
                    laboratorio fisserà e che saranno a breve rese note).
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
        { name: 'description', content: 'AlgheroXDesign forma giovani designer di prodotto, della comunicazione e dei servizi per ricominciare a immaginare, comunicare e innovare la società, a partire dalla Sardegna.' },
        { name: 'og:description', content: 'AlgheroXDesign forma giovani designer di prodotto, della comunicazione e dei servizi per ricominciare a immaginare, comunicare e innovare la società, a partire dalla Sardegna.' },
        { name: 'twitter:description', content: 'AlgheroXDesign forma giovani designer di prodotto, della comunicazione e dei servizi per ricominciare a immaginare, comunicare e innovare la società, a partire dalla Sardegna.' },
        { name: 'title', content: 'AlgheroXDesign, Laurea triennale in Design: studiare design ad Alghero' },
        { name: 'keywords', content: 'Design, sardegna, università, grafica, digital, prodotto, servizio, docenti' },
        { name: 'og:title', content: 'AlgheroXDesign, Laurea triennale in Design: studiare design ad Alghero' },
        { name: 'twitter:title', content: 'AlgheroXDesign, Laurea triennale in Design: studiare design ad Alghero' }
    ],
    link: [
        { rel: 'canonical', href: 'http://algheroxdesign.it/studiare-ad-alghero' }
    ]
})
</script>

<style lang="scss" scoped>
video {
    width: 100%;
}
</style>