import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiBell, FiChevronDown, FiLogOut, FiMenu, FiPlus,
  FiSearch, FiSettings, FiUser
} from "react-icons/fi";

export const adminTopbarCss = `
/* Master Admin Topbar Styles */
.topbar {
  height: 68px;
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(255, 255, 255, .95);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(194, 198, 213, .55);
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 0 24px;
  font-family: 'Manrope', system-ui, sans-serif;
}

.topbar .menu-toggle-btn {
  width: 42px;
  height: 42px;
  border: 1px solid #c2c6d5;
  border-radius: 10px;
  background: #ffffff;
  display: grid;
  place-items: center;
  font-size: 20px;
  color: #191b23;
  cursor: pointer;
  flex-shrink: 0;
  transition: background .18s;
}
.topbar .menu-toggle-btn:hover {
  background: #f3f3fe;
}
.topbar .menu-toggle-btn.desktop-hidden {
  display: none;
}

.topbar .global-search {
  width: min(520px, 42vw);
  height: 42px;
  border: 1px solid #c2c6d5;
  border-radius: 10px;
  background: #ffffff;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 14px;
}
.topbar .global-search svg {
  color: #424753;
  font-size: 17px;
  flex-shrink: 0;
}
.topbar .global-search input {
  border: 0;
  outline: 0;
  flex: 1;
  min-width: 0;
  background: transparent;
  font-size: 13px;
  font-weight: 600;
  color: #191b23;
}
.topbar .global-search kbd {
  font-size: 10px;
  color: #737785;
  background: #ededf8;
  border-radius: 5px;
  padding: 3px 6px;
  font-weight: 700;
  font-family: inherit;
}

.topbar .topbar-actions {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 10px;
}

.topbar .relative {
  position: relative;
}

.topbar .new-button {
  height: 42px;
  border: 0;
  border-radius: 10px;
  background: #FD661D;
  color: #ffffff;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 800;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(253, 102, 29, .25);
  transition: background .18s;
}
.topbar .new-button:hover {
  background: #e05510;
}
.topbar .new-button svg {
  font-size: 17px;
  flex-shrink: 0;
}

.topbar .notification-button {
  width: 42px;
  height: 42px;
  border: 1px solid #c2c6d5;
  border-radius: 10px;
  background: #ffffff;
  display: grid;
  place-items: center;
  font-size: 18px;
  color: #191b23;
  cursor: pointer;
  position: relative;
  transition: background .18s;
}
.topbar .notification-button:hover {
  background: #f3f3fe;
}
.topbar .notification-button span {
  position: absolute;
  right: -2px;
  top: -2px;
  min-width: 18px;
  height: 18px;
  border-radius: 999px;
  background: #D32F2F;
  color: #ffffff;
  border: 2px solid #ffffff;
  font-size: 9px;
  font-weight: 800;
  display: grid;
  place-items: center;
  padding: 0 4px;
}

/* Profile Button */
.topbar .profile-button {
  border: 0;
  background: transparent;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  padding: 4px 6px;
  border-radius: 10px;
  transition: background .18s;
}
.topbar .profile-button:hover {
  background: #f3f3fe;
}
.topbar .profile-button .avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #004094;
  color: #ffffff;
  display: grid;
  place-items: center;
  font-size: 12px;
  font-weight: 800;
  flex-shrink: 0;
}
.topbar .profile-button .profile-info {
  text-align: left;
  display: flex;
  flex-direction: column;
}
.topbar .profile-button .profile-info strong {
  display: block;
  font-size: 13px;
  font-weight: 800;
  color: #191b23;
  line-height: 1.2;
}
.topbar .profile-button .profile-info small {
  display: block;
  font-size: 10.5px;
  color: #424753;
  font-weight: 600;
  margin-top: 1px;
}
.topbar .profile-button .chevron {
  font-size: 14px;
  color: #424753;
}

/* Dropdowns */
.topbar .dropdown {
  position: absolute;
  right: 0;
  top: calc(100% + 8px);
  width: 280px;
  background: #ffffff;
  border: 1px solid #c2c6d5;
  border-radius: 12px;
  padding: 8px;
  box-shadow: 0 18px 50px rgba(25, 27, 35, .15);
  z-index: 100;
}
.topbar .dropdown.profile-menu {
  width: 200px;
}
.topbar .dropdown button {
  width: 100%;
  height: 40px;
  border: 0;
  background: transparent;
  border-radius: 8px;
  text-align: left;
  padding: 0 12px;
  font-size: 13px;
  font-weight: 700;
  color: #191b23;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: background .15s;
}
.topbar .dropdown button:hover {
  background: #f3f3fe;
}
.topbar .dropdown button.logout-btn {
  color: #D32F2F;
}
.topbar .dropdown button.logout-btn:hover {
  background: #ffe2df;
}
.topbar .dropdown-divider {
  height: 1px;
  background: #ededf8;
  margin: 6px 0;
}

.topbar .dropdown-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px;
  border-bottom: 1px solid #ededf8;
  margin-bottom: 6px;
}
.topbar .dropdown-heading strong {
  font-size: 13px;
  font-weight: 800;
  color: #191b23;
}
.topbar .dropdown-heading .mark-read-btn,
.topbar .dropdown-heading button {
  width: auto;
  height: auto;
  padding: 0;
  margin-left: auto;
  font-size: 11.5px;
  color: #0056c3;
  font-weight: 800;
  cursor: pointer;
  background: transparent;
  border: 0;
  display: inline-block;
  transition: color .15s;
}
.topbar .dropdown-heading .mark-read-btn:hover,
.topbar .dropdown-heading button:hover {
  color: #004094;
  background: transparent;
  text-decoration: underline;
}

.topbar .notification-row {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 10px;
  border-radius: 8px;
}
.topbar .notification-row i {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #FD661D;
  margin-top: 5px;
  flex-shrink: 0;
}
.topbar .notification-row strong {
  display: block;
  font-size: 12px;
  font-weight: 800;
  color: #191b23;
}
.topbar .notification-row small {
  display: block;
  font-size: 11px;
  color: #424753;
  font-weight: 500;
  margin-top: 2px;
}

/* Mobile Responsiveness: Keep 3 lines menu visible, fit search bar + icons */
@media (max-width: 1049px) {
  .topbar .menu-toggle-btn.desktop-hidden {
    display: grid !important;
  }
}

@media (max-width: 640px) {
  .topbar {
    padding: 0 10px !important;
    gap: 6px !important;
    height: 60px !important;
  }

  .topbar .menu-toggle-btn {
    width: 36px !important;
    height: 36px !important;
    font-size: 18px !important;
    border-radius: 8px !important;
    flex-shrink: 0 !important;
    display: grid !important;
  }

  /* Compact Global Search to perfectly fit 3-lines menu + icons */
  .topbar .global-search {
    flex: 1 1 auto !important;
    min-width: 0 !important;
    width: auto !important;
    height: 36px !important;
    padding: 0 8px !important;
    gap: 6px !important;
    border-radius: 8px !important;
  }
  .topbar .global-search svg {
    font-size: 15px !important;
  }
  .topbar .global-search input {
    font-size: 12px !important;
  }
  .topbar .global-search kbd {
    display: none !important;
  }

  .topbar .topbar-actions {
    gap: 5px !important;
    flex-shrink: 0 !important;
  }

  /* Show ONLY + symbol for the New Button on mobile */
  .topbar .new-button {
    width: 36px !important;
    height: 36px !important;
    padding: 0 !important;
    justify-content: center !important;
    border-radius: 8px !important;
  }
  .topbar .new-button span,
  .topbar .new-button .new-chevron {
    display: none !important;
  }

  /* Notification Button on mobile */
  .topbar .notification-button {
    width: 36px !important;
    height: 36px !important;
    border-radius: 8px !important;
    font-size: 16px !important;
  }

  /* Show ONLY user avatar icon on mobile */
  .topbar .profile-button {
    padding: 0 !important;
  }
  .topbar .profile-button .avatar {
    width: 34px !important;
    height: 34px !important;
    font-size: 11px !important;
  }
  .topbar .profile-button .profile-info,
  .topbar .profile-button .chevron {
    display: none !important;
  }
}
`;

