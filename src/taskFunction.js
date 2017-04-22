const shortid = require('shortid');
/*
 * A simple js file with the basic functionality of the app
 * author
 *    richard@richardmiddleton.me
 *    pujolchr@gmail.com
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
  return day.concat(task);
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

function populateList(number) {
  let n = number;
  if (n === undefined) n = 1;
  let day = [];
  for (let i = 0; i < n; i += 1) {
    day = addTask(createTask(`Task-${i}-${generateUID()}`), day);
  }
  return day;
}

export {
  duplicateTask,
  createTask,
  addTask,
  removeTask,
  populateList,
};
