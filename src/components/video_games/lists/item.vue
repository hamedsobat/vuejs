<template>
    <div class="box">
        <div class="thumb"></div>
        <div class="content">
            <div class="title">{{item.name}}</div>
            <div>Release Date: {{new Date(item.first_release_date).toLocaleDateString() }}</div>
            <div class="summary">{{item.summary}}</div>
        </div>
        <div class="badge">{{parseInt(item.rating)}}</div>
    </div>
    <div class="box-mobile">
        <div class="thumb-m"></div>
        <div class="content">
            <div class="title">{{item.name}}</div>
            <div>Release Date: {{new Date(item.first_release_date).toLocaleDateString() }}</div>
            <div class="summary">{{item.summary}}</div>
        </div>
        <div class="badge badge-m">{{parseInt(item.rating)}}</div>
    </div>
</template>
<style scoped>
    .summary{
        margin-top:10px
    }
    .badge {
        width: 40px;
        height: 40px;
        text-align: center;
        border-radius: 50%;
        background-color: #5692e8;
        align-self: center;
        padding-top: 4px;
        color:#ffffff;
        font-family: 'Montserrat';
        font-weight: 600;
        font-size: 20px;
    }
    .badge-m{
        position: absolute;
        top:10px;
        right:5px
    }
    .content{
        padding:15px;
        width: 80%;
    }
    .title{
        color:#ffffff;
        font-family: 'Montserrat';
        font-weight: 600;
    }
     .thumb{
         width:80px;
         background-color: #000000 ;
     }
     .thumb-m{
         width:100%;
         height:80px;
         background-color: #000000 ;
     
     }
      .box {
        display: flex;  
        background-color: #0e1a2b ;
        /* padding: 15px; */
        margin: 0 0 15px 15px;
        
    }
    .box-mobile {
        position: relative;
        background-color: #0e1a2b ;
        /* padding: 15px; */
        margin: 0 0 15px 15px;
        
    }
    @media screen and  (min-width: 426px) {
        .box-mobile{
            display: none;
        }
    }
    @media screen and (max-width:425px) {
        .box{
           display: none;

        }
    }

</style>
<script>
export default{
    name:'item',
    props:{
        item:Object
    }
}
</script>

