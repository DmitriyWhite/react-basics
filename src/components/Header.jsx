import React, { Component } from "react";
import PropTypes from 'prop-types';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1 className="header__h1">{this.props.title}</h1>
            </div>
        )
    }
}

Header.propTypes = {
    title: PropTypes.string
};

export default Header;

