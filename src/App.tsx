import { Toaster } from "react-hot-toast";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
<Toaster
  position="bottom-center"
  reverseOrder={false}
/>
      <h1>Todo List</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
