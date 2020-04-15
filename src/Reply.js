import React from 'react'

class Reply extends React.Component{
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
class QRButtonArea extends React.Component{
    constructor(props){
        super(props);
        this.state={clicked:false};
    }
    changeClicked=()=>{
        this.setState({clicked: !this.state.clicked});
    }
    render(){
        const buttonItems=this.props.buttons.map((button)=>(<QRButton title={button.title} value={button.value} 
            change={this.changeClicked}/>));
        return this.state.clicked? null:<span>{buttonItems}</span>;
    }
}
class QRButton extends React.Component{
    render(){
        return <button onClick={()=>this.handleClick()}>{this.props.title}</button>
    }
    handleClick(){
        alert(this.props.value);
        this.props.change();
    }
}
function Text(props) {
    return <p>{props.content}</p>;
}
function QuickReply(props) {
    //const content=props.content;
    //alert(props.content);
    const buttons=props.buttons;
    //const buttonItems=buttons.map((button)=>(<QRButton title={button.title} value={button.value}/>));
    return <p>{props.content}<br/><QRButtonArea buttons={buttons}/></p>
    //<br/><button>{props.content.buttons.title}</button>
}

export default Reply;