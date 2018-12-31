import React from 'react';
import ReactDOM from 'react-dom';
import {Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import PrintItem from './PrintItem'

// ライフサイクルメソッドを使うのでclassに変更
export default class Login extends React.Component {
    // componentWillMount, componentWillReceivePropsを追加
    componentWillMount() {
        console.log("start conmponetn will mount ");
        // this.props.onMount(this.props.categoryId);
        console.log("start conmponetn will mount after mount ");
    }
    componentWillReceiveProps(nextProps) {
        console.log('start will recieve props');
        console.log(nextProps);
        if (this.props.categoryId !== nextProps.categoryId) {
            // props.categoryIdに変化があるので、ページ遷移が発生している
            this.props.onUpdate(nextProps.categoryId);
            this.setState(nextProps);

        }
     
    }

    constructor(props) {
        super(props);
        console.log('constructor start print props');
        console.log('constructor start print this');
        this.state = {};
        this.state.categoryId = props.categoryId;
        this.state.loginId = props.loginId;
        this.state.hogehoge = 'foobar';
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        console.log('from getState')
        console.log(this);
        this.setState(Object.assign({categoryId:'handleclick'}));
        console.log(this);
        
        // this.setState(clone);
        this.props.onUpdate('hogehoge2')
        
     
    }
    render() {
        
        return (
            <div>
                <h2>Loginコンポーネント</h2>
                <PrintItem categoryId={this.state.categoryId} ></PrintItem>
                <p>カテゴリーID: {this.state.categoryId}</p>
                <p>loginID: {this.state.loginId}</p>
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

