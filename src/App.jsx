import React, { Component } from "react";
class App extends Component {
    render() {
        return (
            <main className="section section--main">
                <div className="header">
                    <h1 className="header__h1">React Todo</h1>
                </div>
                <section className="todo-list">
                    <div className="todo completed">
                        <button className="todo__checkbox icon">
                            <i className="material-icons">check_box</i>
                        </button>
                        <span className="todo__title">Изучить JS</span>

                        <button className="todo__cart icon">
                            <i className="material-icons">delete</i>
                        </button>
                    </div>
                    <div className="todo">
                        <button className="todo__checkbox icon">
                            <i className="material-icons">check_box_outline_blank</i>
                        </button>
                        <span className="todo__title">Изучить react</span>

                        <button className="todo__cart icon">
                            <i className="material-icons">delete</i>
                        </button>
                    </div>
                </section>
            </main>
        );
    }
}

export default App;
