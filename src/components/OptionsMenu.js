import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

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
const [option, setOption] = useState([])


useEffect (() => {
    console.log("#1 je rentre dans componnet did mount")
    fetch(`https://trippy-konexio.herokuapp.com/api/hotels/619b99fc53a95d1d32bf1539`)
        .then(response => response.json()) 
        .then(data => {
            // console.log("#2 asynchrone data => ", data)
            setOption(data.result.commodities)
        })
        // console.log("#3 fin componnet did mount")
}, [])


const OptionsMenu = (optionToggle) =>  {

    return (
    optionToggle ? (
        <OptionContent>
            <ul>
                {option.map(element =>(
                    <li key={element.id}>
                        <p>{element}</p>
                    </li>
                ))}
            </ul>
        </OptionContent>
    ) : null
    )
}


export default OptionsMenu