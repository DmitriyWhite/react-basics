import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./style/main.scss";
import todos from './todos';

ReactDOM.render(<App todos={todos} />, document.getElementById('root'));