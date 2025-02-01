<template>
  <div class="main">
    <header>
      <img src="/img/image.jpg">
      <span>Quantum Computing Rankings</span>
    </header>
    <!-- <NuxtRouteAnnouncer /> -->
    <NuxtPage />
    <!-- <NuxtWelcome /> -->
    
    <!-- <el-button type="primary">Hello Element Plus</el-button> -->
  </div>
</template>
<script setup>
</script>

<style lang="less">
body{
 margin: 0;
 header{
  height: 80px;
  line-height: 80px;
  padding: 0 20px;
  border-bottom: 1px solid #c0c0c0;
  img{
    height: 60px;
    margin-top: 10px;
  }
  span{
    height: 80px;
    line-height: 80px;
    vertical-align: top;
    margin-left: 20px;
    font-size: 18px;
    font-weight: bold;
    color: #1e3a8ab3;
  }
 }
}
// 移动端样式
@media screen and (max-width: 768px) {
  body{
    header{
      height: 60px;
      line-height: 60px;
      padding: 0 10px;
      img{
        height: 40px;
        margin-top: 10px;
      }
      span{
        height: 60px;
        line-height: 60px;
        vertical-align: top;
        margin-left: 10px;
        font-size: 14px;
        font-weight: bold;
        color: #1e3a8ab3;
      }
    }
  }
}
</style>