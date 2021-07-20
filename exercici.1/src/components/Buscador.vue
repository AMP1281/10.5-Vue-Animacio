<template>

<div>
    <form>

      <input class="w-100 my-3" v-model="titleInput" placeholder="Buscar..." type="text" name="title">

      <div class="row my-3">

          <div class="col">
                <div class="form-check text-end">
                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="optionAvailable" v-model="x">
                    <label class="form-check-label" for="gridRadios1">Disponible</label>
                </div>
          </div>

          <div class="col">
                  <div class="form-check">
                      <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="optionNotAvailable" v-model="x">
                      <label class="form-check-label" for="gridRadios2">No Disponible</label>
                  </div>
          </div>

      </div>
    </form>

    <div>

      <div class="container">
        
                <Fade>

                <ul v-show="resultados" class="row list-unstyled">

                          <li class="col-lg-4 mt-4 d-flex align-items-stretch justify-content-center" v-for="(item, index) in resultados" :key="index">
                                  <div class="card text-center w-100">
                                        <h5 class="card-header py-4">{{item.title}} <br> Available: {{item.available}}</h5>
                                        <div class="card-body py-4"> <p class="card-text">{{item.description}}</p></div>
                                  </div>
                        </li>
                </ul>
                
                </Fade>

        <div>
          
            <Fade>

              <p v-if="resultados.length<1" class="alert alert-danger">No hay películas disponibles</p>
            
            </Fade>

        </div>

    </div>

    </div>

</div>

</template>

<script type="text/javascript" src="./../Scripts/Buscador/buscador.js"></script>

<style></style>
