require("dotenv").config();
const express = require("express");
const app = express();
const routes = require("./routes.js");
const favicon = require("serve-favicon");
const path = require("path");
const bodyParser = require("body-parser");

app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "/dist"));
app.use(favicon(path.join(__dirname, "dist", "favicon.svg")));

routes(app);

try {
  app.listen(process.env.PORT, () => {
    console.log(`Сервер запущен в порту ${process.env.PORT}!`);
  });
} catch (e) {
  console.log(e);
}
