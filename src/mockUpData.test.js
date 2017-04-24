import React from 'react';
import ReactDOM from 'react-dom';
import mockUpData from './mockUpData';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<mockUpData />, div);
});
