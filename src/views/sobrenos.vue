<template>
    <div class="sacola">
      <TitleSobreNos/>
      <div class="bodySobreNos">
        <div class="imgSobreNos"></div>
        <div class="container-fluid sobre">
          <div class="tabSobreNos">
            <div @click="quemSomosNos" class="btnTab" :class="{ marcado: quemSomos}">Quem somos</div>
            <div @click="ondeVamosNos" class="btnTab" :class="{ marcado: paraOndeVamos}">Para onde vamos</div>
            <div @click="oqueFaremosNos" class="btnTab" :class="{ marcado: oqueFaremos}">O que faremos</div>
            <div @click="extrasNos" class="btnTab" :class="{ marcado: extras}">Extras</div>
          </div>
          <div class="tabs">

            <div v-show="quemSomos" class="tab">
              <h1>Quem somos nós?</h1>
              <p>somos um casal de microempreendedores que estamos tentando uma nova forma de gerar uma renda extra, e pensamos numa doceria online!</p>
            </div>
            <div v-show="paraOndeVamos" class="tab">
              <h1>Para onde vamos?</h1>
              <p>Nós temos o sonho de um dia conseguirmos morar no Canadá, é um sonho que almejamos desde sempre e estamos na luta diária para quebrar nossas barreiras e conquistar nosso objetivo!</p>
            </div>
            <div v-show="oqueFaremos" class="tab">
              <h1>O que faremos?</h1>
              <p>Vamos focar nossas energias na Let's Candy como forma de renda extra, também iremos fazer cursos de inglês acadêmico, estudar lugares e estilos de vida que melhor se adequam a nossa realidade no Canadá.</p>
            </div>
            <div v-show="extras" class="tab">
              <h1>Extras</h1>
              <p>Me chamo Letícia Gabriela da Silva Ramos Araújo, curso direito e estou no 9º período, sou casada, e tenho uma linda filhinha chamada Helena! Meu marido se chama João Luís, cursa Ciência da Cimputação e trabalha como desenvolvedor de softwares.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  

  <script>
  import TitleSobreNos from '../components/TitleSobreNos.vue'
  export default {
    name : 'sobreNos',
    components :{
      TitleSobreNos,
    },
    data(){
      return{
        quemSomos : true,
        paraOndeVamos : false,
        oqueFaremos : false,
        extras : false,
      }
    },
    methods :{
      quemSomosNos(){
        this.quemSomos = true
        this.paraOndeVamos = false
        this.oqueFaremos = false
        this.extras = false
      },
      ondeVamosNos(){
        this.quemSomos = false
        this.paraOndeVamos = true
        this.oqueFaremos = false
        this.extras = false
      },
      oqueFaremosNos(){
        this.quemSomos = false
        this.paraOndeVamos = false
        this.oqueFaremos = true
        this.extras = false
      },
      extrasNos(){
        this.quemSomos = false
        this.paraOndeVamos = false
        this.oqueFaremos = false
        this.extras = true
      },
    }
  }
  </script>

  <style scoped>
  .bodySobreNos{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 5em;
  }

  .imgSobreNos{
    background-image: url(https://res.cloudinary.com/dqxjwwrcu/image/upload/v1718402754/Imagem_do_WhatsApp_de_2024-06-14_%C3%A0_s_19.05.29_b86733f0_g1bhx8.jpg);
    width: 700px;
    height: 400px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 10%;
  }

  .sobre{
    display: flex;
    align-items: center;
    color: var(--cor-primaria);
    margin-top: 1em;
    flex-direction: column;
  }

  .tabSobreNos{
    display: flex;
  }
  
  .btnTab{
    padding: 10px 20px;
    border-radius: 5px;
    border-top: 1px solid var(--cor-primaria);
    border-left: 1px solid var(--cor-primaria);
    border-right: 1px solid var(--cor-primaria);
    transition: .5s;
    font-weight: bold;
    cursor: pointer;
  }

  .btnTab:hover{
    color: #fff;
    background-color: #db0b0b91;
  }
  .tabs{
    display: flex;
    width: 100%;
    height: 500px;
    justify-content: center;
  }
  .tab{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 20px;
    background-color: #dfdfdf4a;
    width: 65%;
    height: 420px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    border: 2px solid var(--cor-primaria);
  }

  .tab p {
    text-align: center;
    font-size: 20px;
    
  }

  .marcado {
    background-color: #db0b0b91;
    color: #fff;
  }

  @media(max-width:730px){
    .bodySobreNos{
      margin-top: 2em;
    }

    .imgSobreNos{
      width: 350px;
      height: 300px;
    }

    .btnTab{
      display: flex;
      align-items: center;
      text-align: center;
    }
    .tabs{
      height: 450px;
    }
    .tab{
      width: 100%;
    }
  }
  </style>