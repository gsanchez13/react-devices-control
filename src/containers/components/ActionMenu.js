import React, { Component } from 'react';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import '../../styles/ActionMenu.css';

class ActionMenu extends Component {

    render() {
        return (
            <IconMenu className="Action-menu"
                      iconButtonElement={ <IconButton><MoreVertIcon/></IconButton> }
                      anchorOrigin={ { horizontal: 'right', vertical: 'top' } }
                      targetOrigin={ { horizontal: 'right', vertical: 'top' } }
            >
                <MenuItem primaryText="Solicitar Device"/>
                <MenuItem primaryText="Não está comigo"/>
            </IconMenu>
        );
    }
}

export default ActionMenu;