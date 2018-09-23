import ModalGreeting from '../components/ModalGreeting';
import { connect } from 'react-redux';
import {addName} from '../actions';


const mapStateToProps = state => {
    return {
      name: state.name,
    }
  };
  
  const mapDispetchToProps = dispatch => ({
    setName: name => dispatch(addName(name))
  });

  export default connect(mapStateToProps, mapDispetchToProps)(ModalGreeting);