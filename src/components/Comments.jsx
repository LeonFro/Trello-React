import React from 'react';
import PropTypes from 'prop-types';

export default class Comments extends React.Component {
  state = {
    changeFormComment: false
  };

  removeComment = () => {
    let idComment = this.props.id;
    this.props.deleteComment(idComment);
  };

  editComment = () => {
    this.setState({ changeFormComment: false });
    let textComment = this.refs.text.value;
    if (!textComment.trim()) {
      return;
    }
    let idComment = this.props.id;
    this.props.isEditComment(idComment, textComment);
  };

  render() {
    const { name, comment } = this.props;
    return (
      <div className="comment">
        <h5 className="modal-title">{name}</h5>
        {this.state.changeFormComment ? (
          <div>
            <textarea
              name="form-control"
              className="form-control"
              rows="2"
              defaultValue={comment}
              ref="text"
            />
            <button
              type="submit"
              className="btn btn-primary"
              onClick={this.editComment}
            >
              Ok
            </button>
          </div>
        ) : (
          <div>
            <div className="text-comment">{comment}</div>
            <a className="badge badge-danger" onClick={this.removeComment}>
                Delete
            </a>
            <a
              className="badge badge-success"
              onClick={() => this.setState({ changeFormComment: true })}
            >
                Edit
            </a>
          </div>
        )}
      </div>
    );
  }
}

Comments.propTypes = {
  deleteComment: PropTypes.func.isRequired,
  isEditComment: PropTypes.func.isRequired,
  changeFormComment: PropTypes.bool.isRequired,
  comment: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
Comments.defaultProps = {
  changeFormComment: false,
  comment: 'text comment',
  name: 'Annon'
};
