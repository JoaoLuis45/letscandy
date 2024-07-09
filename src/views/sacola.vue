<template>
  <div class="sacola">
    <TitleSacola :sacola="sacola" @clean-sacola="cleanSacola"/>
    <EmptySacola v-if="sacola.length == 0"/>
    <div class="bSacola2" v-else>
            <div class="itemSacola" v-for="(item,index) in sacola" :key="index">
              <div class="colImg">
                <div class="itemImg" :style="item.img"></div>
              </div>
             
                <div class="itemColuna">
                  <div class="itemName">{{ item.sabor }}</div>
                  <div class="itemQTD">{{ item.qtd }}x</div>
                  <div class="itemPrice"> R${{ item.preco }}</div>
                  <div class="itemDescr">{{ item.desc }}</div>
                </div>
                <div class="actions ms-auto">
                    <div class="btnActionsAdd" @click="addQtdItem(item)">Adicionar</div>
                    <div class="btnActionsRem" @click="remQtdItem(item)">Remover</div>
                </div>
             
            </div>
            <div class="container-fluid finalizarPedido">
              <div @click="finalizarPedido(null,null,null,null,null,null)" class="btn btn-outline-danger
                 me-4" style="border-radius: 15px;">Finalizar Pedido</div>
            </div>
            
        </div>
  </div>
</template>


<script>
import TitleSacola from '../components/TitleSacola.vue'
import EmptySacola from '../components/EmptySacola.vue'

