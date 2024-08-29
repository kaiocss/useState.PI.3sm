import React, { useState } from 'react';

const InputTask = ({ addTask }) => {
    const [task, setTask] = useState('');

    const handleChange = (event) => {
        setTask(event.target.value);
    };
    

    const handleAddTask = () => {
        if (task.trim() !== '') {
            addTask(task);
            setTask('');
        }
    };

    return (
        <div>
            <input type="text" value={task} onChange={handleChange} />
            <button onClick={handleAddTask}>Adicionar Tarefa</button>
        </div>
    
    );
};


export default InputTask;