// src/containers/Ranking.js
import { connect } from 'react-redux';
import Login from '../components/Login';
import * as actions from '../actions/Login';

// Reducerを定義後に実装します
// state に 現在のpropsを設定
const mapStateToProps = (state, ownProps) => (
  console.log(" map state to props ownprops"),
  console.log(" ownprops : " ),
  console.log(ownProps),
  console.log(" state : "),
  console.log(state),
  Object.assign({
  categoryId: state.Login.categoryId,
  loginId: state.Login.loginId
}));

// propsにdispatchを連結
const mapDispatchToProps = dispatch => ({
  // onMountとonUpdateをfetchRankingを接続
  onMount (categoryId) {
    console.log('map to dispach to props start console log on mount');
    dispatch(actions.fetchLogin(categoryId));
  },
  onUpdate (categoryId) {
    console.log('map to dispach to props -- start console log on update');
    dispatch(actions.fetchLogin(categoryId));
    
  }
});

// merge state and props
function mergeProps(stateProps,dispachProps,ownProps){
  return Object.assign({},ownProps,stateProps,dispachProps);

}

export default connect(mapStateToProps, mapDispatchToProps,mergeProps)(Login);
