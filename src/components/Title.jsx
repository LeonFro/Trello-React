import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

export default class Title extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false,
        }
    };

    changeTitle = () => {
        this.setState({ isEdit: false });
        let newTitle = this.refs.title.value;
        let titleId = this.props.id;
        this.props.saveTitle(titleId, newTitle);
    };

    editTitle() {
        return (
            <div>
                <input type="text" className="form-control"
                    defaultValue={this.props.title}
                    required
                    ref="title" />
                <button type="submit"
                    className="btn btn-primary pull-right"
                    onClick={this.changeTitle}>Ok</button>
            </div>
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
Title.propTypes = {
    changeTitle:PropTypes.func,
    isEdit:PropTypes.bool,
    noEdit:PropTypes.func,
    editTitle:PropTypes.func,
    title:PropTypes.string,
  };
Title.defaultProps = { 
    title:"Title column"
  };