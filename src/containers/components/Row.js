import React, {Component, PropTypes} from 'react';


class Row extends Component {
    render() {
        return (
            <div className="row">
                <div className="columnLabel">{this.props.label}</div>
                <div  className="columnValue">{this.props.value}</div>
            </div>
        );
    }
}

Row.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string
};

export default Row;