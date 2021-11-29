import { useState, useEffect } from 'react';

const AddFavorite = () => {
    const [favorite, setFavorite] = useState (() => {
        const ls = localStorage.getItem("favorite")
        if (ls) return JSON.parse(ls)
        else return []
    })

    const toggleItemLocalStorage = (id) => {
        const isFavorite = favorite.includes(id)
        if(isFavorite) setFavorite((prev) => prev.filter((f) => f !== id))
        else setFavorite((prev) => [...prev, id])
    }

    useEffect (() => {
        localStorage.setItem("favorite", JSON.stringify(favorite))
    }, [favorite])

    console.log("local storage: ", localStorage)
    return [favorite, toggleItemLocalStorage]
    
}

export default AddFavorite;