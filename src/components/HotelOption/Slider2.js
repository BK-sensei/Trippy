import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Carousel } from 'react-responsive-carousel'
import styled from 'styled-components'
import "react-responsive-carousel/lib/styles/carousel.min.css"

const SliderCarousel = styled.div`
    carousel{
    position: relative;
    infiniteLoop;
        thumbs{
            display: flex;
            justify-content: right;
        }
        thumb{
            cursor: pointer;
        }
    }
`

const Slider2 = (props) => {

    const { id } = useParams()
    console.log("usePArams :", id);
    const [room, setRoom] = useState({})
    const sourceUrl = "https://cdn.pixabay.com/photo/2016/06/10/01/05/hotel-room-1447201_960_720.jpg"
    const [pictureUrl, setPictureUrl] = useState("")
    
    useEffect (() => {
        fetch(`https://trippy-konexio.herokuapp.com/api/hotels/${id}`)
            .then(response => response.json()) 
            .then(data => {
                setRoom(data.result)
                console.log("pictures :", data)
            })
    }, [id])

    if( Object.keys(room).length === 0 ) {
        return <p>Chargment en cours...</p>
    }

    return (
        <SliderCarousel>
            <Carousel 
            autoPlay 
            interval={3000} 
            infiniteLoop 
            thumbWidth={170}
            showStatus={false}
            >
     
                <div className="each-fade">
                    <img src={"https://cdn.pixabay.com/photo/2016/06/10/01/05/hotel-room-1447201_960_720.jpg"} alt="" />
                </div>
                <div className="each-fade">
                    <img src={"https://cdn.pixabay.com/photo/2017/04/28/22/16/room-2269594_960_720.jpg"} alt="" />
                </div>
                <div className="each-fade">
                    <img src={"https://cdn.pixabay.com/photo/2017/01/14/12/48/hotel-1979406_960_720.jpg"} alt="" />
                </div>
                <div className="each-fade">
                    <img src={"https://cdn.pixabay.com/photo/2016/10/13/09/06/travel-1737168_960_720.jpg"} alt="" />
                </div>
                <div className="each-fade">
                    <img src={"https://cdn.pixabay.com/photo/2021/10/06/15/05/bedroom-6686061_960_720.jpg"} alt="" />
                </div>
                <div className="each-fade">
                    <img src={"https://cdn.pixabay.com/photo/2020/02/01/06/12/living-room-4809587_960_720.jpg"} alt="" />
                </div>
                <div className="each-fade">
                    <img src={"https://cdn.pixabay.com/photo/2016/07/08/23/36/beach-house-1505461_960_720.jpg"} alt="" />
                </div>
                <div className="each-fade">
                    <img src={"https://cdn.pixabay.com/photo/2019/12/26/18/41/lamp-4720975_960_720.jpg"} alt="" />
                </div>
                <div className="each-fade">
                    <img src={"https://cdn.pixabay.com/photo/2014/05/21/14/56/bedroom-349698_960_720.jpg"} alt="" />
                </div>
                <div className="each-fade">
                    <img src={"https://cdn.pixabay.com/photo/2017/04/28/22/14/room-2269591_960_720.jpg"} alt="" />
                </div>                        
            </Carousel>
        </SliderCarousel>
    )
}

export default Slider2