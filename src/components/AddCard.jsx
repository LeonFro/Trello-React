import React from 'react';
import '../App.css';

export default class AddCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false,
            card: '',
        }
        this.newCard = this.newCard.bind(this);
    };

    newCard() {
        this.setState({ isEdit: false });
        let newCard = this.refs.newCard.value;
        let idCard = this.props.id;
        this.props.addCard(idCard, newCard);
        this.setState({});
    }

    editTitle() {
        return (
            <form onSubmit={(e) => {
                e.preventDefault();
                return false;
            }}>
                <input type="text" className="form-control"
                    ref="newCard" name="card"
                />
                <button type="submit" className="btn btn-warning pull-right"
                    onClick={this.newCard}>Save</button>
            </form>
        )
    };

    noEdit() {
        return (
            <a className="add-card" onClick={() => this.setState({ isEdit: true })}>+ Add card </a>
        )
    };

    render() {
        return this.state.isEdit ? this.editTitle() : this.noEdit()
    };

};

