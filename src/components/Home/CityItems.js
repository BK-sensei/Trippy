import { React } from 'react';
import styled from 'styled-components';

const CityItems = (props) => {

    const Items = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
    `
    const CityImg = styled.div`
        width: 320px;
        height: 380px;
        position: relative;
        background-position: top;
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 10px;

        @media (max-width: 400px){
            height: 300px;
        }
    `
    const CityName = styled.h4`
        width: 320px;
        height: 40px;
        position: absolute;
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        text-transform: uppercase;
        line-height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #FFFFFF;
        background: rgba(0,0,0,0.6);
        border-radius: 0px 0px 10px 10px;
        top: 313px;

        @media (max-width: 400px){
            top: 233px;
        }
    `

    console.log(props.image)

    return (
        <Items>
            <CityImg style={{backgroundImage: `url(https://trippy-konexio.herokuapp.com/${props.image})`}} alt="City">
                <CityName>{props.name}</CityName>
            </CityImg>
        </Items>
    )
}

export default CityItems;