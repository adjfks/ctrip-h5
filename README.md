# ctrip-h5

## 项目开发文档

### 项目初始化

1. 创建项目

执行`pnpm create vite`，选择`vue + ts`的组合创建项目。

2. 添加less支持和normalize.less

vite内置了对less的支持，只需要运行`pnpm add -D less`安装依赖。

normalize.less用于统一各浏览器默认样式。

3. 添加路径别名

在vite.config.ts中配置resolve.alias,因为要使用node的path模块，所以需要安装对应的ts类型包`@types/node`，属于开发依赖。

4. 配置路由

执行`pnpm add vue-router`,使用`createWebHistory`创建HTML5模式的路由。

5. 引入UI库NutUI并配置自动按需引入

执行`pnpm add @nutui/nutui`安装。

配置自动按需引入，安装`pnpm add unplugin-vue-components -D`,在vite中进行配置

```ts
// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import NutUIResolver from '@nutui/nutui/dist/resolver'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 开启 unplugin 插件，自动引入 NutUI 组件
    Components({
      resolvers: [NutUIResolver()],
    }),
  ],
  // 配置全局样式变量
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@nutui/nutui/dist/styles/variables.scss";`
      }
    }
  }
})
```

添加 NutUI vscode 扩展 nutui-vscode-extension
