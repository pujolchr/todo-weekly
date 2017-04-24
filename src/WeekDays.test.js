import React from 'react';
import ReactDOM from 'react-dom';
import WeekDays from './WeekDays';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const week = {};
  ReactDOM.render(<WeekDays week={week} />, div);
});
