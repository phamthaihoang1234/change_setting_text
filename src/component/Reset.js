import React, {Component} from 'react';


class Reset extends Component{

    onResetDefault = () =>{
        // thăng cha truyền cho nó cái props
        this.props.onSettingDefault(true);
    }
    render() {
        return (
            <button type="button" className="btn btn-primary>" onClick={this.onResetDefault} id="reset">Reset</button>
        );
    }
}

export default Reset;
