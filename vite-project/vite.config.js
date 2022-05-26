import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import jsx from "@vitejs/plugin-vue-jsx";
import path from "path";

// https://vitejs.dev/config/
// https://cn.vitejs.dev/config/
export default defineConfig({
  // ============================== 通用配置 =================================

  // 项目根目录（index.html 文件所在的位置）
  root: "./",
  // 访问资源的路径前缀
  // base: "/ok/",
  // 模式
  mode: "mymode",
  // 定义一些页面的全局变量
  define: {
    DEBUG: "true",
    FOO: "true",
    TITLE: '"THIS_IS_MY_TITLE"',
  },
  // 插件配置
  plugins: [vue(), jsx()],
  // 静态资源文件夹目录
  // 该目录下的文件不会被资源打包 而是被原封不动的拷贝到输出目录下
  publicDir: "public",
  resolve: {
    // 路径别名
    alias: {
      // key: 别名
      // value: 别名指代的真实路径
      "@": path.join(__dirname, "src"),
    },
    // 查询后缀名
    // 当引入资源时不写后缀名 vite 会自动拼接此处定义的后缀名来查找文件
    extensions: [".js", ".jsx", ".vue"],
  },
  // .env 文件所在的目录
  envDir: path.join(__dirname, "env"),
  // 修改环境变量的前缀名 默认是 VITE_
  envPrefix: "V_",

  // ============================== 开发服务器配置 =================================

  server: {
    // 服务器监听的ip
    // 0.0.0.0 代表监听所有可用ip
    host: "0.0.0.0",
    // 服务器监听端口
    port: 2048,
    // 代理配置
    // 用于解决前后端分离开发时的跨域问题
    proxy: {
      // key: 请求url的前缀
      "/api": {
        // 转发的目标服务器
        target: "http://127.0.0.1:1024",
        // 修改请求源为目标服务器
        changeOrigin: true,
        // 重写请求路径
        // 因为请求的目标服务器的接口路径通常都没有 /api 前缀
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },

  // ============================== 构建配置 =================================
  build: {
    // 构建的输出目录
    outDir: path.join(__dirname, "output"),
    // 静态资源打包输出的文件名
    assetsDir: "ass",
    // 是否创建用于调试的 sourcemap
    sourcemap: true,
    // 是否添加构建后的代码混淆
    minify: false,
  },

  // 预览的配置此处并未给出 大部分内容和开发服务器相同

  // ============================== 依赖优化选项 =================================
  optimizeDeps: {
    // 指定依赖构建时的入口文件
    entries: "index.html",
    // 构建时排除在外的依赖 此处配置的路径不会被 vite 检索
    exclude: ["node_modules"],
    // 构建时需要检索的依赖路径 此处配置的路径会被 vite 检索
    include: ['src']
  },
});
