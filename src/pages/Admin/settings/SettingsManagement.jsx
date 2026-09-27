import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import AdminSidebar from "../../../components/Admin/AdminSidebar";
import AdminTopbar from "../../../components/Admin/AdminTopbar";
import MasterDropdown from "../../../components/Admin/MasterDropdown";
import AnimatedToggle from "../../../components/Admin/AnimatedToggle";
import {
  FiActivity,
  FiAlertTriangle,
  FiAward,
  FiBell,
  FiBox,
  FiCalendar,
  FiCheck,
  FiChevronDown,
  FiCode,
  FiDatabase,
  FiDownload,
  FiEdit2,
  FiGift,
  FiGlobe,
  FiGrid,
  FiHeart,
  FiHome,
  FiImage,
  FiLink,
  FiMail,
  FiPackage,
  FiPhone,
  FiPlus,
  FiRefreshCw,
  FiRotateCcw,
  FiSave,
  FiSearch,
  FiSettings,
  FiShield,
  FiShoppingBag,
  FiTag,
  FiTrash2,
  FiTruck,
  FiUpload,
  FiUserCheck,
  FiUsers,
  FiX,
} from "react-icons/fi";

const styles = String.raw`
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap");

.settings-scope {
  --bg: #faf8ff;
  --card: #ffffff;
  --text: #10172f;
  --muted: #667085;
  --border: #dfe4ef;
  --line: #edf0f6;
  --blue: #0056c3;
  --blue-dark: #004093;
  --orange: #fd661d;
  --green: #16a34a;
  --purple: #7c4dff;
  --red: #e5484d;
  --shadow: 0 5px 18px rgba(20, 32, 70, 0.055);
  --shadow-lg: 0 22px 65px rgba(16, 24, 40, 0.18);
  --radius: 12px;

  min-height: 100vh;
  background: var(--bg);
  color: var(--text);
  font-family: 'Manrope', system-ui, -apple-system, sans-serif;
}

.settings-scope * { box-sizing: border-box; }
.settings-scope button, .settings-scope input, .settings-scope select, .settings-scope textarea { font: inherit; }
.settings-scope button { cursor: pointer; }
.settings-scope input, .settings-scope select, .settings-scope textarea { color: var(--text); }

.settings-scope .admin-shell {
  display: flex;
  min-height: 100vh;
  background: var(--bg);
}

.settings-scope .desktop-sidebar-wrapper {
  width: 256px;
  min-width: 256px;
  flex-shrink: 0;
}
.settings-scope .desktop-sidebar-wrapper.is-closed {
  display: none;
}

.settings-scope .dashboard-main {
  flex: 1;
  min-width: 0;
}

.settings-scope .page {
  padding: 22px 28px 36px;
}

/* Page Header Card */
.settings-scope .page-header-card {
  background: #ffffff;
  border: 1px solid var(--border);
  border-radius: 14px;
  box-shadow: var(--shadow);
  padding: 22px 24px 0;
  margin-bottom: 22px;
}

.settings-scope .page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
  margin-bottom: 16px;
}
.settings-scope .page-header h1 {
  margin: 0;
  font-size: 30px;
  line-height: 1.2;
  letter-spacing: -.02em;
  font-weight: 800;
  color: #10172f;
}
.settings-scope .page-header p {
  margin: 5px 0 0;
  color: var(--muted);
  font-size: 14px;
  font-weight: 500;
}

.settings-scope .save-button {
  height: 44px;
  padding: 0 20px;
  border: 0;
  border-radius: 10px;
  background: #fd661d;
  color: #ffffff;
  display: inline-flex;
  align-items: center;
  gap: 9px;
  font-size: 15px;
  font-weight: 700;
  box-shadow: 0 4px 10px rgba(253, 102, 29, 0.25);
  cursor: pointer;
  transition: all 0.18s ease;
  flex-shrink: 0;
}
.settings-scope .save-button:hover:not(:disabled) {
  background: #e25510;
  box-shadow: 0 6px 14px rgba(253, 102, 29, 0.35);
}
.settings-scope .save-button:disabled {
  cursor: not-allowed;
  opacity: 0.55;
}

/* Settings Tabs in Header */
.settings-scope .settings-tabs {
  margin-bottom: 0;
  padding: 0;
  overflow-x: auto;
  overflow-y: hidden !important;
  scrollbar-width: none;
  display: flex;
  align-items: center;
  gap: 4px;
  border: 0;
  border-top: 1px solid var(--line);
  background: transparent;
  box-shadow: none;
  -webkit-overflow-scrolling: touch;
}
.settings-scope .settings-tabs::-webkit-scrollbar { display: none; }
.settings-scope .settings-tabs button {
  height: 52px;
  padding: 0 14px;
  border: 0;
  background: transparent;
  color: #526079;
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
  white-space: nowrap;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: color 0.18s ease, background 0.18s ease;
  flex-shrink: 0;
}
.settings-scope .settings-tabs button:hover {
  color: var(--blue);
  background: #f8faff;
  border-radius: 8px 8px 0 0;
}
.settings-scope .settings-tabs button svg {
  font-size: 19px;
  flex-shrink: 0;
}
.settings-scope .settings-tabs button.active {
  color: var(--blue);
  font-weight: 800;
  background: transparent;
}
.settings-scope .settings-tabs button.active::after {
  content: "";
  position: absolute;
  left: 10px;
  right: 10px;
  bottom: 0;
  height: 3px;
  border-radius: 99px;
  background: var(--blue);
}

@media (min-width: 1050px) {
  .settings-scope .settings-tabs {
    overflow: visible !important;
    overflow-x: visible !important;
    overflow-y: hidden !important;
    justify-content: space-between;
    width: 100%;
  }
  .settings-scope .settings-tabs button {
    padding: 0 16px;
    font-size: 15px;
  }
}

/* Layout Grids */
.settings-scope .general-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.45fr) minmax(310px, 0.85fr);
  gap: 16px;
}
.settings-scope .right-stack {
  display: grid;
  align-content: start;
  gap: 16px;
}

.settings-scope .card {
  border: 1px solid var(--border);
  border-radius: 12px;
  background: #ffffff;
  box-shadow: var(--shadow);
  overflow: visible;
}
.settings-scope .card-pad {
  padding: 20px;
}
.settings-scope .section-heading {
  margin: 0 0 16px;
  font-size: 17px;
  font-weight: 800 !important;
  color: #10172f;
}

/* Form Grid */
.settings-scope .form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px 16px;
}
.settings-scope .field {
  display: grid;
  gap: 6px;
}
.settings-scope .field.full {
  grid-column: 1 / 3;
}
.settings-scope .field label,
.settings-scope .upload-title {
  color: #10172f;
  font-size: 14px;
  font-weight: 600 !important;
}
.settings-scope .required {
  color: var(--red);
  font-weight: 600 !important;
}

.settings-scope .field input,
.settings-scope .field select,
.settings-scope .field textarea {
  width: 100%;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: #ffffff;
  outline: 0;
  font-size: 14px;
  font-weight: 500 !important;
  color: #10172f;
  transition: border-color 0.18s ease, box-shadow 0.18s ease;
}
.settings-scope .field input,
.settings-scope .field select {
  height: 42px;
  padding: 0 14px;
}
.settings-scope .field textarea {
  min-height: 88px;
  padding: 10px 14px;
  resize: vertical;
}
.settings-scope .field input:focus,
.settings-scope .field select:focus,
.settings-scope .field textarea:focus {
  border-color: #7aa9ef;
  box-shadow: 0 0 0 3px rgba(0, 86, 195, 0.1);
}

.settings-scope .settings-field-dropdown {
  width: 100% !important;
  display: block !important;
}
.settings-scope .settings-field-dropdown .master-dropdown-trigger {
  width: 100% !important;
  height: 42px !important;
  padding: 0 14px !important;
  border: 1px solid var(--border) !important;
  border-radius: 8px !important;
  background: #ffffff !important;
  justify-content: space-between !important;
  font-size: 14px !important;
  font-weight: 500 !important;
  color: #10172f !important;
}
.settings-scope .settings-field-dropdown .master-dropdown-trigger:hover {
  border-color: #7aa9ef !important;
}
.settings-scope .settings-field-dropdown .master-dropdown-label {
  font-size: 14px !important;
  font-weight: 500 !important;
  color: #10172f !important;
}
.settings-scope .settings-field-dropdown .master-dropdown-option {
  font-size: 13.5px !important;
  font-weight: 500 !important;
}
.settings-scope .settings-field-dropdown .master-dropdown-menu {
  width: 100% !important;
  max-height: 220px !important;
  overflow-y: auto !important;
}

.settings-scope .textarea-wrap {
  position: relative;
}
.settings-scope .counter {
  position: absolute;
  right: 12px;
  bottom: 8px;
  color: var(--muted);
  font-size: 12.5px;
  font-weight: 500;
}

/* Upload Section */
.settings-scope .upload-section {
  grid-column: 1 / 3;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  margin-top: 6px;
  border-top: 1px solid var(--line);
  padding-top: 16px;
}
.settings-scope .upload-block:first-child {
  padding-right: 16px;
  border-right: 1px solid var(--line);
}
.settings-scope .upload-block:last-child {
  padding-left: 16px;
}
.settings-scope .upload-row {
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 14px;
}

.settings-scope .logo-preview {
  width: 76px;
  height: 76px;
  flex: 0 0 auto;
  border: 1px solid var(--border);
  border-radius: 10px;
  background: #f8f9fe;
  display: grid;
  place-items: center;
  overflow: hidden;
  color: var(--blue);
  font-size: 32px;
}
.settings-scope .logo-preview.favicon {
  width: 54px;
  height: 54px;
  font-size: 24px;
}
.settings-scope .logo-preview img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.settings-scope .upload-meta {
  min-width: 0;
  flex: 1;
}
.settings-scope .upload-meta p {
  margin: 0 0 8px;
  color: var(--muted);
  font-size: 13px;
  font-weight: 500;
}
.settings-scope .upload-button {
  height: 38px;
  padding: 0 16px;
  border: 1px dashed #9cb7e4;
  border-radius: 8px;
  background: #ffffff;
  color: var(--blue);
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 13.5px;
  font-weight: 600;
  transition: all 0.18s ease;
}
.settings-scope .upload-button:hover {
  background: #f0f6ff;
}
.settings-scope .drop-hint {
  display: block;
  margin-top: 5px;
  color: var(--muted);
  font-size: 12.5px;
  font-weight: 500;
}
.settings-scope .file-name {
  display: block;
  margin-top: 6px;
  color: #10172f;
  font-size: 13px;
  font-weight: 600;
}

/* Status Rows & Toggles */
.settings-scope .status-row {
  min-height: 56px;
  padding: 10px 0;
  border-bottom: 1px solid var(--line);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}
.settings-scope .status-row:last-child {
  border-bottom: 0;
  padding-bottom: 0;
}
.settings-scope .status-copy strong {
  display: block;
  font-size: 14.5px;
  font-weight: 600 !important;
  color: #10172f;
}
.settings-scope .status-copy span {
  display: block;
  margin-top: 2px;
  color: var(--muted);
  font-size: 13px;
  font-weight: 500 !important;
}
.settings-scope .inline-select {
  min-width: 120px;
  height: 38px;
  padding: 0 28px 0 12px;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: #ffffff;
  font-size: 13.5px;
  font-weight: 500 !important;
  color: #10172f;
}

.settings-scope .yes-no-group {
  display: inline-flex;
  align-items: center;
  gap: 16px;
  user-select: none;
  flex-shrink: 0;
}
.settings-scope .yes-no-option {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  color: #10172f;
}
.settings-scope .yes-no-option input[type="radio"] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  margin: 0;
}
.settings-scope .radio-dot {
  position: relative;
  width: 16px;
  height: 16px;
  border: 1.5px solid var(--border);
  border-radius: 50%;
  background: #ffffff;
  transition: all 0.18s ease;
  flex-shrink: 0;
  box-sizing: border-box;
}
.settings-scope .radio-inner {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--blue);
  transform: translate(-50%, -50%) scale(0);
  transition: transform 0.18s ease;
  box-sizing: border-box;
}
.settings-scope .yes-no-option.selected .radio-dot {
  border-color: var(--blue);
}
.settings-scope .yes-no-option.selected .radio-inner {
  transform: translate(-50%, -50%) scale(1);
}
.settings-scope .yes-no-option:hover .radio-dot {
  border-color: var(--blue);
}

/* Quick Actions */
.settings-scope .quick-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px 14px;
}
.settings-scope .quick-action {
  min-height: 56px;
  padding: 10px 12px;
  border: 1px solid var(--line);
  border-radius: 10px;
  background: #ffffff;
  display: grid;
  grid-template-columns: 36px 1fr auto;
  gap: 10px;
  align-items: center;
  text-align: left;
  transition: all 0.18s ease;
}
.settings-scope .quick-action:hover {
  background: #f8f9fe;
  border-color: #d2dbed;
}
.settings-scope .quick-icon {
  width: 36px;
  height: 36px;
  border-radius: 9px;
  display: grid;
  place-items: center;
  font-size: 16px;
}
.settings-scope .quick-icon.purple { background: #efe8ff; color: #7c4dff; }
.settings-scope .quick-icon.green { background: #e5f8eb; color: #16a34a; }
.settings-scope .quick-icon.orange { background: #fff0e2; color: #fd661d; }
.settings-scope .quick-icon.blue { background: #e7efff; color: #0056c3; }

.settings-scope .quick-copy strong {
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #10172f;
}
.settings-scope .quick-copy span {
  display: block;
  margin-top: 2px;
  color: var(--muted);
  font-size: 12.5px;
  font-weight: 500;
}

/* Store Overview Card */
.settings-scope .overview-card {
  margin-top: 18px;
  padding: 20px;
}
.settings-scope .overview-grid {
  display: grid;
  grid-template-columns: minmax(170px, 1.25fr) minmax(210px, 1.6fr) minmax(175px, 1.25fr) minmax(160px, 1.1fr) minmax(130px, 0.9fr) minmax(110px, 0.8fr) minmax(110px, 0.8fr);
  gap: 12px;
  margin-top: 14px;
  overflow-x: auto;
  scrollbar-width: none;
}
.settings-scope .overview-grid::-webkit-scrollbar { display: none; }

.settings-scope .overview-item {
  min-width: 0;
  padding: 0 14px;
  border-right: 1px solid var(--line);
  display: flex;
  flex-direction: column;
}
.settings-scope .overview-item:first-child { padding-left: 0; }
.settings-scope .overview-item:last-child { border-right: 0; padding-right: 0; }

.settings-scope .overview-icon {
  width: 36px;
  height: 36px;
  margin-bottom: 10px;
  border-radius: 50%;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  font-size: 16px;
  flex-shrink: 0;
}
.settings-scope .overview-icon svg {
  display: block !important;
  width: 16px !important;
  height: 16px !important;
  margin: 0 !important;
}
.settings-scope .overview-icon.blue { background: #e7efff; color: #0056c3; }
.settings-scope .overview-icon.gray { background: #eef0f4; color: #667085; }
.settings-scope .overview-icon.orange { background: #fff0df; color: #fd661d; }
.settings-scope .overview-icon.purple { background: #efe9ff; color: #7c4dff; }
.settings-scope .overview-icon.green { background: #e3f7e9; color: #16a34a; }

.settings-scope .overview-item label {
  display: block;
  margin-bottom: 6px;
  color: #10172f;
  font-size: 13px;
  font-weight: 600;
}
.settings-scope .overview-item strong {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  gap: 6px;
  color: #10172f;
  font-size: 13.5px;
  font-weight: 600;
  line-height: 1.45;
  white-space: nowrap;
}
.settings-scope .overview-item span {
  display: block;
  color: #10172f;
  font-size: 13.5px;
  font-weight: 500;
  line-height: 1.45;
}
.settings-scope .overview-item a {
  color: var(--blue);
  text-decoration: none;
  font-size: 13.5px;
  font-weight: 600;
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}
.settings-scope .overview-item a:hover {
  text-decoration: underline;
}
.settings-scope .active-pill {
  display: inline-flex !important;
  padding: 2px 7px;
  border-radius: 999px;
  background: #e3f8e8;
  color: #16a34a !important;
  font-size: 12.5px !important;
  font-weight: 600 !important;
  white-space: nowrap !important;
  flex-shrink: 0;
}

/* Tab Panels */
.settings-scope .tab-panel-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
.settings-scope .settings-card {
  padding: 20px;
}
.settings-scope .settings-card h3 {
  margin: 0 0 16px;
  font-size: 17px;
  font-weight: 800 !important;
  color: #10172f;
}
.settings-scope .settings-list {
  display: flex;
  flex-direction: column;
}
.settings-scope .setting-line {
  min-height: 56px;
  padding: 10px 0;
  border-bottom: 1px solid var(--line);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}
.settings-scope .setting-line:last-child {
  border-bottom: 0;
  padding-bottom: 0;
}
.settings-scope .setting-line strong {
  display: block;
  font-size: 14.5px;
  font-weight: 600 !important;
  color: #10172f;
}
.settings-scope .setting-line span {
  display: block;
  margin-top: 2px;
  color: var(--muted);
  font-size: 13px;
  font-weight: 500 !important;
}

.settings-scope .setting-line > strong,
.settings-scope .status-row > strong {
  font-size: 13.5px;
  font-weight: 500 !important;
  color: #10172f;
}

.settings-scope .compact-input {
  width: min(200px, 50%);
  height: 40px;
  padding: 0 12px;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: #ffffff;
  font-size: 13.5px;
  font-weight: 500 !important;
  color: #10172f;
}
.settings-scope .compact-button {
  height: 38px;
  padding: 0 16px;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: #ffffff;
  color: #10172f;
  font-size: 13.5px;
  font-weight: 500 !important;
  transition: all 0.18s ease;
}
.settings-scope .compact-button:hover {
  background: #f8f9fe;
  border-color: #c2c6d5;
}

.settings-scope .api-key {
  display: flex;
  gap: 8px;
  align-items: center;
}
.settings-scope .api-key code {
  padding: 8px 12px;
  border-radius: 8px;
  background: #f5f7fb;
  color: #10172f;
  font-size: 13.5px;
  font-family: monospace;
  font-weight: 500 !important;
}

/* Modals & Toasts */
.settings-scope .modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 110;
  padding: 16px;
  background: rgba(14, 22, 43, 0.43);
  display: grid;
  place-items: center;
}
.settings-scope .modal {
  width: min(520px, 100%);
  max-height: 90vh;
  overflow: auto;
  padding: 22px;
  border-radius: 14px;
  background: #ffffff;
  box-shadow: var(--shadow-lg);
}
.settings-scope .modal-header {
  padding-bottom: 14px;
  border-bottom: 1px solid var(--line);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.settings-scope .modal-header h2 {
  margin: 0;
  font-size: 20px;
  font-weight: 800;
  color: #10172f;
}
.settings-scope .modal-copy {
  margin: 16px 0;
  color: var(--muted);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.6;
}
.settings-scope .modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}
.settings-scope .secondary-button,
.settings-scope .primary-button,
.settings-scope .danger-button {
  height: 40px;
  padding: 0 18px;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
  font-size: 14px;
  font-weight: 800;
  transition: all 0.18s ease;
}
.settings-scope .secondary-button {
  border: 1px solid var(--border);
  background: #ffffff;
  color: #10172f;
}
.settings-scope .secondary-button:hover { background: #f8f9fe; }

.settings-scope .primary-button {
  border: 0;
  background: var(--blue);
  color: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 86, 195, 0.22);
}
.settings-scope .primary-button:hover { background: var(--blue-dark); }

.settings-scope .danger-button {
  border: 1px solid #f3b9be;
  background: #ffffff;
  color: var(--red);
}
.settings-scope .danger-button:hover { background: #ffe8e9; }

.settings-scope .toast {
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 130;
  padding: 12px 18px;
  border-radius: 10px;
  background: #10172f;
  color: #ffffff;
  box-shadow: 0 18px 45px rgba(16, 24, 40, 0.2);
  font-size: 14px;
  font-weight: 600;
}

/* Save Summary Modal */
.settings-scope .save-summary-modal {
  width: min(600px, 100%);
}
.settings-scope .summary-subtitle {
  margin: 4px 0 0;
  color: var(--muted);
  font-size: 13.5px;
  font-weight: 500;
}
.settings-scope .changes-list {
  margin: 16px 0 20px;
  max-height: 320px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-right: 4px;
}
.settings-scope .change-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 14px;
  border: 1px solid var(--line);
  border-radius: 9px;
  background: #f8f9fe;
}
.settings-scope .change-label {
  font-size: 14px;
  font-weight: 700;
  color: #10172f;
}
.settings-scope .change-comparison {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13.5px;
}
.settings-scope .old-val {
  color: #8892a4;
  text-decoration: line-through;
  font-weight: 500;
}
.settings-scope .arrow-sep {
  color: var(--orange);
  font-weight: 800;
}
.settings-scope .new-val {
  color: var(--blue);
  font-weight: 700;
  background: #e7efff;
  padding: 2px 8px;
  border-radius: 6px;
}

@media (max-width: 1050px) {
  .settings-scope .desktop-sidebar-wrapper { display: none !important; }
}

@media (max-width: 1280px) {
  .settings-scope .general-grid { grid-template-columns: 1fr; }
  .settings-scope .right-stack { grid-template-columns: 1fr 1fr; }
  .settings-scope .overview-grid { grid-template-columns: repeat(4, 1fr); }
  .settings-scope .overview-item:nth-child(4) { border-right: 0; }
  .settings-scope .overview-item:nth-child(n+5) { margin-top: 16px; }
}

@media (max-width: 980px) {
  .settings-scope .page { padding: 16px; }
  .settings-scope .right-stack, .settings-scope .tab-panel-grid { grid-template-columns: 1fr; }
  .settings-scope .form-grid { grid-template-columns: 1fr; }
  .settings-scope .field.full, .settings-scope .upload-section { grid-column: auto; }
  .settings-scope .upload-section { grid-template-columns: 1fr; }
  .settings-scope .upload-block:first-child { padding-right: 0; border-right: 0; border-bottom: 1px solid var(--line); padding-bottom: 16px; }
  .settings-scope .upload-block:last-child { padding-left: 0; padding-top: 16px; }
  .settings-scope .overview-grid { grid-template-columns: 1fr 1fr; }
  .settings-scope .overview-item { border-right: 1px solid var(--line); margin-top: 14px !important; padding: 8px 12px; }
  .settings-scope .overview-item:nth-child(even) { border-right: 0; }
}

@media (max-width: 768px) {
  .settings-scope { max-width: 100vw; overflow-x: clip; }
  .settings-scope .page { padding: 14px 12px 28px; max-width: 100vw; overflow-x: clip; box-sizing: border-box; }
  .settings-scope .page-header-card { padding: 16px 14px 0; margin-bottom: 16px; border-radius: 12px; }
  .settings-scope .page-header { flex-direction: row; align-items: center; justify-content: space-between; gap: 10px; }
  .settings-scope .save-button { width: auto; height: 38px; padding: 0 16px; font-size: 14px; }
  .settings-scope .settings-tabs button { height: 44px; padding: 0 12px; font-size: 13px; }
  .settings-scope .nav-tabs-container { overflow-x: auto; scrollbar-width: none; -webkit-overflow-scrolling: touch; }
  .settings-scope .tabs-nav { flex-wrap: nowrap; min-width: max-content; }

  /* Mobile 2-per-row Bento Grid for Store Overview */
  .settings-scope .overview-grid {
    display: grid !important;
    grid-template-columns: repeat(2, 1fr) !important;
    gap: 10px !important;
    margin-top: 14px;
    overflow-x: visible !important;
  }
  .settings-scope .overview-item {
    padding: 14px !important;
    border-radius: 12px !important;
    background: #f8f9fc !important;
    border: 1px solid var(--border) !important;
    display: flex !important;
    flex-direction: column !important;
    margin: 0 !important;
    box-sizing: border-box !important;
  }
  .settings-scope .overview-item.bento-wide {
    grid-column: 1 / 3 !important;
    background: #f0f5ff !important;
    border-color: #cce0ff !important;
  }
}

@media (max-width: 600px) {
  .settings-scope .quick-grid { grid-template-columns: 1fr; }
  .settings-scope .setting-line { align-items: center; justify-content: space-between; gap: 12px; }
  .settings-scope .compact-input { width: 100%; }
}

@media (max-width: 480px) {
  .settings-scope .page-header { flex-direction: column; align-items: flex-start; gap: 10px; }
  .settings-scope .save-button { width: 100%; justify-content: center; height: 40px; }
}
`;

