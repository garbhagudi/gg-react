const express = require("express");
const app = express();

app.use(
  require("prerender-node").set("prerenderToken", "ccrVXjOqwuafG68bOjiL")
);
