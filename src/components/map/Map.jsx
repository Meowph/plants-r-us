import React from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';

const countyData = {
  /* GeoJSON data for WV counties */
};

const stateParks = {
  /* Data linking counties to state parks */
};

const onEachFeature = (feature, layer) => {
  layer.on({
    click: (e) => {
      const countyName = feature.properties.name;
      const parkInfo = stateParks[countyName] || 'No state park information available';
      alert(`State Park Info: ${parkInfo}`);
    },
  });
};

export const WVMap = () => {
  return (
    <MapContainer center={[38.5976, -80.4549]} zoom={7} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <GeoJSON data={countyData} onEachFeature={onEachFeature} />
    </MapContainer>
  );
};