import { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
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
    const {prix, hotel} = props 

    const [toggle, setToggle] = useState(false)

    const changeState = () => {
      setToggle(!toggle)
    }

  const cardRef = useRef(null)

  const useEffect = (() => {
    
    toggle &&
    gsap.to(cardRef.current, {
        scale: 1.5,
        // rotate: 360,
        duration: 1.2
    })
    // :
    // gsap.to(cardRef.current, {
    //     scale: 1,
    //     // rotate: 0,
    //     duration: 1.2
    // })
    
  }, [toggle])
    
    return (
      <>
        <img src="https://img.icons8.com/material-two-tone/48/000000/place-marker.png" alt=" marquer des hotels"/>
        <InfoWindow
        onClick={changeState}
        ref={cardRef}
        >
            {prix}€
        </InfoWindow>
      </>
    )
  }
  
  export default Marker;