import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './components/Nav';
import  NotFound  from "./pages/NotFound";
import styled from 'styled-components'
const Container = styled.div` 
margin-top: 40px
`;
const App = () => {

  return (
    <Container>
      <Nav />
        <BrowserRouter>
          <Routes>
            <Route exact path="/"  />
            <Route  path="/Hotel"  />
            <Route  path="/Favoris"  />
            <Route  path="*" element={<NotFound/>} />
          </Routes>
        </BrowserRouter>
    </Container>
  )
}

export default App;