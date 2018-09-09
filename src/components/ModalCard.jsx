import React from 'react';
import Description from '../components/DescriptionInModal';
import Comments from '../components/Comments';
import PropTypes from 'prop-types';
import '../App.css';

export default class ModalCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditTitle: false,
            isEditDescripton: false,
        };
    };

    componentDidMount() {
        window.addEventListener("keyup", this.handleKeyUp, false);
    };

    componentWillUnmount() {
        window.removeEventListener("keyup", this.handleKeyUp, false);
    };

    handleKeyUp = (e) => {
        const { onCloseRequest } = this.props;
        const keys = {
            27: () => {
                e.preventDefault();
                onCloseRequest();
                window.removeEventListener("keyup", this.handleKeyUp, false);
            }
        };
        if (keys[e.keyCode]) {
            keys[e.keyCode]();
        }
    };

    addComment = () => {
        let valueTextArea = this.refs.text.value;
        let idCard = this.props.id;
        this.props.addTextComment(idCard, valueTextArea);
        this.refs.text.value = "";
    };

    deletCard = () => {
        this.props.onCloseRequest();
        let idCard = this.props.id;
        let idColumn = this.props.idColumn;
        this.props.deletThisCard(idCard, idColumn);
    };

    editTitleCard = () => {
        this.setState({ isEditTitle: false });
        let valueTextTitle = this.refs.title.value;
        let idCard = this.props.id;
        let idColumn = this.props.idColumn;
        this.props.saveCardTitle(idCard, idColumn, valueTextTitle);
    }

    render() {
        const { description, id, idColumn, storage, title } = this.props;
        return (
            <div className="modal">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">

                            {this.state.isEditTitle ? <div><input type="text" className="form-control"
                                ref="title" defaultValue={title} />
                                <button type="submit"
                                    className="btn btn-primary"
                                    onClick={this.editTitleCard}>Save</button></div> :
                                <h5 className="modal-title"
                                    onClick={() => this.setState({ isEditTitle: true })}>{title}</h5>}

                            <button type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                                onClick={this.props.onClose}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">

                            <Description
                                id={id}
                                idColumn={idColumn}
                                description={description}
                                addText={this.props.handleAddText} />
                            <hr />
                            <div className="form-group">
                                <label htmlFor="">Add comment</label>
                                <textarea name="form-control"
                                    className="form-control"
                                    id="exampleFormControlTextarea1"
                                    rows="3"
                                    placeholder="Add comment"
                                    ref="text"
                                ></textarea>
                                <button type="submit"
                                    className="btn btn-primary"
                                    onClick={this.addComment}>Save</button>
                            </div>

                            {storage.comments.map(comm =>
                                comm.idCard === id ?
                                    <Comments
                                        comment={comm.comment}
                                        key={comm.id}
                                        id={comm.id}
                                        data={storage}
                                        deletComment={this.props.deletThisComment}
                                        isEditComment={this.props.thisEditComment} />
                                    : null
                            )}

                        </div>
                        <div className="modal-footer">
                            <button type="button"
                                className="btn btn-danger" onClick={this.deletCard}>Delete card</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

ModalCard.propTypes = {
    handleKeyUp: PropTypes.func,
    addComment: PropTypes.func,
    deletCard: PropTypes.func,
    editTitleCard: PropTypes.func,
    description: PropTypes.string,
    id: PropTypes.any,
    idColumn: PropTypes.string,
    storage: PropTypes.object.isRequired,
    title: PropTypes.string,
    isEditTitle: PropTypes.bool,
    isEditDescripton: PropTypes.bool,
};

ModalCard.defaultProps = {
    isEditTitle: false,
    isEditDescripton: false,
};
