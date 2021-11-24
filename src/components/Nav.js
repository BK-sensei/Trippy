import styled from 'styled-components'
// le style  de la nav
const Container = styled.div` 
display : flex;
justify-content: end;
padding-right : 90px;
list-style-type: none;
background: #EB8D61;
height: 50px;
margin-bottom : 20px
`;

const Li = styled.li` 
  
  padding : 14px;
  
`;
const Nav = () => {

    return (
      <Container>
        <Li>Home page </Li>
        <Li>Favoris</Li>
        <Li>Home page </Li>
      </Container>
    )
}
export default Nav;