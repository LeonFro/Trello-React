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
  getCardsComments,
  getCards,
  getColumnNames,
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
  listComments,
  addCard,
  saveTitle,
  deleteCard,
  addDescriptions,
  addComment,
  deleteComment,
  cangeComment,
  changeTitleCard,
  columnlist
}) => (
  <div>

    <ModalGreeting
      setName={addName}
    />
    <Header name={name} />

    <div className="container">
      <div className="row justify-content-center">
        {columnlist.map((column) => (
          <Column
            key={column.id}
            name={name}
            cardList={cardList}
            id={column.id}
            title={column.name}
            listComments={listComments}
            addNewCard={addCard}
            newTitle={saveTitle}
            deletCard={deleteCard}
            addText={addDescriptions}
            addNewComment={addComment}
            deletCom={deleteComment}
            onEditComment={cangeComment}
            onSaveTitle={changeTitleCard}
          />))}
      </div>
    </div>
  </div>
);

const mapStateToProps = state => ({
  name: getName(state),
  listComments: getCardsComments(state),
  cardList: getCards(state),
  columnlist:getColumnNames(state),
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
  name: PropTypes.string.isRequired,
  listComments: PropTypes.array.isRequired,
};
