import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const Layout = () => import('@/layout/index.vue')
const Dashboard = () => import('@/layout/dashboard/index.vue')
const Department = () => import('@/views/system/department/department.vue')
const UserList = () => import('@/views/system/User/UserList.vue')
const RoleList = () => import('@/views/system/Role/RoleList.vue')
const MenuList = () => import('@/views/system/Menu/MenuList.vue')
const GoodCategory = () =>
  import('@/views/goods/goodsCategory/goodsCategoryList.vue')
const SystemConfig = () => import('@/views/system/config/systemDocument.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: {
          title: '首页',
          icon: 'HomeFilled'
        }
      }
    ]
  },
  {
    path: '/system',
    name: 'System',
    component: Layout,
    meta: {
      title: '系统管理',
      icon: 'Menu',
      roles: ['sys:manage'],
      parentId: 0
    },
    children: [
      {
        path: '/system/department',
        name: 'Department',
        component: Department,
        meta: {
          title: '机构管理',
          icon: 'Briefcase',
          roles: ['sys:dept']
        }
      },
      {
        path: '/system/userList',
        name: 'UserList',
        component: UserList,
        meta: {
          title: '用户管理',
          icon: 'UserFilled',
          roles: ['sys:user']
        }
      },
      {
        path: '/system/roleList',
        name: 'RoleList',
        component: RoleList,
        meta: {
          title: '角色管理',
          icon: 'Platform',
          roles: ['sys:role']
        }
      },
      {
        path: '/system/menuList',
        name: 'MenuList',
        component: MenuList,
        meta: {
          title: '权限管理',
          icon: 'OfficeBuilding',
          roles: ['sys:menu']
        }
      }
    ]
  },
  {
    path: '/goods',
    component: Layout,
    name: 'Goods',
    meta: {
      title: '商品管理',
      icon: 'Food',
      roles: ['sys:goods']
    },
    children: [
      {
        path: '/goods/goodCategory',
        name: 'goodCategory',
        component: GoodCategory,
        meta: {
          title: '商品分类',
          icon: 'ForkSpoon',
          roles: ['sys:goodsCategory']
        }
      }
    ]
  },
  {
    path: '/systenConfig',
    component: Layout,
    name: 'SystenConfig',
    meta: {
      title: '系统工具',
      icon: 'Setting',
      roles: ['sys:systenConfig']
    },
    children: [
      {
        path: '/systenConfig/document',
        component: SystemConfig,
        name: 'http://42.193.158.170:8089/swagger-ui/index.html',
        meta: {
          title: '接口文档',
          icon: 'Document',
          roles: ['sys:document']
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
