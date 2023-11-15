import Todo from '../models/Todo';

class TodoController {
  async getAllTodos(request, response) {
    // usamos o try/catch para tratar algum erro de servidor
    try {
      const todos = await Todo.find();

      return response.json(todos).status(200);
    } catch (error) {
      console.log(error);

      return response.status(500).send('Server error');
    }
  }

  async createTodo(request, response) {
    try {
      const { task } = request.body;
      if (!task) {
        return response
          .status(400)
          .json({ error: 'Task is empty. Please fill fields' });
      }

      const todo = new Todo({
        task,
      });

      await todo.save();

      return response.status(200).json(todo);
    } catch (error) {
      console.log(error);

      return response.status(500).send('Server error');
    }
  }

  async updateFinishedTodo(request, response) {
    try {
      const { id } = request.params;
      const { finished } = request.body;

      // responsável por atualizar
      await Todo.findByIdAndUpdate(id, {
        finished,
      });

      // pegando a atualização acima já atualizada no banco
      const todo = await Todo.findById(id);

      return response.json(todo).status(200).send();
    } catch (error) {
      console.log(error);

      return response.status(500).send('Server error');
    }
  }

  async removeTodoById(request, response) {
    try {
      const { id } = request.params;

      await Todo.findByIdAndDelete(id);

      return response.status(204).send();
    } catch (error) {
      console.log(error);

      return response.status(500).send('Server error');
    }
  }
}

export default new TodoController();
