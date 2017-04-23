import React from 'react';
import PropTypes from 'prop-types';


function NewTaskForm(props) {
  return (
    <div>
      <div id="modal" className="modal">
        <button className="close-button" onClick={props.onClick}>
          <img src="assets/close.svg" alt="close" />
        </button>

        <div id="modal-bg" className="modal-bg" />
        <div className="modal-main">
          <input type="textarea" defaultValue="A new Task" />
          <button onClick={props.onClick}> Add a new Task </button>
        </div>
      </div>
    </div>
  );
}
NewTaskForm.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default NewTaskForm;
