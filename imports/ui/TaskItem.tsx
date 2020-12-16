import React from 'react';
import Task from '/@types/task.interface';

interface Props {
    task: Task
}

export const TaskItem = ({task}: Props) => {
    return <li>{task.text}</li>
}