export default function AdminTopbar({ onToggleSidebar, onToggleMenu, desktopSidebarOpen = true }) {
  const toggleHandler = onToggleSidebar || onToggleMenu;
  const navigate = useNavigate();
  const [quick, setQuick] = useState(false);
  const [notes, setNotes] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const handleLogout = () => {
    setProfileOpen(false);
    navigate("/login");
  };

  return (
    <header className="topbar">
      <style>{adminTopbarCss}</style>

      {/* 3-Lines Menu Button (Shown ONLY when desktop sidebar is collapsed or on mobile!) */}
      <button
        className={`menu-toggle-btn ${desktopSidebarOpen ? "desktop-hidden" : ""}`}
        onClick={toggleHandler}
        title="Toggle Navigation Menu"
      >
        <FiMenu />
      </button>

      {/* Global Search (Compact on mobile to fit 3-lines menu + action icons) */}
      <label className="global-search">
        <FiSearch />
        <input placeholder="Search..." />
      </label>

      {/* Actions */}
      <div className="topbar-actions">
        {/* Quick Add (Shows only + icon on mobile) */}
        <div className="relative">
          <button className="new-button" onClick={() => setQuick((v) => !v)} title="New Action">
            <FiPlus /> <span>New</span> <FiChevronDown className="new-chevron" />
          </button>
          <AnimatePresence>
            {quick && (
              <motion.div
                className="dropdown"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
              >
                {[
                  "Add Product",
                  "Create Order",
                  "Add Banner",
                  "Create Coupon",
                  "Adjust Inventory",
                ].map((x) => (
                  <button key={x} onClick={() => setQuick(false)}>
                    {x}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Notifications */}
        <div className="relative">
          <button
            className="notification-button"
            onClick={() => setNotes((v) => !v)}
            title="Notifications"
          >
            <FiBell />
            <span>3</span>
          </button>
          <AnimatePresence>
            {notes && (
              <motion.div
                className="dropdown"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
              >
                <div className="dropdown-heading">
                  <strong>Notifications</strong>
                  <button onClick={() => setNotes(false)}>Mark read</button>
                </div>
                {[
                  ["New order received", "#AMH1250 · ₹2,549"],
                  ["Low stock alert", "16 products need attention"],
                  ["Payment failed", "Order #AMH1264"],
                ].map(([a, b]) => (
                  <button
                    className="notification-row"
                    key={a}
                    onClick={() => setNotes(false)}
                  >
                    <i />
                    <div>
                      <strong>{a}</strong>
                      <small>{b}</small>
                    </div>
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Profile Button with Logout Dropdown */}
        <div className="relative">
          <button
            className="profile-button"
            onClick={() => setProfileOpen((v) => !v)}
            title="User Profile"
          >
            <span className="avatar">SG</span>
            <span className="profile-info">
              <strong>Sujith</strong>
              <small>Administrator</small>
            </span>
            <FiChevronDown className="chevron" />
          </button>

          <AnimatePresence>
            {profileOpen && (
              <motion.div
                className="dropdown profile-menu"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
              >
                <button onClick={() => setProfileOpen(false)}>
                  <FiUser /> My Profile
                </button>
                <button onClick={() => setProfileOpen(false)}>
                  <FiSettings /> Store Settings
                </button>
                <div className="dropdown-divider" />
                <button className="logout-btn" onClick={handleLogout}>
                  <FiLogOut /> Logout
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