const tabs = [
  { id: "general", label: "General", icon: FiSettings },
  { id: "store", label: "Store", icon: FiShoppingBag },
  { id: "payments", label: "Payments", icon: FiDatabase },
  { id: "shipping", label: "Shipping", icon: FiTruck },
  { id: "tax", label: "Tax", icon: FiTag },
  { id: "notifications", label: "Notifications", icon: FiBell },
  { id: "users", label: "Users & Roles", icon: FiUsers },
  { id: "security", label: "Security", icon: FiShield },
  { id: "integrations", label: "Integrations", icon: FiPackage },
  { id: "api", label: "API", icon: FiCode },
];

const initialSettings = {
  storeName: "AMIHIVE Store",
  supportEmail: "support@amihive.com",
  phone: "+91 98765 43210",
  businessType: "Private Limited Company",
  currency: "INR (₹) – Indian Rupee",
  timezone: "(GMT+05:30) Asia/Kolkata",
  dateFormat: "May 18, 2025",
  timeFormat: "12 Hour (02:30 PM)",
  description: "AMIHIVE is your one-stop destination for premium quality products across fashion, accessories, home & living, and more.",
  storeMode: "Live",
  maintenanceMode: false,
  publicVisibility: true,
  productReviews: true,
  guestCheckout: true,
  wishlist: true,
  defaultLanguage: "English",
  country: "India",
  defaultTaxRate: "18",
  shippingRate: "99",
  freeShippingThreshold: "999",
  orderEmail: true,
  promoEmail: true,
  pushNotifications: true,
  twoFactor: true,
  sessionTimeout: "30 minutes",
  allowAdminInvites: true,
  razorpayEnabled: true,
  codEnabled: true,
  stripeEnabled: false,
  autoRefunds: true,
  shiprocketEnabled: true,
  delhiveryEnabled: false,
  pricesIncludeTax: true,
  gstInvoice: true,
  razorpayIntegration: true,
  shiprocketIntegration: true,
  gaIntegration: true,
};

