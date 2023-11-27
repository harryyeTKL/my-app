import React from 'react';
import Counter from './Counter';


class CounterGroup extends React.Component {
    renderCounters = () => {
        let counters = [];
        for (let i = 0; i < this.props.numCounters; i++) {
            counters.push(
                <Counter
                    key={i}
                    id={i}
                    count={this.props.counts[i]}
                    incrementCount={this.props.incrementCount}
                    decrementCount={this.props.decrementCount}
                />
            );
        }
        return counters;
    }

    render() {
        return (
            <div className="CounterGroup">
                {this.renderCounters()}
            </div>
        );
    }
}

export default CounterGroup;