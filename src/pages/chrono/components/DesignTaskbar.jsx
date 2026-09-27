import { useState } from "react";
import { motion } from "motion/react";
import "./DesignTaskbar.css";

export default function DesignTaskbar({ active, onChange, label = "DESIGN" }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`design-dock${collapsed ? " design-dock--collapsed" : ""}`}>
      <button
        type="button"
        className="design-dock-toggle"
        aria-label={collapsed ? "Show design taskbar" : "Hide design taskbar"}
        aria-expanded={!collapsed}
        aria-controls="design-taskbar"
        onClick={() => setCollapsed(value => !value)}
      >
        <span aria-hidden="true">{collapsed ? "▲" : "▼"}</span>
      </button>
      <nav id="design-taskbar" className="design-taskbar" aria-label="Choose design variant" hidden={collapsed}>
        <span className="design-taskbar-label">{label}</span>
        {[1, 2, 3, 4, 5].map(id => (
          <button
            type="button"
            key={id}
            className="design-taskbar-button"
            aria-pressed={active === id}
            onClick={() => onChange(id)}
          >
            {active === id && (
              <motion.span
                className="design-taskbar-active"
                layoutId="design-active"
                transition={{ type: "spring", stiffness: 450, damping: 35 }}
              />
            )}
            <span className="design-taskbar-text">Variant {id}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
