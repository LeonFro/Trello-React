import React from 'react';
import Card from './Card';
import Title from './Title';
import AddCard from './AddCard';
import PropTypes from 'prop-types';
import '../App.css';

export default class Column extends React.Component {

  render() {
    const { data, title, storage, id } = this.props;
    
    return (
      <div className="col border border-info rounded">
        <div className="content">
          <div className="header">
            
            <Title id={id}
              title={title}
              storage={storage}
              saveTitle={this.props.newTitle} />
          </div>
          <hr />

          {data.map((cards, i) =>
            <Card
              idColumn={id}
              key={i}
              id={cards.id}
              {...cards}
              storage={storage}
              addTextDescription={this.props.addText}
              cardRemove={this.props.deletCard}
              addComment={this.props.addNewComment}
              deletComment={this.props.commentDelet}
              commentEdit={this.props.onEditComment}
              saveContextTitle={this.props.onSaveTitle}
            />)}
          <hr />

          <AddCard id={id}
            storage={storage}
            addCard={this.props.addNewCard} />
        </div>
      </div>
    )
  }
};

Column.propTypes = {
  id: PropTypes.any,
  title: PropTypes.string.isRequired,
  storage: PropTypes.object.isRequired,
  saveTitle: PropTypes.func,
};