export default {
  name : 'sacola',
  components : {
    TitleSacola,
    EmptySacola
  },
  data (){
    return{
      sacola : []
    }
  },
  methods:{
    notifySucessRemovedItem(){
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
        title: "Item removido da sacola!"
      });
    },
    notifySucessAdded(){
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
            title: "Adicionado 1x à sacola!"
          });
    },
    notifyEmptySacola(){
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
            icon: "warning",
            title: "A sacola já está vazia!"
          });
    },
    notifySucessRemoved(){
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
            title: "Removido 1x da sacola!"
          });
    },
    notifyCleanSacola(){
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
            title: "Sacola limpa!"
          });
    },
    async getSacola(){
      this.sacola = JSON.parse(localStorage.getItem('sacola')) || [];
      return this.sacola
    },
    async removeItem(i) {
        let sacola = JSON.parse(localStorage.getItem('sacola')) || [];
        sacola = sacola.filter(sacolaItem => sacolaItem.sabor !== i.sabor);
        localStorage.setItem('sacola', JSON.stringify(sacola));
        this.sacola = sacola;
        this.notifySucessRemovedItem()
        this.getSacola() 
    },
    async addQtdItem(i){
      let sacola = JSON.parse(localStorage.getItem('sacola')) || [];
      sacola = sacola.map(sacolaItem => {
          if (sacolaItem.sabor === i.sabor) {
              return { ...sacolaItem, qtd: parseFloat(sacolaItem.qtd) + 1, preco: parseFloat(sacolaItem.preco) + (parseFloat(sacolaItem.preco)/parseFloat(sacolaItem.qtd)) };
          }
          return sacolaItem;
      });
      localStorage.setItem('sacola', JSON.stringify(sacola));
      this.sacola = sacola;
      this.notifySucessAdded()
      this.getSacola()
    },
    async remQtdItem(i){
      if(i.qtd == 1){
        this.removeItem(i)
      }else{
        let sacola = JSON.parse(localStorage.getItem('sacola')) || [];
        sacola = sacola.map(sacolaItem => {
            if (sacolaItem.sabor === i.sabor && sacolaItem.qtd > 1) {
                return { ...sacolaItem, qtd: parseFloat(sacolaItem.qtd) - 1, preco: parseFloat(sacolaItem.preco) - (parseFloat(sacolaItem.preco)/parseFloat(sacolaItem.qtd))  };
            }
            return sacolaItem;
        });
        localStorage.setItem('sacola', JSON.stringify(sacola));
        this.sacola = sacola;
        this.notifySucessRemoved()
        this.getSacola()
      }
    },
    async cleanSacola() {  
      Swal.fire({
      title: "Deseja limpar a sacola?",
      text: "Essa ação não poderá ser revertida!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim, limpar!"
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('sacola')
        this.sacola = []
        this.notifyCleanSacola()     
      }         
    }); 
    },
   async finalizarPedido(nome,rua,complemento,bairro,cidade,telefone){
      const { value: formValues } = await Swal.fire({
      title: "Finalizar Pedido",
      html: `
        <div style="display : flex; flex-direction : column">
        <label for="swal-input1">Nome:</label>
        <input id="swal-input1" class="swal2-input">
        </div>

        <div style="display : flex; flex-direction : column; margin-top : 10px">
        <label for="swal-input2">Rua:</label>
        <input id="swal-input2" class="swal2-input">
        </div>

        <div style="display : flex; flex-direction : column; margin-top : 10px">
        <label for="swal-input3">Complemento:</label>
        <input id="swal-input3" class="swal2-input">
        </div>

        <div style="display : flex; flex-direction : column; margin-top : 10px">
        <label for="swal-input4">Bairro:</label>
        <input id="swal-input4" class="swal2-input">
        </div>

        <div style="display : flex; flex-direction : column; margin-top : 10px">
        <label for="swal-input5">Cidade:</label>
        <input id="swal-input5" class="swal2-input">
        </div>

        <div style="display : flex; flex-direction : column; margin-top : 10px">
        <label for="swal-input6">Telefone:</label>
        <input id="swal-input6" class="swal2-input">
        </div>

        <div style="display : flex; justify-content : space-evenly; margin-top : 10px">
        <label for="formpgto">Forma de pagamento:</label>
        <select name="formpgto" id="formpgto">
          <option value="Credito">Cartão de crédito</option>
          <option value="Credito">Cartão de débito</option>
          <option value="Credito">PIX</option>
          <option value="Credito">Dinheiro</option>
        </select>
        </div>

        <div style="display:flex;justify-content:space-evenly;">
        <div style="display : flex;  margin-top : 10px">
          <input type="radio" name="envio" id="entrega" checked>
          <label style="margin-left : 10px" for="entrega">Entrega</label>
        </div>
        <div style="display : flex; margin-top : 10px">
          <input type="radio" name="envio" id="retirada">
          <label style="margin-left : 10px" for="retirada">Retirada</label>
        </div>
        </div>

                 
      `,
      focusConfirm: false,
      willOpen: () =>{
          document.getElementById("swal-input1").value = nome 
          document.getElementById("swal-input2").value = rua 
          document.getElementById("swal-input3").value = complemento 
          document.getElementById("swal-input4").value = bairro 
          document.getElementById("swal-input5").value = cidade 
          document.getElementById("swal-input6").value = telefone
      },
      preConfirm: () => {
        var envio = null
        if(document.getElementById("entrega").checked){
          envio = 'Entrega : R$5,00'
        }else{
          envio = 'Retirada'
        }
        const userData = {
          nome : document.getElementById("swal-input1").value,
          rua :document.getElementById("swal-input2").value,
          complemento : document.getElementById("swal-input3").value,
          bairro : document.getElementById("swal-input4").value,
          cidade : document.getElementById("swal-input5").value,
          telefone : document.getElementById("swal-input6").value,
          pgto : document.getElementById("formpgto").value,
          envio : envio
        }
        return userData
      }
    });
      if (formValues) {
        if(formValues.nome == '' || formValues.rua == '' || formValues.complemento == '' || formValues.bairro == '' || formValues.cidade == '' || formValues.telefone == ''){
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
            this.finalizarPedido(formValues.nome,formValues.rua,formValues.complemento,formValues.bairro,formValues.cidade,formValues.telefone)
          }
        });
        }else{
          Swal.fire(JSON.stringify(formValues));
          const { value: formValues2 } = await Swal.fire({
          title: "Informações do pedido",
          html: `
            <div style="display : flex; justify-content: space-between; margin-top : 10px"">
              <p>Nome:</p>
              <p>${formValues.nome}</p>
            </div>

            <div style="display : flex; justify-content: space-between;  margin-top : 10px">
              <p>rua:</p>
              <p>${formValues.rua}</p>
            </div>

            <div style="display : flex; justify-content: space-between; margin-top : 10px">
              <p>Complemento:</p>
              <p>${formValues.complemento}</p>
            </div>

            <div style="display : flex; justify-content: space-between; flex-direction : row; margin-top : 10px">
              <p>Bairro:</p>
              <p>${formValues.bairro}</p>
            </div>

            <div style="display : flex; justify-content: space-between; margin-top : 10px">
              <p>Cidade:</p>
              <p>${formValues.cidade}</p>
            </div>

            <div style="display : flex; justify-content: space-between;flex-direction : row; margin-top : 10px">
              <p>Telefone:</p>
              <p>${formValues.telefone}</p>
            </div>

            <div style="display : flex; justify-content: space-between;flex-direction : row; margin-top : 10px">
              <p>Forma de pagamento:</p>
              <p>${formValues.pgto}</p>
            </div>

            <div style="display : flex; justify-content: space-between;flex-direction : row; margin-top : 10px">
              <p>Envio:</p>
              <p>${formValues.envio}</p>
            </div>
          `,
          focusConfirm: false        
        });
        if(formValues2){
          Swal.fire({
          title: "Confirma todos os dados?",
          text: "Você confirma que todos os seus dados estão corretos?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Sim"
        }).then((result) => {
          if (result.isConfirmed) {
            var mensagem = `*LET'S CANDY*%0A%0AMeu nome é ${formValues.nome}, contato ${formValues.telefone}%0A%0AItens do pedido:%0A%0A`
            var itens = ''
            var total = null
            this.sacola.forEach((i)=> {
              itens = itens + `${i.qtd}x - ${i.sabor}%0A(R$ ${i.preco})%0A*________________________________* %0A%0A`
              total = total + i.preco
            })
            var totalGeral = null
            if(formValues.envio != 'Retirada'){
              totalGeral = total + 5
            }
            mensagem = mensagem + itens
            mensagem = mensagem + `Pedido: R$${total}%0A${formValues.envio}%0ATotal: R$${totalGeral}%0A%0APagamento em:      ${formValues.pgto}%0A%0AEndereço da Entrega%0A%0ARua: ${formValues.rua}%0AComplemento: ${formValues.complemento}%0ABairro: ${formValues.bairro}%0ACidade: ${formValues.cidade}%0A%0A *________________________________*%0AAgradecemos a preferência!%0Awww.letscandy.com.br`
            
            const url = 'https://wa.me/5581997947843?text=' + mensagem
            console.log(url)
            window.open(url, '_blank');
          }
        });
        }
        }        
      }
    }
  },
  created(){
    this.getSacola()
  }
}
</script>

