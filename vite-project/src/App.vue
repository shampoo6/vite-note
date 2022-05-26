<script setup>
import MyCom from "@/components/MyCom";
import axios from "axios";
let instance = axios.create({ baseURL: "/api" });

function onGet() {
  debugger

  instance
    .get("/doGet")
    .then((r) => {
      console.log(r);
    })
    .catch((reason) => {
      console.error(reason);
    });
}

function onPost() {
  instance
    .post("/doPost")
    .then((r) => {
      console.log(r);
    })
    .catch((reason) => {
      console.error(reason);
    });
}
</script>

<template>
  <div>
    <img alt="Vue logo" src="@/assets/logo.png" />
    <MyCom />
    <button @click="onGet">get</button>
    <button @click="onPost">post</button>
  </div>
</template>

<style lang="scss">
#app {
  .content {
    background-color: #0f0;
  }
  background-color: #f00;
}
</style>
