const router = require("express").Router();

const todoRouter = require("../modules/todos/todo.routes.api");
const subTaskRouter = require("../modules/subtasks/subtask.routes.api");

router.use("/todos", todoRouter);
router.use("/subtasks", subTaskRouter);

module.exports = router;

// Path: server\modules\todos\todo.routes.api.js

//const router = require("express").Router();
