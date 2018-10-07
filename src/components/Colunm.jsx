import React from 'react';
import Card from './Card';
import Title from './Title';
import AddCard from './AddCard';
import PropTypes from 'prop-types';

const Column = ({
  name,
  cardList,
  title,
  id,
  newTitle,
  addText,
  deletCard,
  addNewComment,
  commentDelet,
  onEditComment,
  onSaveTitle,
  addNewCard,
  listComments }) => {
  return (
    <div className="col border border-info rounded">
      <div className="content">
        <div className="header">

          <Title id={id}
            title={title}
            saveTitle={newTitle}
          />
        </div>
        <hr />

        {cardList.map((cards, i) =>
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
            deletComment={commentDelet}
            commentEdit={onEditComment}
            saveContextTitle={onSaveTitle}
          />)}
        <hr />

        <AddCard id={id}
          addCard={addNewCard} />
      </div>
    </div>
  )
};
export default Column;

Column.propTypes = {
  key:PropTypes.number,
  id: PropTypes.any,
  title: PropTypes.string.isRequired,
};

