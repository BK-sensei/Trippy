import React from 'react';
import styled from 'styled-components';

import { IoLogoInstagram, IoLogoLinkedin, IoLogoFacebook } from 'react-icons/io';
import { FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {

    const Footer = styled.footer`
        width: 100%;
        background: #393939;
        font-family: 'Poppins', sans-serif;
    `
    const Newsletter = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        margin: 0px;
        padding: 15px 0px;

        @media (max-width: 900px){
            display: flex;
            flex-direction: column;
        }
    `
    const Title = styled.h2`
        font-style: normal;
        font-weight: normal;
        font-size: 22px;
        line-height: 33px;
        color: #E5E5E5;

        @media (max-width: 690px){
            font-size: 16px
        }

        @media (max-width: 500px){
            font-size: 12px;
            margin: 0px;
        }
    `
    const Form = styled.form`
        display:flex; 
        gap: 10px;
    `
    const Email = styled.input`
        width: 350px;
        height: 35px;
        background: #E5E5E5;
        border-radius: 10px;
        font-style: italic;
        font-weight: 200;
        font-size: 16px;
        border: none;
        padding-left: 10px;

        @media (max-width: 500px){
            width: 170px;
            height: 20px;
            font-size: 10px;
        }
    `
    const Button = styled.button`
        width: 103px;
        height: 35px;
        background: #EB8D61;
        border-radius: 10px;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #FFFFFF;
        border: none;

        @media (max-width: 500px){
            width: 70px;
            height: 20px;
            font-size: 10px;
        }
    `
    const Delimitation = styled.hr`
        width: 90%;
        margin-top: 0;
        margin-bottom: 0;
        border: 2px solid #D7D7D7;
    `
    const Items = styled.div`
        display: flex;
        justify-content: space-around;
        align-items: center;
        color: #E5E5E5;
        padding: 30px 0;

        @media (max-width: 780px){
            display: flex;
            flex-direction: column;
        }
    `
    const AboutUs = styled.div`
        width: 360px;
        line-height: 24px;
    `
    const SocialNetwork = styled.div`
        width: 100%;
        background: #201F1F;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px 0px;
        gap: 20px;
    `

    return (
        <>

        <Footer>
            <Newsletter>
                <Title>SIGN UP TO OUR NEWSLETTER AND GET OUR BEST OFFERS !</Title>
                <Form>
                    <Email input type="email" name="Email" placeholder="trippy@agency.com" />
                    <Button input type="button" value="SUBMIT">SUBMIT</Button>
                </Form>
            </Newsletter>
            <Delimitation />
            <Items>
                <div>
                    <h4>Best of Trippy</h4>
                    <p>Our Hotels Selection </p>
                    <p>Offers of the moment</p>
                    <p>Contact us</p>
                </div>
                <div>
                    <h4>Our partners</h4>
                    <p>The Useless Website</p>
                    <p>Mondrian And Me</p>
                    <p>Heyyyyy Hooooo</p>
                </div>
                <AboutUs>
                    <h4>About us</h4>
                    <p>Trippy came after a long talk with Mister Fucking Paquier.JSON, a great fucking teacher who gave us shitty API’s to work with. </p>
                </AboutUs>
            </Items>
        </Footer>

        <SocialNetwork>
            <FaTwitter style={{color:'white', width:'25px', height:'25px', paddingLeft: '80px'}} />
            <IoLogoInstagram style={{color:'white', width:'30px', height:'30px'}} />
            <IoLogoFacebook style={{color:'white', width:'30px', height:'30px'}} />
            <IoLogoLinkedin style={{color:'white', width:'30px', height:'30px'}} />
            <FaGithub style={{color:'white', width:'30px', height:'30px'}} />
        </SocialNetwork>

        </>
    );
}

export default Footer;