import React, { useState } from "react";
import Dropdown from "../DropComponent/DropDownComponent";
import './ToComponent.css'

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  const handleAddTodo = () => {
    if (!todoInput) {
      return;
    }

    setTodos([...todos, todoInput]);
    setTodoInput("");
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index,1 );
    setTodos(newTodos);
  };
  const handleEditTodo =(todoInput)=>{
    
  }
  
  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          value={todoInput}
          onChange={(x) => setTodoInput(x.target.value)}
        />
        <br/>
        <button onClick={handleAddTodo}>ADD TO LIST</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDeleteTodo(index)}>DLT</button>
            <button onClick={() => handleEditTodo(todoInput)}>Edit</button>
            <Dropdown/>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;