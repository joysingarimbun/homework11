const { Todo } = require("../models");

// Create Todo
const CreateTodo = async (req, res) => {
  try {
    const todo = await Todo.create(req.body);
    res.json({
      status: 200,
      message: "Todo Create",
      data: todo,
    });
  } catch (error) {
    res.status(404).send(error);
  }
};

// List All Todo
const getAllTodo = async (req, res) => {
  try {
    const todo = await Todo.findAll();
    res.json({
      status: 200,
      message: "All Todo",
      data: todo,
    });
  } catch (error) {
    res.status(404).send(error);
  }
};

// Get todo by Id
const getbyId = async (req, res) => {
  try {
    const id = req.params.id;
    const todo = await Todo.findOne({ where: { id: id } });
    res.status(200).send(todo);
  } catch (error) {
    res.status(404).send(error);
  }
};

// Delete Todo by ID
const deleteTodo = async (req, res) => {
  const id = req.params.id;
  Todo.findByPk(id)
    .then((todo) => {
      if (!todo) {
        return res.status(404).json({ message: "Todo List Not Found!" });
      }
      return todo.destroy({
        where: {
          id: id,
        },
      });
    })
    .then((res) => {
      res.status(200).json({ message: "Todo List Deleted!" });
    })
    .catch(error);
};

module.exports = {
  CreateTodo,
  getAllTodo,
  getbyId,
  deleteTodo,
};
