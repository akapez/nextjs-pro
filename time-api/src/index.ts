const express = require("express");
const cors = require("cors");

const port = process.env.PORT || 8080;
const app = express();

app
  .disable("x-powered-by")
  .use(cors())
  .get("/time", (_: any, res: any) => {
    return res.json({ time: new Date().toLocaleTimeString() });
  })
  .listen(port, () => {
    console.log(`REST api running on ${port}`);
  });