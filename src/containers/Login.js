// src/containers/Ranking.js
import { connect } from 'react-redux';
import Login from '../components/Login';
import * as actions from '../actions/Login';

// Reducerを定義後に実装します
const mapStateToProps = (state, ownProps) => ({
  categoryId: ownProps.categoryId,
  loginId: ownProps.loginId
});

const mapDispatchToProps = dispatch => ({
  // onMountとonUpdateをfetchRankingを接続
  onMount (categoryId) {
    dispatch(actions.fetchLogin(categoryId));
  },
  onUpdate (categoryId) {
    dispatch(actions.fetchLogin(categoryId));
    
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
