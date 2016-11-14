import React, { Component } from 'react'
import UserInfo from './UserInfo'
import DeviceInfo from './DeviceInfo'
import ActionMenu from './ActionMenu'
import { Card, CardHeader, CardText } from 'material-ui/Card'
import axios from 'axios';

/** CSS */
import '../styles/Gadget.css'

class Gadget extends Component {

    functionFirstItem = () => {
        axios.post(`http://172.16.57.242:3080/push/${this.props.pin}`, {
            "type": 1,
            "userInfo": this.props.userInfo
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    functionSecondItem = () => {
        axios.post(`http://172.16.57.242:3080/push/${this.props.pin}`, {
            "type": 2,
            "userInfo": this.props.userInfo
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        const showFirstItem = (this.props.userInfo && this.props.userInfo.googleId !== "0") && (this.props.userInfo && this.props.userInfo.googleId !== (this.props.logged && this.props.logged.googleId))
        const showSecondItem = (this.props.userInfo && this.props.userInfo.googleId === (this.props.logged && this.props.logged.googleId));

        return (
            <Card className="Card-content">
                <CardHeader className="Card-header">
                    {this.props.userInfo ?
                        <div>
                            <UserInfo userInfo={this.props.userInfo} className="User-picture" />
                            <div className="User-info">
                                {this.props.userInfo.name}
                            </div>
                            <div className="User-mail">
                                {this.props.userInfo.email}
                            </div>
                            {
                                showFirstItem && <ActionMenu functionFirstItem={this.functionFirstItem} />
                            }
                            {
                                showSecondItem && <ActionMenu functionSecondItem={this.functionSecondItem} />
                            }
                        </div>
                        :
                        <div>
                            <div className="User-info">
                                Ainda não cadastrado
                            </div>
                        </div>
                    }
                </CardHeader>
                <hr className="Divider" />
                <CardText className="Card-text">
                    <DeviceInfo deviceInfo={this.props.deviceInfo} platform={this.props.platform} className="Device" />
                </CardText>
            </Card>
        );
    }
}

Gadget.propTypes = {
    pin: React.PropTypes.string,
    userInfo: React.PropTypes.object,
    deviceInfo: React.PropTypes.object,
    platform: React.PropTypes.number.isRequired
};

export default Gadget