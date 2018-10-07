import React from 'react';
import PropTypes from 'prop-types';

export default class Description extends React.Component {
    state = {
        isEditDescription: false,
        description: '',
    };

    saveText = () => {
        this.setState({ isEditDescription: false })
        let valueTextArea = this.refs.text.value;
        if (!valueTextArea.trim()) {
            return;
        };
        let idCard = this.props.id;
        let idColumn = this.props.idColumn;
        this.props.addText(idCard, idColumn, valueTextArea);
    };

    render() {
        const { isEditDescription } = this.state;
        const { description } = this.props;
        return (isEditDescription ? <div>
            <textarea name="form-control"
                className="form-control"
                rows="3"
                ref="text"
                defaultValue={description}>
            </textarea>
            <button type="submit"
                className="btn btn-warning pull-right"
                onClick={this.saveText}>Save</button>
        </div> :
            <div onClick={() => this.setState({ isEditDescription: true })}>
                <h5 className="modal-title">Description</h5>
                <p>{description}</p>
            </div>)
    };
};
Description.propTypes = {
    saveText: PropTypes.func,
    isEditDescription: PropTypes.bool,
    description: PropTypes.string,
};

Description.defaultProps = {
    isEditDescription: false,
    description: 'text description'
};
