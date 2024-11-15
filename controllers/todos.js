import { Todo } from '../models/todo.js';
import fileManager from '../utils/fileManager.js';

class TodoController {
    constructor() {
        this.TODOS = [];
    }

    async createTodo(req, res) {
        const task = req.body.task;
        const newTodo = new Todo(Math.random().toString(), task);
        this.TODOS.push(newTodo);

        await fileManager.writeFile('./data/todos.json', this.TODOS);

        res.json({
            message: 'created new todo object',
            newTask: newTodo
        });
    }

    getTodos(req, res) {
        res.json({ tasks: this.TODOS });
    }

    updateTodo(req, res) {
        const todoId = req.params.id;
        const updatedTask = req.body.task;
        const todoIndex = this.TODOS.findIndex((todo) => todo.id == todoId);
        if (todoIndex < 0) {
            return res.json({
                message: 'Could not find todo with such index'
            });
        }

        this.TODOS[todoIndex] = new Todo(this.TODOS[todoIndex].id, updatedTask);
        res.json({
            message: 'Updated todo',
            updatedTask: this.TODOS[todoIndex]
        });
    }

    deleteTodo(req, res) {
        const todoId = req.params.id;
        const todoIndex = this.TODOS.findIndex((todo) => todo.id == todoId);
        if (todoIndex < 0) {
            return res.json({
                message: 'Could not find todo with such index'
            });
        }

        this.TODOS.splice(todoIndex, 1);
        res.json({
            message: 'Deleted todo'
        });
    }
}


const todoController = new TodoController();
export default todoController;
