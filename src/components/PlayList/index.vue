<template>
  <div class="playlist">
      <HomeHeader></HomeHeader>
      <div class="wrapper clearfix">
          <MainnerLeft></MainnerLeft>
          <MainnerRight></MainnerRight>
      </div>
  </div>
</template>

<script>
import HomeHeader from '@/base/HomeHeader'
import MainnerLeft from './MainnerLeft'
import MainnerRight from './MainnerRight'
export default {
    name:'playlist',
    components:{MainnerLeft,MainnerRight,HomeHeader},
    
}
</script>

<style lang="scss" scoped>
    .playlist{
        position: relative;
        .header{
            width: 100%;
            height: 5px;
            background-color: #C20C0C;
            position: absolute;
            z-index: 90;
        }  
        .wrapper{
            width: 982px;
            margin: 0 auto;
            min-height: 700px;
            border:1px solid #d3d3d3;
            background-color: #fff;
        }
    }
</style>