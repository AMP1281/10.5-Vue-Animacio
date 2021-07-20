<template>

<div class="container">



    <button type="button" class="btn btn-primary mt-5" @click="openModal()" data-toggle="modal" data-target="#ModalBootstrap">Open modal</button>

            <Fade>

                <ModalBootstrap v-if="showModal">

                    <template v-slot:header>
                    <h5 class="modal-title">Hola Mundo</h5>
                        <button  @click="showModal = false" type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </template>

                    <template v-slot:body="slotProps">
                        <h2 class="mb-4">Cambio de moneda</h2>
                        <p class="position-absolute fixed-bottom mb-3">El cambio de {{ slotProps.numero }}€ en dolares son {{ slotProps.numeroCurrency }}$</p>

                    </template>

                    <template v-slot:footer>
                        <button @click="closeModal()" type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                        <button @click="limpiar()" type="button" class="btn btn-primary">Enviar</button>
                    </template>

                </ModalBootstrap>

            </Fade>


    <p v-show="mostrar" class="mt-5">Heu tancat el modal</p>

</div>

</template>


<script type="text/javascript" src="./../Scripts/Pare.js"></script>

<style scoped>


</style>