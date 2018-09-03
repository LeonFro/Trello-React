import React, { Component } from 'react';
import ModalGreeting from '../src/components/ModalGreeting';
import Header from '../src/components/Header';
import ModalCard from '../src/components/ModalCard';
import Storage from '../src/components/Storage';
import Column from '../src/components/Colunm';
import './App.css'


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storage: new Storage(),
      modalGreetingOpen: true,
      modalCardOpen: false,
    }
    this.addName = this.addName.bind(this);
    this.addCard = this.addCard.bind(this);
    this.saveTitle = this.saveTitle.bind(this);
    this.toggleGreetingModal = this.toggleGreetingModal.bind(this);
    this.toggleCardModal = this.toggleCardModal.bind(this);
  };

  addName(name) {
   this.state.storage.name = name; //Side Effects
   this.setState({})
  };

  addCard(idCard, newCard) {
    let newId = Date.now();
    if (newCard) {
      this.state.storage[idCard].push({ //Side Effects
        id: newId,
        title: newCard,
        description: ''
      })
    }
    this.setState({})
  };

  saveTitle(idCard, title) {
    this.state.storage.nameColumn.map(data => {
      if (data.id === idCard) { //Side Effects
        data.name = title;
      }
      return data;
    })
    this.setState({})
  };

  toggleGreetingModal() {
    this.setState(state => ({ modalGreetingOpen: !state.modalGreetingOpen }));
  };

  toggleCardModal() {
    this.setState(state => ({ modalCardOpen: !state.modalCardOpen }));
  };

  render() {
    const { storage } = this.state;
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
            <Column id="todo"
              title={storage.nameColumn[0].name}
              storage={storage}
              data={storage.todo}
              addNewCard={this.addCard}
              newTitle={this.saveTitle}
              isOpenModal={this.toggleCardModal} />

            <Column id="inProgress"
              title={storage.nameColumn[1].name}
              storage={storage}
              data={storage.inProgress}
              addNewCard={this.addCard}
              newTitle={this.saveTitle} 
              isOpenModal={this.toggleCardModal}/>

            <Column id="testing"
              title={storage.nameColumn[2].name}
              storage={storage}
              data={storage.testing}
              addNewCard={this.addCard}
              newTitle={this.saveTitle}
              isOpenModal={this.toggleCardModal} />

            <Column id="done"
              title={storage.nameColumn[3].name}
              storage={storage}
              data={storage.done}
              addNewCard={this.addCard}
              newTitle={this.saveTitle}
              isOpenModal={this.toggleCardModal} />

            {this.state.modalCardOpen &&
              <ModalCard 
              storage={storage}
              onClose={this.toggleCardModal}
              onCloseRequest={()=>this.toggleCardModal()} />
            }

          </div>
        </div>
      </div>
    )
  }
};

