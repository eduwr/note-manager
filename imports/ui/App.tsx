import React from 'react';
import {useTracker} from 'meteor/react-meteor-data';

import {TasksCollection} from '/imports/api/TasksCollection';

import {TaskItem} from './TaskItem'
import { TaskForm } from './TaskForm';
import Task from '/@types/task.interface';


export const App = () =>{ 
  const tasks = useTracker(() => TasksCollection.find(
    {}, {sort: { createdAt: -1 }}
    ).fetch())

  const toggleChecked = ({_id, isChecked}: Task) => {
    TasksCollection.update(_id, {
      $set: {
        isChecked: !isChecked
      }
    })
  }

  const deleteTask = ({_id}: Task) => {
    TasksCollection.remove(_id);
  }

  return (
    <div>
      <h1>My Tasks</h1>
      <TaskForm />
      <ul>
        {tasks.map(task => (
          <TaskItem
            key={task._id}
            task={task}
            onCheckboxClick={toggleChecked}
            onDeleteClick={deleteTask}
            />
            )
          )
        }
      </ul>
    </div>
  )
};
