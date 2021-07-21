<template>
<div>
    
<Fade>

    <div class="input-group mt-4">

        <span class="input-group-text font-weight-bold alert-primary">{{ label }}</span>
            
        <input v-model="value" type="text" class= 'form-control' @blur="inline" :class="{ active: isActive, 'is-valid':verde , 'is-invalid':rojo}"/>
        
        <div class="container position-relative col-md-12" style="height: 0.9em !important;">

            <div class="position-absolute">

                    <li class="text-danger list-inline-item" v-for="(errorn, i) in lerrores" :key="i"><small> {{ errorn }} </small></li>

            </div>

        </div>

    </div>
    
</Fade>

</div>

</template>


<script type="text/javascript" src="./../Scripts/test.js"></script>

<style>

.input-group-text {
    min-width:25% !important;
}

</style>