<template>
    <div>
        <v-container>
            <v-row
                no-gutters
                align="center"
                :class="{'first-row': !$vuetify.breakpoint.xsOnly, 'first-row-mobile': $vuetify.breakpoint.xsOnly}"
            >
                <v-col class="text-color" cols="12" xl="6" lg="6" md="6" sm="6">
                    <div :class="titleSize">
                        Implemente <span class="purple-text">IA</span> na gestão do seu
                        município com o <span class="purple-text">Ethical</span>!
                    </div>
                    <div :class="{'text-center': $vuetify.breakpoint.xsOnly}">
                        Aumente a <span class="font-weight-bold">produtividade</span>, obtendo orientações de maneira
                        <span class="font-weight-bold">rápida</span> sobre as melhores
                        <span class="font-weight-bold">práticas</span> de <span class="font-weight-bold">automação</span>
                        e <span class="font-weight-bold">inteligência artificial</span>
                        no <span class="font-weight-bold">setor público</span>
                        com o assistente virtual <span class="font-weight-bold">Ethical</span>.
                    </div>
                    <div :class="{'text-center': $vuetify.breakpoint.xsOnly}">
                        <v-row align="center" class="mt-2">
                            <v-btn
                                rounded
                                color="#6C63FF"
                                dark
                                class="mt-2 ml-3 mr-4"
                                @click="abrirChat"
                                height="40"
                            >
                                É só perguntar
                            </v-btn>
                            <v-btn
                                rounded
                                color="#12174E"
                                dark
                                class="mt-2 pl-4"
                                @click="abrirChat"
                                height="40"
                                outlined
                                to="/about"
                            >
                                Sobre
                            </v-btn>
                        </v-row>
                    </div>
                </v-col>
                <v-col v-if="!$vuetify.breakpoint.xsOnly" cols="6" class="image-center">
                    <v-img
                        :src="heroImageRight"
                        contain
                        :width="heroImageRightSize.width"
                        :height="heroImageRightSize.height"
                        id="heroImage"
                    ></v-img>

                </v-col>
            </v-row>
            <v-row no-gutters v-if="cards.length > 0">
                <template v-for="(card, i) in cards">
                <v-col :key="i" v-if="!$vuetify.breakpoint.xsOnly" class="image-center">
                    <v-img
                        :src="card"
                        contain
                        max-height="auto"
                        :width="cardsWidth"
                    ></v-img>
                    <div
                        class="black-blue-text"
                        :class="{'text-h5 font-weight-bold px-5 margin-desktop': $vuetify.breakpoint.lgAndUp}"
                        :style="`max-width: ${cardsWidth}px;`"
                    >
                        <span v-html="cardTexts[i].title"></span>
                    </div>
                    <div
                        class="desc-text-color text-center"
                        :class="{'px-5': $vuetify.breakpoint.lgAndUp}"
                        :style="`max-width: ${cardsWidth}px;`"
                    >
                        {{cardTexts[i].description}}
                    </div>
                </v-col>
                <v-col :key="i" v-if="$vuetify.breakpoint.xsOnly" cols="12" class="image-center mb-4">
                    <v-img
                        :src="card"
                        contain
                        max-height="auto"
                        :width="cardsWidth"
                    ></v-img>
                    <div
                        class="black-blue-text"
                        :style="`max-width: ${cardsWidth}px;`"
                    >
                        <span v-html="cardTexts[i].title"></span>
                    </div>
                    <div
                        class="desc-text-color text-center"
                        :style="`max-width: ${cardsWidth}px;`"
                    >
                        {{cardTexts[i].description}}
                    </div>
                </v-col>
                </template>
            </v-row>
            <Carousel :slides="carouselTexts"/>
        </v-container>
    </div>
</template>

<script>
import cardTexts from './helper/cardTexts';
import Carousel from '../commom/Carousel.vue';

export default {
    name: 'Home',
    components: {
        Carousel,
    },
    data() {
        return {
            solucionaDuvida: require('@/assets/images/home/cardSolucionaDuvida.svg'),
            multiCanal: require('@/assets/images/home/cardMultcanal.svg'),
            cardDisponibilidade: require('@/assets/images/home/cardDisponibilidade.svg'),
            heroImageRight: require('@/assets/images/home/hero-image-right.svg'),
            bodyBackground: require('@/assets/images/home/body-background-top-right.svg'),
            cards: [],
            cardTexts,
            carouselTexts: [
                {
                    title: `Você sabia que muitos problemas da <span class="purple-text">gestão pública</span> podem ser solucionados com <span class="purple-text">Inteligência Artificial</span>?`,
                    description: `E que isso não é tão caro e complicado quanto parece.`
                },
                {
                    title: `Você sabia que muitos problemas da <span class="purple-text">gestão pública</span> podem ser solucionados com <span class="purple-text">Inteligência Artificial</span>?`,
                    description: `E que isso não é tão caro e complicado quanto parece.`
                },
                {
                    title: `Você sabia que muitos problemas da <span class="purple-text">gestão pública</span> podem ser solucionados com <span class="purple-text">Inteligência Artificial</span>?`,
                    description: `E que isso não é tão caro e complicado quanto parece.`
                },
            ]
        };
    },
    computed: {
        cardsWidth() {
            if(this.$vuetify.breakpoint.smOnly || this.$vuetify.breakpoint.mdOnly || this.$vuetify.breakpoint.lgOnly) {
                return 209.17;
            }
            if (this.$vuetify.breakpoint.xsOnly) {
                return 302.08;
            }
            return 395;
        },
        titleSize() {
            if(this.$vuetify.breakpoint.smOnly || this.$vuetify.breakpoint.mdOnly) {
                return 'text-h4 font-weight-bold mb-5';
            }
            if (this.$vuetify.breakpoint.xsOnly) {
                return 'text-h5 text-center font-weight-bold mb-5';
            }
            return 'text-h3 font-weight-bold mb-5';
        },
        heroImageRightSize() {
            let size = {
                height: 442,
                width: 592,
            }
            if(this.$vuetify.breakpoint.smOnly) {
                size.height = 206.64;
                size.width = 305.86;
                return size;
            }
            return size; 
        }
    },
    mounted() {
        this.cards = [this.cardDisponibilidade, this.multiCanal, this.solucionaDuvida];
    },
    methods: {
        abrirChat() {
            // eslint-disable-next-line no-undef
            openChat();
        }
    },

}
function openChat() {
  // eslint-disable-next-line no-undef
  Kommunicate.displayKommunicateWidget(true); //This will show the widget
  
  // para ser examinado durante o uso
  // eslint-disable-next-line no-undef
  // Kommunicate.launchConversation();


  // eslint-disable-next-line no-undef
  Kommunicate.startConversation();
}
</script>

<style>
.image-center {
    text-align: -webkit-center;
}

.text-color {
    color: #12174E;
}

.first-row {
    margin-bottom: 105px !important;
}

.first-row-mobile {
    margin-bottom: 30px !important;
}


.image-body-background-lg {
    position: absolute;
    right: 0;
    top: 0;
    margin-right: -12px;
    margin-top: -126px;
}

.container-lg {
    padding-left: 68px;
}

.purple-text {
    color: #6C63FF;
}

.black-blue-text {
    color: #12174E;
    text-align: center;
    font-weight: bold;
    margin-top: -35px;
}

.desc-text-color {
    color: #12174e99;
}

.margin-desktop {
    margin-top: -55px;
}
</style>