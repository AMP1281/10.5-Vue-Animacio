import Fade from "./../components/Animations/Fade"

export default {

    components:{
        Fade
    },

    props:  ['label','confPadrepsw'],

    data(){
        return{

            value:'',

            lerrores:[],

            isActive: true,
            verde: false,
            rojo: false,

            eobligatori:"* Requerit. ",
            enom:"Mínim 6 caràcters i màxim de 13",
            etelf:"Aquest camp ha de contenir 9 caràcters",
            ecodi:"Aquest camp ha de contenir 5 caràcters",
            enomnumeros:"El seu nom no pot contenir números.",
            enumeros:"No pot contenir lletres.",
            emajus:"Ha de contenir majúscules",
            eminus:"Ha de contenir minuscules",
            econfirm: "Ha de coincidir amb password. ",
            eEmail:"Ha de tenir format e.mail"

        }
    },

    methods:{

        inline(){

            this.lerrores=[];

            //Nom
            if(this.label == 'Nom:'){

                //Validacio
                this.obligatori(this.value);
                this.minMax(this.value);
                this.lletres(this.value);

                this.$emit('nombreOk',{arrayNombre:this.lerrores, valorNombre:this.value});//Envio errors i valor del camp al pare per activar boto Enviar

                !this.lerrores.length? ((this.isActive=false), (this.verde=true), (this.rojo=false)) : ((this.isActive=false),(this.verde=false),(this.rojo=true));//Activo class de Bootstrap invalid o valid depenent si hi han errors en el array

            }

            //Mobil
            if(this.label == 'Mobil:'){

                this.obligatori(this.value);
                this.minTel(this.value);
                this.numeros(this.value);

                this.$emit('mobilOk',{arrayMobil:this.lerrores, valorMobil:this.value});

                !this.lerrores.length? ((this.isActive=false), (this.verde=true), (this.rojo=false)) : ((this.isActive=false),(this.verde=false),(this.rojo=true));
                
            }
            //Codi postal
            if(this.label == 'Codi Postal:'){

                this.obligatori(this.value);
                this.mincodi(this.value);
                this.numeros(this.value);

                this.$emit('codiOk',{arrayCodi:this.lerrores,valorCodi:this.value});

                !this.lerrores.length? ((this.isActive=false), (this.verde=true), (this.rojo=false)) : ((this.isActive=false),(this.verde=false),(this.rojo=true));

            }
            //E.mail
                if(this.label == 'E.mail:'){

                this.obligatori(this.value);
                this.email(this.value);

                this.$emit('mailOk',{arrayMail:this.lerrores, valorMail:this.value});

                !this.lerrores.length? ((this.isActive=false), (this.verde=true), (this.rojo=false)) : ((this.isActive=false),(this.verde=false),(this.rojo=true));

            }
            //Password
            if(this.label == 'Password:'){

                this.obligatori(this.value);
                this.minMax(this.value);
                this.may(this.value);
                this.min(this.value);

                this.$emit('pswOk',{arrayPsw:this.lerrores, valorPsw:this.value});

                !this.lerrores.length? ((this.isActive=false), (this.verde=true), (this.rojo=false)) : ((this.isActive=false),(this.verde=false),(this.rojo=true));

            }
            //Confirmar Password
            if(this.label == 'Confirmar Password:'){

                this.obligatori(this.value);
                this.igual(this.value,this.confPadrepsw);//Utilizo el prop recibido del padre confPadrepsw para comparar

                this.$emit('confirmOk',{arrayConf:this.lerrores, valorConf:this.value});

                !this.lerrores.length? ((this.isActive=false), (this.verde=true), (this.rojo=false)) : ((this.isActive=false),(this.verde=false),(this.rojo=true));

            }
            },
             //Validar camps obligatoris
            obligatori(campo){
                if(!campo){
                    this.lerrores.push(this.eobligatori);
                } 
            },
            //Validar min max dígits 6-13
            minMax(campo){ 
                if (campo.length < 6 || campo.length > 13){ 
                    this.lerrores.push(this.enom);
                }
            },
            //Validar min max dígits 9
            minTel(campo){
                if(campo.length < 9 || campo.length > 9){ 
                    this.lerrores.push(this.etelf);
                }
            },
            //Validar min max dígits 5
            mincodi(campo){
                if(campo.length < 5 || campo.length > 5){ 
                    this.lerrores.push(this.ecodi);
                }
            },
            //Validar mayuscules obligatories
            may(campo){
                if (!/[A-Z]/.test(campo)){
                    this.lerrores.push(this.emajus);
                }
            },
            //Validar minuscules obligatories
            min(campo){
                if (!/[a-z]/.test(campo)){
                    this.lerrores.push(this.eminus);
                }
            },
            //Validar que contingui lletres
            lletres(campo){
                if(/[0-9]/.test(campo)){
                    this.lerrores.push(this.enomnumeros);
                }
            },
            //Validar que contingui números
            numeros(campo){
                if(!/[0-9]/.test(campo)){
                    this.lerrores.push(this.enumeros);
                }
            },
            //Validar format e.mail
            email(campo){
                if (!/[\w._-]+@[\wñ._-]+(?:\.[\w]+)+/.test(campo)) {
                    this.lerrores.push(this.eEmail);
                }
            },
            //Validar que dos inputs siguin identics
            igual(campo,c){
                if(c != campo){
                    this.lerrores.push(this.econfirm);
                }
            },
    },

}

