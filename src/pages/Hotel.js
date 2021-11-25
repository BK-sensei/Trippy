import React , { useState, useEffect, Fragment }from 'react'

import styled from 'styled-components'

import Slider from '../components/HotelOption/Slider'

const HotelFragment = styled.div`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
`


const HotelName = styled.div`
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

    const [hotel, setHotel] = useState([])
    
    useEffect (() => {
        fetch(`https://trippy-konexio.herokuapp.com/api/hotels/619b99fc53a95d1d32bf1539`)
            .then(response => response.json()) 
            .then(data => {
                setHotel(data.result.commodities)
            })
    }, [])

    // console.log("2e log de data :", data.result)
    return (
        <HotelFragment>
            <Slider />
                <HotelName>{hotel.name}</HotelName>
                <OptionContent>
                <p>OPTIONS</p>
                    {hotel.map(element => (
                        <ul>
                            <li>
                                <p>{element}</p>
                            </li>
                        </ul>
                    ))}
            </OptionContent>
        </HotelFragment>
    )
}

export default Hotel
    
