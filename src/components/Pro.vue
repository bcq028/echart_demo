<script setup lang="ts">
import * as echarts from 'echarts';
import { computed, onMounted, ref, watch, watchEffect } from 'vue';
import { cityData } from '../assets/data'



let option = {
  xAxis: {
    max: 'dataMax'
  },
  yAxis: {
    type: 'category',
    data: ['','',''],
    inverse: true,
    animationDuration: 300,
    animationDurationUpdate: 300,
    max: 4 // only the largest 3 bars will be displayed
  },
  series: [
    {
      realtimeSort: true,
      name: '热度',
      type: 'bar',
      data: [0,0,0],
      label: {
        show: true,
        position: 'right',
        valueAnimation: true
      }
    }
  ],
  legend: {
    show: true
  },
  animationDuration: 0,
  animationDurationUpdate: 3000,
  animationEasing: 'linear',
  animationEasingUpdate: 'linear'
};

onMounted(() => {
  const node = document.getElementById('pro');
  const myChart = echarts.init(node!);
  watchEffect(() => {
    option.series[0].data=cityData.value.map(p => p.value)
    option.yAxis.data=cityData.value.map(p => p.name).map(p=>p.slice(0,2))
    myChart.setOption(option as any)
  })
})


</script>

<template>
  <div id="pro"></div>
</template>

<style scoped>
#pro {
  width: 20vw;
  height: 30vh;
}
</style>
