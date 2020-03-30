import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

class Stopwatch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            running: false
        };
    }

    render() {
        return (
            <div className="stopwatch">
                <div className="stopwatch__time">00:00:00</div>
                <div className="stopwatch__controls">
                    <Button className="stopwatch__icon" icon={this.state.running ? 'pause' : 'play_arrow'}/>
                    <Button className="stopwatch__icon" icon="stop"/>
                </div>
            </div>
        );
    }
}

Stopwatch.propTypes = {};

export default Stopwatch;
