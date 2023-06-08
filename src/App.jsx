import { useState } from "react";
import "./index.css";

function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  function addTask() {
    setTaskList([...taskList, task]);
    setTask("");
  }
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
        <button onClick={addTask}>add</button>
      </div>

      <ul>
        {taskList.map((task) => {
          return <li key={task.id}>{task}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
