import React, {useEffect} from "react";
import {config, useSpringRef, useTransition, animated} from "react-spring";
import itemsById from "../data/itemsById";
function ListElem(props){
  const data = props.data;
  const image = require('./../'+data.image).default;
  let price = null;
  if (props.price){
    price = <div className="list-elem-price">${props.price}</div>
  }
  return(
    <animated.div className={"list-elem"} style={props.style}>
      <img className="list-elem-photo" src={image}  alt={"test"}/>
      <div className="list-elem-title"><p>{data.title}</p></div>
      <div className="list-elem-desc"><p>{data.desc} </p></div>
      <div className="list-elem-button" onClick={props.onClick}>{data.button}</div>
      {price}
    </animated.div>
  )
}

export default function List(props){
  let delay = props.delay;
  const transitionRef = useSpringRef();


  const transitions = useTransition(props.listElems,{
    ref: transitionRef,
    from: { opacity: 0,transform:"scale(0%, 100%)" },
    enter: [{ opacity: 1, transform:"scale(100%, 100%)"}],
    leave: { opacity: 0, transform:"scale(100%, 0%)" },
    trail:100,
    delay:delay,
    config: config.stiff
  });

  useEffect(() =>{
    transitionRef.start();
  });

  return (
    [
      <div className="list">
        {transitions((style, elem) => {
          //Sometimes an actual item is passed and sometimes and itemID, recognize that.
          let item;
          item =  (!elem.subcategory) ? itemsById[elem.id] : elem;
          //Different types of elements depending on action type
          if (item.action === "sublist"){
            return <ListElem data={item} style={style} onClick={() => {
              console.log(props.setNewListEntries);
              props.setNewListEntries(item.subcategory, false)}}/>
          }
          else if (item.action==="buy"){
            return <ListElem data={item} style={style} price={item.price} onClick={() => props.cart.add(item.id)}/>
          }
          else
            return <ListElem data={item} style={style}/>
        })}
    </div>
  ]);
}
