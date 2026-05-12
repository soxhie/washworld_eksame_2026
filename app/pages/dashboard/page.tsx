"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useMemo, useState, useEffect } from "react";
import { LuClock3, LuLocateFixed, LuSearch, LuSlidersHorizontal } from "react-icons/lu";
import "./dashboard.css";
import AppHeader from "../../components/layout/AppHeader";
import BottomNav from "../../components/layout/BottomNav";

const LiveWashMap = dynamic(() => import("./components/LiveWashMap"), {
  ssr: false,
  loading: () => <div className="mapLoading">Indlaeser kort...</div>,
});


type WashLocation = {
  id: string;
  name: string;
  address: string;
  position: [number, number];
  openHours?: string;
  message?: string;
  regionName?: string;
  hallsCount?: number;
  selfWashCount?: number;
  vacuumCount?: number;
  preWashCount?: number;
  maxHeight?: string;
  imageUrl?: string;
};


export default function DashboardPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [locations, setLocations] = useState<WashLocation[]>([]);
  const [selectedLocationId, setSelectedLocationId] = useState<string | null>(null);
  const [locateRequestCount, setLocateRequestCount] = useState(0);
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/washworld-locations")
      .then(async (res) => {
        if (!res.ok) {
          throw new Error("Kunne ikke hente Wash World lokationer.");
        }

        return res.json();
      })
      .then((data) => {
        if (!Array.isArray(data)) return;

        const parsed: WashLocation[] = data;
        setLocations(parsed);
        setSelectedLocationId(null);
        setLoadError(parsed.length === 0 ? "Ingen Wash World lokationer fundet." : null);
      })
      .catch((error: unknown) => {
        setLoadError(error instanceof Error ? error.message : "Kunne ikke hente Wash World lokationer.");
      });
  }, []);

  const filteredLocations = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();
    if (!normalizedQuery) return locations;
    return locations.filter((location) => {
      const haystack = `${location.name} ${location.address}`.toLowerCase();
      return haystack.includes(normalizedQuery);
    });
  }, [searchQuery, locations]);

  const selectedLocation = filteredLocations.find((location) => location.id === selectedLocationId);

  return (
    <main className="DashboardPage">
      <AppHeader variant="brand" />

      <section className={selectedLocation ? "mapSection" : "mapSection mapSectionFullscreen"} aria-label="Wash World kort">
        <div className="mapSearchBar">
          <LuSearch aria-hidden="true" className="mapSearchIcon" />
          <input
            type="search"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Search locations"
            className="mapSearchInput"
            aria-label="Soeg efter vaskehal"
          />
          <button type="button" className="mapSearchButton" aria-label="Filtrer kort">
            <LuSlidersHorizontal aria-hidden="true" />
          </button>
        </div>

        <div className={selectedLocation ? "mapCanvasWrap" : "mapCanvasWrap mapCanvasWrapFullscreen"}>
          <LiveWashMap
            locations={filteredLocations}
            selectedLocationId={selectedLocation?.id}
            onSelectLocation={setSelectedLocationId}
            locateRequestCount={locateRequestCount}
          />

          {loadError ? <p className="mapErrorBanner">{loadError}</p> : null}

          <button
            type="button"
            className="locateButton"
            aria-label="Find min position"
            onClick={() => setLocateRequestCount((count) => count + 1)}
          >
            <LuLocateFixed aria-hidden="true" />
          </button>
        </div>

        {selectedLocation ? (
          <section className="locationSheet" aria-label="Valgt vaskehal">
            <div className="locationSheetTop">
              <div>
                <p className="locationSheetEyebrow">Valgt vaskehal</p>
                <h1>{selectedLocation.name}</h1>
                <p className="locationSheetAddress">{selectedLocation.address}</p>
              </div>

              {selectedLocation.imageUrl ? (
                <Image
                  src={selectedLocation.imageUrl}
                  alt={selectedLocation.name}
                  className="locationThumb"
                  width={84}
                  height={84}
                  sizes="84px"
                />
              ) : null}
            </div>

            <div className="locationMetaRow locationMetaRowDense">
              {selectedLocation.openHours ? (
                <span className="metaChip">
                  <LuClock3 aria-hidden="true" /> Aabent {selectedLocation.openHours}
                </span>
              ) : null}
              {selectedLocation.regionName ? <span className="metaChip">Region: {selectedLocation.regionName}</span> : null}
            </div>

            <div className="locationFacts" aria-label="Detaljer for valgt vaskehal">
              <p className="factItem">Vaskehaller: {selectedLocation.hallsCount ?? 0}</p>
              <p className="factItem">Vask selv baase: {selectedLocation.selfWashCount ?? 0}</p>
              <p className="factItem">Stoevsugere: {selectedLocation.vacuumCount ?? 0}</p>
              <p className="factItem">Forvask: {selectedLocation.preWashCount ?? 0}</p>
              {selectedLocation.maxHeight ? <p className="factItem">Maks. hoejde: {selectedLocation.maxHeight} m</p> : null}
            </div>

            {selectedLocation.message ? (
              <p className="locationAlert" role="status">
                {selectedLocation.message}
              </p>
            ) : null}

            <div className="sheetActions">
              <button type="button" className="sheetSecondaryButton" onClick={() => setSelectedLocationId(null)}>
                Luk detaljer
              </button>
            </div>
          </section>
        ) : null}
      </section>

      <BottomNav activeTab="dashboard" variant="angled" />
    </main>
  );
}
