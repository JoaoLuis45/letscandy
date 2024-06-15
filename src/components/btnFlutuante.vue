<template>
    <div>
    <!-- INICIO BOTAO FLUTUANTE -->
    <div class="buttonSacola">
       <router-link to="/sacola" class="icon">
        <span v-if="sacola.length > 0" class="position-absolute top-0 ms-4 translate-middle badge rounded-pill bg-danger">
               {{sacola.length}}
             </span>
           <i class="fa-solid fa-bag-shopping"></i>
        </router-link>
   </div>
   <!-- FIM BOTAO FLUTUANTE -->  
    </div>
</template>

<script>
export default {
    name : 'btnFlutuante',
    props : {
        sacola : Array
    }
}
</script>