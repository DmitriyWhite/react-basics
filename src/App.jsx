import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Header from './components/Header';
import Todo from './components/Todo';
import Form from './components/Form';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: this.props.initialData
        };

        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleStatusChange(id) {
        let todos = this.state.todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }

            return todo
        });

        this.setState({todos})
    }

    handleDelete(id) {
        let todos = this.state.todos.filter(todo => todo.id !== id);
        this.setState({todos})
    }

    render() {
        return (
            <main className="section section--main">
                <Header title={this.props.title} todos={this.state.todos}/>

                <section className="todo-list">
                    {
                        this.state.todos.map((todo) =>
                            <Todo
                                key={todo.id}
                                id={todo.id}
                                title={todo.title}
                                completed={todo.completed}
                                onStatusChange={this.handleStatusChange}
                                onDelete={this.handleDelete}
                                onEdit={this.handleChangeTodo}
                            />
                        )
                    }

                    <Form onAdd={this.handleAdd}/>
                </section>
            </main>
        );
    }
}

App.propTypes = {
    title: PropTypes.string.isRequired,
    initialData: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    })).isRequired
};

App.defaultProps = {
    title: 'React Todo'
};

export default App;
