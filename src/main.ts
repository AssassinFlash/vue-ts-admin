import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import { store, key } from '@/store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/styles/index.scss'
// 引入图标
import * as Icons from '@element-plus/icons-vue'

const app = createApp(App)
app.use(router).use(store, key).use(ElementPlus).mount('#app')

// // 注意：
// const person = {
//   name: 'jzh',
//   age: 24
// }
// type tp = typeof person
// keyof 获取到
// type key = keyof tp // 此时 key 即为 "name" | "age" 的联合字面量类型
// const key1: key = 'name'

// 全局注册Icons组件
Object.keys(Icons).forEach((compName) => {
  // component方法：第一个参数是组件名，第二个参数是组件，
  // 而 compName as keyof typeof Icons 已经把 Icons 组件所有的组件名都获取到了
  // 比如 Icons 组件中有 Menu、Home，那么上述就变成了 "Menu" | "Home" 的联合字面量类型
  // 所以下述表达即变成 Icons["Menu"]，因此获取到对应的组件
  app.component(compName, Icons[compName as keyof typeof Icons])
})
