import React from 'react';
import PropTypes from 'prop-types';

import TaskList from './TaskList';

const WEEK_DAYS = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

function WeekDays(props) {
  return (
    <div id="board">
    <div className="flex bg-grey">
      {WEEK_DAYS.map(day => <TaskList
        width="days-col"
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
