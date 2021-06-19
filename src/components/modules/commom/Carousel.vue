<template>
    <v-card class="margin-carousel">
        <v-carousel
            height="auto"
            hide-delimiter-background
            :continuous="false"
            :cycle="false"
            :show-arrows="false"
            class="buttons-color btn-carousel-color"
        >
            <v-carousel-item
                v-for="(slide, i) in slides"
                :key="i"
            >
                <v-sheet
                    height="100%"
                >
                    <v-card>
                        <v-card-text>
                            <div
                                class="black-blue-text"
                                :class="{'text-h5 font-weight-bold': $vuetify.breakpoint.lgAndUp}"
                            >
                                <span v-html="slide.title"></span>
                            </div>
                            <div
                                class="desc-text-color text-center mb-5"
                            >
                                {{slide.description}}
                            </div>
                        </v-card-text>
                    </v-card>
                </v-sheet>
            </v-carousel-item>
        </v-carousel>
    </v-card>
</template>

<script>
export default {
    name: 'Carousel',
    props: {
        slides: {
            type: Array,
            required: true,
            default: () => [],
        }
    },
    data () {
      return {}
    },
}
</script>

<style lang="scss" scoped>

.buttons-color ::v-deep .v-btn:before {
    background-color: unset;
}


.btn-carousel-color ::v-deep .theme--dark.v-btn.v-btn--icon{
    color: #222E48;
    &.v-btn--active {
        color: #6C63FF;
    }
    &.v-carousel__controls__item .v-icon {
        opacity: 1;
    }
}

.purple-text {
    color: #6C63FF;
}

.black-blue-text {
    color: #12174E;
    text-align: center;
    font-weight: bold;
    margin: 0;
}

.desc-text-color {
    color: #12174e99;
}

.margin-carousel {
    margin-top: 50px;
}

</style>