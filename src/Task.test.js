import React from 'react';
import ReactDOM from 'react-dom';
import Task from './Task';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const text = 'text of note';
  ReactDOM.render(
    <Task text={text} day="monday" task={{}} order={1} />,
    div);
});
