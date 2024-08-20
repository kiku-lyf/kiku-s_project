

<template>

  <div class="front-header" style="display: flex;height: 60px;line-height: 60px;border-bottom: 1px solid #eeeeee">
    <div class="front-header-left" style="width: 350px;display: flex;align-items: center;padding-left: 30px" @click="goto('/')" >
      <img src="@/assets/logo/2b5c9e58.png" style="width: 40px; height: 40px; border-radius: 50%;" alt>
      <div class="title" style="flex: 1;
    color: #355476;
    cursor: pointer;
    margin-left: 10px;
    font-size: 20px;
    font-weight: 700;">天猫超市购物商城
      </div>
    </div>
    <div class="front-header-center" style="flex: 1"></div>
    <div class="front-header-center" style="flex: 1"></div>
    <div class="front-header-center" style="flex: 1"></div>
    <div style="display: flex;">
      <div style="flex: 1 1 0%;">
        <div class="el-input " style="width: 200px;"><!---->
          <el-input v-model="searchQuery" type="text" autocomplete="off" placeholder="请输入商品名称" class="el-input__inner"/><!---->
          <!----><!----><!----></div>
        <!--          <button type="button" class="el-button el-button&#45;&#45;primary el-button&#45;&#45;small" style="margin-left: 5px;">&lt;!&ndash;&ndash;&gt;-->
        <!--            &lt;!&ndash;&ndash;&gt;<span>搜索</span></button>-->
        <el-button type="primary" :icon="Search" style="margin-left: 5px" @click="goto('/front/search?key='+searchQuery)">搜索</el-button>
      </div>
    </div>

    <div class="front-header-right" style="padding-right: 20px;width: 250px;text-align: right; ">
      <div>
        <el-button type="primary" @click="goto('/login')"><!----><!----><span>登录</span></el-button>
        <el-button type="primary" style="margin-left: 10px"  @click="goto('/register')"><!----><!----><span>注册</span></el-button>

      </div>
    </div>
  </div>


</template>


<script>
export default {
  name: 'FrontHeader',
  methods:{
    goto(a){
      location.href=a
    }
  },
  data() {
    return{
      searchQuery: ''
    }
  },


}
</script>

