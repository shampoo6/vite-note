const express = require("express");
const app = express();

app.post("/doPost", (req, res) => {
  res.json({ msg: "post ok" });
});

app.get("/doGet", (req, res) => {
  res.json({ msg: "get ok" });
});

app.listen(1024);
