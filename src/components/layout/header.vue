<template>
    <div>
        <router-link to="/"><h1>VIDEO GAMES</h1></router-link>
        <router-link to="/contact"><h1>CONTACT</h1></router-link>

 
    </div>
</template>

<script>
    export default{
        name:'header'
    }
</script>

<style scoped>
    div {
        display: flex;
        /* space-between */
        font-family: 'Montserrat';
        margin-bottom: 20px;
    }
    h1{
        margin-right: 30px;
        color:#ffffff
    }
    .router-link-active{
        text-shadow: -10px -18px #182c47;
    }
</style>