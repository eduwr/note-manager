import React from 'react';
import Task from '/@types/task.interface';

interface Props {
    task: Task;
    onCheckboxClick: (task: Task) => void;
    onDeleteClick: (task: Task) => void;
}

export const TaskItem = ({task, onCheckboxClick, onDeleteClick}: Props) => {
    return (
        <li>
            <input 
                type="checkbox"
                checked={!!task.isChecked}
                onClick={() => onCheckboxClick(task)}
                readOnly
            />
            <span>{task.text}</span>
            <button onClick={() => onDeleteClick(task)}>&times;</button>
        </li>
    )
}