import React from 'react';
import PropTypes from 'prop-types';

export default class AddCard extends React.Component {
    state = {
        isEdit: false,
    };

    newCard = () => {
        this.setState({ isEdit: false });
        let newCard = this.refs.newCard.value;
        if (!newCard.trim()) {
            return;
        };
        let idCard = this.props.id;
        this.props.addCard(idCard, newCard);
    };

    editTitle() {
        return (
            <div className="row justify-content-md-center">
                <div className="col-md-8">
                    <input type="text" className="form-control"
                        ref="newCard" /></div>
                <button type="submit" className="btn btn-warning pull-right col-md-3"
                    onClick={this.newCard}>Save</button>
            </div>
        )
    };

    noEdit() {
        return (
            <a className="add-card"
                onClick={() => this.setState({ isEdit: true })}
            >+ Add card
            </a>
        )
    };

    render() {
        return this.state.isEdit ? this.editTitle() : this.noEdit()
    };
};

AddCard.propTypes = {
    newCard: PropTypes.func,
    isEdit: PropTypes.bool,
    editTitle: PropTypes.func,
    noEdit: PropTypes.func,
};
AddCard.defaultProps = {
    modalGreetingOpen: true,
    modalCardOpen: false,
};