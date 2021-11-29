import React , { useState, useEffect }from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Map2 from '../components/Map2'
import Slider from '../components/HotelOption/Slider'
import ButtonFavoris from "../components/ButtonFavoris"

const HotelName = styled.div`
    padding: 10px 0 10px 0;
    align-items: center;
    text-align: center;
    font-size: 30px
`
const OptionContent = styled.div`
    display: flex;
    justify-content: left;
    align-items: left;
    padding-left: 40px;
    font-size: 15px;
    border: 1px solid red;
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

        <>
            {hotel === null ? 
            (<p>en cour de chargement ...</p>) 
            :
            (
            <>    
                 <Slider />
                <HotelName>{hotel.name}</HotelName>
                <ButtonFavoris 
                    hotelId={hotel._id}
                    clickFavoris={favoris} 
                    name="favoris"  />
                <OptionContent>
                    <>
                    {hotel.commodities.map(element => (
                        <ul>
                            <li>
                                {element}
                            </li>
                        </ul>
                    ))}
                    </>
                </OptionContent>
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