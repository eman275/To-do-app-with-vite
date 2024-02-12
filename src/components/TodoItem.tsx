import React from 'react';
import { useStore } from '../store/todosStore';
import { Todo } from '../types';

const TodoItem: React.FC<{ todo: Todo }> = ({ todo }) => {
  const toggleTodo = useStore((state) => state.toggleTodo);
  const removeTodo = useStore((state) => state.removeTodo);

  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        style={{ marginRight: '10px' }}
      />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none', flexGrow: 1 }}>
        {todo.title}
      </span>
      <button onClick={() => removeTodo(todo.id)}>Remove</button>
    </div>
  );
};

export default TodoItem;
