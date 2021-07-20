import ModalBootstrap from './../components/ModalBootstrap.vue'
import Fade from "./../components/Animations/Fade"

export default {
    name: 'Pare',
    components: {
        ModalBootstrap,
        Fade
    },
    data () {
        return{
            showModal: false,
            mostrar:false
            }
    },
    methods:{
        openModal(){
            this.showModal = true;
            this.mostrar= false;
        },
        closeModal(){
            this.showModal = false;
            this.mostrar= true;
        },
        limpiar(){
            this.variable = ''
        }
    },
}