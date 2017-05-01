import React from 'react';
import ReactDOM from 'react-dom';
import WeekDays from '../WeekDays';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const week = {
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: [],

  };
  ReactDOM.render(<WeekDays
    onDrop={() => {}}
    week={week}
  />, div);
});
