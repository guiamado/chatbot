<template>
    <v-footer
        color="#12174E"
        class="footer-app"
        :height="footerSize"
        app
        absolute
    >
        <v-row align="center" justify="center">
            <div style="display: flex; align-items: center;">
                <v-img
                    :src="logoOficinaMunicipal"
                    :width="logoOficinaMunicipalSize.width"
                    :height="logoOficinaMunicipalSize.height"
                    contain
                    style="margin-right: 70px;"
                ></v-img>
                <v-img
                    :src="logoKonrad"
                    :width="logoKonradSize.width"
                    :height="logoKonradSize.height"
                    contain
                ></v-img>
            </div>
        </v-row>
    </v-footer>
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {
            logoKonrad: require('@/assets/images/footer/logo-akonrad.svg'),
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
    margin-top: 100px;
}


.image-center {
    text-align: -webkit-center;
}
</style>