function AmihiveMark({ color = "currentColor", size = 42 }) {
  return (
    <svg style={{ width: size, height: size }} viewBox="0 0 48 48" aria-hidden="true">
      <path d="M24 3 41 12.6v22.8L24 45 7 35.4V12.6L24 3Z" fill="none" stroke={color} strokeWidth="2.2" strokeLinejoin="round" />
      <path d="m7.7 13 16.3 9.2L40.3 13M24 22.2V44M15 17.1v10.4l9 5.2 9-5.2V17.1M15 27.5l9-5.3 9 5.3" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="16.1" cy="17.4" r="1.7" fill={color} />
      <circle cx="31.9" cy="17.4" r="1.7" fill={color} />
      <circle cx="24" cy="32.5" r="1.7" fill={color} />
    </svg>
  );
}

function PageHeader({ dirty, onSave }) {
  return (
    <div className="page-header">
      <div>
        <h1>Settings Management</h1>
        <p>Manage your store preferences, configurations, integrations, and access rules.</p>
      </div>
      <button
        className="save-button"
        type="button"
        onClick={onSave}
        disabled={!dirty}
        title={dirty ? "Save current changes" : "Settings are already saved"}
      >
        <FiSave size={16} /> Save Changes
      </button>
    </div>
  );
}

function SettingsTabs({ active, onChange }) {
  return (
    <div className="settings-tabs" role="tablist" aria-label="Settings sections">
      {tabs.map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          type="button"
          className={active === id ? "active" : ""}
          onClick={() => onChange(id)}
          role="tab"
          aria-selected={active === id}
        >
          <Icon />
          {label}
        </button>
      ))}
    </div>
  );
}

