import styled from "styled-components";
import Nav from "../components/Nav";

const NotFound = () => {

  const ErrorNav = styled.div`
    background: #EB8D61;
  `
    const Error = styled.div`
      display: flex;
      justify-content: center;
      align-item: center;
      text-align: center;
      background: #EEE6DD;
      font-family: 'Poppins', sans-serif;
      padding: 100px 0px;
    `

    return (
      <>
      <ErrorNav>
        <Nav />
      </ErrorNav>
      <Error>
        <h1>This page does not exist</h1>
      </Error>
      </>
    )
}
export default NotFound;