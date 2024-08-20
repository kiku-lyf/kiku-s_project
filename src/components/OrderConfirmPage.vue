<template>
  <FrontHeader></FrontHeader>
  <div data-v-a12cf9da="">
    <div data-v-a12cf9da="" class="main-body">
      <div data-v-a12cf9da="" class="main-content">
        <div style="width: 70%; margin: 30px auto; border-radius: 20px; background-color: white;">
          <div
              style="display: flex; align-items: center; color: rgb(0, 0, 0); line-height: 80px; border-bottom: 1px solid rgb(231, 230, 230);">
            <div style="padding-left: 20px; font-size: 18px; flex: 1 1 0%;">全部商品（1件）</div>
            <div style="flex: 2 1 0%; text-align: right;">
              <div class="el-select el-select--small" style="width: 50%;"><!---->
                <div class="el-input el-input--small el-input--suffix"><!----><input type="text" readonly="readonly"
                                                                                     autocomplete="off"
                                                                                     placeholder="请选择收货地址"
                                                                                     class="el-input__inner">
                  <!----><span class="el-input__suffix"><span class="el-input__suffix-inner"><i
                      class="el-select__caret el-input__icon el-icon-arrow-up"></i><!----><!----><!----><!---->
                    <!----></span><!----></span><!----><!----></div>
                <div class="el-select-dropdown el-popper" style="display: none; min-width: 323.016px;">
                  <div class="el-scrollbar" style="">
                    <div class="el-select-dropdown__wrap el-scrollbar__wrap"
                         style="margin-bottom: -17px; margin-right: -17px;">
                      <ul class="el-scrollbar__view el-select-dropdown__list"><!---->
                        <li class="el-select-dropdown__item"><span>123123</span></li>
                      </ul>
                    </div>
                    <div class="el-scrollbar__bar is-horizontal">
                      <div class="el-scrollbar__thumb" style="transform: translateX(0%);"></div>
                    </div>
                    <div class="el-scrollbar__bar is-vertical">
                      <div class="el-scrollbar__thumb" style="transform: translateY(0%);"></div>
                    </div>
                  </div><!----></div>
              </div>
            </div>
            <div style="padding-right: 20px; font-size: 16px; flex: 1 1 0%; text-align: right;"> 已选商品 <span
                style="color: red; font-size: 18px;">￥ {{this.orderConfirm_.totalAmount}} </span>
              <button type="button" class="el-button el-button--danger el-button--small is-round"
                      style="margin-left: 20px;" @click="order"><!----><!----><span>确认订单</span></button>
            </div>
          </div>
          <div style="margin: 20px 50px; min-height: 100vh;">
            <div
                class="el-table el-table--fit el-table--enable-row-hover el-table--enable-row-transition el-table--small"
                strip="">
              <div class="hidden-columns">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div class="el-table__header-wrapper">
                <table cellspacing="0" cellpadding="0" border="0" class="el-table__header" style="width: 1232px;">
                  <colgroup>
                    <col name="el-table_1_column_1" width="55">
                    <col name="el-table_1_column_2" width="100">
                    <col name="el-table_1_column_3" width="225">
                    <col name="el-table_1_column_4" width="224">
                    <col name="el-table_1_column_5" width="224">
                    <col name="el-table_1_column_6" width="224">
                    <col name="el-table_1_column_7" width="180">
                    <col name="gutter" width="0">
                  </colgroup>
                  <thead class="has-gutter">
                  <tr class="">
                    <th colspan="1" rowspan="1"
                        class="el-table_1_column_1  is-center el-table-column--selection  is-leaf el-table__cell">
                      <div class="cell"><label class="el-checkbox"><span class="el-checkbox__input"><span
                          class="el-checkbox__inner"></span><input type="checkbox" aria-hidden="false"
                                                                   class="el-checkbox__original" value=""></span><!---->
                      </label></div>
                    </th>
                    <th colspan="1" rowspan="1" class="el-table_1_column_2     is-leaf el-table__cell">
                      <div class="cell">商品图片</div>
                    </th>
                    <th colspan="1" rowspan="1" class="el-table_1_column_3     is-leaf el-table__cell">
                      <div class="cell">商品名称</div>
                    </th>
                    <th colspan="1" rowspan="1" class="el-table_1_column_4     is-leaf el-table__cell">
                      <div class="cell">店铺</div>
                    </th>
                    <th colspan="1" rowspan="1" class="el-table_1_column_5     is-leaf el-table__cell">
                      <div class="cell">商品价格</div>
                    </th>
                    <th colspan="1" rowspan="1" class="el-table_1_column_6     is-leaf el-table__cell">
                      <div class="cell">选择数量</div>
                    </th>
                    <th colspan="1" rowspan="1" class="el-table_1_column_7  is-center   is-leaf el-table__cell">
                      <div class="cell">操作</div>
                    </th>
                    <th class="el-table__cell gutter" style="width: 0px; display: none;"></th>
                  </tr>
                  </thead>
                </table>
              </div>
              <div class="el-table__body-wrapper is-scrolling-none">
                <table cellspacing="0" cellpadding="0" border="0" class="el-table__body" style="width: 1232px;">
                  <colgroup>
                    <col name="el-table_1_column_1" width="55">
                    <col name="el-table_1_column_2" width="100">
                    <col name="el-table_1_column_3" width="225">
                    <col name="el-table_1_column_4" width="224">
                    <col name="el-table_1_column_5" width="224">
                    <col name="el-table_1_column_6" width="224">
                    <col name="el-table_1_column_7" width="180">
                  </colgroup>
                  <tbody>


                  <tr class="el-table__row"  v-for="item in this.orderConfirm_.items" :key="item.goodsId" >

                    <td rowspan="1" colspan="1" class="el-table_1_column_2   el-table__cell">
                      <div class="cell">
                        <div style="display: flex; align-items: center;">
                          <div class="el-image" style="width: 80px; height: 60px; border-radius: 5px;"><img
                              :src="item.img" class="el-image__inner"><!---->
                          </div>
                        </div>
                      </div>
                    </td>
                    <td rowspan="1" colspan="1" class="el-table_1_column_3   el-table__cell">
                      <div class="cell">{{item.goodsName}}   </div>
                    </td>
                    <td rowspan="1" colspan="1" class="el-table_1_column_4   el-table__cell">
                      <div class="cell"><a href="#">ifashion</a></div>
                    </td>
                    <td rowspan="1" colspan="1" class="el-table_1_column_5   el-table__cell">
                      <div class="cell"> {{ item.price }} / 件  </div>
                    </td>
                    <td rowspan="1" colspan="1" class="el-table_1_column_6   el-table__cell">
