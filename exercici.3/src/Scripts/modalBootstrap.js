import Fade from "./../components/Animations/Fade"

export default {

  name:'ModalBootstrap',
  
  components:{
    Fade
},

  props:['nombre','mobil','codi','mail','psw','confirm'],

  data(){
    return{
      cerrar: true
    }
  },
}



