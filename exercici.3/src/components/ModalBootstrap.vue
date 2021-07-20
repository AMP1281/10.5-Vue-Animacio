<template>

<div>

          <div id="ModalBootstrap" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">

            <div class="modal-position">
            <div class="modal-dialog">
              <div class="modal-content">

                <div class="modal-header">
                  <h5 class="modal-title"></h5>
                  <button @click="$emit('close')" type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>

                <div class="modal-body">

                  <ul>Gràcies per registra-se, les seves dades d'usuari són les següents: </ul>

                      <li>Nom: {{ nombre }}</li>
                      <li>Telèfon mòbil: {{ mobil }}</li>
                      <li>Codi Postal: {{ codi }}</li>
                      <li>E.mail: {{ mail }}</li>
                      <li>Password: {{ psw }}</li>
                      <li>Confirmar Password: {{ confirm }}</li>
              

                </div>


                <div class="modal-footer">

                  <button @click="$emit('close')" type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
                
                </div>


              </div>
            </div>
            </div>
          </div>

</div>

</template>

<script type="text/javascript" src="./../Scripts/modalBootstrap.js"></script>

<style scoped>
.modal-position {
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(194, 188, 188, 0.5);
}

</style>