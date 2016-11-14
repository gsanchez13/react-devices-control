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
                    this.props.functionFirstItem && <MenuItem primaryText="Solicitar Device" onClick={this.props.functionFirstItem} />
                }
                {
                    this.props.functionSecondItem && <MenuItem primaryText="Não está comigo" onClick={this.props.functionSecondItem} />
                }
            </IconMenu>
        );
    }
}


ActionMenu.propTypes = {
    functionFirstItem: React.PropTypes.func,
    functionSecondItem: React.PropTypes.func,
}

export default ActionMenu