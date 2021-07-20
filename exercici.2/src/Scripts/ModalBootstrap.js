import Fade from "./../components/Animations/Fade"


export default {
    name: 'ModalBootstrap',

    data () {
        return{
            variable: ''
            }
    },

    components:{
        Fade
    },

    filters:{
            Currency(values){
            return values*1.23
        }
    }

}