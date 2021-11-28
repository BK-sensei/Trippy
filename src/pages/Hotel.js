import React , { useState, useEffect }from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Map2 from '../components/Map2'
import Slider from '../components/HotelOption/Slider'
import Icons from '../components/Icons'
// import { MapConsumer } from 'react-leaflet'

const HotelPage = styled.div`
    background: #EEE6DD;
    font-family: 'Poppins', sans-serif;
`
const HotelName = styled.h1`
    font-family: 'Poppins', sans-serif;
    text-align: center;
    background-color: #EB8D61;
    color: white;

    @media (max-width: 800px){
        font-size: 25px;
    }
`
const HotelContainer = styled.div`

    display: flex;
    justify-content: space-between;
    padding: 50px;
    gap: 0px;

    @media (max-width: 800px){
        display: flex;
        flex-direction: column;
        padding: 0px;
        gap: 0px;
        padding-bottom: 20px
    }
`
const HotelCommodities = styled.div`
  
    display: flex;
    align-items: center;
    gap: 20px;

    @media (max-width: 800px){
        margin-left: 10px;
        
`
const MapHotel = styled.div`
    width: 60%;

    @media (max-width: 800px){
        width: 100%;
    }
`

const Hotel = (props) => {
    const { id } = useParams()
    console.log(id);
    const [hotel, setHotel] = useState(null)
    
   
    
    useEffect (() => {
        fetch(`https://trippy-konexio.herokuapp.com/api/hotels/${id}`)
            .then(response => response.json()) 
            .then(data => {
                
                setHotel(data.result)
            })
    }, [id])
    console.log("commodities :", hotel)

    return (

        <HotelPage>
            {hotel === null ? 
            (<p>Loading...</p>) 
            :
            (
            <>    
                <Slider />
                
                <HotelName>{hotel.name}</HotelName>

                <HotelContainer>
                    <div>
                    {hotel.commodities.filter (function (item, index) {
                       return hotel.commodities.indexOf(item ) === index
                    }).map(element => (
                        <HotelCommodities>
                            <div>
                                <Icons commodity={element}></Icons>
                            </div>
                            <div>
                                <p>{element}</p>
                            </div>
                        </HotelCommodities>
                    ))}
                    </div>
                    <MapHotel>
                        <Map2 
                            lat1={hotel.location.lat} 
                            lon1={hotel.location.lon}
                            hotels={hotel}
                        />
                    </MapHotel>
                </HotelContainer>
            </>
            )}
       
        </HotelPage>
    )
}
    export default Hotel