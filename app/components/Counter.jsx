import React, { Component, PropTypes } from 'react';
import { Button } from 'react-bootstrap';

export class Counter extends Component {
    render() {
        const { value, onIncrement, onDecrement } = this.props
        return (
            <div>
                <p>Count: {value}</p>
                <Button onClick={onIncrement}>Increment</Button>
                <Button onClick={onDecrement}>Decrement</Button>
            </div>
        );
    }
}

Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
}