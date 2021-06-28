<template>
    <div>
        <v-container style="text-align: -webkit-center;">
            <Card :title="'Quem é o Assis?'">
                <template v-slot:cardText>
                    <div class="black--text">
                        <p>
                            Assis é um assistente virtual que ajuda gestores públicos a modernizar suas organizações com
                            uma consultoria especializada sobre ética, inteligência artificial e inovação
                            na administração pública.
                        </p>
                        <p>
                            Desenvolvido numa parceria entre Oficina Municipal e Fundação Konrad Adenauer, o Assis
                            usa as tecnologias mais modernas para trazer essas informações de uma forma completamente gratuita.
                        </p>
                        <p>
                            Além disso, é possível avaliar o desempenho do Assis como assistente. Sua avaliação é recebida
                            por um time de especialistas que ajustam o aprendizado do Assis para garantir que ele está dando
                            as respostas certas para ajudar nos seus problemas mais difíceis.
                        </p>
                        <p>
                            Coisas que o Assis sabe falar:
                            <ul>
                                <li>O que é inteligência artificial ? Como funciona ?</li>
                                <li>Quais são exemplos de projetos de IA na administração pública ?</li>
                                <li>Quais são as leis relacionadas a esse assunto ?</li>
                            </ul>
                        </p>
                        <p>
                            Coisas que o Assis não sabe falar:
                            <ul>
                                <li>Assuntos pessoais</li>
                                <li>Atualidades da política brasileira</li>
                            </ul>
                        </p>
                    </div>
                </template>
            </Card>
        </v-container>
    </div>
</template>

<script>
import Card from '../commom/Card.vue';
export default {
    name: 'About',
    components: {
        Card,
    },
    data() {
        return {

        }
    }
}
</script>

<style>

</style>