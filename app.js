const express = require("express");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");
require('dotenv').config()
require("./db/connectdb");

const app = express();

app.use(express.json());
app.use("/users", userRouter);
app.use("/tasks", taskRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
