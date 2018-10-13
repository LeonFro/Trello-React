import React from 'react';
import ModalCard from '../components/ModalCard';
import PropTypes from 'prop-types';

export default class Card extends React.Component {
  state = {
    modalCardOpen: false
  };

  toggleCardModal = () => {
    this.setState(state => ({ modalCardOpen: !state.modalCardOpen }));
  };

  render() {
    const {
      name,
      cardList,
      titleCard,
      idColumn,
      listComments,
      id,
      addTextDescription,
      cardRemove,
      addComment,
      deletComment,
      commentEdit,
      saveContextTitle
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
            handleAddText={addTextDescription}
            deletThisCard={cardRemove}
            addTextComment={addComment}
            delComment={deletComment}
            thisEditComment={commentEdit}
            saveCardTitle={saveContextTitle}
          />
        )}
      </div>
    );
  }
}

Card.propTypes = {
  cardList: PropTypes.object,
  description: PropTypes.string,
  titleCard: PropTypes.string.isRequired,
  id: PropTypes.number,
  onClose: PropTypes.func,
  onCloseRequest: PropTypes.func,
  handleAddText: PropTypes.func,
  deletThisCard: PropTypes.func,
  addTextComment: PropTypes.func,
  deletThisComment: PropTypes.func,
  thisEditComment: PropTypes.func,
  sumComments: PropTypes.number.isRequired,
  saveContextTitle: PropTypes.func
};
Card.defaultProps = {
  modalCardOpen: false,
  sumComments: 0,
  titleCard: 'New card'
};
