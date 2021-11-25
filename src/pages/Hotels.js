import { useState, useEffect, } from "react";
import { useParams } from 'react-router-dom'
import Map from "../components/Map";
import Button from "../components/Button";
// import { Link } from "react-router-dom";
import styled from 'styled-components'
import Nav from "../components/Nav"

const Container = styled.div` 
    border : 1px solid black;
    margin-top :10px;
    border-radius: 30px;
    width : 380px;
h1, p {
    padding-left : 20px;
}
img {
    width:20px;
}
`;
const Span = styled.span` 
    font-weight: bold;
`;
const Container1 = styled.div` 
    margin : 0px 0px 0px 10px;
    height: 100vh;
    width : 410px;
    overflow:scroll;
`;
const Container2 = styled.div` 
    display:flex;
`;
const ContainerImage = styled.div`
    display:flex;
    height : 20px;
    padding :  0px 20px 10px 0px;
    justify-content: flex-end;
    // align-item: flex-end;
`;

const Hotels = () => {
    const [ hotels , setHotels ] = useState(null)
    const [pagination , setPagination]= useState(1)
    
    
    const { city} = useParams()
    useEffect(() => {
        fetch( `https://trippy-konexio.herokuapp.com/api/hotels/city/${city}?page=${pagination}`)
            .then(reponse => reponse.json())
            .then(result => setHotels(result))
    }, [city, pagination]);
    // console.log(hotels);
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
    const paginationFunction = (num) =>{
        console.log("sa clik dur",num);
        setPagination(num)
    }
    console.log("pagination",pagination);
    console.log("state hotels",hotels);
    return (
      <>
        { hotels === null ? 
            (<p>chargement de la liste ......</p>) 
            : (
                <div>
                    <Nav />
                    <Container2>  
                        <Container1>
                            <h1>la liste d'hotel à {city} </h1>
                            <Button num={1} click={paginationFunction} />
                            <Button num={2} click={paginationFunction}/>
                            <Button num={3} click={paginationFunction}/>
                            <Button num={4} click={paginationFunction}/>
                            
                            {hotels.results.map((hotel, index) => 
                                <Container key={`${hotel.name}${index}`} >
                                    {/* <img src={`https://trippy-konexio.herokuapp.com${hotel.pictures[29]}`} /> */}
                                    <h1>{hotel.name} </h1>
                                    <p> Adresse : {hotel.address}</p>
                                    <p> Le prix :<Span> {hotel.price}€</Span></p>
                                    {/* <p> {hotel.stars}</p> */}
                                        <ContainerImage>
                                            {numberStars(hotel.stars).map(stars =>
                                                
                                                <img src= {stars} alt="nombre d'avis"/>
                                                
                                            )}   
                                        </ContainerImage>
                                </Container>
                            )}   
                        </Container1>
                        <Map hotels = {hotels} /> 
                    </Container2> 
                </div>
            )    
        }
            
      </>
    )
  }
  
  export default Hotels;