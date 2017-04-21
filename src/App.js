import React, { Component } from 'react';

import './App.css';
import Pool from './Pool';
import AddTaskBtn from './AddTaskBtn';
import WeekDays from './WeekDays';
// for debug ans dev
import MOCKUP_DATA from './mockUpData';
import taskFunction from './taskFunction';

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
  }
  newTask() {
    let newPool = this.state.pool;
    const newTask = taskFunction.createTask("new Task");
    newPool =  taskFunction.addTask(newTask, newPool);
    this.setState({
        pool: newPool,
    });
  }
  moveTask(origin, dest) {
    const [idx, list] = origin.split('@');
    const task = this.state[list][idx];
    const newOriginList = taskFunction.removeTask(task.UID, this.state[list]);
    const newDest =  taskFunction.addTask(task, this.state[dest]);

    this.setState({
      [list]: newOriginList,
      [dest]: newDest
    });
  }

  render() {
    return (
      <div>
      <AddTaskBtn  onClick={this.newTask}/>
      <div className="flex App">
        <Pool onDrop={this.moveTask} list={this.state.pool} />
        <WeekDays onDrop={this.moveTask} week={this.state} />
      </div>
      </div>
    );
  }
}
export default App;
