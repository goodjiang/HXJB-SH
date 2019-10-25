<template>
  <div class="XiugaiSon">
    <!-- 头部信息 -->
    <header class="header">
      <img src="../../assets/imgs/zuojiantou.png" alt="" @click="go">
      <span>添加子账号</span>
    </header>
    <section>
      <div class="sections">
      <!-- 账号信息 -->        
        <div class="mendian">
          <span class="mendianTxt">请选择门店</span>
          <div>
            <input type="text" class="input">
            <img src="../../assets/imgs/xiarow1.png" alt="">
          </div>
        </div>
        <div class="shopSon">
          <span class="mendianTxt">子账号名称</span>
          <input type="text" class="input" placeholder='请输入子账号名称'>
        </div>
        <div class="shopSon">
          <span class="mendianTxt">设置密码</span>
          <input type="text" class="input" placeholder='请输入密码'>
        </div>
        <div class="shopSon">
          <span class="mendianTxt">业务员姓名</span>
          <input type="text" class="input" placeholder='请输入业务员姓名(非必填)'>
        </div>
      </div>
      <!-- 灰色页面 -->
      <p style="width:100%;height:.25rem;background:#f2f3f7"></p>
      <!-- 权限配置 -->
      <div class="quanxian">
        <p style="width:100%;height:1.1rem;font-size:.3rem;line-height:1.1rem;text-indent:.3rem;border-bottom:1px solid #E5E5E5;">权限配置</p>
        <div class="quanxian1">
          <span>创建订单</span>
          <input type="checkbox" >
        </div>
        <div class="quanxian1">
          <span>修改密码</span>
          <input type="checkbox" >
        </div>
        <div class="quanxian1">
          <span>管理订单</span>
          <input type="checkbox" >
        </div>
      </div>
      <p style="font-size:.24rem;color:#999;padding:.32rem 0 0 .3rem;">其他高级权限请在PC端商户中心完成设置<br>shanghu.51jiabo.com</p>
      <div class="baocunBtn">保存</div>
    </section>
    <!-- 全部门店 -->
    <div class="pos" v-if='showMendian'>
      <div class='mendainName'>
        <span>我的门店</span>
        <img src="../../assets/imgs/duigou.png" alt="">
      </div>
    </div>
    
  </div>
</template>
<script>
export default {
  name: 'XiugaiSon',
  data () {
    return {
     showMendian:false
    }
  },
  mounted(){

  },
  methods: {
    // 跳转到上一级
   go(){
     this.$router.go(-1)
   }
  }
}
</script>

<style scoped lang="scss">
.XiugaiSon{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  // 头部信息
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
  // 下面的内容
  section{
    width: 100%;
    flex: 1;
    .sections{
      .mendianTxt{
        width: 1.88rem;
      }
      .input{
        float: left;
        width: 4.7rem;
        height: .8rem;
        box-sizing: border-box;
        border: none;
        outline: none;
        font-size: .3rem;
      }
      .mendian{
        width: 7rem;
        height: 1rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        border-bottom: 1px solid #f3f2f7;
        margin: 0 .2rem 0 .3rem;
        font-size: .3rem;
        div img{
          float: left;
          width: .2rem;
          height: .1rem;
          margin: .49rem .04rem 0 .1rem;
        }
      }
      .shopSon{
        width: 7rem;
        height: 1rem;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        border-bottom: 1px solid #f3f2f7;
        margin: 0 .2rem 0 .3rem;
        font-size: .3rem; 
      }
    }
    .quanxian{
      .quanxian1{
        width: 7rem;
        height: 1rem;
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        align-items: center;
        box-sizing: border-box;
        border-bottom: 1px solid #E5E5E5;
        span{
          font-size: .3rem;
        }
        input{
          width: 15px;
          height: 15px;
          appearance:none;
          -webkit-appearance: none;
          outline: none;
          border:1px solid #ccc;
          z-index: 99;
        }
        input[type=checkbox]:checked{
          width: 15px;
          height: 15px;
          border: none;
          background: url('../../assets/imgs/xuanzhong.png') no-repeat;
          background-size: cover;
        }
      }
    }    
    .baocunBtn{
      width: 5.2rem;
      height: .8rem;
      background: #e6002d;
      font-size: .32rem;
      color: #fff;
      text-align: center;
      line-height:.8rem;
      position: fixed;
      bottom: .3rem;
      left: 1.15rem;
    }
  }
  .pos{
    width: 7rem;
    height: 100%;
    position: fixed;
    top:0;
    background: #fff;
    z-index: 99;
    padding: 0 .2rem 2rem .3rem;
    margin-top: 2.01rem;
    .mendainName{
      // background: pink;
      display: flex;
      height: .8rem;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      span{
        font-size: .3rem;
      }
      img{
        width: .4rem;
        height: .3rem;
        padding-right: .1rem;
      }
    }
  }
}

</style>
