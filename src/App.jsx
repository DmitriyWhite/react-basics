import React, { Component } from "react";
import PropTypes from 'prop-types';

import Header from './components/Header';
import Todo from './components/Todo';

class App extends Component {
    render() {
        return (
            <main className="section section--main">
                <Header title={this.props.title}/>

                <section className="todo-list">
                    {
                        this.props.todos.map((todo) =>
                            <Todo key={todo.id} title={todo.title} completed={todo.completed}/>
                        )
                    }
                </section>
            </main>
        );
    }
}

App.propTypes = {
    title: PropTypes.string.isRequired,
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    })).isRequired
};

App.defaultProps = {
    title: 'React Todo'
};

export default App;
