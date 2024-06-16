<template>
  <!-- INICIO MENU -->
  <div>
    <!-- <div class="container" id="nav-container">
      <nav class="navbar navbar-expand-lg menu fixed-top navbar-light">    
        <router-link to="/" class="navbar-brand ms-5">
          <img src="https://res.cloudinary.com/dqxjwwrcu/image/upload/v1718207973/logoLetsCandy_py2wuy.png" alt="Let's Candy" width="80" height="80">
        </router-link>       
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-links" aria-controls="navbar-links" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbar-links">
          <div class="navbar-nav">
            <router-link to="/" class="nav-item me-3 btn btn-outline-danger h-100 d-flex align-items-center border-0 btnMenuInicial" style="margin-left: auto">Inicio</router-link>
            <router-link to="/sacola" class="nav-item me-3 btn btn-outline-danger h-100 d-flex align-items-center border-0 btnMenuInicial">Sacola
            </router-link>
            <router-link to="/sobrenos" class="nav-item me-3 btn btn-outline-danger  h-100 d-flex align-items-center border-0 btnMenuInicial">Sobre Nós</router-link>
          </div>
        </div>
      </nav>
    </div> -->






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