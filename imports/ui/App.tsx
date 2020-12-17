import React from 'react';
import {useTracker} from 'meteor/react-meteor-data';

import {TasksCollection} from '/imports/api/TasksCollection';

import {TaskItem} from './TaskItem'
import { TaskForm } from './TaskForm';


export const App = () =>{ 
  const tasks = useTracker(() => TasksCollection.find(
    {}, {sort: { createdAt: -1 }}
    ).fetch())

  return (
    <div>
      <h1>My Tasks</h1>
      <TaskForm></TaskForm>
      <ul>
        {tasks.map(task => <TaskItem key={task._id} task={task}/>)}
      </ul>
    </div>
  )
};
