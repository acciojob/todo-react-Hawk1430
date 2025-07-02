import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState([]);

  const generateId = () => {
    return Date.now().toString() + Math.random().toString(36).substr(2, 5);
  };
  const handleAddToDo = () =>{
    if(task.trim === "") return;
    const id = generateId();
    setTodoList(prev => [...prev, {id, name: task}])
    setTask("")
  }

  const handleDeleteTask = (id) => {
    const list  = todoList.filter(item => item.id !== id);
    setTodoList(list);
  }
  return (
    <div>
        <h1>To-Do List</h1>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={handleAddToDo}>Add Todo</button>
        <ul>
          {todoList.length >0 && 
            todoList.map(item => (
              <div className="task">
                <li key={item.id}>
                  {item.name}
                
                </li>
                <button onClick={() => handleDeleteTask(item.id)}>Delete</button>
              </div>
            ))
          }
        </ul>
    </div>
  )
}

export default App
