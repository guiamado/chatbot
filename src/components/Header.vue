<template>
  <div :class="{'component-margin': !$vuetify.breakpoint.xsOnly, 'component-margin-mobile': $vuetify.breakpoint.xsOnly}">
    <div class="image-adjust">
        <v-img :src="topLeftImage" :width="tamanhoImagem" :height="tamanhoImagem"></v-img>
    </div>
    <v-row v-if="!$vuetify.breakpoint.xsOnly" class="justify-large-screen">
        <v-col cols="8" xl="4" lg="4" sm="12">
            <v-container>
                <v-row class="text-center justify-large-screen">
                    <v-col cols="2">
                        <v-hover
                            v-slot="{ hover }"
                        >
                            <v-btn
                                tile
                                text
                                color="#1976d2"
                                :class="{ 'underline-button': verifyRoute(hover, '/')}"
                                @click="changeRoute('/')"
                            >
                                Início
                            </v-btn>
                        </v-hover>
                    </v-col>
                    <v-col cols="2">
                        <v-hover
                            v-slot="{ hover }"
                        >
                            <v-btn
                                tile
                                text
                                color="#1976d2"
                                :class="{ 'underline-button': verifyRoute(hover, '/about')}"
                                @click="changeRoute('/about')"
                            >
                                Sobre
                            </v-btn>
                        </v-hover>
                    </v-col>
                    <v-col cols="2" xl="2" md="3" sm="3">
                        <v-hover
                            v-slot="{ hover }"
                        >
                            <v-btn
                                tile
                                text
                                color="#1976d2"
                                :class="{ 'underline-button': hover }"
                            >
                                Documentos
                            </v-btn>
                        </v-hover>
                    </v-col>
                    <v-col cols="2">
                        <v-hover
                            v-slot="{ hover }"
                        >
                            <v-btn
                                tile
                                text
                                color="#1976d2"
                                :class="{ 'underline-button': hover }"
                            >
                                Contatos
                            </v-btn>
                        </v-hover>
                    </v-col>
                </v-row>
            </v-container>
        </v-col>
    </v-row>
    <template v-if="$vuetify.breakpoint.xsOnly">
        <div class="title-mobile">
            Início
        </div>
        <div style="text-align: end;">
            <v-app-bar-nav-icon
                color="#12174E"
                class="space-navbar-icon"
                @click.stop="drawer = !drawer"
            ></v-app-bar-nav-icon>
        </div>
    </template>
    <v-navigation-drawer
      v-model="drawer"
      temporary
      right
      app
    >
      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <!-- <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon> -->

          <v-list-item-content>
            <v-list-item-title style="color: #12174E;">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            topLeftImage: require('@/assets/images/topLeft.svg'),
            drawer: null,
            items: [
                { title: 'Início', icon: 'mdi-view-dashboard' },
                { title: 'Sobre', icon: 'mdi-forum' },
                { title: 'Documentos', icon: 'mdi-forum' },
                { title: 'Contatos', icon: 'mdi-forum' },
            ],
        };
    },
    computed: {
        tamanhoImagem() {
            if(this.$vuetify.breakpoint.smOnly) {
                return 170;
            }
            if (this.$vuetify.breakpoint.xsOnly) {
                return 53;
            }
            return 250;
        }
    },
    methods: {
        verifyRoute(hover, route) {
            if(hover) {
                return true;
            }
            if(this.$route.path === route) {
                return true;
            }
            return false;
        },
        changeRoute(rota) {
            if (this.$route.path == rota) return;
            this.$router.push({ path: rota });
        },
    },

}
</script>

<style scoped>
.underline-button {
    border-bottom: 2px solid #1976d2;
}

.justify-large-screen {
    justify-content: center;
}

.image-adjust {
    top: 0;
    left: 0;
    position: absolute;
}

.space-navbar-icon {
    margin-top: 16px;
    margin-right: 21px;
}

.title-mobile {
    margin-left: 26px;
    margin-top: 20px;
    position: absolute;
    font-size: 20px;
    color: #12174E;
}

.component-margin {
    margin-bottom: 100px;
}

.component-margin-mobile {
    margin-bottom: 14px;
}
</style>