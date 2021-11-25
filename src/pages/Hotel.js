import React , { useState, useEffect }from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Map2 from '../components/Map2'
import Slider from '../components/HotelOption/Slider'
import Icons from '../components/Icons'


const HotelName = styled.div`
    padding: 10px 0 10px 0;
    align-items: center;
    text-align: center;
    font-size: 30px
`
const OptionContent = styled.div`
    justify-content: left;
    align-items: left;
    padding-left: 40px;
    font-size: 15px;
    // border: 1px solid red;
`
const Hotel = (props) => {
    const { id} = useParams()
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

        <>
            {hotel === null ? 
            (<p>en cour de chargement ...</p>) 
            :
            (
            <>    
                 <Slider />
                <HotelName>{hotel.name}</HotelName>
                <div>
                    <>
                    {hotel.commodities.filter (function (item, index) {
                       return hotel.commodities.indexOf(item ) === index
                    }).map(element => (
                        <div>
                            <div>
                                <Icons comodity={element}></Icons>
                            </div>
                            <OptionContent>
                                <p>{element}</p>
                            </OptionContent>
                        </div>
                    ))}
                    </>
                </div>
                <Map2 
                    lat1={hotel.location.lat} 
                    lon1={hotel.location.lon}
                    hotels={hotel}
                />
            </>
            )}
       
        </>
    )
}
    export default Hotel