import React from 'react';
import Description from '../components/DescriptionInModal';
import Comments from '../components/Comments';
import PropTypes from 'prop-types';
import ModalWindow from './Modal';

export default class ModalCard extends React.Component {
  state = {
    isEditTitle: false,
    isEditDescripton: false
  };
  
  addComment = () => {
    let valueTextArea = this.refs.text.value;
    let idCard = this.props.id;
    if (!valueTextArea.trim()) {
      return;
    }
    this.props.onAddComment(idCard, valueTextArea);
    this.refs.text.value = '';
  };

  deletCard = () => {
    this.props.onCloseRequest();
    let idCard = this.props.id;
    let idColumn = this.props.idColumn;
    this.props.onDeletCard(idCard, idColumn);
  };
  
  editTitleCard = () => {
    this.setState({ isEditTitle: false });
    let valueTextTitle = this.refs.title.value;
    if (!valueTextTitle.trim()) {
      return;
    }
    let idCard = this.props.id;
    let idColumn = this.props.idColumn;
    this.props.onEditTitleCard(idCard, idColumn, valueTextTitle);
  };

  render() {
    const {
      name,
      description,
      id,
      idColumn,
      listComments,
      titleCard,
      onClose,
      deletComment,
      onEditComment,
      addDescription,
      onCloseRequest
    } = this.props;
    const { isEditTitle } = this.state;
    return (
      <ModalWindow onClose={onClose} onCloseRequest={onCloseRequest}>
        <div className="modal">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                {isEditTitle ? (
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      ref="title"
                      defaultValue={titleCard}
                    />
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={this.editTitleCard}
                    >
                      Save
                    </button>
                  </div>
                ) : (
                  <h5
                    className="modal-title"
                    onClick={() => this.setState({ isEditTitle: true })}
                  >
                    {titleCard}
                  </h5>
                )}

                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={onClose}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <Description
                  id={id}
                  idColumn={idColumn}
                  description={description}
                  addDescription={addDescription}
                />
                <hr />
                <div className="form-group">
                  <label htmlFor="">Add comment</label>
                  <textarea
                    name="form-control"
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Add comment"
                    ref="text"
                  />
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={this.addComment}
                  >
                    Save
                  </button>
                </div>

                {listComments.map(
                  (comm, i) =>
                    comm.idCard === id ? (
                      <Comments
                        comment={comm.comment}
                        key={i}
                        id={comm.id}
                        name={name}
                        deletComment={deletComment}
                        onEditComment={onEditComment}
                      />
                    ) : null
                )}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={this.deletCard}
                >
                  Delete card
                </button>
              </div>
            </div>
          </div>
        </div>
      </ModalWindow>
    );
  }
}

ModalCard.propTypes = {
  addComment: PropTypes.func,
  id: PropTypes.number,
  onAddComment: PropTypes.func.isRequired,
  idCard:PropTypes.number,
  valueTextArea:PropTypes.string,
  deletCard:PropTypes.func,
  onDeletCard: PropTypes.func.isRequired,
  idColumn: PropTypes.string.isRequired,
  editTitleCard:PropTypes.func,
  onEditTitleCard: PropTypes.func.isRequired,
  valueTextTitle:PropTypes.string,
  name:PropTypes.string.isRequired,
  listComments: PropTypes.array.isRequired,
  titleCard: PropTypes.string.isRequired,
  onClose: PropTypes.func,
  deletComment:PropTypes.func.isRequired,
  onEditComment:PropTypes.func.isRequired,
  addDescription:PropTypes.func.isRequired,
  onCloseRequest: PropTypes.func.isRequired, 
  description: PropTypes.string,
};


