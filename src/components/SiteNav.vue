<!--<script setup>-->

<!--</script>-->

<template>
  <div class="cover J_Cover" style="height: 60px;background-color: blueviolet;display: flex">

    <div class="site-nav site-nav-status-login" id="J_SiteNav" style="height:35px"><div class="site-nav-bd" id="J_SiteNavBd"><ul class="site-nav-bd-l" id="J_SiteNavBdL" data-spm-ab="1"><li class="site-nav-menu site-nav-switch site-nav-multi-menu J_MultiMenu " data-name="region"><div class="site-nav-menu-hd"><span class="site-nav-region">中国大陆</span><span class="site-nav-arrow"><span class="site-nav-icon"></span></span></div><div class="site-nav-menu-bd site-nav-menu-list"><ul id="J_SiteNavRegionList" class="site-nav-region-list site-nav-menu-bd-panel menu-bd-panel" role="listbox" aria-expanded="true"><li class="site-nav-region-item J_RegionItem" role="option">全球</li><li class="site-nav-region-item J_RegionItem" role="option">中国大陆</li><li class="site-nav-region-item J_RegionItem" role="option">中国香港</li><li class="site-nav-region-item J_RegionItem" role="option">中国台湾</li><li class="site-nav-region-item J_RegionItem" role="option">中国澳门</li><li class="site-nav-region-item J_RegionItem" role="option">韩国</li><li class="site-nav-region-item J_RegionItem" role="option">马来西亚</li><li class="site-nav-region-item J_RegionItem" role="option">澳大利亚</li><li class="site-nav-region-item J_RegionItem" role="option">新加坡</li><li class="site-nav-region-item J_RegionItem" role="option">新西兰</li><li class="site-nav-region-item J_RegionItem" role="option">加拿大</li><li class="site-nav-region-item J_RegionItem" role="option">日本</li><li class="site-nav-region-item J_RegionItem" role="option">越南</li><li class="site-nav-region-item J_RegionItem" role="option">泰国</li><li class="site-nav-region-item J_RegionItem" role="option">菲律宾</li><li class="site-nav-region-item J_RegionItem" role="option">柬埔寨</li></ul></div></li><li class="site-nav-menu site-nav-login site-nav-multi-menu " id="J_SiteNavLogin" data-name="login" data-spm="754894437"><div class="site-nav-menu-hd"><div class="site-nav-user"><a href="//i.taobao.com/my_taobao.htm?ad_id=&amp;am_id=&amp;cm_id=&amp;pm_id=1501036000a02c5c3739" target="_top" class="site-nav-login-info-nick ">tb796279293</a><span class="site-nav-arrow"><span class="site-nav-icon"></span></span></div></div><div class="site-nav-menu-bd" id="J_SiteNavLoginPanel"></div></li><li class="site-nav-menu site-nav-mobile" id="J_SiteNavMobile" data-name="mobile" data-spm="1997563273"><div class="site-nav-menu-hd"><a href="https://market.m.taobao.com/app/fdilab/download-page/main/index.html" target="_top"><span>手机逛淘宝</span></a></div></li><li class="site-nav-menu site-nav-mobile" id="J_SiteNavMobile"><div class="site-nav-menu-hd"><a href="javascript:void(0)" id="cniil_wza" target="_self"><span>网页无障碍</span></a></div></li></ul><ul class="site-nav-bd-r" id="J_SiteNavBdR" data-spm-ab="2"><li class="site-nav-menu site-nav-home" id="J_SiteNavHome" data-name="home" data-spm="1581860521"><div class="site-nav-menu-hd"><div class="site-nav-new-home"><span>淘宝网首页</span></div></div></li><li class="site-nav-menu site-nav-mytaobao site-nav-multi-menu J_MultiMenu " id="J_SiteNavMytaobao" data-name="mytaobao" data-spm="1997525045"><div class="site-nav-menu-hd"><a href="//i.taobao.com/my_itaobao" target="_top"><span>我的淘宝</span></a><span class="site-nav-arrow"><span class="site-nav-icon"></span></span></div><div class="site-nav-menu-bd site-nav-menu-list"><div class="site-nav-menu-bd-panel menu-bd-panel"><a href="//trade.taobao.com/trade/itemlist/list_bought_items.htm" target="_top">已买到的宝贝</a><a href="//www.taobao.com/markets/footmark/tbfoot" target="_top">我的足迹</a></div></div></li><li class="site-nav-menu site-nav-cart site-nav-menu-empty site-nav-multi-menu J_MultiMenu " id="J_MiniCart" data-name="cart" data-spm="1997525049"><div class="site-nav-menu-hd"><a href="//cart.taobao.com/cart.htm?from=mini&amp;ad_id=&amp;am_id=&amp;cm_id=&amp;pm_id=1501036000a02c5c3739" target="_top"><span class="site-nav-icon site-nav-icon-highlight"></span><span>购物车</span><span id="J_MiniCartNum">9</span></a></div><div class="site-nav-menu-bd"><div class="site-nav-menu-bd-panel menu-bd-panel"></div></div></li><li class="site-nav-menu site-nav-favor site-nav-multi-menu J_MultiMenu " id="J_SiteNavFavor" data-name="favor" data-spm="1997525053"><div class="site-nav-menu-hd"><a href="//shoucang.taobao.com/item_collect.htm" target="_top"><span class="site-nav-icon"></span><span>收藏夹</span></a><span class="site-nav-arrow"><span class="site-nav-icon"></span></span></div><div class="site-nav-menu-bd site-nav-menu-list"><div class="site-nav-menu-bd-panel menu-bd-panel"><a href="//shoucang.taobao.com/item_collect.htm" target="_top">收藏的宝贝</a><a href="//shoucang.taobao.com/shop_collect_list.htm" target="_top">收藏的店铺</a></div></div></li><li class="site-nav-menu site-nav-catalog" id="J_SiteNavCatalog" data-name="catalog" data-spm="1997563209"><div class="site-nav-menu-hd"><a href="//www.taobao.com/tbhome/page/market-list" target="_top"><span>商品分类</span></a></div></li><li class="site-nav-menu site-nav-openshop " id="J_SiteNavOpenShop" data-name="openshop" data-spm="1997563208"><div class="site-nav-menu-hd"><a href="//ishop.taobao.com/openshop/tb_open_shop_landing.htm" target="_top"><span>免费开店</span></a><span class="site-nav-arrow"><span class="site-nav-icon"></span></span></div><div class="site-nav-menu-bd site-nav-menu-list"><div class="site-nav-menu-bd-panel menu-bd-panel"><a href="https://web.m.taobao.com/app/industry-source-code/enterprise-cloud-pay-pc/cloudIntroduce" target="_top">对公支付</a></div></div></li><li class="site-nav-pipe">|</li><li class="site-nav-menu site-nav-seller site-nav-multi-menu J_MultiMenu " id="J_SiteNavSeller" data-name="seller" data-spm="1997525073"><div class="site-nav-menu-hd"><a href="//myseller.taobao.com/home.htm/QnworkbenchHome/" target="_top"><span>千牛卖家中心</span></a><span class="site-nav-arrow"><span class="site-nav-icon"></span></span></div><div class="site-nav-menu-bd site-nav-menu-list"><div class="site-nav-menu-bd-panel menu-bd-panel"><a href="//myseller.taobao.com/home.htm/QnworkbenchHome/" target="_top">开店入驻</a><a href="//trade.taobao.com/trade/itemlist/list_sold_items.htm?toNew=true" target="_top">已卖出的宝贝</a><a href="//sell.taobao.com/auction/goods/goods_on_sale.htm" target="_top">出售中的宝贝</a><a href="//fuwu.taobao.com/?tracelog=tbdd" target="_top">卖家服务市场</a><a href="//daxue.taobao.com/" target="_top">卖家培训中心</a><a href="//healthcenter.taobao.com/home/health_home.htm" target="_top">体检中心</a><a href="//qn.taobao.com/headline/news" target="_top">电商学习中心</a></div></div></li><li class="site-nav-menu site-nav-service site-nav-multi-menu J_MultiMenu " id="J_SiteNavService" data-name="service" data-spm="754895749"><div class="site-nav-menu-hd"><a href="https://consumerservice.taobao.com" target="_top"><span>帮助中心</span></a><span class="site-nav-arrow"><span class="site-nav-icon"></span></span></div><div class="site-nav-menu-bd site-nav-menu-list"><div class="site-nav-menu-bd-panel menu-bd-panel"><a href="https://consumerservice.taobao.com/online-help" target="_top">官方客服</a><a href="//helpcenter.taobao.com/index?from=high" target="_top">商家客服</a><a href="https://market.m.taobao.com/app/im/chat/index.html" target="_top">消息中心</a><a href="https://market.m.taobao.com/app/tbhome/feedback/index.html?from=https%3A%2F%2Fwww.taobao.com%2F%3Fspm%3Da21n57.1.logo.1.112f6945aEyRpQ" target="_top">意见反馈</a><a href="https://www.12377.cn" target="_top">举报中心</a></div></div></li></ul></div></div>
    <!--[if lt IE 8]>
    <style>html,body{overflow:hidden;height:100%}</style>
    <div class="tb-ie-updater-layer"></div>
    <div class="tb-ie-updater-box" data-spm="20161112">
    <a href="https://www.google.cn/intl/zh-CN/chrome/browser/desktop/" class="tb-ie-updater-google" target="_blank" data-spm-click="gostr=/tbieupdate;locaid=d1;name=google">谷歌 Chrome</a>
    <a href="http://www.uc.cn/ucbrowser/download/" class="tb-ie-updater-uc" target="_blank" data-spm-click="gostr=/tbieupdate20161112;locaid=d2;name=uc">UC 浏览器</a>"
    </div>
    <![endif]-->



    <div class="tbh-banner J_Module tb-pass" data-name="banner" data-spm="201855" data-bucket="A">

    </div>

    <div class="J_Module tbh-decorations" data-name="decorations" data-bucket="A">


    </div>

  </div>
</template>


<script>
export default {
  name: 'SiteNav'
}
</script>


<style scoped>



</style>



