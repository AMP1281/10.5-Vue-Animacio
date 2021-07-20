<template>

    <transition
    
        enter-active-class="animate__animated animate__flipInX"
        leave-active-class="animate__animated animate__flipOutX">

        <slot></slot>


    </transition>
    
</template>

<script type="text/javascript" src="./../../Scripts/Animations/fade.js"></script>

<style></style>