import React, {useState} from "react";
import {useSpring, animated, config} from "react-spring";
import CartList from "./CartList";
import '../css/Cart.css';

function ExpandedCart(props) {
  const openStyle = useSpring({
    config: config.stiff,
    from:{ opacity: 0, transform:'scale(0.2)'},
    to: { opacity: 1, transform:'scale(1.0)'},
  });

  return <animated.div className={"expanded"} style={openStyle}>
    <div className="expanded-title">
      <p>CART</p>
      <div className="close-button" onClick={() => props.onClick()}>X</div>
    </div>
    <div className="expanded-list">
      <CartList cart={props.cart}/>
    </div>
    <div className="expanded-total">
      Total:${Math.floor(props.cart.total*100)/100}
    </div>
  </animated.div>
}

export default function Cart(props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const cartImage = require('../images/cart.svg').default;
  const indicator = <div className={"indicator"} onClick={() => setIsExpanded(true)}>
    <img src={cartImage} alt="" className={"cartImg"}/>
    <div className={"itemsCount"}>{props.cart.count}</div>
  </div>
  const expanded = <ExpandedCart onClick={() => setIsExpanded(false)} cart={props.cart}/>
  if (isExpanded){
    return  expanded
  }
  return props.cart.display ? indicator : null;
}

