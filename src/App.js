import React, { Component } from 'react';
import ModalGreeting from './components/ModalGreeting';
import Column from './components/Colunm';
import Header from './components/Header';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addName } from './reducers/name';
import PropTypes from 'prop-types';
import {
  addCard,
  deleteCard,
  changeTitleCard,
  addDescriptions,
  addComment,
  deleteComment,
  cangeComment
} from './reducers/card';
import { saveTitle } from './reducers/column';
import './App.css'

class App extends Component {
  render() {
    const { name,
      addName,
      storage,
      data,
      title,
      addCard,
      saveTitle,
      deleteCard,
      addDescriptions,
      addComment,
      deleteComment,
      cangeComment,
      changeTitleCard } = this.props
    return (
      <div>
        <ModalGreeting setName={addName} />
        <Header name={name} />
        <div className="container">
          <div className="row justify-content-center">
            <Column storage={storage} data={data.todo} id="todo" title={title[0].name}
              addNewCard={addCard}
              newTitle={saveTitle}
              deletCard={deleteCard}
              addText={addDescriptions}
              addNewComment={addComment}
              commentDelet={deleteComment}
              onEditComment={cangeComment}
              onSaveTitle={changeTitleCard} />
            <Column storage={storage} data={data.inProgress} id="inProgress" title={title[1].name}
              addNewCard={addCard}
              newTitle={saveTitle}
              deletCard={deleteCard}
              addText={addDescriptions}
              addNewComment={addComment}
              commentDelet={deleteComment}
              onEditComment={cangeComment}
              onSaveTitle={changeTitleCard} />
            <Column storage={storage} data={data.test} id="test" title={title[2].name}
              addNewCard={addCard}
              newTitle={saveTitle}
              deletCard={deleteCard}
              addText={addDescriptions}
              addNewComment={addComment}
              commentDelet={deleteComment}
              onEditComment={cangeComment}
              onSaveTitle={changeTitleCard} />
            <Column storage={storage} data={data.done} id="done" title={title[3].name}
              addNewCard={addCard}
              newTitle={saveTitle}
              deletCard={deleteCard}
              addText={addDescriptions}
              addNewComment={addComment}
              commentDelet={deleteComment}
              onEditComment={cangeComment}
              onSaveTitle={changeTitleCard} />
          </div>
        </div>
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
    name: state.name.name,
    storage: state,
    data: state.card,
    title: state.column.nameColumn,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addName,
      addCard,
      saveTitle,
      deleteCard,
      addDescriptions,
      addComment,
      deleteComment,
      cangeComment,
      changeTitleCard
    },
    dispatch
  );
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

App.propTypes = {
  addNewCard: PropTypes.func,
  newTitle: PropTypes.func,
  deletCard: PropTypes.func,
  addText: PropTypes.func,
  addNewComment: PropTypes.func,
  commentDelet: PropTypes.func,
  onEditComment: PropTypes.func,
  onSaveTitle: PropTypes.func,
  id: PropTypes.string,
  data: PropTypes.object.isRequired,
  storage: PropTypes.object.isRequired,
  title: PropTypes.array.isRequired,
};

