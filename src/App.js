import React from "react"
import './App.css';
import Item from "./components/item-in-cart/item.component";

class App extends React.Component {
  constructor(props){
    super(props);

    this.state={
      counterTotal: 3,
      items: [
        {name: "PC", image: "/images/pc.jfif", id:0},
        {name: "PS5", image: "/images/ps5.png", id:1},
        {name: "Xbox", image: "/images/xbox.png", id:2},
      ]
    }
  }

  // let [...rest] = this.state.items
  // const hello = this.state.bye.push(rest[id])
  

  addCounterTotal = () => {
    this.setState((prevState) => ({counterTotal: prevState.counterTotal +1}))
  }
  subCounterTotal = () => {
    this.setState((prevState) => ({counterTotal: prevState.counterTotal -1}))
  }

  removeFromCart = (entry) => {
    const newArray = this.state.items.filter(element => element.id !== entry)
    this.setState({items: newArray})
  }
 

  render(){
    const {items} = this.state
    return (
      <div className="App">
        <div className="heading-container">
         <h1 className="heading">You have in your cart {this.state.counterTotal ? this.state.counterTotal : "zero"} items</h1>
        </div>
        {/* <h1 className="heading">You have in your cart {count1 + count2 + count3 ? count1 + count2 + count3 : "zero"} items</h1> */}
        <div className="parent">
        {items.map(item => {
          return(
            <Item key={item.id} id={item.id} title={item.name} pic={item.image} addTotal={this.addCounterTotal} subTotal={this.subCounterTotal} removeCart={this.removeFromCart}/>
          )
        })}
        </div>
      </div>
    );
  }
}

export default App;
