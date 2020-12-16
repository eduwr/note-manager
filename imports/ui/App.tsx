import React from 'react';
import Task from '/@types/task.interface';
import {TaskItem} from './TaskItem'

const tasks: Task[] = [
  {_id: 1, text: 'First Task'},
  {_id: 2, text: 'Second Task'},
  {_id: 3, text: 'Third Task'},
]

export const App = () => (
  <div>
    <h1>My Tasks</h1>
    <ul>
      {tasks.map(task => <TaskItem key={task._id} task={task}/>)}
    </ul>
  </div>
);
