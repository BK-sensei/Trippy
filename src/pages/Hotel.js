import React , { useState, useEffect }from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Map2 from '../components/HotelOption/MapHotelDescription'
import Slider from '../components/HotelOption/Slider'
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

    const favoris =(id)=>{
        // let favoritesArray = localStorage.setItem("favorisId",`${id}`) // je crée la clé favoris et je luis met la valeur de l id de l'hotel
        // favoritesArray = localStorage.getItem("favorisId")
        // On va créer une variable où on va stocker les id des films choisis
        // On va d'abord voir si elle contient un ID
        let favoritesArray = localStorage.getItem("favorites")

        // Pour cela on créer une condition pour décider quoi faire si l'id est là
        if (!favoritesArray){                                                                 // si l'ID n'est pas là, on le créé 
            favoritesArray = localStorage.setItem("favorites", JSON.stringify([id]))           // ici l'ID entouré de [] est une string grâce au 'stringify' | on passe de [4532879] à "[4532879]"
        } else {                                                                               // si il est déjà là, je veux modifier la valeur de la clé 'favorites'    
            favoritesArray = JSON.parse(favoritesArray)                                        // grâce au 'parse' je transforme la variable 'favoritesArray' en tableau
            favoritesArray = [...favoritesArray, id]                                           // ensuite on pousse chaque ID choisi dans le tableau créé juste avant
            favoritesArray = localStorage.setItem("favorites", JSON.stringify(favoritesArray)) // pour finir on transforme la variable qui est un tableau 'favoritesArray' 
        }                       
        console.log("sa clik dur", id);
    }

    
    console.log("commodities :", hotel)

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

                <Slider />
                
                <HotelName>
                    <h1>{hotel.name}</h1>
                    <p>{hotel.address}</p>
                    <ButtonFavoris 
                      hotelId={hotel._id}
                      clickFavoris={favoris} 
                      name="favoris"  />
                </HotelName>
               

                <HotelContainer>
                    <div>
                        <h2>Commodities</h2>
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