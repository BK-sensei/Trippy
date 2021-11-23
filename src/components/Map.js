import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import GoogleMapReact from 'google-map-react'
import styled from 'styled-components'
import Marker from "./Marker"
const MapContainer = styled.div`
  height: 100vh;
  width: 69%;
`


const Map = () => {
    const [ hotels , setHotels ] = useState(null)
    // const [ location , setLocation ] = useState(null)
    const [myPosition, setMyPosition] = useState(null)
    const { city } = useParams()
    useEffect(() => {
        fetch( `https://trippy-konexio.herokuapp.com/api/hotels/city/${city}`)
            .then(reponse => reponse.json())
            .then(result => setHotels(result))
        // console.log("Récupération de la localisation...")
    
        navigator.geolocation.getCurrentPosition(
          location => {
            console.log(location.coords)
            setMyPosition({
              lat: location.coords.latitude,
              lng: location.coords.longitude
            })
          },
          error => {
            console.log(error)
          }
        )
      }, [])
    
    return (
        <>
            {hotels === null ? 
            (<p>en cour de chargement ...</p>) 
            :
            ( 
                <MapContainer>
                    <GoogleMapReact
                    bootstrapURLKeys={{ key: "" }}
                    defaultCenter={myPosition}
                    defaultZoom={14}
                    >
                        {hotels.results.map((hotel,index) => 
                        <Marker 
                        key={hotel.name}
                        lat={hotel.location.lat}
                        lng={hotel.location.lon}
                        prix={hotel.price}
                        />
                        
                    ) }
                    
                    </GoogleMapReact>
                </MapContainer>
            ) }
            
        </>  
    )
  }
  
  export default Map;