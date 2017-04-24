import shortid from 'shortid';
import {
  duplicateTask,
  populateList,
  removeTask,
  createTask,
  addTask,
} from '../taskFunction';

/* eslint no-undef: 0 */  // --> OFF

test('create new  Task', () => {
  const text = 'alskjSLKJLJDFlk lkøjlkj 54452';
  expect(createTask(text)).toBeDefined();
  expect(createTask(text).UID).toBeDefined();
  expect(createTask(text).text).toBe(text);
  expect(shortid.isValid(createTask(text).UID)).toBeTruthy();
});

test('add task to list', () => {
  let day = [];
  const task = createTask('test Task');
  expect(addTask(task, day).length).toBe(1);
  expect(addTask(task, day)).toContain(task);
  day = [1, 2, 3, 4, 5, 6];
  expect(addTask(task, day).length).toBe(7);
  expect(addTask(task, day)).toContain(task);
});

it('remove task from list', () => {
  const day = populateList(3);
  const task = day[0];
  expect(removeTask(task.UID, day).length).toBe(2);
  expect(removeTask(task.UID, day)).not.toContain(task);
});

it('duplicate task', () => {
  const task = createTask(shortid.generate());
  expect(duplicateTask(task).text).toBeDefined();
  expect(duplicateTask(task).text).toBe(task.text);
  expect(duplicateTask(task).UID).toBeDefined();
  expect(duplicateTask(task).text).not.toBe(task.UID);
});
