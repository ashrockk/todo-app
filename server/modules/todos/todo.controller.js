const subtasksModel = require("../subtasks/subtasks.model");
const TodoModel = require("./todo.model");

//CRUD gareko

const create = (payload) => {
  return subtasksModel.create(payload);
};

const listTodos = () => {
  return TodoModel.find();
};

const getById = (id) => {};
const updateById = (id, payload) => {};

const remove = (id) => {};

module.exports = { create, list, getById, updateById, remove };
