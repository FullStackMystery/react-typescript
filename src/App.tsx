import { useState } from 'react';
import logo from './logo.svg'
import { Task_interface } from './interfaces/Task';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

let a: string = '1';

interface interface_Props {
  title?: string
}

function App({title}: interface_Props) {

  const [tasks, setTasks] = useState<Task_interface[]>([
    {
      id: 1,
      title: "Task Card",
      description: "This is a description",
      completed: false
    },
    {
      id: 2,
      title: "Task Card 2",
      description: "This is a description",
      completed: false
    },
    {
      id: 3,
      title: "Task Card 3",
      description: "This is a description",
      completed: false
    }
  ]);

  return (
    <div className="bg-dark" style={{backgroundColor:"#333"}}>
      <nav className="navbar navbar-dark bg-ternary">
        <div className='container flex'>
          <a href='/'>
            <div style={{display:"flex", flexDirection:"row"}}>
              <div>
                <img src={logo} alt="react logo" style={{width:"4rem"}}></img>
              </div>
              <div>
                <h3>{title}</h3>
              </div>
            </div>
          </a>
        </div>
      </nav>

      <main className='container' style={{display:"flex", flexDirection:"row"}}>
            <div style={{minWidth:"30vw", display:"flex"}}>
              <TaskForm></TaskForm>
            </div>
            <div style={{minWidth:"50vw", display:"flex"}}>
              <TaskList property_tasks={tasks}></TaskList>
            </div>            

      </main>
    </div>
  );
}

export default App;
