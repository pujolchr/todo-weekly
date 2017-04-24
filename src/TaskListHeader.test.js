import React from 'react';
import ReactDOM from 'react-dom';
import TaskListHeader from './TaskListHeader';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TaskListHeader />, div);
});
