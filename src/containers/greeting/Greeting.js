import React,{useEffect,useRef} from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import Button from "../../components/button/Button";
import lottie from 'lottie-web';
import parse from 'html-react-parser';


export default function Greeting(props) {
  const theme = props.theme;
  const container=useRef(null);
  useEffect(()=>{
    lottie.loadAnimation({
      container:container.current,
      renderer:'svg',
      loop:true,
      autoplay:true,
      animationData:require('../../assests/images/prouds.json')
    })
  })
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.text }}>
                {greeting.title}
              </h1>
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {parse(greeting.subTitle)}
              </p>
              <SocialMedia theme={theme} />
              <div className="button-greeting-div">
              <Button text="See my resume" newTab={true} href={greeting.resumeLink}  theme={theme}/>
            </div>
            </div>
          </div>
          <div className="greeting-image-div" ref={container}> 
          </div>
        </div>
      </div>
    </Fade>
  );
}
