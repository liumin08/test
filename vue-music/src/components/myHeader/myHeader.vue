<template>
  <div class="myHeader">
   <div class="icon"></div>
    <div class="text">Chicken Music</div>
  </div>
</template>

<script>
export default {
  name: "App"

  
};
</script>

<style lang="scss" scoped>
@import "~@/common/scss/mymixin.scss";
@import "~@/common/scss/const.scss";
    .myHeader{
      position: relative;
      text-align: center;
      .icon{
        display:inline-block;
        @include bg-image("logo");
        height:32px;
        width:30px;
        background-size: 30px 32px;
        vertical-align: middle;
      }
      .text{
        display:inline-block;
        font-weight:700;
        color:$color-theme;
      }
    }
</style>

 