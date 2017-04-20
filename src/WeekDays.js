import React from 'react';
import PropTypes from 'prop-types';

import TaskList from './TaskList';
import './flex.css';

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
    <div>
      Days of the Week
    <div className="flex bg-grey">
      {WEEK_DAYS.map(day => <TaskList
        onDrop={props.onDrop}
        key={`task-list-${day}`}
        name={day}
        list={props.week[day]}
      />) }
    </div>
    </div>
  );
}
WeekDays.propTypes = {
  week: PropTypes.shape({
    monday: PropTypes.arrayOf(PropTypes.object).isRequired,
    tuesday: PropTypes.arrayOf(PropTypes.object).isRequired,
    wednesday: PropTypes.arrayOf(PropTypes.object).isRequired,
    thursday: PropTypes.arrayOf(PropTypes.object).isRequired,
    friday: PropTypes.arrayOf(PropTypes.object).isRequired,
    saturday: PropTypes.arrayOf(PropTypes.object).isRequired,
    sunday: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};
export default WeekDays;
