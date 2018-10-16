import React from 'react';
import PropTypes from 'prop-types';

export default class Comments extends React.Component {
  state = {
    changeFormComment: false
  };

  removeComment = () => {
    let idComment = this.props.id;
    this.props.deletComment(idComment);
  };

  editComment = () => {
    this.setState({ changeFormComment: false });
    let textComment = this.refs.text.value;
    if (!textComment.trim()) {
      return;
    }
    let idComment = this.props.id;
    this.props.onEditComment(idComment, textComment);
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
  id: PropTypes.number.isRequired,
  deletComment: PropTypes.func.isRequired,
  onEditComment: PropTypes.func.isRequired,
  changeFormComment: PropTypes.bool,
  comment: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
Comments.defaultProps = {
  comment: '',
  name: 'Annon'
};
