<template>
        <!-- INICIO TITLE DUDU -->
        <div class="titleChild">{{ categoryName }}</div>
        <!-- FIM TITLE DUDU -->
</template>

<script>
export default {
    name : 'TitleCategory',
    props: {
        categoryName : String
    }
}
</script>