<template>
  <el-icon class="icons" @click="changeIcon">
    <component :is="status ? Expand : Fold" />
  </el-icon>
</template>
<script setup lang="ts">
import { Fold, Expand } from '@element-plus/icons-vue'
import { useStore } from '@/store'
import { computed } from 'vue'

const store = useStore()
const status = computed(() => store.getters['getCollapse'])

const changeIcon = () => {
  store.commit('setCollapse', !status.value)
}
</script>
<style lang="scss" scoped>
.icons {
  margin-right: 15px;
  display: flex;
  align-items: center;
  font-size: 22px;
  color: #303133;
  cursor: pointer;
}
</style>
