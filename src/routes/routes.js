import { Router } from 'express';
import todoController from '../api/controllers/todoController';

const router = Router();

router.get('/todos', todoController.getAllTodos);
router.post('/todos', todoController.createTodo);
router.patch('/todos/:id', todoController.updateFinishedTodo);
router.delete('/todos/:id', todoController.removeTodoById);

export default router;
