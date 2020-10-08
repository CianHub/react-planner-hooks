import React, { useState } from 'react';
import './App.css';

function Task({ task, id }) {
  return <div className="task">{task.text}</div>;
}

function AddTask({ addTask }) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value) {
      return;
    }
    addTask(value);
    setValue('');
  };

  return (
    <form className="add-task" onSubmit={handleSubmit}>
      <input value={value} onChange={(e) => setValue(e.target.value)}></input>
    </form>
  );
}

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'I am text', completed: false },
    { id: 2, text: 'I am task', completed: false },
    { id: 3, text: 'I am groot', completed: false },
  ]);

  const addTask = (text) => {
    setTasks([...tasks, { text, completed: false, id: tasks.length + 1 }]);
  };

  return (
    <div className="App">
      <div className="task-list">
        {tasks.map((task) => (
          <Task key={task.id} task={task} id={task.id}></Task>
        ))}
        <AddTask addTask={addTask}></AddTask>
      </div>
    </div>
  );
}

export default App;
