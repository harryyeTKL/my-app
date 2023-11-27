import React from 'react';

class CounterSizeGenerator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
        };
    }

    handleInputChange = (event) => {
        const value = event.target.value;
        // Ensure the input value is an integer
        if (/^\d+$/.test(value) || value === '') {
            this.setState({ inputValue: value });
        }
    }

    render() {
        return (
            <div className="App" >
            </div>
        );
    }
}

export default CounterSizeGenerator;