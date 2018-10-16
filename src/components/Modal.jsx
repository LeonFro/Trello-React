import React from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';

export default class ModalWindow extends React.Component{

  componentWillMount() {
    ReactModal.setAppElement('body');
  }
  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyUp, false);
  }
  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyUp, false);
  }

  handleKeyUp = e => {
    const keys = {
      27: () => {
        e.preventDefault();
        this.props.onCloseRequest();
        window.removeEventListener('keyup', this.handleKeyUp, false);
      },
      13: () => {
        e.preventDefault();
        this.props.handleClick();
        window.removeEventListener('keyup', this.handleKeyUp, false);
      }
    };
    if (keys[e.keyCode]) {
      keys[e.keyCode]();
    }
  };
  
  render(){
    const { 
      onClose,
      children,  
    } =this.props;
    return (
      <ReactModal 
        isOpen={onClose} 
        style={customStyles}>
        {children}
      </ReactModal>
    );
  }
}

ModalWindow.propTypes = {
  children: PropTypes.node.isRequired,
  customStyles: PropTypes.any,
};

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(117, 117, 117, 0.75)'
  },
  content: {
    border: 0,
    background: 'rgba(117, 117, 117, 0)'
  }
};