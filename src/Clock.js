import React from 'react'

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state={date:new Date()};
    }
    render(){
        return <p>{this.state.date.toUTCString()}</p>;
    }
    componentDidMount(){
        this.timeID=setInterval(()=>this.tick(),1000);
    }
    componentWillUnmount(){
        clearInterval(this.timeID);
    }
    tick(){
        this.setState(()=>({date:new Date()}));
    }
}

export default Clock;