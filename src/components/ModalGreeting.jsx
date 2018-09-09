import React from 'react';
import PropTypes from 'prop-types';
import '../App.css'

export default class ModalGreeting extends React.Component {

  thisInput = () => {
    let name = this.refs.text.value;
    if (name) {
      this.props.changeName(name);
      this.props.onChange()
    }
  };

  render() {
    return (
      <div className="modal" >
        <div className="modal-dialog" >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">How is your name a stranger?</h5>
            </div>
            <div className="modal-body">
              <input type="text"
                className="form-control"
                placeholder="You name..."
                ref="text" required />
              <button type="submit"
                className="btn btn-primary"
                onClick={this.thisInput}>Done</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
ModalGreeting.propTypes = {
  thisInput: PropTypes.func,
};

