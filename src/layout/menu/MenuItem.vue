<template>
  <template v-for="menu in menuList" :key="menu.path">
    <!-- 启用 router 模式，会以 index 作为 path 进行路由跳转 -->
    <el-sub-menu
      v-if="menu.children && menu.children.length > 0"
      :index="menu.path"
    >
      <template #title>
        <el-icon>
          <component :is="menu.meta.icon" class="icons" />
        </el-icon>
        <span>{{ menu.meta.title }}</span>
      </template>
      <!-- 子菜单下还有菜单，组件递归调用自身 -->
      <MenuItem :menu-list="menu.children" />
    </el-sub-menu>
    <el-menu-item v-else :index="menu.path" style="color: #f4f4f5">
      <el-icon>
        <component :is="menu.meta.icon" class="icons" />
      </el-icon>
      <template #title>
        <span>{{ menu.meta.title }}</span>
      </template>
    </el-menu-item>
  </template>
</template>
<script setup lang="ts">
defineProps(['menuList'])
</script>
<style lang="scss" scoped>
.icons {
  width: 24px;
  height: 18px;
  margin-right: 5px;
  vertical-align: middle;
}
</style>
