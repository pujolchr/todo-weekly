import React from 'react';
import PropTypes from 'prop-types';

import TaskList from './TaskList';

function Pool(props) {
  return <TaskList name="Pool of notes" list={props.list} />;
}

Pool.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Pool;
