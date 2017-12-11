import React from 'react';

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
}

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset className="fieldset">
                <legend className="legend">Enter temperature in {scaleNames[scale]}:</legend>
                <input type="number" className="FormControl" value={temperature} onChange={this.handleChange} placeholder={`Enter temprature in ${scaleNames[scale]}`} />
            </fieldset>
        )
    }
}

export default TemperatureInput;
