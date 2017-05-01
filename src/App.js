import React, { Component } from 'react';

import Pool from './Pool';
import WeekDays from './WeekDays';
// for debug ans dev
import MOCKUP_DATA from './mockUpData';
import { removeTask, addTask, createTask } from './taskFunction';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pool: MOCKUP_DATA.pool,
      monday: MOCKUP_DATA.monday,
      tuesday: MOCKUP_DATA.tuesday,
      wednesday: MOCKUP_DATA.wednesday,
      thursday: MOCKUP_DATA.thursday,
      friday: MOCKUP_DATA.friday,
      saturday: MOCKUP_DATA.saturday,
      sunday: MOCKUP_DATA.sunday,
    };
    this.moveTask = this.moveTask.bind(this);
    this.newTask = this.newTask.bind(this);
    this.editTask = this.editTask.bind(this);
  }
  newTask() {
    let newPool = this.state.pool;
    const newTask = createTask('');
    newPool = addTask(newTask, newPool);
    this.setState({
      pool: newPool,
    });
  }

  editTask(text, idx, day) {
    const newList = [...this.state[day]];
    const task = newList[idx];
    task.text = text;
    this.setState({
      [day]: newList,
    });
  }
  moveTask(origin, dest) {
    const [idx, list] = origin.split('@');
    const task = this.state[list][idx];
    const newOriginList = removeTask(task.UID, this.state[list]);
    const newDest = addTask(task, this.state[dest]);
    this.setState({
      [list]: newOriginList,
      [dest]: newDest,
    });
  }
  render() {
    return (
      <div className="flex App">
        <Pool
          onChange={this.editTask}
          onClick={this.newTask}
          onDrop={this.moveTask}
          list={this.state.pool}
        />
        <WeekDays
          onChange={this.editTask}
          onDrop={this.moveTask}
          week={this.state}
        />
      </div>
    );
  }
}
export default App;
