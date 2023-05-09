import { useState } from 'react';
import './App.css';

let a: string = '1';

interface Props {
  title: string
}

interface Task {
  id: number,
  title: string,
  description: string,
  completed: boolean
}

function App({title}: Props) {

  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Primero",
      description: "This is a description",
      completed: false
    }
  ]);

  return (
    <div className="App">
      <h1>{title}</h1>
      {tasks.map(task =>(
        <div>{task.title}</div>
      ))}
    </div>
  );
}

export default App;
