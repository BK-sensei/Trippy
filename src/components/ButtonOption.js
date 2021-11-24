import { useState} from 'react'

const ButtonOption = () => {

    const [optionToggle, setOptionToggle] = useState(false)

    const toggle = () => {
        setOptionToggle(!optionToggle)
    }

    return (
        optionToggle,
        toggle
    )
}

export default ButtonOption