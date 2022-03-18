import React, {useEffect} from "react";
import {config, useSpringRef, useTransition, animated} from "react-spring";
import "../css/CartList.css"

function CartListElem(props) {
  const count = props.data.amount;
  const item = props.data.item;
  const cart = props.cart;
  const image = require('./../' + item.image).default;
  const addImage = require('../images/icons/add.png').default;
  const subtractImage = require('../images/icons/subtract.png').default;
  return (
    <animated.div className={"cart-list-elem"} style={props.style}>

      <img className="cart-list-elem-photo" src={image} alt={"test"}/>
      <div className="cart-list-elem-title"><p>{item.title}</p></div>
      <div className="cart-list-elem-amount">
        <div className={"cart-list-elem-amount-button"} onClick={() => cart.add(item.id)}>
          <img src={addImage} alt=""/>
        </div>
        <div className={"cart-list-elem-amount-counter"}>{count}</div>
        <div className={"cart-list-elem-amount-button"} onClick={() => cart.remove(item.id)}>
          <img src={subtractImage} alt=""/>
        </div>
      </div>
      <div className="cart-list-elem-subtotal">${Math.floor((item.price * count)*100)/100}</div>
    </animated.div>
  )
}

export default function CartList(props) {
  let delay = props.delay;
  const transitionRef = useSpringRef();
  const items = [];
  for (const [key, value] of Object.entries(props.cart.items)) {
    items.push(value);
  }
  const transitions = useTransition(items, {
    ref: transitionRef,
    from: {opacity: 0, transform: "scale(0%, 100%)", top:"0px"},
    enter: [{opacity: 1, transform: "scale(100%, 100%)"}],
    leave: {opacity: 0, transform: "scale(0%, 0%)"},
    trail: 100,
    delay: 0,
    config: config.stiff
  });

  useEffect(() => {
    transitionRef.start();
  });
  return (
    <div className="list">
      {transitions((style, item) => {
        return <CartListElem data={item} style={{
          ...style,
          ...props.customElemStyle
        }} price={item.price} cart={props.cart}/>
      })}
    </div>
  );
}
