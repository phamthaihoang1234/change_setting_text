import React, {Component} from 'react';
import './App.css';
import ColorPicker from "./component/ColorPicker";
import SizeSetting from "./component/SizeSetting";
import Result from "./component/Result";
import Reset from "./component/Reset";

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            color : 'red',
            fontsize : 12
        };

    }

    onSetColor = (params) => {
        this.setState({
            color: params
        })

    }
    onChangeSize = (value) =>{
        if(this.state.fontsize + value >=8 && this.state.fontsize + value <=36 ){
            this.setState({
                fontsize : this.state.fontsize + value
            });
        }else{
        }
    }

    onSettingDefault = (value) => {
            if(value === true){
               this.setState({
                   color : 'red',
                   fontsize : 12
               })
            }
    }

  render() {
    return (
        <div className="container-mt-50">
          <div className="row">
              // ta sẽ gửi dữ liệu từ con sang cha thông qua thằng props onReceiveColor và sau đó truyền cho hàm onSetColor
              <ColorPicker color = {this.state.color} onReceiveColor={this.onSetColor} />

            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <SizeSetting fontSize={this.state.fontsize} onChangeSize={this.onChangeSize}/>
              <Reset onSettingDefault={this.onSettingDefault}/>
            </div>
            <Result color={this.state.color} fontSize={this.state.fontsize}/>
          </div>
        </div>
    );


}
}

export default App;
