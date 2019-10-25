<template>
  <div class="GaiPassword">
    <Error-Txt :ErrorTxt="ErrorTxt" v-if='ShowError'></Error-Txt>
    <!-- 头部信息 -->
    <header class="header">
      <img src="../../assets/imgs/zuojiantou.png" alt="" @click='go'>
      <span>修改密码</span>
    </header>

    <!-- 信息 -->
    <input class='common' type="password"  placeholder='输入原密码'  v-model="pwd">
    <input class='common' type="password"  placeholder='输入新密码'  v-model="xinpwd">
    <input class='common' type="password" placeholder='再次输入新密码' v-model="xinspwd">
    <button @click="btn">确认</button>
  </div>
</template>
<script>
import ErrorTxt from '../../components/RedPos.vue'
import {Updatepwd} from '../../assets/api/userApi'
export default {
  components:{
    ErrorTxt
  },
  name: 'GaiPassword',
  data () {
    return {
      pwd:'',
      xinpwd:'',
      xinspwd:'',
      ErrorTxt:'',  //顶部显示的报错信息
      ShowError:false    //报错信息显示
    }
  },
  mounted(){
   
   this.uid = localStorage.getItem('uid')
  },
  methods: {
    //  返回上一级
    go(){
      this.$router.go(-1)
    },
    // 点击确定
    btn(){
      // console.log(this.ShowError)
      var that = this;
      if(this.pwd.length<6){
        this.ShowError = true;
        this.ErrorTxt = '请正确输入原密码，不能少于6位';
        this.timer(that)
      }else if(this.xinpwd.length<6){
        this.ShowError = true;
        this.ErrorTxt = '请正确输入新密码，不能少于6位';
        this.timer()
      }else if(this.xinspwd != this.xinpwd){
        this.ShowError = true;
        this.ErrorTxt = '两次新密码不一致，请重新输入';
        this.timer()
      }else{
        var data = {
          password:this.pwd,
          uid:this.uid,
          zPwd:this.xinpwd
        } 
        Updatepwd(data).then(res=>{
          if(res.infoMap.success == true){
            this.$router.push('../Login')
          }
        })
      }
    },
    // 延时器2s关闭报错弹窗
    timer(that){
      setTimeout(() => {
        console.log(that.ShowError)
        that.ShowError = false
      }, 2000);
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
