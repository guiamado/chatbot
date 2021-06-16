<template>
    <v-card :max-width="sizeDefaultImg.width">
        <v-img
            :src="cardImg"
            :height="sizeDefaultImg.height"
            :width="sizeDefaultImg.width"
        ></v-img>
        <v-card-title :class="titleSize">
            Card Title
        </v-card-title>

        <v-card-subtitle style="text-align: justify;">
            Card subtitle
        </v-card-subtitle>

        <v-card-text style="text-align: justify;">
            Card normal text.
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: 'Card',
    data() {
        return {
            cardImg: require('@/assets/images/commom/v-img.svg'),
        }
    },
    computed: {
        titleSize() {
            if(this.$vuetify.breakpoint.smOnly || this.$vuetify.breakpoint.mdOnly) {
                return 'text-h5 font-weight-bold';
            }
            if (this.$vuetify.breakpoint.xsOnly) {
                return 'text-body-1 font-weight-bold';
            }
            return 'text-h4 font-weight-bold';
        },
        sizeDefaultImg() {
            let size = {
                height: 152.76,
                width: 886,
            };

            if(this.$vuetify.breakpoint.smOnly) {
                size.height = 100;
                size.width = 580;
                return size;
            }
            if (this.$vuetify.breakpoint.xsOnly) {
                size.height = 51;
                size.width = 322;
                return size;
            }
            return size;
        }
    }

}
</script>

<style>

</style>