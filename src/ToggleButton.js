import React from 'react'

class ToggleButton extends React.Component{
    constructor(props){
        super(props);
        this.state={isOn:false};
    }
    handleClick(){
        this.setState(()=>({isOn:!this.state.isOn}));
    }
    render(){
        //return <button onClick={()=>this.handleClick()}>{this.state.isOn? 'On':'Off'}</button>;
        //return this.state.isOn? null:<button onClick={this.handleClick}>click</button>;//error
        return this.state.isOn? null:<button onClick={()=>this.handleClick()}>click</button>;
    }
}

export default ToggleButton;