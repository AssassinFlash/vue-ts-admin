<template>
  <el-breadcrumb :separator-icon="ArrowRight">
    <template v-for="tab in tabs" :key="tab.path">
      <el-breadcrumb-item
        v-if="tab.path === '/dashboard'"
        :to="{ path: `${tab.path}` }"
      >
        {{ tab.meta.title }}
      </el-breadcrumb-item>
      <el-breadcrumb-item v-else>
        {{ tab.meta.title }}
      </el-breadcrumb-item>
    </template>
  </el-breadcrumb>
</template>
<script setup lang="ts">
import { ArrowRight } from '@element-plus/icons-vue'
import { useRoute, RouteLocationMatched } from 'vue-router'
import { ref, Ref, watch } from 'vue'
// 面包屑数据 声明类型与路由表对齐，否则会出现分配给never[]类型的错误
const tabs: Ref<RouteLocationMatched[]> = ref([])
// 获取当前路由
const route = useRoute()
// route.matched：一个数组，包含一个路由所有匹配到的路由记录
// 比如当前路由为/department，
// 那么route.matched就是[{...,path:"/",meta:{}},{...,path:"/department",meta:{}}]
// 注意到这里有 meta 属性，也就是路由表里声明的 meta 属性，这里就需要获取匹配当前路由的所有 meta，
// 根据 meta 里的 title 属性判断是否为首页，不是则构造一个并加入到面包屑数据中
const getBreadCrumb = () => {
  let matched = route.matched.filter(
    (record) => record.meta && record.meta.title
  )
  const first = matched[0]
  if (first.path !== '/dashboard') {
    matched.unshift({ path: '/dashboard', meta: { title: '首页' } } as any)
  }
  tabs.value = matched
}
watch(
  () => route.path,
  () => getBreadCrumb(),
  { immediate: true }
)
</script>
<style lang="scss" scoped></style>
