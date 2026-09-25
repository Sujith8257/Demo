import { useState } from "react";
import { motion } from "motion/react";
import "../../chrono/components/DesignTaskbar.css";

export default function DesignTaskbar({ active, onChange, onNavigateHome, onNavigateToCart }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`design-dock${collapsed ? " design-dock--collapsed" : ""}`}>
      <button
        type="button"
        className="design-dock-toggle"
        aria-label={collapsed ? "Show design taskbar" : "Hide design taskbar"}
        aria-expanded={!collapsed}
        aria-controls="checkout-design-taskbar"
        onClick={() => setCollapsed(v => !v)}
      >
        <span aria-hidden="true">{collapsed ? "▲" : "▼"}</span>
      </button>
      <nav id="checkout-design-taskbar" className="design-taskbar" aria-label="Choose checkout design" hidden={collapsed}>
        {onNavigateHome && (
          <button
            type="button"
            className="design-taskbar-button"
            onClick={onNavigateHome}
            title="Back to Home"
          >
            <span className="design-taskbar-text">← Home</span>
          </button>
        )}
        {onNavigateToCart && (
          <button
            type="button"
            className="design-taskbar-button"
            onClick={onNavigateToCart}
            title="Back to Cart"
          >
            <span className="design-taskbar-text">← Cart</span>
          </button>
        )}
        <span className="design-taskbar-label">CHECKOUT</span>
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
                layoutId="checkout-design-active"
                transition={{ type: "spring", stiffness: 420, damping: 38 }}
              />
            )}
            <span className="design-taskbar-text">Checkout {id}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
