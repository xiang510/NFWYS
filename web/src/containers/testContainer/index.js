
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Test from './Test.jsx';

import { handleSleepTest , handleToast} from '../../actions';
const mapStateToProps = state => {
  return {
    test: state.test,
  };
};


const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
        handleSleepTest,
        handleToast
    },
    dispatch
  );
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Test);