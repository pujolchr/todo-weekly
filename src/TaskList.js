import React, { Component } from 'react';
import PropTypes from 'prop-types';

function Task(props) {


  function handleDragStart(e) {
    console.log(`start drag ${props.task.UID}`);
    console.log(`start drag ${e}`);
    e.dataTransfer.setData('text', `${props.order}@${props.day}`);
  }

  function handleDragEnd() {
    console.log(`stop drag ${props.task}`);
  }
    return (
      <div
        className="task bg-yellow"
        id={`${props.order}@${props.day}`}
        draggable="true"
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
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
