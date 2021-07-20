import Vue from 'vue';
import Vuex from 'vuex';
import movies from './../assets/movies.js'

Vue.use(Vuex);

export default new Vuex.Store({
  
  state: {
    movies: movies(), // He importado objeto, con movies() accedo a su property movies
  },

  getters:{

    //Filtra disponibles
    availableTrueMovies: state =>{
       return state.movies.filter(movie => movie.available === true)
    },

    //Filtra No disponibles
    availableFalseMovies: state =>{
      return state.movies.filter(movie => movie.available === false)
    },

    //Filtra disponibles + Encuentra por título
    getMoviesAvailable:(state, getters) => (title) => {
      return getters.availableTrueMovies.filter(movie => movie.title.toLowerCase().indexOf(title.toLowerCase())>-1)
    },

    //Filtra No disponibles + Encuentra por título
    getMoviesNotAvailable:(state, getters) => (title) => {
      return getters.availableFalseMovies.filter(movie => movie.title.toLowerCase().indexOf(title.toLowerCase())>-1)
    },

  },

  mutations:{
    crearArray(state){
      Array.from(state.movies)
    },
  
  },

})






