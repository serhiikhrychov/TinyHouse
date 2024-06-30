import express from "express";

const app = express();
const port = 9000;

const one: number = 1;

console.log(one);

app.get("/", (req, res) => {
  res.send("Hello World123!");
});

app.listen(port);

console.log(`[app]: http://localhost:${port}`);
