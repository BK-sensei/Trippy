import styled from "styled-components"
import 'react-slideshow-image/dist/styles.css'

import { Fade } from 'react-slideshow-image'

const MapSlider = styled.div`
    background-image: 100%;
    height: 100vh;
    width: 100vw;
    position: relative;
    div img {
        height: 100vh;
        width: 100vw;
    }
`

const Slider = () => {

    return (   
        <div className="slide-container">
            <MapSlider>
                <Fade>
                    <div className="each-fade">
                        <img src={"https://cdn.pixabay.com/photo/2016/11/02/14/32/lotte-world-tower-1791802_960_720.jpg"} alt=""/>
                    </div>
                    <div className="each-fade">
                        <img src={"https://cdn.pixabay.com/photo/2020/01/02/06/09/airport-4735067_960_720.jpg"} alt="" />
                    </div>
                    <div className="each-fade">
                        <img src={"https://cdn.pixabay.com/photo/2020/03/24/07/22/istanbul-4963074_960_720.jpg"} alt="" />
                    </div>
                </Fade>
            </MapSlider>
        </div>
    )
}

export default Slider