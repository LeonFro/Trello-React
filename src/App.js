import React, { Component } from 'react';
import ModalGreeting from './containers/ModalGreeting';
import ColumnContainer from './containers/ColumnContainer';
import ColumnInProgress from './containers/ColumnInPropgress';
import ColumnTest from './containers/ColumnTest';
import ColumnDone from './containers/ColumnDone';
import Header from './components/Header';
import './App.css'


export default class App extends Component {
  render() { 
    return (
      <div>
        <ModalGreeting />
        <Header name={this.props.name}/>
        <div className="container">
          <div className="row justify-content-center">
             <ColumnContainer />
              <ColumnInProgress />
             <ColumnTest />
             <ColumnDone /> 
          </div>
        </div>
      </div>
    )
  }
};




