import { useState } from "react";
import "./index.css";

function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  function addTask() {
    setTaskList([...taskList, task]);
    setTask("");
  }
  function removeTask() {}
  const clearTaskList = () => {
    setTaskList([]);
    setTask("");
  };
  return (
    <div className="wrapper">
      <h1>Todo app</h1>
      <div className="input-group">
        <input
          placeholder="add task"
          type="text"
          id="task"
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        <div className="btn-group">
          <button onClick={addTask}>add</button>
          <button onClick={clearTaskList}>clear</button>
        </div>
      </div>

      <ul>
        {taskList.map((task) => {
          return (
            <li key={task.id}>
              <div className="task-item">
                {task} <button onClick={removeTask}>delete</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
