<template>
    <div class="container mx-auto pds">
        <titolo titoloPagina="il piano di studi"></titolo>
        <div class="grid grid-cols-12 gap-x-6 mb-12">
            <div class="px-4 col-span-12 col-start-1 sm:px-0 lg:col-span-8 lg:col-start-3">
                <p>
                    Il progetto didattico, imperniato sul costante esercizio della progettazione, si ispira a un modello
                    interdisciplinare in cui le attività laboratoriali e progettuali si alternano agli insegnamenti
                    teorici.

                </p>
                <p class="pt-4">
                    A completare la formazione curricolare sia aggiungono i <a href="/workshop">workshop
                        interclasse</a>: corsi intensivi della durata di una settimana, in cui docenti e professionisti
                    di fama internazionale guidano gli studenti in vere e proprie esperienze di progetto, a stretto
                    contatto con aziende, enti e istituzioni che sollecitano il confronto con le problematiche dal mondo
                    reale. In questi workshop gli studenti dei tre anni si distribuiscono trasversalmente, mescolandosi:
                    si realizza così un positivo scambio di conoscenze tra i nuovi arrivati e i più esperti, che
                    rafforza il senso di comunità e di collaborazione.



                </p>
            </div>
        </div>
        <div class="grid grid-cols-12 gap-x-6 mb-12">
            <div class="col-span-12 col-start-1 sm:px-0 lg:col-span-8 lg:col-start-3 ">
                <!-- WS-->
                <div class="flex flex-row">
                    <div class="w-1/3 bg-slate-300 p-4">
                        <p>1° anno</p>
                        <ul>1 semestre
                            <li>Geometria</li>
                            <li>Storia del design</li>
                            <li>Lab. di Design per il pianeta</li>
                            <li>Filosofia dell'arte</li>
                            <li>Immagini I - Disegno</li>
                        </ul>
                    </div>
                    <div class="w-1/3 bg-slate-200 p-4">
                        <p>2° anno</p>
                        <ul>3 semestre
                            <li>Lab. di Design della cultura digitale</li>
                            <li>Immagini II</li>
                            <li>Teoria dei linguaggi audiovisivi</li>
                            <li>Attività a scelta</li>
                        </ul>
                    </div>
                    <div class="w-1/3 bg-slate-100 p-4">
                        <p>3° anno</p>
                        <ul>5 semestre
                            <li>Lab. di Exhibit design</li>
                            <li>Lab. di Design per la società</li>
                            <li>Lingua inglese</li>
                            <li>Attività a scelta</li>
                        </ul>
                    </div>
                </div>
                <!-- workshop-->
                <div class="flex flex-row">
                    <div class="w-1/3 bg-slate-300 p-4 wksp">
                        <ul>
                            <li>workshop interclasse</li>
                        </ul>
                    </div>
                    <div class="w-1/3 bg-slate-200 p-4 wksp">
                        <ul>
                            <li>workshop interclasse</li>
                        </ul>
                    </div>
                    <div class="w-1/3 bg-slate-100 p-4 wksp">
                        <ul>
                            <li>workshop interclasse</li>
                        </ul>
                    </div>
                </div>
                <!-- II sem -->
                <div class="flex flex-row">
                    <div class="w-1/3 bg-slate-300 p-4">
                        <ul>2 semestre
                            <li>Lab. di Design e luoghi</li>
                            <li>Antropologia culturale</li>
                            <li>Lab. di Culture del design</li>
                        </ul>
                    </div>
                    <div class="w-1/3 bg-slate-200 p-4">
                        <ul>4 semestre
                            <li>Lab. di Design della cultura materiale</li>
                            <li>Tecnologia dei processi di lavorazione</li>
                            <li>Modelli e tecnologie dei materiali per il design</li>
                            <li>Marketing</li>
                        </ul>
                    </div>
                    <div class="w-1/3 bg-slate-100 p-4">
                        <ul>6 semestre
                            <li>Attività a scelta</li>
                            <li>Tirocinio</li>
                            <li><a href="/prova-finale">Prova finale</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="container mx-auto pds">
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
        { name: 'description', content: 'AlgheroXDesign forma giovani designer di prodotto, della comunicazione e dei servizi per ricominciare a immaginare, comunicare e innovare la società, a partire dalla Sardegna.' },
        { name: 'og:description', content: 'AlgheroXDesign forma giovani designer di prodotto, della comunicazione e dei servizi per ricominciare a immaginare, comunicare e innovare la società, a partire dalla Sardegna.' },
        { name: 'twitter:description', content: 'AlgheroXDesign forma giovani designer di prodotto, della comunicazione e dei servizi per ricominciare a immaginare, comunicare e innovare la società, a partire dalla Sardegna.' },
        { name: 'title', content: 'AlgheroXDesign, Laurea triennale in Design: il piano di studi' },
        { name: 'keywords', content: 'Design, sardegna, università, grafica, digital, prodotto, servizio, docenti' },
        { name: 'og:title', content: 'AlgheroXDesign, Laurea triennale in Design: il piano di studi' },
        { name: 'twitter:title', content: 'AlgheroXDesign, Laurea triennale in Design: il piano di studi' }
    ],
    link: [
        { rel: 'canonical', href: 'http://algheroxdesign.it/piano-studi' }
    ]
})
</script>

<style lang="scss" scoped>
p {
    margin-bottom: 1.5rem;

    &:last-of-type {
        margin-bottom: 0;
    }

    strong {
        font-weight: 700;
    }
}



.pds {
    p {
        @apply text-[25px] leading-[125%] font-[400] tracking-[-.02em] lg:text-[25px] lg:leading-[125%] lg:font-[400] lg:tracking-[-.02em];
    }

    .desc {
        p {
            @apply normal-case text-[20px] font-[400] leading-[28px];
        }
    }

    h6 {
        @apply normal-case text-[20px] font-[500] leading-[28px];
    }

    ul {
        @apply text-[12px] uppercase font-[400] leading-[28px];

        li {
            @apply normal-case text-[14px] font-[500] tracking-[-.02em] border-b border-solid border-slate-400 leading-[28px];
        }

        li:last-child {
            @apply border-0;
        }
    }

    .wksp {
        @apply normal-case text-[14px] font-[500] tracking-[-.02em] border-t border-b border-solid border-slate-400 leading-[28px];
    }

    .flex {
        p {
            @apply normal-case border-b border-solid border-slate-400 pb-1 mb-4 leading-[28px];
        }
    }
}
</style>