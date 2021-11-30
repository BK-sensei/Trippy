import { useState, useRef, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Nav from '../components/Nav'
import gsap from 'gsap'

const NavHeaderRoom = styled.div`
    background: #EB8D61;
`
const RoomsStyle = styled.div`
    padding: 10px 0 10px 0;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    font-style: normal;
    font-weight: bold;
    background: #EEE6DD;
*{
    margin : 0;
    padding : 0;
    box-sizing : border-box;
}
`
const Title = styled.div`
    display: flex;
    justify-content: center;
    background: #EEE6DD
    color: black;
`
const RoomsCard = styled.div`
    margin: 5px 10px 5px 10px;
    border : thick double #f1f1f1;
    border-radius: 30px;
    background: linear-gradient(0deg, #ccb49b, #f5e4d3);
    transition: transform 0.2s;
    &:hover {
        transform: scale(1.5);
                // background: red;
    } 
    p , a {
        padding : 5px 20px 5px 20px;
        color: black;
        }
`

const Rooms = (props) => {

    const { id } = useParams()
    const [roomsState, SetRoomsState] = useState([])
    const [toggle, setToggle] = useState(false)


    const changeState = () => {
        setToggle(!toggle)
    }

    const cardRef = useRef(null)
    

    useEffect (() => {
        fetch(`https://trippy-konexio.herokuapp.com/api/hotels/${id}/rooms`)
            .then(response => response.json()) 
            .then(data => {
                SetRoomsState(data.results)
            })
   
    }, [id,])

    return (
        <>
        <NavHeaderRoom>
            <Nav/>
        </NavHeaderRoom>

        <RoomsStyle>
            {roomsState.map(element => (
                <RoomsCard
                key={element.id}
                ref={cardRef}
                onClick={changeState}
                >
                    <p>Chambre n°{element._id}</p>
                    <p>Chambres pour {element.people} personnes</p>
                    <p>{element.price} €</p>
                    { element.isBathroom === true ?
                    <p>Salle de bain : OUI</p> : 
                    <p>Salle de bain : NON </p>
                    }
                </RoomsCard>
            ))}
        </RoomsStyle>
        </>
    )
}

export default Rooms;