import React from 'react';
import PropTypes from 'prop-types';

function AddTaskBtn(props) {
  return (
    <div>
    <button className="control-btn" onClick={() => props.onClick()}>
      <i className="fa fa-plus" aria-hidden="true" />
    </button>
    </div>
  );
}

AddTaskBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddTaskBtn;