<style scoped>

.colImg{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 15px;

}

.itemImg{
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  align-self: center;
  transition: .5s;
}
.itemImg:hover{
  width: 120px;
  height: 120px;
}

.itemColuna{
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.itemName {
  font-size: 25px;
  font-weight: bold;
  color: var(--cor-primaria);
}

.itemQTD{
  font-size: 20px;
  color: #7952B3;
  font-weight: bold;
}

.itemPrice{
  color: #dc3546b8;
  font-weight: bold;
  font-size: 18px;
}

.itemDescr{
  color: #000;
  font-weight: 600;
}

.actions{
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-right: 45px;
}

.btnActionsAdd{
  border: 1px solid var(--cor-primaria);
  border-radius: 10px;
  padding: 10px 20px;
  color: var(--cor-primaria);
  cursor: pointer;
  font-weight: bold;
  transition: .5s;
}

.btnActionsAdd:hover{
  background-color: var(--cor-primaria);
  color: #fff;
}

.btnActionsRem{
  border: 1px solid var(--cor-primaria);
  border-radius: 10px;
  padding: 10px 20px;
  color: var(--cor-primaria);
  cursor: pointer;
  font-weight: bold;
  transition: .5s;
}

.btnActionsRem:hover{
  background-color: var(--cor-primaria);
  color: #fff;
}


.finalizarPedido{
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 10em;
}

@media(max-width: 730px){
  .itemSacola{
    height: auto;
  }
  .itemName{
    font-size: 20px;
  }
  .actions{
    margin-right: 15px;
  }

  .itemImg{
    width: 80px;
    height: 80px;
  }
  .itemImg:hover{
  width: 50px;
  height: 50px;
}

.btnActionsAdd{
      font-size: 0; /* Esconde o texto */
      padding: 10px; /* Ajusta o padding para centralizar o ícone */
      border-radius: 50%;
  }

  .btnActionsAdd::before {
      content: "+";
      font-size: 16px;
  }
  .btnActionsRem{
      font-size: 0; /* Esconde o texto */
      padding: 10px; /* Ajusta o padding para centralizar o ícone */
      border-radius: 50%;
      text-align: center;
  }

  .btnActionsRem::before {
      content: "-";
      font-size: 16px;
  }

  .finalizarPedido{
    height: 4em;
    margin-bottom: 1em;
  }
  
}
</style>