import React from 'react';
import Counter from './Counter';
class CounterGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numCounters: 0,
            counters: {},
        };
    }

    handleInputChange = (event) => {
        const value = event.target.value;
        if (/^\d+$/.test(value) || value === '') {
            let counters = {};
            for (let i = 0; i < parseInt(value, 10); i++) {
                counters[i] = 1;
            }
            this.setState({ numCounters: parseInt(value, 10), counters: parseInt(value, 10) === 0 ? {} : counters });
        }
    }

    incrementCount = (id) => {
        this.setState(prevState => ({
            counters: {
                ...prevState.counters,
                [id]: prevState.counters[id] + 1,
            },
        }));
    }

    decrementCount = (id) => {
        this.setState(prevState => ({
            counters: {
                ...prevState.counters,
                [id]: prevState.counters[id] - 1,
            },
        }));
    }

    renderCounters = () => {
        let counters = [];
        for (let i = 0; i < this.state.numCounters; i++) {
            counters.push(
                <Counter
                    key={i}
                    id={i}
                    count={this.state.counters[i]}
                    incrementCount={this.incrementCount}
                    decrementCount={this.decrementCount}
                />
            );
        }
        return counters;
    }

    render() {
        const sum = Object.values(this.state.counters).reduce((a, b) => a + b, 0);
        return (
            <div className="CounterGroup">
                <input
                    type="text"
                    onChange={this.handleInputChange}
                    placeholder="Enter number of counters"
                />
                <p>Total Sum: {sum}</p>
                {this.renderCounters()}

            </div>
        );
    }
}

export default CounterGroup;