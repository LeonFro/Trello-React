import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ModalGreeting from './containers/ModalGreeting';
import ColumnContainer from './containers/ColumnContainer';
import ColumnInProgress from './containers/ColumnInPropgress';
import ColumnTest from './containers/ColumnTest';
import ColumnDone from './containers/ColumnDone';
import Header from './components/Header';
import './App.css'

class App extends Component {
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

const mapStateToProps = state => {
  return {
    name: state.name.name,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      //actions
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);




