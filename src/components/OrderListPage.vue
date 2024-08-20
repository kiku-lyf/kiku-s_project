<template>
  <FrontHeader></FrontHeader>

  <div class="main-body" style="width: 80%; margin: 30px auto; border-radius: 20px; background-color: white;">
    <div style="display: flex; color: rgb(0, 0, 0); line-height: 80px; border-bottom: 1px solid rgb(231, 230, 230);">
      <div style="padding-left: 20px; font-size: 18px; flex: 1 1 0%;">全部订单 （{{this.orderList.length}}个）</div>
    </div>
    <div style="margin: 20px 50px;min-height: 100vh;">

      <el-table
          :data="orderList"
          style="width: 100%">
        <el-table-column
            label="商品图片"
            width="150">
          <template v-slot="scope">
            <div class="cell">
              <div style="display: flex; align-items: center;">
                <div class="el-image" style="width: 80px; height: 60px; border-radius: 5px;">
                  <img :src="scope.row.img" class="el-image__inner">
                </div>
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column
            label="订单号"
            width="150">
          <template v-slot="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.orderSn }}</span>
          </template>
        </el-table-column>
        <el-table-column
            label="商品名称"
            width="150">
          <template v-slot="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column
            label="单价"
            width="150">
          <template v-slot="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.price }}</span>
          </template>
        </el-table-column>
        <el-table-column
            label="数量"
            width="150">
          <template v-slot="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.amount }}</span>
          </template>
        </el-table-column>
        <el-table-column
            label="日期"
            width="150">
          <template v-slot="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.createTime }}</span>
          </template>
        </el-table-column>
        <el-table-column
            label="订单状态"
            width="150">
          <template v-slot="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ this.getStatus(scope.row.status) }}</span>
          </template>
        </el-table-column>


        <el-table-column label="操作">
          <template v-slot="scope">
            <el-button v-if="scope.row.status==1"
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">去评论
            </el-button>

            <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">编辑
            </el-button>
            <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>


    </div>
  </div>


</template>

<script>
import FrontHeader from "@/components/FrontHeader.vue";

export default {
  name: 'OrderListPage',
  components: {FrontHeader},
  mounted() {
    this.getAll()
  },
  data() {
    return {
      orderList:[],
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        img: 'http://106.54.221.16:9094/files/1698583365358-1.png'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        img: 'http://106.54.221.16:9094/files/1698583365358-1.png'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        img: 'http://106.54.221.16:9094/files/1698583365358-1.png'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        img: 'http://106.54.221.16:9094/files/1698583365358-1.png'
      }]
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
   async getAll() {
      try {
        const response = await this.$http.get("/order/listAll" );
        this.orderList = response.data.data;
        console.log(response)
      } catch (error) {
        console.error("Error loading types:", error);
      }
    },
    getStatus(num){
      if(num==0)
        return "待付款"
      else if(num==1)
        return "已付款"
      else if(num==2)
        return "已取消"
      else
        return null
    }
  }


}
</script>

<style>
body {
  background-color: ghostwhite;
}
</style>
