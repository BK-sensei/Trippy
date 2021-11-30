import GoogleMapReact from 'google-map-react'
import styled from 'styled-components'
import Marker from "../HotelCity/Marker"

// import Hotels from "../pages/Hotels"

const MapContainer = styled.div`
    height: 100vh;
    width : 100%;

    @media (max-width: 800px){
        height: 50vh;
    }
`
const Map2 = (props) => { 
    // console.log("les props",props);
       const {lat1, lon1, hotels} = props
    //    console.log("lat",lat1,lon1);
    // console.log("props hotel",props);
    // const {center} = props.hotels
    // const {stars} = props.hotels.results
    // console.log(props.hotels.results);
    return (
        <MapContainer>
                <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={{
                    lat: lat1,
                    lng: lon1
                }}
                defaultZoom={14}
                >
                    
                    <Marker 
                    
                    lat={lat1}
                    lng={lon1}
                    prix={hotels.price}
                    />
                     
                
                </GoogleMapReact>
        </MapContainer> 
    )
}
  
  export default Map2;