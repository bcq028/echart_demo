<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import ChinaMap from './components/ChinaMap.vue';
import Shopping from './components/Shopping.vue';
import List from './components/List.vue';
import Pro from './components/Pro.vue';
import { tableData1,tableData2,tableData3,tableData4 } from './assets/data';
</script>

<template>
  <div class="line">
    <ChinaMap/>
  <Shopping/>

  </div>
<div class="line">
 <div>
  <List :tableData="tableData1" colLeft="商品类别ID" colRight="热度"/>
 </div>
 <div>
  <List :tableData="tableData2" colLeft="商家ID" colRight="热度"/>
 </div>
 <div>
  <Pro/>
 </div>
 <div>
  <List :tableData="tableData3" colLeft="品牌ID" colRight="热度"/>
 </div>
 <div>
  <List :tableData="tableData4" colLeft="商品ID" colRight="热度"/>
 </div>
</div>

</template>

<style scoped lang="scss">
.line{
  display: flex;
  width: 100vw;
  justify-content: space-evenly;
  margin-bottom: 60px;
}


</style>
