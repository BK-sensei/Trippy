import { BrowserRouter, Routes, Route } from "react-router-dom";

import  NotFound  from "./pages/NotFound";
import styled from 'styled-components'
<<<<<<< HEAD
import Hotels from "./pages/Hotels";
=======
import Home from '../src/pages/Home'
import Hotel from "./pages/Hotel";

>>>>>>> main

const Container = styled.div` 

`;
const App = () => {

  return (
    <Container>
        <BrowserRouter>
          <Routes>
<<<<<<< HEAD
            <Route exact path="/"  />
            <Route  path="/hotels/:city" element={<Hotels/>} />
=======
            <Route exact path="/" element={<Home/>}  />
            <Route  path="/Hotel" element={<Hotel/>} />
>>>>>>> main
            <Route  path="/Favoris"  />
            <Route  path="*" element={<NotFound/>} />
          </Routes>
        </BrowserRouter>
    </Container>
  )
}

export default App;