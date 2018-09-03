import React from 'react';
import '../App.css';

export default class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.isOpenModal = this.isOpenModal.bind(this);
    };

    isOpenModal() {
        this.props.cardModal()
    };

    render() {
        return (
            <div className="col border list-cards">
                <div className="list-card-details">
                    <span className="card-name">{this.props.title}</span>
                    <button type="button" className="btn btn-secondary btn-sm" disabled><i className="far fa-comment-dots"></i>0</button>
                    <button type="button" className="btn btn-info" onClick={this.isOpenModal}><i className="fas fa-pencil-alt"></i></button>
                </div>
            </div>
        )
    }
};