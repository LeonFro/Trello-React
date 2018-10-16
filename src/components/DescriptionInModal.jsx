import React from 'react';
import PropTypes from 'prop-types';

export default class Description extends React.Component {
  state = {
    isEditDescription: false,
    description: '',
  };

  saveText = () => {
    this.setState({ isEditDescription: false });
    let valueTextArea = this.refs.text.value;
    if (!valueTextArea.trim()) {
      return;
    }
    let idCard = this.props.id;
    let idColumn = this.props.idColumn;
    this.props.addDescription(idCard, idColumn, valueTextArea);
  };

  render() {
    const { isEditDescription } = this.state;
    const { description } = this.props;
    return isEditDescription ? (
      <div>
        <textarea
          name="form-control"
          className="form-control"
          rows="3"
          ref="text"
          defaultValue={description}
        />
        <button
          type="submit"
          className="btn btn-warning pull-right"
          onClick={this.saveText}
        >
          Save
        </button>
      </div>
    ) : (
      <div onClick={() => this.setState({ isEditDescription: true })}>
        <h5 className="modal-title">Description</h5>
        <p>{description}</p>
      </div>
    );
  }
}
Description.propTypes = {
  id: PropTypes.number,
  idColumn: PropTypes.string.isRequired,
  addDescription: PropTypes.func.isRequired,
  isEditDescription: PropTypes.bool,
  valueTextArea: PropTypes.string,
  idCard: PropTypes.number,
  description: PropTypes.string.isRequired,
};

Description.defaultProps = {
  description: 'text description'
};
