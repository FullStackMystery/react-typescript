import { useState } from 'react';
import './App.css';
import logo from './logo.svg'
import { Task } from './interfaces/Task';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

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
        <div className='row'>
          <div className='col-md-4'>
          <div className='row'>
              <TaskForm></TaskForm>
            </div>
          </div>

          <div className='col-md-8'>
            <div className='row'>
              <TaskList tasks={tasks}></TaskList>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
