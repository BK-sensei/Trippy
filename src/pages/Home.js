import { React, useState} from 'react';
import styled from 'styled-components';

import HeaderHome from '../components/Home/HeaderHome'
import CityItems from '../components/Home/CityItems'
import { Link } from "react-router-dom";
import city from '../cities.json'

const Home = (props) => {

    // const [cities, setCities] = useState(null)

    // Fetch pour récupérer les éléments de l'API
    // useEffect (() => {
    //     fetch('https://trippy-konexio.herokuapp.com/api/home')
    //       .then(response => response.json())
    //       .then(data => setCities(data.cities))
    //     }, [])
    // console.log("cities =>",cities);

    const [imgCities] = useState(city)

    const Container = styled.div`
        display: grid;
        width: 100%;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: auto;
        row-gap: 50px;
        // column-gap: 0px;
        background: #EEE6DD; 
        padding-bottom: 100px;
        padding-top: 50px;

        @media (max-width: 970px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media (max-width: 650px){
            // grid-template-columns: 1fr;
            display: flex;
            flex-direction: column;
            row-gap: 30px;
            padding-bottom: 50px;
        }
    `
    const Destinations = styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
        background: #EEE6DD; 
        padding-top: 50px;

        @media (max-width: 400px){
            padding-top: 30px;
        }
    `
    const ContainerMiniTitle = styled.div`
        display: flex;
        justify-content: space-around;
        text-align: center;
    `
    const MiniTitle = styled.h3`
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 21px;
        color: #FFFFFF;
        background: rgba(235, 141, 97, 0.65);
        margin: 0;
        padding: 2px 40px;

        @media (max-width: 400px){
            width: 50%;
            margin: 0px;
            padding: 2px 0px;
            font-size: 10px;
            line-height: 15px;
        }
    `
    const Title = styled.h2`
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 32px;
        line-height: 54px;
        display: flex;
        justify-content:center;
        align-items: center;
        text-align: center;
        color: #000000;
        margin: 0;

        @media (max-width: 400px){
            font-size: 16px;
        }
    `
    const Text = styled.p`
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 25px;
        text-align: center;
        margin: 0;
        color: #555555;

        @media (max-width: 400px){
            font-size: 10px;
            line-height: 15px;
        }
    `

    // console.log("Image des villes", imgCities);

    return (
        <>
            <HeaderHome />
                {imgCities === null ?
                (<p>Loading...</p>)
                :
                (
                    <>
                    <Destinations>
                        <ContainerMiniTitle>
                            <MiniTitle>CITY TRIP</MiniTitle>
                        </ContainerMiniTitle>
                        <Title>Popular Destinations</Title>
                        <Text>Explore new cities, discover new culures and create new memories. <br/> Read the latest reviews, search for the lowest prices, stay at the greatest hotels and save money on Trippy.
                        </Text>
                    </Destinations>

                    <Container>
                        {imgCities.map(imgCity => (
                        <Link to={`/hotels/${imgCity.name}`}>
                            <CityItems
                                image={imgCity.image}
                                cityName={imgCity.name}
                                preTitle={imgCity.preTitle}
                                title={imgCity.title}
                                text={imgCity.text}
                            />
                        </Link>
                        ))}
                    </Container>
                    </>
                )}
        </>
    );
}

export default Home;