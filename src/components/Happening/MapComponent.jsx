import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";

// create custom icon
const customIcon = new Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
  //   iconUrl: require("./icons/placeholder.png"),
  iconSize: [38, 38], // size of the icon
});

// markers
const markers = [
  {
    geocode: [48.86, 2.3522],
    popUp: "Hello, I am pop up 1",
  },
  {
    geocode: [48.85, 2.3522],
    popUp: "Hello, I am pop up 2",
  },
  {
    geocode: [48.855, 2.34],
    popUp: "Hello, I am pop up 3",
  },
];

export default function MapComponent() {
  return (
    <MapContainer center={[48.8566, 2.3522]} zoom={13}>
      <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png" />

      {/* Mapping through the markers */}
      {markers.map((marker, index) => (
        <Marker key={index} position={marker.geocode} icon={customIcon}>
          <Popup>{marker.popUp}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
