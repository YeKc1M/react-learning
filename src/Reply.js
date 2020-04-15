import React from 'react'

class Reply extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        //alert(this.props.content.toString());
        if(this.props.type==='text'){
            return <Text content={this.props.content}/>;
        }else if(this.props.type==='QuickReply'){
            return <QuickReply content={this.props.content.content} buttons={this.props.content.buttons}/>
        }else{
            return null;
        }
    }
}
function Text(props) {
    return <p>{props.content}</p>;
}
function QuickReply(props) {
    //const content=props.content;
    //alert(props.content);
    return <p>{props.content}<br/><button>{props.buttons.title}</button></p>
    //<br/><button>{props.content.buttons.title}</button>
}

export default Reply;