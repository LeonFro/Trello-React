import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import ReactModal from "react-modal";

export default class ModalGreeting extends React.Component {
  state = {
    modalGreetingsIsOpen: true
  };

  componentWillMount() {
    ReactModal.setAppElement("#root");
  }
  componentWillUnmount() {
    window.removeEventListener("keyup", this.handleKeyUp, false);
  }
  componentDidMount() {
    window.addEventListener("keyup", this.handleKeyUp, false);
  }

  handleKeyUp = e => {
    const keys = {
      13: () => {
        e.preventDefault();
        this.handleClick();
        window.removeEventListener("keyup", this.handleKeyUp, false);
      }
    };
    if (keys[e.keyCode]) {
      keys[e.keyCode]();
    }
  };

  handleClick = () => {
    const { setName } = this.props;
    let name = this.refs.name.value;
    setName(name);
    this.setState({ modalGreetingsIsOpen: false });
    window.removeEventListener("keyup", this.handleKeyUp, false);
  };

  render() {
    return (
      <ReactModal isOpen={this.state.modalGreetingsIsOpen} style={customStyles}>
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
      </ReactModal>
    );
  }
}

ReactDOM.render(<ModalGreeting />, document.getElementById("root"));

ModalGreeting.propTypes = {
  setName: PropTypes.func.isRequired
};

const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(117, 117, 117, 0.75)"
  },
  content: {
    border: 0,
    background: "rgba(117, 117, 117, 0)"
  }
};
