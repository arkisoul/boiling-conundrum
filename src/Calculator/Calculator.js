import React, { Component } from 'react';
import BoilingVerdict from './BoilingVerdict.js';
import TemperatureInput from './TemperatureInput.js';
import tryConvert from './TemperatureConversion.js';
import toCelcius from './ToCelcius.js';
import toFahrehheit from './ToFahrenheit.js';
import './Calculator.css';

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {temperature: '', scale: 'c'};
        this.handleCelciusChange = this.handleCelciusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    }

    handleCelciusChange(temperature) {
        this.setState({scale: 'c', temperature});
    }

    handleFahrenheitChange(temperature) {
        this.setState({scale: 'f', temperature});
    }

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celcius = scale === 'f' ? tryConvert(temperature, toCelcius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrehheit) : temperature;
        return (
            <div id="calculator">
                <h1 className="heading">Boiling Conundrum</h1>
                <h1 className="subheading">A water boiling checking calculator. Enter a temperature value either in celcius or fahrenheit and see whether it is hot enough for boiling water.</h1>

                <TemperatureInput
                    scale="c"
                    temperature={celcius}
                    onTemperatureChange={this.handleCelciusChange} />

                <TemperatureInput
                    scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange} />

                <BoilingVerdict
                    celcius={parseFloat(celcius)} />
            </div>
        )
    }
}

export default Calculator;
