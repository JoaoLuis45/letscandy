<template>
  <!-- INICIO MENU -->
  <div>

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <router-link to="/" class="navbar-brand ms-2">
          <img src="https://res.cloudinary.com/dqxjwwrcu/image/upload/v1718207973/logoLetsCandy_py2wuy.png" alt="Let's Candy" width="80" height="80">
        </router-link>    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link @click="colapsar" to="/" class="nav-item me-3 btn btn-outline-danger h-100 d-flex align-items-center border-0 btnMenuInicial">Inicio</router-link>
        </li>
        <li class="nav-item">
          <router-link @click="colapsar" to="/sacola" class="nav-item me-3 btn btn-outline-danger h-100 d-flex align-items-center border-0 btnMenuInicial">Sacola
          </router-link>
        </li>
        <li class="nav-item">
          <router-link @click="colapsar" to="/sobrenos" class="nav-item me-3 btn btn-outline-danger  h-100 d-flex align-items-center border-0 btnMenuInicial">Sobre Nós</router-link>
        </li>
        <li v-show="!logado" class="nav-item">
          <router-link @click="colapsar" to="/login" class="nav-item me-3 btn btn-outline-danger  h-100 d-flex align-items-center border-0 btnMenuInicial">Login</router-link>
        </li>
        <li v-show="logado" class="nav-item">
          <router-link @click="colapsar" to="/adm" class="nav-item me-3 btn btn-outline-danger  h-100 d-flex align-items-center border-0 btnMenuInicial">Administração</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </div>
  <!-- FIM MENU -->
</template>


<script>
export default {
    name : 'menuInicial',
    props:['logado'],
    methods:{
      colapsar(){
        var navbarCollapse = document.getElementById('navbarTogglerDemo02');
        if (window.innerWidth <= 992) {
                var bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                    toggle: true
                });
            }
      }
    }
}
</script>


<style scoped>
.btnMenuInicial{
  border-radius: 15px;
}

.navbar-collapse{
  flex-grow: 0;
}
</style>