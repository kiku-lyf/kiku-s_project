<template>


  <FrontHeader></FrontHeader>


  <div data-v-a12cf9da="" class="main-body">
    <div data-v-ccdc2bae="" data-v-a12cf9da="" class="main-content">
      <div data-v-ccdc2bae="" style="height: 60px; background-color: rgb(197, 102, 246);"></div>
      <div data-v-ccdc2bae="" style="display: flex;">
        <div data-v-ccdc2bae="" class="left" style="width: 17%;
    background-repeat: no-repeat;
    background-image:url(/left.png)  "></div>
        <div data-v-ccdc2bae="" style="width: 66%; background-color: white; margin: 0px auto;">
          <div data-v-ccdc2bae=""
               style="color: rgb(254, 1, 55); margin: 15px 0px 15px 18px; font-size: 16px; font-weight: bold;">主题市场
          </div>
          <div data-v-ccdc2bae="" style="display: flex; margin: 0px 25px;">
            <div data-v-ccdc2bae="" style="flex: 1 1 20%;">
              <div  style="color: rgb(102, 102, 102); display: flex; margin: 14px 0px;" v-for="item in type" :key="item.id">
                <img  :src="item.icon" alt=""
                  style="width: 20px; height: 20px;color:#666">
                <div  style="margin-left: 10px; font-size: 14px;"><a data-v-ccdc2bae="" href="#" @click="goto('/front/type?id='+item.typeId)"  style="text-decoration: none" class="hover-red">{{item.typeName}}</a></div>
              </div>
            </div>
            <div data-v-ccdc2bae="" style="flex: 1 1 50%; margin-top: 15px;">


                <div class="block text-center" >
                  <span class="demonstration"></span>
                  <el-carousel height="300px" style="border-radius: 10px">
                    <el-carousel-item v-for="item in carousel_top" :key="item">
                      <img :src="item" style="width: 100%;height: 100%">
                    </el-carousel-item>
                  </el-carousel>
                </div>


              <div data-v-ccdc2bae="" style="display: flex; margin-top: 30px;">

                <div data-v-ccdc2bae="" style="flex: 1 1 0%;margin-left: 5px;">
                  <div class="block text-center" >
                    <span class="demonstration"></span>
                    <el-carousel height="200px">
                      <el-carousel-item v-for="item in 3" :key="item">
                        <h3 class="small justify-center" text="2xl">{{ item }}</h3>
                      </el-carousel-item>
                    </el-carousel>
                  </div>

                </div>


                <div data-v-ccdc2bae="" style="flex: 1 1 0%;margin-left: 5px;">
                  <div class="block text-center" >
                    <span class="demonstration"></span>
                    <el-carousel height="200px">
                      <el-carousel-item v-for="item in 3" :key="item">
                        <h3 class="small justify-center" text="2xl">{{ item }}</h3>
                      </el-carousel-item>
                    </el-carousel>
                  </div>


                </div>



              </div>
            </div>




            <div data-v-ccdc2bae=""
                 style="flex: 1 1 30%; background: rgb(243, 243, 243); margin-top: 15px; margin-left: 15px; border-radius: 10px;">
              <div data-v-ccdc2bae="" style="text-align: center; margin-top: 30px;"><a data-v-ccdc2bae="" href="#"><img
                  data-v-ccdc2bae="" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" alt=""
                  style="width: 80px; height: 80px; border-radius: 50%;"></a>
                <div  style="margin-top: 10px;" v-if="this.user!=null">{{this.user.username}}</div>
                <div  style="margin-top: 10px;" v-else>用户未登录</div>
              </div>
              <div data-v-ccdc2bae="" style="margin-top: 20px; padding: 0px 10px;"><img data-v-ccdc2bae=""
                                                                                        src="@/img/right.png"
                                                                                        alt=""
                                                                                        style="width: 100%; height: 150px; border-radius: 20px;">
              </div>
              <div data-v-ccdc2bae="" style="margin: 20px 0px 10px 10px;"><i data-v-ccdc2bae=""
                                                                             class="el-icon-bell"></i><span
                  data-v-ccdc2bae="" style="font-weight: bold;">公告</span><span data-v-ccdc2bae=""
                                                                                 style="color: rgb(102, 102, 102);">：今天天气很不错，可以出去一起玩了</span>
              </div><!----></div>
          </div>

          <div data-v-ccdc2bae="" style="margin: 40px 10px;">
            <div @click="inc" style="color: white; margin-left: 10px; margin-bottom: 10px; font-size: 20px; border-radius: 20px; font-weight: bold; background-color: rgb(4, 191, 4); text-align: center; width: 130px; height: 40px; line-height: 40px;">
              热卖商品 {{cnt}}
            </div>
            <div data-v-ccdc2bae="" class="el-row">
              <div data-v-ccdc2bae="" class="el-col el-col-5"><img data-v-ccdc2bae=""
                                                                   src="http://106.54.221.16:9094/files/1698592468771-1.jpg"
                                                                   alt=""
                                                                   style="width: 100%; height: 175px; border-radius: 10px; border: 1px solid rgb(204, 204, 204);">
                <div data-v-ccdc2bae=""
                     style="margin-top: 10px; font-weight: 500; font-size: 16px; width: 160px; color: rgb(0, 0, 0); text-overflow: ellipsis; overflow: hidden; white-space: nowrap;">
                  雷柏M650无线鼠标三模蓝牙鼠标办公静音小巧台式笔记本电脑可爱女
                </div>
                <div data-v-ccdc2bae="" style="margin-top: 5px; font-size: 20px; color: rgb(255, 80, 0);">￥ 39 / 个
                </div>
              </div>
