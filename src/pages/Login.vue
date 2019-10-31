<template>
  <div class="Login">
    <div class="header">展商开单</div>
    <div class="wrap">
      <div class="top">
        <img class="logos" src="../assets/imgs/logos.png" alt="">
        <div class="topTxt">
          <p>欢迎使用</p>
          <p>展会现场开单(商户)</p>
        </div>
        <img class="logo-white" src="../assets/imgs/logo-white.png" alt="">
      </div>
      <img class="shadow1" src="../assets/imgs/shadow2.png" alt="">
      <img class="shadow2" src="../assets/imgs/shadow1.png" alt="">
      <div class="Logins">
        <input type="text" class="username common" placeholder="请输账号" v-model="username">
        <input type="password" class="password common" placeholder="请输入密码" v-model="password">
        <div class="loginBtn" @click="LoginBtn()">点击进入</div>
      </div>
    </div>
  </div>
</template>
<script>
import { Login } from '../assets/api/userApi.js'
export default {
  name: 'Login',
  data () {
    return {
     username:'',
     password:''
    }
  },
  created(){
    if(localStorage.getItem('token')){
      this.$router.push('./List')
    }
  },
  methods: {
    LoginBtn(){
      var params = {
        'account':this.username,
        'password': this.password
      }
      Login(params).then(res=>{
        // console.log(res)

        localStorage.clear()
        if(res.infoMap.success == true){
          localStorage.setItem('token', res.infoMap.accountInfo.token )
          localStorage.setItem('cityId', res.infoMap.accountInfo.cityId)
          localStorage.setItem('supplierId', res.infoMap.accountInfo.supplierId)
          localStorage.setItem('uid', res.infoMap.accountInfo.uid)
          localStorage.setItem('accountType', res.infoMap.accountInfo.accountType)
          localStorage.setItem('accountPriv', res.infoMap.accountInfo.accountPriv)
          localStorage.setItem('account', res.infoMap.accountInfo.account)
          localStorage.setItem('supplierName', res.infoMap.accountInfo.supplierName)
          localStorage.setItem('realName', res.infoMap.accountInfo.realName)
          localStorage.setItem('boyAccountManage', res.infoMap.accountInfo.boyAccountManage)
          localStorage.setItem('orderPriv', res.infoMap.accountInfo.orderPriv)
          localStorage.setItem('cancelPriv', res.infoMap.accountInfo.cancelPriv)
          localStorage.setItem('updatePriv', res.infoMap.accountInfo.updatePriv)
          this.$router.push('./List')
        }else{
          this.util.showAlertPublic(res.infoMap.reason)
        }
      })
      .catch(err=>{
          
      })
    }
  }
}
</script>

<style scoped lang="scss">
body{
  height: 100%;
}
.Login{
  display: flex;
  flex-direction: column;
  height: 100%;
  .header{
    height: 1rem;
    width: 100%;
    background: #E6002D;
    text-align: center;
    line-height: 1rem;
    color: #fff;
    font-size: .38rem;
  }
  .wrap{
    flex: 1;
    position: relative;
    background: #F7F3F3;
    .logos{
      position: absolute;
      width: 6.84rem;
      margin: 2rem auto 0;
      z-index: 2;
    }
    .topTxt{
      float: left;
      z-index: 2;
      position: absolute;
      &>p:nth-child(1){
        font-size: .65rem;
        line-height: .65rem;
        color: #fff;
        font-weight: 800;
        padding: .45rem 0 .26rem .47rem;
        z-index: 2;
      }
      &>p:nth-child(2){
        line-height:.4rem;
        font-size: .4rem;
        color: #fff;
        padding-left: .47rem;
        z-index: 2;
      }
    }
    .logo-white{
      position: absolute;
      z-index: 2;
      right: 0;
      width: 1.49rem;
      height: .5rem;
      padding: .43rem .5rem 0 0;
    }
    .shadow1{
      width: 100%;
      height: 5.9rem;
      position: absolute;
      top: 0;
      z-index:1;
    }
    .shadow2{
      width: 100%;
      height: 1.22rem;
      position: absolute;
      top: 5.90rem;
      z-index:1;
    }
    .Logins{
      width: 7.1rem;
      height: 5.4rem;
      background: #fff;
      border-radius: .15rem;
      position: absolute;
      top: 5.74rem;
      left: .2rem;
      z-index: 999;
      .common{
        width: 6.3rem;
        height: 1rem;
        display: block;
        margin: 0 auto;
        background: #EFEFF1;
        font-size: .36rem;
        border: none;
        outline: none;
        border-radius: .05rem;
        color: #999;
        text-indent: .2rem;
      }
      .username{
        margin-top: .65rem;
      }
      .password{
        margin-top: .4rem;
      }
      .loginBtn{
        width: 6.3rem;
        height: 1rem;
        background: #E6002D;
        text-align: center;
        line-height: 1rem;
        color: #fff;
        font-size: .36rem;
        margin: .46rem auto 0;
      }
    }
  }
}

</style>
