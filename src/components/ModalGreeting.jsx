import React from 'react';
import PropTypes from 'prop-types';

const ModalGreeting = ({ setName, modalGreetingOpen }) => {
  let input;
  return (
    modalGreetingOpen ? <div className="modal">
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
                    ref={text => (input = text)} required />
                </div>
                <button type="submit"
                  className="btn btn-primary col-md-2"
                  onClick={() => {
                    let name = input.value;
                    setName(name, !modalGreetingOpen);
                  }}>Done</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> : null
  );
};
export default ModalGreeting;
ModalGreeting.propTypes = {
  setName: PropTypes.func,
};

