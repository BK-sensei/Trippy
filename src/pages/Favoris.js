import React , { useState, useEffect }from 'react'
import styled from 'styled-components'
import Nav from '../components/Nav'
import {BsFillTrashFill} from 'react-icons/bs'

const FavoritePage = styled.div`
    background: #EEE6DD;
`
const FavTitle = styled.h1`
    text-align: center;
    font-family: 'Poppins', sans-serif;
    border-top: thick double;
    border-bottom: thick double;
    padding: 5px;
    margin-top: 0;

    @media (max-width: 400px){
        font-size: 30px;
    }
`
const ContainerFav = styled.div`
    width : 100%;
    display: flex;
    @media(max-width : 900px){
        flex-wrap : wrap;
    } 
`
const ContainerNav = styled.div`
    background : #EB8D61;
`
const Container = styled.div`
    padding: 20px;

    @media(max-width : 850px){
        flex-direction : column;
    }
`
const FavoriteList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    font-family: 'Poppins', sans-serif;

    @media(max-width : 1200px){
        grid-template-columns: repeat(2, 1fr)
    }
    @media(max-width : 850px){
        display: flex;
        flex-direction: column;
    }
`
const ContainerCardFav = styled.div`
    border : 1px solid black;
    border-radius : 10px;
    width : 100%;
    margin : 10px 10px; 
    background-color: #201F1F;
    color: #E5E5E5;
    padding: 10px;
    h2, p{
        padding: 10px;
        margin: 0;
    }  

    @media (max-width: 400px){
        h2{
            font-size: 20px;
        }
        p{
            font-size: 12px;
        }
    }
`
const Price = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #E5E5E5;
    color: #201F1F;
    margin-left : 10px;
    border-radius: 5px;
    padding: 5px 5px;

    @media (max-width: 400px){
        font-size: 12px;
    }
`
const Icon = styled.div`
    display:flex;
    justify-content : space-between;
    align-items:center;
    padding-right: 20px;
    padding-bottom: 10px;
`
const Span = styled.span`
    font-weight: bold;
`

const Favoris = () =>{
    
    const [dataFavoris, setDataFavoris] = useState([])

    useEffect (()=> {
        const promiseArray = JSON.parse(localStorage.getItem("favorites")).map(id =>{
            return(
                fetch (`https://trippy-konexio.herokuapp.com/api/hotels/${id}`)
                
            )
        })

        Promise.all(promiseArray)
            .then(results => Promise.all(results.map(result => result.json())))
            .then(results => setDataFavoris(results))
    }, [dataFavoris])

    console.log("state data favoris", dataFavoris);
    const DeleteFav = (index) => {
        const arrayLocal = JSON.parse(localStorage.getItem("favorites"))
        arrayLocal.splice(index,1)
        localStorage.setItem("favorites",JSON.stringify(arrayLocal))
        console.log("local",arrayLocal);
    }
    
    return (
        <FavoritePage>
            <ContainerNav>
                    <Nav />
            </ContainerNav>
            <Container>
                <FavTitle>My Favorite Hotels</FavTitle>
                <FavoriteList>
                    { dataFavoris === [] ? 
                    (<p>pas de favoris</p>) 
                    :
                    (
                
                        dataFavoris.map( (favoris,index) => 
                            <ContainerFav key={index} >
                                <ContainerCardFav>
                                    <h2>{favoris.result.name} </h2>
                                    <p> <Span>Address :</Span> {favoris.result.address}</p>
                                    <p> <Span> Phone number :</Span> {favoris.result.phone} </p>
                                    <Icon>
                                        <Price><Span> Price : {favoris.result.price}€</Span></Price>
                                        <BsFillTrashFill onClick={()=> DeleteFav (index)} />
                                    </Icon>
                                </ContainerCardFav> 
                            </ContainerFav>
                        )
                        
                        
                    )}
                </FavoriteList>
            </Container>
        </FavoritePage>    
    )
}
export default Favoris