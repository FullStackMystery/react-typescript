import React from 'react'
import { Task } from '../interfaces/Task'

interface Props {
    task: Task
}

export default function TaskCard( {task}: Props) {
  return (
    <div className='card card-body'>
        <h2>
            {task.title}
        </h2>
        <p>{task.id}</p>
        <p>{task.title}</p>
        <p>{task.description}</p>
        <p>{task.completed}</p>
        <button className='btn btn-danger'>
            Delete
        </button>
    </div>
  )
}
