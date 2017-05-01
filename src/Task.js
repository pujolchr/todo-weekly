import React from 'react';
import PropTypes from 'prop-types';


function Task(props) {
  return (
    <div
      className="task bg-yellow"
      id={`${props.order}@${props.day}`}
      draggable="true"
      onDragStart={(e) => {
        e.dataTransfer.setData('text', `${props.order}@${props.day}`);
      }}
    >
      <textarea
        defaultValue={props.task.text}
        onChange={(e) => {
          props.onChange(e.target.value, props.order, props.day);
        }}
      />
    </div>
  );
}

Task.propTypes = {
  onChange: PropTypes.func.isRequired,
  day: PropTypes.string.isRequired,
  order: PropTypes.number.isRequired,
  task: PropTypes.shape({
    UID: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
};

export default Task;
