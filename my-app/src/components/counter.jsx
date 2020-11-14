import React, { Component } from 'react';
class Counter extends Component {
    // state = { 
    //     value:this.props.counter.value
    // };
  
    handleIncrement= () =>{
      this.setState({value:this.state.value + 1});    
};

handleDecrement= () =>{
    this.setState({value:this.state.value - 1 })    
};

    render() { 
        
        return (
            <div>
         <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
      <button onClick = { () => this.props.onIncrement(this.props.counter) } className = "badge  btn-primary btn-lg  m-2" >+</button>
      <button onClick = { () => this.props.onDecrement(this.props.counter) } className = "badge badge-secondary  btn-lg  m-2" >-</button>

    <button onClick={() => this.props.onDelete (this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
       </div>
        );
        
    }

    getBadgeClasses(){
        let classes = "badge m-2 badge-";
           classes += this.props.counter.value === 0 ? "warning" : "primary";
           return classes;
         
    }      


    formatCount(){
        const{value}   = this.props.counter;
         return value  === 0 ? 'zero' : value;     
      } 
}
 
export default Counter;
;
