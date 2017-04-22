import React from 'react';
import PropTypes from 'prop-types';


function TaskCtrl(props) {
  return (<div>Task Ctrl</div>);
}
function Task(props) {
  function handleDragStart(e) {
    e.dataTransfer.setData('text', `${props.order}@${props.day}`);
  }

  function handleDragEnd() {
  }
  return (
    <div
      className="task bg-yellow"
      id={`${props.order}@${props.day}`}
      draggable="true"
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <TaskCtrl id={`ctrl@${props.order}@${props.day}`} />
      {props.task.text}
    </div>
  );
}

Task.propTypes = {
  day: PropTypes.string.isRequired,
  order: PropTypes.number.isRequired,
  task: PropTypes.shape({
    UID: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
};

export default Task;