<!--                      <div class="cell">-->
<!--                        <div class="el-input-number el-input-number&#45;&#45;small" style="width: 100px;"><span role="button"-->
<!--                                                                                                        class="el-input-number__decrease is-disabled"><i-->
<!--                            class="el-icon-minus"></i></span><span role="button" class="el-input-number__increase"><i-->
<!--                            class="el-icon-plus"></i></span>-->
<!--                          <div class="el-input el-input&#45;&#45;small">&lt;!&ndash;&ndash;&gt;<input type="text" autocomplete="off"-->
<!--                                                                              max="Infinity" min="1"-->
<!--                                                                              class="el-input__inner" role="spinbutton"-->
<!--                                                                              aria-valuemax="Infinity" aria-valuemin="1"-->
<!--                                                                              aria-valuenow="1" aria-disabled="false">-->
<!--                          </div>-->
<!--                        </div>-->
<!--                      </div>-->

                      <el-input-number v-model="item.amount" @change="this.computeTotal" :min="1" :max="10" aria-label="描述文字"></el-input-number>
                    </td>
<!--                    <td rowspan="1" colspan="1" class="el-table_1_column_7 is-center  el-table__cell">-->
<!--                      <div class="cell">-->
<!--                        <button @click="removeOrder(key)" type="button" class="el-button el-button&#45;&#45;danger el-button&#45;&#45;mini is-plain">&lt;!&ndash;&ndash;&gt;-->
<!--                          &lt;!&ndash;&ndash;&gt;<span>移除</span></button>-->
<!--                      </div>-->
<!--                    </td>-->
                  </tr>

                  <!----></tbody>
                </table><!----><!----></div><!----><!----><!----><!---->
              <div class="el-table__column-resize-proxy" style="display: none;"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div data-v-a12cf9da="" class="el-dialog__wrapper" style="display: none;">
      <div role="dialog" aria-modal="true" aria-label="重要说明" class="el-dialog"
           style="margin-top: 15vh; width: 40%;">
        <div class="el-dialog__header"><span class="el-dialog__title">重要说明</span>
          <button type="button" aria-label="Close" class="el-dialog__headerbtn"><i
              class="el-dialog__close el-icon el-icon-close"></i></button>
        </div><!---->
        <div class="el-dialog__footer">
          <div data-v-a12cf9da="" class="dialog-footer">
            <button data-v-a12cf9da="" type="button" class="el-button el-button--default el-button--small"><!---->
              <!----><span>关 闭</span></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import FrontHeader from "@/components/FrontHeader.vue";


