import React, { Component } from 'react';
import ModalGreeting from '../src/components/ModalGreeting';
import Header from '../src/components/Header';
import ModalCard from '../src/components/ModalCard';
import Storage from '../src/components/Storage';
import Column from '../src/components/Colunm';

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
            {/* <Column storage={this.storage} cardModal={this.toggleCardModal}/> */}

            {this.state.modalCardOpen &&
              <ModalCard onClose={this.toggleCardModal} />
            }

          </div>
        </div>
      </React.Fragment>
    )
  }
};
