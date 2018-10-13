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
  newTitle,
  addText,
  deletCard,
  addNewComment,
  deletCom,
  onEditComment,
  onSaveTitle,
  addNewCard,
  listComments,
  commentSumm,
}) => (
  <div className="col border border-info rounded">
    <div className="content">
      <div className="header">

        <Title
          id={id}
          title={title}
          saveTitle={newTitle}
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
          addTextDescription={addText}
          cardRemove={deletCard}
          addComment={addNewComment}
          deletComment={deletCom}
          commentEdit={onEditComment}
          saveContextTitle={onSaveTitle}
          commentSumm={commentSumm}
        />
      ))} 
      <hr />
      <AddCard
        id={id}
        addCard={addNewCard}
      />
    </div>
  </div>
);
export default Column;

Column.propTypes = {
  id: PropTypes.any,
  title: PropTypes.string.isRequired,
};
