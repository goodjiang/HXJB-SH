<template>
  <div class="Billing">
     <!-- 头部信息 -->
    <div class="header">
      <img src="../../assets/imgs/zuojiantou.png" alt="" @click='go'>
      <span>展商开单</span>
    </div>
    <!-- 内容 -->
    <div class="wrap">
      <!-- 商品信息 -->
      <div class="ShopXinxi">
        <div class="ShopTop">
          <span>商品信息</span>
          <span>清空</span>
        </div>
        <div class="shopNum">
          <div class="shopH">
            <div class="shopImg">
              <img src="../../assets/imgs/addimg.png" alt="">
            </div>
            <div class="shopRight">
              <p>我是商品名称商品名称商商品名称名称商品</p>
              <p>
                <span>￥2590</span>
                <span>
                  <img src="../../assets/imgs/jian.png" alt="">
                  <span>13</span>
                  <img src="../../assets/imgs/jia.png" alt="">
                </span>
              </p>
            </div>           
          </div>
          <p class="supplement">补充说明：我是这个商品的补充说明XXXX如果没有就隐藏</p>
          <p class="shopBtn">
            <span>编辑</span>
            <span>删除</span>
          </p>
        </div>
        <button class="addShop">添加商品</button>
      </div>
      <p class="hui" style="width:100%;height:.3rem;background:#e1e1e1;"></p>
      <!-- 订单信息 -->
      <div class="OrderXinxi">
        <p class="OrderTxt">订单信息</p>
        <div class="common">
          <span>总价</span>
          <span>
            <input type="text" placeholder="请输入总价" style="text-indent:.2rem">
            <div class="Orderimgs">
              <img src="../../assets/imgs/fork1.png" alt="">
            </div>
          </span>
        </div>
        <div class="common">
          <span>购买方式</span>
          <span class="radioSpan">
            <div class="radio-box" v-for="(item,index) in radios" :key="item.id">
              <input v-model="radio" :value="item.value" class="input-radio" :checked='item.isChecked'  @click="check(index)" type="radio">
              <span>{{item.label}}</span>
            </div>
          </span>
        </div>
        <div class="common">
          <span>定金</span>
          <span>
            <input type="text" placeholder="请输入金额" style="text-indent:.2rem">
          </span>
        </div>
        <div class="common">
          <span>现金抽奖</span>
          <span class="radioSpan" style="display:flex">
            <input type="checkbox" class="checkbox" v-model="checked">
            <span class="checkTxt">不参加现金抽奖（含特价商品等原因）</span>
          </span>
        </div>
        <div class="common">
          <span>购买方式</span>
          <span class="radioSpan">
            <div class="radio-box" v-for="(item,index) in radioss" :key="item.id" style="width:2.5rem"> 
              <input v-model="radio" :value="item.value" class="input-radio" :checked='item.isChecked'  @click="check(index)" type="radio">
              <span>{{item.label}}</span>
            </div>
          </span>
        </div>
        <div class="beizhu">
          <p>备注</p>
          <textarea  cols="30" rows="10" placeholder="定制品总价供参考，按实际尺寸计价" ></textarea>
        </div>
        <div class="common" style="padding-bottom:3rem">
          <span>业务员</span>
          <span style="font-size:.3rem;color:#777;line-height:.8rem;">张xx</span>
        </div>
      </div> 
    </div>
     <!--底部定位  -->
    <div class="pos">
      <div class="posLeft">
        <span>应付￥</span>
        <span>10299.00</span>
      </div>
      <div class="posRight">
        提交
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Billing',
  data () {
    return {
        radio:'1',
        checked:true,
        radios:[
          {
            label:'支付全款',
            value:'1',
            isChecked:true
          },
          {
            label:'支付定金',
            value:'2',
            isChecked:false
          }
        ],
        radioss:[
          {
            label:'送货到家',
            value:'1',
            isChecked:true
          },
          {
            label:'送货到楼下',
            value:'2',
            isChecked:false
          },
          {
            label:'消费者自提',
            value:'3',
            isChecked:false
          },
          {
            label:'快递',
            value:'4',
            isChecked:false
          },
          {
            label:'其他',
            value:'5',
            isChecked:false
          }
        ]
    }
  },
  methods: {
    // 点击箭头返回到list页面
    go(){
      this.$router.push('../List.vue')
    },
    // 购买方式----------------------------------------------
    check(index) {
      // 先取消所有选中项
      this.radios.forEach((item) => {
        item.isChecked = false;
      });
      //再设置当前点击项选中
      this.radio = this.radios[index].value;
      // 设置值，以供传递
      this.radios[index].isChecked = true;
    }
  }
}  
</script>
<style scoped lang="scss">
.Billing{
  width: 100%;
  height: 100%;
  // 头部标题
  .header{
    width: 100%;
    height: 1rem;
    position: fixed;
    top:0;
    z-index: 9;
    background: #fff;
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
  // 下面的内容
  .wrap{
    width: 100%;
    padding-top: 1rem;
    .ShopXinxi{
      width: 7rem;
      overflow: hidden;
      padding: 0 .2rem 0 .3rem;
      background: #fff;
      .ShopTop{
        width: 100%;
        height: 1.36rem;
        display: flex;
        justify-content: space-between;
        span:nth-of-type(1){
          font-size: .46rem;
          font-weight: 500;
          line-height: 1.36rem;
        }
        span:nth-of-type(2){
          font-size: .32rem;
          color: #1D85DC;
          padding-top: .54rem;
        }
      }
      // 商品的信息
      .shopNum{
        width: 100%;
        .shopH{
          border-top: 1px solid #E6E6E6;
          padding-top: .57rem;
          height: 1.5rem;
          display: flex;
          .shopImg{
            box-sizing: border-box;
            border: 0.01rem solid #EEEEEE;
            width: 1.5rem;
            height: 1.5rem;
            float: left;
            img{
              width: 1.5rem;
              height: 1.5rem;
            }
          }
          .shopRight{
            float: left;
            padding-left: .44rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            p:nth-of-type(1){
              font-size: .32rem;
              display: inline-block;
            }
            p:nth-of-type(2){
              display: flex;
              justify-content: space-between;
              span:nth-of-type(1){
                font-size: .32rem;
                color: #777;
              }
              span:nth-of-type(2){
                padding-right: .2rem;
                display: flex;
                img:nth-of-type(1){
                  width: .45rem;
                  height: .45rem;
                }
                span{
                  padding: 0 .1rem;
                }
                img:nth-of-type(2){
                  width: .45rem;
                  height: .45rem;
                }

              }
            }
          }
        } 
        .supplement{
          font-size: .24rem;
          color: #999;
          margin: .34rem 0 .6rem 0;
        }
        .shopBtn{
          width: 3.3rem;
          // float: right;
          padding-left: 3.6rem;
          padding-bottom: .6rem;
          height: .55rem;
          display: flex;
          justify-content: space-between;
          span{
            box-sizing: border-box;
            font-size: .3rem;
            border: 0.01rem solid #D2D2D2;
            width: 1.44rem;
            display: inline-block;
            height: .55rem;
            line-height: .55rem;
            text-align: center;
            
          }
        }
      }
      .addShop{
        float:right;
        width: 2.4rem;
        height: .8rem;
        background: #e6002d;
        color: #fff;
        text-align: center;
        line-height: .8rem;
        border: none;
        outline: none;
        border-radius: .03rem;
        margin-bottom: .5rem;
      }  
    }
    // 订单信息
    .OrderXinxi{
      width: 7rem;
      padding: 0 .2rem 0 .3rem;
      background: #fff;
      overflow: hidden;
      .OrderTxt{
        display: block;
        font-size: .46rem;
        height: 1.4rem;
        line-height: 1.4rem;
        font-weight: 900;
      }
      .common{
        width: 100%;
        min-height:.8rem ;
        display: flex;
        justify-content: space-between;
        margin-bottom: .5rem;
        // overflow: hidden;
        span:nth-of-type(1){
          font-size: .3rem;
          line-height: .8rem;
        }
        span:nth-of-type(2){
          width: 5rem;
          min-height: .8rem;
          background: #EFEFF1;
          input{
            width: 4.4rem;
            height: .8rem;
            border: none;
            outline: none;
            float: left;
            background: #EFEFF1;
          }
          .Orderimgs{
            width: .3rem;
            height: .3rem;
            background: #A0A1A7;
            float: left;
            margin: .25rem 0 0 0;
            border-radius: 50%;
            img{
              width: .18rem;
              height: .18rem;
              margin: .06rem auto;
            }
          }
        }
        .radioSpan{
          background: pink !important;
          // display: flex;
          .checkbox{
            width: .38rem;
            height: .38rem;
            box-sizing: border-box;
            appearance:none;
            -webkit-appearance: none;
            outline: none;
            border:1px solid #ccc;
            background: #fff;
            margin-top:.2rem; 
            margin-right: .3rem;
          }
          input[type=checkbox]:checked{
            width: .38rem;
            float: left;
            height: .38rem;
            border: none;
            background: url('../../assets/imgs/xuanzhong.png') no-repeat;
            background-size: cover;
          }
          .checkTxt{
            width: 4.2rem;
            display: inline-block;
            line-height: .4rem;
            font-size: .3rem;
            color: #777;
            margin: .2rem 0 0 0;
          }
        }
        .radio-box{
          width: 2.5rem;
          height: .8rem;
          float: left;
          .input-radio{
            width: .46rem;
            height: .46rem;
            appearance:none;
            -webkit-appearance: none;
            border: 1px solid #ccc;
            border-radius: 50%;
            float: left;
            background: #fff;
            margin-top: .18rem;
          }
          span{
            text-indent: .1rem;
            float: left;
            line-height: .8rem;
          }
          input[type=radio]:checked{
            width: .46rem;
            height: .46rem;
            border: none;
            border-radius: 50%;
            background: url('../../assets/imgs/check1.png') no-repeat;
            background-size: cover;
          }
        }
      }
      .beizhu{
        font-size: .3rem;
        font-weight: 800;
        line-height: 1rem;
        textarea{
          width: 6.5rem;
          height: 1.7rem;
          border: 1px dashed #dcdcdc;
          display: inline-block;
          padding: .2rem
        }
        input:-ms-input-placeholder,textarea:-ms-input-placeholder{
          padding: 5rem
        }
      }
    }
  }
  .pos{
    width: 100%;
    height:1.05rem ;
    position: fixed;
    bottom: 0;
    z-index: 99;
    background: #E6002D;
    .posLeft{
      width: 4.7rem;
      background: #1B2939;
      float: left;
      color: #fff;
      height: 100%;
      line-height: 0.7rem;

      span:nth-of-type(1){
        font-size: .28rem;
        display: inline-block;
        padding-left: 0.3rem;
      }
      span:nth-of-type(2){
        font-size: .46rem;
      }
    }
    .posRight{
      font-size: .36rem;
      text-align: center;
      line-height:1.05rem;
      color: #fff;
    }
  }
}

</style>
