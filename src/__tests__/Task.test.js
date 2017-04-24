import React from 'react';
import ReactDOM from 'react-dom';
import Task from '../Task';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const task = { UID:'uid', text:'text of note'};
  ReactDOM.render(<Task task={task} />, div);
});
