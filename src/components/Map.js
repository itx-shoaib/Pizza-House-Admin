

import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';



function Map(props) {

    
    


    const { isLoaded } = props;

    const containerStyle = {
        width: '50vw',
        height: '200vh'
    };

    const center = {
        lat: 31.4697,
        lng: 74.2728
    };
    //   const emp = {
    //     lat: 31.4697,
    //     lng: 74.1203
    //   };
    //   const emps = {
    //     lat: 31.4697,
    //     lng: 74.1803
    //   };
    const markers = [

        {

            name: "umair house",
            location: {

                lat: 31.4697,
                lng: 74.2728
            }

        },


        {

            name: "pizza house",
            location: {

                lat: 31.4697,
                lng: 74.1203
            }

        },


        {

            name: "calfonia",
            location: {

                lat: 31.4697,
                lng: 74.1803
            }

        },

    ]
  const  onMarkerDragEnd = (coord) => {
       alert(coord.latitude);
      
      };
    return (isLoaded && (
        <>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}>


                {

                    markers.map((markers) => {
                        return (
                            <div key={markers.name}>
                                <Marker onCursorChanged={true} draggable={true}
                                
                                
                         onDragEnd={(e) => alert(e.latLng.toString().replace("(",',').replace(")",',').split(',')[1 ])}
                                    position={markers.location} on />
                            </div>
                        )

                    })
                }

            </GoogleMap>
        </>
    ))

};

export default Map;
