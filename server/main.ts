import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { TasksCollection } from '/imports/api/TasksCollection';

function insertTask(taskText: string, createdAt: Date): void {
  TasksCollection.insert({ text: taskText, createdAt, isChecked: false });
}

const SEED_USERNAME = 'meteorite';
const SEED_PASSWORD = 'password';


Meteor.startup(() => {
  // If the Links collection is empty, add some data.
  if (TasksCollection.find().count() === 0) {
    [
      'First Task',
      'Second Task',
      'Third Task',
      'Fourth Task',
      'Fifth Task',
      'Sixth Task',
      'Seventh Task'
    ].forEach((item) => insertTask(item, new Date()))
  }

  if (!Accounts.findUserByUsername(SEED_USERNAME)) {
    Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD
    })
  }
});

