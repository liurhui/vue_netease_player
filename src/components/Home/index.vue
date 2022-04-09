<template>
  <div>
    <HomeHeader></HomeHeader> 
    <router-view></router-view> 
  </div>
</template>

<script>
import HomeHeader from '@/base/HomeHeader'
export default {
    name:'home',
    components:{HomeHeader}
}
</script>

<style>

</style>