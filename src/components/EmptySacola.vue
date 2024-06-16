<template>
        <div class="container-fluid bSacola">
        <div class="WarningEmptySacola">
            Sua sacola está vazia
        </div>
        <div class="imgEmptySacola"></div>
        <router-link to="/" class="btn btn-danger m-0 d-flex align-items-center btnBackCardapio">Voltar para o cardápio</router-link>
        </div>
         
</template>

<script>
export default {
    name : 'EmptySacola',
    props :['sacola']
}
</script>


<style scoped>
@media(max-width:730px){
    .WarningEmptySacola{
        font-size: 45px;
    }
    .btnBackCardapio{
        width: 75%;
    }
    .bSacola{
        height: 60vh;
    }
}
</style>