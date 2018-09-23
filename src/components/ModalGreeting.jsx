import React from 'react';
import PropTypes from 'prop-types';
//import InputNameContainer from '../containers/InputNameContainre'
import '../App.css'

export default class ModalGreeting extends React.Component {
  constructor(props){
    super(props)
    this.state={
      modalGreetingOpen:true,
    }
  };

  thisInput = () => {
    let name = this.refs.text.value;
    if (name) {
      this.props.setName(name);
      this.setState({modalGreetingOpen:false})
    }
  };

  isOpen(){
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
  };

    render() {
      return this.state.modalGreetingOpen ? this.isOpen():null;
    };

};
ModalGreeting.propTypes = {
  thisInput: PropTypes.func,
};

