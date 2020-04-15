import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyMsg from './MyMsg';
import Clock from './Clock';
import ToggleButton from './ToggleButton';
import Reply from './Reply';
//import App from './App';
//import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <h1>Hello world!</h1>,
  document.getElementById('root')
);
const name='m1ckey';
const element=<p>Hello, {name}</p>;
ReactDOM.render(element, document.getElementById('jsx1'))

// function tick(){
//   const element=(<p>It is {new Date().toUTCString()}</p>);
//   ReactDOM.render(element,document.getElementById('update_div'));
// }
// setInterval(tick,1000);
ReactDOM.render(<Clock/>, document.getElementById('update_div'));

class Welcome extends React.Component{
  render(){
    var name=this.props.name;
    if(name){
      return <p>Hello, {name}</p>;
    }else{
      return <p>Hello, world!</p>;
    }
  }
}
var myMsg='explore knowledge sources';
// const welcomeElement=<Welcome name="m1ckey"/>
// ReactDOM.render(welcomeElement, document.getElementById('Welcom_zone'));
ReactDOM.render(<Welcome name="m1ckey"/>, document.getElementById('Welcome_div'));
ReactDOM.render(<MyMsg content={myMsg}/>, document.getElementById('outerJs_div'));
ReactDOM.render(<ToggleButton/>, document.getElementById('click_div'));

//const reply={type:'text', content:'explore knowledge sources'}//pass
//const reply={type:'QuickReply', content:'explore knowledge sources', buttons:{title:'Yes', value:'Yes'}}
const reply={type:'QuickReply', content:{content:'explore knowledge sources', buttons:{title:'Yes',value:'Yes'}}};
ReactDOM.render(<Reply type={reply.type} content={reply.content}/>, document.getElementById('conditional_render_div'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
