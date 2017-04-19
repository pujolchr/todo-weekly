import React from 'react';
import TaskList from './TaskList'

const WEEK_DAYS = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
];

function WeekDays(props) {
  return (
    <span>
      Days of the Week
      {WEEK_DAYS.map(day => <TaskList
        key={`task-list-${day}`}
        name={day}
        list={props.week[day]}
      />) }
    </span>
  );
}
export default WeekDays;
