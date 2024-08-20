
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
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
                <el-form-item label="手机号">
                  <el-input v-model="ruleForm.phone"></el-input>
                </el-form-item>
                <el-form-item label="用户类型">
                  <el-select v-model="ruleForm.userType" placeholder="请选择类型">
                    <el-option label="管理员" value=0></el-option>
                    <el-option label="商家" value=1></el-option>
                    <el-option label="用户" value=2></el-option>
                  </el-select>
                </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>


              <div  style="display: flex; align-items: center;">
                <div  style="flex: 1 1 0%;"></div>
                <div  style="flex: 1 1 0%; text-align: right;"> 已有账号？请 <a   href="/login">登录</a>
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


export default {
  name: 'RegisterPage',

  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('年龄不能为空'));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'));
        } else {
          if (value < 18) {
            callback(new Error('必须年满18岁'));
          } else {
            callback();
          }
        }
      }, 1000);
    };
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
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        username: '',
        password: '',
        checkPass: '',
        phone: '',
        userType: '',
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        age: [
          { validator: checkAge, trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
          this.register()

        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    async register() {
      try {
        const response = await this.$http.post("/user/register",this.ruleForm);
        this.type = response.data.data;
        console.log(response)
      } catch (error) {
        console.error("Error loading types:", error);
      }

    },
  }
}


</script>
