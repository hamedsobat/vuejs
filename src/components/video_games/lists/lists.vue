<script setup>
 import Item from './item.vue'
</script>

<template>
    <div 
    >
        <Item  v-for="item in list" :key="item.message" v-bind:item="item" />
        <div v-if="loading" class="wait">Please wait ...</div>
    </div>
</template>
<script>

export default {
    name:'table',
    props:{
        list:Array,
        loading:Boolean
    },
    components:{
        Item
    },
 
}
</script>
<style scoped>
    div {
        padding: inherit;
        /* width: 100%; */
    }
    .wait {
        color: #ffffff;
        font-weight: 500;
        text-align: center;
    }
</style>