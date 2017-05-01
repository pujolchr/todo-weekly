import React from 'react';
import ReactDOM from 'react-dom';
import Task from '../Task';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const task = { UID: 'uid', text: 'text of note' };
  ReactDOM.render(<Task
    onChange={() => 3}
    day={'monday'}
    order={1}
    task={task}
  />, div);
});
