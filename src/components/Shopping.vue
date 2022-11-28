<script setup lang="ts">
import * as echarts from 'echarts';
import format from 'date-format'
import { onMounted, ref, watch, watchEffect } from 'vue';
import { femaleData, maleData } from '../assets/data';

// 基于准备好的dom，初始化echarts实例


let dates=ref([
    format('hh:mm:ss',new Date()),
    format('hh:mm:ss',new Date()),
    format('hh:mm:ss',new Date()),
    format('hh:mm:ss',new Date()),
    format('hh:mm:ss',new Date()),
])

const myChart=ref();

/**
 * @type {echarts.EChartsCoreOption}
 */
let options = {
    xAxis: {
        type: 'category',
        data:dates.value
      },
    yAxis:{
        type:'value'
    },
    series:[
        {
            name:'男生',
            type:'line',
            data:maleData.value
        },
        {
            name:'女生',
            type:'line',
            data:femaleData.value
        },
    ]  

}

setInterval(()=>{
  dates.value.shift();
  let new_date=format('hh:mm:ss',new Date());
  dates.value.push(new_date)
  myChart.value.setOption(options);
},1000)


onMounted(()=>{
  const node=document.getElementById('shopping');
  myChart.value = echarts.init(node!);
  myChart.value.setOption(options);
  watchEffect(()=>{
    myChart.value.setOption(options)
  })
})

</script>

<template>
  <div id="shopping"></div>
</template>

<style scoped>
#shopping{
  width: 40vw;
  height:50vh;
}
</style>
