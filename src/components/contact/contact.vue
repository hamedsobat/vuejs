<template>
    <div class="container">
        <div class="box">
            <div class="label">Get IN TOUCH</div>
            <div class="desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique doloremque dicta quibusdam deserunt reprehenderit quasi deleniti fuga, facere tempore neque soluta perspiciatis quis, veniam esse repudiandae exercitationem enim consequatur ex.</div>
            <div class="form">
                <div class="row">
                    <div class="title">Contact Form</div>
                    <div class="col-6 col-s-12">
                        <label>Name *</label>
                        <input type="text" 
                        placeholder="" />
                    </div>
                    <div class="col-6 col-s-12">
                        <label>Email *</label>
                        <input type="email" 
                        placeholder="" />
                    </div>
                    <div class="col-12 col-s-12">
                        <label>Message *</label>
                        <textarea  
                        rows="4"
                        placeholder="" />
                    </div>
                </div>
                <div class="row">
                    <button   >Send</button>
                </div>
            </div>
        </div>
    </div>
    
</template>
<style scoped>
    .title{
        color:#c1d1e8
    }
    input,textarea{
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
        float: right;
         margin-right: 15px;
    }
    .form{
         background-color: #0e1a2b ;
        padding: 15px;
        margin-bottom: 30px;
    }
    .label{
        font-weight: 600;
        font-size: 20px;
        margin-bottom: 10px;
        color:#ffffff
    }
    .container{
        width:100%;
         
    }
    .box{
        max-width: 500px;
        margin: 0 auto;
    }
</style>
<script>
    export default {
        name:'contact'
    }
</script>