import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
    render() {
        return (
            <button className={this.props.className} onClick={this.props.onClick} {...this.props}>
                {
                    this.props.icon ? <i className="material-icons">{this.props.icon}</i> : this.props.children
                }
            </button>
        )
    }
}

Button.protoTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    icon: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node
};

export default Button;