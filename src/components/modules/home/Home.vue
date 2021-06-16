<template>
    <div>
        <v-container
            :fluid="$vuetify.breakpoint.lgAndUp"
            :class="{'container-lg': $vuetify.breakpoint.lgAndUp}"
        >
            <v-row
                no-gutters
                align="center"
                :class="{'first-row': !$vuetify.breakpoint.xsOnly, 'first-row-mobile': $vuetify.breakpoint.xsOnly}"
            >
                <v-col class="text-color" cols="12" xl="6" lg="6" md="6" sm="6">
                    <div :class="titleSize">
                        Super Poderes na Gestão Pública com Alex
                    </div>
                    <div :class="{'text-center': $vuetify.breakpoint.xsOnly}">
                        Seja para agilizar o seu processo de conhecimento das leis ou para
                        revisar aquele documento, deixa que Alex resolve para você!!
                    </div>
                    <div :class="{'text-center': $vuetify.breakpoint.xsOnly}">
                        <v-btn
                            rounded
                            color="primary"
                            dark
                            class="mt-2 say-hello-button"
                            @click="abrirChat"
                        >
                            Dizer Olá
                        </v-btn>
                    </div>
                </v-col>
                <v-col v-if="!$vuetify.breakpoint.xsOnly" cols="6" class="image-center">
                    <template v-if="$vuetify.breakpoint.lgAndUp">
                        <div style="position: relative;">
                            <v-img 
                                id="bodyBackground"
                                :src="bodyBackground"
                                width="797"
                                height="657"
                                class="image-body-background-lg"
                                contain
                            ></v-img>
                            <v-img
                                :src="heroImageRight"
                                contain
                                :width="heroImageRightSize.width"
                                :height="heroImageRightSize.height"
                                id="heroImage"
                                style="position: relative;"
                            ></v-img>
                        </div>
                    </template>
                    <v-img
                        v-else
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
                </v-col>
                <v-col :key="i" v-if="$vuetify.breakpoint.xsOnly" cols="12" class="image-center mb-4">
                    <v-img
                        :src="card"
                        contain
                        max-height="auto"
                        :width="cardsWidth"
                    ></v-img>
                </v-col>
                </template>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
            solucionaDuvida: require('@/assets/images/home/solucionaDuvida.svg'),
            multiCanal: require('@/assets/images/home/multiCanal.svg'),
            cardDisponibilidade: require('@/assets/images/home/cardDisponibilidade.svg'),
            heroImageRight: require('@/assets/images/home/hero-image-right.svg'),
            bodyBackground: require('@/assets/images/home/body-background-top-right.svg'),
            cards: [],
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

.say-hello-button {
    background: linear-gradient(269.75deg, #00FFF3 1.86%, #6C63FF 104.98%, #6C63FF 104.98%);
    height: 52px !important;
    width: 111px !important;
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
</style>