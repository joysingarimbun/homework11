const express = require("express");
const app = express();

const port = 3004;
app.use(express.json());

app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});

// API TEST
app.get("/", (req, res, next) => {
  res.send("API TEST");
});

// Router
const TodoRouters = require("./routers/todoRouters");
app.use("/todo", TodoRouters);

module.exports = app;
