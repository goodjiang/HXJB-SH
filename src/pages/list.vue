<template>
  <div class="List">
    <!-- 头部信息 -->
    <div class="header">
      <img src="../assets/imgs/zuojiantou.png" alt="">
      <span>展商开单</span>
    </div>
    <!-- 设置 -->
    <div class="wrap">
      <div class="set" @click="setting">
        <img src="../assets/imgs/set.png" alt="">
        <span>设置</span>
      </div>
      <p class="name">hi,{{account}}</p>
      <p class="common btn1" v-if="showList">直接开单（无需上货）<img src="../assets/imgs/rightRow.png" alt=""></p>
      <p class="common btn2" v-if="showOrder">订单管理<img src="../assets/imgs/rightRow.png" alt=""></p>
      <p class="common btn3" v-if="showGuke">顾客管理<img src="../assets/imgs/rightRow.png" alt=""></p>
      <p class="common btn4" v-if="cancelPriv">SVIP核销<img src="../assets/imgs/rightRow.png" alt=""></p>
      <img src="../assets/imgs/logo.png" class="logo" alt="">
    </div>
  </div>
</template>
<script>
export default {
  name: 'List',
  data () {
    return {
      showList:false,
      showOrder:false,
      showGuke:false,
      cancelPriv:false,
      account:'',          //进入页面的名字
    }
  },
  mounted(){
    this.account = localStorage.getItem('account')
    this.showList = localStorage.getItem('accountPriv')
    this.showOrder = localStorage.getItem('orderPriv')
    this.cancelPriv = localStorage.getItem('cancelPriv')

  },
  methods: {
    setting(){
      this.$router.push('./Set/Set')
    }
  }
}
</script>

<style scoped lang="scss">
  .List{
    height: 100%;
    width: 100%;
    overflow: hidden;
    .header{
      width: 100%;
      height: 1rem;
      position: relative;
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
      width: 100%;
      height: 100%;
      .set{
        width: 1.6rem;
        height: .3rem;
        position: absolute;
        right: 0;
        top: 1.5rem;
        img{
          width: .31rem;
          height: .28rem;
          float: left;
          padding-top: .03rem;
        }
        span{
          text-indent: .1rem;
          float: left;
          font-size: .32rem;
          line-height: .32rem;
        }
      }
      .name{
        font-size:.43rem ;
        text-align: center;
        margin-top: 1.8rem;
      }
      .common{
        width: 6.3rem;
        height: 1.2rem;
        font-size: .36rem;
        text-align: center;
        line-height: 1.2rem;
        background: pink;
        margin: .75rem auto 0;
        position: relative;
        color: #fff;
        img{
          width: .2rem;
          height: .36rem;
          position: absolute;
          top: .42rem;
          right:.28rem;
          display: inline-block;
        }
      }
      .btn1{
        background: #E6002D
      }
      .btn2{
        background: #FA9909
      }
      .btn3{
        background: #018EFD
      }
      .btn4{
        background: #02C3BE
      }
      .logo{
        width: 1.67rem;
        height: .52rem;
        bottom: .97rem;
        left: 2.9rem;
        position: absolute;
      }
    }
  }


</style>
