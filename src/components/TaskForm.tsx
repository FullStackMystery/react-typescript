import React from 'react'

export default function TaskForm() {
  return (
    <div className='card card-body bg-secondary'>
        <h1>
            Add Task
        </h1>
        <form>
            <input type="text" placeholder='Write a title' className='form-control mb-3'></input>
            <textarea name="description" rows={2} placeholder='Write a description' className='form-control mb-3'> </textarea>
            <button className='btn btn-primary'>
                Save
            </button>
        </form>

    </div>
  )
}
