<template>
  <div class="SonList">
    <!-- 头部信息 -->
    <div class="pos">
      <header class="header">
        <img src="../../assets/imgs/zuojiantou.png" alt="" @click='go'>
        <span>子账号管理</span>
      </header>
      <div class="store">
        <span>{{mendianName}}</span>
        <span style="color:#999" @click='ClickMendian'>全部<img src="../../assets/imgs/xiarow.png"></span>
      </div>
      <p class="storeNum">共3个</p>
    </div>
    
    <section> 
      <div class="storeList">
        <div class="storeWork" v-for="(item,i) in resultList" :key='i'>
          <div class="wrap">
            <div class="storeWorkLeft">{{item.realName}}</div>
            <div class="storeWorkRight">
              <p>子账号:{{item.account}}</p>
              <p>门店：{{item.poiName}}</p>
              <p>最后登录时间：{{item.lastLoginTime}}</p>
            </div>
          </div>
          <div class="storeBtn">
            <span @click="jinyong(i)" :class="[item.delFlag == 1?'jinyong':'qiyong']">{{item.delFlag ? '禁用TA' : '启用TA'}}</span>
            <span @click='xiugai(i)'>修改</span>
          </div>
        </div>
      </div>
    </section>
    <!-- 选择的门店定位 -->
    <div class="mendianduo" v-if='ShowMendian'> 
      <p class="mendianduos" v-for="(item,i) in shopListAll" :key='i' @click='ClickShop(i)'>{{item.shopName}}</p>
    </div>
    <!-- 底部定位添加子账号 -->
    <div class="addSon">
      <button @click="addSon">添加子账号</button>
    </div>
  </div>
</template>
<script>
import {selectAccountPage,deleteBoyAccount} from '../../assets/api/userApi'
export default {
  name: 'SonList',
  data () {
    return {
      ShowMendian:false,
      mendianName:'选择门店',   //选择门店的内容
      poiId:'',
      shopListAll:'',  //门店的列表
      resultList:'',  //业务员
      
    }
  },
  mounted(){
    this.Sons()

  },
  methods: {
    // 跳转到上一级
    go(){
      this.$router.push('../Set/Set')
    },
    // 跳转到添加子账号的页面
    addSon(){
      this.$router.push('./XiugaiSon')
    },
    // 点击显示门店
    ClickMendian(){
      this.ShowMendian = true
    },
    // 点击门店到门店上面
    ClickShop(i){
      this.ShowMendian = false
      this.mendianName = this.shopListAll[i].shopName
    },
    // 禁用/启用
    jinyong(i){
      var data = {
        delFlag: this.resultList[i].delFlag,
        id: this.resultList[i].id
      }
      deleteBoyAccount(data).then(res=>{
        if(res.infoMap.success == true){
          // console.log(res,'res')
          this.Sons()
        }else{
          this.util.showAlertPublic(res.infoMap.reason)
        }
      })
    },
    // 修改
    xiugai(i){
      var id = this.resultList[i].id
      this.$router.push({path:'./XiugaiSon',query:{id:id}})
    },
    //列表刷新的接口
    Sons(){
      var data = {
        poiId:this.poiId,
        supplierId:localStorage.getItem('supplierId')
      }
      selectAccountPage(data).then(res=>{
        // console.log(res)
        if(res.infoMap.success==true){
          this.shopListAll = res.infoMap.shopListAll,
          this.resultList = res.resultList
        }
      })
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
          .jinyong{
            color: #ED4D4F;
            border: 1px solid #ed4d4f;
            float: left;

          }
          .qiyong{
            color: #2FB768;
            border: 1px solid #2FB768;
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
    margin-top: 2.02rem;
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
