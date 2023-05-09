import React from 'react'
import {Task} from '../interfaces/Task'
import TaskCard from './TaskCard'

interface Props {
    tasks: Task[]
}

export default function TaskList({tasks} : Props) {
  return (
    <div>
        {tasks.map(task => <TaskCard task={task}/>
        )}
    </div>
  )
}
