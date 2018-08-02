import React from 'react';
import PropTypes from 'prop-types';

// ライフサイクルメソッドを使うのでclassに変更
export default class Login extends React.Component {
    // componentWillMount, componentWillReceivePropsを追加
    componentWillMount() {
        this.props.onMount(this.props.categoryId);
    }
    componentWillReceiveProps(nextProps) {
        // if (this.props.categoryId !== nextProps.categoryId) {
            // props.categoryIdに変化があるので、ページ遷移が発生している
        //     this.props.onUpdate(nextProps.categoryId);
        // }
    }

    render() {
        return (
            <div>
                <h2>Loginコンポーネント</h2>
                <p>カテゴリーID: {this.props.categoryId}</p>
                <p>loginID: {this.props.loginId}</p>
            </div>
        );
    }
}
Login.propTypes = {
    categoryId: PropTypes.string,
    loginId: PropTypes.string,
    // onMount, onUpdateを追加
    onMount: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired
};
Login.defaultProps = {
    categoryId: '1',
    loginId: '1',
};

