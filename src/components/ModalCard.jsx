import React from "react";
import Description from "../components/DescriptionInModal";
import Comments from "../components/Comments";
import PropTypes from "prop-types";
import ReactModal from "react-modal";

export default class ModalCard extends React.Component {
  state = {
    isEditTitle: false,
    isEditDescripton: false
  };

  componentWillUnmount() {
    window.removeEventListener("keyup", this.handleKeyUp, false);
  }
  componentDidMount() {
    window.addEventListener("keyup", this.handleKeyUp, false);
  }

  handleKeyUp = e => {
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
    if (!valueTextArea.trim()) {
      return;
    }
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
    if (!valueTextTitle.trim()) {
      return;
    }
    let idCard = this.props.id;
    let idColumn = this.props.idColumn;
    this.props.saveCardTitle(idCard, idColumn, valueTextTitle);
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
      deletThisComment,
      thisEditComment,
      handleAddText
    } = this.props;
    const { isEditTitle } = this.state;
    return (
      <ReactModal isOpen={this.props.onCloseRequest} style={customStyles}>
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
                  addText={handleAddText}
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
                        deletComment={deletThisComment}
                        isEditComment={thisEditComment}
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
      </ReactModal>
    );
  }
}

ModalCard.propTypes = {
  handleKeyUp: PropTypes.func,
  addComment: PropTypes.func,
  deletCard: PropTypes.func,
  editTitleCard: PropTypes.func,
  description: PropTypes.string,
  id: PropTypes.any,
  idColumn: PropTypes.string,
  listComments: PropTypes.array.isRequired,
  titleCard: PropTypes.string.isRequired,
  isEditTitle: PropTypes.bool,
  isEditDescripton: PropTypes.bool
};

ModalCard.defaultProps = {
  isEditTitle: false,
  isEditDescripton: false
};

const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(117, 117, 117, 0.75)"
  },
  content: {
    border: 0,
    background: "rgba(117, 117, 117, 0)"
  }
};
