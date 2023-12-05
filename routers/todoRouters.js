const TodoController = require("../controller/todoController");
const router = require("express").Router();

router.post("/create", TodoController.CreateTodo);
router.get("/all", TodoController.getAllTodo);
router.get("/:id", TodoController.getbyId);
router.delete("/:id", TodoController.deleteTodo);

module.exports = router;
