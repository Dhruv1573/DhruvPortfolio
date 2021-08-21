import React, {useRef,useEffect } from "react";
import lottie from "lottie-web";


export default function ExperienceImg(props) {
  const container=useRef(null);
  useEffect(()=>{
    lottie.loadAnimation({
      container:container.current,
      renderer:'svg',
      loop:false,
      autoplay:false,
      animationData:require('../../assests/images/experience.json')
    })
  },[])
 return(<div ref={container}></div>);
}

