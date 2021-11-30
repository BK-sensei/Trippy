import React from 'react';
import styled from 'styled-components';
import background from '../../img/home-img/bg-home.png'
import Nav from '../Nav';

const Header = (props) => {

    const Header = styled.header`
        background: url(${background});
        width: 100%;
        height: 100vh;
        z-index: 0;

        @media (max-width: 600px){
            height: 100%;
        }
    `

    const ElementHeader = styled.div`
        display: flex;
        flex-direction: column;
        padding-left: 110px;
        padding-top: 150px;
        z-index: 2;

        @media (max-width: 630px){
            padding-left: 40px;
            padding-top: 80px;
            padding-bottom: 80px;
        }
        @media (max-width: 420px){
            padding-left: 20px;
            padding-top: 80px;
        }
    `

    const Title = styled.h1`
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 60px;
        line-height: 90px;
        color: #FFFFFF;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

        @media (max-width: 900px){
            font-size: 50px;
            line-height: 60px;
        }
        @media (max-width: 760px){
            font-size: 40px;
            line-height: 50px;
        }
        @media (max-width: 630px){
            font-size: 30px;
            line-height: 40px;
        }
        @media (max-width: 375px){
            font-size: 20px;
            line-height: 30px;
        }
    `

    const Button = styled.button`
        width: 240px;
        height: 50px;
        left: 125px;
        top: 502px;
        background: #EB8D61;
        border-radius: 30px;
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        color: white;
        border: none;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

        @media (max-width: 600px){
            width: 140px;
            height: 25px;
            font-size: 12px;
        }
    `

    return (
        <Header>
            <Nav />
            <ElementHeader>
                <Title>READY FOR THE<br/><span style={{color: '#EB8D61'}}>TRIPPY</span>EST ADVENTURE ?</Title>
                <Button>Choose a city below</Button>
            </ElementHeader>
        </Header>
    );
}

export default Header;