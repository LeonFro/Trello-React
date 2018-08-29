import React, { Component } from 'react';
import ModalGreeting from '../src/components/ModalGreeting';
import Header from '../src/components/Header';
import ModalCard from '../src/components/ModalCard';
import Storage from '../src/components/Storage';
import './App.css'


export default class App extends Component {
  storage = new Storage();
  constructor(props) {
    super(props);
    this.state = {
      storage: this.storage,
      modalGreetingOpen: true,
      modalCardOpen: false,
    }
  }


  toggleGreetingModal = () => {
    this.setState(state => ({ modalGreetingOpen: !state.modalGreetingOpen }));
  };

  toggleCardModal = () => {
    this.setState(state => ({ modalCardOpen: !state.modalCardOpen }));
  };

  render() {
    return (
      <React.Fragment>

        {this.state.modalGreetingOpen &&
          <ModalGreeting storage={this.storage} onChange={this.toggleGreetingModal} />
        }

        {/*  <div  onClick={this.toggleGreetingModal}> </div> onClick={this.toggleGreetingModal} onSubmit={this.toggleGreetingModal} onChangeName={this.handleAddName} */}

        <Header storage={this.storage} />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col border border-info rounded">
              <div className="content">
                <div className="header">
                  <h2>{this.storage.TODO.title}</h2>
                </div>
                <hr />
                <div className="list-cards">
                  <div className="list-card-details">
                    <span className="card-name"> #1</span>
                    <button type="button" className="btn btn-secondary btn-sm" disabled><i className="far fa-comment-dots"></i>0</button>
                    <button type="button" className="btn btn-info" onClick={this.toggleCardModal}><i className="fas fa-pencil-alt"></i></button>
                  </div>
                </div>
                <hr />
                <a className="add-card" href="">+ Add card</a>
              </div>
            </div>
            {this.state.modalCardOpen &&
              <ModalCard onClose={this.toggleCardModal} />
            }

          </div>
        </div>
      </React.Fragment>
    )
  }
};
