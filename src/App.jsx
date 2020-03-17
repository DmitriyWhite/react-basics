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
                    <Todo title={'Изучить JS'} completed={true}/>
                    <Todo title={'Изучить react'} completed={false}/>
                </section>
            </main>
        );
    }
}

App.propTypes = {
    title: PropTypes.string.isRequired
};

App.defaultProps = {
    title: 'React Todo'
};

export default App;
