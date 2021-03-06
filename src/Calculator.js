import React, {Fragment} from 'react'

class TemperatureInput extends React.Component{
    // constructor(props){
    //     super(props);
    // }
    handleChange(e){
        this.props.onTemperatureChange(e.target.value);
    }
    render(){
        const temperature = this.props.temperature;
        //const scale=this.props.scale;
        return <fieldset>
            <legend>Enter temperature:</legend>
            <input value={temperature} onChange={(e)=>this.handleChange(e)}/>
        </fieldset>
    }
}

class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state={temperature:'',scale:'c'};
    }
    handleCelsiusChange(temperature){
        this.setState({scale:'c',temperature});
    }
    handleFahrenheitChange(temperature){
        this.setState({scale:'f',temperature});
    }
    render(){
        const scale=this.state.scale;
        const temperature=this.state.temperature;
        const celsius=scale==='f'? tryConvert(temperature, toCelsius): temperature;
        const fahrenheit=scale==='c'? tryConvert(temperature, toFahrenheit): temperature;
        return <Fragment>
            <TemperatureInput scale='c' temperature={celsius}
            onTemperatureChange={(temperature)=>this.handleCelsiusChange(temperature)}/>
            <TemperatureInput scale='f' temperature={fahrenheit}
            onTemperatureChange={(temperature)=>this.handleFahrenheitChange(temperature)}/>
        </Fragment>
    }
}
function tryConvert(temperature, convert){
    const input=parseFloat(temperature);
    if(Number.isNaN(input)){
        return '';
    }
    const output=convert(input);
    const rounded=Math.round(output*1000)/1000;
    return rounded.toString();
}
function toCelsius(fahrenheit){
    return (fahrenheit-32)*5/9;
}
function toFahrenheit(celsius){
    return (celsius*9/5)+32;
}

export default Calculator;