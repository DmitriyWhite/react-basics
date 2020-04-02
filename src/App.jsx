import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Header from './components/Header';
import Todo from './components/Todo';
import Form from './components/Form';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: []
        };

        this.handleAdd = this.handleAdd.bind(this);
        this.handleChangeTodo = this.handleChangeTodo.bind(this);
        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        axios.get('/api/todos')
            .then(response => response.data)
            .then(todos => this.setState({todos}))
            .catch(this.handleError);
    }

    handleAdd(title) {
        axios.post('/api/todos', {title})
            .then(response => response.data)
            .then(todo => {
                const todos = [...this.state.todos, todo];

                this.setState({todos})
            })
            .catch(this.handleError);
    }

    handleChangeTodo(title, id) {
        axios.patch(`/api/todos${id}`, {title})
            .then(response => {
                const todos = this.state.todos.map(todo => {
                    if (todo.id === id) {
                        todo = response.data
                    }

                    return todo
                });

                this.setState({todos})
            })
            .catch(this.handleError);

    }

    handleStatusChange(id) {
        axios.patch(`/api/todos${id}`)
            .then(response => {
                const todos = this.state.todos.map(todo => {
                    if (todo.id === id) {
                        todo = response.data
                    }

                    return todo
                });

                this.setState({todos})
            })
            .catch(this.handleError);

    }

    handleDelete(id) {
        axios.delete(`/api/todos${id}`)
            .then(() => {
                const todos = this.state.todos.filter(todo => todo.id !== id);
                this.setState({todos})
            })
            .catch(this.handleError);
    }

    handleError(error) {
        console.log(error)
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
    }))
};

App.defaultProps = {
    title: 'React Todo'
};

export default App;
