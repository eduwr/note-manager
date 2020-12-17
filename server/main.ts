import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { TasksCollection } from '/imports/api/TasksCollection';

function insertTask(taskText: string, user: Meteor.User): void {
  TasksCollection.insert({ 
    text: taskText,
    createdAt: new Date(),
    userId: user._id,
    isChecked: false 
  });
}

const SEED_USERNAME = 'meteorite';
const SEED_PASSWORD = 'password';


Meteor.startup(() => {
  if (!Accounts.findUserByUsername(SEED_USERNAME)) {
    Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD
    })
  }

  const user = Accounts.findUserByUsername(SEED_USERNAME)
  // If the Links collection is empty, add some data.
  if (TasksCollection.find().count() === 0 && user) {
    [
      'First Task',
      'Second Task',
      'Third Task',
      'Fourth Task',
      'Fifth Task',
      'Sixth Task',
      'Seventh Task'
    ].forEach((item) => insertTask(item, user))
  }
});

