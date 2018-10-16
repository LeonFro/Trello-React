import React from 'react';
import PropTypes from 'prop-types';
import ModalWindow from './Modal';

export default class ModalGreeting extends React.Component {
  state = {
    modalGreetingsIsOpen: true
  };

  handleClick = () => {
    const { setName } = this.props;
    let name = this.refs.name.value;
    setName(name);
    this.setState({ modalGreetingsIsOpen: false });
    window.removeEventListener('keyup', this.handleKeyUp, false);
  };

  render() {
    return (
      <ModalWindow onClose={this.state.modalGreetingsIsOpen} handleClick={()=>this.handleClick()}>
        <div
          className="modal"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content ">
              <div className="modal-header  titl row justify-content-md-center">
                <h5 className="modal-title">How is your name a stranger?</h5>
              </div>
              <div className="modal-body">
                <div className="container">
                  <div className="row justify-content-md-center">
                    <div className="col-md-8">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="You name..."
                        ref="name"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary col-md-2"
                      onClick={this.handleClick}
                    >
                      Done
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ModalWindow>
    );
  }
}

ModalGreeting.propTypes = {
  setName: PropTypes.func.isRequired,
  modalGreetingsIsOpen: PropTypes.bool,
  name: PropTypes.string,
  handleClick: PropTypes.func,
};

