<template>
        <!-- INICIO CARROSSEL -->

        <div id="carouselExampleIndicators" class="carousel slide mt-3" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active imagemCarrossel" style="background-image: url(https://res.cloudinary.com/dqxjwwrcu/image/upload/v1720546596/banner1_ihbogn.jpg);">

          </div>
          <div class="carousel-item imagemCarrossel" style="background-image: url(https://res.cloudinary.com/dqxjwwrcu/image/upload/v1720546596/banner2_f09v88.jpg);" >

          </div>
          <div class="carousel-item imagemCarrossel" style="background-image: url(https://res.cloudinary.com/dqxjwwrcu/image/upload/v1720546596/banner3_mn5bam.jpg);">

          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <!-- FIM CARROSSEL -->
</template>

<script>
export default {
    name : 'Banner'
}
</script>


<style scoped>
@media(max-width:730px){
  .carousel-indicators{
    top:3.5em;
  }
}
</style>