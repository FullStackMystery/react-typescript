import { ChangeEvent, useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'

export default function TaskForm() {

    const [task, setTask] = useState({
        title: '',
        description: ''
    });

    const handleInputChange = ({
        target: {name, value}
    }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        console.log(name);
        console.log(value);
    }

    return (
        <div className='card card-body bg-secondary' style={{margin:"4px"}}>
            <h3>
                Add Task
            </h3>
            <form>
                <input 
                    type="text" 
                    name='title'
                    placeholder='Write a title' 
                    className='form-control mb-3'
                    onChange={handleInputChange}
                ></input>
                <textarea 
                    name="description" 
                    rows={2} 
                    placeholder='Write a description' 
                    className='form-control mb-3'
                    onChange={handleInputChange}
                > </textarea>
                <button className='btn btn-primary'>
                    <AiOutlinePlus></AiOutlinePlus>
                    Save
                </button>
            </form>

        </div>
    )
}
