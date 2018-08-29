import React from 'react';
import ReactDOM from 'react-dom';
import {ModalGreetService} from '../services/ModalGreetService';
import '../App.css'

export default class ModalGreeting extends React.Component {
  constructor(props){
    super(props)
    this.modalGreetService = new ModalGreetService(props.storage)
    this.state={
     name:''
    }
     this.changeName=this.changeName.bind(this);
  };

   changeName=(e)=>{
    e.preventDefault();
    let name = this.state.name;
     if(name){ 
       this.modalGreetService.changeName(name); 
       this.props.onChange()
       this.setState({name:''})
    }
   };

     thisInput=(e)=>{
    let name = e.target.value;
    this.setState({name})
   };


  componentWillMount() {
    this.root = document.createElement('div');
    document.body.appendChild(this.root);
  }

  componentWillUnmount() {
    document.body.removeChild(this.root);
  }

  render() {
    return ReactDOM.createPortal(
      <div className="modal" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">How is your name a stranger?</h5>
            </div>
            <div className="modal-body">
             <form className="form-inline" onSubmit={this.changeName}>{/*  */}
                <input type="text" className="form-control" id="input" placeholder="You name..." 
                value={this.state.name} onChange={this.thisInput}/>    {/*  */}
              <button type="submit" className="btn btn-primary">Done</button>
            </form>
            </div>
            <div className="modal-footer">
            </div>
          </div>
        </div>
      </div>,
      this.root
    );
  }
}

