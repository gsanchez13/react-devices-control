import React, { Component } from 'react';
import Gadget from './containers/components/Gadget';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                        <Gadget userInfo={ this.props.gadget.userInfo } deviceInfo={ this.props.gadget.deviceInfo }/>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                        <Gadget userInfo={ this.props.gadget.userInfo } deviceInfo={ this.props.gadget.deviceInfo }/>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                        <Gadget userInfo={ this.props.gadget.userInfo } deviceInfo={ this.props.gadget.deviceInfo }/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
