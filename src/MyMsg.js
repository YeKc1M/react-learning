import React from 'react'

class MyMsg extends React.Component{
    render(){
        return <div>{this.props.content}</div>;
    }
}

export default MyMsg;