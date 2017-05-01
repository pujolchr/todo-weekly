import React from 'react';
import ReactDOM from 'react-dom';
import Pool from '../Pool';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Pool
    onChange={() => 2}
    onClick={() => 2}
    onDrop={() => 2}
    list={[]}
    />, div);
});
