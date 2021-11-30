import { useState, useEffect} from "react";
import { useParams } from 'react-router-dom'
import Map from "../components/Map";
import Button from "../components/Button";
import HotelCard from "../components/HotelCard";
import { Link } from "react-router-dom";
import styled from 'styled-components'
import Nav from "../components/Nav"

const Container = styled.div` 
    border : 1px solid black;
    margin-top :10px;
    border-radius: 30px;
    width : 380px;
h1, p , a {
    padding-left : 20px;
    color: black;
    text-decoration:none; 
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
    margin-bottom: 30px;
`;
// const ContainerImage = styled.div`
//     display:flex;
//     height : 20px;
//     padding :  0px 20px 10px 0px;
//     justify-content: flex-end;
//     // align-item: flex-end;
// `;
const ContainerGlobal = styled.div`
background: #EB8D61;

`


const Hotels = () => {
    const [ hotels , setHotels ] = useState(null)
    const [pagination , setPagination]= useState(1)
    const [selectedHotel , setSelectedHotel] = useState(null)
    const [selected , setSelected] = useState(null)
    const { city} = useParams()
    // const ref = useRef()
    // console.log("city",city);
    useEffect(() => {
        fetch( `https://trippy-konexio.herokuapp.com/api/hotels/city/${city}?page=${pagination}`)
            .then(reponse => reponse.json())
            .then(result => setHotels(result))
    }, [city, pagination]);

    
    // console.log(hotels);
    
    const paginationFunction = (num) =>{
        console.log("sa clik dur",num);
        setPagination(num)
    }

    const clickHover = (id) =>{
        console.log("mon state id",id);
        setSelectedHotel(id)
    }
    console.log(selected,"selected ");
    // console.log("pagination",pagination);
    // console.log("state hotels",hotels.results);
    return (
      <>
        { hotels === null ? 
            (<p>chargement de la liste ......</p>) 
            : (
                <div>
                    <ContainerGlobal>
                        <Nav />
                    </ContainerGlobal>
                    <Container2>  
                        <Container1>
                            <h1>la liste d'hotel à {city} </h1>
                            <Button num={1} click={paginationFunction} />
                            <Button num={2} click={paginationFunction}/>
                            <Button num={3} click={paginationFunction}/>
                            <Button num={4} click={paginationFunction}/>
                            
                            {hotels.results.map((hotel, index) => 
                                <HotelCard
                                selectedHotel={selectedHotel}
                                key={hotel.name}
                                hotel={hotel}
                                index={index} />
                            )}   
                        </Container1>
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