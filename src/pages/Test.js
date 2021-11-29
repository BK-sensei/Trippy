// import { useState } from 'react';
import { useEffect, useState } from 'react';
import Slider2 from '../components/HotelOption/Slider2';

const Test = () => {
    return (
        <div>
            <Slider2/>
        </div>
    );
}

export default Test;

// IoIosHeart
// IoIosHeartEmpty

// const [favorites] = useState()

// -----------------------------------------------------

// const addFavorite = () => {
//     const [favorites, setFavorites] = useState (() => {
//         const ls = localStorage.getItem("favorites")
//         if (ls) return JSON.parse(ls)
//         else return []
//     })

//     const toggleItemLocalStorage = (id) => {
//         const isFavorite = favorites.includes(id)
//         if(isFavorite) setFavorites((prev) => prev.filter((f) => f !== id))
//         else setFavorites((prev) => [...prev, id])
//     }

//     useEffect (() => {
//         localStorage.setItem("favorites", JSON.stringify(favorites))
//     }, [favorites])

//     return [favorites, toggleItemLocalStorage]
// }

// -------------

// {favoritesState.map((heart) => {
//     return (
//         <IoIosHeartEmpty key={heart.id} />
        
//     )
// })}

// -------------------------------------------------

// const [picturesRoomsState, setPicturesRoomsState] = useState([])

// useEffect (() => {
//     fetch(`https://trippy-konexio.herokuapp.com/api/hotels/${id}`)
//         .then(response => response.json()) 
//         .then(data => {
//             console.log("data des images des chambres :", data)
//             setPicturesRoomsState(data.results)
//         })
// }, [id])

{/* {picturesRoomsState.pictures.map(element => ( */}
    {/* <img src={`https://trippy-konexio.herokuapp.com/api/img/${hotels.pictures[id]}`} */}
{/* ))} */}