<template>
  <div class="inicio">
    <btnFlutuante :sacola="sacola"/>
    <Banner/>
    <ColunasInicio/>
    <TitleCardapio/>

    <div v-for="(c,cindex) in listaCategorias" :key="cindex">
    <TitleCategory :categoryName="c"/>

        <!-- INICIO PRODUTOS -->
        <div class="container-fluid mt-5 mb-5">
          <div class="row align-items-start">
            <div class="col-md-3 colunaItems" v-for="(l,index) in listaProdutos" :key="index" v-show="l.categoria == c && l.ativo">
              <div class="card" style="width: 25rem; height: 25rem; display: flex;  background-color: rgba(233, 222, 222, 0.598); justify-content: space-between; border-radius: 15px;">
                  <div class="card-img-top imgcard rounded-circle" :style="l.img"></div>
                  <div class="card-body">
                    <h5 class="card-title">{{l.sabor}}</h5>
                     <p class="card-text">{{l.desc}}</p>
                     <p class="itemPreco">R${{l.preco}}</p>
                    <div class="btnsAction" :style="!logado ? {justifyContent: 'flex-start'} : {}">
                      <a @click="addSacola(l)" class="btn btn-danger btnCard">Adicionar à sacola</a>
                      <a v-show="logado" @click="desativarProduto(l.sabor)" class="btn btn-danger btnCard">Desativar</a>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
        <!-- FIM PRODUTOS -->
  </div>
</template>

<script>
import btnFlutuante from '../components/btnFlutuante.vue'
import Banner from '../components/Banner.vue'
import ColunasInicio from '../components/ColunasInicio.vue'
import TitleCardapio from '../components/TitleCardapio.vue'
import TitleCategory from '../components/TitleCategoria.vue'
export default {
  name: 'inicio',
  emits : ['atualizarSacola'],
  props:['logado'],
  components : {
    btnFlutuante,
    Banner,
    ColunasInicio,
    TitleCardapio,
    TitleCategory
  },
  data(){
    return{
      listaCategorias : null,
      listaProdutos : null,
      sacola : []
    }
  },
  methods: {
    async getCategorias() {
    let bd = firebase.firestore();
    let categorias = []
    await new Promise((resolve, reject) => {
        bd.collection("categorias").onSnapshot((documento) => {
            
            const changesPromises = []
            
            documento.docChanges().forEach((changes) => {
                if (changes.type === 'added' || changes.type === 'modified' || changes.type === 'removed') {
                    const doc = changes.doc;
                    const dados = doc.data();

                    const changePromise = new Promise((resolve) => {
                        categorias.push(dados.categoria)
                        
                        resolve();
                    });

                    changesPromises.push(changePromise);
                }
            });

            Promise.all(changesPromises)
                .then(resolve)
                .catch(reject);
        });
    });
    this.listaCategorias = categorias
},
    async getProdutos() {
        let bd = firebase.firestore();
        let produtos = []
        await new Promise((resolve, reject) => {
            bd.collection("produtos").onSnapshot((documento) => {
                
                const changesPromises = []
                
                documento.docChanges().forEach((changes) => {
                    if (changes.type === 'added' || changes.type === 'modified' || changes.type === 'removed') {
                        const doc = changes.doc;
                        const dados = doc.data();

                        const changePromise = new Promise((resolve) => {
                          produtos.push(dados)
                            
                            resolve();
                        });

                        changesPromises.push(changePromise);
                    }
                });

                Promise.all(changesPromises)
                    .then(resolve)
                    .catch(reject);
            });
        });
        this.listaProdutos = produtos
    },
    async getSacola() {
      this.sacola = JSON.parse(localStorage.getItem('sacola')) || [];

    },
    notifySucess(msg){
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
        title: msg
      });
},

    notifyError(msg){
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
          title: msg
        });
    },

    async addSacola(obj){
        if (!this.sacola.find(item => item.sabor === obj.sabor)) {
          let sacola = JSON.parse(localStorage.getItem('sacola')) || [];
          sacola.push(obj);
          localStorage.setItem('sacola', JSON.stringify(sacola));
          this.sacola = sacola;
          this.notifySucess("Adicionado à sacola!")
        }else{
          this.notifyError("Item repetido!")
        }
        
    },
    async desativarProduto(sabor) {
          let bd = firebase.firestore();
          try {
              // Procurar o documento que contém a categoria
              let querySnapshot = await bd.collection("produtos").where("sabor", "==", sabor).get();
              
              if (querySnapshot.empty) {
                this.notifyError("Produto não encontrado!")
                  return;
              }

              // Remover todos os documentos encontrados
              querySnapshot.forEach(async (doc) => {
                  await bd.collection("produtos").doc(doc.id).update({
                    ativo: false
                  });
              });
              this.getProdutos()
              this.notifySucess("Produto desativado com sucesso!")
          } catch (error) {
              this.notifyError("Erro ao desativar o produto: ", error)
          }
        }
  },
  mounted(){
    this.getCategorias()
    this.getProdutos()
    this.getSacola()
  }
}
</script>

<style scoped>
.btnCard{
  border-radius: 15px;
  width: 160px;
}
.btnsAction{
  display: flex;
  justify-content: space-evenly;
}
</style>