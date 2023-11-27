import React from 'react';

class Counter extends React.Component {
  render() {
    return (
      <div className="Counter">
        <button onClick={() => this.props.incrementCount(this.props.id)}>+</button>
        <span>{this.props.count}</span>
        <button onClick={() => this.props.decrementCount(this.props.id)}>-</button>
      </div>
    );
  }
}

export default Counter;