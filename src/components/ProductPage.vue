
<template>

  <FrontHeader></FrontHeader>

  <div data-v-a12cf9da="" class="main-body">
    <div data-v-a12cf9da="" class="main-content">
      <div style="background-color: white; width: 60%; margin: 20px auto; border-radius: 20px; min-height: 2000px;">
        <div style="padding: 15px 20px;">
          <div class="el-row" style="margin-left: -15px; margin-right: -15px;">
            <div class="el-col el-col-12" style="padding-left: 15px; padding-right: 15px;"><img alt=""
                                                                                                :src=this.goods.img
                                                                                                style="width: 100%; height: 400px; border-radius: 20px;">
            </div>
            <div class="el-col el-col-12" style="padding-left: 15px; padding-right: 15px;">
              <div
                  style="font-size: 20px; font-weight: 900; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;">
<!--                MsShe大码女装新款叠穿松紧腰配饰假两件系扣衬衫下摆屁帘-->
                {{this.goods.name}}
              </div>
              <div style="font-size: 14px; color: rgb(102, 102, 102); margin-top: 5px;">销量：42</div>
              <div style="font-size: 14px; color: red; margin-top: 15px;">疯抢价：￥<span
                  style="font-size: 20px;">{{this.goods.price}} / {{this.goods.unit}}</span></div>
              <div style="margin-top: 20px;"><img src="/img/right.2ef230e7.png" alt=""
                                                  style="width: 60%; height: 130px; border-radius: 15px; border: 1px solid rgb(204, 204, 204);">
              </div>
              <div style="font-size: 14px; color: rgb(102, 102, 102); margin-top: 20px;"> 商家：<a href="#">ifashion</a>
              </div>
              <div style="font-size: 14px; color: rgb(102, 102, 102); margin-top: 20px;"> 分类：<a href="#">靓丽女装 /
                内衣</a></div>
              <div style="font-size: 14px; color: rgb(102, 102, 102); margin-top: 20px;">
                <button type="button" @click="cart" class="el-button el-button--warning el-button--small"><!---->
                  <!----><span>加入购物车</span></button>
                <button type="button" class="el-button el-button--warning el-button--small"><!---->
                  <!----><span>收藏</span></button>
              </div>
            </div>
          </div>
        </div>





        <div style="margin-top: 30px; padding: 15px;">

          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="宝贝详情" name="first">
              <div class="detail-richtext-content w-e-text" style="padding: 10px 175px;">
                <div v-html="this.htmlContent"></div>
              </div>
            </el-tab-pane>

            <el-tab-pane label="宝贝评价" name="second">




              <el-drawer
                  v-model="table"
                  title="n条评论"
                  direction="btt"
                  size="50%"
              >
                <div v-for="item in this.secondComment" :key="item.id">
                  <div  style="margin: 30px 10px;">
                    <div style="display: flex;">
                      <div style="width: 40px;"><img src="http://106.54.221.16:9094/files/1697438073596-avatar.png" alt=""
                                                     style="width: 40px; height: 40px; border-radius: 50%;"></div>
                      <div style="width: 200px; margin-left: 10px;">
                        <div style="font-weight: 700; color: rgb(0, 0, 0); font-size: 17px;">张三</div>
                        <div style="color: rgb(122, 122, 122); font-size: 14px;">2023-11-20 16:48:00</div>
                      </div>
                    </div>
                    <div style="margin-top: 15px; font-size: 16px;">
                      {{item.content}}
                    </div>
                    <div style="display: flex;">
                      <el-button type="text" >点赞</el-button>
                      <el-button type="text" >回复</el-button>
                    </div>

                  </div>

                  <el-divider></el-divider>

                </div>

              </el-drawer>


<!--              <el-drawer-->
<!--                  v-model="table"-->
<!--                  title="n条评论"-->
<!--                  direction="btt"-->
<!--                  size="50%"-->
<!--              >-->
<!--                <el-form ref="form" :model="form" label-width="80px">-->
<!--                  <el-form-item label="content">-->
<!--                    <el-input type="textarea" v-model="form.content"></el-input>-->
<!--                  </el-form-item>-->
<!--                  <el-form-item>-->
<!--                    <el-button type="primary" @click="onSubmit">提交</el-button>-->
<!--                    <el-button>取消</el-button>-->
<!--                  </el-form-item>-->
<!--                </el-form>-->
<!--              </el-drawer>-->








              <div v-for="item in this.firstComment" :key="item.id">
              <div  style="margin: 30px 10px;">
                <div style="display: flex;">
                  <div style="width: 40px;"><img src="http://106.54.221.16:9094/files/1697438073596-avatar.png" alt=""
                                                 style="width: 40px; height: 40px; border-radius: 50%;"></div>
                  <div style="width: 200px; margin-left: 10px;">
                    <div style="font-weight: 700; color: rgb(0, 0, 0); font-size: 17px;">张三</div>
                    <div style="color: rgb(122, 122, 122); font-size: 14px;">2023-11-20 16:48:00</div>
                  </div>
                </div>
                <div style="margin-top: 15px; font-size: 16px;">
                  {{item.content}}
                </div>
                <div style="display: flex;">
                  <el-button type="text" @click="getSecondComment(item.id)" >全部评论</el-button>
                  <el-button type="text" >点赞</el-button>
                  <el-button type="text" >回复</el-button>
                </div>

              </div>

              <el-divider></el-divider>

              </div>


            </el-tab-pane>

          </el-tabs>




        </div>
      </div>
    </div>
  </div>


</template>


<style scoped>

</style>

<script>

import FrontHeader from "@/components/FrontHeader.vue";

export default {
  name: 'ProductPage',
  components: {FrontHeader},
  data(){
    return{
      goods:{},
      htmlContent:'',
      activeName: 'first',
      table: false,
      firstComment:[],
      secondComment:[],
            form: {
                  content: ''
            }


    }

  },
  mounted() {
    this.getByGoodsId()
    this.getRootComment()
  },
  methods:{

    handleClick(tab, event) {
      console.log(tab, event);
    },

    async getByGoodsId() {
      try {
        this.goodsId = this.$route.query.id;
        const response = await this.$http.get("/goods/byGoodsId/"+this.goodsId);
        this.goods = response.data.data;
        this.htmlContent = this.goods.description
        console.log(response)
      } catch (error) {
        console.error("Error loading types:", error);
      }

    },

    async cart() {
      try {
        await this.$http.get("/cart/addToCart/"+this.goods.id);
        location.href="/front/cart"
      } catch (error) {
        this.$message({
          message: '请登录',
          type: 'warning'
        });
        console.error("Error loading types:", error);
      }

    },

    async getRootComment() {
      try {
        const response = await this.$http.get("/comment/getRootById/"+this.goodsId);
        this.firstComment=response.data.data

      }catch (error){
          console.error("Error loading types:", error)
      }
    },
    async getSecondComment(id) {
      this.table = true
      try {
        const response = await this.$http.get("/comment/getSecondById/"+id);
        this.secondComment=response.data.data

      }catch (error){
        console.error("Error loading types:", error)
      }
    },



  }


}
</script>
