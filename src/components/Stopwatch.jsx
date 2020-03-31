import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

class Stopwatch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            running: false,
            elapsed: 0,
            lastTick: 0
        };

        this.tick = this.tick.bind(this);
        this.handleStart = this.handleStart.bind(this);
        this.handlePause = this.handlePause.bind(this);
        this.handleStop = this.handleStop.bind(this);
    }

    componentDidMount() {
        this.interval = setInterval(this.tick, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    tick() {
        if(this.state.running) {
            let now = Date.now();
            let diff = now - this.state.lastTick;

            this.setState({
                elapsed: this.state.elapsed + diff,
                lastTick: now
            })
        }
    }

    handleStart() {
        this.setState({
            running: true,
            lastTick: Date.now()
        })
    }

    handlePause() {
        this.setState({running: false})
    }

    handleStop() {
        this.setState({
            running: false,
            elapsed: 0,
            lastTick: 0
        })
    }

    mask(array) {
        let arraySize = array.length;
        let format = '';
        return array.map((item, i) => {
            let mask = item > 9 ? item : '0' + item;
            return format =  arraySize === i+1 ? mask : mask + ':';
        })
    }

    format(milliseconds) {
        let totalSeconds = Math.floor(milliseconds / 1000);
        let totalMinutes = Math.floor(totalSeconds / 60);
        let hours = Math.floor(totalMinutes / 60);
        let minutes = totalMinutes % 60;
        let seconds = totalSeconds % 60;

        return this.mask([hours,minutes,seconds])
    }

    render() {
        let time = this.format(this.state.elapsed);

        return (
            <div className="stopwatch">
                <div className="stopwatch__time">{time}</div>
                <div className="stopwatch__controls">
                    {this.state.running ?
                        <Button className="stopwatch__icon" icon="pause" onClick={this.handlePause}/>
                        :
                        < Button className = "stopwatch__icon" icon="play_arrow" onClick={this.handleStart}/>
                    }
                    <Button className="stopwatch__icon" icon="stop" onClick={this.handleStop}/>
                </div>
            </div>
        );
    }
}

Stopwatch.propTypes = {};

export default Stopwatch;
