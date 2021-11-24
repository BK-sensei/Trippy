import { BrowserRouter, Routes, Route } from "react-router-dom"
import Nav from './components/Nav'
import  NotFound  from "./pages/NotFound"
import Hotel from './pages/Hotel'
// import styled from 'styled-components'

const App = () => {
  return (
  <BrowserRouter>
    <Nav />
      <Routes>
        <Route exact path="/"  />
        <Route path="/hotel" element={<Hotel/>} />
        <Route path="/favoris"  />
        <Route  path="*" element={<NotFound/>} />
    </Routes>
  </BrowserRouter>

  )
}

export default App;