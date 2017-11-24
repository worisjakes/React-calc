import React, { Component } from 'react';
import Screen from './Screen';
import Answer from './Answer';
import Button from './Button';

class App extends Component {
  constructor(){
    super();
    this.state = {
      inputs : [],
      answer : "0",

    }

    this.handleClick = this.handleClick.bind(this);
  }

   handleClick(e){
     
     let instance = this.state.inputs;
     if(e.target.getAttribute('value')=== '='){
       let ans=0;
          for(let i = 0; i< instance.length; i++){
            if(instance[i]=== '+'){
              
              if(ans === 0){
              let rhs = instance.slice(0, instance.indexOf(instance[i])).join("");
              let lhs = instance.slice(-instance.indexOf(instance[i])).join("");
              ans = parseInt(rhs) + parseInt(lhs);
              console.log(rhs);
              console.log(lhs);
            }else{
             let lhs = instance.slice(-instance.indexOf(instance[i])).join("");
             ans += parseInt(lhs);
            }   
            }
          }
          this.setState((prevState,props)=>{
            return {answer:ans};
          })
          console.log(ans);
     }
     
        let value = e.target.getAttribute('value')
        
        instance.push(value)
        this.setState((prevState, props)=>{
          return {inputs: instance}  
        })
        if(e.target.getAttribute('value')==="Clear"){
          instance = [];
          console.log(instance);
          this.setState((prevState, props)=>{
          return {inputs: instance}  
         
        })
     }

    }
  render() {
    const numbers = [0,1,2,3,4,5,6,7,8,9,'+','-','/','*','=', 'Clear', "Prev"].map(nums =>{
      return (
        <Button key ={nums} Onclick = {this.handleClick} num ={nums} />
      )
    })
    return (
      <div className="App">
        <h1> Hello react</h1>
        <Screen input = {this.state.inputs} />
        <Answer ans = {this.state.answer}/>
        {numbers}
      </div>
    );
  }
}

export default App;
