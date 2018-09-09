import React, { Component } from 'react';
import ModalGreeting from '../src/components/ModalGreeting';
import Header from '../src/components/Header';
import Column from './components/Colunm';
import PropTypes from 'prop-types';
import './App.css'


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storage: this.props.storage,
      name: this.props.storage.name,
      modalGreetingOpen: true,
      modalCardOpen: false,
    };
  };

  addName = (name) => { //Side Effects
    this.state.storage.name = name
    this.setState({})
  };

  addCard = (idCard, newCard) => {
    let newId = Date.now();
    if (newCard) {
      this.state.storage[idCard].push({ //Side Effects
        id: newId,
        title: newCard,
        description: ''
      });
      this.setState({})
    }
  };

  saveTitle = (idCard, title) => {
    this.state.storage.nameColumn.map(data => {
      if (data.id === idCard) { //Side Effects
        data.name = title;
      }
      return data;
    })
    this.setState({})
  };

  toggleGreetingModal = () => {
    this.setState(state => ({ modalGreetingOpen: !state.modalGreetingOpen }));
  };

  onAddDescription = (id, nameColumn, text) => {
    this.state.storage[nameColumn].map(data => {
      if (data.id === id) {
        data.description = text;//Side Effects
      }
      return data;
    })
    this.setState({});
  };

  onDeletCard = (idCard, nameColumn) => {
    let indexCard = this.state.storage[nameColumn].findIndex(x => {
      return x.id === idCard;
    });
    this.state.storage[nameColumn].splice(indexCard, 1);
    this.setState({});
  };

  onAddComment = (idCard, text) => {
    let newId = Date.now();
    if (text) {
      this.state.storage.comments.push({//Side Effects
        idCard: idCard,
        id: newId,
        comment: text,
      });
    };
    this.setState({});
  };

  onDeletComment = (idComment) => {
    let indexComment = this.state.storage.comments.findIndex(x => {
      return x.id === idComment;
    });
    this.state.storage.comments.splice(indexComment, 1);
    this.setState({});
  };

  changeComment = (idComment, textComment) => {
    this.state.storage.comments.map(data => {
      if (data.id === idComment) {
        data.comment = textComment;//Side Effects
      }
      return data;
    })
    this.setState({});
  };

  changeTitleCard = (idCard, nameColumn, textTitleCard) => {
    this.state.storage[nameColumn].map(data => {
      if (data.id === idCard) {
        data.title = textTitleCard;//Side Effects
      }
      return data;
    })
    this.setState({});
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
            <Column id="todo" key={"todo"}
              title={storage.nameColumn[0].name}
              storage={storage}
              data={storage.todo}
              addNewCard={this.addCard}
              newTitle={this.saveTitle}
              addText={this.onAddDescription}
              deletCard={this.onDeletCard}
              addNewComment={this.onAddComment}
              commentDelet={this.onDeletComment}
              onEditComment={this.changeComment}
              onSaveTitle={this.changeTitleCard}
            />

            <Column id="inProgress" key={"inProgress"}
              title={storage.nameColumn[1].name}
              storage={storage}
              data={storage.inProgress}
              addNewCard={this.addCard}
              newTitle={this.saveTitle}
              addText={this.onAddDescription}
              deletCard={this.onDeletCard}
              addNewComment={this.onAddComment}
              commentDelet={this.onDeletComment}
              onEditComment={this.changeComment}
              onSaveTitle={this.changeTitleCard}
            />

            <Column id="testing" key={"testing"}
              title={storage.nameColumn[2].name}
              storage={storage}
              data={storage.testing}
              addNewCard={this.addCard}
              newTitle={this.saveTitle}
              addText={this.onAddDescription}
              deletCard={this.onDeletCard}
              addNewComment={this.onAddComment}
              commentDelet={this.onDeletComment}
              onEditComment={this.changeComment}
              onSaveTitle={this.changeTitleCard}
            />

            <Column id="done" key={Date.now}
              title={storage.nameColumn[3].name}
              storage={storage}
              data={storage.done}
              addNewCard={this.addCard}
              newTitle={this.saveTitle}
              addText={this.onAddDescription}
              deletCard={this.onDeletCard}
              addNewComment={this.onAddComment}
              commentDelet={this.onDeletComment}
              onEditComment={this.changeComment}
              onSaveTitle={this.changeTitleCard}
            />
          </div>
        </div>
      </div>
    )
  }
};

App.propTypes = {
  addName: PropTypes.func,
  addCard: PropTypes.func,
  saveTitle: PropTypes.func,
  toggleGreetingModal: PropTypes.func,
  onAddDescription: PropTypes.func,
  onDeletCard: PropTypes.func,
  onAddComment: PropTypes.func,
  onDeletComment: PropTypes.func,
  changeComment: PropTypes.func,
  storage: PropTypes.object.isRequired,
  modalGreetingOpen: PropTypes.bool,
  modalCardOpen: PropTypes.bool,
  title: PropTypes.array,
  data: PropTypes.array,
  addNewCard: PropTypes.func,
  newTitle: PropTypes.func,
  addText: PropTypes.func,
  deletCard: PropTypes.func,
  addNewComment: PropTypes.func,
  commentDelet: PropTypes.func,
  onEditComment: PropTypes.func,
  id: PropTypes.any,
  changeTitleCard: PropTypes.func,
  onSaveTitle: PropTypes.func,

}
App.defaultProps = {
  modalGreetingOpen: true,
  modalCardOpen: false,
};
