import React from 'react';
import ReactDOM from 'react-dom';
import AddTaskBtn from '../AddTaskBtn';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddTaskBtn onClick={() => console.log('test')} />, div);
});
