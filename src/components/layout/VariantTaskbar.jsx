import { useState, useEffect } from "react";

const variants = [
  { id: "1", label: "Variant 1", short: "V1" },
  { id: "2", label: "Variant 2", short: "V2" },
  { id: "3", label: "Variant 3", short: "V3" },
  { id: "4", label: "Variant 4", short: "V4" },
  { id: "5", label: "Variant 5", short: "V5" },
];

export default function VariantTaskbar() {
  const params = new URLSearchParams(window.location.search);
  const current = params.get("variant") || "5";
  const [active, setActive] = useState(current);
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile, { passive: true });
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  function navigate(id) {
    setActive(id);
    const next = new URLSearchParams(window.location.search);
    next.set("variant", id);
    window.location.search = next.toString();
  }

  return (
    <div
      style={{
        position: "fixed",
        bottom: isMobile ? "14px" : "24px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "6px",
        pointerEvents: "none",
        maxWidth: "96vw",
      }}
    >
      {/* Collapse toggle */}
      <button
        onClick={() => setCollapsed((c) => !c)}
        title={collapsed ? "Show variant switcher" : "Hide variant switcher"}
        style={{
          pointerEvents: "auto",
          background: "rgba(15,15,15,0.88)",
          border: "1px solid rgba(255,255,255,0.18)",
          color: "#fff",
          borderRadius: "999px",
          width: "28px",
          height: "28px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          fontSize: "12px",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          boxShadow: "0 2px 12px rgba(0,0,0,0.4)",
          lineHeight: 1,
        }}
      >
        {collapsed ? "▲" : "▼"}
      </button>

      {/* Pill taskbar */}
      {!collapsed && (
        <div
          style={{
            pointerEvents: "auto",
            display: "flex",
            alignItems: "center",
            gap: isMobile ? "3px" : "6px",
            background: "rgba(15,15,15,0.88)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            borderRadius: "999px",
            padding: isMobile ? "4px 6px" : "6px 10px",
            boxShadow: "0 6px 28px rgba(0,0,0,0.55)",
            border: "1px solid rgba(255,255,255,0.14)",
            maxWidth: "94vw",
            overflowX: "auto",
          }}
        >
          {/* Label */}
          {!isMobile && (
            <span
              style={{
                color: "rgba(255,255,255,0.45)",
                fontSize: "11px",
                fontFamily: "sans-serif",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                alignSelf: "center",
                paddingRight: "4px",
                paddingLeft: "4px",
                userSelect: "none",
              }}
            >
              Design
            </span>
          )}

          {variants.map((v) => {
            const isActive = active === v.id;
            return (
              <button
                key={v.id}
                onClick={() => navigate(v.id)}
                title={v.label}
                style={{
                  cursor: "pointer",
                  border: "none",
                  borderRadius: "999px",
                  padding: isMobile ? "5px 10px" : "6px 16px",
                  fontSize: isMobile ? "12px" : "13px",
                  fontFamily: "sans-serif",
                  fontWeight: isActive ? "700" : "500",
                  letterSpacing: "0.02em",
                  transition: "all 0.2s ease",
                  background: isActive
                    ? "rgba(255,255,255,0.95)"
                    : "transparent",
                  color: isActive ? "#0f0f0f" : "rgba(255,255,255,0.75)",
                  boxShadow: isActive
                    ? "0 1px 4px rgba(0,0,0,0.3)"
                    : "none",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}
              >
                {isMobile ? v.short : v.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
