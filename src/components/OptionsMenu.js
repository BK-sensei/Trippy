import React, { useState} from 'react'
import styled from 'styled-components'

const ContentButton = styled.div`
    height: 30px;
    display: flex;
    justify-content: left;
    border: 1px solid #333
`

const Onglets = styled.div`
    width: 70px;
    height: 30px;
    backgound: blue;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: 1px solid #333
`

const HotelName = styled.div`
    font-weight: 30px
`

const OptionContent = styled.div`
    height: 70vh;
    display: flex;
    justify-content: left;
    align-items: left;
    border: 1px solid red;
    div p {
        padding: 40px;
    }
`


// const [onglet, setOnglet] = useState(1)

// const optOne = () => {
//     setOnglet(1)
// }

// const optTwo = () => {
//     setOnglet(2)
// }

const OptionsMenu = () => {
    return (
        <>
            <HotelName>Nom de l'hôtel</HotelName>
            <ContentButton>
                <Onglets>option1</Onglets>
            </ContentButton>
            <OptionContent>
                <p>contenu de l'option 1</p>
            </OptionContent>
        </>
    )
}

export default OptionsMenu