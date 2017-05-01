import React from 'react';
import ReactDOM from 'react-dom';
import TaskList from '../TaskList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TaskList
    width={'0'}
    onDrop={() => {}}
  />, div);
});
