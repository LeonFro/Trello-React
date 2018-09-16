import React, { Component } from 'react';
import ModalGreeting from '../src/components/ModalGreeting';
import Header from '../src/components/Header';
import ColumnContainer from '../src/containers/ColumnContainer';
import PropTypes from 'prop-types';
import './App.css'


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  };


  toggleGreetingModal = () => {
    this.setState(state => ({ modalGreetingOpen: !state.modalGreetingOpen }));
  };

  render() {
    const { storage } = this.store;
    return (
      <div>
        {this.state.modalGreetingOpen &&
          <ModalGreeting storage={storage}
            onChange={this.toggleGreetingModal}
            changeName={this.addName} />
        }
        <Header storage={storage} />
        <div className="container">
          <div className="row justify-content-center">
             <ColumnContainer storage={storage} />
          </div>
        </div>
      </div>
    )
  }
};

App.propTypes = {
  addName: PropTypes.func,
  storage: PropTypes.object.isRequired,
  modalGreetingOpen: PropTypes.bool,
  modalCardOpen: PropTypes.bool,

}
App.defaultProps = {
  modalGreetingOpen: true,
  modalCardOpen: false,
};
