import React, { useState } from 'react';
import {useTracker} from 'meteor/react-meteor-data';

import {TasksCollection} from '/imports/api/TasksCollection';

import {TaskItem} from './TaskItem'
import { TaskForm } from './TaskForm';
import Task from '/@types/task.interface';
import { Meteor } from 'meteor/meteor';
import { LoginForm } from './LoginForm';


export const App = () => {
  const [ hideCompleted, setHideCompleted ] = useState(false);

  const hideCompletedFilter = { isChecked: { $ne: true } };

  const tasks = useTracker(() => TasksCollection.find(
    hideCompleted ? hideCompletedFilter : {}, {sort: { createdAt: -1 }}
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

  const pendingTasksCount = useTracker(() =>
    TasksCollection.find(hideCompletedFilter).count()
  );

  const pendingTasksTitle = `${
    pendingTasksCount ? ` (${pendingTasksCount})` : ''
  }`;

  const user = useTracker(() => Meteor.user())

  return (
    <div className="app">
      <header>
        <div className="app-bar">
          <div className="app-header">
            <h1>
              📝️ To Do List
              {pendingTasksTitle}
            </h1>
          </div>
        </div>
      </header>

      <div className="main">
        {
          user ? (
            <>
              <TaskForm />
              <div className="filter">
              <button onClick={() => setHideCompleted(!hideCompleted)}>
                {hideCompleted ? 'Show All' : 'Hide Completed'}
              </button>
            </div>
              <ul className="tasks">
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
            </>
          ) : (
            <LoginForm />
          )
        }
      </div>
    </div>
  )
};
