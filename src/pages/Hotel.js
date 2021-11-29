import React , { useState, useEffect }from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Map2 from '../components/Map2'
import Slider2 from '../components/HotelOption/Slider2'
import AddFavorite from '../components/HotelOption/AddFavorite'
import Rooms from './Rooms'

const HotelById = styled.div`
    *{
        margin : 0;
        padding : 0;
        box-sizing : border-box;
    }
    width: 100%;
    font-style: normal;
    font-weight: bold;
    background: #EEE6DD;
`

const HotelTitle = styled.div`
    width: 100%;
    display: flex;
    font-size: 30px;
    background: transparent;
    background: rgba(0,0,0,.1);
    border-bottom:  1px solid #EEE6DD;
    h2 {
        text-align: center;
    }
    button {
        margin-left: 100px;
        border-radius: 30px
    }
`

const OptionContent = styled.div`
    // display: flex;
    // justify-content: space-between;
    // div {
    //     display: flex;
    //     justify-content: right;
    //     align-self: center;
    // }
`

const List = styled.div`
    // height: 100%;
    // width: 20%;
    // display: flex;
    // justify-content: left;
    // flex-direction: column;
    // padding: 0 80px 0 0;
    // align-items: left;
    // list-style: none;
    // font-size: 13px;
    // background: transparent;
    // background: rgba(0,0,0,.2);
    // h3{
    //     padding: 12px 18px 12px 18px;
    //     font-size: 25px;
    //     border: 1px solid #EEE6DD;
    //     border-radius: 20px;
    //     color: #EEE6DD;
    //     background: rgba(0,0,0,.1)
    // }
    // ul{
    //     list-style-type: none;
    //     padding-left: 80px;
    // }
`

const MapHotelOption = styled.div`
    // width: 50vw;
    // display: flex;

`

const Hotel = (props) => {

    const { id } = useParams()
    console.log(id);
    const [hotel, setHotelState] = useState(null)
    // const [isFavorite, setIsFavorite] = useState(false) 
    
    useEffect (() => {
        fetch(`https://trippy-konexio.herokuapp.com/api/hotels/${id}`)
            .then(response => response.json()) 
            .then(data => {
                
                setHotelState(data.result)
            })
    }, [id])
    // console.log("commodities :", hotel)
    return (

        <HotelById>
            {hotel === null ? 
            (<p>en cour de chargement ...</p>) 
            :
            (
            <>    
                 <Slider2 />
                <HotelTitle>
                    <h2>{hotel.name}</h2>
                    <button onClick={() => AddFavorite} >
                        add to favorites
                    </button>
                </HotelTitle>
                <OptionContent>
                    <List>
                        <div><h3>Options :</h3></div>
                        <>
                        {hotel.commodities.map(element => (
                            <ul>
                                <li>
                                    {element}
                                </li>
                            </ul>
                        ))}
                        </>
                    </List>
                    <MapHotelOption>
                        <Map2 
                            lat1={hotel.location.lat} 
                            lon1={hotel.location.lon}
                            hotels={hotel}
                        />
                    </MapHotelOption>
                </OptionContent>
            </>
            )}
       
        </HotelById>
    )
}

export default Hotel