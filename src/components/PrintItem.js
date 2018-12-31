import React from 'react';
import ReactDOM from 'react-dom';

export default class PrintItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.state.categoryId = props.categoryId;
    }


    render(props) {
        return (
            <React.Fragment>
                <div> kategori : {this.props.categoryId}</div>
                
            </React.Fragment>
        )
    }

}
