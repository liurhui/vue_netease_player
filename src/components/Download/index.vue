<template>
  <div class="warp">
    <div class="container">
      <!-- <div class="big-box" :style="{ backgroundImage: url }" ref="bigbox"></div>
            <div class="small-box" @click="selected($event)"> 
              <div class="img"><img src="./images/1.jpg" alt="" /></div>
              <div class="img"><img src="./images/2.jpg" alt="" /></div>
              <div class="img"><img src="./images/3.jpg" alt="" /></div>
              <div class="img"><img src="./images/4.jpg" alt="" /></div>
              <div class="img"><img src="./images/5.jpg" alt="" /></div>
            </div> -->

      <div class="big-box" :style="{ backgroundImage: url }" ref="bigbox"></div>
      <div class="small-box"   > 
          <div class="img" @click="selected(index)"  v-for="(item, index) in imgUrl" :key="index">
            <img :src="item.img" alt="" />
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timer: null,
      imgUrl: [
        { img: new URL("./images/1.jpg", import.meta.url) },
        { img: new URL("./images/2.jpg", import.meta.url) },
        { img: new URL("./images/3.jpg", import.meta.url) },
        { img: new URL("./images/4.jpg", import.meta.url) },
        { img: new URL("./images/5.jpg", import.meta.url) },
      ],
      url: "",
      indexs:0
    };
  },
  methods: {
    selected(index) {
      this.indexs = index;
      this.url = "url(" + require("./images/"+`${this.indexs+1}`+".jpg") + ")";
      // console.log(this.$refs.bigbox.style);
      this.init()
    },
    // 轮播函数
     play(){
       var _that =this;
        this.timer=setInterval(function(){ 
            _that.indexs++;
            _that.url = "url(" + require("./images/"+`${_that.indexs}`+".jpg") + ")";
            if(_that.indexs==5){
                _that.indexs=0;
            }
        },1500)(_that);
    },
    init(){ 
           clearInterval(timer); 
            if(indexs==5){
                this.indexs=0;
            }
            this.play();
        }
  },
  mounted() {
      this.play()
  },
};
</script>

<style  scoped>
.warp {
  /* 100%窗口高度 */
  height: 100vh;
  /* 弹性布局 水平+垂直居中 */
  display: flex;
  justify-content: center;
  align-items: center;
  /* 背景径向渐变 */
  background: radial-gradient(circle at top, #444, #000);
}

.container {
  width: 650px;
  /* 弹性布局 均匀排列每个元素 */
  display: flex;
  /* 每个元素之间的间隔相等 */
  justify-content: space-evenly;
  /* 溢出隐藏 */
  overflow: hidden;
  /* 加个倒影 */
  -webkit-box-reflect: below 13px
    linear-gradient(transparent 70%, rgba(0, 0, 0, 0.2));
}
.big-box {
  width: 400px;
  height: 500px;
  /* 背景图片保持原有尺寸比例，裁切长边 */
  background-size: cover;
  /* background-image: url("./images/1.jpg"); */
  /* 设置过渡 */
  transition: 0.4s;
}
.small-box {
  width: 200px;
  height: 500px;
  /* 弹性布局 垂直排列 均匀排列每个元素 */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.small-box .img {
  /* 相对定位 */
  position: relative;
  width: 200px;
  height: 90px;
  right: 0;
  transition: 0.5s;
}
.small-box .img img {
  width: 100%;
  height: 100%;
  /* 保持原有尺寸比例，裁切长边 */
  object-fit: cover;
  /* 绝对定位 */
  position: absolute;
  right: 0;
  /* 设置过渡 */
  transition: 0.5s;
}
.small-box .img.active {
  opacity: 0;
  right: 250px;
}
.small-box .img:hover img {
  opacity: 0;
  right: 250px;
}
</style>