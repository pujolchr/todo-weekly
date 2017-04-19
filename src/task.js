const shortid = require('shortid');
/*
 * A simple js file with the basic functionality of the app
 * author
 *    richard@richardmiddleton.me
 *    pujolchr@gmail.com
 */

/*
 * abstract
 *
 * we got seven set of Tasks, one for each day of the week.
 * We got a extra set of Tasks for the unorganized Tasks
 * We can move Tasks from one set to the other.
 *  ie remove a task from one set
 *     and add the same task in another
 * we can create new Task
 *
 */

/* prototype tasks
const prototypeTask = {
  UID: getUID(),
  text: 'text of the task',
};
*/


function generateUID() {
  return shortid.generate();
}

function removeTask(taskId, day) {
  const newDay = [];
  day.forEach((currentValue) => {
    if (currentValue.UID !== taskId) newDay.push(currentValue);
  });
  return newDay;
}

function addTask(task, day) {
  return day.concat([task]);
}

function createTask(taskText) {
  return {
    UID: generateUID(),
    text: taskText,
  };
}

function duplicateTask(task) {
  return createTask(task.text);
}

function populateList() {
  let day = [];
  for (let i = 0; i < 5; i += 1) {
    day = addTask(createTask(`Task-${i}`), day);
  }
  return day;
}

export default {
  duplicateTask,
  createTask,
  addTask,
  removeTask,
  populateList,
};
