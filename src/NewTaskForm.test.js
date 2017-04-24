import React from 'react';
import ReactDOM from 'react-dom';
import NewTaskForm from './NewTaskForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NewTaskForm />, div);
});
