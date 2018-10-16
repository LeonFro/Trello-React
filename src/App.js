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
  getComments,
  getCards,
  getColumnNames,
} from './selectors';
import {
  addCard,
  deleteCard,
  changeTitleCard,
  addDescriptions,
} from './reducers/cards';
import {
  addComment,
  deleteComment,
  cangeComment,
} from'./reducers/comments';
import { saveTitleColumn } from './reducers/columnNames';
import './App.css';

const App = ({
  name,
  addName,
  cardList,
  listComments,
  addCard,
  saveTitleColumn,
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
            addCard={addCard}
            saveTitleColumn={saveTitleColumn}
            onDeletCard={deleteCard}
            addDescription={addDescriptions}
            onAddComment={addComment}
            deletComment={deleteComment}
            onEditComment={cangeComment}
            onEditTitleCard={changeTitleCard}
          />))}
      </div>
    </div>
  </div>
);

const mapStateToProps = state => ({
  name: getName(state),
  listComments: getComments(state),
  cardList: getCards(state),
  columnlist:getColumnNames(state),
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    addName,
    addCard,
    saveTitleColumn,
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
  name: PropTypes.string.isRequired,
  addName: PropTypes.func.isRequired,
  cardList: PropTypes.object.isRequired,
  listComments: PropTypes.array.isRequired,
  addCard: PropTypes.func.isRequired,
  saveTitleColumn: PropTypes.func.isRequired,
  deleteCard: PropTypes.func.isRequired,
  addDescriptions: PropTypes.func.isRequired,
  addComment: PropTypes.func.isRequired,
  deleteComment: PropTypes.func.isRequired,
  cangeComment: PropTypes.func.isRequired,
  changeTitleCard: PropTypes.func.isRequired,
  columnlist: PropTypes.array.isRequired,
  id: PropTypes.string,
};

