import React from 'react';
import '../App.css'

export default class ModalCard extends React.Component {
    constructor(props){
        super(props)
        this.state={

        }
        this.handleKeyUp = this.handleKeyUp.bind(this);
      
    }

    componentDidMount() {
        window.addEventListener("keyup", this.handleKeyUp, false);
     
      }

      componentWillUnmount() {
        window.removeEventListener("keyup", this.handleKeyUp, false);
       
      }

      handleKeyUp(e) {
        const { onCloseRequest } = this.props;
        const keys = {
          27: () => {
            e.preventDefault();
            onCloseRequest();
            window.removeEventListener("keyup", this.handleKeyUp, false);
          }
        };
        if (keys[e.keyCode]) {
          keys[e.keyCode]();
        }
      };


    render() {
        return (
            <div className="modal" tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Name card</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.props.onClose}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <h5 className="modal-title">Description</h5>
                            <p>TEXT + Text area</p>
                           
                            <div className="form-group">
                                <label htmlFor="">Add comment</label>
                                <textarea name="form-control" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                <button type="button" className="btn btn-primary" onClick={this.props.onClose}>Save</button>
                            </div>
                            <div className="comment">
                            <h5 className="modal-title">{this.props.storage.name}</h5>
                            <div className="text-comment">Text comment</div>
                               <a href="">Delete</a> <a href="">Edit</a>
                            </div>
                        </div>
                        
                        <div className="modal-footer">
                        <button type="button" className="btn btn-danger">Delete card</button>  
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}