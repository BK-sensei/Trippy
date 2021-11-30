import GoogleMapReact from 'google-map-react'
import styled from 'styled-components'
import Marker from "./Marker"

// import Hotels from "../pages/Hotels"

const MapContainer = styled.div`
  height: 100vh;
  width: 70%;
`
const Map = (props) => { 
    console.log(("mes props dans map",props));
    // const clickList =(marquer) =>{
    //     console.log("sa clik dure",marquer);
    //     console.log("log de result hotel . id =>",props.hotels.results._id );
    //     // if(props.hotels.results._id === marquer ){
    //     //     console.log("il sont egal");
    //     // }else{
    //     //     console.log("il ne sont pas egal");
    //     // }
    // }
       
    // console.log("props hotel",props);
  const {center} = props.hotels
  
    //const {stars} = props.hotels.results
    console.log("les props pour maker ",props.hotels.results);
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
                        selected={props.selectedHotel}
                        func={props.mouse}
                        id = {hotel._id}
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