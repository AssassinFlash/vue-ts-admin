<template>
  <MenuLogo />
  <el-menu class="el-menu-vertical-demo" background-color="#304156">
    <MenuItem :menu-list="menuList" />
  </el-menu>
</template>
<script setup lang="ts">
import MenuLogo from './MenuLogo.vue'
import MenuItem from './MenuItem.vue'
import { reactive } from 'vue'

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
        path: '/department',
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
        path: '/userList',
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
        path: '/roleList',
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
        path: '/menuList',
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
        path: '/goodCategory',
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
        path: '/document',
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
</script>
<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 230px;
  height: 100%;
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
