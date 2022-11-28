<script setup lang="ts">

const props=defineProps({
  tableData:Array,
  colLeft:String,
  colRight:String
})
</script>

<template>
  <transition-group name="flip-list">
    <el-table :data="tableData" stripe height="250">
    <el-table-column prop="key" :label="colLeft" width="120" />
    <el-table-column prop="value" :label="colRight" width="90" />
  </el-table>
  </transition-group>

</template>

<style scoped>
.flip-list-move {
  transition: transform 1s;
}
</style>
