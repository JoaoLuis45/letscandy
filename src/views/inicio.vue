<template>
  <div class="inicio">
    <btnFlutuante :sacola="sacola"/>
    <Banner/>
    <ColunasInicio/>
    <TitleCardapio/>
    <TitleGeladinhos/>

        <!-- INICIO PRODUTOS DUDU -->
        <div class="container-fluid mt-5 mb-5">
          <div class="row align-items-start">
            <div class="col-md-3 colunaItems" v-for="(l,index) in listaGeladinhos" :key="index">
              <div class="card" style="width: 25rem; height: 25rem; display: flex;  background-color: rgba(233, 222, 222, 0.598); justify-content: space-between; border-radius: 15px;">
                  <div class="card-img-top imgcard rounded-circle" :style="l.img"></div>
                  <div class="card-body">
                    <h5 class="card-title">{{l.sabor}}</h5>
                     <p class="card-text">{{l.desc}}</p>
                     <p class="itemPreco">R${{l.preco}}</p>
                    <a @click="addSacola(l)" class="btn btn-danger btnCard">Adicionar à sacola</a>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <!-- FIM PRODUTOS DUDU-->

        <TitleDocinhos/>

                <!-- INICIO PRODUTOS Docinhos -->
                <div class="container-fluid mt-5 mb-5">
            <div class="row align-items-start">
              <div class="col-md-3 colunaItems" v-for="(l,index) in listaDocinhos" :key="index">
                <div class="card" style="width: 25rem; height: 25rem; display: flex;  background-color: rgba(233, 222, 222, 0.598); justify-content: space-between;">
                    <div class="card-img-top imgcard rounded-circle" :style="l.img"></div>
                    <div class="card-body">
                      <h5 class="card-title">{{l.sabor}}</h5>
                      <p class="card-text">{{l.desc}}</p>
                      <p class="itemPreco">R${{l.preco}}</p>
                      <a @click="addSacola(l)"  class="btn btn-danger">Adicionar à sacola</a>
                    </div>
                  </div>
              </div>
          </div>
        </div>
        <!-- FIM PRODUTOS Docinhos-->

  </div>
</template>

<script>
import btnFlutuante from '../components/btnFlutuante.vue'
import Banner from '../components/Banner.vue'
import ColunasInicio from '../components/ColunasInicio.vue'
import TitleCardapio from '../components/TitleCardapio.vue'
import TitleGeladinhos from '../components/TitleGeladinhos.vue'
import TitleDocinhos from '../components/TitleDocinhos.vue'
export default {
  name: 'inicio',
  emits : ['atualizarSacola'],
  components : {
    btnFlutuante,
    Banner,
    ColunasInicio,
    TitleCardapio,
    TitleGeladinhos,
    TitleDocinhos
  },
  data(){
    return{
      listaGeladinhos : null,
      listaDocinhos : null,
      sacola : []
    }
  },
  methods: {
    async getGeladinhos () {
      const req = await fetch('https://backlets.vercel.app/dudus')
      const data = await req.json()

      this.listaGeladinhos = data

    },
    async getDocinhos () {
      const req = await fetch('https://backlets.vercel.app/docinhos')
      const data = await req.json()

      this.listaDocinhos = data

    },
    async getSacola() {
      const req = await fetch('https://backlets.vercel.app/sacola')
      const data = await req.json()

      this.sacola = data

    },
    notifySucess(){
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "Adicionado à sacola!"
      });
},

    notifyError(){
      const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });
        Toast.fire({
          icon: "error",
          title: "Item repetido!"
        });
    },

 async addSacola(obj){
    if (!this.sacola.find(item => item.sabor === obj.sabor)) {
      this.sacola.push(obj)

      const dataJson = JSON.stringify(obj)
      const req = await fetch('https://backlets.vercel.app/sacola',{
        method : "POST",
        headers : {"Content-Type" : "application/json"},
        body : dataJson
        })
      this.notifySucess()
    }else{
      this.notifyError()
    }
    
}
  },
  mounted(){
    this.getGeladinhos()
    this.getDocinhos()
    this.getSacola()
  }
}
</script>

<style scoped>
.btnCard{
  border-radius: 15px;
}
</style>