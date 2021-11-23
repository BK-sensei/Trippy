import styled from 'styled-components'
// le style  de la nav
const Container = styled.div` 
display : flex;
justify-content: end;
padding-right : 90px;
list-style-type: none;
`;

const Li = styled.li` 
  
  padding-left : 40px;
  
`;
const Nav = () => {

    return (
      <Container>
      <Li>Favoris</Li>
      </Container>
    )
}
export default Nav;