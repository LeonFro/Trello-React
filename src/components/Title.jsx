import React from 'react';
import PropTypes from 'prop-types';

export default class Title extends React.Component {
  state = {
    isEditFormTitle: false
  };

  changeTitle = () => {
    this.setState({ isEditFormTitle: false });
    let newTitle = this.refs.title.value;
    if (!newTitle.trim()) {
      return;
    }
    let titleId = this.props.id;
    this.props.saveTitleColumn(titleId, newTitle);
  };

  render() {
    const { title } = this.props;
    const { isEditFormTitle } = this.state;
    return isEditFormTitle ? (
      <div className="row justify-content-md-center">
        <div className="col-md-8">
          <input
            type="text"
            className="form-control"
            defaultValue={title}
            required
            ref="title"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary pull-right col-md-2"
          onClick={this.changeTitle}
        >
          Ok
        </button>
      </div>
    ) : (
      <h2 onClick={() => this.setState({ isEditFormTitle: true })}>{title}</h2>
    );
  }
}
Title.propTypes = {
  id:PropTypes.string.isRequired,
  changeTitle: PropTypes.func,
  saveTitleColumn: PropTypes.func.isRequired,
  isEditFormTitle: PropTypes.bool,
  title: PropTypes.string.isRequired,
  titleId:PropTypes.string,
  newTitle:PropTypes.string,
};
Title.defaultProps = {
  title: 'Title column'
};
