import React, { Component } from 'react'
import MenuItem from 'material-ui/MenuItem'
import IconMenu from 'material-ui/IconMenu'
import IconButton from 'material-ui/IconButton'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'

/** CSS */
import '../styles/ActionMenu.css'

class ActionMenu extends Component {

    render() {
        return (
            <IconMenu className="Action-menu"
                iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                targetOrigin={{ horizontal: 'right', vertical: 'top' }}>
                {
                    this.props.showFirstItem && <MenuItem primaryText="Solicitar Device" />
                }
                {
                    this.props.showSecondItem && <MenuItem primaryText="Não está comigo" />
                }
            </IconMenu>
        );
    }
}


ActionMenu.propTypes = {
    showFirstItem: React.PropTypes.bool,
    showSecondItem: React.PropTypes.bool
}

export default ActionMenu