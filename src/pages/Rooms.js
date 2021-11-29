import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Hotel from './Hotel'

const RoomsStyle = styled.div`
*{
    margin : 0;
    padding : 0;
    box-sizing : border-box;
}
width: 100%;
display: flex;
flex-wrap: wrap;
font-style: normal;
font-weight: bold;
background: #EEE6DD;
`

const Title = styled.div`
    display: flex;
    justify-content: center;
    background: #EEE6DD;
`

const RoomsCard = styled.div`
border : 1px solid black;
margin: 5px 10px 5px 10px;
border-radius: 30px;
background: transparent;
background: rgba(0,0,0,.1);
p , a {
padding : 5px 20px 5px 20px;
color: black;
}
div{
    border-bottom: 1px solid black;
}
`


const Rooms = (props) => {

    const { id } = useParams()
    const [roomsState, SetRoomsState] = useState([])

    useEffect (() => {
        fetch(`https://trippy-konexio.herokuapp.com/api/hotels/${id}/rooms`)
            .then(response => response.json()) 
            .then(data => {
                console.log("data des chambres :", data)
                SetRoomsState(data.results)
            })
    }, [id])
        console.log("roomState :", roomsState)

    return (
        <>
        {/* <Title><h2>{hotel.name}</h2></Title> */}
        <RoomsStyle>
            {roomsState.map(element => (
                <RoomsCard>
                    <p>Chambre n°{element._id}</p>
                    <p>Chambres de {element.people} personnes</p>
                    <p>{element.price} €</p>
                    { element.isBathroom === true ?
                    <p>Salle de bain </p> : 
                    null }
                </RoomsCard>
            ))}
        </RoomsStyle>
        </>
    )
}

export default Rooms;