function Field({ label, required = false, full = false, children }) {
  return (
    <div className={`field ${full ? "full" : ""}`}>
      <label>
        {label}
        {required && <span className="required"> *</span>}
      </label>
      {children}
    </div>
  );
}

function YesNoRadio({ checked, onChange, label, disabled = false }) {
  return (
    <div className="yes-no-group" role="radiogroup" aria-label={label}>
      <label className={`yes-no-option ${checked === true ? "selected" : ""}`}>
        <input
          type="radio"
          name={label}
          checked={checked === true}
          onChange={() => onChange(true)}
          disabled={disabled}
        />
        <span className="radio-dot">
          <span className="radio-inner" />
        </span>
        <span className="radio-label">Yes</span>
      </label>
      <label className={`yes-no-option ${checked === false ? "selected" : ""}`}>
        <input
          type="radio"
          name={label}
          checked={checked === false}
          onChange={() => onChange(false)}
          disabled={disabled}
        />
        <span className="radio-dot">
          <span className="radio-inner" />
        </span>
        <span className="radio-label">No</span>
      </label>
    </div>
  );
}

function Toggle({ checked, onChange, label }) {
  return <AnimatedToggle checked={checked} onChange={onChange} label={label} />;
}

function StatusRow({ title, description, children }) {
  return (
    <div className="status-row">
      <div className="status-copy">
        <strong>{title}</strong>
        <span>{description}</span>
      </div>
      {children}
    </div>
  );
}

function UploadBlock({ type, preview, fileName, onUpload }) {
  const inputRef = useRef(null);
  const favicon = type === "Favicon";

  const receiveFile = (file) => {
    if (file) onUpload(file);
  };

  return (
    <div className="upload-block">
      <div className="upload-title">{type}</div>
      <div className="upload-row">
        <div className={`logo-preview ${favicon ? "favicon" : ""}`}>
          {preview ? (
            <img src={preview} alt={`${type} preview`} />
          ) : (
            <AmihiveMark color="#0056c3" size={favicon ? 28 : 42} />
          )}
        </div>
        <div
          className="upload-meta"
          onDragOver={(event) => event.preventDefault()}
          onDrop={(event) => {
            event.preventDefault();
            receiveFile(event.dataTransfer.files?.[0]);
          }}
        >
          <p>{favicon ? "Recommended: 32×32px, PNG or ICO" : "Recommended: 512×512px, PNG or SVG"}</p>
          <button className="upload-button" type="button" onClick={() => inputRef.current?.click()}>
            <FiUpload /> Upload {type}
          </button>
          <span className="drop-hint">or drag and drop</span>
          {fileName && <span className="file-name">{fileName}</span>}
          <input
            ref={inputRef}
            type="file"
            hidden
            accept={favicon ? ".png,.ico,image/png,image/x-icon" : ".png,.jpg,.jpeg,.svg,image/*"}
            onChange={(e) => receiveFile(e.target.files?.[0])}
          />
        </div>
      </div>
    </div>
  );
}

