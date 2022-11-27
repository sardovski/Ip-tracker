import { MapContainer, TileLayer, useMap,Marker,Popup } from 'react-leaflet'
import React from 'react'
import { useIpData } from '../Context/IpDataContext'
import { useEffect } from 'react';

const Map = () => {


    const [data] = useIpData();
    let cordinates = data ? [data.location.lat,data.location.lng] : [50,-0.19];
    
    const ChangeMapView = ({ coords }) => {
        const map = useMap();
        map.setView(coords, map.getZoom());
      
        return null;
      };


    return (
        <div className='mapContainer'>
            <div id="map">
                <MapContainer center={cordinates} zoom={15} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={cordinates}  zoom={10}>
                        <Popup>
                            Searched location.
                        </Popup>
                    </Marker>
                    <ChangeMapView coords={cordinates}/>
                </MapContainer>
            </div></div>
    )
}

export default Map