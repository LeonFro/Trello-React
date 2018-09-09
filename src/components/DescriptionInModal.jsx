import React from 'react';
import PropTypes from 'prop-types';

export default class Description extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditDescription: false,
            description: '',
        }
    }

    saveText = () => {
        this.setState({ isEditDescription: false })
        let valueTextArea=this.refs.text.value;
        let idCard = this.props.id;
        let idColumn = this.props.idColumn;
        this.props.addText(idCard,idColumn,valueTextArea);
    }

    editDescription() {
        const {description}=this.props;
        return (<div>
            <textarea name="form-control"
                className="form-control"
                rows="3"
                ref="text"
                defaultValue={description}>
            </textarea>
            <button type="submit"
                className="btn btn-warning pull-right"
                onClick={this.saveText}>Save</button>
        </div>)
    };

    noEdit() {
        const {description}=this.props;
        return (
            <div onClick={() => this.setState({ isEditDescription: true })}>
                <h5 className="modal-title">Description</h5>
                <p>{description}</p>
            </div>
        )
    };

    render() {
        return this.state.isEditDescription ? this.editDescription() : this.noEdit();

    };
};
Description.propTypes = {
    saveText:PropTypes.func,
    editDescription:PropTypes.func,
    noEdit:PropTypes.func,
    isEditDescription:PropTypes.bool,
    description:PropTypes.any,
  };

  Description.defaultProps = {
    isEditDescription: false,
    description:'text description'
  };
