<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Dynamic from './pages/Dynamic.vue'
import Static from './pages/Static.vue'
import {cur_index} from './pages'
import { watchEffect } from 'vue';
import { start } from './assets/data';
import Recommand from './pages/Recommand.vue';


cur_index.value=parseInt(window.location.href.split('=')[1]);

watchEffect(()=>{
  start()
})

</script>

<template>
   <Dynamic v-if="cur_index==1"></Dynamic>
   <Static v-else-if="cur_index==2"></Static>
   <Recommand v-else-if="cur_index==3"></Recommand>
</template>

<style scoped lang="scss">
.line{
  display: flex;
  width: 100vw;
  justify-content: space-evenly;
  margin-bottom: 60px;
}


</style>
