import React, {useState, useEffect} from "react";
import {useSpring, a, animated, useSpringRef, config, useTransition} from "react-spring"

export default function TopNavbar(props) {
  const [isOn] = useState(false)
  const [items, setItems] = useState(props.buttons);
  const transitionRef = useSpringRef()
  const transitions = useTransition(items, {
    ref: transitionRef,
    from: {opacity: 0, transform: "scale(80%, 0%)"},
    enter: {opacity: 1, transform: "scale(100%, 100%)"},
    leave: {opacity: 0, transform: "scale(100%, 100%)"},
    delay: 200,
    trail: 100,
    config: config.gentle,
  })
  useEffect(() => {
    transitionRef.start()
  }, [transitionRef])
  const slideNavbar = useSpring({
    from: {opacity: 0, transform: "translate(0%, -100%)"},
    to: {opacity: 1, transform: "translate(0%, 0%)"},
    delay: 0,
    config: config.gentle
  })
  return (
    <animated.div className="top-navbar" style={slideNavbar}>
      <div className="navbar-logo" key={0} onClick={() => props.onClick()}>
        <img src="pizza.png" alt=""/>
        <h1>Pizza Pizza Pizza</h1>
      </div>
      <div className="navbar-menu" key={1}>
        {transitions((style, item,_, idx) => {
          const addStyle = idx === props.curent ? {
            color: "#50bce9"
          }:null;
          const to_ret = [
            <animated.div style={{
                ...addStyle,
                ...style
                }}
              className={"navbar-menu-button"}
              onClick={item[1]?item[1]:null}>{item[0]}</animated.div>,
            props.cartItems]
          return to_ret
        })}
      </div>
    </animated.div>
  )
}