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

  addName = (name) => {
    let storage = { ...this.state.storage };
    storage.name = name;
    this.setState({ storage })
  };

  addCard = (idCard, newCard) => {
    let newId = Date.now();
    let card = {
      id: newId,
      title: newCard,
      description: ''
    };
    let storage = { ...this.state.storage };
    if (newCard) {
      storage[idCard].push(card);
    };
    this.setState({ storage });
  };

  saveTitle = (idCard, title) => {
    let storage = { ...this.state.storage };
    storage.nameColumn.map(data => {
      if (data.id === idCard) {
        data.name = title;
      }
      return data;
    })
    this.setState({ storage })
  };

  toggleGreetingModal = () => {
    this.setState(state => ({ modalGreetingOpen: !state.modalGreetingOpen }));
  };

  onAddDescription = (id, nameColumn, text) => {
    let storage = { ...this.state.storage };
    storage[nameColumn].map(data => {
      if (data.id === id) {
        data.description = text;
      }
      return data;
    })
    this.setState({ storage });
  };

  onDeletCard = (idCard, nameColumn) => {
    let storage = { ...this.state.storage };
    let indexCard = storage[nameColumn].findIndex(x => {
      return x.id === idCard;
    });
    storage[nameColumn].splice(indexCard, 1);
    this.setState({ storage });
  };

  onAddComment = (idCard, text) => {
    let storage = { ...this.state.storage };
    let newId = Date.now();
    let comment = {
      idCard: idCard,
      id: newId,
      comment: text,
    }
    if (text) {
      storage.comments.push(comment);
    };
    this.setState({ storage });
  };

  onDeletComment = (idComment) => {
    let storage = { ...this.state.storage };
    let indexComment = storage.comments.findIndex(x => {
      return x.id === idComment;
    });
    storage.comments.splice(indexComment, 1);
    this.setState({ storage });
  };

  changeComment = (idComment, textComment) => {
    let storage = { ...this.state.storage };
    storage.comments.map(data => {
      if (data.id === idComment) {
        data.comment = textComment;
      }
      return data;
    })
    this.setState({ storage });
  };

  changeTitleCard = (idCard, nameColumn, textTitleCard) => {
    let storage = { ...this.state.storage };
    storage[nameColumn].map(data => {
      if (data.id === idCard) {
        data.title = textTitleCard;
      }
      return data;
    })
    this.setState({ storage });
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