function StoreInformationCard({ settings, onChange, logo, logoName, onLogoUpload, favicon, faviconName, onFaviconUpload }) {
  return (
    <section className="card card-pad">
      <h2 className="section-heading">Store Information</h2>
      <div className="form-grid">
        <Field label="Store Name" required>
          <input value={settings.storeName} onChange={(e) => onChange("storeName", e.target.value)} />
        </Field>
        <Field label="Support Email" required>
          <input type="email" value={settings.supportEmail} onChange={(e) => onChange("supportEmail", e.target.value)} />
        </Field>
        <Field label="Phone Number">
          <input value={settings.phone} onChange={(e) => onChange("phone", e.target.value)} />
        </Field>
        <Field label="Business Type">
          <MasterDropdown
            options={["Private Limited Company", "Partnership", "Proprietorship", "LLP"]}
            value={settings.businessType}
            onChange={(val) => onChange("businessType", val)}
            className="settings-field-dropdown"
          />
        </Field>
        <Field label="Currency" required>
          <MasterDropdown
            options={["INR (₹) – Indian Rupee", "USD ($) – US Dollar", "EUR (€) – Euro"]}
            value={settings.currency}
            onChange={(val) => onChange("currency", val)}
            className="settings-field-dropdown"
          />
        </Field>
        <Field label="Timezone" required>
          <MasterDropdown
            options={["(GMT+05:30) Asia/Kolkata", "(GMT+00:00) UTC", "(GMT-05:00) America/New_York"]}
            value={settings.timezone}
            onChange={(val) => onChange("timezone", val)}
            className="settings-field-dropdown"
          />
        </Field>
        <Field label="Date Format">
          <MasterDropdown
            options={["May 18, 2025", "18 May 2025", "18/05/2025", "2025-05-18"]}
            value={settings.dateFormat}
            onChange={(val) => onChange("dateFormat", val)}
            className="settings-field-dropdown"
          />
        </Field>
        <Field label="Time Format">
          <MasterDropdown
            options={["12 Hour (02:30 PM)", "24 Hour (14:30)"]}
            value={settings.timeFormat}
            onChange={(val) => onChange("timeFormat", val)}
            className="settings-field-dropdown"
          />
        </Field>
        <Field label="Store Description" full>
          <div className="textarea-wrap">
            <textarea maxLength={500} value={settings.description} onChange={(e) => onChange("description", e.target.value)} />
            <span className="counter">{settings.description.length}/500</span>
          </div>
        </Field>
        <div className="upload-section">
          <UploadBlock type="Store Logo" preview={logo} fileName={logoName} onUpload={onLogoUpload} />
          <UploadBlock type="Favicon" preview={favicon} fileName={faviconName} onUpload={onFaviconUpload} />
        </div>
      </div>
    </section>
  );
}

function StoreStatusCard({ settings, onChange }) {
  return (
    <section className="card card-pad">
      <h2 className="section-heading">Store Status</h2>
      <StatusRow title="Store Mode" description="Choose your store operational mode">
        <MasterDropdown
          options={["Live", "Staging", "Private"]}
          value={settings.storeMode}
          onChange={(val) => onChange("storeMode", val)}
          rightAlign
        />
      </StatusRow>
      <StatusRow title="Maintenance Mode" description="Temporarily disable store access">
        <Toggle checked={settings.maintenanceMode} onChange={(v) => onChange("maintenanceMode", v)} label="Maintenance Mode" />
      </StatusRow>
      <StatusRow title="Public Visibility" description="Make store visible to everyone">
        <Toggle checked={settings.publicVisibility} onChange={(v) => onChange("publicVisibility", v)} label="Public Visibility" />
      </StatusRow>
      <StatusRow title="Enable Product Reviews" description="Allow customers to review products">
        <Toggle checked={settings.productReviews} onChange={(v) => onChange("productReviews", v)} label="Product Reviews" />
      </StatusRow>
      <StatusRow title="Enable Guest Checkout" description="Allow checkout without account">
        <Toggle checked={settings.guestCheckout} onChange={(v) => onChange("guestCheckout", v)} label="Guest Checkout" />
      </StatusRow>
      <StatusRow title="Enable Wishlist" description="Allow customers to save products">
        <Toggle checked={settings.wishlist} onChange={(v) => onChange("wishlist", v)} label="Wishlist" />
      </StatusRow>
    </section>
  );
}

function QuickAction({ icon: Icon, tone, title, description, onClick }) {
  return (
    <button className="quick-action" type="button" onClick={onClick}>
      <span className={`quick-icon ${tone}`}><Icon /></span>
      <span className="quick-copy">
        <strong>{title}</strong>
        <span>{description}</span>
      </span>
      <FiChevronDown style={{ transform: "rotate(-90deg)", color: "#667085" }} />
    </button>
  );
}

function QuickActionsCard({ onAction }) {
  return (
    <section className="card card-pad">
      <h2 className="section-heading">Quick Actions</h2>
      <div className="quick-grid">
        <QuickAction icon={FiTrash2} tone="purple" title="Clear Cache" description="Remove temporary data" onClick={() => onAction("cache")} />
        <QuickAction icon={FiDatabase} tone="green" title="Backup Data" description="Create a store backup" onClick={() => onAction("backup")} />
        <QuickAction icon={FiDownload} tone="orange" title="Export Settings" description="Download store settings" onClick={() => onAction("export")} />
        <QuickAction icon={FiUpload} tone="blue" title="Import Settings" description="Upload settings file" onClick={() => onAction("import")} />
        <QuickAction icon={FiActivity} tone="blue" title="View Logs" description="Check system logs" onClick={() => onAction("logs")} />
      </div>
    </section>
  );
}

function OverviewItem({ icon: Icon, tone, label, isBentoWide = false, children }) {
  return (
    <div className={`overview-item ${isBentoWide ? "bento-wide" : ""}`}>
      <span className={`overview-icon ${tone}`}><Icon /></span>
      <label>{label}</label>
      {children}
    </div>
  );
}

function StoreOverview() {
  return (
    <section className="card overview-card">
      <h2 className="section-heading">Store Overview</h2>
      <div className="overview-grid">
        <OverviewItem icon={FiLink} tone="blue" label="Store URL">
          <a href="https://store.amihive.com" target="_blank" rel="noreferrer">https://store.amihive.com ↗</a>
        </OverviewItem>
        <OverviewItem icon={FiAward} tone="orange" label="Plan Type">
          <strong>Enterprise Plan <span className="active-pill">Active</span></strong>
          <span>Renews on May 31, 2025</span>
        </OverviewItem>
        <OverviewItem icon={FiGrid} tone="gray" label="Business Address" isBentoWide>
          <span>AMIHIVE Pvt. Ltd.</span>
          <span>123 Business Park, Sector 62</span>
          <span>Noida, Uttar Pradesh 201301, India</span>
        </OverviewItem>
        <OverviewItem icon={FiMail} tone="purple" label="Contact Email">
          <a href="mailto:support@amihive.com">support@amihive.com</a>
        </OverviewItem>
        <OverviewItem icon={FiPhone} tone="green" label="Phone Number">
          <span>+91 98765 43210</span>
        </OverviewItem>
        <OverviewItem icon={FiGlobe} tone="blue" label="Country / Region">
          <span>India</span>
        </OverviewItem>
        <OverviewItem icon={FiCalendar} tone="gray" label="Member Since">
          <span>Jan 15, 2023</span>
        </OverviewItem>
      </div>
    </section>
  );
}

function GeneralSettings(props) {
  return (
    <>
      <div className="general-grid">
        <StoreInformationCard {...props} />
        <div className="right-stack">
          <StoreStatusCard settings={props.settings} onChange={props.onChange} />
          <QuickActionsCard onAction={props.onQuickAction} />
        </div>
      </div>
      <StoreOverview />
    </>
  );
}

function SettingLine({ title, description, children }) {
  return (
    <StatusRow title={title} description={description}>
      {children}
    </StatusRow>
  );
}

function GenericSettingsCard({ title, children }) {
  return (
    <section className="card settings-card">
      <h3>{title}</h3>
      <div className="settings-list">{children}</div>
    </section>
  );
}

function StoreTab({ settings, onChange }) {
  return (
    <div className="tab-panel-grid">
      <GenericSettingsCard title="Localization">
        <SettingLine title="Default Language" description="Language shown across the storefront">
          <MasterDropdown
            options={["English", "Hindi", "Telugu"]}
            value={settings.defaultLanguage}
            onChange={(val) => onChange("defaultLanguage", val)}
            rightAlign
          />
        </SettingLine>
        <SettingLine title="Country / Region" description="Primary operating country">
          <MasterDropdown
            options={["India", "United States", "United Kingdom"]}
            value={settings.country}
            onChange={(val) => onChange("country", val)}
            rightAlign
          />
        </SettingLine>
      </GenericSettingsCard>
      <GenericSettingsCard title="Store Preferences">
        <SettingLine title="Guest Checkout" description="Allow orders without user registration">
          <Toggle checked={settings.guestCheckout} onChange={(v) => onChange("guestCheckout", v)} label="Guest checkout" />
        </SettingLine>
        <SettingLine title="Wishlist" description="Allow customers to save products">
          <Toggle checked={settings.wishlist} onChange={(v) => onChange("wishlist", v)} label="Wishlist" />
        </SettingLine>
      </GenericSettingsCard>
    </div>
  );
}

