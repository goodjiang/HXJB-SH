<template>
  <div class="RedPos">
    {{ErrorTxt}}
  </div>
</template>

<script>
export default {
  props:['ErrorTxt'],
  name: 'RedPos',
  data () {
    return {
     
    }
  }
}
</script>

<style scoped>
    .RedPos{
      width: 100%;
      height: 1rem;
      position: fixed;
      top: 0;
      left: 0;
      background: red;
      z-index: 999;
      text-align: center;
      line-height: 1rem;
      font-size: .4rem;
      color: #fff;
    }
</style>
