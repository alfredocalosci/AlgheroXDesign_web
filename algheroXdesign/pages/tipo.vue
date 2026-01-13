<template>
    <div class="container mx-auto">

    <br/>

     <Carousel>
        
            <Slide key="slide_0">
                <div class="carousel__item">Qui vanno le slides</div>
            </Slide>

            <Slide key="slide_1">
                <div class="carousel__item">Ogni slide deve avere una "key"</div>
            </Slide>
            

            <!-- 10 slides di esempio -->
            <Slide v-for="slide in 10" :key="slide">
                <div class="carousel__item">{{ slide }}</div>
            </Slide>
             

            <template #addons>
            <Navigation />
            <Pagination />
            </template>
    </Carousel>

    <titolo titoloPagina="una pagina tipo"></titolo>

    <br/>

        <div class="grid grid-cols-12 gap-x-6 ">

            <div class="col-span-8 col-start-3 ">
                <p>
                    Etiam efficitur elit nec ante accumsan ornare. Fusce faucibus pulvinar felis ac lobortis. Phasellus libero mi, faucibus eu nulla vel, placerat luctus metus. Suspendisse ut maximus massa. Pellentesque venenatis nisi vitae ligula varius, ac lacinia nisl egestas. Suspendisse luctus orci erat, vitae facilisis dolor mollis sit amet. Fusce egestas fermentum dolor, in ultricies orci dictum a. Phasellus sollicitudin ante sed interdum semper. Maecenas ac lectus et risus ultrices feugiat in ut orci. Nulla viverra velit nibh, ac ultrices augue ultricies quis. Vivamus consequat pretium tristique. Pellentesque eu consequat arcu, sit amet elementum ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a nisi tincidunt, varius lorem id, tincidunt felis.
                </p>
                <p>
                    Praesent malesuada consectetur sagittis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc quis efficitur augue. Suspendisse condimentum mi at lacus auctor, sit amet placerat tellus varius. Praesent ac tortor non odio ultrices posuere. Cras efficitur, augue sit amet egestas lacinia, magna nibh tincidunt nibh, sit amet porta arcu risus in purus. Vivamus sed porta odio. In fringilla, erat nec tristique tincidunt, dui ante interdum mi, ac dignissim augue dolor ut velit. Sed dapibus ex ligula, quis accumsan lorem porta eget. Quisque in porta est. Pellentesque at commodo odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
                </p>
            </div>

            <div class="col-span-10 col-start-2 my-12">
                <img src="/img/girl-blue-jean.jpg" alt="">
            </div>

            <div class="col-span-8 col-start-3 ">
                <p>
                    <strong>Etiam efficitur elit nec</strong><br/>
                    Etiam efficitur elit nec ante accumsan ornare. Fusce faucibus pulvinar felis ac lobortis. Phasellus libero mi, faucibus eu nulla vel, placerat luctus metus. Suspendisse ut maximus massa. Pellentesque venenatis nisi vitae ligula varius, ac lacinia nisl egestas. Suspendisse luctus orci erat, vitae facilisis dolor mollis sit amet. Fusce egestas fermentum dolor, in ultricies orci dictum a. Phasellus sollicitudin ante sed interdum semper. Maecenas ac lectus et risus ultrices feugiat in ut orci. Nulla viverra velit nibh, ac ultrices augue ultricies quis. Vivamus consequat pretium tristique. Pellentesque eu consequat arcu, sit amet elementum ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a nisi tincidunt, varius lorem id, tincidunt felis.
                </p>
                <p>
                    Praesent malesuada consectetur sagittis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc quis efficitur augue. Suspendisse condimentum mi at lacus auctor, sit amet placerat tellus varius. Praesent ac tortor non odio ultrices posuere. Cras efficitur, augue sit amet egestas lacinia, magna nibh tincidunt nibh, sit amet porta arcu risus in purus. Vivamus sed porta odio. In fringilla, erat nec tristique tincidunt, dui ante interdum mi, ac dignissim augue dolor ut velit. Sed dapibus ex ligula, quis accumsan lorem porta eget. Quisque in porta est. Pellentesque at commodo odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
                </p>
            </div>

            <saperne></saperne>

        </div>
    </div>
</template>

<script lang="ts">

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
})

</script>

<script setup lang="ts">
    definePageMeta({ layout: 'default' })

    // inietta meta ed attributi in head
    useHead({
        title: 'AlgheroXDesign - pagina tipo',
        meta: [
            { name: 'description', content: 'AlgheroXDesign forma giovani designer di prodotto, della comunicazione e dei servizi per immaginare, comunicare e innovare la Sardegna.' },
            { name: 'og:description', content: 'AlgheroXDesign forma giovani designer di prodotto, della comunicazione e dei servizi per immaginare, comunicare e innovare la Sardegna.' },
            { name: 'twitter:description', content: 'AlgheroXDesign forma giovani designer di prodotto, della comunicazione e dei servizi per immaginare, comunicare e innovare la Sardegna.' },
            { name: 'title', content: 'AlgheroXDesign, immaginare, comunicare e innovare la Sardegna.' },
            { name: 'keywords', content: 'Design, sardegna, università, grafica, digital, prodotto, servizio' },
            { name: 'og:title', content: 'AlgheroXDesign, immaginare, comunicare e innovare la Sardegna.' },
            { name: 'og:image', content: '/img/og-graph.png' },
            { name: 'twitter:title', content: 'AlgheroXDesign, immaginare, comunicare e innovare la Sardegna.' }
        ],
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

    // extra styles for slides 
    .carousel__item {
        min-height: 200px;
        width: 100%;
        background-color: #ccc;
        color: var(--vc-clr-white);
        font-size: 20px;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .carousel__slide {
    padding: 10px;
    }

    .carousel__prev,
    .carousel__next {
    box-sizing: content-box;
    border: 5px solid white;
    }

    
</style>