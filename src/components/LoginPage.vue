
<template>

  <div data-v-b5ee5d10="" class="container" style="background-image: url(/bg.6018d3e2.jpg)">
    <div data-v-b5ee5d10="" style="width: 400px; padding: 30px; background-color: white; border-radius: 5px;">
      <div data-v-b5ee5d10="" style="text-align: center; font-size: 20px; margin-bottom: 20px; color: rgb(51, 51, 51);">
        欢迎登录天猫网上购物商城
      </div>


      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="用户类型">
          <el-select v-model="ruleForm.userType" placeholder="请选择类型">
            <el-option label="管理员" value=0></el-option>
            <el-option label="商家" value=1></el-option>
            <el-option label="用户" value=2></el-option>
          </el-select>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="this.login">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>


      <div  style="display: flex; align-items: center;">
        <div  style="flex: 1 1 0%;"></div>
        <div  style="flex: 1 1 0%; text-align: right;"> 没有账号？请 <a href="/register">注册</a>
        </div>
      </div>





    </div>
  </div>

</template>

<style>
.container {
  height: 100vh;
  overflow: hidden;
  background-size: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
}
</style>



<script>


import {ElMessage} from "element-plus";

export default {
  name: 'LoginPage',

  data() {

    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };

    return {
      ruleForm: {
        username: '',
        password: '',
        checkPass: '',
        userType: '',
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
          this.login()

        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    async login() {
      try {
        const response = await this.$http.post("/user/login",this.ruleForm);
        if(response.data.code==0) {
          // resp = response.data.data;
          ElMessage('登录成功')
          location.href="/"

        }

        else ElMessage('登录失败')

        console.log(response)
      } catch (error) {
        console.error("Error loading types:", error);
      }

    },
  }
}


</script>
