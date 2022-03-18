import React, {cloneElement, useState} from "react"
import {useTrail, useSpring, a, animated} from "react-spring"
export default function WelcomeScreen(props){
  const cities = ["Choose your city", "Cracow", "Warsaw", "Berlin", "Paris", "Hamburg"];
  const restaurants = ["Choose your restaurant", "1", "2", "3", "4", "5"];
  const [state, changeState] = useState(false);
  function handleChosenRestaurant(){
    changeState(!state);
  }

  const items = [
    <animated.h3 className="welcome-title">Welcome, Please pick your Restaurant!</animated.h3>,
    <OptionList
      firstIsInfoText={true}
      selectName="welcome-city"
      optionClassName="welcome-option"
      options={cities}
    />,
    <OptionList
      firstIsInfoText={true}
      selectName="welcome-restaurant"
      optionClassName="welcome-option"
      options={restaurants}
    />,
    <animated.button className="welcome-order" onClick={handleChosenRestaurant}>Continue</animated.button>
  ]
  const trail = useTrail(items.length, {
    config: { mass: 100, tension: 10000, friction: 1000},
    from:{
      opacity:0,
      transform: "translate(0px, -50px) scale(0.8, 0)",
    },
    to:{
      opacity:1,
      transform: "translate(0px, 0px) scale(1, 1)",
    },
    reverse: state !== false
  })
  const imgStyle = useSpring({
    config: { mass: 10, tension: 400, friction: 100},
    from:{
      opacity:0,
      transform: "translate(-80%, -80%)",
    },
    to:{
      opacity:1,
      transform: "translate(-40%, -40%)",
    },
  })
  const contStyle = useSpring({
    config: { mass: 10, tension: 400, friction: 100},
    from:{
      opacity:0,
      transform: "translate(0%, -10%)",
    },
    to:{
      opacity:1,
      transform: "translate(0%, 0%)",
    },
    reverse: state !== false,
    onRest: {
      opacity: () => {
        if (state === true){
          props.setRestaurant();
        }
      },
    }
    })
  return(
    <animated.div className="welcome-screen" style={contStyle}>
      {trail.map((style, index) => (
        React.cloneElement(items[index],{
          style: style,
          key:index
        })))}
      <animated.img style={imgStyle} className="welcome-logo" src="pizza.png" alt=""/>
    </animated.div>
  );
}

function OptionList(props){
  const [hideFirstElem, setHideFirstElem] = useState(false);
  let options = Array(9);
  for(let i = 0; i < props.options.length; i++){
    if (i===0 && props.firstIsInfoText)
      options[i] = <CustomOpt isInfoTest={true} className={props.optionClassName} value={props.options[i]} key={props.options[i]}/>
    else
      options[i] = <CustomOpt isInfoTest={false} className={props.optionClassName} value={props.options[i]} key={props.options[i]}/>
  }

  function hideFirst(){
    if (props.firstIsInfoText){
      setHideFirstElem(true);
    }
  }

  return(
    <animated.select name={props.selectName} id={props.selectName} className={props.selectName} onClick={hideFirst} style={props.style}>
      {options.map((option, index) =>{
        if(hideFirstElem && index === 0){
          return null;
        }
        return option;
      })}
    </animated.select>
  )

}

function CustomOpt(props){
  if (props.isInfoText){
    return (<animated.option value="" selected={true} disabled={true} hidden={true} className={props.className}>{props.value}</animated.option>);
  }
  return <animated.option value={props.value} className={props.className}>{props.value}</animated.option>

}