import React , { useState, useEffect }from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Map2 from '../components/HotelOption/Map2'


import Slider from '../components/HotelOption/Slider'


const HotelTitle = styled.div`
    padding: 10px 0 10px 0;
    align-items: center;
    text-align: center;
    font-size: 30px
`
const OptionContent = styled.div`
    width: 100vh;
    display: flex;
    justify-content: left;
    flex-direction: column;
    align-items: left;
    padding-left: 40px;
    list-style: none;
    font-size: 15px;
    p{
        padding-left: 40px; 
    }
    ul{
        list-style-type: none;
    }
`
const Hotel = (props) => {
    const { id} = useParams()
    console.log(id);
    const [hotelState, setHotelState] = useState(null)
    
   
    
    useEffect (() => {
        fetch(`https://trippy-konexio.herokuapp.com/api/hotels/${id}`)
            .then(response => response.json()) 
            .then(data => {
                
                setHotelState(data.result)
            })
    }, [id])
    console.log("commodities :", hotelState.location)
    return (

        <>
            {hotelState === null ? 
            (<p>en cour de chargement ...</p>) 
            :
            (
            <>    
                 <Slider />
                <HotelTitle>{hotelState.name}</HotelTitle>
                <OptionContent>
                    <>
                    {hotelState.commodities.map(element => (
                        <ul>
                            <li>
                                {element}
                            </li>
                        </ul>
                    ))}
                    </>
                    <div>
                        <Map2
                           key={hotelState.name}
                           lat={hotelState.location.lat}
                           lng={hotelState.location.lon}
                        />
                        </div>
                </OptionContent>
            </>
            )}
       
        </>
    )
}
    export default Hotel
