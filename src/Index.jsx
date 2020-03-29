import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./style/main.scss";
import todos from './todos';

ReactDOM.render(<App initialData={todos} />, document.getElementById('root'));