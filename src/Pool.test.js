import React from 'react';
import ReactDOM from 'react-dom';
import Pool from './Pool';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Pool />, div);
});
