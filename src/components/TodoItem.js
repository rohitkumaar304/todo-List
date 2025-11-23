function TodoItem({ todo, onDelete, onComplete }) {
    return (
        <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <div className="todo-content">
                <label className="checkbox-container">
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={onComplete}
                    />
                    <span className="checkmark"></span>
                </label>
                <span className="todo-title">{todo.title}</span>
            </div>
            <button onClick={onDelete} className="delete-button">
                Delete
            </button>
        </div>
        );
    }
    export default TodoItem;