<template>
        <div class="container-fluid bSacola">
        <div class="WarningEmptySacola">
            Sua sacola está vazia
        </div>
        <div class="imgEmptySacola"></div>
        <router-link to="/" class="btn btn-danger m-0 d-flex align-items-center w-25 btnBackCardapio">Voltar para o cardápio</router-link>
        </div>
         
</template>

<script>
export default {
    name : 'EmptySacola',
    props :['sacola']
}
</script>