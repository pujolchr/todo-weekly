import React from 'react';
import PropTypes from 'prop-types';

import Task from './Task';

function TaskList(props) {
  return (
    <div
      className={props.width}
      id={props.name}
      onDragOver={e => e.preventDefault()}
      onDrop={(e) => {
        e.preventDefault();
        props.onDrop(e.dataTransfer.getData('text'), props.name);
      }}
    >
      {props.list.map((task, idx) => <Task
        day={props.name}
        order={idx}
        key={task.UID}
        task={task}
      />)}
    </div>
  );
}

TaskList.propTypes = {
  width: PropTypes.string.isRequired,
  onDrop: PropTypes.func.isRequired,
  name: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.object),
};
TaskList.defaultProps = {
  name: '',
  list: [],
};

export default TaskList;
