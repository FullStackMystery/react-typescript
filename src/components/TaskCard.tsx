import React from 'react'
import { Task_interface } from '../interfaces/Task'

interface interface_Props {
    property_one_task: Task_interface
}

export default function TaskCard( {property_one_task}: interface_Props) {
  return (
    <div className='card card-body' style={{margin:"4px", maxWidth:"500px", minWidth:"500px"}}>
        <h2>
            {property_one_task.title}
        </h2>
        <p>{property_one_task.id}</p>
        <p>{property_one_task.title}</p>
        <p>{property_one_task.description}</p>
        <p>{property_one_task.completed}</p>
        <button className='btn btn-danger'>
            Delete
        </button>
    </div>
  )
}
