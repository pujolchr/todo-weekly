import React, { Component } from 'react';
import './App.css';
import Pool from './Pool';
import WeekDays from './WeekDays';
// for debug ans dev
import MOCKUP_DATA from './mockUpData';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pool: MOCKUP_DATA.pool,
      weekDays: MOCKUP_DATA.weekDays,
    };
  }
  render() {
    return (
      <div className="App">
        <Pool list={this.state.pool} />
        <WeekDays week={this.state.weekDays} />
      </div>
    );
  }
}
export default App;
