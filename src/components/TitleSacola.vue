<template>
        <div class="headerSacola">
            <!-- INICIO TITLE CARDAPIO -->
            <div class="titleSacola">Sacola</div>
            <!-- FIM TITLE CARDAPIO -->
            <div class="cleanSacola me-5">
                <div v-show="!sacola.length == 0" class="btnCleanSacola btn btn-outline-danger
                " @click="$emit('cleanSacola')">Limpar Sacola</div>
            </div>
        </div>
</template>

<script>
export default {
    name : 'TitleSacola',
    emits : ['cleanSacola'],
    props : ['sacola']
}
</script>


<style scoped>
    .headerSacola{
        display: flex;
        justify-content: space-between;
    }

    .cleanSacola {
        display: flex;
        justify-content: center;
        align-items: flex-end;
    }

    .btnCleanSacola{
        border-radius: 15px;
    }
</style>