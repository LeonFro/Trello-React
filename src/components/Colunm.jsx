import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import Title from './Title';
import AddCard from './AddCard';

const Column = ({
  name,
  cardList,
  title,
  id,
  saveTitleColumn,
  addDescription,
  onDeletCard,
  onAddComment,
  deletComment,
  onEditComment,
  onEditTitleCard,
  addCard,
  listComments,
}) => (
  <div className="col border border-info rounded">
    <div className="content">
      <div className="header">

        <Title
          id={id}
          title={title}
          saveTitleColumn={saveTitleColumn}
        />
      </div>
      <hr />

      {cardList[id].map((cards, i) => (
        <Card
          idColumn={id}
          key={i}
          id={cards.id}
          name={name}
          cardList={cards}
          titleCard={cards.title}
          listComments={listComments}
          addDescription={addDescription}
          onDeletCard={onDeletCard}
          onAddComment={onAddComment}
          deletComment={deletComment}
          onEditComment={onEditComment}
          onEditTitleCard={onEditTitleCard}
        />
      ))} 
      <hr />
      <AddCard
        id={id}
        addCard={addCard}
      />
    </div>
  </div>
);
export default Column;

Column.propTypes = {
  id: PropTypes.any,
  title: PropTypes.string.isRequired,
  saveTitleColumn: PropTypes.func.isRequired,
  cardList: PropTypes.object.isRequired,
  name:PropTypes.string.isRequired,
  addDescription: PropTypes.func.isRequired,
  onDeletCard: PropTypes.func.isRequired,
  onAddComment: PropTypes.func.isRequired,
  deletComment: PropTypes.func.isRequired,
  onEditComment: PropTypes.func.isRequired,
  onEditTitleCard: PropTypes.func.isRequired,
  addCard:PropTypes.func.isRequired,
  listComments: PropTypes.array.isRequired,
};








