<template>
  <div>
    <menuInicial/>
    <router-view/> 
    <Footer/>
  </div>
</template>

<script>
import menuInicial from './components/menuInicial.vue'
import Footer from './components/Footer.vue'

export default {
  name : 'app',
  components: {
    menuInicial,
    Footer
  },
//   methods:{
//     async getSacola(){
//         const req = await fetch('https://backlets.vercel.app/sacola')
//         const data = await req.json()
//         return data
//     },
//     async cleanSacola() {  
//         var sacola = this.getSacola()
//         sacola.then(item => {
//           item.forEach(async (i) =>{
//               const req = await fetch(`https://backlets.vercel.app/sacola/${i.id}`,
//                       {
//                         method : 'DELETE'

//                       }
//                       )
//                       this.getSacola() 
//           })     
//         }) 
//     },
//   },
//   created(){    
//     this.cleanSacola()
//   }
}
</script>

<style>
:root {
    --cor-primaria: #DB0B0B;
    --cor-secundaria: #fff;
}


*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    height: 100vh;
}

.menu {
    display: flex;
    background-color: var(--cor-secundaria);
    height: 80px;
}

.imagemCarrossel{
    height: 25em;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}

.coluna1 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 35em;
}

.fotocol1{
    height: 500px;
    width: 500px;
    background-image: url(https://res.cloudinary.com/dqxjwwrcu/image/upload/v1718378412/fotocoluna_tyxnua.jpg);
    background-size: contain;
    background-position: center;
}

.titleCardapio{
    display: block;
    font-size: 40px;
    font-weight: bold;
    width: 220px;
    margin-left: 30px;
    margin-top: 4em;
    padding: 5px 0px;
    border-bottom-right-radius: 10px;
    border-bottom: 5px solid var(--cor-primaria);
}

.titleChild{
    display: block;
    font-size: 30px;
    font-weight: bold;
    width: 220px;
    margin-left: 2em;
    margin-top: 2em;
    padding: 5px 0px;
    border-bottom-right-radius: 10px;
    border-bottom: 5px solid var(--cor-primaria);
}

.colunaItems {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30em;
    margin-bottom: 2em;
}

.itemPreco{
    align-self: flex-end;
    color: var(--cor-primaria);
    font-size: 20px;
    font-weight: bold;
    text-align: end;
}

.imgcard{
    align-self: center;
    height: 200px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 200px;
    
}

.countItems{
    position: absolute;
}

.icon{
    position: fixed;
    bottom: 60px;
    right: 30px;
    font-size: 30px;
    background-color: var(--cor-primaria);
    color: #fff;
    border-radius: 50%;
    padding: 3px;
    width: 50px;
    height: 50px;
    text-align: center;
    text-decoration: none;
    z-index: 100;
    box-shadow: 2px 2px 2px #c0bdbd;
}

.icon .fab {
    padding-top: 9px;
}

.icon:hover{
    background-color: #fff;
    color: var(--cor-primaria);
    font-weight: 900;
    box-shadow: 2px 2px 2px var(--cor-primaria);
}

.icon span{
    font-size: 14px;
}

.footer{

    height: 30em;
    margin: 0;
    padding: 0;
}

.colFooter{
    background-color: var(--cor-primaria);
    display: flex;
    height: 30em;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding: 0;
}

.footerImg{
    border-radius: 50%;
    height: 400px;
    width: 400px;
    background-image: url(https://res.cloudinary.com/dqxjwwrcu/image/upload/v1718207973/logocandy_pcocfh.jpg);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    margin-top: 45px;
}

.titleFooter{
    color: #fff;
    font-size: 2em;
    font-weight: bold;
    text-align: center; 
    width: 100%;
    margin-top: 30px;
}

.elementFooter{
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    text-align: center; 
    width: 100%;
    margin-bottom: 20px;
    height: 350px;
    justify-content: space-evenly;
    padding: 0px 10px;
}

.linksFooter{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    color: #fff;
    font-size: 21px;
    font-weight: bold;
    width: 100%;
    text-align: center;
    height: 50px;
    transition-duration: 800ms;
    cursor: pointer;
}

.linksFooter:hover{
    background-color: #fff;
    color: var(--cor-primaria);
    border-bottom: 1px solid #fff;
    border-top: 1px solid #fff;  
}

.imgloc{
    background-image: url(https://res.cloudinary.com/dqxjwwrcu/image/upload/v1718245567/marcC_jpgn47.png);
    height: 150px;
    width: 150px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 50%;
    background-color: #fff;
}
.imgQS{
    background-image: url(https://res.cloudinary.com/dqxjwwrcu/image/upload/v1718246128/cozinha_tnhbud.jpg);
    height: 150px;
    width: 200px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 30px;
}

.bSacola{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.titleSacola{
    display: flex;
    font-size: 40px;
    font-weight: bold;
    width: 220px;
    margin-left: 30px;
    margin-top: 1em;
    padding: 5px 0px;
    border-bottom-right-radius: 10px;
    border-bottom: 5px solid var(--cor-primaria);
}

.WarningEmptySacola{
    color: var(--cor-primaria);
    text-align: center;
    font-weight: bold;
    font-size: 4em;
}

.imgEmptySacola{
    background-image: url(https://res.cloudinary.com/dqxjwwrcu/image/upload/v1718250560/triste_lwewzh.png);
    width: 100px;
    height: 100px;
    background-size: contain;
    background-repeat: no-repeat;
}

.btnBackCardapio{
   display: flex;
   justify-content: center;
   align-items: center;
   font-size: 20px;
   border-radius: 15px;
   width: 25%;
}

.bSacola2{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 2em;
}

.itemSacola{
    display: flex;
    width: 90%;
    height: 150px;
    border: 2px solid #e5b6bb;
    margin-bottom: 2em;
}

.itemSacola:hover{
    background-color: #dc35463e;
}

.btnColunaa{
  border-radius: 15px;
  margin-top: 140px;
}

@media(max-width : 730px){
    /* GERAL */
    .container {
        padding: 20px 0;
    }

    /* slider */
    #mainSlider .carousel-inner, #mainSlider .carousel-item{
        height: auto;
    }

    .imagemCarrossel{
        background-size: contain;
        height: 5em;
    }

    .fotocol1{
        height: 350px;
        width:  350px;
    }

    .coluna1{
        height: auto;
        padding: 20px 0;
    }
    .btnColunaa{
        margin-top: 1em;
        margin-top: 1em;
    }

    .titleCardapio{
        margin-top: 1em;
    }
    .colunaItems{
        margin-bottom: 0px;
    }

    .titleSacola{
        width: 120px;
        font-size: 30px;
    }
    .titleCardapio{
        font-size: 30px;
        width: 150px;
    }
    .titleChild{
        font-size: 25px;
        width: 150px;
    }
    .colunaItems{
        height: 27em;
    }
    
}
</style>
