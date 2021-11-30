import styled from 'styled-components'
import ButtonOption from './ButtonOption'

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

const OptionsMenu = (props) =>  {

const {optionToggle} = ButtonOption()

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