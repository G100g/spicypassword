import { connect } from 'react-redux';
import FinalPassword from '../components/FinalPassword';

const mapStateToProps = (state, ownProps) => {
  return {
    value: state.password
  };
};

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     onChange: () => {
//       dispatch(updatePassword(ownProps.filter))
//     }
//   }
// };

const FinalResult = connect(
  mapStateToProps
)(FinalPassword);

export default FinalResult;
