<template>

<div>

    <div class="container vh-100 d-flex justify-content-center align-items-center align-self-center">

        <form class="w-75 bg-light border border-secondary p-5 rounded">

            <Test label='Nom:' @nombreOk="nOk=$event"/><!--Rebo errors i valor del fill en el @-->
            <Test label='Mobil:' @mobilOk="mOk=$event"/> 
            <Test label='Codi Postal:' @codiOk="cpOk=$event"/>
            <Test label='E.mail:' @mailOk="eOk=$event"/>
            <Test label='Password:' @pswOk="pOk=$event"/>
            <Test label='Confirmar Password:' @confirmOk="cOk=$event" :confPadrepsw="pOk.valorPsw"/><!--Envio psw en :confPadrepsw-->

            <button type="submit" @click.prevent="openModal()" data-toggle="modal" data-target="#ModalBootstrap" class="btn btn-primary btn-block mt-5 rounded-pill" :class="{disabled: enableSubmitBtn}">Validar</button>

        </form>


        <ModalBootstrap v-if="showModal" @close="showModal=false"

            :nombre= 'nOk.valorNombre'
            :mobil= 'mOk.valorMobil'
            :codi= 'cpOk.valorCodi'
            :mail= 'eOk.valorMail'
            :psw= 'pOk.valorPsw'
            :confirm= 'cOk.valorConf'>

        </ModalBootstrap>

    </div>

</div>

</template>

<script type="text/javascript" src="./../Scripts/formulari.js"></script>

<style>


</style>
