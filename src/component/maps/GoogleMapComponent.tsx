import { useEffect, useRef, useState } from "react";

interface Location {
   latitude: number;
   longitude: number;
   location: string;
   success_rate: string;
}

interface GoogleMapProps {
   locations: Location[];
}

const GoogleMapComponent = ({ locations }: GoogleMapProps) => {
   const mapRef = useRef<HTMLDivElement>(null);
   const [map, setMap] = useState<google.maps.Map | null>(null);
   const [loading, setLoading] = useState(true);

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
               mapId: "854e90ea66c9eef", 
            });
            setMap(newMap);
            setLoading(false);
         }
      };

      document.head.appendChild(script);
   }, []);

   useEffect(() => {
      if (!map || locations.length === 0) return;

      locations.forEach((loc) => {
         const rate = parseFloat(loc.success_rate.replace("%", ""));
         let bgColor = "red";
         if (rate >= 50) bgColor = "green";
         else if (rate >= 30) bgColor = "orange";

         const markerContent = document.createElement("div");
         markerContent.innerHTML = `
            <div style="display: flex; flex-direction: column; align-items: center; transform: translate(-50%, -100%);">
               <div style="background: ${bgColor}; color: white; padding: 5px 10px; border-radius: 8px; font-size: 12px; white-space: nowrap; font-weight: bold; margin-bottom: 4px;">
                  ${loc.success_rate}${loc.location ? " • " + loc.location : ""}
               </div>
               <div style="width: 0; height: 0; border-left: 5px solid transparent; border-right: 5px solid transparent; border-top: 10px solid ${bgColor};"></div>
               <div style="width: 12px; height: 12px; background: ${bgColor}; border-radius: 50%; border: 2px solid white; box-shadow: 0 0 3px rgba(0,0,0,0.6); margin-top: 2px;"></div>
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

   return (
      <div style={{ position: "relative", width: "100%", height: "400px" }}>
         {loading && (
            <div className="d-flex justify-content-center align-items-center bg-dark bg-opacity-75 text-white"
                 style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 10 }}>
               <div className="text-center">
                  <div className="spinner-border text-light mb-3" role="status">
                     <span className="visually-hidden">Loading...</span>
                  </div>
                  <div>🔍 Predicting location success...</div>
               </div>
            </div>
         )}
         <div ref={mapRef} style={{ width: "100%", height: "100%" }} />
      </div>
   );
};

export default GoogleMapComponent;
