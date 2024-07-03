<template>
    <div class="sacola">
      <div class="bodyLogin">
        <div class="login">
            <div class="fieldsLogin">
                <label for="user" class="lblFields">Usuário</label>
                <input id="user" class="fields" v-model="user">
            </div>      
            <div class="fieldsLogin">
                <label for="pass" class="lblFields">Senha</label>
                <input type="password" id="pass" class="fields" v-model="pass">
            </div>      
            <button type="button" class="btn btn-danger mt-5 w-50 mb-3" @click="login">Login</button>
            <p class="text-danger">Obs: Essa área de login é para a administração</p>
        </div>
      </div>
    </div>
  </template>
  

  <script>
  export default {
    name : 'login',

    data(){
      return{
        user : null,
        pass : null
      }
    },
    emits :['logado'],
    methods :{
    notifySucessLogin(){
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
            title: "Logado com sucesso!"
          });
    },
    notifyLoginError(){
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
          title: "Verifique o usuário e senha!"
        });
    },
    async login() {
    let usuario = null;
    let logged = false;
    let bd = firebase.firestore();

    await new Promise((resolve, reject) => {
        bd.collection("adm").onSnapshot((documento) => {
            const changesPromises = [];
            
            documento.docChanges().forEach((changes) => {
                if (changes.type === 'added' || changes.type === 'modified' || changes.type === 'removed') {
                    const doc = changes.doc;
                    const dados = doc.data();

                    const changePromise = new Promise((resolve) => {
                        if (dados.usuario == this.user && dados.senha == this.pass) {
                            logged = true;
                            usuario = dados.usuario;
                        }
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
    
    if(logged) {
        this.notifySucessLogin();
        let session = JSON.parse(localStorage.getItem('session')) || [];
        session.push(usuario);
        localStorage.setItem('session', JSON.stringify(session));
        this.$emit('Esta-logado');
        this.$router.replace('/adm');
    } else {
        this.notifyLoginError();
    }
}

    }
  }
  </script>

  <style scoped>
    .bodyLogin {
        display: flex;
        width: 100%;
        height: 100vh;
        justify-content: center;
        align-items: center;
    }
    .login {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: rgba(128, 128, 128, 0.114);
        width: 35%;
        height: 30em;
        border-radius: 20px;
    }
    .fieldsLogin{
        display: flex;
        flex-direction: column;
        width: 50%;
    }
    .fields{
        height: 2.5em;
    }
    .lblFields{
        font-size: 22px;
        margin: 20px 0px;
    }

    @media(max-width : 730px){
      .login{
        width: 90%;
        height: 25em;
      }
      .fieldsLogin{
        width: 70%;
      }
      .bodyLogin{
        height: 70vh;
      }
    }
  </style>