export default {
  name: 'OrderConfirmPage',
  components: {FrontHeader},
  // props: ['orderConfirm'],
  data(){
    return{
      orderConfirm_:{}

    }

  },
  mounted() {
    this.init()
  },
  methods: {
    init(){

      const storedData = localStorage.getItem('orderConfirm');
      if (storedData) {
        this.orderConfirm_ = JSON.parse(storedData);
        // 清除数据以避免重复加载
        localStorage.removeItem('orderConfirm');
      }
    },

    async modifyCart(key, num) {

      try {
        await this.$http.get("/cart/modify/" + key + "/" + num);
      } catch (error) {
        console.error("Error loading types:", error);
      }

    },
    handleChange(key) {
      this.modifyCart(key, this.cartItems[key].num)
      this.computeTotal()
    },

    computeTotal() {
      // this.orderConfirm_.totalAmount = 0
      var sum=0
      for ( const item of this.orderConfirm_.items) {   // of  而不是 in  遍历数组
          sum += item.amount *item.price
        }
      this.orderConfirm_.totalAmount=sum
    },
    async order() {
      try {

        const response = await this.$http.post("/order/confirm", this.orderConfirm_);
        if(response.data!=null)

          this.$message({
            message: '下单成功',
            type: 'success'
          });
      } catch (error) {
        console.error("Error loading types:", error);
      }

    }
  }

}
</script>

<style>
.front-notice {
  padding: 5px 20px;
  color: #666;
  background-color: #f2f2f2;
  font-size: 12px
}

.front-header {
  display: flex;
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid #eee;
  background: #fff
}

.front-header-left {
  width: 350px;
  display: flex;
  align-items: center;
  padding-left: 30px
}

.front-header-dropdown img,.front-header-left img {
  width: 40px;
  height: 40px;
  border-radius: 50%
}

.front-header-left .title {
  flex: 1;
  color: #355476;
  cursor: pointer;
  margin-left: 10px;
  font-size: 20px;
  font-weight: 700
}

.front-header-center {
  flex: 1
}

.front-header-right {
  width: 250px;
  padding-right: 20px;
  text-align: right
}

.front-header-dropdown {
  display: flex;
  align-items: center;
  justify-content: right
}

.main-content {
  width: 100%
}

a {
  color: #666
}

a:hover {
  color: red
}

p {
  font-size: 16px!important;
  color: #4e4e4e;
  margin: 15px 0;
  line-height: 30px
}

p:has(img) {
  line-height: 0!important
}

p img {
  width: 100%!important
}

.el-dropdown-menu {
  width: 100px!important;
  text-align: center!important
}

.el-menu.el-menu--horizontal {
  border: none!important;
  height: 59px
}

.el-tabs__item {
  font-size: 18px!important;
  color: #000!important
}

</style>


