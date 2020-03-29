import React, { Component } from "react";
import PropTypes from 'prop-types';

class Stats extends Component {
    render() {
        let total = this.props.todos.length;
        let completed = this.props.todos.filter(todo => todo.completed).length;
        let notCompleted = total - completed;

        return (
            <div className="stats">
                <div className="stats__item">
                    <div className="stats__name">Всего задач:</div>
                    <div className="stats__data">{total}</div>
                </div>
                <div className="stats__item">
                    <div className="stats__name">Выполнено:</div>
                    <div className="stats__data">{completed}</div>
                </div>
                <div className="stats__item">
                    <div className="stats__name">Осталось:</div>
                    <div className="stats__data">{notCompleted}</div>
                </div>
            </div>
        )
    }
}

Stats.propTypes = {
    todos: PropTypes.array.isRequired
};

export default Stats;