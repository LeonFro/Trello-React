import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import ModalGreeting from './components/ModalGreeting';
import Column from './components/Colunm';
import Header from './components/Header';
import { addName } from './reducers/name';
import {
  getName,
  getCardsTitle,
  getCardsComment,
  getCard,
} from './selectors';
import {
  addCard,
  deleteCard,
  changeTitleCard,
  addDescriptions,
  addComment,
  deleteComment,
  cangeComment,
} from './reducers/card';
import { saveTitle } from './reducers/column';
import './App.css';

const App = ({
  name,
  addName,
  cardList,
  columnTitleList,
  listComments,
  addCard,
  saveTitle,
  deleteCard,
  addDescriptions,
  addComment,
  deleteComment,
  cangeComment,
  changeTitleCard,
}) => (
    <div>

      <ModalGreeting
        setName={addName}
      />
      <Header name={name} />

      <div className="container">
        <div className="row justify-content-center">
          <Column
            name={name}
            cardList={cardList.todo}
            id="todo"
            title={columnTitleList[0].name}
            listComments={listComments}
            addNewCard={addCard}
            newTitle={saveTitle}
            deletCard={deleteCard}
            addText={addDescriptions}
            addNewComment={addComment}
            commentDelet={deleteComment}
            onEditComment={cangeComment}
            onSaveTitle={changeTitleCard}
          />
          <Column
            name={name}
            cardList={cardList.inProgress}
            id="inProgress"
            title={columnTitleList[1].name}
            listComments={listComments}
            addNewCard={addCard}
            newTitle={saveTitle}
            deletCard={deleteCard}
            addText={addDescriptions}
            addNewComment={addComment}
            commentDelet={deleteComment}
            onEditComment={cangeComment}
            onSaveTitle={changeTitleCard}
          />
          <Column
            name={name}
            cardList={cardList.test}
            id="test"
            title={columnTitleList[2].name}
            listComments={listComments}
            addNewCard={addCard}
            newTitle={saveTitle}
            deletCard={deleteCard}
            addText={addDescriptions}
            addNewComment={addComment}
            commentDelet={deleteComment}
            onEditComment={cangeComment}
            onSaveTitle={changeTitleCard}
          />
          <Column
            name={name}
            cardList={cardList.done}
            id="done"
            title={columnTitleList[3].name}
            listComments={listComments}
            addNewCard={addCard}
            newTitle={saveTitle}
            deletCard={deleteCard}
            addText={addDescriptions}
            addNewComment={addComment}
            commentDelet={deleteComment}
            onEditComment={cangeComment}
            onSaveTitle={changeTitleCard}
          />
        </div>
      </div>
    </div>
  );

const mapStateToProps = state => ({
  name: getName(state),
  listComments: getCardsComment(state),
  cardList: getCard(state),
  columnTitleList: getCardsTitle(state),
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    addName,
    addCard,
    saveTitle,
    deleteCard,
    addDescriptions,
    addComment,
    deleteComment,
    cangeComment,
    changeTitleCard,
  },
  dispatch,
);
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

App.propTypes = {
  saveTitle: PropTypes.func.isRequired,
  addName: PropTypes.func.isRequired,
  addCard: PropTypes.func.isRequired,
  deleteCard: PropTypes.func.isRequired,
  addDescriptions: PropTypes.func.isRequired,
  addComment: PropTypes.func.isRequired,
  deleteComment: PropTypes.func.isRequired,
  cangeComment: PropTypes.func.isRequired,
  changeTitleCard: PropTypes.func.isRequired,
  id: PropTypes.string,
  cardList: PropTypes.object.isRequired,
  columnTitleList: PropTypes.array.isRequired,
  name: PropTypes.string,
  listComments: PropTypes.array.isRequired,
};
