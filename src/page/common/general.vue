<template>
    <div class="logindiv">
        <div class="loginContainer">
            首页哦
            
        </div>
        
    </div>
</template>
<script>
import hex_md5 from '@/api/md5.js'
export default {
    data(){
        return{
            
        }
    },
    methods:{
        
    }
}
</script>
<style lang="scss" scoped>
.loginContainer{
    margin: 0 auto;
    width: 400px;
    margin-top: 30vh;
    border-radius: 15px;
    // background-color: rgba(13, 1, 1, .31);
    background: radial-gradient(at 300px 200px, rgba(86, 105, 116, 0.31), rgba(13, 1, 1, 0.31));
    box-shadow: 0 0 200px 500px rgba(243, 243, 243,.08);
    padding:65px 90px 50px 20px;
    // border: solid 1px rgb(201, 201, 201);
    & .loginTitle{
        color: #d1d1d1;
        padding-left:77px;
        font-size: 26px;
        // font-weight: 600;
        padding-bottom: 30px;
        text-align: center;
        font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    }
    .warning{
        color: #ffffff;
        background: #bc1717;
        display: flex;
        justify-content: center;
    }
}
.logindiv{
    height: 100%;
    width: 100%;
    background: radial-gradient(at 200px 100px, #000000, #4a89cc);
    // background: url(../../assets/background.jpg) no-repeat center 0;
    background-size: 100% 100%;
    overflow: hidden;
}
.loginButton{
    width: 320px;
    margin-top: 10px;
}
</style>

