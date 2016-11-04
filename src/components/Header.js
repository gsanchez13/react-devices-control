import React, { Component } from 'react';
import { AppBar } from 'material-ui';



class Header extends Component {
    render() {
        return (
            <div>
                <AppBar title="Inspector" 
                showMenuIconButton={false} 
                iconElementRight={
                    this.props.children
                }>
                </AppBar>
            </div>
        );
    }
}

export default Header;