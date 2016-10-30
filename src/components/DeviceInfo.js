import React, { Component, PropTypes } from 'react'
import Row from './Row.js'
import PlaceholderIOS from '../assets/img/ios.svg'
import PlaceholderAndroid from '../assets/img/android.svg'
import PlaceholderWin from '../assets/img/windowsphone.svg'

/** CSS */
import '../styles/DeviceInfo.css'

class DeviceInfo extends Component {

    render() {
    const placeholder = [PlaceholderAndroid,PlaceholderIOS,PlaceholderWin] 
    const image =  this.props.deviceInfo.url || placeholder[parseInt(this.props.platform)-1]
        return (
            <div style={this.props.styles || {}} className={this.props.className} >
                <div className="DeviceInfo">
                    <div className="DeviceDivImg">
                        <img className="DeviceImg" src={image} alt="Device" />
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
    platform: PropTypes.number.isRequired,
    className: PropTypes.string
}

export default DeviceInfo