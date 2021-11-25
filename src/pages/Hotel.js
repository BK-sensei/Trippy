import React , { useState, useEffect }from 'react'

import styled from 'styled-components'

import Slider from '../components/HotelOption/Slider'
import ButtonOption from '../components/HotelOption/ButtonOption'
// import OptionsMenu from '../components/HotelOption/OptionsMenu'

const HotelName = styled.div`
    padding: 10px 0 10px 0;
    align-items: center;
    text-align: center;
    font-size: 30px
`

const ContentButton = styled.div`
    height: 30px;
    display: flex;
    justify-content: left;
    padding-left: 60px;
`

// const Button = styled.div`
//     width: 70px;
//     height: 30px;
//     backgoundcolor: blue;
//     display: flex;
//     justify-content: center;
//     align-items: center;
// `

const OptionContent = styled.div`
    display: flex;
    justify-content: left;
    align-items: left;
    padding-left: 40px;
    font-size: 15px;
    border: 1px solid red;
`

const Hotel = (props) => {

    const [hotel, setHotel] = useState([])
    
    // const { setOptionToggle, optionToggle } = ButtonOption()

    // const toggle = () => {
    //     setOptionToggle(!optionToggle)
    // }
    
    useEffect (() => {
        fetch(`https://trippy-konexio.herokuapp.com/api/hotels/619b99fc53a95d1d32bf1539`)
            .then(response => response.json()) 
            .then(data => {
                setHotel(data.result.commodities)
            })
    }, [])
    console.log("commodities :", hotel)
    return (

        <>
        <Slider />
            <HotelName>{hotel.name}</HotelName>
            <OptionContent>
                <>
                {hotel.map(element => (
                    <ul>
                        <li>
                            {element}
                        </li>
                    </ul>
                ))}
                </>
            </OptionContent>

        
        
        {/* {hotel.map(element => (
            <p>{element.commodities}</p>
        ))} */}
        </>
    )
}
    export default Hotel
    
    //     <>
    //     {/* <Slider /> */}
    //                 {hotel.map(element =>(
    //                     <li key={element.id}>
    //                         <p>{element.commodities}</p>
    //                     </li>
    //                 ))}
          
    //     </>
    // )