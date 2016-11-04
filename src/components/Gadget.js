import React, { Component } from 'react'
import UserInfo from './UserInfo'
import DeviceInfo from './DeviceInfo'
import ActionMenu from './ActionMenu'
import { Card, CardHeader, CardText } from 'material-ui/Card'

/** CSS */
import '../styles/Gadget.css'

class Gadget extends Component {

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
                                (showFirstItem || showSecondItem) ?
                                    <ActionMenu showFirstItem={showFirstItem} showSecondItem={showSecondItem} />
                                    : null
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
    userInfo: React.PropTypes.object,
    deviceInfo: React.PropTypes.object,
    platform: React.PropTypes.number.isRequired
};

export default Gadget