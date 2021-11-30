// import { useState, useRef, useEffect } from 'react'
// import gsap from 'gsap'
import styled from 'styled-components'


let InfoWindow = styled.div`
    display: flex;
    justify-content: center;
    width : 100px;
    background : rgba(214, 208, 211, 0.44);
    border : 1px solid black;
    border-radius : 20px;
    }
`

const Marker = (props) => {
    // console.log(" props de marker",props.prix);
    // console.log("props de marker", props);
    const { prix, id, func } = props 
    return (
      <>
        <img 
          onMouseEnter={() =>func(id)}
          onMouseLeave={() =>func(null)}
          src="https://img.icons8.com/material-two-tone/48/000000/place-marker.png" alt=" marquer des hotels"/>
        <InfoWindow>
            {prix}€
        </InfoWindow>
      </>
    )
  }
  
  export default Marker;