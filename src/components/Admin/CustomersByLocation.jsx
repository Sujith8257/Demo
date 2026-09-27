import React, { useState, useRef } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const countryMetrics = {
  "India": { count: "7,842", percentage: "61%", color: "#2563eb" },
  "United States": { count: "1,842", percentage: "14%", color: "#60a5fa" },
  "United States of America": { count: "1,842", percentage: "14%", color: "#60a5fa" },
  "United Arab Emirates": { count: "842", percentage: "6%", color: "#3b82f6" },
  "United Kingdom": { count: "642", percentage: "5%", color: "#60a5fa" },
  "China": { count: "1,120", percentage: "8%", color: "#81aeff" },
};

export default function CustomersByLocation({ hideTitle = false }) {
  const [hoveredGeo, setHoveredGeo] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const getCountryStyle = (geoName) => {
    if (geoName === "India") return "#2563eb";
    if (geoName === "China") return "#81aeff";
    if (geoName === "United States of America" || geoName === "United States") return "#60a5fa";
    if (geoName === "United Arab Emirates") return "#3b82f6";
    if (geoName === "United Kingdom") return "#60a5fa";
    return "#e4ecfb";
  };

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const activeCountry = hoveredGeo
    ? (hoveredGeo === "United States of America" ? "United States" : hoveredGeo)
    : null;
  const metrics = activeCountry ? countryMetrics[activeCountry] : null;

  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between" }}>
      {!hideTitle && (
        <div style={{ marginBottom: "8px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <h3 style={{ margin: 0, color: "#10172f", fontSize: "14.5px", fontWeight: "800", letterSpacing: "-0.01em" }}>
            Customers by Location
          </h3>
        </div>
      )}

      {/* Expanded World Map Container */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        style={{
          position: "relative",
          width: "calc(100% + 16px)",
          margin: "0 -8px",
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "visible",
        }}
      >
        <ComposableMap
          width={800}
          height={450}
          projectionConfig={{ scale: 155, center: [10, -5] }}
          style={{ width: "100%", height: "auto" }}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies && geographies.length > 0 ? (
                geographies.map((geo) => {
                  const geoName = geo.properties.name;
                  const countryFill = getCountryStyle(geoName);

                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onMouseEnter={() => setHoveredGeo(geoName)}
                      onMouseLeave={() => setHoveredGeo(null)}
                      style={{
                        default: { fill: countryFill, stroke: "#ffffff", strokeWidth: 0.5, outline: "none", transition: "all 0.18s ease" },
                        hover: { fill: "#1d4ed8", stroke: "#ffffff", strokeWidth: 0.7, outline: "none", cursor: "pointer" },
                        pressed: { fill: "#1e40af", stroke: "#ffffff", strokeWidth: 0.5, outline: "none" },
                      }}
                    />
                  );
                })
              ) : (
                <text x="400" y="190" textAnchor="middle" fill="#94a3b8" fontSize="14" fontWeight="600">
                  Loading world map...
                </text>
              )
            }
          </Geographies>
        </ComposableMap>

        {/* Dynamic Tooltip on Hover */}
        {hoveredGeo && (
          <div
            style={{
              position: "absolute",
              left: `${Math.max(65, Math.min((containerRef.current?.clientWidth || 300) - 65, mousePos.x))}px`,
              top: mousePos.y < 45 ? `${mousePos.y + 16}px` : `${mousePos.y - 12}px`,
              transform: mousePos.y < 45 ? "translate(-50%, 0)" : "translate(-50%, -100%)",
              background: "rgba(16, 23, 47, 0.94)",
              backdropFilter: "blur(6px)",
              color: "#ffffff",
              padding: "6px 12px",
              borderRadius: "8px",
              fontSize: "11px",
              boxShadow: "0 8px 24px rgba(16, 24, 40, 0.28)",
              pointerEvents: "none",
              zIndex: 100,
              whiteSpace: "nowrap",
              border: "1px solid rgba(255, 255, 255, 0.14)",
            }}
          >
            <div style={{ fontWeight: "800", fontSize: "12px", color: "#ffffff", marginBottom: "2px" }}>
              {activeCountry}
            </div>
            <div style={{ color: "#93c5fd", fontWeight: "600", fontSize: "11px" }}>
              {metrics ? (
                <>
                  <strong style={{ color: "#ffffff", fontWeight: "800" }}>{metrics.count}</strong> users{" "}
                  <span style={{ color: "#60a5fa", fontWeight: "800", marginLeft: "2px" }}>({metrics.percentage})</span>
                </>
              ) : (
                <>
                  Part of Others · <strong style={{ color: "#ffffff", fontWeight: "800" }}>1,674</strong> (13%)
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
