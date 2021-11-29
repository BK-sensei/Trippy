import GoogleMapReact from 'google-map-react'
import styled from 'styled-components'
import Marker from "./Marker"

// import Hotels from "../pages/Hotels"

const MapContainer = styled.div`
  height: 100vh;
  width: 70%;

  @media (max-width: 400px){
      height: 50vh;
  }
`
const Map = (props) => { 
       
    // console.log("props hotel",props);
  const {center} = props.hotels
    //const {stars} = props.hotels.results
    // console.log(props.hotels.results);
    return (
        <>
            <MapContainer>
                <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={{
                    lat: center.lat,
                    lng: center.lon
                }}
                defaultZoom={14}
                >
                    {props.hotels.results.map((hotel,index) => 
                        <Marker 
                        key={hotel.name}
                        lat={hotel.location.lat}
                        lng={hotel.location.lon}
                        prix={hotel.price}
                        />
                    ) } 
                
                </GoogleMapReact>
            </MapContainer>
        </>  
    )
}
  
  export default Map;