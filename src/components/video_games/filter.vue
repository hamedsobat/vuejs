 
<template>
    <div class="box" >
       <div class="label" >Filter Results</div>
       <div class="row">
            <div class="col-12 col-s-12">
                <label>Name (contains)</label>
                <input type="text" 
                ref="nameInput"
                @input="event => $emit('nameFilter',event.target.value)"
                placeholder="Text string" />
            </div>
       </div>
       <div class="row">
           <div class="col-12 col-s-4 col-m-12 ">
                <label>Minimum Score</label>
                <input 
                ref="scoreInput"
                @input="event => $emit('scoreFilter',event.target.value)"
                type="text" placeholder="1 - 10" />
           </div>
           <div class="col-12 col-s-8 col-m-12 ">
                <label>Order By</label>
                <div class="last">
                    <button 
                    @click="$emit('handleDirection')"
                    class="btn-arrow" >
                    <img 
                    v-bind:style="[isAsc && {transform: 'rotate(180deg)'}]"
                    height="20" src="@/assets/up.png" />
                    </button>
                    <select
                    ref="sortSelect"
                    @change="event => $emit('handleSort',event.target.value)"
                    >
                        <option key="date" >Release Date</option>
                        <option key="score">Score</option>
                        <option key="name">Name</option>
                    </select>
                     <button @click="handleClear" class="btn-clear" >clear</button>
                </div>
                
           </div>
            
       </div>
       
    </div>
</template>
<script>
export default {
    name:'video',
    props:{
        isAsc:Boolean
    },
    methods:{
        handleClear:function(){
            this.$refs["nameInput"].value = "";
            this.$refs["scoreInput"].value = "";
            this.$refs["sortSelect"].value = "Release Date";
            this.$emit('handleClear');
        }
    }

}
</script>
<style scoped>
    .box {
        background-color: #0e1a2b ;
        padding: 15px;
        margin-bottom: 30px;
    }
    .label{
        color: #ffffff;
        font-weight: 600;
        font-size: 18px;
        margin-bottom: 15px;
    }
    label {
        
        margin-bottom: 5px;
        color:#ffffff;
        display:block
    }
    input{
        background-color: #182c47;
        color:#c1d1e8;
        padding: 10px;
        width: 100%;
        border: none;
    }
    ::placeholder{
        color:#c1d1e8;
    }
    button{
        padding:6px 10px;
        background-color: #5692e8;
        border:none;
        color:#ffffff;
        cursor: pointer;
    }
    
    select{
         background-color: #182c47;
        color:#c1d1e8;
        padding: 10px;
        width: 100%;
        border: none;
        flex:2;
         
    }
    .last{
        display: flex;
        flex-wrap: wrap;
    }
    .btn-arrow{
        /* flex:1; */
        flex-basis:40px
    }
    .btn-clear{
        margin-left: 15px;
    }
    @media screen and (max-width: 425px) {
        .btn-clear{
            flex-basis: 100%;
            order: 1;
            margin: 15px 0;
            padding: 11px;
        }
    }
</style>