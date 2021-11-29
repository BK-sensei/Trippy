import styled from 'styled-components'
const Button1 = styled.button`
  /* Adapt the colors based on primary prop */
  background: rgba(255, 202, 230, 0.8);
  color:blue;

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
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