<!--              <div data-v-ccdc2bae="" class="el-col el-col-5"><img data-v-ccdc2bae=""-->
<!--                                                                   src="http://106.54.221.16:9094/files/1698595714367-主图_2.jpg"-->
<!--                                                                   alt=""-->
<!--                                                                   style="width: 100%; height: 175px; border-radius: 10px; border: 1px solid rgb(204, 204, 204);">-->
<!--                <div data-v-ccdc2bae=""-->
<!--                     style="margin-top: 10px; font-weight: 500; font-size: 16px; width: 160px; color: rgb(0, 0, 0); text-overflow: ellipsis; overflow: hidden; white-space: nowrap;">-->
<!--                  多功能锅盖架厨房用品锅铲子勺子收纳架坐式切菜板置物架家用大全-->
<!--                </div>-->
<!--                <div data-v-ccdc2bae="" style="margin-top: 5px; font-size: 20px; color: rgb(255, 80, 0);">￥ 49 / 套-->
<!--                </div>-->
<!--              </div>-->
<!--              <div data-v-ccdc2bae="" class="el-col el-col-5"><img data-v-ccdc2bae=""-->
<!--                                                                   src="http://106.54.221.16:9094/files/1698594393067-3.jpg"-->
<!--                                                                   alt=""-->
<!--                                                                   style="width: 100%; height: 175px; border-radius: 10px; border: 1px solid rgb(204, 204, 204);">-->
<!--                <div data-v-ccdc2bae=""-->
<!--                     style="margin-top: 10px; font-weight: 500; font-size: 16px; width: 160px; color: rgb(0, 0, 0); text-overflow: ellipsis; overflow: hidden; white-space: nowrap;">-->
<!--                  水星家纺官方旗舰店A类床上用品四件套床单非100全棉纯棉2023新款-->
<!--                </div>-->
<!--                <div data-v-ccdc2bae="" style="margin-top: 5px; font-size: 20px; color: rgb(255, 80, 0);">￥ 109 / 套-->
<!--                </div>-->
<!--              </div>-->
<!--              <div data-v-ccdc2bae="" class="el-col el-col-5"><img data-v-ccdc2bae=""-->
<!--                                                                   src="http://106.54.221.16:9094/files/1698572029197-1.jpg"-->
<!--                                                                   alt=""-->
<!--                                                                   style="width: 100%; height: 175px; border-radius: 10px; border: 1px solid rgb(204, 204, 204);">-->
<!--                <div data-v-ccdc2bae=""-->
<!--                     style="margin-top: 10px; font-weight: 500; font-size: 16px; width: 160px; color: rgb(0, 0, 0); text-overflow: ellipsis; overflow: hidden; white-space: nowrap;">-->
<!--                  兰蔻小白管防晒霜50ml轻透水漾防晒乳SPF50 PA++++-->
<!--                </div>-->
<!--                <div data-v-ccdc2bae="" style="margin-top: 5px; font-size: 20px; color: rgb(255, 80, 0);">￥ 89 / 件-->
<!--                </div>-->
<!--              </div>-->
<!--              <div data-v-ccdc2bae="" class="el-col el-col-5"><img data-v-ccdc2bae=""-->
<!--                                                                   src="http://106.54.221.16:9094/files/1698578434989-1.png"-->
<!--                                                                   alt=""-->
<!--                                                                   style="width: 100%; height: 175px; border-radius: 10px; border: 1px solid rgb(204, 204, 204);">-->
<!--                <div data-v-ccdc2bae=""-->
<!--                     style="margin-top: 10px; font-weight: 500; font-size: 16px; width: 160px; color: rgb(0, 0, 0); text-overflow: ellipsis; overflow: hidden; white-space: nowrap;">-->
<!--                  铜洗脸盆水龙头冷热水家用卫生间洗手池洗漱台面盆浴室柜单龙头 1件装-->
<!--                </div>-->
<!--                <div data-v-ccdc2bae="" style="margin-top: 5px; font-size: 20px; color: rgb(255, 80, 0);">￥ 399 / 件-->
<!--                </div>-->
<!--              </div>-->
<!--              <div data-v-ccdc2bae="" class="el-col el-col-5"><img data-v-ccdc2bae=""-->
<!--                                                                   src="http://106.54.221.16:9094/files/1698575165427-1.jpg"-->
<!--                                                                   alt=""-->
<!--                                                                   style="width: 100%; height: 175px; border-radius: 10px; border: 1px solid rgb(204, 204, 204);">-->
<!--                <div data-v-ccdc2bae=""-->
<!--                     style="margin-top: 10px; font-weight: 500; font-size: 16px; width: 160px; color: rgb(0, 0, 0); text-overflow: ellipsis; overflow: hidden; white-space: nowrap;">-->
<!--                  大白兔奶糖袋装原味结婚庆喜糖果牛奶休闲零食批发-->
<!--                </div>-->
<!--                <div data-v-ccdc2bae="" style="margin-top: 5px; font-size: 20px; color: rgb(255, 80, 0);">￥ 20 / 袋-->
<!--                </div>-->
<!--              </div>-->
<!--              <div data-v-ccdc2bae="" class="el-col el-col-5"><img data-v-ccdc2bae=""-->
<!--                                                                   src="http://106.54.221.16:9094/files/1698573741307-1.jpg"-->
<!--                                                                   alt=""-->
<!--                                                                   style="width: 100%; height: 175px; border-radius: 10px; border: 1px solid rgb(204, 204, 204);">-->
<!--                <div data-v-ccdc2bae=""-->
<!--                     style="margin-top: 10px; font-weight: 500; font-size: 16px; width: 160px; color: rgb(0, 0, 0); text-overflow: ellipsis; overflow: hidden; white-space: nowrap;">-->
<!--                  甘滋罗海苔卷-->
<!--                </div>-->
<!--                <div data-v-ccdc2bae="" style="margin-top: 5px; font-size: 20px; color: rgb(255, 80, 0);">￥ 9 / 盒</div>-->
<!--              </div>-->
<!--              <div data-v-ccdc2bae="" class="el-col el-col-5"><img data-v-ccdc2bae=""-->
<!--                                                                   src="http://106.54.221.16:9094/files/1698591999711-1.jpg"-->
<!--                                                                   alt=""-->
<!--                                                                   style="width: 100%; height: 175px; border-radius: 10px; border: 1px solid rgb(204, 204, 204);">-->
<!--                <div data-v-ccdc2bae=""-->
<!--                     style="margin-top: 10px; font-weight: 500; font-size: 16px; width: 160px; color: rgb(0, 0, 0); text-overflow: ellipsis; overflow: hidden; white-space: nowrap;">-->
<!--                  2023款13代酷睿i3_i5 联想台式电脑天逸510S主机 家用办公台式机设计游戏学习小主机全套 官方旗舰正品原装-->
<!--                </div>-->
<!--                <div data-v-ccdc2bae="" style="margin-top: 5px; font-size: 20px; color: rgb(255, 80, 0);">￥ 5999 / 台-->
<!--                </div>-->
<!--              </div>-->
<!--              <div data-v-ccdc2bae="" class="el-col el-col-5"><img data-v-ccdc2bae=""-->
<!--                                                                   src="http://106.54.221.16:9094/files/1698576042672-1.jpg"-->
<!--                                                                   alt=""-->
<!--                                                                   style="width: 100%; height: 175px; border-radius: 10px; border: 1px solid rgb(204, 204, 204);">-->
<!--                <div data-v-ccdc2bae=""-->
<!--                     style="margin-top: 10px; font-weight: 500; font-size: 16px; width: 160px; color: rgb(0, 0, 0); text-overflow: ellipsis; overflow: hidden; white-space: nowrap;">-->
<!--                  羽高6A 金属防冻数据线限时特惠安卓苹果Type-C数据线-->
<!--                </div>-->
<!--                <div data-v-ccdc2bae="" style="margin-top: 5px; font-size: 20px; color: rgb(255, 80, 0);">￥ 18 / 件-->
<!--                </div>-->
<!--              </div>-->
<!--              <div data-v-ccdc2bae="" class="el-col el-col-5"><img data-v-ccdc2bae=""-->
<!--                                                                   src="http://106.54.221.16:9094/files/1698594633271-2.jpg"-->
<!--                                                                   alt=""-->
<!--                                                                   style="width: 100%; height: 175px; border-radius: 10px; border: 1px solid rgb(204, 204, 204);">-->
<!--                <div data-v-ccdc2bae=""-->
<!--                     style="margin-top: 10px; font-weight: 500; font-size: 16px; width: 160px; color: rgb(0, 0, 0); text-overflow: ellipsis; overflow: hidden; white-space: nowrap;">-->
<!--                  长相知家纺加厚纯棉磨毛四件套100%全棉床单被套家用床上用品-->
<!--                </div>-->
<!--                <div data-v-ccdc2bae="" style="margin-top: 5px; font-size: 20px; color: rgb(255, 80, 0);">￥ 99 / 套-->
<!--                </div>-->
<!--              </div>-->
<!--              <div data-v-ccdc2bae="" class="el-col el-col-5"><img data-v-ccdc2bae=""-->
<!--                                                                   src="http://106.54.221.16:9094/files/1698588308486-1.png"-->
<!--                                                                   alt=""-->
<!--                                                                   style="width: 100%; height: 175px; border-radius: 10px; border: 1px solid rgb(204, 204, 204);">-->
<!--                <div data-v-ccdc2bae=""-->
<!--                     style="margin-top: 10px; font-weight: 500; font-size: 16px; width: 160px; color: rgb(0, 0, 0); text-overflow: ellipsis; overflow: hidden; white-space: nowrap;">-->
<!--                  单两件大码长袖t恤男秋季休闲圆领印花上衣潮流ins百搭体恤上衣-->
<!--                </div>-->
<!--                <div data-v-ccdc2bae="" style="margin-top: 5px; font-size: 20px; color: rgb(255, 80, 0);">￥ 99 / 件-->
<!--                </div>-->
<!--              </div>-->
<!--              <div data-v-ccdc2bae="" class="el-col el-col-5"><img data-v-ccdc2bae=""-->
<!--                                                                   src="http://106.54.221.16:9094/files/1698629802312-主图_1.jpg"-->
<!--                                                                   alt=""-->
<!--                                                                   style="width: 100%; height: 175px; border-radius: 10px; border: 1px solid rgb(204, 204, 204);">-->
<!--                <div data-v-ccdc2bae=""-->
<!--                     style="margin-top: 10px; font-weight: 500; font-size: 16px; width: 160px; color: rgb(0, 0, 0); text-overflow: ellipsis; overflow: hidden; white-space: nowrap;">-->
<!--                  文具的家注音版 人民教育出版社 小学生一年级课外书必读人教版下册老师推 荐阅读入选语文教材书目畅销儿童文学书籍带拼音-->
<!--                </div>-->
<!--                <div data-v-ccdc2bae="" style="margin-top: 5px; font-size: 20px; color: rgb(255, 80, 0);">￥ 56 / 本-->
<!--                </div>-->
<!--              </div>-->
<!--              <div data-v-ccdc2bae="" class="el-col el-col-5"><img data-v-ccdc2bae=""-->
<!--                                                                   src="http://106.54.221.16:9094/files/1698574998821-1.jpg"-->
<!--                                                                   alt=""-->
<!--                                                                   style="width: 100%; height: 175px; border-radius: 10px; border: 1px solid rgb(204, 204, 204);">-->
<!--                <div data-v-ccdc2bae=""-->
<!--                     style="margin-top: 10px; font-weight: 500; font-size: 16px; width: 160px; color: rgb(0, 0, 0); text-overflow: ellipsis; overflow: hidden; white-space: nowrap;">-->
<!--                  百草味香蕉脆片75g袋水果干芭蕉干办公室休闲网红零食小吃特产-->
<!--                </div>-->
<!--                <div data-v-ccdc2bae="" style="margin-top: 5px; font-size: 20px; color: rgb(255, 80, 0);">￥ 10 / 袋-->
<!--                </div>-->
<!--              </div>-->
<!--              <div data-v-ccdc2bae="" class="el-col el-col-5"><img data-v-ccdc2bae=""-->
<!--                                                                   src="http://106.54.221.16:9094/files/1698590048547-2.jpg"-->
<!--                                                                   alt=""-->
<!--                                                                   style="width: 100%; height: 175px; border-radius: 10px; border: 1px solid rgb(204, 204, 204);">-->
<!--                <div data-v-ccdc2bae=""-->
<!--                     style="margin-top: 10px; font-weight: 500; font-size: 16px; width: 160px; color: rgb(0, 0, 0); text-overflow: ellipsis; overflow: hidden; white-space: nowrap;">-->
<!--                  特步苜白板鞋丨男鞋年秋季官网新款学生舒适百搭休闲鞋运动鞋-->
<!--                </div>-->
<!--                <div data-v-ccdc2bae="" style="margin-top: 5px; font-size: 20px; color: rgb(255, 80, 0);">￥ 299 / 双-->
<!--                </div>-->
<!--              </div>-->
<!--              <div data-v-ccdc2bae="" class="el-col el-col-5"><img data-v-ccdc2bae=""-->
<!--                                                                   src="http://106.54.221.16:9094/files/1698577254192-1.jpg"-->
<!--                                                                   alt=""-->
<!--                                                                   style="width: 100%; height: 175px; border-radius: 10px; border: 1px solid rgb(204, 204, 204);">-->
<!--                <div data-v-ccdc2bae=""-->
<!--                     style="margin-top: 10px; font-weight: 500; font-size: 16px; width: 160px; color: rgb(0, 0, 0); text-overflow: ellipsis; overflow: hidden; white-space: nowrap;">-->
<!--                  2器6液兔力蚊香液无味婴儿孕妇宝宝驱蚊水灭蚊防蚊-->
<!--                </div>-->
<!--                <div data-v-ccdc2bae="" style="margin-top: 5px; font-size: 20px; color: rgb(255, 80, 0);">￥ 29 / 件-->
<!--                </div>-->
<!--              </div>-->
            </div>
          </div>
          <div data-v-ccdc2bae="" style="margin: 40px 10px;">
            <div data-v-ccdc2bae=""
                 style="color: white; margin-left: 10px; margin-bottom: 10px; font-size: 20px; border-radius: 20px; font-weight: bold; background-color: rgb(5, 177, 5); text-align: center; width: 130px; height: 40px; line-height: 40px;">
              猜你喜欢
            </div>
            <div data-v-ccdc2bae="" class="el-row">
              <div data-v-ccdc2bae="" class="el-col el-col-5"><img data-v-ccdc2bae=""
                                                                   src="http://106.54.221.16:9094/files/1698595981070-1.png"
                                                                   alt=""
                                                                   style="width: 100%; height: 175px; border-radius: 10px; border: 1px solid rgb(204, 204, 204);">
                <div data-v-ccdc2bae=""
                     style="margin-top: 10px; font-weight: 500; font-size: 16px; width: 160px; color: rgb(0, 0, 0); text-overflow: ellipsis; overflow: hidden; white-space: nowrap;">
                  硅胶铲不粘锅专用锅铲耐高温硅胶铲套装家用炒菜铲子炒勺汤勺厨具
                </div>
                <div data-v-ccdc2bae="" style="margin-top: 5px; font-size: 20px; color: rgb(255, 80, 0);">￥ 59 / 套
                </div>
              </div>
