const express = require('express');
const { addTask, getAllTasks } = require('../controllers/taskController');
const router = express.Router();

router.post('/', addTask);
router.get('/', getAllTasks);

module.exports = router;
