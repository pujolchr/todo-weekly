import React from 'react';
import PropTypes from 'prop-types';

import TaskList from './TaskList';
import AddTaskBtn from './AddTaskBtn';

function Pool(props) {
  return (
    <div>
      <div>
        <AddTaskBtn onClick={props.onClick} />
      </div>
      <TaskList
        width="pool-col"
        onDrop={props.onDrop} name="pool" list={props.list}
      />
    </div>
  );
}

Pool.propTypes = {
  onClick: PropTypes.func.isRequired,
  onDrop: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Pool;