function PaymentsTab({ settings, onChange }) {
  return (
    <div className="tab-panel-grid">
      <GenericSettingsCard title="Payment Methods">
        <SettingLine title="Razorpay" description="Cards, UPI, net banking and wallets">
          <Toggle checked={settings.razorpayEnabled} onChange={(v) => onChange("razorpayEnabled", v)} label="Razorpay payment" />
        </SettingLine>
        <SettingLine title="Cash on Delivery" description="Collect payment on delivery">
          <Toggle checked={settings.codEnabled} onChange={(v) => onChange("codEnabled", v)} label="Cash on delivery" />
        </SettingLine>
        <SettingLine title="Stripe" description="International card payments">
          <Toggle checked={settings.stripeEnabled} onChange={(v) => onChange("stripeEnabled", v)} label="Stripe payment" />
        </SettingLine>
      </GenericSettingsCard>
      <GenericSettingsCard title="Payment Preferences">
        <SettingLine title="Settlement Currency" description="Default merchant settlement currency">
          <strong>INR (₹)</strong>
        </SettingLine>
        <SettingLine title="Automatic Refunds" description="Allow eligible refunds through gateway">
          <Toggle checked={settings.autoRefunds} onChange={(v) => onChange("autoRefunds", v)} label="Automatic refunds" />
        </SettingLine>
      </GenericSettingsCard>
    </div>
  );
}

function ShippingTab({ settings, onChange }) {
  return (
    <div className="tab-panel-grid">
      <GenericSettingsCard title="Shipping Rates">
        <SettingLine title="Standard Shipping Rate" description="Default shipping charge">
          <input className="compact-input" value={settings.shippingRate} onChange={(e) => onChange("shippingRate", e.target.value)} />
        </SettingLine>
        <SettingLine title="Free Shipping Threshold" description="Order value required for free shipping">
          <input className="compact-input" value={settings.freeShippingThreshold} onChange={(e) => onChange("freeShippingThreshold", e.target.value)} />
        </SettingLine>
      </GenericSettingsCard>
      <GenericSettingsCard title="Shipping Partners">
        <SettingLine title="Shiprocket" description="Primary shipping and logistics integration">
          <Toggle checked={settings.shiprocketEnabled} onChange={(v) => onChange("shiprocketEnabled", v)} label="Shiprocket integration" />
        </SettingLine>
        <SettingLine title="Delhivery" description="Optional delivery partner">
          <Toggle checked={settings.delhiveryEnabled} onChange={(v) => onChange("delhiveryEnabled", v)} label="Delhivery integration" />
        </SettingLine>
      </GenericSettingsCard>
    </div>
  );
}

function TaxTab({ settings, onChange }) {
  return (
    <div className="tab-panel-grid">
      <GenericSettingsCard title="Tax Configuration">
        <SettingLine title="Default GST Rate (%)" description="Applied where product-specific tax is unavailable">
          <input className="compact-input" value={settings.defaultTaxRate} onChange={(e) => onChange("defaultTaxRate", e.target.value)} />
        </SettingLine>
        <SettingLine title="Prices Include Tax" description="Show tax-inclusive storefront pricing">
          <Toggle checked={settings.pricesIncludeTax} onChange={(v) => onChange("pricesIncludeTax", v)} label="Prices include tax" />
        </SettingLine>
      </GenericSettingsCard>
      <GenericSettingsCard title="Tax Documents">
        <SettingLine title="GST Invoice" description="Generate tax invoices for completed orders">
          <Toggle checked={settings.gstInvoice} onChange={(v) => onChange("gstInvoice", v)} label="GST Invoice" />
        </SettingLine>
        <SettingLine title="HSN / SAC Codes" description="Maintain product tax classification">
          <button className="compact-button">Manage</button>
        </SettingLine>
      </GenericSettingsCard>
    </div>
  );
}

function NotificationsTab({ settings, onChange }) {
  return (
    <div className="tab-panel-grid">
      <GenericSettingsCard title="Customer Notifications">
        <SettingLine title="Order Updates" description="Order confirmation, shipment and delivery emails">
          <Toggle checked={settings.orderEmail} onChange={(v) => onChange("orderEmail", v)} label="Order updates" />
        </SettingLine>
        <SettingLine title="Promotional Emails" description="Marketing and campaign emails">
          <Toggle checked={settings.promoEmail} onChange={(v) => onChange("promoEmail", v)} label="Promotional emails" />
        </SettingLine>
      </GenericSettingsCard>
      <GenericSettingsCard title="Admin Notifications">
        <SettingLine title="Push Notifications" description="Operational alerts in the admin console">
          <Toggle checked={settings.pushNotifications} onChange={(v) => onChange("pushNotifications", v)} label="Push notifications" />
        </SettingLine>
        <SettingLine title="Notification Templates" description="Manage email and SMS templates">
          <button className="compact-button">Manage</button>
        </SettingLine>
      </GenericSettingsCard>
    </div>
  );
}

function UsersTab({ settings, onChange }) {
  return (
    <div className="tab-panel-grid">
      <GenericSettingsCard title="Users & Roles">
        <SettingLine title="Admin Users" description="18 administrators and staff accounts">
          <button className="compact-button">Manage Users</button>
        </SettingLine>
        <SettingLine title="Roles & Permissions" description="Control access by role">
          <button className="compact-button">Manage Roles</button>
        </SettingLine>
      </GenericSettingsCard>
      <GenericSettingsCard title="Access Policy">
        <SettingLine title="Allow Admin Invitations" description="Permit authorized admins to invite staff">
          <Toggle checked={settings.allowAdminInvites} onChange={(v) => onChange("allowAdminInvites", v)} label="Admin invitations" />
        </SettingLine>
        <SettingLine title="Default New User Role" description="Applied to newly invited staff">
          <strong>Viewer</strong>
        </SettingLine>
      </GenericSettingsCard>
    </div>
  );
}

function SecurityTab({ settings, onChange }) {
  return (
    <div className="tab-panel-grid">
      <GenericSettingsCard title="Authentication">
        <SettingLine title="Two-factor Authentication" description="Require an additional verification step">
          <Toggle checked={settings.twoFactor} onChange={(v) => onChange("twoFactor", v)} label="Two factor authentication" />
        </SettingLine>
        <SettingLine title="Session Timeout" description="Automatically sign out inactive admin sessions">
          <MasterDropdown
            options={["15 minutes", "30 minutes", "1 hour"]}
            value={settings.sessionTimeout}
            onChange={(val) => onChange("sessionTimeout", val)}
            rightAlign
          />
        </SettingLine>
      </GenericSettingsCard>
      <GenericSettingsCard title="Security Activity">
        <SettingLine title="Login History" description="Review recent login attempts">
          <button className="compact-button">View History</button>
        </SettingLine>
        <SettingLine title="Password Policy" description="Minimum 12 characters with mixed character types">
          <span className="active-pill">Strong</span>
        </SettingLine>
      </GenericSettingsCard>
    </div>
  );
}

function IntegrationsTab({ settings, onChange }) {
  return (
    <div className="tab-panel-grid">
      <GenericSettingsCard title="Connected Integrations">
        <SettingLine title="Razorpay" description="Payments gateway integration">
          <Toggle checked={settings.razorpayIntegration} onChange={(v) => onChange("razorpayIntegration", v)} label="Razorpay integration" />
        </SettingLine>
        <SettingLine title="Shiprocket" description="Shipping & logistics partner">
          <Toggle checked={settings.shiprocketIntegration} onChange={(v) => onChange("shiprocketIntegration", v)} label="Shiprocket integration" />
        </SettingLine>
        <SettingLine title="Google Analytics" description="Storefront analytics & tracking">
          <Toggle checked={settings.gaIntegration} onChange={(v) => onChange("gaIntegration", v)} label="Google Analytics integration" />
        </SettingLine>
      </GenericSettingsCard>
      <GenericSettingsCard title="Integration Management">
        <SettingLine title="Connection Health" description="All critical integrations are operational">
          <span className="active-pill">Healthy</span>
        </SettingLine>
        <SettingLine title="Manage Integrations" description="Add, remove or reconfigure services">
          <button className="compact-button">Open</button>
        </SettingLine>
      </GenericSettingsCard>
    </div>
  );
}

