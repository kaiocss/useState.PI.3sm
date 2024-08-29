import React, { useState } from 'react';
import InputTask from './InputTask';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, { id: tasks.length + 1, description: newTask, completed: false }]);
  };
  const handleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleTaskRemoval = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
};

  return (
    <div className="App">
      <h1>Lista de Tarefas</h1>
      <InputTask addTask={addTask} />
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.description}
        
            <button onClick={() => handleTaskCompletion(task.id)}>
              {task.completed ? 'Desmarcar Concluída' : 'Marcar como Concluída'}
            </button>;


           
            <button onClick={() => handleTaskRemoval(task.id)}>Remover</button>;
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;