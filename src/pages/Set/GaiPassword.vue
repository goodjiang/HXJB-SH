<template>
  <div class="GaiPassword">
    <!-- 头部信息 -->
    <header class="header">
      <img src="../../assets/imgs/zuojiantou.png" alt="" @click='go'>
      <span>修改密码</span>
    </header>

    <!-- 信息 -->
    <input class='common' type="password"  placeholder='输入原密码'  >
    <input class='common' type="password"  placeholder='输入新密码'  >
    <input class='common' type="password" placeholder='再次输入新密码' >

    <button>确认</button>
  </div>
</template>
<script>
export default {
  name: 'GaiPassword',
  data () {
    return {
     
    }
  },
  mounted(){
   console.log(1)

  },
  methods: {
    //  返回上一级
    go(){
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped lang="scss">
  .GaiPassword{
    width: 100%;
    height: 100%;
  }
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

  .common{
    width: 90%;
    height: .9rem;
    line-height: .9rem;
    border:none;
    outline: none;
    margin: 0 auto;
    display: block;
    border-bottom: 1px solid #e7e7e7;
    font-size: .3rem;
  }
  button{
    width: 90%;
    height: 1rem;
    background: #e6002d;
    text-align: center;
    border: none;
    outline: none;
    color: #fff;
    font-size: .34rem;
    display: block;
    margin: 4rem auto 0;
  }


</style>
