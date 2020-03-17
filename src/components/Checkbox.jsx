import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Checkbox extends Component {
    render() {
        return (
            <button className="todo__checkbox icon">
                <i className="material-icons">{this.props.checked ? 'check_box' : 'check_box_outline_blank'}</i>
            </button>
        )
    }
}

Checkbox.propTypes = {
    checked: PropTypes.bool.isRequired
};

Checkbox.defaultProps = {
    checked: false
};

export default Checkbox;