import React from 'react';
import Card from './Card';
import Title from './Title';
import AddCard from './AddCard';
import PropTypes from 'prop-types';

const Column = ({ data,
  title,
  storage,
  id, newTitle,
  addText,
  deletCard,
  addNewComment,
  commentDelet,
  onEditComment,
  onSaveTitle,
  addNewCard }) => {

  return (
    <div className="col border border-info rounded">
      <div className="content">
        <div className="header">

          <Title id={id}
            title={title}
            storage={storage}
            saveTitle={newTitle} />
        </div>
        <hr />

        {data.map((cards, i) =>
          <Card
            idColumn={id}
            key={i}
            id={cards.id}
            {...cards}
            storage={storage}
            addTextDescription={addText}
            cardRemove={deletCard}
            addComment={addNewComment}
            deletComment={commentDelet}
            commentEdit={onEditComment}
            saveContextTitle={onSaveTitle}
          />)}
        <hr />

        <AddCard id={id}
          storage={storage}
          addCard={addNewCard} />
      </div>
    </div>
  )
};

export default Column;

Column.propTypes = {
  id: PropTypes.any,
  title: PropTypes.string.isRequired,
  storage: PropTypes.object.isRequired,
  saveTitle: PropTypes.func,
};

