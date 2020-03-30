import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault();
        let title = this.state.title;
        if (title) {
            this.props.onAdd(title);
            this.setState({ title: '' });
        }
    }

    handleChange(event) {
        event.preventDefault();
        let title = event.target.value;
        this.setState({title})
    }

    render() {
        return (
            <form className="todo-form" onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.title} onChange={this.handleChange} className="todo-form__field" placeholder="Что нужно сделать?"/>
                <Button type="submit" className="todo-form__action">Добавить</Button>
            </form>
        );
    }
}

Form.propTypes = {
    onAdd: PropTypes.func.isRequired
};

export default Form;
