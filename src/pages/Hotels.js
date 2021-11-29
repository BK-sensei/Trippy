import { useState, useEffect, } from "react";
import { useParams } from 'react-router-dom'
import Map from '../components/HotelCity/Map';
import Button from "../components/HotelCity/Button";
import { Link } from "react-router-dom";
import styled from 'styled-components'
import Nav from "../components/Nav"

const ListHotels = styled.div`
    display: flex;
    flex-direction: column;
`

const Container2 = styled.div` 
display:flex;
padding-bottom: 30px;
gap: 20px;
background: #EEE6DD;
font-family: 'Poppins', sans-serif;

@media (max-width: 400px){
    display: flex;
    align-items : center;
    flex-direction: column;
    gap: 0px;
}

.map{
    width : 60%;
    border : 4px solid black;
    :nth-child(1){
        width : 100%;
    }
}
`;
const Container = styled.div` 
    // width : 380px;
    border : 1px solid black;
    margin-top : 10px;
    border-radius: 10px;
    background-color: #201F1F;
    color: #E5E5E5;

    h2 {
        margin-top: 0;
    }

    h2, p , a {
        padding-left : 20px;
        color: black;
        text-decoration: none; 
        color: #E5E5E5;
    }
    img {
        width: 20px;
    }
`;
const Span = styled.span` 
    font-weight: bold;
`;
const Price = styled.div`
    width: 27%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #E5E5E5;
    color: #201F1F;
    margin-left : 20px;
    border-radius: 5px;
    padding: 5px 0px;
`
const HotelsHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h1{
        border-top: thick double;
        border-bottom: thick double;
        padding: 5px;
    }
`
const Pagination = styled.div`
    display: flex;
    justify-content: center;
    whidth: 100%;
    // background: white;
    border-top: 2px solid white;
    border-bottom: 2px solid white;
    margin-top: 10px;

    @media (max-width: 400px){
        margin-bottom : 10px;
    }
`
const Container1 = styled.div` 
    margin : 0px 0px 0px 10px;
    height: 100vh;
    // width : 410px;
    overflow:scroll;

    @media (max-width: 400px){
        margin : 0px 10px 0px 10px;
    }
`;

const ContainerStars = styled.div`
    display:flex;
    height : 20px;
    padding :  0px 20px 10px 0px;
    justify-content: flex-end;
    // align-item: flex-end;
`;
const NavHeader = styled.div`
    background: #EB8D61;
`


const Hotels = () => {
    const [ hotels , setHotels ] = useState(null)
    const [pagination , setPagination]= useState(1)
    
    
    const { city} = useParams()
    // console.log("city",city);
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
    // console.log("pagination",pagination);
    // console.log("state hotels",hotels.results);
    return (
      <>
        { hotels === null ? 
            (<p>Loading...</p>) 
            : (
                <div>
                    <NavHeader>
                        <Nav />
                    </NavHeader>

                    <Container2>  
                        <ListHotels>
                            <HotelsHeader>
                                <h1>Hotels in {city}</h1>
                            </HotelsHeader>

                            <Container1>
                                {hotels.results.map((hotel, index) => 
                                    <Container key={`${hotel.name}${index}`} >

                                        <Link to={`/hotel/${hotel._id}` }>
                                        {/* <img src={`https://trippy-konexio.herokuapp.com${hotel.pictures[29]}`} /> */}
                                        <h2>{hotel.name} </h2>
                                        <p> <Span>Adress :</Span> {hotel.address}</p>
                                        <Price>
                                            <Span>Price : {hotel.price}€</Span>
                                        </Price>
                                        <ContainerStars>
                                            {numberStars(hotel.stars).map(stars =>
                                                <img src= {stars} alt="nombre d'avis"/> 
                                            )}   
                                        </ContainerStars>
                                        </Link>

                                    </Container>
                                )}  
                            </Container1>
                            <Pagination>
                                <Button num={1} click={paginationFunction} />
                                <Button num={2} click={paginationFunction}/>
                                <Button num={3} click={paginationFunction}/>
                                <Button num={4} click={paginationFunction}/>
                            </Pagination> 
                        </ListHotels>
                       
                        <Map hotels = {hotels} /> 
                        
                    </Container2> 
                </div>
            )    
        }
            
      </>
    )
  }
  
  export default Hotels;