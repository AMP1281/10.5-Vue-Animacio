<template>

    <transition name="opacitat"

        appear>

        <slot></slot>


    </transition>
    
</template>

<script type="text/javascript" src="./../../Scripts/Animations/fade.js"></script>

<style>

.opacitat-enter{
  opacity: 0;
}

.opacitat-enter-active {
  transition-duration: 1s;
  transition-delay: 0.2s;
  transition-timing-function: ease-in;
}


</style>