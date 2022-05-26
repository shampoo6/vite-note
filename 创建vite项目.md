# 创建 vite 项目

## 创建项目

```shell
npm create vite@latest
# 或
yarn create vite
# 也可以在创建的时候就指定项目名和模板

# npm 6.x
npm create vite@latest my-vue-app --template vue

# npm 7+, extra double-dash is needed:
npm create vite@latest my-vue-app -- --template vue
```

运行命令后根据提示选择模板即可

`package.json` 的 `scripts` 中 使用的 `vite` 命令 可以通过 `npx vite --help` 查看

有非常多出色的 `vite` 模板，可以根据自己的需要在 [awesome-vite](https://github.com/vitejs/awesome-vite#templates) 社区查看

## 运行项目

```shell
npm run dev
```

`vite` 会启动一个类似静态资源服务器样的服务器，该服务器的根目录 `/` 映射的是项目根目录，所以默认情况访问 `http://localhost:3000` 则会访问项目目录下的 `index.html` 文件

### HMR (Hot Module Reload) 热更新

`vite` 的开发服务器启动后，会自动开启热更新功能，所谓的热更新，就是修改代码后，不需要刷新页面，页面就会自动更新至最新的代码

热更新会保存当前的内存状态，所以若想重置内存状态，刷新页面即可
