import React from 'react';
import PropTypes from 'prop-types';

import TaskList from './TaskList';

function Pool(props) {
  return <TaskList 
    width="pool-width"
    onDrop={props.onDrop} name="pool" list={props.list} />;
}

Pool.propTypes = {
  onDrop: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Pool;
