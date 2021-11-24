import { BrowserRouter, Routes, Route } from "react-router-dom";

import  NotFound  from "./pages/NotFound";
import styled from 'styled-components'
import Hotels from "./pages/Hotels";

const Container = styled.div` 

`;
const App = () => {

  return (
    <Container>
        <BrowserRouter>
          <Routes>
            <Route exact path="/"  />
            <Route  path="/hotels/:city" element={<Hotels/>} />
            <Route  path="/Favoris"  />
            <Route  path="*" element={<NotFound/>} />
          </Routes>
        </BrowserRouter>
    </Container>
  )
}

export default App;