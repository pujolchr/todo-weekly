import React, { Component } from 'react';
import './App.css';
import Pool from './Pool';
import WeekDays from './WeekDays';
// for debug ans dev
import MOCKUP_DATA from './mockUpData';
import taskFunction from './task';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pool: MOCKUP_DATA.pool,
      weekDays: MOCKUP_DATA.weekDays,
    };
    this.moveTask = this.moveTask.bind(this);
  }
  moveTask(origin, dest) {
    let newPool = [...this.state.pool];
    let task;
    console.log(`move ${origin} to ${dest}`);
    const [idx, list] = origin.split('@');
    console.log(idx, list);
    if (list === 'Pool') {
      task = this.state.pool[idx];
      newPool = taskFunction.removeTask(task.UID, this.state.pool);

    } else {
      task = this.state.weekDays[list][idx];
    }
    console.log(`task ${task.UID} said ${task.text}`);
    this.setState({ pool: newPool });
  }
  render() {
    return (
      <div className="flex App">
        <Pool onDrop={this.moveTask} list={this.state.pool} />
        <WeekDays onDrop={this.moveTask} week={this.state.weekDays} />
      </div>
    );
  }
}
export default App;
