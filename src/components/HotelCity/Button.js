import styled from 'styled-components'
const Button1 = styled.button`
  /* Adapt the colors based on primary prop */
//   background: #201F1F;
//   color: #E5E5E5;
    background: transparent;
    color: #201F1F;
    border: none;

  font-size: 1em;
  margin: 1em;
  padding: 0.50em 1em;
  border-radius: 3px;

  :hover{
    background: #201F1F;
    color: #E5E5E5;
  }
`;

const Button = (props) =>{
    const {num , click} = props
    return (
        <>
            <Button1 onClick={()=> click (num)}>{num}</Button1>
            
        </>
    )
}

export default Button