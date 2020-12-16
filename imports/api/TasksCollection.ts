import {Mongo} from 'meteor/mongo'
import Task from '/@types/task.interface'
export const TasksCollection = new Mongo.Collection<Task>('tasks')