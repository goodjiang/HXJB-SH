<template>
  <div class="SvipHexiao">
    <!-- 头部信息 -->
    <div class="header">
      <img src="../assets/imgs/zuojiantou.png" alt="" @click='go'>
      <span>SVIP核销</span>
    </div>
    <!-- 设置 -->
    <div class="wrap">
      <div class="sao">
        <img src="../assets/imgs/saohui.png" alt="" >
        <p>扫码核销</p>
        <!-- hui -->
        <div class='hui'></div>
        <div class='recording'>核销记录</div>
      </div>
      <!-- 记录 -->
      <div class="hexiaoOrder">
        <div class="hexiaoList" >
          <span class="name">名字</span>
          <span class="price">已核销1份</span>
        </div>
        <div class="hexiaoList" >
          <span class="name">名字</span>
          <span class="price">已核销1份</span>
        </div>
        <div class="hexiaoList" >
          <span class="name">名字</span>
          <span class="price">已核销1份</span>
        </div>
        <div class="hexiaoList" >
          <span class="name">名字</span>
          <span class="price">已核销1份</span>
        </div>
        <div class="hexiaoList" >
          <span class="name">名字</span>
          <span class="price">已核销1份</span>
        </div>
        <div class="hexiaoList" >
          <span class="name">名字</span>
          <span class="price">已核销1份</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SvipHexiao',
  data () {
    return {
     
    }
  },
  mounted(){
   
  },
  methods: {
    // 返回上一级
    go(){
      this.$router.push('./List')
    }
  }
}
</script>

<style scoped lang="scss">
.SvipHexiao{
  width: 100%;
  height: 100%;
  .header{
    width: 100%;
    height: 1rem;
    position: fixed;
    top:0;
    z-index: 9;
    border-bottom: 1px solid #ccc;
    img{
      width: .2rem;
      height: .35rem;
      position: absolute;
      left: .2rem;
      top: .36rem;
    }
    span{
      line-height: 1rem;
      font-size: .37rem;
      // font-weight: bold;
      float: left;
      width: 100%;
      text-align: center;
    }
  }  
  .wrap{
    // width: 100%;
    // height: 5.75rem;
    // background: #fff;
    .sao{
      position: fixed;
      top: 1rem;
      z-index: 9;
      width: 100%;
      height: 7.4rem;
      background: #fff;
      img{
        width: 2.65rem;
        height: 2.65rem;
        margin: 1.33rem auto 0;
      }
      p{
        width:2.1rem;
        height: 0.6rem;
        margin: 0.6rem auto 1rem;
        box-sizing: border-box;
        border:1px solid #E6002D;
        color: #E6002D;
        text-align: center;
        line-height: 0.6rem;
        font-size: .32rem;
      }
      .hui{
        width: 100%;
        height: .3rem;
        background: #F5F5F5;
      }
      .recording{
        width: 100%;
        height: 1.24rem;
        text-indent: 0.3rem;
        line-height: 1rem;
        font-size:.36rem;
      }
    }
    .hexiaoOrder{
      width: 6.9rem;
      padding-top: 8.3rem;
      margin: 0 auto;
      .hexiaoList{
        width: 100%;
        height: 1rem;
        background: #F5F5F5;
        border-radius: 0.05rem;
        margin: 0.15rem 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .name{
          font-size: 0.3rem;
          padding-left: 0.33rem;
        }
        .price{
          font-size: 0.3rem;
          padding-right: 0.16rem;
        }
      }
    }
  }
}
</style>