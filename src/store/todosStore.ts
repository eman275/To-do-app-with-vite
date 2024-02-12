// store/todosStore.ts
import create from 'zustand'

interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

interface TodoState {
  todos: Todo[];
  addTodo: (title: string) => void;
  toggleTodo: (id: string) => void;
  removeTodo: (id: string) => void;
  updateTodo: (id: string, text: string) => void
}

export const useStore = create<TodoState>(set => ({
  todos: [],
  addTodo: (title) =>
    set(state => ({ todos: [...state.todos, { id: Date.now().toString(), title, completed: false }] })),
  toggleTodo: (id) =>
    set(state => ({
      todos: state.todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    })),
  removeTodo: (id) =>
    set(state => ({
      todos: state.todos.filter(todo => todo.id !== id)
    })),
    updateTodo: (id: string, text: string) =>
    set(state => ({
      todos: state.todos.map(todo =>
        todo?.id === id ? { ...todo, title: text } : todo
      ),
    })),
}));