function ApiTab({ onToast }) {
  return (
    <div className="tab-panel-grid">
      <GenericSettingsCard title="API Access">
        <SettingLine title="Production API Key" description="Use only in secure server environments">
          <div className="api-key">
            <code>amh_live_••••••••••••42</code>
            <button className="compact-button" onClick={() => onToast("API key copied to clipboard.")}>
              Copy
            </button>
          </div>
        </SettingLine>
        <SettingLine title="Rotate API Key" description="Invalidates the current key immediately">
          <button className="compact-button">Rotate</button>
        </SettingLine>
      </GenericSettingsCard>
      <GenericSettingsCard title="Webhooks">
        <SettingLine title="Order Events" description="POST /webhooks/orders">
          <span className="active-pill">Active</span>
        </SettingLine>
        <SettingLine title="Inventory Events" description="POST /webhooks/inventory">
          <span className="active-pill">Active</span>
        </SettingLine>
      </GenericSettingsCard>
    </div>
  );
}

function SettingsContent({ active, settings, onChange, onToast, ...generalProps }) {
  if (active === "general") return <GeneralSettings settings={settings} onChange={onChange} onQuickAction={generalProps.onQuickAction} {...generalProps} />;
  if (active === "store") return <StoreTab settings={settings} onChange={onChange} />;
  if (active === "payments") return <PaymentsTab settings={settings} onChange={onChange} />;
  if (active === "shipping") return <ShippingTab settings={settings} onChange={onChange} />;
  if (active === "tax") return <TaxTab settings={settings} onChange={onChange} />;
  if (active === "notifications") return <NotificationsTab settings={settings} onChange={onChange} />;
  if (active === "users") return <UsersTab settings={settings} onChange={onChange} />;
  if (active === "security") return <SecurityTab settings={settings} onChange={onChange} />;
  if (active === "integrations") return <IntegrationsTab settings={settings} onChange={onChange} />;
  return <ApiTab onToast={onToast} />;
}

