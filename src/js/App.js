import '../css/App.css';
import '../css/Cart.css';
import React from "react"
import WelcomeScreen from "./Welcome";
import MainMenu from "./MainMenu";
import Cart from "./Cart";
import itemsById from "../data/itemsById";

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      cartItems: {},
      counter: 0,
      total:0,
      currentPage:0,
      display:true
    }
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
    this.clearCart = this.clearCart.bind(this);
    this.setDisplay = this.setDisplay.bind(this);
  }
  addToCart(item_id){
    const cartItems = this.state.cartItems;
    const newCartItems= {...cartItems};
    if(newCartItems[item_id]){
      newCartItems[item_id].amount += 1;
    }else{
      newCartItems[item_id] = {
        amount: 1,
        item:itemsById[item_id],
        total: this.state.total + itemsById[item_id].price
      };
    }
    this.setState({cartItems: newCartItems,
                        counter: this.state.counter + 1,
                        total: this.state.total + itemsById[item_id].price
    });
  }

  removeFromCart(item_id){
    const cartItems = this.state.cartItems;
    const newCartItems= {...cartItems};
    if (newCartItems[item_id].amount === 1){
      delete newCartItems[item_id];
    }else {
      newCartItems[item_id].amount -= 1;
    }
    this.setState({
      cartItems: newCartItems,
      total: this.state.total - itemsById[item_id].price,
      counter: this.state.counter-1
    });
  }
  clearCart(){
    this.setState({
      cartItems: {},
      total: 0,
      counter: 0
    });
  }
  setDisplay(value){
    this.setState({
      display: value
    });
  }
  render(){
    const cart = {
      items:this.state.cartItems,
      add:this.addToCart,
      remove: this.removeFromCart,
      count:this.state.counter,
      total:this.state.total,
      clear: this.clearCart,
      display: this.state.display,
      setDisplay: this.setDisplay
    };
    const pages = [
      <WelcomeScreen setRestaurant = {() => this.setState({currentPage:1})}/>,
      [
        <MainMenu cart={cart} setRestaurant = {() => this.setState({currentPage:0})}/>,
        <Cart cart={cart}/>,
      ]
    ]
    return pages[this.state.currentPage]
  };
}

export default App;
