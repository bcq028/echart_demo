<script setup lang="ts">
import * as echarts from 'echarts';
import { computed, onMounted, ref, watch, watchEffect } from 'vue';
import { gender0,gender1 } from '../assets/data'


let option = {
  xAxis: {
    type: 'category',
    data: ['男', '女']
  },
  yAxis: {
    type: 'value'
  },
  grid:{
    left:'100'
  },
  series: [
    {
      data: [1e5,1e5],
      type: 'bar'
    }
  ],
};

onMounted(() => {
  const node = document.getElementById('gender');
  const myChart = echarts.init(node!);
  watchEffect(() => {
    option.series[0].data=[gender0.value,gender1.value]
    myChart.setOption(option as any)
  })
})


</script>

<template>
  <div id="gender"></div>
</template>

<style scoped>
#gender {
  width: 20vw;
  height: 50vh;
}
</style>
