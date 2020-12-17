import React, {useState, ChangeEvent} from 'react';
import { TasksCollection } from '../api/TasksCollection';

export const TaskForm = (): JSX.Element => {
    const [text, setText] = useState("")

    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!text) {
            alert("Insira um texto")
            return;
        }

        TasksCollection.insert({
            text: text.trim(),
            createdAt: new Date(),
            isChecked: false,
        })

        setText("")
    }

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Type to add new tasks"
                value={text}
                onChange={e => setText(e.target.value)}
            ></input>
            <button type="submit">Add Task</button>
        </form>
    )
}