<!--              <div data-v-ccdc2bae="" class="el-col el-col-5"><img data-v-ccdc2bae=""-->
<!--                                                                   src="http://106.54.221.16:9094/files/1698593594163-2.jpg"-->
<!--                                                                   alt=""-->
<!--                                                                   style="width: 100%; height: 175px; border-radius: 10px; border: 1px solid rgb(204, 204, 204);">-->
<!--                <div data-v-ccdc2bae=""-->
<!--                     style="margin-top: 10px; font-weight: 500; font-size: 16px; width: 160px; color: rgb(0, 0, 0); text-overflow: ellipsis; overflow: hidden; white-space: nowrap;">-->
<!--                  新疆正宗库尔勒小香梨全母梨10斤特产新鲜孕妇水果当季整箱包邮-->
<!--                </div>-->
<!--                <div data-v-ccdc2bae="" style="margin-top: 5px; font-size: 20px; color: rgb(255, 80, 0);">￥ 1 / 斤</div>-->
<!--              </div>-->
<!--              <div data-v-ccdc2bae="" class="el-col el-col-5"><img data-v-ccdc2bae=""-->
<!--                                                                   src="http://106.54.221.16:9094/files/1698586243358-1.png"-->
<!--                                                                   alt=""-->
<!--                                                                   style="width: 100%; height: 175px; border-radius: 10px; border: 1px solid rgb(204, 204, 204);">-->
<!--                <div data-v-ccdc2bae=""-->
<!--                     style="margin-top: 10px; font-weight: 500; font-size: 16px; width: 160px; color: rgb(0, 0, 0); text-overflow: ellipsis; overflow: hidden; white-space: nowrap;">-->
<!--                  清仓捡漏商场撤回外贸男装休闲运动裤潮牌束脚宽松大码灯芯绒卫裤-->
<!--                </div>-->
<!--                <div data-v-ccdc2bae="" style="margin-top: 5px; font-size: 20px; color: rgb(255, 80, 0);">￥ 129 / 件-->
<!--                </div>-->
<!--              </div>-->
<!--              <div data-v-ccdc2bae="" class="el-col el-col-5"><img data-v-ccdc2bae=""-->
<!--                                                                   src="http://106.54.221.16:9094/files/1698577471271-1.jpg"-->
<!--                                                                   alt=""-->
<!--                                                                   style="width: 100%; height: 175px; border-radius: 10px; border: 1px solid rgb(204, 204, 204);">-->
<!--                <div data-v-ccdc2bae=""-->
<!--                     style="margin-top: 10px; font-weight: 500; font-size: 16px; width: 160px; color: rgb(0, 0, 0); text-overflow: ellipsis; overflow: hidden; white-space: nowrap;">-->
<!--                  Monda蒙达空气炸锅家用多功能大容量液晶触屏版无油电炸锅-->
<!--                </div>-->
<!--                <div data-v-ccdc2bae="" style="margin-top: 5px; font-size: 20px; color: rgb(255, 80, 0);">￥ 299 / 件-->
<!--                </div>-->
<!--              </div>-->
<!--              <div data-v-ccdc2bae="" class="el-col el-col-5"><img data-v-ccdc2bae=""-->
<!--                                                                   src="http://106.54.221.16:9094/files/1698591999711-1.jpg"-->
<!--                                                                   alt=""-->
<!--                                                                   style="width: 100%; height: 175px; border-radius: 10px; border: 1px solid rgb(204, 204, 204);">-->
<!--                <div data-v-ccdc2bae=""-->
<!--                     style="margin-top: 10px; font-weight: 500; font-size: 16px; width: 160px; color: rgb(0, 0, 0); text-overflow: ellipsis; overflow: hidden; white-space: nowrap;">-->
<!--                  2023款13代酷睿i3_i5 联想台式电脑天逸510S主机 家用办公台式机设计游戏学习小主机全套 官方旗舰正品原装-->
<!--                </div>-->
<!--                <div data-v-ccdc2bae="" style="margin-top: 5px; font-size: 20px; color: rgb(255, 80, 0);">￥ 5999 / 台-->
<!--                </div>-->
<!--              </div>-->
<!--              <div data-v-ccdc2bae="" class="el-col el-col-5"><img data-v-ccdc2bae=""-->
<!--                                                                   src="http://106.54.221.16:9094/files/1698588308486-1.png"-->
<!--                                                                   alt=""-->
<!--                                                                   style="width: 100%; height: 175px; border-radius: 10px; border: 1px solid rgb(204, 204, 204);">-->
<!--                <div data-v-ccdc2bae=""-->
<!--                     style="margin-top: 10px; font-weight: 500; font-size: 16px; width: 160px; color: rgb(0, 0, 0); text-overflow: ellipsis; overflow: hidden; white-space: nowrap;">-->
<!--                  单两件大码长袖t恤男秋季休闲圆领印花上衣潮流ins百搭体恤上衣-->
<!--                </div>-->
<!--                <div data-v-ccdc2bae="" style="margin-top: 5px; font-size: 20px; color: rgb(255, 80, 0);">￥ 99 / 件-->
<!--                </div>-->
<!--              </div>-->
<!--              <div data-v-ccdc2bae="" class="el-col el-col-5"><img data-v-ccdc2bae=""-->
<!--                                                                   src="http://106.54.221.16:9094/files/1698589714240-1.png"-->
<!--                                                                   alt=""-->
<!--                                                                   style="width: 100%; height: 175px; border-radius: 10px; border: 1px solid rgb(204, 204, 204);">-->
<!--                <div data-v-ccdc2bae=""-->
<!--                     style="margin-top: 10px; font-weight: 500; font-size: 16px; width: 160px; color: rgb(0, 0, 0); text-overflow: ellipsis; overflow: hidden; white-space: nowrap;">-->
<!--                  JEEP吉普休闲夹克男士外套春秋季潮牌工装宽松青年潮流连帽上衣服-->
<!--                </div>-->
<!--                <div data-v-ccdc2bae="" style="margin-top: 5px; font-size: 20px; color: rgb(255, 80, 0);">￥ 109 / 件-->
<!--                </div>-->
<!--              </div>-->
<!--              <div data-v-ccdc2bae="" class="el-col el-col-5"><img data-v-ccdc2bae=""-->
<!--                                                                   src="http://106.54.221.16:9094/files/1698595714367-主图_2.jpg"-->
<!--                                                                   alt=""-->
<!--                                                                   style="width: 100%; height: 175px; border-radius: 10px; border: 1px solid rgb(204, 204, 204);">-->
<!--                <div data-v-ccdc2bae=""-->
<!--                     style="margin-top: 10px; font-weight: 500; font-size: 16px; width: 160px; color: rgb(0, 0, 0); text-overflow: ellipsis; overflow: hidden; white-space: nowrap;">-->
<!--                  多功能锅盖架厨房用品锅铲子勺子收纳架坐式切菜板置物架家用大全-->
<!--                </div>-->
<!--                <div data-v-ccdc2bae="" style="margin-top: 5px; font-size: 20px; color: rgb(255, 80, 0);">￥ 49 / 套-->
<!--                </div>-->
<!--              </div>-->
<!--              <div data-v-ccdc2bae="" class="el-col el-col-5"><img data-v-ccdc2bae=""-->
<!--                                                                   src="http://106.54.221.16:9094/files/1698591999711-1.jpg"-->
<!--                                                                   alt=""-->
<!--                                                                   style="width: 100%; height: 175px; border-radius: 10px; border: 1px solid rgb(204, 204, 204);">-->
<!--                <div data-v-ccdc2bae=""-->
<!--                     style="margin-top: 10px; font-weight: 500; font-size: 16px; width: 160px; color: rgb(0, 0, 0); text-overflow: ellipsis; overflow: hidden; white-space: nowrap;">-->
<!--                  2023款13代酷睿i3_i5 联想台式电脑天逸510S主机 家用办公台式机设计游戏学习小主机全套 官方旗舰正品原装-->
<!--                </div>-->
<!--                <div data-v-ccdc2bae="" style="margin-top: 5px; font-size: 20px; color: rgb(255, 80, 0);">￥ 5999 / 台-->
<!--                </div>-->
<!--              </div>-->
<!--              <div data-v-ccdc2bae="" class="el-col el-col-5"><img data-v-ccdc2bae=""-->
<!--                                                                   src="http://106.54.221.16:9094/files/1698577555493-1.jpg"-->
<!--                                                                   alt=""-->
<!--                                                                   style="width: 100%; height: 175px; border-radius: 10px; border: 1px solid rgb(204, 204, 204);">-->
<!--                <div data-v-ccdc2bae=""-->
<!--                     style="margin-top: 10px; font-weight: 500; font-size: 16px; width: 160px; color: rgb(0, 0, 0); text-overflow: ellipsis; overflow: hidden; white-space: nowrap;">-->
<!--                  采琪采本色卷纸5提70卷-->
<!--                </div>-->
<!--                <div data-v-ccdc2bae="" style="margin-top: 5px; font-size: 20px; color: rgb(255, 80, 0);">￥ 19 / 件-->
<!--                </div>-->
<!--              </div>-->
            </div>
          </div>
        </div>
        <div data-v-ccdc2bae="" class="right" style="    width: 17%;
    background-repeat: no-repeat;
    background-image: url(/right.png);"></div>
      </div>
    </div>
  </div>
</template>


<style >
.demonstration {
  color: var(--el-text-color-secondary);
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.hover-red {
  color: #666666;
  transition: color 0.3s;
}

.hover-red:hover {
  color: red;
}

</style>


<script>

import FrontHeader from "@/components/FrontHeader.vue";

export default {
  name: 'HomePage',
  components: {FrontHeader},
  data(){
    return{
      type:[],
      carousel_top:[require("@/img/carousel-1.png"),require("@/img/carousel-2.png"),require("@/img/carousel-3.png")],
      carousel_left:[],
      carousel_right:[],
      cnt:0,
      user:{}
    }

  },
  mounted() {
     this.loadType()
     this.getUser()
  },
  methods:{
    async loadType() {
      try {
        const response = await this.$http.get("/type/all");
        this.type = response.data.data;
        console.log(response)
      } catch (error) {
        console.error("Error loading types:", error);
      }

    },
    async getUser() {

      try {
        const response = await this.$http.get("/user/getUser");
        this.user = response.data.data;
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
