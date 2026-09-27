import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiBarChart2, FiBox, FiCreditCard, FiExternalLink, FiHeadphones, FiHome,
  FiImage, FiPackage, FiRotateCcw, FiSettings, FiShield, FiShoppingBag, FiStar, FiTag,
  FiUser, FiUsers, FiX
} from "react-icons/fi";

export const adminSidebarCss = `
/* Desktop Sidebar (Master Standardized Styles) */
.desktop-sidebar-wrapper {
  width: 256px !important;
  min-width: 256px !important;
  max-width: 256px !important;
  flex-shrink: 0 !important;
  transition: all .25s ease !important;
}
.desktop-sidebar-wrapper.is-closed {
  display: none !important;
}

.sidebar {
  width: 256px !important;
  min-width: 256px !important;
  max-width: 256px !important;
  height: 100vh !important;
  position: fixed !important;
  left: 0 !important;
  top: 0 !important;
  bottom: 0 !important;
  z-index: 70 !important;
  padding: 16px 12px !important;
  display: flex !important;
  flex-direction: column !important;
  overflow-y: auto !important;
  scrollbar-width: none !important;
  -ms-overflow-style: none !important;
  color: #ffffff !important;
  background: linear-gradient(180deg,#063a87,#004094 55%,#052c66) !important;
  box-shadow: 4px 0 20px rgba(0,0,0,.08) !important;
  box-sizing: border-box !important;
  font-family: 'Manrope', system-ui, -apple-system, sans-serif !important;
  font-size: 13px !important;
  line-height: 1.4 !important;
}
.sidebar::-webkit-scrollbar {
  display: none !important;
}
.sidebar.is-mobile {
  position: fixed !important;
  inset: 0 auto 0 0 !important;
  width: 280px !important;
  z-index: 100 !important;
}

.sidebar-brand {
  display: flex !important;
  align-items: center !important;
  gap: 12px !important;
  padding: 0 4px 18px !important;
  border-bottom: 1px solid rgba(255,255,255,.12) !important;
  margin-bottom: 12px !important;
}
.brand-mark {
  width: 42px !important;
  height: 42px !important;
  border: 1px solid rgba(255,255,255,.65) !important;
  border-radius: 11px !important;
  display: grid !important;
  place-items: center !important;
  font-weight: 800 !important;
  font-size: 18px !important;
  flex-shrink: 0 !important;
  background: rgba(255,255,255,.1) !important;
  color: #ffffff !important;
}
.sidebar-brand strong {
  display: block !important;
  font-size: 16px !important;
  letter-spacing: .12em !important;
  font-weight: 800 !important;
  color: #ffffff !important;
  line-height: 1.2 !important;
}
.sidebar-brand span {
  display: block !important;
  font-size: 9px !important;
  letter-spacing: .2em !important;
  opacity: .75 !important;
  margin-top: 2px !important;
  font-weight: 700 !important;
  color: #ffffff !important;
}
.sidebar-close {
  margin-left: auto !important;
  color: #ffffff !important;
  width: 34px !important;
  height: 34px !important;
  border-radius: 8px !important;
  display: grid !important;
  place-items: center !important;
  background: rgba(255,255,255,.1) !important;
  border: 0 !important;
  cursor: pointer !important;
  transition: background .2s !important;
  font-size: 18px !important;
}
.sidebar-close:hover {
  background: rgba(255,255,255,.25) !important;
}

.sidebar .nav-group {
  margin: 8px 0 !important;
}
.sidebar .nav-label {
  padding: 0 10px 4px !important;
  font-size: 10.5px !important;
  font-weight: 800 !important;
  text-transform: uppercase !important;
  letter-spacing: .08em !important;
  opacity: .65 !important;
  color: #ffffff !important;
  display: block !important;
}
.sidebar .nav-item {
  width: 100% !important;
  height: 38px !important;
  border: 0 !important;
  border-radius: 8px !important;
  background: transparent !important;
  color: rgba(255,255,255,.9) !important;
  display: flex !important;
  align-items: center !important;
  gap: 10px !important;
  padding: 0 10px !important;
  font-size: 13px !important;
  font-weight: 600 !important;
  text-align: left !important;
  cursor: pointer !important;
  transition: all .18s !important;
  font-family: inherit !important;
}
.sidebar .nav-item:hover {
  background: rgba(255,255,255,.12) !important;
  color: #ffffff !important;
}
.sidebar .nav-item.active {
  background: #0b62d6 !important;
  color: #ffffff !important;
  box-shadow: 0 4px 10px rgba(11,98,214,.35) !important;
  font-weight: 700 !important;
}
.sidebar .nav-item span {
  font-size: 13px !important;
  font-weight: 600 !important;
  color: inherit !important;
}
.sidebar .nav-item svg {
  font-size: 18px !important;
  flex-shrink: 0 !important;
}
.sidebar .nav-item b {
  margin-left: auto !important;
  background: rgba(255,255,255,.2) !important;
  border-radius: 999px !important;
  padding: 3px 8px !important;
  font-size: 10px !important;
  font-weight: 700 !important;
  color: #ffffff !important;
}

.sidebar-footer {
  margin-top: auto !important;
  padding-top: 16px !important;
  display: grid !important;
  gap: 12px !important;
}
.store-health, .support-card {
  border: 1px solid rgba(255,255,255,.16) !important;
  background: rgba(255,255,255,.08) !important;
  border-radius: 12px !important;
  padding: 14px !important;
  font-size: 12px !important;
}
.store-health > div:first-child {
  display: flex !important;
  justify-content: space-between !important;
  gap: 8px !important;
}
.store-health strong, .support-card strong {
  font-size: 12px !important;
  font-weight: 700 !important;
  color: #ffffff !important;
  display: block !important;
}
.store-health span {
  font-size: 10px !important;
  color: #b7efc2 !important;
  font-weight: 700 !important;
}
.store-health p, .support-card span {
  font-size: 10px !important;
  opacity: .8 !important;
  color: #ffffff !important;
  margin: 4px 0 0 0 !important;
}
.health-track {
  height: 5px !important;
  background: rgba(255,255,255,.16) !important;
  border-radius: 999px !important;
  overflow: hidden !important;
  margin-top: 8px !important;
}
.health-track span {
  display: block !important;
  width: 100% !important;
  height: 100% !important;
  background: #2fd56b !important;
}
.store-health button {
  width: 100% !important;
  margin-top: 12px !important;
  height: 36px !important;
  border: 1px solid rgba(255,255,255,.25) !important;
  border-radius: 8px !important;
  background: transparent !important;
  color: #ffffff !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  gap: 7px !important;
  font-size: 11px !important;
  font-weight: 700 !important;
  cursor: pointer !important;
  font-family: inherit !important;
}
.support-card {
  display: grid !important;
  grid-template-columns: auto 1fr !important;
  gap: 12px !important;
  align-items: center !important;
}
`;

