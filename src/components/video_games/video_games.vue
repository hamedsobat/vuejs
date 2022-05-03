<script setup>
import Filter from './filter.vue'
import Lists from './lists/lists.vue'
import axios from 'axios'
</script>
<template>
    <div class="row">
         <Filter 
            @nameFilter="nameFilter"
            @handleClear="handleClear"
            @scoreFilter="scoreFilter"
            @handleDirection="handleDirection"
            @handleSort="handleSort"
            v-bind:isAsc="isAsc"
            class="col-4 col-s-12"
         />
         <Lists  v-bind:list="list" v-bind:loading="!list_orginal.length" class="col-8 col-s-12"/>
    </div>
</template>
<script>
export default {
    name:'video',
    data(){
        return {
            list_orginal:[], // original list
            list:[], // this one is manipulated by filters
            isAsc:false, // direction of sort
            sort: 'Release Date'
        }
    },
    components:{
        Filter,
        Lists
    },
    methods:{
        nameFilter : function(name){
            this.list = this.list_orginal.filter((item)=> item.name.includes(name))
        },
        handleClear : function(){
            // clear make back all to first impact
            this.list = this.list_orginal;
            this.isAsc = false;
            this.sort = 'Release Date';
            this.sorting();
        },
        scoreFilter : function(score){
            // only if input format is like : number - number
            var before= parseInt(score.split('-', 2)[0]);
            var after= parseInt(score.split('-', 2)[1]);
            if(Number.isInteger(before) && Number.isInteger(after)){
                this.list = this.list_orginal.filter((item)=> parseInt(item.rating) >= before && parseInt(item.rating) <= after)
            }
        },
        handleDirection : function(){
            this.isAsc = !this.isAsc;
            this.sorting();
            
        },
        handleSort : function(sort){
            this.sort = sort;
            this.sorting();
        },
        sorting : function (){
            // this functin check the sort type
            if(this.sort === 'Release Date'){
                if(this.isAsc){
                    this.list = this.list.sort(function (x,y){return y.first_release_date - x.first_release_date})
                }else{
                    this.list = this.list.sort(function (x,y){return x.first_release_date - y.first_release_date})
                }
            } 
            if(this.sort === 'Score'){
                if(this.isAsc){
                    this.list = this.list.sort(function (x,y){return y.rating - x.rating})
                }else{
                    this.list = this.list.sort(function (x,y){return x.rating - y.rating})
                }
            } 
            if(this.sort === 'Name'){

                if(this.isAsc){
                    this.list = this.list.sort(function (x,y){return y.name.charCodeAt(0) - x.name.charCodeAt(0)})
                }else{
                    this.list = this.list.sort(function (x,y){return x.name.charCodeAt(0) - y.name.charCodeAt(0)})
                }
            } 
        }
    },
    created(){
        // get the api call from the begining just for once
        axios.get('https://public.connectnow.org.uk/applicant-test/').then((response)=>{
        this.list_orginal = response.data.sort(function (x,y){return x.first_release_date - y.first_release_date});
        this.list = this.list_orginal;
        });
    },

}
</script>
<style scoped>
 
</style>