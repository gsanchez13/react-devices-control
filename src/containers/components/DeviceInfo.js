import React, { Component, PropTypes } from 'react';
import Row from './Row.js'

import './DeviceInfo.css'

class DeviceInfo extends Component {

    render() {

        return (
            <div style={this.props.styles || {}} className={this.props.className} >
                <div className="DeviceInfo">
                    <div className="DeviceDivImg">
                        <img className="DeviceImg" src={this.props.deviceInfo.url} alt="Device" />
                    </div>
                    <div className="DeviceDivInfo">
                        {this.props.admin ? <Row label="Device ID" value={this.props.deviceInfo.deviceId} /> : null}
                        <Row label="Name" value={this.props.deviceInfo.name} />
                        {this.props.deviceInfo.nickname ? <Row label="Nickname" value={this.props.deviceInfo.nickname} /> : null}
                        <Row label="Screen" value={this.props.deviceInfo.screen} />
                        {/**<Row label="API" value={this.props.deviceInfo.api} /> */}
                        {this.props.deviceInfo.apiName ? <Row label="API Name" value={this.props.deviceInfo.apiName} /> : null}
                    </div>
                </div>
            </div>
        );
    }
}

DeviceInfo.propTypes = {
    admin: PropTypes.bool,
    deviceInfo: PropTypes.object.isRequired,
    styles: PropTypes.object,
    className: PropTypes.string
};

export default DeviceInfo;