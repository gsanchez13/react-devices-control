import React, { Component } from 'react';
import UserInfo from './UserInfo';
import DeviceInfo from './DeviceInfo';
import ActionMenu from './ActionMenu';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import '../../styles/Gadget.css';

class Gadget extends Component {

    render() {
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
                            <ActionMenu />
                        </div>
                        :
                        <ActionMenu />
                    }
                </CardHeader>
                <hr className="Divider" />
                <CardText className="Card-text">
                    <DeviceInfo deviceInfo={this.props.deviceInfo} className="Device" />
                </CardText>
            </Card>
        );
    }
}

Card.propTypes = {
    userInfo: React.PropTypes.object,
    deviceInfo: React.PropTypes.object
};

export default Gadget;