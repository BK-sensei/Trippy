import React , { useState, useEffect }from 'react'
// import OptionsMenu from '../components/OptionsMenu'

import styled from 'styled-components'

import Slider from '../components/Slider'
import ButtonOption from '../components/ButtonOption'
import OptionsMenu from '../components/OptionsMenu'

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

// const OptionContent = styled.div`
//     display: flex;
//     justify-content: left;
//     align-items: left;
//     padding-left: 40px;
//     font-size: 15px;
//     border: 1px solid red;
// `

const Hotel = (props) => {

    // const [option, setOption] = useState([])
    const {optionToggle, toggle} = ButtonOption()
    
    // useEffect (() => {
    //     console.log("#1 je rentre dans componnet did mount")
    //     fetch(`https://trippy-konexio.herokuapp.com/api/hotels/619b99fc53a95d1d32bf1539`)
    //         .then(response => response.json()) 
    //         .then(data => {
    //             console.log("#2 asynchrone data => ", data)
    //             setOption(data.result.commodities)
    //         })
    //         console.log("#3 fin componnet did mount")

    // }, [])
    
    
    return (
        <div>
            <Slider/>           
            <HotelName><h3>Nom de l'hôtel</h3></HotelName>
            
            <ContentButton>
                <Button onClick={toggle}>
                    Options
                </Button>
            </ContentButton>
            <OptionsMenu/>
        </div>
    )
}

export default Hotel
// const changeHotel= () => {
    //     setHotel([])
    // }
    
    // useEffect (() => {
        //     console.log("update")
        // }, [hotel])
        
        // console.log("hotel dans le fetch:", hotel)
        
        // console.log("#0 return")


