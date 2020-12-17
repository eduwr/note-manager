import React from 'react';
import {useTracker} from 'meteor/react-meteor-data';

import Task from '/@types/task.interface';

import {TasksCollection} from '/imports/api/TasksCollection';

import {TaskItem} from './TaskItem'


export const App = () =>{ 
  const tasks = useTracker(() => TasksCollection.find({}).fetch())
  
  return (
    <div>
      <h1>My Tasks</h1>
      <ul>
        {tasks.map(task => <TaskItem key={task._id} task={task}/>)}
      </ul>
    </div>
  )
};
