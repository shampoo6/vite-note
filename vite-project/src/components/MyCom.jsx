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
      <div className="content">
        <div>{this.title}</div>
        <button onClick={this.onClickHandler}>{this.count}</button>
      </div>
    );
  },

  methods: {
    onClickHandler(ev) {
      console.log(ev);
      console.log(++this.count);
    },
  },
});
