<template>
    <v-footer
        color="primary lighten-1"
        class="footer-app"
        :height="footerSize"
        app
        absolute
    >
        <div class="coffe-table-style" :style="{ marginBottom: marginCoffe }">
            <v-img :src="coffeTable" :width="coffeTableSize.width" :height="coffeTableSize.height" contain></v-img>
        </div>
        <v-row align="center">
            <v-col offset="6" class="image-center">
                <v-img
                    :src="logoOficinaMunicipal"
                    :width="logoOficinaMunicipalSize.width"
                    :height="logoOficinaMunicipalSize.height"
                    contain
                ></v-img>
            </v-col>
            <v-col class="image-center">
                <v-img
                    :src="logoKonrad"
                    :width="logoKonradSize.width"
                    :height="logoKonradSize.height"
                    contain
                ></v-img>
            </v-col>
        </v-row>
    </v-footer>
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {
            logoKonrad: require('@/assets/images/footer/logo-konrad.svg'),
            coffeTable: require('@/assets/images/footer/image-footer-left.svg'),
            logoOficinaMunicipal: require('@/assets/images/footer/logo-oficina-municipal.svg'),
        };
    },
    computed: {
        footerSize() {
            if(this.$vuetify.breakpoint.smOnly) {
                return 74.2;
            }
            if (this.$vuetify.breakpoint.xsOnly) {
                return 36;
            }
            return 139;
        },
        logoKonradSize() {
            let size = {
                height: 49,
                width: 158,
            }
            if(this.$vuetify.breakpoint.smOnly) {
                size.height = 26.16;
                size.width = 84.34;
                return size;
            }
            if (this.$vuetify.breakpoint.xsOnly) {
                size.height = 12.72;
                size.width = 41;
                return size;
            }
            return size;
        },
        coffeTableSize() {
            let size = {
                height: 224,
                width: 491,
            }
            if(this.$vuetify.breakpoint.smOnly) {
                size.height = 130.96;
                size.width = 262.1;
                return size;
            }
            if (this.$vuetify.breakpoint.xsOnly) {
                size.height = 62.39;
                size.width = 127.42;
                return size;
            }
            return size;
        },
        marginCoffe() {
            if(this.$vuetify.breakpoint.smOnly) {
                return '143px';
            }
            if (this.$vuetify.breakpoint.xsOnly) {
                return '72px';
            }
            
            return '262px';
        },
        logoOficinaMunicipalSize() {
            let size = {
                height: 98,
                width: 230,
            }
            if(this.$vuetify.breakpoint.smOnly) {
                size.height = 52.31;
                size.width = 122.78;
                return size;
            }
            if (this.$vuetify.breakpoint.xsOnly) {
                size.height = 25.43;
                size.width = 59.69;
                return size;
            }
            return size;
        },
    },

}
</script>

<style>
.footer-app {
    background: linear-gradient(269.75deg, #00FFF3 1.86%, #6C63FF 104.98%) !important;
    margin-top: 100px;
}

.coffe-table-style {
    position: absolute;
    /* margin: 0px 207px; */
    margin-left: 73.5;
}

.image-center {
    text-align: -webkit-center;
}
</style>