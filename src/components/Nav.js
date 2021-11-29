import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {FaRegHeart} from 'react-icons/fa'

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
  a{
    text-decoration:none;
    color: white;
  }
`
const Favoris = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-size: 16px;
  background: white;
  color: #EB8D61;
  font-weight: bold;
  padding: 5px;
  border-radius: 10px;
  p{
    margin: 0;
  }
  a{
      text-decoration:none;
      color: #EB8D61;
  }
`

const Nav = () => {

    return (
      <Container>
        <NavBar>
          <H2><Link to="/">Trippy</Link></H2>
          <Favoris><Link to="/favoris"><p>Favorites <FaRegHeart /></p> </Link></Favoris>
        </NavBar>
      </Container>
    )
}

export default Nav