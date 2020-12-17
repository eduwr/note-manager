import React, {useState} from 'react';

export const TaskForm = (): JSX.Element => {
    const [text, setText] = useState("")

    return (
        <form action="" className="task-form">
            <input 
                type="text"
                placeholder="Type to add new tasks"
            ></input>
            <button type="submit">Add Task</button>
        </form>
    )
}