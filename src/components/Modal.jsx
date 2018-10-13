import React from 'react';
import ReactModal from 'react-modal';
 
export function ModalWindow(props){

  return (
    <ReactModal isOpen={props.onClose} style={customStyles}>
      {props.children}
    </ReactModal>
  );
}

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