# 使用 jsx

## 安装与配置

安装官方插件以支持 `jsx`，如下:

```shell
npm i -D @vitejs/plugin-vue-jsx
```

然后在 `vite.config.js` 配置插件

```js
// vite.config.js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import jsx from "@vitejs/plugin-vue-jsx";

export default defineConfig({
  // vue() 是支持单文件组件的插件
  // jsx() 是支持jsx的插件
  plugins: [vue(), jsx()],
});
```

## 使用

使用时只要创建一个 `.jsx` 后缀名的文件来创建组件即可

```jsx
// MyCom.jsx
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      count: 0,
      title: "hello world",
    };
  },

  render() {
    return (
      <div>
        <div>{this.title}</div>
        <button onClick={this.onClickHandler}>{this.count}</button>
      </div>
    );
  },

  methods: {
    onClickHandler() {
      console.log(++this.count);
    },
  },
});
```
