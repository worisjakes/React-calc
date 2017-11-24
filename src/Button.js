import React, {Component} from 'react';
export default class Button extends Component{
    constructor(){
        super();
        this.state = {
            operators: []
        }
    }
   
    render(){
       
            return(
                <input ref ="operators" onClick = {this.props.Onclick} type= 'button' value ={this.props.num}/>
            );
    }
}