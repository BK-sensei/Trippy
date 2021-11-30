import styled from 'styled-components'
import { Link } from "react-router-dom";
import { useRef, useEffect } from 'react';
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

const ContainerImage = styled.div`
    display:flex;
    height : 20px;
    padding :  0px 20px 10px 0px;
    justify-content: flex-end;
    // align-item: flex-end;
`;
const Span = styled.span` 
    font-weight: bold;
`;


const HotelCard =( {hotel, index, selectedHotel }) => {
    const ref = useRef()

    useEffect(() => {
        if (selectedHotel === hotel._id) {
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
    console.log("log de hotel id =>",hotel._id);
    console.log("selected hotel=>", selectedHotel);
    return(
            <Container  key={`${hotel.name}${index}`}
                ref={ref}
                                >
                <Link to={`/hotel/${hotel._id}` }>
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
                </Link>    
            </Container>
    )
}
export default HotelCard