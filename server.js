'use strict';

const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const todos = require('./api/todos');

let nextId = 4;

const app = express();

app.set('port', (process.env.PORT || 3000));

app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use((request, response, next) => {
    response.setHeader('Cache-Control', 'no-cache');
    next();
});

app.get('/api/todos', (request, response) => {
    response.send(todos);
});

app.post('/api/todos', (request, response) => {
    let todo = {
        id: nextId++,
        title: request.body.title,
        completed: false
    };

    todos.push(todo);

    response.send(todo);
});

app.put('/api/todos/:id', (request, response) => {
    let todo = todos.find(todo => todo.id == request.params.id);

    if (!todo) return response.sendStatus(404);

    todo.title = request.body.title || todo.title;

    response.json(todo);
});

app.patch('/api/todos/:id', (request, response) => {
    let todo = todos.find(todo => todo.id == request.params.id);

    if (!todo) return response.sendStatus(404);

    todo.completed = !todo.completed;

    response.json(todo);
});

app.delete('/api/todos/:id', (request, response) => {
    let index = todos.findIndex(todo => todo.id == request.params.id);

    if (index === -1) return response.sendStatus(404);

    todos.splice(index, 1);

    response.sendStatus(204);
});

app.listen(app.get('port'), (error) => {
    if (error) {
        return console.log('something bad happened', error);
    }
    console.log(`server is listening on http://localhost:${app.get('port')}`);
});