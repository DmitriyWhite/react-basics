import React, { Component } from "react";
import PropTypes from 'prop-types';
import Stats from './Stats';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="row u-align-items-center">
                    <div className="col-6">
                        <Stats todos={this.props.todos}/>
                    </div>
                    <div className="col-6">
                        <h1 className="header__h1">{this.props.title}</h1>
                    </div>
                </div>
            </div>
        )
    }
}

Header.propTypes = {
    title: PropTypes.string,
    todos: PropTypes.array.isRequired
};

export default Header;

