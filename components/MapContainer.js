import { GoogleMap, LoadScript } from '@react-google-maps/api';

const ContainerStyle = {
    maxWidth: '1100px',
    width:'100%',
    height: '400px'
}

const center = {
    lat: -11.809864,
    lng: -42.059269
}

const MapContainer = () => {
    return (
        <div className="mapContainer flex flex-col py-8 justify-center items-center bg-[#f9faf7]">
            <div className="texts flex my-5 flex-col justify-center items-center gap-[5px]">
                <span className="px-2 py-1  my-5 bg-[#1b7e3c] rounded-l-xl rounded-bl-none rounded-b-xl mb-1">
                    <span className="logo  text-[16px] md:text-[16px] text-white">localização</span>
                </span>
                <p className="mb-5 font-bold text-[14px] md:text-[16px] text-center" >Rua. Landoufo Alves, 321 - Barra do Mendes/BA - CEP: 0000-0000</p>
            </div>


            <div className="container flex justify-center">
                <LoadScript
                    googleMapsApiKey="AIzaSyDG_aN0MOMnbyO5bwcbnxQPknKsr1HRr8Y"
                >
                    <GoogleMap
                        mapContainerStyle={ContainerStyle}
                        // className="w-full h-full"
                        center={center}
                        zoom={19}
                        z="true"
                    >
                        { /* Child components, such as markers, info windows, etc. */}
                        <></>
                    </GoogleMap>
                </LoadScript>
            </div>
        </div>
    )
}

export default MapContainer;