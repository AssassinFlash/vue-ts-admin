<template>
  <MenuLogo v-show="!isCollapsed" class="layout-logo" />
  <el-menu
    class="el-menu-vertical-demo"
    background-color="#304156"
    router
    :default-active="activeIndex"
    :collapse="isCollapsed"
    unique-opened
  >
    <MenuItem :menu-list="menuList" />
  </el-menu>
</template>
<script setup lang="ts">
import MenuLogo from './MenuLogo.vue'
import MenuItem from './MenuItem.vue'
import { useRoute } from 'vue-router'
import { useStore } from '@/store'
import { reactive, computed } from 'vue'

// 菜单数据
let menuList = reactive([
  {
    path: '/dashboard',
    component: 'Layout',
    meta: {
      title: '首页',
      icon: 'HomeFilled',
      roles: ['sys:manage']
    },
    children: []
  },
  {
    path: '/system',
    component: 'Layout',
    alwaysShow: true,
    name: 'system',
    meta: {
      title: '系统管理',
      icon: 'Menu',
      roles: ['sys:manage'],
      parentId: 0
    },
    children: [
      {
        path: '/system/department',
        component: '/system/department/department',
        alwaysShow: false,
        name: 'department',
        meta: {
          title: '机构管理',
          icon: 'Briefcase',
          roles: ['sys:dept'],
          parentId: 17
        }
      },
      {
        path: '/system/userList',
        component: '/system/User/UserList',
        alwaysShow: false,
        name: 'userList',
        meta: {
          title: '用户管理',
          icon: 'UserFilled',
          roles: ['sys:user'],
          parentId: 17
        }
      },
      {
        path: '/system/roleList',
        component: '/system/Role/RoleList',
        alwaysShow: false,
        name: 'roleList',
        meta: {
          title: '角色管理',
          icon: 'Platform',
          roles: ['sys:role'],
          parentId: 17
        }
      },
      {
        path: '/system/menuList',
        component: '/system/Menu/MenuList',
        alwaysShow: false,
        name: 'menuList',
        meta: {
          title: '权限管理',
          icon: 'OfficeBuilding',
          roles: ['sys:menu'],
          parentId: 17
        }
      }
    ]
  },
  {
    path: '/goods',
    component: 'Layout',
    alwaysShow: true,
    name: 'goods',
    meta: {
      title: '商品管理',
      icon: 'Food',
      roles: ['sys:good'],
      parentId: 0
    },
    children: [
      {
        path: '/goods/goodCategory',
        component: '/goods/goodsCategory/goodsCategoryList',
        alwaysShow: false,
        name: 'goodCategory',
        meta: {
          title: '商品分类',
          icon: 'ForkSpoon',
          roles: ['sys:goodsCategory'],
          parentId: 34
        }
      }
    ]
  },
  {
    path: '/systenConfig',
    component: 'Layout',
    alwaysShow: true,
    name: 'systenConfig',
    meta: {
      title: '系统工具',
      icon: 'Setting',
      roles: ['sys:systenConfig'],
      parentId: 0
    },
    children: [
      {
        path: '/systenConfig/document',
        component: '/system/config/systemDocument',
        alwaysShow: false,
        name: 'http://42.193.158.170:8089/swagger-ui/index.html',
        meta: {
          title: '接口文档',
          icon: 'Document',
          roles: ['sys:document'],
          parentId: 42
        }
      }
    ]
  }
])

// 存在问题：每当页面刷新，菜单栏选中项消失
// 解决方法：获取选中的菜单且赋值到菜单栏的 defaultIndex，
// 这样菜单刷新就能获取到 defaultIndex 并展开这个值对应的页面
const route = useRoute()
const activeIndex = computed(() => {
  return route.path
})

// 是否折叠菜单
const store = useStore()
const isCollapsed = computed(() => store.getters['getCollapse'])
</script>
<style scoped>
@keyframes logoAnimation {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(1);
  }
}
.layout-logo {
  animation: logoAnimation 1s ease-out;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 230px;
  min-height: 400px;
}
.el-menu {
  border-right: none;
}
:deep(.el-sub-menu .el-sub-menu__title) {
  color: #f4f4f5 !important;
}
:deep(.el-menu .el-menu-item) {
  color: #bfcdb9;
}
/* 菜单点中文字的颜色 */
:deep(.el-menu-item.is-active) {
  color: #409eff !important;
}
/* 当前打开菜单的所有子菜单颜色 */
:deep(.is-opened .el-menu-item) {
  background: #1f2d3d !important;
}
/* 鼠标移动菜单的颜色 */
:deep(.el-menu-item:hover) {
  background: #001528 !important;
}
</style>
