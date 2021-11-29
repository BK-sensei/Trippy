import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import styled from 'styled-components'

const SliderCarousel = styled.div`
    carousel{
    position: relative;
    infiniteLoop;
        thumbs{
            display: flex;
            justify-content: right;
            margin: 0;
            padding: 10px;
        }
        thumb{
            margin: 0 5px;
            cursor: pointer;
        }
    }
`

const Slider2 = () => {

    // const [baseUrl, setBaseUrl] = useState("")
    return (
        <SliderCarousel>
            <Carousel 
            autoPlay 
            interval={3000} 
            infiniteLoop 
            thumbWidth={170}
            showStatus={false}
            >
                <div>
                    <img src={"https://cdn.pixabay.com/photo/2016/11/02/14/32/lotte-world-tower-1791802_960_720.jpg"} alt=""/>
                </div>
                <div className="each-fade">
                    <img src={"https://cdn.pixabay.com/photo/2020/01/02/06/09/airport-4735067_960_720.jpg"} alt="" />
                </div>
                <div className="each-fade">
                    <img src={"https://cdn.pixabay.com/photo/2020/03/24/07/22/istanbul-4963074_960_720.jpg"} alt="" />
                </div>           
            </Carousel>
        </SliderCarousel>
    )
}

export default Slider2