import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.task;
    this.handleDragStart = this.handleDragStart.bind(this);
  }


  handleDragStart(e) {
    console.log(`start drag ${this.state.UID}`);
    console.log(`start drag ${e}`);
    e.dataTransfer.setData('text', `${this.props.order}@${this.props.day}`);
  }

  handleDragEnd() {
    console.log(`stop drag ${this}`);
  }
  render() {
    return (
      <div
        className="task bg-yellow"
        id={`${this.props.order}@${this.props.day}`}
        draggable="true"
        onDragStart={this.handleDragStart}
        onDragEnd={this.handleDragEnd}
      >
        {this.props.task.text}
      </div>
    );
  }
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
      <h2>{props.name}</h2>
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
