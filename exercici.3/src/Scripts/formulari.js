
import Test from './../components/Test.vue'
import ModalBootstrap from './../components/ModalBootstrap.vue'
import Fade from "./../components/Animations/Fade"

export default {
    name: 'Formulari',

    components:{
        ModalBootstrap,
        Test,
        Fade
    },

    data(){
        return{
            pswPadreConf:'',

            value:'',

            nOk:{
                arrayNombre:'',
                valorNombre:''
            },
            mOk:{
                arrayMobil:'',
                valorMobil:''
            },
            cpOk:{
                arrayCodi:'',
                valorCodi:''
            },
            eOk:{
                arrayMail:'',
                valorMail:''
            },
            pOk:{
                arrayPsw:'',
                valorPsw:''
            },
            cOk:{
                arrayConf:'',
                valorConf:''
            },

            disabled: true,

            showModal: false,
            }
    },

    //Desactivo botón hasta que todos los campos esten llenos y Ok(no hay errores en array)
    computed:{
        enableSubmitBtn() {
            if (this.nOk.valorNombre.length === 0 ||
                this.mOk.valorMobil.length === 0 ||
                this.cpOk.valorCodi.length === 0 ||
                this.eOk.valorMail.length === 0 ||
                this.pOk.valorPsw.length === 0 ||
                this.cOk.valorConf.length === 0){
                    return true;
                }

            if (this.nOk.arrayNombre.length === 0 &&
                this.mOk.arrayMobil.length === 0 &&
                this.cpOk.arrayCodi.length === 0 &&
                this.eOk.arrayMail.length === 0 &&
                this.pOk.arrayPsw.length === 0 &&
                this.cOk.arrayConf.length === 0)
                {
                return false;
            }else{
                return true;
            }
        },

    },

    //Si el botón no esta ok(todas validaciones ok) no se abre modal
    methods:{
        openModal(){
            if (!this.enableSubmitBtn){
                this.showModal = true;
                }
            else{
                this.showmodal= false;
            }
        },

     },
}


