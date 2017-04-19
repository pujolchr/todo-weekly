import React from 'react';
import PropTypes from 'prop-types';

function Task(props) {
  return (
    <div id={props.task.UID}>
      {props.task.text}
    </div>
  );
}

Task.propTypes = {
  task: PropTypes.shape({
    UID: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
};

function TaskList(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      {props.list.map(task => <Task key={task.UID} task={task} />)}
    </div>
  );
}

TaskList.propTypes = {
  name: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.object),
};
TaskList.defaultProps = {
  name: '',
  list: [],
};

export default TaskList;
