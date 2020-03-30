import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <form className="todo-form">
                <input type="text" className="todo-form__field" placeholder="Что нужно сделать?"/>
                <Button type="submit" className="todo-form__submit">Добавить</Button>
            </form>
        );
    }
}

Form.propTypes = {

};

export default Form;
