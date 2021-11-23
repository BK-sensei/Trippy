import { useState, useEffect, } from "react";
import { Link } from "react-router-dom";





const Hotel = () => {
    const [ hotels , setHotels] = useState([])
    useEffect(() => {
        fetch( `https://trippy-konexio.herokuapp.com/api/hotels`)
            .then(reponse => reponse.json())
            .then(result => console.log(result))

    }, []);

    return (
      <>
        <Link to="/Hotel">saluthome</Link>
      </>
    )
  }
  
  export default Hotel;