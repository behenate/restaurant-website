import "../css/About.css";
import React, {useEffect, useState} from "react";
import {config, useSpringRef, useTransition, animated, useSpring} from "react-spring";
import AboutDots from "./AboutDots";

export default function About(props) {
  const oldRestaurantImage = require("./../images/aboutImages/oldRestaurant.jpg").default;
  const oldRestaurantImage2 = require("./../images/aboutImages/oldRestaurant2.jpg").default;
  const mapImage = require("./../images/aboutImages/map.jpg").default;
  const restaurantImage3 = require("./../images/aboutImages/restaurant3.jpg").default;
  const prizeImage = require("./../images/aboutImages/prize.jpg").default;
  const restaurantKitchen = require("./../images/aboutImages/restaurantKitchen.jpg").default;
  const slides = [
    {
      text: "Pizza pizza pizza was funded by John Pizza in 1948. We started out as a small restaurant",
      image: oldRestaurantImage,
      background: "#eee4c4",
      index: 0
    },
    {text: "In 1952 we opened our second restaurant in New York", image: oldRestaurantImage2, background: "#d3eec4", index:1},
    {text: "From 1955 we were opening multiple restaurants each year all over USA", image: mapImage, background: "#c4eeed", index:2},
    {text: "In 1970 we opened our first restaurant in Europe. First pizza pizza pizza in Paris was a great success", image: restaurantImage3, background: "#c8c4ee", index:3},
    {text: "In 1982 we have become the biggest food franchise in the world and haven't lost that title since then", image: prizeImage, background: "#f3cccf", index:4},
    {text: "Today we keep offering you the highest quality dining experience we are honoured to serve you!", image: restaurantKitchen, background: "#f3cce8", index:5},
  ];
  const [currentSlide, setCurrentSlide] = useState([slides[0]]);
  const [counter, setCounter] = useState(0);
  const ref = useSpringRef();
  const transition = useTransition(currentSlide, {
    ref: ref,
    from: {
      opacity: 0,
      textTransform: "scale(0%)",
      imgTransform: "scale(200%) translate(100%, 0)"
    },
    enter: {
      opacity: 1,
      textTransform: "scale(100%)",
      imgTransform: "scale(100%) translate(0%, 0)"
    },
    leave: {
      opacity: 0,
      textTransform: "scale(140%), translate(80%, 0)",
      imgTransform: "scale(50%) translate(80%, 0)"
    },
    trail:500
  });
  const [containerSpring, containerApi] = useSpring({
    from: {backgroundColor: currentSlide.background}
  }, []);
  useEffect(() => {
    ref.start();
    containerApi.start({backgroundColor: currentSlide[0].background});
  });
  const [intervalId, setIntervalId] = useState(0);
  useEffect(() => {
    let cnt = counter;
    const interval = setInterval(() => {
      if (cnt+1 < slides.length){
        cnt++;
        setCounter(cnt);
        setCurrentSlide([slides[cnt]]);
      }
    }, 4000);
    setIntervalId(interval);
    return () => clearInterval(interval);
  }, []);
  useEffect(()=>{
    props.cart.setDisplay(false);
  });

  return (
    <animated.div className={"about"} style={containerSpring}>
      {transition(({imgTransform, textTransform, ...style}, item) => {
        return (
          <div className={"about-slide"}>
            <animated.div className={"about-text right"} style={{
              transform: textTransform,
              ...style
            }}> {item.text} </animated.div>
            <animated.div className={"about-image left"} style={{
              transform: imgTransform,
              ...style
            }}>
              <img src={item.image} alt="" onClick={() => {
                setCounter(counter + 1);
                setCurrentSlide([slides[counter+1]]);
              }}/>
            </animated.div>
          </div>
        );
      })}
      <AboutDots current={currentSlide[0]} setSlide={setCurrentSlide} slides={slides} interval={intervalId}/>
    </animated.div>
  )
}