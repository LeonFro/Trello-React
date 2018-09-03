import React from 'react';

import '../App.css';

export default class Title extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false,
        }
        this.changeTitle = this.changeTitle.bind(this);
    };

changeTitle(){
    this.setState({ isEdit: false });
    let newTitle = this.refs.title.value;
    let titleId = this.props.id;
    this.props.saveTitle(titleId,newTitle);
}


    editTitle() {
        return (
            <form onSubmit={(e) => {
                e.preventDefault();
                return false;
            }}>
                <input type="text" className="form-control"
                    defaultValue={this.props.title}
                    required
                    ref="title" />
                <button type="submit" className="btn btn-primary pull-right"
                    onClick={this.changeTitle}>Ok</button>
            </form>
        )
    };

    noEdit() {
        return (
            <h2 onClick={() => this.setState({ isEdit: true })}>{this.props.title}</h2>
        )
    };

    render() {
        return this.state.isEdit ? this.editTitle() : this.noEdit()
    };

};