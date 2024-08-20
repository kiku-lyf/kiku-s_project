<template>

  <FrontHeader>
  </FrontHeader>

  <div data-v-a12cf9da="" class="main-body">
    <div data-v-a12cf9da="" class="main-content">
      <div style="display: flex; width: 70%; margin: 30px auto; border-radius: 20px; background-color: white;">
        <div style="flex: 1 1 0%; padding: 0px 20px;">
          <div
              style="font-size: 18px; color: rgb(0, 0, 0); line-height: 80px; border-bottom: 1px solid rgb(231, 230, 230);">
            关键词
          </div>
          <div style="margin: 20px 0px;">
            <div class="el-row" style="margin-left: -10px; margin-right: -10px;">
              <div @click="goto('/front/product?id='+item.id)" class="el-col el-col-6" style="padding: 10px;" v-for="item in goods" :key="item.id">
                <img
                    :src="item.img" alt=""
                  style="width: 100%; height: 180px; border-radius: 10px; border: 1px solid rgb(204, 204, 204);">
                <div
                    style="margin-top: 10px; font-weight: 500; font-size: 16px; width: 160px; color: rgb(0, 0, 0); text-overflow: ellipsis; overflow: hidden; white-space: nowrap;">
                 {{item.name}}
                </div>
                <div style="margin-top: 5px; font-size: 20px; color: rgb(255, 80, 0);">￥ 159 / 件</div>
              </div>



            </div>
          </div>
        </div>
        <div style="width: 250px; padding: 0px 20px; border-left: 1px solid rgb(231, 230, 230);">
          <div
              style="font-size: 18px; color: rgb(0, 0, 0); line-height: 80px; border-bottom: 1px solid rgb(231, 230, 230);">
            猜你喜欢
          </div>
          <div style="margin: 20px 0px;">
            <div style="padding: 10px;"><img src="http://106.54.221.16:9094/files/1698594538156-2.jpg" alt=""
                                             style="width: 100%; height: 180px; border-radius: 10px; border: 1px solid rgb(204, 204, 204);">
              <div
                  style="margin-top: 10px; font-weight: 500; font-size: 16px; width: 180px; color: rgb(0, 0, 0); text-overflow: ellipsis; overflow: hidden; white-space: nowrap;">
                水星家纺官方旗舰店四件套全棉纯棉100被套床单简约被罩被子宿舍
              </div>
              <div style="margin-top: 5px; font-size: 20px; color: rgb(255, 80, 0);">￥ 129 / 套</div>
            </div>

          </div>
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
  name: 'SearchPage',
  components: {FrontHeader},
  data(){
    return{
      goods:[]

    }

  },
  mounted() {
    this.search()
  },
  methods:{

    async search() {
      try {
        this.key = this.$route.query.key;
        const response = await this.$http.get("/goods/search/"+this.key);
        this.goods = response.data.data;
        console.log(response)
      } catch (error) {
        console.error("Error loading types:", error);
      }

    },
    goto(url){
      location.href=url
    }


  }


}
</script>