function ActionModal({ action, onClose, onConfirm }) {
  const content = {
    cache: {
      title: "Clear Cache",
      text: "This clears temporary storefront and admin cache. Product, order, customer and configuration data will not be deleted.",
      confirm: "Clear Cache",
      tone: "danger",
    },
    backup: {
      title: "Create Store Backup",
      text: "A new backup will be prepared using the current store configuration and application data.",
      confirm: "Create Backup",
      tone: "primary",
    },
    logs: {
      title: "System Logs",
      text: "No critical errors detected. Last health check completed successfully. All services are running optimally.",
      confirm: "Close",
      tone: "primary",
    },
  }[action];

  if (!content) return null;

  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="modal"
        initial={{ y: 18, scale: 0.98 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: 18, scale: 0.98 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h2>{content.title}</h2>
          <button className="modal-close" type="button" onClick={onClose} title="Close" aria-label="Close">
            <FiX size={16} />
          </button>
        </div>
        <p className="modal-copy">{content.text}</p>
        {action === "cache" && (
          <div style={{ background: "#fff5e6", border: "1px solid #fed7aa", borderRadius: 8, padding: "10px 12px", display: "flex", gap: 10, alignItems: "flex-start", marginTop: 10 }}>
            <FiAlertTriangle style={{ color: "#d97706", fontSize: 18, flexShrink: 0, marginTop: 2 }} />
            <div style={{ fontSize: 11.5, color: "#92400e", lineHeight: 1.4 }}>
              <strong>Caution:</strong> Clearing the system cache may temporarily slow down page load times for shoppers while assets rebuild.
            </div>
          </div>
        )}
        <div className="modal-actions">
          {action !== "logs" && (
            <button className="secondary-button" type="button" onClick={onClose}>
              Cancel
            </button>
          )}
          <button
            className={content.tone === "danger" ? "danger-button" : "primary-button"}
            type="button"
            onClick={() => onConfirm(action)}
          >
            {action === "cache" ? <FiTrash2 /> : action === "backup" ? <FiDatabase /> : <FiCheck />}
            {content.confirm}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

function SaveSummaryModal({ changes, onClose, onConfirm, onRollback, isNavigating }) {
  const riskyKeys = ["maintenanceMode", "storeMode", "publicVisibility", "twoFactor", "currency", "defaultTaxRate", "autoRefunds", "sessionTimeout"];
  const hasRiskyChanges = changes.some(c => riskyKeys.includes(c.key));

  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="modal save-summary-modal"
        initial={{ y: 18, scale: 0.98 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: 18, scale: 0.98 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <div>
            <h2>{isNavigating ? "Unsaved Changes Warning" : "Review Changed Settings"}</h2>
            <p className="summary-subtitle">
              {isNavigating
                ? `You have ${changes.length} unsaved ${changes.length === 1 ? "change" : "changes"}. Save or roll back before leaving.`
                : `You have modified ${changes.length} ${changes.length === 1 ? "setting" : "settings"}. Review before saving.`}
            </p>
          </div>
          <button className="modal-close" type="button" onClick={onClose} title="Close" aria-label="Close">
            <FiX size={16} />
          </button>
        </div>

        {hasRiskyChanges && (
          <div style={{ background: "#fff5e6", border: "1px solid #fed7aa", borderRadius: 8, padding: "10px 12px", display: "flex", gap: 10, alignItems: "flex-start", marginTop: 12 }}>
            <FiAlertTriangle style={{ color: "#d97706", fontSize: 18, flexShrink: 0, marginTop: 2 }} />
            <div style={{ fontSize: 11.5, color: "#92400e", lineHeight: 1.4 }}>
              <strong>Caution:</strong> One or more modified settings affect live store visibility, checkout flow, or security (e.g. Maintenance Mode, Public Visibility, Currency, Tax, or 2FA). Please verify carefully before saving.
            </div>
          </div>
        )}

        <div className="changes-list">
          {changes.map((item) => (
            <div className="change-row" key={item.key}>
              <div className="change-label">{item.label}</div>
              <div className="change-comparison">
                <span className="old-val">{item.oldValue}</span>
                <span className="arrow-sep">→</span>
                <span className="new-val">{item.newValue}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="modal-actions" style={{ justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
          <button className="secondary-button" type="button" onClick={onClose}>
            Cancel
          </button>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <button className="danger-button" type="button" onClick={onRollback}>
              <FiRotateCcw /> Roll Back Changes
            </button>
            <button className="save-button" type="button" onClick={onConfirm}>
              <FiCheck /> Save Changes
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function SettingsManagement() {
  const navigate = useNavigate();
  const [desktopSidebarOpen, setDesktopSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("general");
  const [settings, setSettings] = useState(initialSettings);
  const [savedSettings, setSavedSettings] = useState(initialSettings);
  const [logoPreview, setLogoPreview] = useState("");
  const [logoName, setLogoName] = useState("");
  const [faviconPreview, setFaviconPreview] = useState("");
  const [faviconName, setFaviconName] = useState("");
  const [savedLogo, setSavedLogo] = useState("");
  const [savedFavicon, setSavedFavicon] = useState("");
  const [actionModal, setActionModal] = useState(null);
  const [showSaveSummaryModal, setShowSaveSummaryModal] = useState(false);
  const [pendingNavigation, setPendingNavigation] = useState(null);
  const [toast, setToast] = useState("");
  const importRef = useRef(null);
  const toastTimerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    };
  }, []);

  const dirty = useMemo(
    () =>
      JSON.stringify(settings) !== JSON.stringify(savedSettings) ||
      logoPreview !== savedLogo ||
      faviconPreview !== savedFavicon,
    [settings, savedSettings, logoPreview, savedLogo, faviconPreview, savedFavicon]
  );

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (dirty) {
        e.preventDefault();
        e.returnValue = "";
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [dirty]);

  const handleToggleMenu = () => {
    if (window.innerWidth <= 980) {
      setMobileMenuOpen(prev => !prev);
    } else {
      setDesktopSidebarOpen(prev => !prev);
    }
  };

  const handleNavigate = (targetPath) => {
    if (targetPath === "/settings") return;
    if (dirty) {
      setPendingNavigation(targetPath);
      setShowSaveSummaryModal(true);
    } else {
      navigate(targetPath);
    }
  };

  const changedFields = useMemo(() => {
    const diffs = [];
    const fieldLabels = {
      storeName: "Store Name",
      supportEmail: "Support Email",
      phone: "Phone Number",
      businessType: "Business Type",
      currency: "Currency",
      timezone: "Timezone",
      dateFormat: "Date Format",
      timeFormat: "Time Format",
      description: "Store Description",
      storeMode: "Store Mode",
      maintenanceMode: "Maintenance Mode",
      publicVisibility: "Public Visibility",
      productReviews: "Product Reviews",
      guestCheckout: "Guest Checkout",
      wishlist: "Wishlist",
      defaultLanguage: "Default Language",
      country: "Country / Region",
      defaultTaxRate: "Default GST Rate (%)",
      shippingRate: "Standard Shipping Rate",
      freeShippingThreshold: "Free Shipping Threshold",
      orderEmail: "Order Updates Email",
      promoEmail: "Promotional Emails",
      pushNotifications: "Push Notifications",
      twoFactor: "Two-Factor Authentication",
      sessionTimeout: "Session Timeout",
      allowAdminInvites: "Allow Admin Invitations",
      razorpayEnabled: "Razorpay Payment",
      codEnabled: "Cash on Delivery",
      stripeEnabled: "Stripe Payment",
      autoRefunds: "Automatic Refunds",
      shiprocketEnabled: "Shiprocket Partner",
      delhiveryEnabled: "Delhivery Partner",
      pricesIncludeTax: "Prices Include Tax",
      gstInvoice: "GST Invoice",
      razorpayIntegration: "Razorpay Integration",
      shiprocketIntegration: "Shiprocket Integration",
      gaIntegration: "Google Analytics Integration",
    };

    const formatVal = (val) => {
      if (val === true) return "Yes (Enabled)";
      if (val === false) return "No (Disabled)";
      if (val === "" || val === null || val === undefined) return "(Empty)";
      return String(val);
    };

    Object.keys(settings).forEach((key) => {
      if (settings[key] !== savedSettings[key]) {
        diffs.push({
          key,
          label: fieldLabels[key] || key,
          oldValue: formatVal(savedSettings[key]),
          newValue: formatVal(settings[key]),
        });
      }
    });

    if (logoPreview !== savedLogo) {
      diffs.push({
        key: "logo",
        label: "Store Logo",
        oldValue: savedLogo ? "Previous Logo" : "Default Logo",
        newValue: logoName ? logoName : "New Uploaded Logo",
      });
    }

    if (faviconPreview !== savedFavicon) {
      diffs.push({
        key: "favicon",
        label: "Favicon",
        oldValue: savedFavicon ? "Previous Favicon" : "Default Favicon",
        newValue: faviconName ? faviconName : "New Uploaded Favicon",
      });
    }

    return diffs;
  }, [settings, savedSettings, logoPreview, savedLogo, faviconPreview, savedFavicon, logoName, faviconName]);

  const showToast = (message) => {
    setToast(message);
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    toastTimerRef.current = setTimeout(() => setToast(""), 2300);
  };

  const updateSetting = (key, value) => setSettings((current) => ({ ...current, [key]: value }));

  const readImage = (file, setPreview, setName) => {
    if (!file) return;
    if (file.size > 3 * 1024 * 1024) {
      showToast("Please choose an image smaller than 3 MB.");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => setPreview(String(reader.result || ""));
    reader.readAsDataURL(file);
    setName(file.name);
  };

  const saveSettings = () => {
    if (!dirty) {
      showToast("All settings are already saved.");
      return;
    }
    setShowSaveSummaryModal(true);
  };

  const confirmSaveSettings = () => {
    const count = changedFields.length;
    setSavedSettings(settings);
    setSavedLogo(logoPreview);
    setSavedFavicon(faviconPreview);
    setShowSaveSummaryModal(false);
    showToast(`${count} ${count === 1 ? "setting" : "settings"} saved successfully.`);
    if (pendingNavigation) {
      const dest = pendingNavigation;
      setPendingNavigation(null);
      navigate(dest);
    }
  };

  const rollbackSettings = () => {
    setSettings(savedSettings);
    setLogoPreview(savedLogo);
    setFaviconPreview(savedFavicon);
    setShowSaveSummaryModal(false);
    showToast("Changes rolled back to previous state.");
    if (pendingNavigation) {
      const dest = pendingNavigation;
      setPendingNavigation(null);
      navigate(dest);
    }
  };

  const exportSettings = () => {
    const payload = { version: 1, exportedAt: new Date().toISOString(), settings };
    const url = URL.createObjectURL(new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = "amihive-settings.json";
    a.click();
    URL.revokeObjectURL(url);
    showToast("Settings exported.");
  };

  const importSettings = (file) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(String(reader.result || "{}"));
        if (!parsed.settings || typeof parsed.settings !== "object") throw new Error("Invalid file");
        setSettings((current) => ({ ...current, ...parsed.settings }));
        showToast("Settings imported. Review and save changes.");
      } catch {
        showToast("Invalid settings file.");
      }
    };
    reader.readAsText(file);
  };

  const handleQuickAction = (action) => {
    if (action === "export") {
      exportSettings();
      return;
    }
    if (action === "import") {
      importRef.current?.click();
      return;
    }
    setActionModal(action);
  };

  const confirmAction = (action) => {
    if (action === "cache") showToast("Cache cleared successfully.");
    if (action === "backup") showToast("Backup created successfully.");
    setActionModal(null);
  };

  return (
    <div className="settings-scope">
      <style>{styles}</style>
      <div className="admin-shell">
        {desktopSidebarOpen && (
          <div className="desktop-sidebar-wrapper">
            <AdminSidebar activePage="Settings" onClose={() => setDesktopSidebarOpen(false)} onNavigate={handleNavigate} />
          </div>
        )}
        <AnimatePresence>
          {mobileMenuOpen && (
            <AdminSidebar activePage="Settings" mobile onClose={() => setMobileMenuOpen(false)} onNavigate={handleNavigate} />
          )}
        </AnimatePresence>

        <main className="dashboard-main">
          <AdminTopbar onToggleSidebar={handleToggleMenu} desktopSidebarOpen={desktopSidebarOpen} />

          <div className="page">
            <div className="page-header-card">
              <PageHeader dirty={dirty} onSave={saveSettings} />
              <SettingsTabs active={activeTab} onChange={setActiveTab} />
            </div>
            <SettingsContent
              active={activeTab}
              settings={settings}
              onChange={updateSetting}
              logo={logoPreview}
              logoName={logoName}
              onLogoUpload={(file) => readImage(file, setLogoPreview, setLogoName)}
              favicon={faviconPreview}
              faviconName={faviconName}
              onFaviconUpload={(file) => readImage(file, setFaviconPreview, setFaviconName)}
              onQuickAction={handleQuickAction}
              onToast={showToast}
            />
          </div>
        </main>
      </div>

      <input
        ref={importRef}
        type="file"
        accept="application/json,.json"
        hidden
        onChange={(event) => {
          importSettings(event.target.files?.[0] || null);
          event.target.value = "";
        }}
      />

      <AnimatePresence>
        {showSaveSummaryModal && (
          <SaveSummaryModal
            changes={changedFields}
            isNavigating={Boolean(pendingNavigation)}
            onClose={() => {
              setShowSaveSummaryModal(false);
              setPendingNavigation(null);
            }}
            onConfirm={confirmSaveSettings}
            onRollback={rollbackSettings}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {actionModal && <ActionModal action={actionModal} onClose={() => setActionModal(null)} onConfirm={confirmAction} />}
      </AnimatePresence>

      <AnimatePresence>
        {toast && (
          <motion.div className="toast" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 12 }}>
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
