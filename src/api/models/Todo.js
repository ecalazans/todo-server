import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  finished: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Todo = mongoose.model('Todo', todoSchema);

export default Todo;
