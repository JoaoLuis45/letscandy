<template>
    <div class="adm">
        <h1>Bem vindo a área de administração {{ user }}</h1>

        <div class="container-fluid mt-5 mb-5">
          <div class="row align-items-start">
            <div class="col-md-6 colunaItems">
              <div class="card card1" style="width: 25rem; height: 30rem; display: flex;  background-color: rgba(233, 222, 222, 0.598); justify-content: space-between; border-radius: 15px;">    
                  <div class="card-body">
                    <div class="card-img-top imgcard rounded-circle" style="background-image: url(https://res.cloudinary.com/dqxjwwrcu/image/upload/v1719887307/9676162_category_icon_nzanof.png);"></div>
                    <h5 class="card-title">Adicionar nova categoria</h5>
                     <p class="card-text">Será criado um novo tipo de categoria no menu inicial do site, onde conterá os produtos relacionados à ela!</p>
                     <p class="itemPreco">Mais detalhamento</p>
                     <div class="btnsADM">
                        <a class="btn btn-danger btnCard btnADM" @click="criarCategoria">Criar categoria</a>
                        <a class="btn btn-danger btnCard btnADM" @click="removerCategoria">Excluir categoria</a>
                     </div>
                    
                  </div>
                </div>
              </div>
              <div class="col-md-6 colunaItems">
              <div class="card card2" style="width: 25rem; height: 30rem; display: flex;  background-color: rgba(233, 222, 222, 0.598); justify-content: space-between; border-radius: 15px;">    
                  <div class="card-body">
                    <div class="card-img-top imgcard rounded-circle" style="background-image: url(https://res.cloudinary.com/dqxjwwrcu/image/upload/v1719887307/6843036_courier_deliver_delivery_package_product_icon_rkyy97.png);"></div>
                    <h5 class="card-title">Adicionar novo produto</h5>
                     <p class="card-text">Será cadastrado um novo produto para ser vendido em alguma categoria anteriormente cadastrada! Os novos produtos irão aparecer na aba inicial.</p>
                     <p class="itemPreco">Mais produtos</p>
                     <div class="btnsADM">                    
                        <a class="btn btn-danger btnCard btnADM" @click="CriarProduto">Criar produto</a>
                        <a class="btn btn-danger btnCard btnADM" @click="removerProduto">Excluir produto</a>
                     </div>
                    
                  </div>
                </div>
              </div>
          </div>
        </div>


    <div>
    <!-- INICIO BOTAO FLUTUANTE -->
    <div class="buttonSacola">
       <a @click="logout" class="icon">
        <i class="fa-solid fa-right-from-bracket"></i>
       </a>
   </div>
   <!-- FIM BOTAO FLUTUANTE -->  
    </div>

    </div>
  </template>
  

  <script>
  export default {
    name : 'adm',

    data(){
      return{
        
      }
    },
    emits:['deslogar'],
    props: ['user'],

    methods :{
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
        logout(){
            this.$emit('deslogar')
        },
        async adicionarCategoria(novaCategoria) {
          let bd = firebase.firestore();
          try {
              await bd.collection("categorias").add({
                  categoria: novaCategoria
              });
              this.notifySucess("Categoria adicionada com sucesso!")
          } catch (error) {
              this.notifyError("Erro ao adicionar a categoria: ", error)
          }
        },
        async criarCategoria(){
        const { value: formValues } = await Swal.fire({
        title: "Digite um nome para a categoria",
        html: `
            <div style="display : flex; flex-direction : column">
            <label for="swal-input1">Categoria:</label>
            <input id="swal-input1" class="swal2-input">
            </div>          
        `,
        focusConfirm: false,
        preConfirm: () => {
            const userData = {
            categoria : document.getElementById("swal-input1").value
            }
            return userData
        }
        });
        if (formValues) {
            if(formValues.categoria == ''){
            Swal.fire({
            title: "Preencha todos os campos",
            text: "Você precisa preencher todos os campos corretamente!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Ok"
            }).then((result) => {
            if (result.isConfirmed) {
                this.criarCategoria()
            }
            });
            }else{
              this.adicionarCategoria(formValues.categoria)        
            }        
        }
        },
        async remCategoria(nomeCategoria) {
          let bd = firebase.firestore();
          try {
              // Procurar o documento que contém a categoria
              let querySnapshot = await bd.collection("categorias").where("categoria", "==", nomeCategoria).get();
              
              if (querySnapshot.empty) {
                this.notifyError("Categoria não encontrada!")
                  return;
              }

              // Remover todos os documentos encontrados
              querySnapshot.forEach(async (doc) => {
                  await bd.collection("categorias").doc(doc.id).delete();
              });

              this.notifySucess("Categoria removida com sucesso!")
          } catch (error) {
              this.notifyError("Erro ao remover a categoria: ", error)
          }
        },
        async removerCategoria(){
        const { value: formValues } = await Swal.fire({
        title: "Digite o nome da categoria que deseja remover",
        html: `
            <div style="display : flex; flex-direction : column">
            <label for="swal-input1">Categoria:</label>
            <input id="swal-input1" class="swal2-input">
            </div>          
        `,
        focusConfirm: false,
        preConfirm: () => {
            const userData = {
            categoria : document.getElementById("swal-input1").value
            }
            return userData
        }
        });
        if (formValues) {
            if(formValues.categoria == ''){
            Swal.fire({
            title: "Preencha todos os campos",
            text: "Você precisa preencher todos os campos corretamente!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Ok"
            }).then((result) => {
            if (result.isConfirmed) {
                this.removerCategoria()
            }
            });
            }else{
              this.remCategoria(formValues.categoria)        
            }        
        }
        },
        async adicionarProduto(sabor,preco,qtd,categoria,desc,img) {
          let bd = firebase.firestore();
          let querySnapshot = await bd.collection("categorias").where("categoria", "==", categoria).get();
              
              if (querySnapshot.empty) {
                this.notifyError("Categoria não encontrada!")
                  return;
              }
          try {
              await bd.collection("produtos").add({
                  sabor: sabor,
                  preco: preco,
                  qtd: qtd,
                  categoria:categoria,
                  desc: desc,
                  img: `background-image: url(${img})`
              });
              this.notifySucess("Produto adicionado com sucesso!")
          } catch (error) {
            this.notifyError("Erro ao adicionar o produto: ", error)
          }
        },
        async CriarProduto(){
        const { value: formValues } = await Swal.fire({
        title: "Digite as informações do produto que deseja criar",
        html: `
            <div style="display : flex; flex-direction : column">
            <label for="swal-input1">Sabor:</label>
            <input id="swal-input1" class="swal2-input">
            </div>       
            
            <div style="display : flex; flex-direction : column">
            <label for="swal-input2">Preco:</label>
            <input type="number" id="swal-input2" class="swal2-input">
            </div>   

            <div style="display : flex; flex-direction : column">
            <label for="swal-input3">Quantidade:</label>
            <input type="number" id="swal-input3" class="swal2-input">
            </div>   

            <div style="display : flex; flex-direction : column">
            <label for="swal-input4">Categoria:</label>
            <input id="swal-input4" class="swal2-input">
            </div>   

            <div style="display : flex; flex-direction : column">
            <label for="swal-input5">Descrição:</label>
            <input id="swal-input5" class="swal2-input">
            </div>   

            <div style="display : flex; flex-direction : column">
            <label for="swal-input6">Url da imagem:</label>
            <input type="url" id="swal-input6" class="swal2-input">
            </div>   
        `,
        focusConfirm: false,
        preConfirm: () => {
            const userData = {
            sabor : document.getElementById("swal-input1").value,
            preco : document.getElementById("swal-input2").value,
            qtd : document.getElementById("swal-input3").value,
            categoria : document.getElementById("swal-input4").value,
            desc : document.getElementById("swal-input5").value,
            img : document.getElementById("swal-input6").value
            }
            return userData
        }
        });
        if (formValues) {
            if(formValues.sabor == '' || formValues.preco == '' || formValues.qtd == '' || formValues.categoria == '' ||formValues.desc == '' ||formValues.img == ''){
            Swal.fire({
            title: "Preencha todos os campos",
            text: "Você precisa preencher todos os campos corretamente!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Ok"
            }).then((result) => {
            if (result.isConfirmed) {
                this.CriarProduto()
            }
            });
            }else{
              this.adicionarProduto(formValues.sabor,formValues.preco,formValues.qtd,formValues.categoria,formValues.desc,formValues.img)        
            }        
        }
        },
        async remProduto(sabor) {
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
                  await bd.collection("produtos").doc(doc.id).delete();
              });

              this.notifySucess("Produto removido com sucesso!")
          } catch (error) {
              this.notifyError("Erro ao remover o produto: ", error)
          }
        },
        async removerProduto(){
        const { value: formValues } = await Swal.fire({
        title: "Digite o nome(sabor) do produto que deseja remover",
        html: `
            <div style="display : flex; flex-direction : column">
            <label for="swal-input1">Sabor:</label>
            <input id="swal-input1" class="swal2-input">
            </div>          
        `,
        focusConfirm: false,
        preConfirm: () => {
            const userData = {
            sabor : document.getElementById("swal-input1").value
            }
            return userData
        }
        });
        if (formValues) {
            if(formValues.sabor == ''){
            Swal.fire({
            title: "Preencha todos os campos",
            text: "Você precisa preencher todos os campos corretamente!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Ok"
            }).then((result) => {
            if (result.isConfirmed) {
                this.removerProduto()
            }
            });
            }else{
              this.remProduto(formValues.sabor)        
            }        
        }
        },

        }
  }
  </script>

  <style scoped>
    h1 {
        margin: 30px 30px;
    }
    .adm{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenlyn;
        height: 100vh;
    }
    .btnsADM{
      display: flex;
      justify-content: space-evenly;
    }
    .btnADM{
      border-radius: 10px;
    }
    @media(max-width : 730px){
      .card1{
        margin-right: 15px;
        margin-bottom: 0px;
      }
      .card2{
        margin-top: 150px;
      }
      .adm{
      height: 75em;
    }
    }
    

  </style>