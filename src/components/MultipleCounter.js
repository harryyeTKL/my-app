// MultipleCounter.js
import React from 'react';
import CounterGroup from './CounterGroup';

class MultipleCounter extends React.Component {
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
            this.setState({ numCounters: parseInt(value, 10), counters });
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



    render() {
        const sum = Object.values(this.state.counters).reduce((a, b) => a + b, 0);

        let divStyle = {
            border: 'white solid 2px',
            padding: '1.5rem'// 'ms' is the only lowercase vendor prefix
        };
        return (
            <div className="MultipleCounter">
                <div style={divStyle}>
                    <input
                        type="text"
                        onChange={this.handleInputChange}
                        placeholder="Enter number of counters"

                    />
                </div>
                <p>Total Sum: {sum}</p>
                <CounterGroup
                    numCounters={this.state.numCounters}
                    counts={this.state.counters}
                    incrementCount={this.incrementCount}
                    decrementCount={this.decrementCount}
                />
            </div >
        );
    }
}

export default MultipleCounter;