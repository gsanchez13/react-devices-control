import React, { Component, PropTypes } from 'react'

/** CSS */
import '../styles/UserInfo.css'

import Placeholder from '../assets/img/user.svg'

class UserInfo extends Component {
    render() { 
        const img = this.props.userInfo.url || Placeholder
        return (
            <div style={this.props.style || {}} className={`user-avatar ${this.props.className || ''}`}>
                <img src={img} alt="User" />
                <p>{this.props.userInfo.name}<br />{this.props.userInfo.email}</p>
            </div>
        );
    }
}

UserInfo.propTypes = {
    userInfo: PropTypes.object.isRequired,
    style: PropTypes.object,
    className: PropTypes.string
};

export default UserInfo