const navGroups = [
  ["Overview", [["Dashboard", FiHome, ""]]],
  ["Orders", [["Orders", FiShoppingBag, ""], ["Returns", FiRotateCcw, ""]]],
  ["Products", [["Products", FiPackage, ""], ["Inventory", FiBox, ""]]],
  ["Customers", [["Customers", FiUsers, ""], ["Segments", FiUser, ""]]],
  ["Marketing", [["Banners", FiImage, ""], ["Coupons", FiTag, ""], ["Reviews", FiStar, ""]]],
  ["Finance", [["Payments", FiCreditCard, ""], ["Analytics", FiBarChart2, ""]]],
  ["User Management", [["Admin Users", FiUsers, ""], ["Roles & Permissions", FiShield, ""]]],
  ["Store Settings", [["Settings", FiSettings, ""], ["Integrations", FiPackage, ""]]],
];

export default function AdminSidebar({ activePage, mobile = false, onClose, onNavigate }) {
  const navigate = useNavigate();

  const handleNav = (name) => {
    const routeMap = {
      Dashboard: "/dashboard",
      Orders: "/orders",
      Returns: "/returns",
      Inventory: "/inventory",
      Products: "/products",
      Customers: "/customers",
      Segments: "/segments",
      Banners: "/banners",
      Coupons: "/coupons",
      Reviews: "/reviews",
      Payments: "/payments",
      Analytics: "/analytics",
      "Admin Users": "/admin-users",
      "Roles & Permissions": "/roles-permissions",
      Settings: "/settings",
      Integrations: "/integrations",
    };
    const targetPath = routeMap[name];
    if (targetPath) {
      if (onNavigate) {
        onNavigate(targetPath);
      } else {
        navigate(targetPath);
      }
    }
    if (mobile && onClose) onClose();
  };

  return (
    <motion.aside
      className={`sidebar ${mobile ? "is-mobile" : ""}`}
      initial={mobile ? { x: -280 } : false}
      animate={{ x: 0 }}
      exit={mobile ? { x: -280 } : undefined}
      transition={{ duration: .24, ease: [.23, 1, .32, 1] }}
    >
      <style>{adminSidebarCss}</style>
      <div className="sidebar-brand">
        <div className="brand-mark">A</div>
        <div><strong>AMIHIVE</strong><span>ADMIN CONSOLE</span></div>
        <button className="sidebar-close" onClick={onClose} title="Close Sidebar">
          <FiX />
        </button>
      </div>

      <nav>
        {navGroups.map(([label, items]) => (
          <div className="nav-group" key={label}>
            <div className="nav-label">{label}</div>
            {items.map(([name, Icon, badge]) => (
              <button
                className={`nav-item ${name === activePage ? "active" : ""}`}
                key={name}
                onClick={() => handleNav(name)}
              >
                <Icon /><span>{name}</span>{badge && <b>{badge}</b>}
              </button>
            ))}
          </div>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="store-health">
          <div><strong>Store Health</strong><span>● Excellent</span></div>
          <p>All systems operational</p>
          <div className="health-track"><span /></div>
          <button>View Store <FiExternalLink /></button>
        </div>
        <div className="support-card">
          <FiHeadphones />
          <div><strong>Need help?</strong><span>Contact our support team</span></div>
        </div>
      </div>
    </motion.aside>
  );
}
