import { BrowserRouter, Routes, Route } from "react-router-dom"
import styled from "styled-components"

import Home from '../src/pages/Home'
import Hotels from './pages/Hotels'
import Hotel from './pages/Hotel'
import NotFound from './pages/NotFound'
import Footer from "./components/Footer";
import Test from "./pages/Test"

const Container = styled.div`

`

const App = () => {
  return (
    <Container>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home/>}  />
            <Route path="/hotels/:city" element={<Hotels/>} />
            <Route path="/hotel/:id" element={<Hotel/>} />
            <Route path="/Favoris"  />
            <Route path="/test" element={<Test/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </BrowserRouter>
        <Footer />
    </Container>
  )
}

export default App