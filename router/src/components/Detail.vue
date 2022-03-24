<template>
    
    <h1>상세 페이지</h1>
    <h2>{{ blogData[$route.params.id].title }}</h2>
    <p>{{ blogData[$route.params.id].content }}</p>
    <p>{{ blogData[$route.params.id].date }}</p>

</template>

<script>
export default {
    name : 'Detail',
    props : {
        blogData : Array,
    }
}
</script>

<style>

</style>