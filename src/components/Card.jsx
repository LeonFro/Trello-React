import React from "react";
import ModalCard from "../components/ModalCard";
import PropTypes from "prop-types";

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
        } = this.props;
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

                {this.state.modalCardOpen && (
                    <ModalCard
                        name={name}
                        description={cardList.description}
                        titleCard={titleCard}
                        idColumn={idColumn}
                        listComments={listComments}
                        id={this.props.id}
                        onClose={this.toggleCardModal}
                        onCloseRequest={() => this.toggleCardModal()}
                        handleAddText={this.props.addTextDescription}
                        deletThisCard={this.props.cardRemove}
                        addTextComment={this.props.addComment}
                        deletThisComment={this.props.deletComment}
                        thisEditComment={this.props.commentEdit}
                        saveCardTitle={this.props.saveContextTitle}
                    />
                )}
            </div>
        );
    }
}

Card.propTypes = {
    toggleCardModal: PropTypes.func,
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
    titleCard: "New card"
};
