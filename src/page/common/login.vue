<template>
    <div class="logindiv">
        <div class="loginContainer">
            <div class="loginTitle">联通自营商城后台管理系统</div>
            <el-form ref="form" :model="form" label-width="80px" :rules="rules">
            <el-form-item label="账号" prop='userName' @keyup.enter.native="login">
                <el-input value="account" v-model="form.userName" :disabled="$utils.getExplorer()==`ie`"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop='password' @keyup.enter.native="login">
                <el-input type="password" v-model="form.password" :disabled="$utils.getExplorer()==`ie`"></el-input>
            </el-form-item>
            <el-form-item>
                <div class="warning" v-if='$utils.getExplorer()==`ie`'>警告:请使用非ie内核浏览器进行操作</div>
                <el-button type="primary" @click="login" class="loginButton" :disabled="$utils.getExplorer()==`ie`"> 登录 </el-button>
            </el-form-item>
            </el-form>
            
        </div>
        
    </div>
</template>
<script>
import hex_md5 from '@/api/md5.js'
export default {
    data(){
        return{
            form:{
                userName:'',
                password:''
            },
            rules:{
                userName:[{ required: true, message: '请输入账号', trigger: 'blur' },{ max: 20, message: '输入长度必须小于20', trigger: 'blur' }],
                password:[{ required: true, message: '请输入密码', trigger: 'blur' },{ max: 20, message: '输入长度必须小于20', trigger: 'blur' }]
            }
        }
    },
    methods:{
        login(){
            let _that=this
            let hex1=hex_md5(_that.form.password)
            let hex2=hex_md5(hex1)
            this.$refs.form.validate((valid) => {
                if (valid) {
                            localStorage.setItem(`userName`,_that.form.userName);
                            _that.$router.push('/back-stage/welcome')
                } else {
                    return false;
                }
                });
            
        }
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

