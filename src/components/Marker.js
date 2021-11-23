import styled from 'styled-components'
let InfoWindow = styled.div`
    width : 40px;
    background : rgba(214, 208, 211, 0.44);
    border : 1px solid black;
    border-radius : 20px;
    display:flex;
    justify-content: center;
   
`
const Marker = (props) => {
    // console.log(" props de marker",props.prix);
    const {prix} = props 
    return (
      <>
        <img src="https://img.icons8.com/material-two-tone/48/000000/place-marker.png"/>
        <InfoWindow>
            {prix}€
        </InfoWindow>
      </>
    )
  }
  
  export default Marker;