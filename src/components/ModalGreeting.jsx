import React from 'react';
import PropTypes from 'prop-types';

export default class ModalGreeting extends React.Component {
  state = {
    modalGreetingOpen: true,
  }

  thisInput = () => {
    let name = this.refs.text.value;
    if (!name.trim()) {
      return;
    };
    this.props.setName(name);
    this.setState({ modalGreetingOpen: false })
  };

  isOpen() {
    return (
      <div className="modal" >
        <div className="modal-dialog" >
          <div className="modal-content ">
            <div className="modal-header row justify-content-md-center">
              <h5 className="modal-title">How is your name a stranger?</h5>
            </div>
            <div className="modal-body">
              <div className="container">
                <div className="row justify-content-md-center">
                  <div className="col-md-8">
                    <input type="text"
                      className="form-control"
                      placeholder="You name..."
                      ref="text" required />
                  </div>
                  <button type="submit"
                    className="btn btn-primary col-md-2"
                    onClick={this.thisInput}>Done</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return this.state.modalGreetingOpen ? this.isOpen() : null;
  };

};
ModalGreeting.propTypes = {
  thisInput: PropTypes.func,
};

