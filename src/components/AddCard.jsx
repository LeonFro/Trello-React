import React from "react";
import PropTypes from "prop-types";

export default class AddCard extends React.Component {
  state = {
    cangeFormOnEdit: false
  };

  saveCard = () => {
    this.setState({ cangeFormOnEdit: false });
    let newCard = this.refs.newCard.value;
    if (!newCard.trim()) {
      return;
    }
    let idCard = this.props.id;
    this.props.addCard(idCard, newCard);
  };

  render() {
    const { cangeFormOnEdit } = this.state;
    return cangeFormOnEdit ? (
      <div className="row justify-content-md-center">
        <div className="col-md-8">
          <input type="text" className="form-control" ref="newCard" />
        </div>
        <button
          type="submit"
          className="btn btn-warning pull-right col-md-3"
          onClick={this.saveCard}
        >
          Save
        </button>
      </div>
    ) : (
        <a
          className="add-card"
          onClick={() => this.setState({ cangeFormOnEdit: true })}
        >
          + Add card
      </a>
      );
  }
}

AddCard.propTypes = {
  saveCard: PropTypes.func,
  cangeFormOnEdit: PropTypes.bool,
  idCard: PropTypes.number,
  newCard: PropTypes.string
};
