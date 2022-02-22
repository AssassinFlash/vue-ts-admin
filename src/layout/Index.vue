<template>
  <el-container class="layout">
    <el-aside width="230px" class="aside">
      <MenuBar />
    </el-aside>
    <el-container class="layout">
      <el-header class="header">
        <Header />
      </el-header>
      <el-main class="main">
        <!-- 二级路由，即 layout 的子路由的出口 -->
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>
<script setup lang="ts">
import Header from './header/Header.vue'
import MenuBar from './menu/MenuBar.vue'
</script>
<style lang="scss" scoped>
.layout {
  height: 100%;
  .aside {
    background: #304156;
  }
  .header {
    height: 50px;
    border-bottom: 1px solid #e5e5e5;
  }
  .main {
    background: darkcyan;
  }
}
</style>
