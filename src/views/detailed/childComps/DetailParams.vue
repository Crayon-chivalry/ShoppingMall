<template>
  <div id="params" v-if="Object.keys(params).length !== 0">
    <div class="rule">
      <div class="rule-title">{{params.rule.key}}</div>
      <table>
        <tr v-for="(list,index) in params.rule.tables[0]" :key="index">
          <td v-for="(item,index) in list" :key="index">{{item}}</td>
        </tr>
      </table>
    </div>
    <div class="info">     
      <div class="info-title">{{params.info.key}}</div>
      <table>
        <tr v-for="(item,index) in params.info.set" :key="index" class="info-tr">
          <th class="info-key">{{item.key}}</th>
          <td>{{item.value}}</td>
        </tr>
      </table> 
    </div>
  </div>
</template>


<script>
export default {
  name: "DetailParams",
  props:{
    params:{
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>



<style scoped>
  /* .params{
    margin: 5px;
  } */
  table,th,td{
    height: 35px;
    font-size: 14px;
    border: 1px solid var(--color-tint);
    text-align: center;
  }
  table th,.rule tr:nth-child(1){
    background-color: var(--color-tint);
    color: #fff;
  }
  .info-title,.rule-title{
    font-size: 18px;
    font-weight: bold;
  }
  table{
    width: 100%;
    margin-top: 5px;
    border-collapse:collapse;
    /* border: 1px solid var(--color-tint); */
  }
  .info-key,.rule td{
    width: 20%;
  }
  .info{
    margin-top: 20px;
  }
</style>