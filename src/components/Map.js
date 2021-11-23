import { useEffect, useState } from "react"
import GoogleMapReact from 'google-map-react'
import styled from 'styled-components'

const MapContainer = styled.div`
  height: 100vh;
  width: 69%;
`


const Map = () => {

    const [myPosition, setMyPosition] = useState(null)
    useEffect(() => {
        console.log("Récupération de la localisation...")
    
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
            {myPosition === null ? 
            (<p>en cour de chargement ...</p>) 
            :
            (<MapContainer>
                <GoogleMapReact
                  bootstrapURLKeys={{ key: "" }}
                  defaultCenter={myPosition}
                  defaultZoom={14}
                >
                  {/* <Marker
                    lat={myPosition.lat}
                    lng={myPosition.lng}
                  /> */}
                </GoogleMapReact>
              </MapContainer>) }
            
        </>  
    )
  }
  
  export default Map;