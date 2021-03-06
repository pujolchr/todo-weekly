import React from 'react';
import PropTypes from 'prop-types';

import TaskList from './TaskList';
import TaskListHeader from './TaskListHeader';

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
    <div id="board">
      <div className="flex bg-grey">
        {WEEK_DAYS.map(day => (
          <div key={`list-wrapper-${day}`} >
            <TaskListHeader key={`list-header-${day}`} name={day} />
            <TaskList
              onChange={props.onChange}
              width="days-col"
              onDrop={props.onDrop}
              key={`task-list-${day}`}
              name={day}
              list={props.week[day]}
            />
          </div>)) }
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
