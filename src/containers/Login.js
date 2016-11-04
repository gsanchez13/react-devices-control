import React, {Component} from 'react';
import GoogleLogin from 'react-google-login';
import { IconButton, IconMenu, MenuItem } from 'material-ui';
import UserInfo from '../components/UserInfo'

// email: "tmarques@ciandt.com"
// familyName: "D Oliveira Marques Dos Santos"
// givenName : "Tiago"
// googleId : "113952945562957203252"
// imageUrl : "https://lh5.googleusercontent.com/-QrFTr2BaknU/AAAAAAAAAAI/AAAAAAAAETQ/tHMM0Rv5Wvs/s96-c/photo.jpg"
// name : "Tiago D Oliveira Marques Dos Santos"



class Login extends Component {


    responseGoogleSuccess = (response) => {
        console.log(response);
        if (response.profileObj.email.indexOf('@ciandt') > -1) {
            console.log(response);
            this.props.login(response.profileObj);
        } else {
            alert('Errouuuuu :(')
        }
    }

    responseGoogleError = (response) => {
        console.log(response);
        alert('Errouuuuu :(')
    }
    
    render() {
        const Logged = (props) => (
        <IconMenu
            {...props}
            iconButtonElement={
                <IconButton style={{width: "auto", height: "auto" }}>
                    <UserInfo userInfo={{
                        email: this.props.logged.email,
                        googleId: this.props.logged.googleId,
                        name: this.props.logged.givenName,
                        url: this.props.logged.imageUrl
                    }} />
                </IconButton>
            }
            targetOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
            >
            <MenuItem primaryText="Help" />
            <MenuItem primaryText="Sign out" />
        </IconMenu>
    );

    Logged.muiName = 'IconMenu';
        return (
            <div>
                {this.props.logged ?
                    <Logged />
                    :
                    <GoogleLogin
                        clientId="805656470435-2hs184f1a5ikcqsic6ilhp617qvlqnmd.apps.googleusercontent.com"
                        buttonText="CI&T G+"
                        onSuccess={this.responseGoogleSuccess}
                        onFailure={this.responseGoogleError}
                        />
                }
            </div>
        );
    }
}

export default Login;