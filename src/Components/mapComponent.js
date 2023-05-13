import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

function OpenStreetMapComponent() {
  const markers = [
    { position: [58.82164888517952, 5.658234571041399], name: 'Løå på Lea' },
    { position: [58.83133304169512, 5.664231417033445], name: 'Julebygda Kapell' },
    {position: [58.8827524311309, 5.627358769987153], name: 'Sola Flyplass'},
    {position: [58.85437528957739, 5.6995767873276035], name: 'Saras barndomshjem'},
    {position: [62.77464113661904, 8.031012802667744], name: 'Eriks barndomshjem'},
    {position: [63.399958868711124, 10.34678232319771], name: 'Erik og Saras hjem'}
  ];

  const customMarkerIcon = L.icon({
    iconUrl: markerIcon,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [0, -35],
    shadowUrl: markerShadow,
    shadowSize: [41, 41],
    shadowAnchor: [12, 41],
  });

  return (
    <div style={{ height: '400px' }}>
      <MapContainer center={[58.85565888517952, 5.658234571041399]} zoom={12} style={{ height: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {markers.map((marker, index) => (
          <Marker key={index} position={marker.position} icon={customMarkerIcon}>
            <Popup>{marker.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default OpenStreetMapComponent;
