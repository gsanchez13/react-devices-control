import React, {Component, PropTypes} from 'react';
import '../../styles/UserInfo.css';

class UserInfo extends Component {
    render() {
        return (
            <div style={this.props.style || {}} className={`user-avatar ${this.props.className || ''}`}>
                <img  src={this.props.userInfo.url}/>
                <p>{this.props.userInfo.name}<br/>{this.props.userInfo.email}</p>
            </div>
        );
    }
}

UserInfo.propTypes = {
    userInfo: PropTypes.object.isRequired,
    style: PropTypes.object,
    className: PropTypes.string
};

export default UserInfo;