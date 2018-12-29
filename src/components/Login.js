import React from 'react';
import PropTypes from 'prop-types';

// ライフサイクルメソッドを使うのでclassに変更
export default class Login extends React.Component {
    // componentWillMount, componentWillReceivePropsを追加
    componentWillMount() {
        this.props.onMount(this.props.categoryId);
        this.setState({hogehoge:this.props.categoryId,i:this.state.i});
    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        if (this.props.categoryId !== nextProps.categoryId) {
            // props.categoryIdに変化があるので、ページ遷移が発生している
            this.props.onUpdate(nextProps.categoryId);

        }
        this.setState({hogehoge:nextProps.loginId,i:this.state.i})

    }

    constructor(props) {
        super(props);
        this.state ={hogehoge:'hogehoge','i':0};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        let clone = this.state;
        var i = clone.i;
        i++;
        clone.hogehoge = this.props.categoryId +' '+i;
        clone.i = i;
        this.setState(clone);
        this.props.onUpdate('hogehoge2')
        

    }
    render() {
        return (
            <div>
                <h2>Loginコンポーネント</h2>
                <p>カテゴリーID: {this.props.categoryId}</p>
                <p>loginID: {this.props.loginId}</p>
                <p>hoge : {this.state.hogehoge} </p>
                <a onClick={this.handleClick}>クリック</a>
            </div >
        );
    }
}
Login.propTypes = {
    categoryId: PropTypes.string,
    loginId: PropTypes.string,
    hogehoge: PropTypes.string,
    // onMount, onUpdateを追加
    onMount: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired
};
Login.defaultProps = {
    categoryId: '1',
    loginId: '3',
    hogehoge: 'foobar'
};

