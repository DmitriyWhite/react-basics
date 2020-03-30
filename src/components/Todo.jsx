import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Button from './Button';
import Checkbox from './Checkbox';

class Todo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        let title = this.refs.title.value;

        if (title) {
            this.props.onEdit(title, this.props.id);
            this.setState({editing: false})
        }
    }

    render() {
        if (this.state.editing) {
            return (
                <div className="todo">
                    <form className="todo__form" onSubmit={this.handleSubmit}>
                        <input type="text" ref="title" defaultValue={this.props.title} className="todo__field"/>
                        <div className="todo__actions">
                            <Button type="submit" className="todo__icon" icon="save" />
                        </div>
                    </form>
                </div>
            )
        } else {
            return (
                <div className={`todo ${this.props.completed ? 'completed' : ''}`}>
                    <div className="todo__item" onClick={() => this.props.onStatusChange(this.props.id)}>
                        <Checkbox checked={this.props.completed}/>
                        <span className="todo__title">{this.props.title}</span>
                    </div>
                    <div className="todo__actions">
                        <Button className="todo__icon" icon="edit" onClick={() => this.setState({editing: true})}/>
                        <Button className="todo__icon" icon="delete" onClick={() => this.props.onDelete(this.props.id)}/>
                    </div>
                </div>
            );
        }
    }
}

Todo.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    onStatusChange: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired
};

Todo.defaultProps = {
    completed: false
};

export default Todo;