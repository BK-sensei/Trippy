import styled from 'styled-components'
// le style  de la nav
<<<<<<< HEAD
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
  
=======
const Container = styled.nav` 
  display : flex;
  justify-content: end;
  padding : 15px;
  list-style-type: none;
  z-index: 10;
  background-color: transparent;
`;

const NavBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 50px;
  padding-right: 50px;
>>>>>>> main
`;

const H2 = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  color: #FFFBFB;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
const Favoris = styled.p`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-size: 16px;
  color: #FFFBFB;
`

const Nav = () => {

    return (
      <Container>
<<<<<<< HEAD
        <Li>Home page </Li>
        <Li>Favoris</Li>
        <Li>Home page </Li>
=======
        <NavBar>
          <H2>Trippy</H2>
          <Favoris>Favoris</Favoris>
        </NavBar>
>>>>>>> main
      </Container>
    )
}
export default Nav;