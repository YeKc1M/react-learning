import React from 'react'
import axios from 'axios'

class NameForm extends React.Component{
    constructor(props){
        super(props);
        this.state={value:''};

        //this.handleChange=this.handleChange.bind(this);
        //this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({value:event.target.value});
    }
    handleSubmit(event){
        event.preventDefault();
        alert(this.state.value);
    }
    render(){
        return <div>
            <form method='POST' action="http://localhost:8080/Web200215/servlet/TestServlet">
            <label>name:
                <input type="text" name="name" value={this.state.value} onChange={(event)=>this.handleChange(event)}/>
            </label>
            <input type="submit" value="Submit"/>
            <p>{this.state.value}</p>
            </form>
            <AjaxForm/>
        </div>
    }
}

class AjaxForm extends React.Component{
    constructor(props){
        super(props);
        this.state={value:''};

        //this.handleChange=this.handleChange.bind(this);
        //this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({value:event.target.value});
    }
    handleSubmit(){
        axios({
            method:'post',
            url:'http://localhost:8080/Web200215/servlet/TestServlet',
            responseType:'json',
            data:{
                name:this.state.value
            }
        })
        .then(function(reponse){
            alert(reponse);
        })
        .catch(function(error){
            alert(error);
        });
    }
    render(){
        return <div><input type="text" name="name" value={this.state.value} onChange={(event)=>this.handleChange(event)}></input>
        <button onClick={()=>this.handleSubmit()}>submit</button><p>{this.state.value}</p><p id='back'></p></div>;
    }
}

export default NameForm