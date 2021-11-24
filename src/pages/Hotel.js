import React , { useState, useEffect }from 'react'
import Slider from '../components/Slider'
import OptionsMenu from '../components/OptionsMenu'


function Hotel(props) {

    const [hotel, setHotel] = useState(null)
    
    useEffect (() => {
        console.log("#1 je rentre dans componnet did mount")
        fetch(`https://trippy-konexio.herokuapp.com/api/hotels/619b99fc53a95d1d32bf1539`)
            .then(response => response.json()) 
            .then(data => {
                console.log("#2 asynchrone data => ", data)
                setHotel(data.result)
            })
            console.log("#3 fin componnet did mount")

    }, [])
    
    // const changeHotel= () => {
        //     setHotel([])
        // }
        
        // useEffect (() => {
            //     console.log("update")
            // }, [hotel])
            
            // console.log("hotel dans le fetch:", hotel)
            
            // console.log("#0 return")

    return (
        <div>
            {/* <ul>
                {hotels.pictures.map(element =>(
                    <li key={element.id}>
                        <p>{element.name}</p>
                    </li>
                ))}
            </ul> */}
            <Slider/>
            <OptionsMenu />
            {/* <button onClick={changeHotel}>change hotel</button> Exemple */}
        </div>

    )
}

export default Hotel


