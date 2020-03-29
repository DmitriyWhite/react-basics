import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Button from './Button';
import Checkbox from './Checkbox';

class Todo extends Component {
    render() {
        return (
            <div className={`todo ${this.props.completed ? 'completed' : ''}`}>
                <div className="todo__item" onClick={() => this.props.onStatusChange(this.props.id)}>
                    <Checkbox checked={this.props.completed}/>
                    <span className="todo__title">{this.props.title}</span>
                </div>
                <Button className={'todo__delete icon'} icon={'delete'} onClick={() => this.props.onDelete(this.props.id)}/>
            </div>
        );
    }
}

Todo.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    onStatusChange: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};

Todo.defaultProps = {
    completed: false
};

export default Todo;