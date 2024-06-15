<template>
    <div>
        <!-- INICIO MENU -->
        <nav class="menu mt-3">
        <div class="container">
          <router-link to="/" class="navbar-brand m">
            <img src="https://res.cloudinary.com/dqxjwwrcu/image/upload/v1718207973/logoLetsCandy_py2wuy.png" alt="Let's Candy" width="80" height="80">
          </router-link>
          </div>
        <router-link to="/" class=" me-3 btn btn-outline-danger h-100 d-flex align-items-center border-0 btnMenuInicial">Inicio</router-link>
        <router-link to="/sacola" class=" me-3 btn btn-outline-danger h-100 d-flex align-items-center border-0 btnMenuInicial">Sacola
          <!-- <span v-if="sacola.length" class="position-absolute top-0 mt-4 ms-5 translate-middle badge rounded-pill bg-danger">
                {{sacola.length}}
              </span> -->
        </router-link>
        <router-link to="/sobrenos" class=" me-3 btn btn-outline-danger  h-100 d-flex align-items-center border-0 btnMenuInicial">Sobre Nós</router-link>
    </nav>
   
        <!-- FIM MENU -->
    </div>
</template>


<script>
export default {
    name : 'menuInicial',
    // props :['sacola']
}
</script>


<style scoped>
.btnMenuInicial{
  border-radius: 15px;
}
</style>