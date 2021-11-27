import React , { useState, useEffect }from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Map2 from '../components/Map2'
import Slider from '../components/HotelOption/Slider'
import Icons from '../components/Icons'
import { MapConsumer } from 'react-leaflet'

const HotelPage = styled.div`
    background: #EEE6DD;
`
const HotelName = styled.h1`
    text-align: center;
`
const OptionContent = styled.div`
    justify-content: left;
    align-items: left;
    padding-left: 40px;
    font-size: 15px;
`
const HotelCommodities = styled.div`
    display: flex;
    // flex-direction: column;
    align-items: center;
    padding-left: 40px;
`
const HotelContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`
const MapHotel = styled.div`
    width: 50vw;
    display: flex;
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
                    {hotel.commodities.filter (function (item, index) {
                       return hotel.commodities.indexOf(item ) === index
                    }).map(element => (
                        <HotelCommodities>
                            <div>
                                <Icons commodity={element}></Icons>
                            </div>
                            <OptionContent>
                                <p>{element}</p>
                            </OptionContent>
                        </HotelCommodities>
                    ))}
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