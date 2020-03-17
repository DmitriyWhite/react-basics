import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
    render() {
        return (
            <button className={this.props.className}>
                <i className="material-icons">{this.props.icon}</i>
            </button>
        )
    }
}

export default Button;