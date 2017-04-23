import React from 'react';
import PropTypes from 'prop-types';

function TaskListHeader(props) {
  return (
    <h3 className="days-heading" style={{ textTransform: 'capitalize' }}>{props.name}</h3>
  );
}
TaskListHeader.propTypes = {
  name: PropTypes.string.isRequired,
};
export default TaskListHeader;
