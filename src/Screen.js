import React, {Component} from 'react';
class Screen extends Component{
    
    render(){
        let num = this.props.input.filter(nums =>{
            return nums !== "=";
        }).filter(nums =>{
            return nums !== "Prev";
        }).filter(nums =>{
            return nums !== "Clear";
        }).map(nums=>{
            return nums;
        })
       return( 
       <div className = 'screen'>
            <h3> {num}</h3>
        </div>
       )

    }
}
export default Screen;