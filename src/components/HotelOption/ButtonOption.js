import { useState} from 'react'

const ButtonOption = () => {

    const [optionToggle, setOptionToggle] = useState(false)

    const toggle = () => {
        setOptionToggle(!optionToggle)
    }

    return (
        <>
      <button onClick={toggle}>Toggle</button>
      </>
    )
}

export default ButtonOption