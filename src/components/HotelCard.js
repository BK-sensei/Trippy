import styled from 'styled-components'
import { Link } from "react-router-dom";
import { useRef, useEffect } from 'react';

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
`

const ContainerStars = styled.div`
    display:flex;
    height : 20px;
    padding :  0px 20px 10px 0px;
    justify-content: flex-end;
    // align-item: flex-end;
`
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



const HotelCard =( {hotel, index, selectedHotel }) => {
    
    const ref = useRef()

    useEffect(() => {
        const idHotel = hotel._id
        if (selectedHotel === idHotel) {
          ref.current.scrollIntoView({ behavior: "smooth" })
        }
      }, [selectedHotel])

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
    // console.log("log de ref",ref);
    // console.log("log de hotel id =>",hotel._id);
    // console.log("selected hotel=>", selectedHotel);
    
    return(
        <Container  
            key={`${hotel.name}${index}`}
            ref={ref}
            >
            <Link to={`/hotel/${hotel._id}` }>
            {/* <img src={`https://trippy-konexio.herokuapp.com${hotel.pictures[29]}`} /> */}
            <h2>{hotel.name} </h2>
            <p> <Span>Adresse :</Span> {hotel.address}</p>
            <Price>
                <Span>Price: {hotel.price}€</Span>
            </Price>
            <ContainerStars>
                {numberStars(hotel.stars).map(stars =>
                    
                    <img src= {stars} alt="nombre d'avis"/>
                    
                )}   
            </ContainerStars>
            </Link>    
        </Container>
    )
}
export default HotelCard