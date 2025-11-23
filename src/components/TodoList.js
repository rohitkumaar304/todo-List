import { useState } from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';
function TodoList() {
    const initialTasks = [
        { id: 1, title: 'Learn C Language', completed: true },
        { id: 2, title: 'MERN Stack', completed: false },
        { id: 3, title: 'English Speaking', completed: false },
        { id: 4, title: 'OOPs Concept', completed: true }
    ];
    const [todos, setTodos] = useState(initialTasks);
    const [inputValue, setInputValue] = useState('');
    const [filter, setFilter] = useState('all');
    const handleDelete = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };
    const handleComplete = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };
    const handleAdd = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;
        const newTodo = {
            id: Date.now(),
            title: inputValue,
            completed: false
        };
        setTodos([...todos, newTodo]);
        setInputValue('');
    };
    const filteredTodos = todos.filter(todo => {
        if (filter === 'completed') return todo.completed;
        if (filter === 'active') return !todo.completed;
        return true;
    });
    return (
        <div className="todo-container">
            <div className="todo-header">
                <h1>✨ My Todo List</h1>
            </div>
            <form onSubmit={handleAdd} className="todo-form">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Add a new task..."
                    className="todo-input"
                />
                <button type="submit" className="add-button">Add Task</button>
            </form>
            <div className="filter-container">
                <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="filter-select"
                >
                    <option value="all">All Tasks</option>
                    <option value="active">Active</option>
                    <option value="completed">Completed</option>
                </select>
            </div>
            <div className="todo-list">
                {filteredTodos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onDelete={() => handleDelete(todo.id)}
                        onComplete={() => handleComplete(todo.id)}
                    />
                ))}
                {filteredTodos.length === 0 && (
                    <p className="empty-message">No tasks to show</p>
                )}
            </div>
        </div>
    );
}
export default TodoList;