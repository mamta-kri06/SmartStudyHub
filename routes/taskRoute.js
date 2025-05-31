const express = require("express");
const { addTask, getAllTask } = require("../controllers/taskController");
const router = express.Router();

//routes
//add task
router.post("/add-task", addTask);

//get task
router.post("/get-task", getAllTask);

module.exports = router;
