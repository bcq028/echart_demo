<script setup lang="ts">
import * as echarts from 'echarts';
import { onMounted, ref, watch, watchEffect } from 'vue';

import { cityData } from '../assets/data';

import map from '../assets/map.json'

echarts.registerMap('china', map as any);


let options:echarts.EChartsCoreOption = {
    series: [
        {
            type: 'map',
            map: 'china',
            name: '省份访问量',
            data:cityData.value,
        }
    ],
    tooltip: {
        trigger: 'item'
    },
    visualMap: {
      left: 'right',
      min: 1990000,
      max: 2000000,
      inRange: {
        color: [
          '#313695',
          '#4575b4',
          '#74add1',
          '#abd9e9',
          '#e0f3f8',
          '#ffffbf',
          '#fee090',
          '#fdae61',
          '#f46d43',
          '#d73027',
          '#a50026'
        ]
      },
      text: ['High', 'Low'],
      calculable: true
    },
}

onMounted(()=>{
   const myChart= echarts.init(document.getElementById('chinaMap')!);
   watchEffect(()=>{
      myChart.setOption(options as any)
})
})




</script>

<template>
  <div id="chinaMap"></div>
</template>

<style scoped>
#chinaMap{
  width: 40vw;
  height: 50vh;
}
</style>
