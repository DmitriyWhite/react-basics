import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Header from './components/Header';
import Todo from './components/Todo';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: this.props.initialData
        }
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

    render() {
        return (
            <main className="section section--main">
                <Header title={this.props.title}/>

                <section className="todo-list">
                    {
                        this.state.todos.map((todo) =>
                            <Todo key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} onStatusChange={this.handleStatusChange.bind(this)}/>
                        )
                    }
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
