import React, { useState } from "react";
import { useMediaQuery } from 'react-responsive';
import ImageDepthMap from 'react-depth-map'

// Components
import Fade from "../Fade";
import Slides from './slides';

//Style
import "../../style/swiper.scss";
import "../../style/base.css";
import "../../style/styles.css";

// Images
import Scifi from '../../images/SpeakeasyRoom2.jpeg';
import Depth from '../../images/depthmap.jpg';

function Desktop() {
    // const [show, setShow] = useState(false);
    const Desktop = ({ children }) => {
        const isDesktop = useMediaQuery({ minWidth: 1550 })
        return isDesktop ? children : null
      }
        return (
          <Desktop>
            {/* <button className="hideButton"
                    onClick={() => setShow(show => !show)}>
              {show ? "hide" : "show"}
            </button> */}
            {/* <Fade show={show}> */}
              
                <div className="slider">
                  <Slides />
                </div>
              
            {/* </Fade> */}
            <div className="background">
              {/* <ImageDepthMap
                id="gl"
                originalImg={Scifi}
                depthImg={Depth}
                verticalThreshold={25}
                horizontalThreshold={15} > 
              </ImageDepthMap> */}
            </div>
          </Desktop>
    );
};

export default Desktop