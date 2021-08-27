import React from "react";
import { useMediaQuery } from 'react-responsive'

import Slides from './slides'

import "../../style/swiper.scss";

function Mobile() {
    const Mobile = ({ children }) => {
        const isMobile = useMediaQuery({ maxWidth: 767 })
        return isMobile ? children : null
      }
        return (
          <Mobile>
            <div className="background">
                <Slides />
            </div>
          </Mobile>
    )
}

export default Mobile;