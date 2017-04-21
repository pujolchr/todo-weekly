import React from 'react';
import PropTypes from 'prop-types';

import Task from './Task';

function TaskList(props) {
  return (
    <div
      id={props.name}
      onDragOver={e => e.preventDefault()}
      onDrop={(e) => {
        e.preventDefault();
        console.log(`dopped on ${props.name}`);
        props.onDrop(e.dataTransfer.getData('text'), props.name);
        console.log(`dopped on ${props.name}`);
      }
      }
    >
      <span>{props.name}</span>
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
  onDrop: PropTypes.func.isRequired,
  name: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.object),
};
TaskList.defaultProps = {
  name: '',
  list: [],
};

export default TaskList;
