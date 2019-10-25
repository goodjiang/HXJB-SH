<template>
  <div class="Set">
    <!-- 头部信息 -->
    <header class="header">
      <img src="../../assets/imgs/zuojiantou.png" alt="" @click='go'>
      <span>设置</span>
    </header>
    <!-- xinxi -->
    <section>
      <div >
        <span>账号管理</span>
        <span class="account">{{account}}</span>
      </div>
      <div @click="gaiPassword">
        <span>修改密码</span>
        <img src="../../assets/imgs/xiaoyoujiantou.png" alt="" >
      </div>
      <div @click="SonList">
        <span>子账号管理</span>
        <img src="../../assets/imgs/xiaoyoujiantou.png" alt="">        
      </div>
      <p class="BtnTuichu" @click="BtnTuichu">退出登录</p>
    </section>
  </div>
</template>
<script>
export default {
  name: 'Set',
  data () {
    return {
      account:''
    }   
  },
  mounted(){
    this.account = localStorage.getItem('account')
    

  },
  methods: {
    // 返回上一级
    go(){
      this.$router.go(-1)
    },
    // 跳转到修改密码页面
    gaiPassword(){
      this.$router.push('./GaiPassword')
    },
    // 跳转到子账号管理页面
    SonList(){
      this.$router.push('./SonList')
    },
    // 退出登录
    BtnTuichu(){
      console.log(111)
    }
  }
}
</script>

<style scoped lang="scss">
.Set{
  width: 100%;
  height: 100%;
  overflow: hidden;
  .header{
    width: 100%;
    height: 1rem;
    border-bottom: .01rem solid #ccc;
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
      float: left;
      width: 100%;
      text-align: center;
    }
  }
  section{
    div{
      margin: 0 auto;
      width: 6.9rem;
      height: 1rem;
      padding: 0 .1rem;
      border-bottom: 1px solid #e5e5e5;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      font-size: .32rem;
      .account{
        color: #777;
      }
      img{
        width: .16rem;
        height: .25rem;
      }
    }
    .BtnTuichu{
      width: 6.70rem;
      height: 1rem;
      background: #e6002d;
      font-size: .3rem;
      color: #fff;
      text-align: center;
      line-height: 1rem;
      border-radius: 3rpx;
      position: absolute;
      bottom: 3rem;
      left: .4rem;
    }
  }
}
  


</style>
