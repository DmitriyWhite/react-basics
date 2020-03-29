import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
    render() {
        return (
            <button className={this.props.className} onClick={this.props.onClick}>
                <i className="material-icons">{this.props.icon}</i>
            </button>
        )
    }
}

Button.protoTypes = {
    className: PropTypes.string,
    icon: PropTypes.string,
    onClick: PropTypes.func
};

export default Button;