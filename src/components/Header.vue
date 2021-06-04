<template>
  <div>
    <v-container>
        <v-row class="text-center">
            <v-col>
                <v-hover
                    v-slot="{ hover }"
                >
                    <v-btn
                        tile
                        text
                        color="#1976d2"
                        :class="{ 'underline-button': hover }"
                    >
                        Início
                    </v-btn>
                </v-hover>
            </v-col>
            <v-col>
                <v-hover
                    v-slot="{ hover }"
                >
                    <v-btn
                        tile
                        text
                        color="#1976d2"
                        :class="{ 'underline-button': hover }"
                    >
                        Sobre
                    </v-btn>
                </v-hover>
            </v-col>
            <v-col>
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
            <v-col>
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
  </div>
</template>

<script>
export default {
    name: 'Header',
    methods: {
    },

}
</script>

<style scoped>
.underline-button {
    border-bottom: 2px solid #1976d2;
}
</style>