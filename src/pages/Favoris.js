import React , { useState, useEffect }from 'react'
import styled from 'styled-components'
import Nav from '../components/Nav'
import {BsFillTrashFill} from 'react-icons/bs'

const ContainerFav = styled.div`
    // border : 1px solid black;
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
    display: flex;
    @media(max-width : 900px){
        flex-direction : column;
    }
`
const ContainerCardFav = styled.div`
    border : 1px solid black;
    border-radius : 20px;
    width : 100%;
    margin : 20px 0px 20px 20px ; 

p{
    padding: 10px;
}
    
`
const Icon = styled.div`
    display:flex;
    justify-content : space-between;
    align-items:center;
    
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
        <>
            <ContainerNav>
                    <Nav />
            </ContainerNav>
            <Container>
                { dataFavoris === [] ? 
                (<p>pas de favoris</p>) 
                :
                (
            
                    dataFavoris.map( (favoris,index) => 
                        <ContainerFav key={index} >
                            <ContainerCardFav>
                                <h1>{favoris.result.name} </h1>
                                <p> <Span>address :</Span> {favoris.result.address}</p>
                                <p> <Span> phone number :</Span> {favoris.result.phone} </p>
                                <Icon>
                                    <p> <Span> price : </Span> {favoris.result.price}€</p>
                                    <BsFillTrashFill onClick={()=> DeleteFav (index)} />
                                </Icon>
                            </ContainerCardFav> 
                        </ContainerFav>
                    )
                    
                    
                )}
            
            </Container>
        </>    
    )
}
export default Favoris