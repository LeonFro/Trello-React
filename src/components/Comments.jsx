import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

export default class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false,
        };
    };

    removeComment = () => {
        let idComment = this.props.id;
        this.props.deletComment(idComment);
    };

    editComment = () => {
        this.setState({ isEdit: false });
        let textComment = this.refs.text.value;
        let idComment = this.props.id;
        this.props.isEditComment(idComment, textComment);
    };

    render() {
        const { data, comment } = this.props;
        return (<div className="comment">
            <h5 className="modal-title">{data.name}</h5>
            {this.state.isEdit ? <div>
                <textarea
                    name="form-control"
                    className="form-control"
                    rows="2"
                    defaultValue={comment}
                    ref="text">
                </textarea>
                <button type="submit"
                    className="btn btn-primary"
                    onClick={this.editComment}>Ok</button>
            </div> :
                <div>
                    <div className="text-comment">{comment}</div>
                    <a className="badge badge-danger"
                        onClick={this.removeComment}>Delete</a>
                    <a className="badge badge-success"
                        onClick={() => this.setState({ isEdit: true })}>Edit</a>
                </div>
            }
        </div>
        )
    };

};
Comments.propTypes = {
    removeComment:PropTypes.func,
    editComment:PropTypes.func,
    isEdit:PropTypes.bool,
    data:PropTypes.object,
    comment:PropTypes.any,
  }
  Comments.defaultProps = {
     isEdit: false,
     comment:"text comment"
  };
