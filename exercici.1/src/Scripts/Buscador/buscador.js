import Fade from './../../components/Animations/Fade.vue';
import {mapState, mapGetters, mapMutations} from 'vuex'

export default {
  data(){
    return{
      titleInput:'',
      x:'optionAvailable',
    }
  },

  components:{
      Fade
  },

  computed:{
    ...mapState(['movies']),
    ...mapGetters(['availableTrueMovies','availableFalseMovies', 'getMoviesAvailable','getMoviesNotAvailable']),

    //Busca por título en la lista de disponibles
    buscarAvailable(){
         return this.$store.getters['getMoviesAvailable'](this.titleInput);
    },
    //Busca por título en la lista de NO disponibles
    buscarNotAvailable(){
         return this.$store.getters['getMoviesNotAvailable'](this.titleInput);
    },

    resultados(){
      if (this.titleInput ==="" && this.x === 'optionAvailable'){
        return this.availableTrueMovies;
      }

      if (this.titleInput ==="" && this.x === 'optionNotAvailable'){
        return this.availableFalseMovies
      }

      if(this.titleInput.length > 2 && this.titleInput !=="" && this.x === 'optionAvailable'){
        return this.buscarAvailable
      }

      if(this.titleInput.length > 2 && this.titleInput !=="" && this.x === 'optionNotAvailable'){
        return this.buscarNotAvailable
      }

      else{
        return false
      }

    },

  },

  methods:{
    ...mapMutations(['crearArray']),
  },

}

