import React , { useState, useEffect }from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Map2 from '../components/HotelOption/MapHotelDescription'
import Slider2 from '../components/HotelOption/Slider2'
import Icons from '../components/HotelOption/Icons'
import Nav from '../components/Nav'
import ButtonFavoris from "../components/ButtonFavoris"

const HotelPage = styled.div`
    background: #EEE6DD;
    font-family: 'Poppins', sans-serif;
`
const NavHeader = styled.div`
    background: #EB8D61;
`
const HotelName = styled.div`
    font-family: 'Poppins', sans-serif;
    text-align: center;
    background-color: #201F1F;
    color: white;
    border-top: thick double white;
    border-bottom: thick double white;
    padding: 5px;

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
const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    a {
        text-decoration: none;
    }
`
const ButtonRooms = styled.div`
    background-color: #4f74b0;
    color : #FFFF;
    // decoration: none;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;
    cursor: pointer;
`
const Price2 = styled.div`
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 40px;
`

const Stars = styled.div`
display: flex;
justify-content: center;
img{
    width: 20px;
}


`
const Hotel = (props) => {
    const { id } = useParams()
    const [hotel, setHotelState] = useState(null)
    
    useEffect (() => {
        fetch(`https://trippy-konexio.herokuapp.com/api/hotels/${id}`)
            .then(response => response.json()) 
            .then(data => {              
                setHotelState(data.result)
            })
    }, [id])

    const numberStars = (numEtoile) => {
        let starsArray = [
            "https://img.icons8.com/color/48/000000/star--v1.png",
            "https://img.icons8.com/color/48/000000/star--v1.png",
            "https://img.icons8.com/color/48/000000/star--v1.png",
            "https://img.icons8.com/color/48/000000/star--v1.png",
            "https://img.icons8.com/color/48/000000/star--v1.png"
        ]
        starsArray.forEach((stars,index) => {
            if(index < numEtoile){
               starsArray[index]="https://img.icons8.com/fluency/48/000000/star.png"
            }
        })
        return starsArray
    }
    

    const favoris =(id)=>{
        
        let favoritesArray = localStorage.getItem("favorites")

       
        if (!favoritesArray){                                                                 
            favoritesArray = localStorage.setItem("favorites", JSON.stringify([id]))           
        } else {                                                                                   
            favoritesArray = JSON.parse(favoritesArray)                                        
            favoritesArray = [...favoritesArray, id]                                           
            favoritesArray = localStorage.setItem("favorites", JSON.stringify(favoritesArray)) 
        }                       
    }

    
    return (

        <HotelPage>
            {hotel === null ? 
            (<p>Loading...</p>) 
            :
            (

            <>   
                <NavHeader>
                    <Nav />
                </NavHeader> 

                <Slider2 />
                
                <HotelName>
                    <h1>{hotel.name}</h1>
                    <p>{hotel.address}</p>
                    <p>Rooms start at : {hotel.price}€ </p>
                    <Stars>
                    {numberStars(hotel.stars).map(stars =>
                        <img src={stars} alt="nombre d'avis"/> 
                    )}  
                    </Stars>
                    <ButtonContainer>
                        <ButtonFavoris 
                        hotelId={hotel._id}
                        clickFavoris={favoris} 
                        name="Add to favorite"  
                        />
                        <Link to={`/hotel/${hotel._id}/rooms`}>
                            <ButtonRooms>See Rooms</ButtonRooms>
                        </Link>
                    </ButtonContainer>
                </HotelName>
            
            <HotelContainer>
                <div>
                    <h2>Commodities</h2>
                    {hotel.commodities.filter (function ( item, index ) {
                    return hotel.commodities.indexOf( item ) === index
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