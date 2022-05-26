# 使用css预处理器

## 安装

安装任一一个 `vite` 支持的预处理器

```shell
# npm add 是 npm install 的别名

# .scss and .sass
npm add -D sass

# .less
npm add -D less

# .styl and .stylus
npm add -D stylus
```

## 使用

在单文件组件的 `<style>` 标签中，添加 `lang` 属性，指定预处理器

```html
<style lang="scss">
#app {
    .content {
        color: red;
    }
}
</style>
```
