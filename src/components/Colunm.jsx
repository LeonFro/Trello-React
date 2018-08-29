import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css';

export default class Colunm extends React.Component{
constructor(props){
    super(props);
    this.state={

    }
};

render(){
    return(
         <div className="col border border-info rounded">
              <div className="content">
                <div className="header">
                   <h2>{this.props.storage}</h2> {/* */}
                </div>
                <hr />
                <div className="list-cards">
                  <div className="list-card-details">
                    <span className="card-name"> #1</span>
                    <button type="button" className="btn btn-secondary btn-sm" disabled><i className="far fa-comment-dots"></i>0</button>
                    <button type="button" className="btn btn-info" onClick={this.cardModal}><i className="fas fa-pencil-alt"></i></button>
                  </div>
                </div>
                <hr />
                <a className="add-card" href="">+ Add card</a>
              </div>
            </div>
    )
}
};