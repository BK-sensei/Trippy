import { useState, useEffect, } from "react";
import { useParams } from 'react-router-dom'
import Map from "../components/Map";
// import { Link } from "react-router-dom";
import styled from 'styled-components'

const Container = styled.div` 
border : 1px solid black;
margin-top :10px;
border-radius: 30px;
width : 380px;
h1, p {
    padding-left : 20px;
}
img {
    width:100%;
    background-size: cover;
    border-radius: 30px 30px 0px 0px;
    height: 150px;
}
`;
const Span = styled.span` 
    font-weight: bold;
`;
const Container1 = styled.div` 
    margin : 0px 0px 0px 10px;
    height: 100vh;
    width : 500px;
    overflow:scroll;
`;
const Container2 = styled.div` 
display:flex;
`;

const Hotels = () => {
    const [ hotels , setHotels ] = useState(null)
    // const [ location , setLocation ] = useState(null)
    const { city } = useParams()
    useEffect(() => {
        fetch( `https://trippy-konexio.herokuapp.com/api/hotels/city/${city}`)
            .then(reponse => reponse.json())
            .then(result => setHotels(result))

    }, []);

    // console.log(hotels);
    return (
      <>
        { hotels === null ? 
            (<p>chargement de la liste ......</p>) 
            : (
                <Container2>  
                    <Container1>
                        <h1>la liste d'hotel à {city} </h1>
                        {hotels.results.map((hotel, index) => 
                            <Container key={`${hotel.name}${index}`} >
                                <img src={`https://trippy-konexio.herokuapp.com${hotel.pictures[29]}`} />
                                <h1>{hotel.name} </h1>
                                <p> Adresse : {hotel.address}</p>
                                <p> Le prix :<Span> {hotel.price}€</Span></p>
                                
                            </Container>
                        )}   
                    </Container1>
                    <Map hotels = {hotels} /> 
                </Container2>   
            )    
        }
            
      </>
    )
  }
  
  export default Hotels;