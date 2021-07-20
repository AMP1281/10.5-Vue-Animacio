<template>

    <div class="container">
      <div class="row">
        <h1 class="col text-center mt-4">Buscador de Vuex</h1>
      </div>
        <Buscador></Buscador>
    </div>

</template>

<script>
import Buscador from './Buscador.vue'


export default {
  name: 'Padre',

  components:{
    Buscador
  },

}
</script>
