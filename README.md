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
