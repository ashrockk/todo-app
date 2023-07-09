const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

mongoose.connect("mongodb://localhost:27017/todo-app").then(() => {
    console.log("Connected to MongoDB");
});

const indexRouter = require("./routes");

app.use("/",indexRouter);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

const router = express.Router();


