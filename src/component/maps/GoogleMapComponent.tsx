import { useEffect, useRef, useState } from "react";

interface Location {
   latitude: number;
   longitude: number;
   location: string;
   success_rate: string;
}

interface GoogleMapProps {
   locations?: Location[];
}

const staticLocations: Location[] = [
    { latitude: 40.7128, longitude: -74.0060, location: "New York, USA", success_rate: "50%" },
    { latitude: 48.8566, longitude: 2.3522, location: "Paris, France", success_rate: "45%" },
    { latitude: 35.6895, longitude: 139.6917, location: "Tokyo, Japan", success_rate: "60%" },
    { latitude: -33.8688, longitude: 151.2093, location: "Sydney, Australia", success_rate: "30%" },
];

const GoogleMapComponent = ({ locations = [] }: GoogleMapProps) => {
   const mapRef = useRef<HTMLDivElement>(null);
   const [map, setMap] = useState<google.maps.Map | null>(null);

   useEffect(() => {
      const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
      if (!apiKey) {
         console.error("❌ Google Maps API Key is missing!");
         return;
      }

      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=marker`;
      script.async = true;
      script.defer = true;
      script.onload = () => {
         if (mapRef.current) {
            const newMap = new window.google.maps.Map(mapRef.current, {
               center: { lat: 20.5937, lng: 78.9629 },
               zoom: 2,
            });
            setMap(newMap);
         }
      };
      document.head.appendChild(script);
   }, []);

   useEffect(() => {
      if (!map) return;

      const allLocations = [...staticLocations, ...locations];

      allLocations.forEach((loc) => {
         // ✅ Create a div element for marker content
         const markerContent = document.createElement("div");
         markerContent.innerHTML = `
            <div style="background: black; color: white; padding: 5px; border-radius: 5px;">
               ${loc.success_rate}
            </div>
         `;

         // ✅ Use AdvancedMarkerElement with correct content
         new window.google.maps.marker.AdvancedMarkerElement({
            position: { lat: loc.latitude, lng: loc.longitude },
            map: map,
            content: markerContent, // ✅ Fix: Use the created div element
         });
      });
   }, [map, locations]);

   return <div ref={mapRef} style={{ width: "100%", height: "400px" }} />;
};

export default GoogleMapComponent;
