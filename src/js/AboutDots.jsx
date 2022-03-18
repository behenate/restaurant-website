import "../css/AboutDots.css";
import React, {useEffect, useState} from "react";
import {useSprings, animated} from "react-spring";

export default function AboutDots(props) {
  const [springs, api] = useSprings(props.slides.length, index => ({
    from: {backgroundColor: "transparent"}
  }));
  useEffect(() => {
    api.start(index => {
      if (index === props.current.index){
        return {backgroundColor: "black"}
      }else{
        return {backgroundColor: "transparent"}
      }
    });
  });

  return (
    <div className={"dot-container"}>
      {springs.map((style,index) =>
        (<animated.div className={"dot"} style={style} onClick={() => {
          props.setSlide([props.slides[index]]);
          clearInterval(props.interval);
        }}/>))
      }
    </div>
  )
}