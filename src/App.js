import { BrowserRouter, Routes, Route } from "react-router-dom"
import styled from "styled-components"

import Home from '../src/pages/Home'
import Hotels from './pages/Hotels'
import Hotel from './pages/Hotel'
import Rooms from "./pages/Rooms"
import Favoris from "./pages/Favoris"
import NotFound from './pages/NotFound'
import Footer from "./components/Footer";

const Container = styled.div`

`

const App = () => {
  return (
    <Container>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home/>}  />
            <Route exact path="/hotels/:city" element={<Hotels/>} />
            <Route exact path="/hotel/:id" element={<Hotel/>} />
            <Route exact path="/hotel/:id/rooms" element={<Rooms/>} />            
            <Route path="/favoris"  element={<Favoris />}/>
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </BrowserRouter>
        <Footer />
    </Container>
  )
}

export default App