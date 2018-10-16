import React from 'react';
import ModalCard from '../components/ModalCard';
import PropTypes from 'prop-types';

export default class Card extends React.Component {
  state = {
    modalCardOpen: false
  };

  toggleCardModal = () => {
    this.setState(state => ({ modalCardOpen: !state.modalCardOpen }));
    window.removeEventListener('keyup', this.handleKeyUp, false);
  };

  render() {
    const {
      name,
      cardList,
      titleCard,
      idColumn,
      listComments,
      id,
      addDescription,
      onDeletCard,
      onAddComment,
      deletComment,
      onEditComment,
      onEditTitleCard
    } = this.props;
    const{
      modalCardOpen
    } = this.state;
    
    let sumComments = listComments.filter(x => x.idCard === id).length;
    return (
      <div className="col border list-cards">
        <div className="list-card-details">
          <span className="card-name">{titleCard}</span>
          <button type="button" className="btn btn-secondary btn-sm" disabled>
            <i className="far fa-comment-dots" />
            {sumComments}
          </button>
          <button
            type="button"
            data-toggle="modal"
            data-target="#largeModal"
            className="btn btn-info btn-sm"
            onClick={this.toggleCardModal}
          >
            <i className="fas fa-pencil-alt" />
          </button>
        </div>

        {modalCardOpen && (
          <ModalCard
            name={name}
            description={cardList.description}
            titleCard={titleCard}
            idColumn={idColumn}
            listComments={listComments}
            id={this.props.id}
            onClose={this.toggleCardModal}
            onCloseRequest={() => this.toggleCardModal()}
            addDescription={addDescription}
            onDeletCard={onDeletCard}
            onAddComment={onAddComment}
            deletComment={deletComment}
            onEditComment={onEditComment}
            onEditTitleCard={onEditTitleCard}
          />
        )}
      </div>
    );
  }
}

Card.propTypes = {
  toggleCardModal: PropTypes.func,
  listComments: PropTypes.array.isRequired,
  name:PropTypes.string.isRequired,
  cardList: PropTypes.object.isRequired,
  titleCard: PropTypes.string.isRequired,
  idColumn: PropTypes.string.isRequired,
  id: PropTypes.number,
  addDescription: PropTypes.func.isRequired,
  onDeletCard: PropTypes.func.isRequired,
  onAddComment: PropTypes.func.isRequired,
  deletComment: PropTypes.func.isRequired,
  onEditComment: PropTypes.func.isRequired,
  onEditTitleCard: PropTypes.func.isRequired,
  description: PropTypes.string,
  onClose: PropTypes.func,
  sumComments: PropTypes.number.isRequired,
  onCloseRequest: PropTypes.func,
};

Card.defaultProps = {
  sumComments: 0,
  titleCard: 'New card'
};
