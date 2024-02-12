import React, { useState } from "react";
import { useStore } from "../store/todosStore";
import { Todo } from "../types";
import { Button, Input } from "reactstrap";
import toast from "react-hot-toast";

const TodoItem: React.FC<{ todo: Todo }> = ({ todo }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.title);
    const updateTodo = useStore((state) => state.updateTodo);
  const toggleTodo = useStore((state) => state.toggleTodo);
  const removeTodo = useStore((state) => state.removeTodo);

  const onClickDelelte = () => {
    removeTodo(todo.id);
    toast.success("Todo deleted successfully!");
  };

  const onClickEdit = () => {
    if (isEditing) {
      if (!editText.trim()) {
        toast.error('The todo text cannot be empty.');
        return;
      }
      updateTodo(todo.id, editText.trim());
      toast.success('Todo updated successfully!');
    }
    setIsEditing(!isEditing);
  };

  return (
    <div
      style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        style={{ marginRight: "10px" }}
      />
       {!isEditing && 
         <span
         style={{
           textDecoration: todo.completed ? "line-through" : "none",
           flexGrow: 1,
         }}
       >
         {todo.title}
       </span>
}
    
      {isEditing && 
        <Input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          style={{ flexGrow: 1}}
          />
      }
      <Button onClick={onClickEdit} outline style={{marginLeft:"10px"}}>
        edit
      </Button>
      <Button
        onClick={onClickDelelte}
        color="danger"
        style={{ marginLeft: "10px" }}
      >
        delete
      </Button>
    </div>
  );
};

export default TodoItem;
