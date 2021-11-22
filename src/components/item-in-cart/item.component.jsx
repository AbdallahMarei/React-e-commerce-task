import React from 'react'
import "./item.styles.css"

class Item extends React.Component{
   constructor(props){
       super(props);

       this.state={
           counter: 1,
       }
   }

   handleIncrease = () => {
    this.props.addTotal()
    this.setState((prevState) => ({counter: prevState.counter +1}))
  }
  handleDecrease = (entry) => {
    if(this.state.counter > 1){
        this.props.subTotal()
      this.setState((prevState) => ({counter: prevState.counter -1}))
    } else if (this.state.counter <= 1){
      this.props.removeCart(entry)
      this.props.subTotal()
    }
  }

render(){
    return (
        <div className="container">
            <h2 className="product">{this.props.title}</h2>
            <div className="buttons">
            <button className="decrease" onClick={() => this.handleDecrease(this.props.id)}>-</button>
            <span>{this.state.counter ? this.state.counter: "empty"}</span>
            <button className="increase" onClick={this.handleIncrease}>+</button>
            </div>
            <img src={this.props.pic} alt="device" />
            </div>
    )
}
}


export default Item;
