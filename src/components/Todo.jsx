import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Button from './Button';
import Checkbox from './Checkbox';

class Todo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            completed: this.props.completed
        }
    }

    handleClick(event) {
        this.setState({
            completed: !this.state.completed
        })
    }

    render() {
        return (
            <div className={`todo ${this.state.completed ? 'completed' : ''}`}>
                <div className="todo__item" onClick={() => this.handleClick()}>
                    <Checkbox checked={this.state.completed}/>
                    <span className="todo__title">{this.props.title}</span>
                </div>
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