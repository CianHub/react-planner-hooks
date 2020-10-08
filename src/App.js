import React, { useState } from 'react';
import './App.css';

function Task({ task, id, completeTask }) {
  return (
    <div
      style={{ textDecoration: task.completed ? 'line-through' : '' }}
      className="task"
    >
      {task.text}
      <div>
        <button onClick={() => completeTask(id)}>Complete</button>
      </div>
    </div>
  );
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
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
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

  const completeTask = (id) => {
    const newTasks = [...tasks];
    const index = newTasks.findIndex((task) => task.id === id);
    newTasks[index].completed = !newTasks[index].completed;
    setTasks([...newTasks]);
  };

  return (
    <div className="App">
      <div className="task-list">
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            id={task.id}
            completeTask={completeTask}
          ></Task>
        ))}
        <AddTask addTask={addTask}></AddTask>
      </div>
    </div>
  );
}

export default App;
