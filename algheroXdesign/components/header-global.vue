<template>
    <div class="border-b border-black">
        <div id="holder" class="container  md:mx-auto py-2">

            <div class="flex justify-between px-4 sm:px-0">
                <img src="~assets/img/logo_architecture_at_alghero.jpg" alt="architettura ad alghero" class="h-8 mt-1">

                <div class="grow">
                    <p class="text-2xl mt-1 text-center hover:opacity-30">
                        <NuxtLink to="/" @click.native="closeNav()">
                            AlgheroXDesign
                        </NuxtLink>
                    </p>
                </div>

                <img @click="toggleNav" src="~assets/img/hamburger_icon.svg" alt="nav"
                    class="h-8 cursor-pointer hover:opacity-30">
            </div>

        </div>

        <div v-if="isOpen" class="mx-auto">

            <nav>
                <ul>

                    <li>
                        <NuxtLink to="/studiare-ad-alghero" @click.native="closeNav()">Studiare ad Alghero</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/piano-studi" @click.native="closeNav()">Piano di Studi</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/docenti" @click.native="closeNav()">Docenti</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/la-sede" @click.native="closeNav()">La sede</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/workshop" @click.native="closeNav()">Workshop</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/laboratori-di-sintesi-finale" @click.native="closeNav()">Lab. di sintesi finale
                        </NuxtLink>
                    </li>

                </ul>
            </nav>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            isOpen: false,
        }
    },
    methods: {
        toggleNav() {
            this.isOpen = !this.isOpen
        },

        closeNav() {
            this.isOpen = false
        }
    }
}
</script>

<style lang="scss" scoped>
a {
    border-bottom-width: 0;
}

nav {

    ul {
        border-top: solid 1px #000;
        // margin-top: 24px;
        // margin-bottom: 64px;

        li {
            text-align: center;
            border-bottom: solid 1px #000;
            font-size: 21px;
            cursor: pointer;
            letter-spacing: -1px;
            padding: 4px 0;

            &:hover {
                background-color: #F2F5F9;
            }

            a {
                display: block;
            }
        }

        li:last-child {
            border-bottom: solid 0px #000;
        }
    }
}

#holder {
    background-image: url("@/assets/img/axd_logo_bg.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: auto 64px;
    position: relative;
}
</style>
