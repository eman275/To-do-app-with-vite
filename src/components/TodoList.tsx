// components/TodoList.tsx
import React from 'react';
import { useStore } from '../store/todosStore';
import TodoItem from './TodoItem';

const TodoList: React.FC = () => {
  const todos = useStore((state) => state.todos);

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
