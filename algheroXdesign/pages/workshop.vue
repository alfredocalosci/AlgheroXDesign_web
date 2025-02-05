<template>
    <div class="container mx-auto" id="pds">
        <titolo titoloPagina="Workshop"></titolo>
        <div class="grid grid-cols-12 gap-x-6 mb-12">
            <div class="px-4 col-span-12 col-start-1 sm:px-0 lg:col-span-8 lg:col-start-3 ">

                <h4 class="pt-4">Workshop interclasse</h4>
                <p>Momento chiave del progetto formativo di Alghero Design, i workshop interclasse consentono ai nostri
                    studenti di affrontare, in una settimana a cavallo tra i due semestri, un'esperienza di
                    progettazione
                    intensiva.

                    Caratteristica dell'iniziativa è la sua articolazione: per una breve finestra temporale (e ben tre
                    volte
                    nel loro percorso formativo), i nostri studenti non si dunque in aula “per classe”, ma raggruppati
                    per
                    tema, interesse, curiosità o passione.
                </p>

                <div class="py-3 carousel__item">
                    <img src="@/assets/img/workshop.png" alt="Brainstorming a inizio workshop" />
                    <p class="caption"> Brainstorming a inizio workshop</p>
                </div>


            </div>


            <div class="px-4 col-span-12 col-start-1 sm:px-0 lg:col-span-8 lg:col-start-3 mb-3">

                <h4 class="pt-4">Contesto </h4>

                <p>
                    Collocati temporalmente a cardine tra i semestri dell'Anno Accademico, i workshop interclasse sono
                    un
                    momento di formazione curricolare, in cui studenti di tre anni di corso, progettano e imparano
                    assieme,
                    incrociando e contaminando le reciproche competenze e conoscenze. Oltre a costituire un elemento
                    caratterizzante il CdS in Design, cui portano occasioni di confronto progettuale con il mondo reale,
                    rappresentano un'occasione per creare reti con docenti nazionali e internazionali, promuovere il
                    Corso e
                    il Dipartimento oltre i confini locali, e offrire agli studenti nuove prospettive attraverso cui
                    guardare alla progettazione.
                </p>



                <h4 class="pt-4">Funzionamento </h4>
                <p> Della durata, indicativamente, di 5+2 giorni (2 CFU), a cavallo di una settimana, ogni workshop
                    prevede
                    che un docente, (che può o meno essere coadiuvato da un tutor), guidi un gruppo di circa 15 studenti
                    in
                    un percorso laboratoriale formativo, nel quale sperimentazione, pratica e riflessione concettuale si
                    combinano, su tematiche espresse dal mondo del lavoro e dai territori grazie a interazioni con
                    soggetti
                    esterni (enti, aziende, artigiani, iniziative imprenditoriali). </p>

                <h4 class="pt-4 pb-4">Edizione 2025 </h4>


                <p class="date">Gio 27 Feb | 17.00–19.00</p>
                <p class="topic">Serata di presentazione</p>

                <p class="date">Ven 28 Feb | 09.00–17.00</p>
                <p class="topic">Protesta?  Sessione di Warmup</p>

                <p class="date">Ven 28 Feb | 17.00–19.00</p>
                <p class="topic">Bam Design Talk</p>
                <p class="date">Lun 3 – Ven 7 Mar | 09.00 - 19.00 </p>
                <p class="topic">Workshop</p>


                <h4 class="pt-4 pb-4">Workshop </h4>
                <div class="col-span-12 col-start-1 sm:px-0 lg:col-span-8 lg:col-start-3">
                    <!-- WS-->

                    <div class="grid grid-cols-8 workshop mb-2  border-b border-black">
                        <img class="pic hidden sm:block " alt="foto di Martina Labarta" src="/img/ws-25-labarta.png" />
                        <div class="col-span-6 p-4">
                            <p><strong>Martina Labarta</strong></p>
                            <p class="italic">Design e Gender: per una maggiore consapevolezza
                                progettuale
                            </p>
                        </div>
                        <div class="py-4 justify-self-end self-center ">
                            <a @click.prevent="myAccordion" class="more_btn" href="#"></a>
                        </div>
                        <!-- extra content -->
                        <div class="col-span-8 col-start-1 extra_content">

                            <p>Il workshop esplora il tema della rappresentazione di genere nel design
                                dei prodotti, per
                                sfidare convenzioni e pregiudizi e promuovere un approccio progettuale
                                più inclusivo.
                                Attraverso analisi critiche, esercizi pratici e discussioni, impareremo
                                a riconoscere
                                elementi di genere nei prodotti e acquisiremo strumenti per integrare la
                                consapevolezza
                                di genere nel processo progettuale, sviluppando strategie in grado
                                incidere sul piano
                                sociale e culturale.

                            </p>
                            <br />
                            <p class="italic">Martina Labarta è una designer e ricercatrice
                                specializzata in
                                sostenibilità, product design e processi inclusivi. Dottoranda in Design
                                Research al
                                Politecnico di Milano, si occupa di design di prodotto per soluzioni
                                sostenibili.
                                Ha una laurea magistrale in Design & Engineering (Politecnico di Milano)
                                e una triennale
                                in Ingegneria Industriale (Università di Saragozza). Ha presentato
                                ricerche su design
                                gender-neutral e pratiche sostenibili in conferenze come Cumulus.
                                Con esperienza come assistente alla didattica e tutor di workshop per
                                aziende come
                                Brembo e Barilla, Martina combina competenze tecniche in CAD e LCA con
                                un approccio
                                creativo per affrontare sfide complesse.
                            </p>
                            <br />
                        </div>
                    </div>

                    <div class="grid grid-cols-8 workshop mb-2 border-b  border-black">
                        <img class="pic hidden sm:block " alt="foto di Claudia Piredda" src="/img/ws-25-piredda.png" />
                        <div class="col-span-6 p-4">
                            <p><strong>Claudia Piredda</strong></p>

                            <p class="italic">Mostrare l'introvabile
                            </p>
                        </div>
                        <div class="py-4 justify-self-end self-center">
                            <a @click.prevent="myAccordion" class="more_btn" href="#"></a>
                        </div>
                        <!-- extra content -->
                        <div class="col-span-8 col-start-1 extra_content">
                            <p>Nel suo Catalogo di oggetti introvabili (1969), l'illustratore, artista e
                                designer,
                                Jaques Carelman si proponeva– in perfetta aderenza con le esplorazioni
                                del movimento
                                Francese patafisico cui aderiva – di dirottare l'uso corrente di oggetti
                                comuni.
                                Ripercorrerne le provocazioni e metterle in mostra può essere
                                un'occasione per
                                riflettere sull'universo trovabilissimo della super-produzione di
                                oggetti in cui oggi il
                                pianeta va sprofondando.
                            </p><br />
                            <p class="italic">Claudia Piredda, architetta laureata presso l'Università
                                degli Studi di
                                Alghero, lavora dal 2021 a Stoccarda come interior architect ed
                                exhibition designer
                                presso Atelier Brückner. Ha contribuito a progetti internazionali di
                                rilievo, tra cui
                                EUROPA EXPERIENCE, il State Museum of Arts of Uzbekistan di Tadao Ando e
                                il Lindt Museum
                                di Vienna.
                                <br />
                                Grazie alla sua esperienza internazionale, adotta un approccio
                                progettuale distintivo,
                                combinando estetica, funzionalità e narrazione per creare spazi
                                innovativi e
                                coinvolgenti.


                            </p>

                        </div>
                    </div>
                    <div class="grid grid-cols-8 workshop mb-2 border-b  border-black">
                        <img class="pic hidden sm:block " alt="foto di Nađa Beretić" src="/img/ws-25-beretic.png" />
                        <div class="col-span-6 p-4">
                            <p><strong>Nađa Beretić</strong></p>
                            <p class="italic">Playful Experience Design</p>
                        </div>
                        <div class="py-4 justify-self-end self-center">
                            <a @click.prevent="myAccordion" class="more_btn" href="#"></a>
                        </div>
                        <!-- extra content -->
                        <div class="col-span-8 col-start-1 extra_content">

                            <p>Tema del laboratorio è la progettazione di esperienze ludiche grazie cui
                                stimolando,
                                incuriosendo e motivando il pubblico, promuovere il patrimonio dei Beni
                                Culturali.
                                Lavorando per gruppi su un argomento specifico e attorno a un target di
                                destinatari,
                                progetteremo un percorso d'interazione sulla base del quale sviluppare
                                un prototipo,
                                caratterizzato da azioni semplici e coinvolgenti che, sulla base di
                                meccaniche ed
                                elementi di gioco “aperto”, possa innescare un dialogo con il pubblico.

                            </p><br />

                            <p class="italic">PhD in Architettura e Ambiente, RTDA in Design presso l’Università di
                                Sassari. Da anni collabora ai progetti e alle ricerche del Laboratorio AnimazioneDesign,
                                esplorando le modalità con cui l’unione tra design ed esperienze ludiche possa
                                contribuire a promuovere l’idea di heritage e identità locale. Nel corso del tempo, ha
                                sviluppato la sua ricerca attorno al playful design come mezzo di esplorazione e
                                interazione libera e gioiosa con i contenuti, utilizzando elementi di gioco traslati
                                nell’ambito della progettazione per evocare un senso di “gioco aperto” che va oltre gli
                                obiettivi strutturati.

                            </p>

                        </div>
                    </div>

                    <div class="grid grid-cols-8 workshop mb-2  border-b border-black">
                        <img class="pic hidden sm:block " alt="foto di Nicolò Ceccarelli e Ilaria Mundula"
                            src="/img/ws-25-ceccarelli-mundula.png" />
                        <div class="col-span-6 p-4">
                            <p><strong>Nicolò Ceccarelli e Ilaria Mundula</strong></p>
                            <p class="italic">Pixillation BAZAAR
                            </p>
                        </div>
                        <div class="py-4 justify-self-end self-center ">
                            <a @click.prevent="myAccordion" class="more_btn" href="#"></a>
                        </div>
                        <!-- extra content -->
                        <div class="col-span-8 col-start-1 extra_content">

                            <p>Branca dell'animazione stop-motion nella quale ad essere animato è il
                                corpo umano, dal
                                magistrale Neighbours di Norman Mclaren nel 1952, la Pixillation compare
                                regolarmente in
                                film, corti animati, videoclip. L'impiego di personaggi in carne ed
                                ossa,
                                meticolosamente animati come pupazzi di fronte alla fotocamera, permette
                                infatti di
                                ottenere effetti di straordinario impatto visivo. Nel workshop
                                esploreremo questa
                                tecnica, animando, ma anche recitando direttamente…per realizzare storie
                                che si
                                fonderanno, come in un bazaar… con i linguaggi di altri due precedenti
                                illustri: i
                                geniali spot televisivi degli anni '60 e '70 della serie Gringo, e
                                l'interpretazione
                                tipo-fotografica della pièce teatrale di Eugene Ionesco 'La cantante
                                calva' realizzata
                                da Massin in quegli stessi anni.


                            </p>
                            <br />
                            <p class="italic">Nicolo Ceccarelli<br />Insegna Design presso il DADU di
                                Alghero
                                (Università di Sassari), dove dirige l'unità di ricerca AnimazioneDesign
                                ed è presidente
                                del nuovo corso di studi Triennale in Design. La sua passione per
                                l'architettura delle
                                informazioni lo ha portato a fondare l'iniziativa internazionale 2CO
                                COmmunicating
                                COmplexity, di cui è chair. Si occupa di animazione, visual design e
                                design
                                dell'identità, design e artigianato, design di allestimenti,
                                mentre è molto incuriosito dalle 'nuove' modalità didattiche a distanza.
                                Più
                                recentemente, si è occupato di gamification per la divulgazione dei beni
                                culturali e del
                                sapere scientifico.


                            </p><br />
                            <p class="italic">Ilaria Mundula<br />
                                Laureata magistrale in architettura con indirizzo design presso il DADU
                                con una tesi
                                sull'animazione informativa, collabora con il laboratorio di
                                AnimazioneDesign dove porta
                                avanti la sua passione per questa forma di comunicazione.




                            </p>
                            <br />
                        </div>
                    </div>



                    <h4 class="pt-4">Sessione di warmup</h4>

                    <div class="grid grid-cols-8 workshop mb-2 border-b border-t border-black">
                        <img class="pic hidden sm:block " alt="foto di workshop protesta"
                            src="/img/ws-25-protesta.png" />
                        <div class="col-span-6 p-4">
                            <p><strong>Protesta?</strong></p>
                            <p></p>

                        </div>
                        <div class="py-4 justify-self-end self-center">
                            <a @click.prevent="myAccordion" class="more_btn" href="#"></a>
                        </div>
                        <!-- extra content -->
                        <div class="col-span-8 col-start-1 extra_content">

                            <p>Dall'<i>atelier populaire</i> ai <i>disobedient objects</i>, la sessione
                                di Warmup invita
                                gli studenti
                                a confrontarsi con gli strumenti della comunicazione visiva per
                                protestare, manifestare
                                le proprie istanze, negli spazi dell'università.

                                Otto ore di tempo, e quattro docenti a disposizione, ognuno dei quali si
                                confronta con
                                il proprio gruppo di studenti su un medium specifico.


                            </p>
                            <br />
                            <p class="italic">
                            </p>




                        </div>
                    </div>





                </div>

                <h4 class="pt-4 pb-4">Edizione 2024 </h4>
                <div class="col-span-12 col-start-1 sm:px-0 lg:col-span-8 lg:col-start-3">
                    <!-- WS-->
                    <div class="grid grid-cols-8 workshop mb-2  border-b border-black">
                        <img class="pic hidden sm:block " alt="foto di Viola Orgiano" src="/img/ws-24-orgiano.png" />
                        <div class="col-span-6 p-4">
                            <p><strong>Viola Orgiano</strong></p>
                            <p>Pop-up e Realtà Aumentata</p>
                            <p class="italic">In collaborazione con l'amministrazione Comunale di Aggius
                            </p>
                        </div>
                        <div class="py-4 justify-self-end self-center ">
                            <a @click.prevent="myAccordion" class="more_btn" href="#"></a>
                        </div>
                        <!-- extra content -->
                        <div class="col-span-8 col-start-1 extra_content">

                            <p>I due laboratori <strong>Pop-up</strong> e <strong>Realtà
                                    Aumentata</strong> lavoreranno,
                                in collaborazione con l'Amministrazione Comunale, sul territorio di
                                Aggius, in Gallura,
                                sviluppando in parallelo artefatti di comunicazione interattiva per
                                raccontare i luoghi,
                                le storie, le persone, sulle tracce della cultura materiale e
                                immateriale locale.
                            </p>
                            <p>
                                Obiettivo finale sarà realizzare alcune cartoline animate, il cui nucleo
                                comunicativo è
                                prodotto dall'integrazione tra le dimensioni tutta analogica del pop-up,
                                e virtuale
                                della realtà aumentata.
                                I primi giorni di lavoro saranno quindi dedicati ad apprendere – in
                                parallelo – le
                                tecniche base per la realizzazione di composizioni pop-up e di piccole
                                integrazioni
                                narrative in realtà aumentata.
                                In una seconda fase i due laboratori si fonderanno, dando vita a gruppi
                                ibridi in cui le
                                le due competenze si fonderanno, per realizzare alcuni prodotti finiti
                                di pop-up
                                aumentati. </p><br />
                            <p class="italic">Laureata in architettura, Viola Orgiano è una visual
                                designer con un focus
                                distintivo sul
                                design multisensoriale. Viola ha collaborato stabilmente con il
                                laboratorio
                                animazionedesign
                                del DADU negli ultimi due anni, partecipando a vari progetti di ricerca
                                e ricerca
                                applicata.
                                Ha presentato il suo progetto di laurea Magistrale, incentrato sul paper
                                design nel
                                corso della 10 edizione della conferenza internazionale CONFIA23 in
                                Portogallo.</p>
                            <br />
                        </div>
                    </div>

                    <div class="grid grid-cols-8 workshop mb-2 border-b  border-black">
                        <img class="pic hidden sm:block " alt="foto di Daniele Murgia" src="/img/ws-24-murgia.png" />
                        <div class="col-span-6 p-4">
                            <p><strong>Daniele Murgia</strong></p>
                            <p>Pop-up e Realtà Aumentata</p>
                            <p class="italic">In collaborazione con l'amministrazione Comunale di Aggius
                            </p>
                        </div>
                        <div class="py-4 justify-self-end self-center">
                            <a @click.prevent="myAccordion" class="more_btn" href="#"></a>
                        </div>
                        <!-- extra content -->
                        <div class="col-span-8 col-start-1 extra_content">
                            <p>I due laboratori <strong>Pop-up</strong> e <strong>Realtà
                                    Aumentata</strong> lavoreranno,
                                in collaborazione con l'Amministrazione Comunale, sul territorio di
                                Aggius, in Gallura,
                                sviluppando in parallelo artefatti di comunicazione interattiva per
                                raccontare i luoghi,
                                le storie, le persone, sulle tracce della cultura materiale e
                                immateriale locale.
                            </p>
                            <p>
                                Obiettivo finale sarà realizzare alcune cartoline animate, il cui nucleo
                                comunicativo è
                                prodotto dall'integrazione tra le dimensioni tutta analogica del pop-up,
                                e virtuale
                                della realtà aumentata.</p>
                            <p>
                                I primi giorni di lavoro saranno quindi dedicati ad apprendere – in
                                parallelo – le
                                tecniche base per la realizzazione di composizioni pop-up e di piccole
                                integrazioni
                                narrative in realtà aumentata. </p>
                            <p>
                                In una seconda fase i due laboratori si fonderanno, dando vita a gruppi
                                ibridi in cui le
                                le due competenze si fonderanno, per realizzare alcuni prodotti finiti
                                di pop-up
                                aumentati. </p><br />
                            <p class="italic">Dottorando in Architettura e Ambiente presso l'Università
                                di Sassari,
                                concentra la sua ricerca sugli artefatti digitali per favorire l'accesso
                                alla conoscenza
                                e la comprensione di fenomeni complessi. Ha lavorato come assistente di
                                Interaction
                                Design presso il Dipartimento Ambiente Costruzione e Design SUPSI di
                                Mendrisio e
                                insegnato Creative Coding presso l'Accademia di Belle Arti di Genova. In
                                qualità di
                                libero professionista lavora nel campo dell'Interaction e Sound Design.
                            </p>

                        </div>
                    </div>

                    <div class="grid grid-cols-8 workshop mb-2 border-b  border-black">
                        <img class="pic hidden sm:block " alt="foto di Nicolò Ceccarelli e Nada Beretic"
                            src="/img/ws-24-ceccarelli-beretic.png" />
                        <div class="col-span-6 p-4">
                            <p><strong>Nicolò Ceccarelli e Nada Beretic</strong></p>
                            <p>Gomma ludens</p>
                            <p class="italic">in collaborazione con: Fondazione Meta</p>
                        </div>
                        <div class="py-4 justify-self-end self-center">
                            <a @click.prevent="myAccordion" class="more_btn" href="#"></a>
                        </div>
                        <!-- extra content -->
                        <div class="col-span-8 col-start-1 extra_content">

                            <p>Grande protagonista delle sperimentazioni ludiche del progetto
                                Play-Alghero è una miscela
                                di granuli di gomma e resina il cui uso primario si incontra nei campi
                                sportivi e parchi
                                giochi. Malleabile, morbida ed estremamente plasmabile, la mescola – il
                                progetto
                                Algherese lo ha dimostrato in modo eloquente –si presta ad essere
                                trattata come sistema
                                di comunicazione.</p>
                            <p>
                                L'obiettivo del workshop è continuare a esplorare le potenzialità di
                                questo materiale,
                                reinventandolo, in collaborazione con la Fondazione Meta, per realizzare
                                un prototipo di
                                installazione ludica urbana. Attenzione: ci sarà da sporcarsi le mani!
                            </p>
                            <p>
                                Il workshop è reso possibile anche grazie a Gommamica e Giochi Infiniti.
                            </p><br />
                            <p class="italic">Nicolò Ceccarelli insegna Design presso il DADU di Alghero
                                (Università di
                                Sassari), dove
                                dirige l'unità di ricerca animazioneDesign ed è presidente del nuovo
                                corso di studi
                                Triennale in Design. La sua passione per l'architettura delle
                                informazioni lo ha portato
                                a fondare l'iniziativa internazionale 2CO COmmunicating
                                COmplexity, di cui è chair. Si occupa di animazione, visual design e
                                design
                                dell'identità, design e artigianato, design di allestimenti,
                                mentre è molto incuriosito dalle 'nuove' modalità didattiche a distanza.
                                Con i progetti
                                Play Alghero e Culturgame, più recentemente, si è occupato di
                                gamification per la
                                divulgazione dei i beni culturali e del sapere scientifico.</p><br />
                            <p class="italic">Nada Beretic, PhD in Architettura e Ambiente, RTDA in
                                Design presso
                                l'Università di Sassari.
                                Il suo lavoro di ricerca si articola tra i temi del paesaggio culturale
                                e dell'urban
                                design come strumento per valorizzare le identità locali e la promozione
                                dei territori.

                                Dal 2012 condivide la responsabilità del programma Public art & Public
                                space – PaPs,
                                alla Facoltà di Architettura dell'Università di Belgrado. Collabora da
                                anni ai progetti
                                e alle ricerche del Laboratorio AnimazioneDesign, esplorando le modalità
                                con cui
                                l'unione tra design ed esperienze ludiche possa contribuire a promuovere
                                l'idea di
                                heritage. </p>
                            <br />

                            <div class="logo-wrapper grid grid-cols-2 items-baseline gap-x-1.5">
                                <img class="logo" src="/img/gommamica.png" /> <img class="logo"
                                    src="/img/giochi-infiniti.png" />
                            </div>
                        </div>
                    </div>


                    <h4 class="pt-4">Sessione di warmup</h4>

                    <div class="grid grid-cols-8 workshop mb-2 border-b border-t border-black">
                        <img class="pic hidden sm:block " alt="foto di Rodrigo Ramirez" src="/img/ws-24-ramirez.png" />
                        <div class="col-span-6 p-4">
                            <p><strong>Rodrigo Ramirez</strong></p>
                            <p>Visual Information for Emergencies</p>

                        </div>
                        <div class="py-4 justify-self-end self-center">
                            <a @click.prevent="myAccordion" class="more_btn" href="#"></a>
                        </div>
                        <!-- extra content -->
                        <div class="col-span-8 col-start-1 extra_content">

                            <p>Un workshop con cui esplorare e prototipare il design delle informazioni
                                impiegando le
                                icone del sistema Guemil per l'Emergenza.

                            </p>
                            <br />
                            <p class="italic">Rodrigo Ramírez ha conseguito un MA in Information Design
                                presso
                                l'Università di Reading nel Regno Unito, dopo aver studiato Design
                                all'UCV di
                                Valparaíso, Cile.
                                È Professore Associato alla School of Design di UC Chile, dove insegna
                                nel Master in
                                Advanced Design MADA UC. E' Design leader, del progetto Guemil–Icons for
                                emergencies e
                                Membro del Board di Design for Emergency Management (dnem.org).</p>
                            <p>
                                Rodrigo ha una estesa esperienza come Visting Professor e ha diretto
                                progetti di Design
                                dell'informazione per sistemi di informazioni, brands, organizzazioni
                                pubbliche e
                                iniziative editoriali. Si interessa, sia sul piano operativo che della
                                ricerca, di
                                Information Design e di Tipografia. Al momento sta seguendo un PhD in
                                Comunicazione
                                presso UC Cile.
                            </p>




                        </div>
                    </div>





                </div>

                <h4 class="pt-4 pb-4">Edizione 2023 </h4>
                <div class="col-span-12 col-start-1 sm:px-0 lg:col-span-8 lg:col-start-3">


                    <!-- WS-->

                    <div class="grid grid-cols-8 workshop mb-2  border-b border-black">
                        <img class="pic hidden sm:block " alt="foto di Curro Claret" src="/img/ws-23-claret.png" />
                        <div class="col-span-6 p-4">
                            <p><strong>Curro Claret</strong></p>
                            <p>Prodotto</p>
                            <p class="italic">In collaborazione con ERSU</p>
                        </div>
                        <div class="py-4 justify-self-end self-center ">
                            <a @click.prevent="myAccordion" class="more_btn" href="#"></a>
                        </div>
                        <!-- extra content -->
                        <div class="col-span-8 col-start-1 extra_content">
                            <p>
                                Curro Claret è un designer con base a Barcellona, dove svolge la sua
                                attività
                                progettando oggetti utili e sostenibili, che funzionano spesso da
                                innesco per processi
                                di creazione sociale partecipata. Molto attivo anche in campo didattico,
                                Curro collabora con il DADU da anni, in qualità di visiting professor e
                                come ospite al
                                ciclo di incontri “DesignDuo: conversazioni sul design”.
                            </p>
                        </div>
                    </div>

                    <div class="grid grid-cols-8 workshop mb-2 border-b  border-black">
                        <img class="pic hidden sm:block " alt="foto di Joao Schlitter" src="/img/ws-23-schlitter.png" />
                        <div class="col-span-6 p-4">
                            <p><strong>Joao Schlitter</strong></p>
                            <p>Animazione</p>
                            <p class="italic">In collaborazione con ERSU</p>
                        </div>
                        <div class="py-4 justify-self-end self-center">
                            <a @click.prevent="myAccordion" class="more_btn" href="#"></a>
                        </div>
                        <!-- extra content -->
                        <div class="col-span-8 col-start-1 extra_content">
                            <p>
                                Visual e Motion Designer, João Schlitter Amaral insegna all'Università
                                di Sao Paulo in
                                Brasile. Con alle spalle una lunga carriera professionale in Brasile e
                                negli USA, João è
                                stato testimone dell'entrata in scena, tra gli '80 e '90, dei primi
                                leggendari sistemi
                                grafici digitali per la post-produzione video, con cui ha creato sigle e
                                animazioni per
                                committenti come HBO, Discovery Channel, Cinemateca Brasileira. Più
                                recentemente si è
                                occupato di regia tv.
                            </p>

                        </div>
                    </div>
                    <div class="grid grid-cols-8 workshop mb-2 border-b  border-black">
                        <img class="pic hidden sm:block " alt="foto di Matteo Moretti" src="/img/ws-23-moretti.png" />
                        <div class="col-span-6 p-4">
                            <p><strong>Matteo Moretti</strong></p>
                            <p>Info Design</p>
                            <p class="italic">In collaborazione con ERSU</p>
                        </div>
                        <div class="py-4 justify-self-end self-center">
                            <a @click.prevent="myAccordion" class="more_btn" href="#"></a>
                        </div>
                        <!-- extra content -->
                        <div class="col-span-8 col-start-1 extra_content">
                            <p>
                                Ricercatore e professionista nel campo dell'info-design e del visual
                                journalism, Matteo
                                Moretti è ormai parte della squadra di Alghero Design. Autore di
                                progetti di
                                data-visualization importanti e premiati, Matteo ha una grande
                                esperienza didattica,
                                costruita in anni di insegnamento e conduzione di workshop in molte
                                Università italiane
                                e internazionali.
                            </p>
                        </div>
                    </div>
                </div>
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
    title: 'AlgheroXDesign - Workshop',
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
        { rel: 'canonical', href: 'http://algheroxdesign.it/workshop' }
    ]

})
</script>

<style lang="scss" scoped>
.workshop {
    p {
        font-size: 18px;
        letter-spacing: 0;

    }
}

.info {
    padding-bottom: 50px;

    p {
        max-width: 550px;
    }

    ul {
        margin-left: 20px;
        list-style-type: disc;

        li {
            padding-bottom: 2px;
        }
    }
}

.logo-wrapper {
    max-width: 320px;

    img.logo {
        width: 150px;
    }
}

.more_btn {
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

    &::before {
        content: "+";
    }

    &:hover {
        background-color: #333;
        color: #fff;
    }

    &.open {
        background-color: #000;
        color: #fff;

        &::before {
            content: "-";
        }
    }
}

.extra_content {
    transition: height 0.5s;

    height: 0px;
    overflow: hidden;

    &.open {
        height: auto;
        padding: 0.75rem 0;
    }
}

.date {
    margin-top: .5rem;
    font-size: 1rem;
    font-weight: bold;
}


.topic {
    margin-bottom: 1rem;
}
</style>