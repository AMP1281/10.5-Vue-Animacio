<template>

    <transition name="opacitat"

        appear>

        <slot></slot>


    </transition>
    
</template>

<script type="text/javascript" src="./../../Scripts/Animations/fade.js"></script>

<style>

.opacitat-enter-active, .opacitat-leave-active {
  transition: opacity .40s
}
.opacitat-enter, .opacitat-leave-to {
  opacity: 0
}



</style>