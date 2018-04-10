<template>
  <div class="myTab">
      <router-link tag="div" :to="{name:'recommend'}" class="tab-item">
        <span class="tab-link">推荐</span>
        </router-link>
      <router-link tag="div"  :to="{name:'singer'}" class="tab-item">
          <span class="tab-link">歌手</span></router-link>
      <router-link tag="div" :to="{name:'rank'}"  class="tab-item"> <span class="tab-link">排行</span></router-link>
      <router-link tag="div"  :to="{name:'search'}" class="tab-item"> <span class="tab-link">搜索</span></router-link>
  </div>
</template>

<script>
export default {
  name: "myTab"
};
</script>

<style lang="scss" scoped>
@import "~@/common/scss/mymixin.scss";
@import "~@/common/scss/const.scss";
.myTab {
  height: 44px;
  line-height: 44px;
  display: flex;
  .tab-item {
    flex: 1;
    text-align: center;
    .tab-link{
      color: $color-text-l;
    }
    &.router-link-active {
      .tab-link{
      color: $color-theme;
      border-bottom: 2px solid $color-theme;
      }
     
    }
  }
}
</style>

 