import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { FaHeart, FaMapMarkerAlt } from "react-icons/fa";
import React, { useRef, useState } from 'react'
import L from 'leaflet';
import Header from "../../components/header.jsx"
import 'leaflet/dist/leaflet.css';
import './mapScreen.css'

const iconoNormal = new L.Icon({
    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png",
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

const iconoSeleccionado = new L.Icon({
    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    iconSize: [35, 57], 
    iconAnchor: [17, 57],
    popupAnchor: [1, -46],
    shadowSize: [57, 57]
});

function MapController({ mapRef }) {
    const map = useMap();
    mapRef.current = map;
    return null;
}

function MapsScreen() {
    const mapRef = useRef(null);
    const mapContainerRef = useRef(null);
    const [seleccionado, setSeleccionado] = useState(null);

    const lugares = [
        { nombre: "Antares", posicion: [-34.16420082320006, -58.95735100364333] },
        { nombre: "Costanera", posicion: [-34.155348585414366, -58.959584460010866] },
        { nombre: "McDonald´s", posicion: [-34.19110145685029, -58.944717188845026] },
        { nombre: "Plaza Eduardo Costa", posicion: [-34.1631994308152, -58.95927543065372] },
        { nombre: "Pecas", posicion: [-34.16417594832209, -58.958749717682636] },
        { nombre: "La Italiana", posicion: [-34.327030712707526, -58.76010746574385] },
        { nombre: "Anik", posicion: [-34.16413751537226, -58.95798891093694] },
        { nombre: "Cine Campana", posicion: [-34.16812503370686, -58.95987110419095] },
        
    ];

    const irAlLugar = (lugar, index) => {
        setSeleccionado(index);

        if (mapRef.current) {
            mapRef.current.flyTo(lugar.posicion, 18, { duration: 1.2 });
        }

        if (window.innerWidth <= 768) {
            mapContainerRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    };

    return (
        <div>
            <Header />
            <div className="mapa-container">
                <div className="mapa" ref={mapContainerRef}>
                    <MapContainer
                        center={lugares[0].posicion}
                        zoom={13}
                        style={{ height: "600px", width: "100%" }}
                    >
                        <MapController mapRef={mapRef} />
                        <TileLayer
                            attribution="&copy; OpenStreetMap"
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {lugares.map((lugar, index) => (
                            <Marker
                                key={index}
                                position={lugar.posicion}
                                icon={seleccionado === index ? iconoSeleccionado : iconoNormal}
                                eventHandlers={{
                                    click: () => setSeleccionado(index)
                                }}
                            >
                                <Popup>
                                    <strong>{lugar.nombre}</strong>
                                </Popup>
                            </Marker>
                        ))}
                    </MapContainer>
                </div>

                <div className="indice">
                    <h2><FaHeart className="titulo-icon" /> Algunos lugares</h2>
                    <ol className="lista-lugares">
                        {lugares.map((lugar, index) => (
                            <li
                                key={index}
                                onClick={() => irAlLugar(lugar, index)}
                                className={`lugar-item ${seleccionado === index ? "seleccionado" : ""}`}
                            >
                                <FaMapMarkerAlt className="pin-icon" />
                                <div>
                                    <strong>{lugar.nombre}</strong>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default MapsScreen