<template>
  <div class="XiugaiSon">
    <!-- 头部信息 -->
    <Error-Txt :ErrorTxt="ErrorTxt" v-if="ShowError"></Error-Txt>
    <header class="header">
      <img src="../../assets/imgs/zuojiantou.png" alt="" @click="go">
      <span>{{title}}</span>
    </header>
    <section>
      <div class="sections">
      <!-- 账号信息 -->        
        <div class="mendian">
          <span class="mendianTxt">请选择门店</span>
          <div @click="ClickMendian">
            <span class="poiName" style="float:left" >{{poiName}}</span>
            <img src="../../assets/imgs/xiarow1.png" alt="">
          </div>
        </div>
        <div class="shopSon">
          <span class="mendianTxt">子账号名称</span>
          <input type="text" class="input" placeholder='请输入子账号名称' ref='account'>
        </div>
        <div class="shopSon">
          <span class="mendianTxt">设置密码</span>
          <input type="password" class="input" placeholder='请输入密码' ref='pwd'>
        </div>
        <div class="shopSon">
          <span class="mendianTxt">业务员姓名</span>
          <input type="text" class="input" placeholder='请输入业务员姓名(非必填)' ref='realName' >
        </div>
      </div>
      <!-- 灰色页面 -->
      <p style="width:100%;height:.25rem;background:#f2f3f7"></p>
      <!-- 权限配置 -->
      <div class="quanxian">
        <p style="width:100%;height:1.1rem;font-size:.3rem;line-height:1.1rem;text-indent:.3rem;border-bottom:1px solid #E5E5E5;">权限配置</p>
        <div class="quanxian1" v-for="(item,i) in list" :key='i'>
          <span>{{item.quanxian}}</span>
          <input type="checkbox" v-model="item.checked">
        </div>
      </div>
      <p style="font-size:.24rem;color:#999;padding:.32rem 0 0 .3rem;">其他高级权限请在PC端商户中心完成设置<br>shanghu.51jiabo.com</p>
      <div class="baocunBtn" @click="baocun">保存</div>
    </section>
    <!-- 全部门店 -->
    <div class="pos" v-if='showMendian'>
      <div class='mendainName' v-for="(item,i) in shopListAll" :key='i' @click='ClickShop(i)'>
        <span >{{item.shopName}}</span>
        <img src="../../assets/imgs/duigou.png" alt="" v-if='item.shopId == shopId'>
      </div>
    </div>
    
  </div>
</template>


<script>
import {queryBoyAccountDetail,saveBoyAccount,selectAccountPage} from '../../assets/api/userApi.js'
import ErrorTxt from '../../components/RedPos.vue'
import axios from 'axios';

export default {
  name: 'XiugaiSon',
  components:{
    ErrorTxt
  },
  data () {
    return {
     title:'',
     shopId:'',  //门店id
     shopListAll:[{ shopName:'全部',shopId:''}],    //所有门店的集合
     poiName:'无门店',  //门店的名字
     showMendian:false,
     id:'',
     pricList:'',
     list:[
      { 'quanxian': '创建订单', privLists: 1, checked:true},
      { 'quanxian': '修改密码', privLists: 11, checked: true},
      { 'quanxian': '管理订单', privLists: 14, checked: true}
     ],
     ErrorTxt:'',  //顶部显示的报错信息
     ShowError:false,    //报错信息显示
     realName:'',       //业务员姓名
    }
  },
  mounted(){
    this.id = this.$route.query.id
    if(this.id){
      this.title = '修改子账号'
    // 把全部的门店显示出来
      var data = {
        id:this.id
      }
      queryBoyAccountDetail(data).then(res=>{
        if(res.infoMap.success == true){
          console.log(res)
          this.poiName = res.infoMap.poiName
          this.shopId = res.infoMap.poiId
          this.$refs.realName.value = res.infoMap.wholeName
          this.$refs.account.value = res.infoMap.account
          this.$refs.pwd.value = '@qa7eaeraa'
          this.pricList = res.infoMap.privList
          var list = [];
          this.list.forEach(item =>{
            if(this.pricList.findIndex((i)=>(i == item.privLists))>=0){
              var obj = item;
              list.push(item)
            }else{
              list.push(item)
              item.checked = false
            }
          })
        }else{
          this.util.showAlertPublic(res.infoMap.reason)
        }
      })
    }else{
      this.title = '添加子账号'
      this.privLsit = [1,11,14]
    }
    // 子账号管理分页
    var data = {
      supplierId:localStorage.getItem('supplierId')
    }
    selectAccountPage(data).then(res=>{
      if(res.infoMap.success == true){
        res.infoMap.shopListAll.forEach(item=>{
           this.shopListAll.push(item)
        })
      }else{
        this.util.showAlertPublic(res.infoMap.reason)
      }
    })


  },
  methods: {
    // 跳转到上一级
   go(){
     this.$router.go(-1)
    },
  //  点击选择门店出来门店列表
    ClickMendian(){
      this.showMendian = true
    },
  // 点击保存按钮
    baocun(){
      var arr = []
      if(this.id){
        var data = {
          account:this.$refs.account.value,
          poiId: this.shopId,    //门店id
          privList: this.pricList,
          pwd: this.$refs.pwd.value,
          realName: this.$refs.realName.value,
          supplierId: Number(localStorage.getItem('supplierId')),
          id:Number(this.id)
        }
        this.BaoCun(data)
      }
    },  
    // 点击门店复制到选择门店上面
    ClickShop(i){
      this.shopId = this.shopListAll[i].shopId
      this.poiName = this.shopListAll[i].shopName
      this.showMendian = false
    },
// ------------------------------------------------------------

  // 保存通用事件
    BaoCun(data){
      var that = this;
      if(!this.$refs.account.value){
        this.ErrorTxt = '请输入子账号名称'
        this.ShowError = true;
        this.timer(that)
      }else if(!this.$refs.pwd.value){
        this.ErrorTxt = '请正确输入新密码，不能少于6位'
        this.ShowError = true;
        this.timer(that)
      }else if(!this.$refs.realName.value){
        this.ErrorTxt = '请输入业务员的姓名'
        this.ShowError = true;
        this.timer(that)
      }else{
        console.log(data)
        saveBoyAccount(data).then(res=>{
          console.log(res)
        })
        // var data = JSON.stringify(data)
        // axios({
        //   method:'post',
        //   url:'http://192.168.1.112:8081/supp/accountManage/saveBoyAccount',
        //   data:data,
        //   headers:{
        //     "token":localStorage.getItem('token')
        //   }
        // }).then(res=>{
        //   console.log(res.data)
        // })
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
        // justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        border-bottom: 1px solid #f3f2f7;
        margin: 0 .2rem 0 .3rem;
        font-size: .3rem;
        div{
          float: left;
          display: block;
          height: 1rem;
          line-height: 1rem;
        }
        .poiName{
          float: left;
          width: 4.32rem;
          display: block;
        }
        div img{
          float: left;
          width: .2rem;
          height: .1rem;
          margin: .49rem .04rem 0 .3rem;
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
