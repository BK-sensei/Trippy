import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './components/Nav';
import  NotFound  from "./pages/NotFound";
import styled from 'styled-components'
import Home from '../src/pages/Home'
import Hotel from "./pages/Hotel";


const Container = styled.div` 

`;
const App = () => {

  return (
    <Container>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home/>}  />
            <Route  path="/Hotel" element={<Hotel/>} />
            <Route  path="/Favoris"  />
            <Route  path="*" element={<NotFound/>} />
          </Routes>
        </BrowserRouter>
    </Container>
  )
}

export default App;