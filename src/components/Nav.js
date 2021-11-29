import styled from 'styled-components'
import {Link} from 'react-router-dom'
const Container = styled.nav` 
  display : flex;
  justify-content: end;
  list-style-type: none;
  z-index: 10;
  background-color: transparent;
`
const NavBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 50px;
  padding-right: 50px;
`
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
a{
    text-decoration:none;
    color: white;
}
  
`

const Nav = () => {

    return (
      <Container>
        <NavBar>
          <H2>Trippy</H2>
          <Favoris><Link to="/favoris"> Favoris </Link></Favoris>
        </NavBar>
      </Container>
    )
}

export default Nav