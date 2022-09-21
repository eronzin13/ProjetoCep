<script>
import axios from "axios";
export default {
  data() {
    return {
      cep: "",
      endereco: {},
    };
  },
  methods: {
    async buscar() {
      const url = `https://viacep.com.br/ws/${this.cep}/json/`;
      const res = await axios.get(url);
      this.endereco = res.data;
    },
  },
};
</script>

<template>
  <div class="Principal">
    <form @submit.prevent="buscar">
      <label> Digite cep</label>
      <input type="text" v-model="cep" placeholder="digite o cep" />
      <button type="submit">pesquisar</button>
    </form>
    <form class="end">
      <label for="Rua">Rua</label>
      <input type="text" v-model="endereco.logradouro" />
      <label for="Numero">Numero</label>
      <input type="text" v-model="endereco.numero" />
      <label for="bairro">Bairro</label>
      <input type="text" v-model="endereco.bairro" />
    </form>
    {{ endereco }}
  </div>
</template>
<style scoped>
.end {
  display: center;
  flex-direction: column;

  margin: auto;
  justify-content: center;
}
</style>
