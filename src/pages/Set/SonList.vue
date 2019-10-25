<template>
  <div class="SonList">
    <!-- 头部信息 -->
    <div class="pos">
      <header class="header">
        <img src="../../assets/imgs/zuojiantou.png" alt="">
        <span>子账号管理</span>
      </header>
      <div class="store">
        <span>选择门店</span>
        <span style="color:#999">全部<img src="../../assets/imgs/xiarow.png"></span>
      </div>
      <p class="storeNum">共3个</p>
    </div>
    
    <section> 
      <div class="storeList">
        <div class="storeWork">
          <div class="wrap">
            <div class="storeWorkLeft">张三</div>
            <div class="storeWorkRight">
              <p>子账号:西门子</p>
              <p>子账号:西门子</p>
              <p>子账号:西门子</p>
            </div>
          </div>
          <div class="storeBtn">
            <span>禁用TA</span>
            <span>修改</span>
          </div>
        </div>
      </div>
    </section>
    <!-- 选择的门店定位 -->
    <div class="mendianduo" v-if="false">
      <p class="mendianduos">11111</p>
      <p class="mendianduos">11111</p>
      <p class="mendianduos">11111</p>
      <p class="mendianduos">11111</p>
      <p class="mendianduos">11111</p>
      <p class="mendianduos">11111</p>
      <p class="mendianduos">11111</p>
      <p class="mendianduos">11111</p>
      <p class="mendianduos">11111</p>
      <p class="mendianduos">11111</p>
      <p class="mendianduos">11111</p>
      <p class="mendianduos">11111</p>
      <p class="mendianduos">11111</p>
      <p class="mendianduos">11111</p>
      <p class="mendianduos">11111</p>
      <p class="mendianduos">11111</p>
      <p class="mendianduos">11111</p>
      <p class="mendianduos">11111</p>
      <p class="mendianduos">11111</p>
      <p class="mendianduos">11111</p>
      <p class="mendianduos">11111</p>
      <p class="mendianduos">11111</p>
      <p class="mendianduos">11111</p>
      <p class="mendianduos">11111</p>
      <p class="mendianduos">11111</p>
      <p class="mendianduos">11111</p>
    </div>
    <!-- 底部定位添加子账号 -->
    <div class="addSon">
      <button @click="addSon">添加子账号</button>
    </div>
  </div>
</template>
<script>
import {selectAccountPage} from '../../assets/api/userApi'
export default {
  name: 'SonList',
  data () {
    return {
      poiId:''
    }
  },
  mounted(){
    var data = {
      poiId:this.poiId,
      supplierId:localStorage.getItem('supplierId')
    }
    selectAccountPage(data).then(res=>{
      console.log(res)
    })

  },
  methods: {
    // 跳转到添加子账号的页面
    addSon(){
      this.$router.push('./XiugaiSon')
    }
  }
}
</script>

<style scoped lang="scss">
.SonList{
  width: 100%;
  height: 100%;
  background: #f2f3f7;
  .pos{
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    .header{
      width: 100%;
      height: 1rem;
      background: #fff;
      border-bottom: .01rem solid #ccc;
      position: relative;
      box-sizing: border-box;
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
    .store{
      width: 7rem;
      height: 1rem;
      padding: 0 .3rem 0 .2rem;
      background: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: .3rem;
      position: absolute;
      top: 1rem;
      span>img{
        float: right;
        width: .28rem;
        height: .16rem;
        margin-top: .14rem;
        padding-left: .2rem;
      }
    }
    .storeNum{
      width: 100%;
      height: .8rem;
      font-size: .28rem;
      color: #999;
      background: #f2f3f7;
      line-height: .8rem;
      text-indent:.2rem;
      letter-spacing:.05rem;
      position: absolute;
      top: 2rem;
    }
  }

  // 选择门店
  section{
    .storeList{
      width: 100%;
      padding: 2.8rem 0 1.2rem;
      .storeWork{
        width: 7rem;
        height:2.4rem;
        padding: 0 .3rem 0 .2rem;
        background: #fff;
        border-bottom: 1px solid #f2f3f7;
        .wrap{
          width: 100%;
          height: 1.7rem;
          display: block;
          // background: pink;
          .storeWorkLeft{
            width: .74rem;
            height: .74rem;
            background: #FC7B7C;
            text-align: center;
            line-height: .74rem;
            color: #fff;
            font-size: .24rem;
            border-radius: 50%;
            float: left;
            margin-top:.44rem; 
          }
          .storeWorkRight{
            float: left;
            margin-left: .2rem;
            p:nth-of-type(1){
              font-size: .3rem;
              line-height: .3rem;
              margin: .3rem 0 .18rem 0;
            }
            p:nth-of-type(2),p:nth-of-type(3){
              font-size: .24rem;
              line-height: .34rem;
              color: #999;
            }
          }
        }
        .storeBtn{
          width: 3.2rem;
          float:right;
          height: .55rem;
          span{
            width: 1.44rem;
            height: .55rem;
            display: inline-block;
            box-sizing: border-box;
            border: 1px solid #ed4d4f;
            font-size: .28rem;
            text-align: center;
            line-height: .55rem;
            border-radius: 2px;
          }
          span:nth-of-type(1){
            color: #ED4D4F;
            float: left;
          }
          span:nth-of-type(2){
            float: right;
            border-color: #D2D2D2;
          }
        }
      }
    }
  }
  //底部添加子账号
  .addSon{
    width:100%;
    height:1.2rem;
    background: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 99;
    button{
      width:5.2rem;
      height:.8rem;
      border: none;
      outline: none;
      color: #fff;
      font-size:.32rem;
      background:rgba(230,0,45,1);
      border-radius:3px;
      margin: .2rem auto;
      display: block;
    }
  }
  /* 全部门店 */
  .mendianduo{
    width: 7rem;
    background: #fff;
    z-index: 99999;
    padding: 0 .2rem 2rem .3rem;
    position: fixed;
    top: 0;
    left: 0;
    overflow-y: auto;
    height: 100%;
    margin-top: 2.8rem;
  }
  .mendianduos{
    height: .9rem;
    line-height: .9rem;
    width: 100%;
    border-bottom: 1px solid #f2f3f7;
    font-size: .32rem;
  }
}


</style>
