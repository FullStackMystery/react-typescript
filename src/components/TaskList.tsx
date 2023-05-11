import React from 'react'
import {Task_interface} from '../interfaces/Task'
import TaskCard from './TaskCard'

interface interface_Props {
    property_tasks: Task_interface[]
}

export default function TaskList({property_tasks} : interface_Props) {
  return (
    <div style={{display:"flex", flexDirection:"column"}}>
        {property_tasks.map(task => (
            <div>
                <TaskCard property_one_task={task}/>
            </div>
        )
        )}
    </div>
  )
}
