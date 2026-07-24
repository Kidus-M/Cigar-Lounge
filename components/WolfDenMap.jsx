import { useEffect, useRef } from "react";

const WOLF_DEN_LOCATION = [8.997187, 38.769612];

export default function WolfDenMap() {
  const mapElement = useRef(null);

  useEffect(() => {
    let map;
    let cancelled = false;

    const createMap = async () => {
      const L = await import("leaflet");

      if (cancelled || !mapElement.current) {
        return;
      }

      map = L.map(mapElement.current, {
        scrollWheelZoom: false,
        zoomControl: true,
      }).setView(WOLF_DEN_LOCATION, 17);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(map);

      const wolfDenIcon = L.divIcon({
        className: "wolf-den-map-marker",
        html: '<span aria-hidden="true">&#9733;</span>',
        iconSize: [52, 52],
        iconAnchor: [26, 52],
        popupAnchor: [0, -48],
      });

      L.marker(WOLF_DEN_LOCATION, {
        icon: wolfDenIcon,
        title: "Wolf Den Lounge",
        alt: "Wolf Den Lounge location",
      })
        .addTo(map)
        .bindPopup(
          '<div class="wolf-den-map-popup"><strong>Wolf Den Lounge</strong><span>S&amp;F Building, in front of Andinet Butchery</span></div>',
        )
        .openPopup();
    };

    createMap();

    return () => {
      cancelled = true;
      if (map) {
        map.remove();
      }
    };
  }, []);

  return (
    <div
      ref={mapElement}
      className="h-[420px] w-full bg-zinc-900 md:h-[520px]"
      role="region"
      aria-label="Interactive map showing the Wolf Den Lounge location"
    />
  );
}
