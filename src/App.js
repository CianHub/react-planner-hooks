import React, { useState } from 'react';
import './App.css';

function Task({ task, id }) {
  console.log(task);
  return <div className="task">{task.text}</div>;
}

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'I am text', completed: false },
    { id: 2, text: 'I am task', completed: false },
    { id: 3, text: 'I am groot', completed: false },
  ]);

  return (
    <div className="App">
      <div className="task-list">
        {tasks.map((task) => (
          <Task key={task.id} task={task} id={task.id}></Task>
        ))}
      </div>
    </div>
  );
}

export default App;
