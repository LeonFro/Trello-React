import React from 'react';
import ModalCard from '../components/ModalCard';
import PropTypes from 'prop-types';
import '../App.css';

export default class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalCardOpen: false,
        }
    };

    toggleCardModal = () => {
        this.setState(state => ({ modalCardOpen: !state.modalCardOpen }));
    };


    render() {
        const { data, storage, title, description, id, idColumn } = this.props;
        let sumComments = this.props.storage.comments.filter(x => x.idCard === id).length;
        return (
            <div className="col border list-cards">
                <div className="list-card-details">
                    <span className="card-name">{title}</span>
                    <button type="button" className="btn btn-secondary btn-sm" disabled><i className="far fa-comment-dots"></i>{sumComments}</button>
                    <button type="button" className="btn btn-info" onClick={this.toggleCardModal}><i className="fas fa-pencil-alt"></i></button>
                </div>

                {this.state.modalCardOpen &&
                    <ModalCard
                        storage={storage}
                        description={description}
                        title={title}
                        data={data}
                        idColumn={idColumn}
                        id={id}
                        onClose={this.toggleCardModal}
                        onCloseRequest={() => this.toggleCardModal()}
                        handleAddText={this.props.addTextDescription}
                        deletThisCard={this.props.cardRemove}
                        addTextComment={this.props.addComment}
                        deletThisComment={this.props.deletComment}
                        thisEditComment={this.props.commentEdit}
                        saveCardTitle={this.props.saveContextTitle} />
                }

            </div>
        )
    }
};

Card.propTypes = {
    toggleCardModal: PropTypes.func,
    data: PropTypes.object,
    storage: PropTypes.object.isRequired,
    description: PropTypes.string,
    title: PropTypes.string.isRequired,
    idColumn: PropTypes.any,
    id: PropTypes.any,
    onClose: PropTypes.func,
    onCloseRequest: PropTypes.func,
    handleAddText: PropTypes.func,
    deletThisCard: PropTypes.func,
    addTextComment: PropTypes.func,
    deletThisComment: PropTypes.func,
    thisEditComment: PropTypes.func,
    sumComments: PropTypes.number.isRequired,
    saveContextTitle: PropTypes.func.isRequired

};
Card.defaultProps = {
    modalCardOpen: false,
    sumComments: 0,
    title: "New card"
};