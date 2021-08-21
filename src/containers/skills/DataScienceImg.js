import React, {useRef,useEffect } from "react";
import lottie from "lottie-web";

export default function DataScienceImg(props) {
  const container=useRef(null);
  useEffect(()=>{
    lottie.loadAnimation({
      container:container.current,
      renderer:'svg',
      loop:true,
      autoplay:true,
      animationData:require('../../assests/images/bigdata.json')
    })
  },[])
 return(<div ref={container}></div>);
}
