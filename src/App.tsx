import { useState } from 'react';
import './App.css';
import logo from './logo.svg'
import { Task } from './interfaces/Task';
import TaskList from './components/TaskList';

let a: string = '1';

interface Props {
  title?: string
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
    <div className="bg-dark" style={{height:"100vh"}}>
      <nav className="navbar navbar-dark bg-ternary">
        <div className='container flex'></div>
          <a href='/'>
            <img src={logo} alt="react logo" style={{width:"4rem"}}></img>
            {title && <h1>{title}</h1>}
          </a>

      </nav>

      <main className='container p-2'>
        <TaskList tasks={tasks}></TaskList>
      </main>
    </div>
  );
}

export default App;
