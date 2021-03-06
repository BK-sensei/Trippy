import { useState, useEffect} from "react";
import { useParams } from 'react-router-dom'
import HotelCard from "../components/HotelCard";
import Map from '../components/HotelCity/Map';
import Button from "../components/HotelCity/Button";
import styled from 'styled-components'
import Nav from "../components/Nav"

const NavHeader = styled.div`
    background: #EB8D61;
`
const ListHotels = styled.div`
    display: flex;
    flex-direction: column;
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
const Container2 = styled.div` 
    display:flex;
    padding-bottom: 30px;
    gap: 20px;
    background: #EEE6DD;
    font-family: 'Poppins', sans-serif;

    @media (max-width: 850px){
        width: 100%;
        display: flex;
        align-items : center;
        flex-direction: column;
        gap: 0px;
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

const Hotels = () => {
    const [ hotels , setHotels ] = useState(null)
    const [pagination , setPagination]= useState(1)
    const [selectedHotel , setSelectedHotel] = useState(null)
    const { city} = useParams()

    useEffect(() => {
        fetch( `https://trippy-konexio.herokuapp.com/api/hotels/city/${city}?page=${pagination}`)
            .then(reponse => reponse.json())
            .then(result => setHotels(result))
    }, [city, pagination]);

    const paginationFunction = (num) =>{
        setPagination(num)
    }

    const clickHover = (id) =>{
        setSelectedHotel(id)
    }

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
                                <h1>Hotels in {city} </h1>
                            </HotelsHeader>
                                <Container1> 
                                    {hotels.results.map((hotel, index) => 
                                        <HotelCard
                                        selectedHotel={selectedHotel}
                                        key={hotel.name}
                                        hotel={hotel}
                                        index={index} />
                                    )}   
                                
                                </Container1>
                                <Pagination>
                                    <Button num={1} click={paginationFunction} />
                                    <Button num={2} click={paginationFunction}/>
                                    <Button num={3} click={paginationFunction}/>
                                    <Button num={4} click={paginationFunction}/>
                                </Pagination>
                        </ListHotels>
                        <Map 
                        mouse={clickHover}
                        selectedHotel = {selectedHotel}
                        hotels = {hotels} 
                        /> 

                    </Container2> 
                </div>
            )    
        }
            
      </>
    )
  }
  
  export default Hotels;