import React from 'react';

import '../App.css'

export default class ModalGreeting extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
    this.handleChangeName=this.handleChangeName.bind(this);
    this.thisInput = this.thisInput.bind(this);
  };

  handleChangeName (e){
    e.preventDefault();
    let name = this.state.name;
    if (name) {
      this.props.changeName(name);
      this.props.onChange()
      this.setState({ name: '' })
    }
  };

  thisInput(e){
    let name = e.target.value;
    this.setState({ name })
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
              <form className="form-inline" onSubmit={this.handleChangeName}>
                <input type="text" className="form-control" id="input" placeholder="You name..."
                  value={this.state.name} onChange={this.thisInput} required />
                <button type="submit" className="btn btn-primary">Done</button>
              </form>
            </div>
            <div className="modal-footer">
            </div>
          </div>
        </div>
      </div>
    );
  }
}
