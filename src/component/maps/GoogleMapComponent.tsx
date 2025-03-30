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
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=maps,marker&v=beta`;
      script.async = true;
      script.defer = true;
      script.onload = () => {
         if (mapRef.current) {
            const newMap = new window.google.maps.Map(mapRef.current, {
               center: { lat: 20.5937, lng: 78.9629 },
               zoom: 2,
               mapId: "854e90ea66c9eef", // Replace this with your actual Map ID
            });
            
            setMap(newMap);
         }
      };

      document.head.appendChild(script);
   }, []);

   useEffect(() => {
      if (!map) return;

      const allLocations = [...staticLocations, ...locations];
      console.log(allLocations, "allLocations");

      allLocations.forEach((loc) => {
         const rate = parseFloat(loc.success_rate.replace("%", ""));
         let bgColor = "red";
      
         if (rate >= 50) bgColor = "green";
         else if (rate >= 30) bgColor = "orange";
      
         const markerContent = document.createElement("div");
         markerContent.innerHTML = `
            <div style="
               display: flex;
               flex-direction: column;
               align-items: center;
               transform: translate(-50%, -100%);
            ">
               <div style="
                  background: ${bgColor};
                  color: white;
                  padding: 5px 10px;
                  border-radius: 8px;
                  font-size: 12px;
                  white-space: nowrap;
                  font-weight: bold;
                  margin-bottom: 4px;
               ">
                  ${loc.success_rate}${loc.location ? " • " + loc.location : ""}
               </div>
               <div style="
                  width: 0;
                  height: 0;
                  border-left: 5px solid transparent;
                  border-right: 5px solid transparent;
                  border-top: 10px solid ${bgColor};
               "></div>
               <div style="
                  width: 12px;
                  height: 12px;
                  background: ${bgColor};
                  border-radius: 50%;
                  border: 2px solid white;
                  box-shadow: 0 0 3px rgba(0,0,0,0.6);
                  margin-top: 2px;
               "></div>
            </div>
         `;
      
         if (window.google.maps.marker?.AdvancedMarkerElement) {
            new window.google.maps.marker.AdvancedMarkerElement({
               position: { lat: loc.latitude, lng: loc.longitude },
               map: map,
               content: markerContent,
            });
         } else {
            new window.google.maps.Marker({
               position: { lat: loc.latitude, lng: loc.longitude },
               map,
               title: loc.location,
            });
         }
      });
      
   }, [map, locations]);

   return <div ref={mapRef} style={{ width: "100%", height: "400px" }} />;
};

export default GoogleMapComponent;
