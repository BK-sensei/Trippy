import styled from 'styled-components'

const Button1 = styled.button`
  /* Adapt the colors based on primary prop */
  background: #EB8D61;
  font-family: 'Poppins', sans-serif;
  font-size: bold;
  color : #EEE6DD;

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;


const ButtonFavoris = (props) =>{
    const { name, clickFavoris, hotelId} = props
    console.log(name);
    
    return (
        <>
            <Button1 onClick={()=> clickFavoris(hotelId)} >{name}</Button1> 
        </>
    )
}

export default ButtonFavoris