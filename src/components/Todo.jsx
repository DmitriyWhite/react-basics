import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Button from './Button';
import Checkbox from './Checkbox';

class Todo extends Component {
    render() {
        return (
            <div className={`todo ${this.props.completed ? 'completed' : ''}`}>
                <Checkbox checked={this.props.completed}/>
                <span className="todo__title">{this.props.title}</span>
                <Button className={'todo__delete icon'} icon={'delete'}/>
            </div>
        );
    }
}

Todo.propTypes = {
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
};

Todo.defaultProps = {
    completed: false
};

export default Todo;