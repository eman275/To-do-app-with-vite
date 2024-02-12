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
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
