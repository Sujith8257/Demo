import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AdminSidebar from "../../../components/Admin/AdminSidebar";
import AdminTopbar from "../../../components/Admin/AdminTopbar";
import KpiCard from "../../../components/Admin/KpiCard";
import MasterDropdown from "../../../components/Admin/MasterDropdown";
import IntegrationDetailsDrawer from "../../../components/Admin/IntegrationDetailsDrawer";
import AnimatedCheckbox from "../../../components/Admin/AnimatedCheckbox";
import MasterDatePicker from "../../../components/Admin/MasterDatePicker";
import MasterPieChart from "../../../components/Admin/MasterPieChart";
import MobileTableCards, { MobileTableCard } from "../../../components/Admin/MobileTableCards";
import {
  FiActivity,
  FiAlertCircle,
  FiCalendar,
  FiCheck,
  FiChevronLeft,
  FiChevronRight,
  FiClock,
  FiCopy,
  FiDownload,
  FiEdit2,
  FiEye,
  FiFilter,
  FiPauseCircle,
  FiPercent,
  FiPlus,
  FiRefreshCw,
  FiSave,
  FiSearch,
  FiTag,
  FiTrash2,
  FiTrendingUp,
  FiUsers,
  FiX,
} from "react-icons/fi";

const css = String.raw`
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap");

.coupons-scope {
  --bg: #faf8ff;
  --card: #ffffff;
  --text: #10172f;
  --muted: #667085;
  --border: #dfe4ef;
  --line: #edf0f6;
  --orange: #fd661d;
  --orange-dark: #e05512;
  --blue: #0056c3;
  --green: #16a34a;
  --red: #e5484d;
  --purple: #7c4dff;
  --shadow: 0 5px 18px rgba(20, 32, 70, 0.055);
  --radius: 12px;

  min-height: 100vh;
  max-width: 100vw;
  overflow-x: clip;
  background: var(--bg);
  color: var(--text);
  font-family: 'Manrope', system-ui, sans-serif;
}

.coupons-scope * { box-sizing: border-box; }
.coupons-scope button, .coupons-scope input, .coupons-scope select { font: inherit; }
.coupons-scope button { cursor: pointer; }

.coupons-scope .admin-shell {
  display: flex;
  min-height: 100vh;
  max-width: 100vw;
  background: var(--bg);
}

.coupons-scope .desktop-sidebar-wrapper {
  width: 256px;
  min-width: 256px;
  flex-shrink: 0;
  transition: all .25s ease;
}
.coupons-scope .desktop-sidebar-wrapper.is-closed {
  display: none;
}

.coupons-scope .dashboard-main {
  flex: 1;
  min-width: 0;
}

.coupons-scope .page {
  padding: 22px 28px 36px;
  max-width: 100%;
  box-sizing: border-box;
}

.coupons-scope .page-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 14px;
  margin-bottom: 18px;
}

.coupons-scope .page-head h1 {
  font-size: 28px;
  letter-spacing: -.02em;
  font-weight: 800;
  margin: 0;
  color: #10172f;
}

.coupons-scope .page-head p {
  font-size: 12px;
  margin: 5px 0 0;
  color: var(--muted);
  font-weight: 500;
}

.coupons-scope .head-actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

/* Primary Action Buttons (#FD661D) */
.coupons-scope .primary-btn {
  height: 38px;
  padding: 0 16px;
  border: 0;
  border-radius: 8px;
  background: var(--orange);
  color: #ffffff;
  font-size: 12px;
  font-weight: 800;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px rgba(253, 102, 29, 0.22);
}
.coupons-scope .primary-btn:hover {
  background: var(--orange-dark);
  transform: translateY(-1px);
  box-shadow: 0 6px 16px rgba(253, 102, 29, 0.32);
}

.coupons-scope .kpi-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 12px;
  margin-bottom: 20px;
}

.coupons-scope .grid-layout {
  display: block;
  margin-bottom: 18px;
}
.coupons-scope .bottom-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);
  gap: 14px;
  margin-top: 18px;
}

.coupons-scope .card {
  background: #ffffff;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  overflow: hidden;
}
.coupons-scope .side-panel {
  padding: 16px;
  display: flex;
  flex-direction: column;
}

.coupons-scope .tabs-row {
  height: 48px;
  border-bottom: 1px solid var(--line);
  display: flex;
  align-items: flex-end;
  padding: 0 14px;
  gap: 4px;
  overflow-x: auto;
  scrollbar-width: none;
}
.coupons-scope .tab {
  height: 48px;
  border: 0;
  background: transparent;
  padding: 0 14px;
  color: #47516b;
  font-size: 12px;
  font-weight: 800;
  position: relative;
  white-space: nowrap;
  cursor: pointer;
  transition: color 0.18s ease;
}
.coupons-scope .tab b {
  margin-left: 6px;
  background: #ededf8;
  border-radius: 999px;
  padding: 3px 8px;
  font-size: 10.5px;
  color: #424753;
  transition: all 0.18s ease;
}
.coupons-scope .tab.active {
  color: #0056c3;
}
.coupons-scope .tab.active b {
  background: #e7efff;
  color: #0056c3;
}
.coupons-scope .tab.active:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 8px;
  right: 8px;
  height: 2px;
  background: #0056c3;
}

.coupons-scope .toolbar {
  padding: 12px 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  border-bottom: 1px solid var(--line);
  flex-wrap: wrap;
}
.coupons-scope .search-box {
  height: 38px;
  min-width: 220px;
  flex: 1;
  max-width: 320px;
  border: 1px solid var(--border);
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 11px;
  background: #ffffff;
}
.coupons-scope .search-box input {
  border: 0;
  outline: 0;
  min-width: 0;
  flex: 1;
  font-size: 12px;
  font-weight: 600;
  background: transparent;
}
.coupons-scope .toolbar .spacer { flex: 1; }

.coupons-scope .outline-btn {
  height: 34px;
  border: 1px solid var(--border);
  background: #ffffff;
  border-radius: 8px;
  padding: 0 12px;
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 12px;
  font-weight: 800;
  color: #191b23;
  cursor: pointer;
  transition: all 0.2s ease;
}
.coupons-scope .outline-btn:hover {
  background: #fff5f0;
  border-color: var(--orange);
  color: var(--orange);
  transform: translateY(-1px);
}

.coupons-scope .coupons-split {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  align-items: start;
  margin-bottom: 18px;
  transition: grid-template-columns 0.25s ease;
}
.coupons-scope .coupons-split.has-selected {
  grid-template-columns: minmax(0, 1.62fr) minmax(330px, 0.78fr);
}
.coupons-scope .selection-bar {
  padding: 10px 12px;
  background: #f8f9fc;
  border-bottom: 1px solid #ededf8;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
}
.coupons-scope .selection-bar strong {
  color: #191b23;
  font-weight: 800;
  font-size: 12px;
}
.coupons-scope .selection-bar span {
  color: #424753;
  font-size: 11px;
  font-weight: 500;
}
.coupons-scope .clear-btn {
  border: 0;
  background: transparent;
  color: #0056c3;
  font-size: 11px;
  font-weight: 800;
  cursor: pointer;
  padding: 0;
  transition: color 0.18s ease;
}
.coupons-scope .clear-btn:hover {
  color: #003882;
  text-decoration: underline;
}

/* Master Table Format */
.coupons-scope .table-scroll {
  overflow-x: auto;
  width: 100%;
}
.coupons-scope .coupons-table {
  width: 100%;
  border-collapse: collapse;
  min-width: 1000px;
}
.coupons-scope .coupons-table th {
  height: 44px;
  background: #f3f3fe;
  color: #191b23;
  text-align: left;
  font-size: 12px;
  font-weight: 800;
  border-bottom: 1px solid #ededf8;
  text-transform: uppercase;
  letter-spacing: .04em;
  padding: 0 14px;
  white-space: nowrap;
}
.coupons-scope .coupons-table td {
  height: 62px;
  border-bottom: 1px solid #ededf8;
  font-size: 12.5px;
  font-weight: 500;
  color: #191b23;
  padding: 0 14px;
  white-space: nowrap;
  vertical-align: middle;
}
.coupons-scope .coupons-table td strong {
  color: #191b23;
  font-weight: 500;
  font-size: 13px;
}
.coupons-scope .coupons-table td small {
  color: #191b23;
  font-weight: 500;
  font-size: 11px;
}
.coupons-scope .coupons-table td div {
  font-weight: 500;
}

.coupons-scope .coupon-code {
  min-width: 90px;
  height: 28px;
  padding: 0 10px;
  border: 1px dashed currentColor;
  border-radius: 6px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 11.5px;
  font-weight: 800;
  letter-spacing: .03em;
}
.coupons-scope .code-red { color: #e5484d; background: #fff8f9; }
.coupons-scope .code-blue { color: #0056c3; background: #f8fbff; }
.coupons-scope .code-green { color: #16a34a; background: #f8fffa; }
.coupons-scope .code-orange { color: #fd661d; background: #fffaf6; }
.coupons-scope .code-purple { color: #7c4dff; background: #fbf9ff; }
.coupons-scope .code-cyan { color: #0793b2; background: #f5fdff; }
.coupons-scope .code-yellow { color: #d77a00; background: #fffdf6; }

.coupons-scope .coupon-name strong {
  display: block;
  font-size: 13px;
  font-weight: 500;
  color: #191B23;
}

/* Explicit class scoping to prevent collision with CSS position:fixed */
.coupons-scope .type-badge {
  display: inline-flex !important;
  position: static !important;
  float: none !important;
  align-items: center;
  height: 22px;
  padding: 0 10px;
  border-radius: 999px;
  font-size: 10.5px;
  font-weight: 800;
}
.coupons-scope .type-badge.type-percentage { background: #e7efff; color: #0056c3; }
.coupons-scope .type-badge.type-fixed { background: #fff0e3; color: #fd661d; }
.coupons-scope .type-badge.type-shipping { background: #e3f8e8; color: #14a447; }

.coupons-scope .status-pill {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  height: 22px;
  padding: 0 10px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 800;
  white-space: nowrap;
}
.coupons-scope .status-pill i {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  flex-shrink: 0;
}
.coupons-scope .status-active { background: #e3f8e8; color: #14a447; }
.coupons-scope .status-active i { background: #14a447; }
.coupons-scope .status-scheduled { background: #e7efff; color: #0056c3; }
.coupons-scope .status-scheduled i { background: #0056c3; }
.coupons-scope .status-expired { background: #ffe8e9; color: #e5484d; }
.coupons-scope .status-expired i { background: #e5484d; }
.coupons-scope .status-paused { background: #fff0e3; color: #fd661d; }
.coupons-scope .status-paused i { background: #fd661d; }

.coupons-scope .usage-wrap { min-width: 110px; }
.coupons-scope .usage-value {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 11.5px;
  font-weight: 500;
  color: #191B23;
}
.coupons-scope .usage-value span {
  font-weight: 500;
}
.coupons-scope .usage-track {
  height: 5px;
  margin-top: 5px;
  border-radius: 999px;
  background: #edf0f5;
  overflow: hidden;
}
.coupons-scope .usage-track span {
  display: block;
  height: 100%;
  border-radius: 999px;
  background: var(--orange);
}

.coupons-scope .row-actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
}
.coupons-scope .row-actions button {
  width: 32px;
  height: 32px;
  border: 1px solid var(--border);
  border-radius: 7px;
  background: #ffffff;
  color: #191b23;
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: all 0.2s ease;
}
.coupons-scope .coupons-table tr { transition: background 0.18s ease; }
.coupons-scope .coupons-table tr.selected { background: #f0f5ff; }

.coupons-scope .row-actions button:hover {
  background: #f3f3fe;
  border-color: #0056c3;
  color: #0056c3;
}
.coupons-scope .row-actions button.active-action {
  border-color: #0056c3;
  background: #f3f3fe;
  color: #0056c3;
}
.coupons-scope .row-actions button.delete-btn:hover {
  background: #ffe8e9;
  border-color: #e5484d;
  color: #e5484d;
}

.coupons-scope .footerbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-top: 1px solid #ededf8;
  font-size: 12.5px;
  font-weight: 600;
  color: #191B23;
}
.coupons-scope .pagination {
  display: flex;
  gap: 4px;
}
.coupons-scope .pagination button {
  min-width: 32px;
  height: 32px;
  padding: 0 6px;
  border: 1px solid #c2c6d5;
  background: #ffffff;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.18s ease;
}
.coupons-scope .pagination button.active {
  background: #0056c3;
  color: #ffffff;
  border-color: #0056c3;
}

.coupons-scope *::-webkit-scrollbar,
.modal::-webkit-scrollbar,
.modal *::-webkit-scrollbar {
  display: none !important;
  width: 0 !important;
  height: 0 !important;
}
.coupons-scope *,
.modal,
.modal * {
  scrollbar-width: none !important;
  -ms-overflow-style: none !important;
}

.coupons-scope .side-cards {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.coupons-scope .side-card-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0 12px;
}
.coupons-scope .side-card-head h3 {
  margin: 0;
  font-size: 14px;
  font-weight: 800;
  color: #10172f;
}
.coupons-scope .side-card-head button {
  border: 0;
  background: transparent;
  color: #0056c3;
  font-size: 11.5px;
  font-weight: 800;
  padding: 0;
  cursor: pointer;
  transition: opacity 0.18s ease;
}
.coupons-scope .side-card-head button:hover {
  opacity: 0.8;
  text-decoration: underline;
}

.coupons-scope .donut-layout {
  display: flex;
  align-items: center;
  gap: 16px;
  margin: auto 0;
  padding: 10px 0;
  flex: 1;
}
.coupons-scope .donut-chart {
  width: 116px;
  height: 116px;
  border-radius: 50%;
  background: conic-gradient(#7c4dff 0% 64%, #fd661d 64% 86%, #16a34a 86% 100%);
  position: relative;
  display: grid;
  place-items: center;
  flex: 0 0 116px;
}
.coupons-scope .donut-chart:after {
  content: "";
  position: absolute;
  inset: 18px;
  border-radius: 50%;
  background: #ffffff;
}

.coupons-scope .donut-center {
  position: relative;
  z-index: 2;
  text-align: center;
}
.coupons-scope .donut-center span {
  display: block;
  font-size: 8px;
  font-weight: 800;
  color: #10172f;
  text-transform: uppercase;
  letter-spacing: .03em;
  white-space: nowrap;
}
.coupons-scope .donut-center strong {
  display: block;
  font-size: 13px;
  font-weight: 800;
  color: #10172f;
  margin-top: 1px;
  white-space: nowrap;
}

.coupons-scope .legend-grid {
  display: grid;
  gap: 8px;
  flex: 1;
  min-width: 0;
}
.coupons-scope .legend-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  font-size: 12px;
}
.coupons-scope .legend-row-left {
  display: flex;
  align-items: center;
  gap: 8px;
}
.coupons-scope .legend-row i {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.coupons-scope .legend-row span {
  color: #10172f;
  font-weight: 700;
  font-size: 12px;
  white-space: nowrap;
}
.coupons-scope .legend-row strong {
  color: #10172f;
  font-weight: 500;
  font-size: 11.5px;
  text-align: right;
  white-space: nowrap;
}

.coupons-scope .performing-list {
  display: grid;
  gap: 8px;
  margin-top: 6px;
}
.coupons-scope .performing-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  border: 1px solid #ededf8;
  border-radius: 9px;
  background: #ffffff;
  transition: all 0.18s ease;
  cursor: pointer;
}
.coupons-scope .performing-item:hover {
  background: #f8faff;
  border-color: #c2c6d5;
  box-shadow: 0 2px 6px rgba(0,0,0,.04);
}
.coupons-scope .rank-badge {
  width: 28px;
  height: 28px;
  border-radius: 6px;
  display: grid;
  place-items: center;
  font-size: 12px;
  font-weight: 800;
  flex-shrink: 0;
  border: 1px solid #dfe4ef;
  background: #f8faff;
  color: #0056c3;
}
.coupons-scope .rank-badge.one { background: #f8faff; color: #0056c3; border-color: #dfe4ef; }
.coupons-scope .rank-badge.two { background: #f8faff; color: #0056c3; border-color: #dfe4ef; }
.coupons-scope .rank-badge.three { background: #f8faff; color: #0056c3; border-color: #dfe4ef; }

.coupons-scope .performing-info { flex: 1; min-width: 0; }
.coupons-scope .performing-info strong { display: block; font-size: 12px; font-weight: 700; color: #10172f; }
.coupons-scope .performing-info small { display: block; font-size: 10.5px; color: #667085; margin-top: 1px; }
.coupons-scope .performing-right { text-align: right; margin-left: auto; flex-shrink: 0; }
.coupons-scope .performing-right strong { display: block; font-size: 12px; font-weight: 700; color: #10172f; }
.coupons-scope .performing-right small { display: block; font-size: 10px; color: #667085; margin-top: 1px; }

.coupons-scope .activity-list { display: grid; gap: 8px; margin-top: 6px; }
.coupons-scope .activity-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  border: 1px solid #ededf8;
  border-radius: 9px;
  background: #ffffff;
  transition: all 0.18s ease;
  cursor: pointer;
}
.coupons-scope .activity-item:hover {
  background: #f8faff;
  border-color: #c2c6d5;
  box-shadow: 0 2px 6px rgba(0,0,0,.04);
}
.coupons-scope .activity-ico {
  width: 28px;
  height: 28px;
  border-radius: 6px;
  display: grid;
  place-items: center;
  font-size: 13px;
  flex-shrink: 0;
}
.coupons-scope .activity-ico.orange { background: #fff0e3; color: #fd661d; border: 1px solid #ffe3cb; }
.coupons-scope .activity-ico.red { background: #ffe8e9; color: #e5484d; border: 1px solid #ffd4d6; }
.coupons-scope .activity-ico.blue { background: #e7efff; color: #0056c3; border: 1px solid #d2e3ff; }
.coupons-scope .activity-ico.cyan { background: #e5f8fb; color: #0793b2; border: 1px solid #c9eff5; }

.coupons-scope .activity-text { flex: 1; min-width: 0; }
.coupons-scope .activity-text strong { display: block; font-size: 12px; font-weight: 700; color: #10172f; }
.coupons-scope .activity-text time { display: block; font-size: 10.5px; color: #667085; margin-top: 1px; }

/* Overlay & Drawer */
.coupons-scope .drawer-overlay {
  position: fixed;
  inset: 0;
  background: rgba(25, 27, 35, 0.55);
  backdrop-filter: blur(4px);
  z-index: 99;
}
.coupons-scope .drawer {
  position: absolute;
  right: 0;
  top: 0;
  width: min(540px, 100%);
  height: 100%;
  background: #ffffff;
  overflow-y: auto;
  padding: 24px;
  box-shadow: -8px 0 32px rgba(0, 0, 0, 0.15);
}
.coupons-scope .drawer-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 16px;
  border-bottom: 1px solid #ededf8;
}
.coupons-scope .drawer-head small {
  display: block;
  color: #191b23;
  font-weight: 800;
  font-size: 11.5px;
  letter-spacing: .04em;
}
.coupons-scope .drawer-head h2 {
  margin: 4px 0 0;
  font-size: 24px;
  font-weight: 500;
  color: #424753;
}
.coupons-scope .close-btn {
  width: 32px;
  height: 32px;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: #ffffff;
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: all 0.2s ease;
}
.coupons-scope .close-btn:hover,
.coupons-scope .close-btn:active,
.coupons-scope .close-btn:focus {
  background: #eff6ff;
  border-color: #93c5fd;
  color: #0056c3;
  transform: scale(1.06);
}

.coupons-scope .drawer-section {
  margin-top: 22px;
}
.coupons-scope .drawer-section h3 {
  margin: 0 0 12px;
  font-size: 14.5px;
  font-weight: 800;
  color: #191b23;
}
.coupons-scope .meta-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}
.coupons-scope .meta-box {
  padding: 14px;
  border: 1px solid #ededf8;
  border-radius: 10px;
  background: #f8f9fc;
}
.coupons-scope .meta-box span {
  font-size: 12px;
  color: #191b23;
  font-weight: 800;
  display: block;
}
.coupons-scope .meta-box strong {
  font-size: 13px;
  font-weight: 500;
  color: #424753;
  display: block;
  margin-top: 4px;
}

.coupons-scope .drawer-footer {
  position: sticky;
  bottom: 0;
  display: flex;
  gap: 10px;
  padding-top: 16px;
  margin-top: 24px;
  background: #ffffff;
  border-top: 1px solid #ededf8;
}

/* Action Buttons Styling (#FD661D) */
.coupons-scope .action-btn {
  height: 38px;
  padding: 0 14px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  cursor: pointer;
  flex: 1;
  transition: all 0.2s ease;
}
.coupons-scope .action-btn.primary {
  border: 0;
  background: var(--orange);
  color: #ffffff;
  box-shadow: 0 4px 12px rgba(253, 102, 29, 0.22);
}
.coupons-scope .action-btn.primary:hover {
  background: var(--orange-dark);
  transform: translateY(-1px);
  box-shadow: 0 6px 16px rgba(253, 102, 29, 0.32);
}
.coupons-scope .action-btn.secondary {
  border: 1px solid var(--border);
  background: #ffffff;
  color: #10172f;
}
.coupons-scope .action-btn.secondary:hover {
  background: #fff5f0;
  border-color: var(--orange);
  color: var(--orange);
  transform: translateY(-1px);
}

.coupons-scope .danger-confirm-btn {
  border: 0 !important;
  background: #e5484d !important;
  color: #ffffff !important;
  box-shadow: 0 4px 12px rgba(229, 72, 77, 0.25) !important;
  transition: all 0.2s ease !important;
}
.coupons-scope .danger-confirm-btn:hover {
  background: #c53030 !important;
  transform: translateY(-1px) !important;
  box-shadow: 0 6px 16px rgba(229, 72, 77, 0.35) !important;
}

.coupons-scope .cancel-white-btn {
  background: #ffffff !important;
  color: #10172f !important;
  border: 1px solid #dfe4ef !important;
  transition: all 0.2s ease !important;
}
.coupons-scope .cancel-white-btn:hover {
  background: #f8f9fc !important;
  border-color: #10172f !important;
  color: #10172f !important;
  transform: translateY(-1px) !important;
}

.coupons-scope .modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(25, 27, 35, 0.55);
  backdrop-filter: blur(4px);
  z-index: 110;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  padding: 16px;
}
.coupons-scope .modal {
  width: min(560px, 100%);
  background: #ffffff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
  margin: auto !important;
}
.coupons-scope .modal-responsive {
  width: min(680px, 95%);
  background: #ffffff;
  border-radius: 12px;
  padding: 22px 24px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  max-height: 86vh;
  margin: auto !important;
}
.coupons-scope .modal-metrics-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin: 14px 0 16px;
}
.coupons-scope .modal-metric-box {
  background: #f8faff;
  border: 1px solid #ededf8;
  border-radius: 9px;
  padding: 10px 14px;
}
.coupons-scope .modal-metric-box span {
  font-size: 10.5px;
  color: #667085;
  font-weight: 700;
  text-transform: uppercase;
  display: block;
}
.coupons-scope .modal-metric-box strong {
  display: block;
  font-size: 16px;
  color: #10172f;
  margin-top: 3px;
  font-weight: 800;
}
.coupons-scope .modal-scroll-list {
  flex: 1;
  overflow-y: auto;
  display: grid;
  gap: 10px;
  padding-right: 4px;
  max-height: 360px;
}
.coupons-scope .modal-footer-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 18px;
  padding-top: 14px;
  border-top: 1px solid #ededf8;
  gap: 10px;
}
.coupons-scope .modal-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--line);
}
.coupons-scope .modal-head h2 { margin: 0; font-size: 18px; font-weight: 800; color: #10172f; }
.coupons-scope .form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-top: 16px;
}
.coupons-scope .form-group { display: flex; flex-direction: column; gap: 6px; }
.coupons-scope .coupons-table th:first-child, .coupons-scope .coupons-table td:first-child { width: 48px; padding-left: 18px; padding-right: 8px; text-align: center; border-top-left-radius: 10px; }
.coupons-scope .coupons-table th:last-child, .coupons-scope .coupons-table td:last-child { width: 130px; padding: 0 14px; text-align: center; border-top-right-radius: 10px; }
.coupons-scope .form-group.full { grid-column: 1 / -1; }
.coupons-scope .form-group label { font-size: 11.5px; font-weight: 700; color: #10172f; }
.coupons-scope .form-group input, .coupons-scope .form-group select, .coupons-scope .form-group textarea {
  height: 38px;
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 0 12px;
  font-size: 12px;
  color: #10172f;
  outline: 0;
  transition: border-color 0.18s ease;
}
.coupons-scope .form-group input:focus, .coupons-scope .form-group select:focus, .coupons-scope .form-group textarea:focus {
  border-color: var(--orange);
}
.coupons-scope .form-group textarea {
  height: 80px;
  padding: 8px 12px;
  resize: vertical;
}
.coupons-scope .form-group .master-dropdown {
  width: 100%;
}
.coupons-scope .form-group .master-dropdown-trigger {
  width: 100%;
  height: 38px;
  justify-content: space-between;
  border-radius: 8px;
  border: 1px solid var(--border);
  background-color: #ffffff;
  font-weight: 600;
}
.coupons-scope .form-group .master-dropdown-trigger:hover,
.coupons-scope .form-group .master-dropdown-trigger.open {
  border-color: var(--orange);
}
.coupons-scope .form-group .master-dropdown-menu {
  width: 100%;
  min-width: 100%;
}

.coupons-scope .toast {
  position: fixed;
  right: 20px;
  bottom: 20px;
  background: #10172f;
  color: #ffffff;
  padding: 12px 18px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 700;
  z-index: 130;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

@media (max-width: 1200px) {
  .coupons-scope .kpi-grid { grid-template-columns: repeat(3, 1fr) !important; }
  .coupons-scope .bottom-grid { grid-template-columns: 1fr !important; }
}
@media (max-width: 1049px) {
  .coupons-scope .desktop-sidebar-wrapper { display: none !important; }
  .coupons-scope .page { padding: 16px 14px 28px !important; }
}
@media (max-width: 768px) {
  .coupons-scope { max-width: 100vw; overflow-x: clip; }
  .coupons-scope .page { padding: 14px 12px 28px !important; max-width: 100vw; overflow-x: clip; box-sizing: border-box; }
  .coupons-scope .page-head {
    flex-direction: column !important;
    align-items: stretch !important;
    gap: 10px !important;
    margin-bottom: 16px !important;
  }
  .coupons-scope .page-head h1 { font-size: 20px !important; }
  .coupons-scope .page-head p { font-size: 12px !important; line-height: 1.4 !important; }
  .coupons-scope .head-actions {
    display: grid !important;
    grid-template-columns: 1fr 1fr !important;
    gap: 8px !important;
    width: 100% !important;
  }
  .coupons-scope .primary-btn,
  .coupons-scope .head-actions .outline-btn {
    height: 38px !important;
    padding: 0 10px !important;
    font-size: 12px !important;
    justify-content: center !important;
    width: 100% !important;
  }
  .coupons-scope .kpi-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    gap: 8px !important;
    margin-bottom: 14px !important;
  }
  .coupons-scope .toolbar {
    display: grid !important;
    grid-template-columns: 1fr 1fr !important;
    gap: 8px !important;
    padding: 10px !important;
  }
  .coupons-scope .search-box {
    grid-column: 1 / -1 !important;
    max-width: 100% !important;
    width: 100% !important;
    flex: 1 1 100% !important;
  }
  .coupons-scope .toolbar .master-dropdown {
    width: 100% !important;
  }
  .coupons-scope .toolbar .outline-btn {
    width: 100% !important;
    justify-content: center !important;
  }
  .coupons-scope .toolbar .spacer {
    display: none !important;
  }
  .coupons-scope .selection-bar {
    flex-wrap: wrap !important;
    gap: 8px !important;
    padding: 10px 12px !important;
  }
  .coupons-scope .table-scroll { display: none !important; }
  .coupons-scope .mobile-table-cards-wrap { display: flex !important; }
  .coupons-scope .footerbar {
    flex-direction: column !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 12px !important;
    padding: 14px 12px !important;
    text-align: center !important;
  }
  .coupons-scope .footerbar > span {
    width: 100% !important;
    text-align: center !important;
    font-size: 12px !important;
    order: 1 !important;
  }
  .coupons-scope .footerbar .pagination {
    order: 2 !important;
    justify-content: center !important;
    gap: 6px !important;
    width: 100% !important;
  }
  .coupons-scope .bottom-grid {
    grid-template-columns: 1fr !important;
    gap: 12px !important;
  }
  .coupons-scope .donut-layout {
    flex-direction: row !important;
    align-items: center !important;
    justify-content: space-between !important;
    gap: 14px !important;
    padding: 6px 0 !important;
  }
  .coupons-scope .modal-overlay {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    padding: 12px 10px !important;
  }
  .coupons-scope .modal {
    width: calc(100vw - 20px) !important;
    padding: 16px 14px !important;
    margin: auto !important;
    max-height: 86vh !important;
    overflow-y: auto !important;
  }
  .coupons-scope .form-grid {
    grid-template-columns: 1fr !important;
    gap: 10px !important;
  }
}
`;

const initialCoupons = [
  {
    id: 1, code: "SUMMER20", name: "Summer Sale 20% Off", type: "Percentage", discount: "20% OFF",
    discountValue: 20, minOrder: 1499, used: 842, limit: 2000, start: "May 10, 2025", end: "May 31, 2025",
    status: "Active", codeTone: "red", description: "Seasonal discount for summer collection.", audience: "All Customers",
  },
  {
    id: 2, code: "NEW10", name: "New User 10% Off", type: "Percentage", discount: "10% OFF",
    discountValue: 10, minOrder: 999, used: 1245, limit: 3000, start: "May 12, 2025", end: "Jun 12, 2025",
    status: "Active", codeTone: "blue", description: "Welcome discount for first time customers.", audience: "New Customers",
  },
  {
    id: 3, code: "FREESHIP", name: "Free Shipping", type: "Shipping", discount: "Free Shipping",
    discountValue: 0, minOrder: 599, used: 2156, limit: null, start: "May 01, 2025", end: "May 31, 2025",
    status: "Active", codeTone: "green", description: "Free standard shipping above min order value.", audience: "All Customers",
  },
  {
    id: 4, code: "FLAT100", name: "Flat ₹100 Off", type: "Fixed", discount: "₹100 OFF",
    discountValue: 100, minOrder: 1299, used: 653, limit: 1500, start: "Apr 25, 2025", end: "May 25, 2025",
    status: "Expired", codeTone: "orange", description: "Flat amount discount for eligible orders.", audience: "Repeat Customers",
  },
  {
    id: 5, code: "WELCOME15", name: "Welcome 15% Off", type: "Percentage", discount: "15% OFF",
    discountValue: 15, minOrder: 1499, used: 352, limit: 1000, start: "Apr 20, 2025", end: "May 20, 2025",
    status: "Expired", codeTone: "purple", description: "Welcome offer for newly registered shoppers.", audience: "New Customers",
  },
  {
    id: 6, code: "BANK5", name: "5% Off on Cards", type: "Percentage", discount: "5% OFF",
    discountValue: 5, minOrder: 1000, used: 987, limit: 2500, start: "May 01, 2025", end: "May 31, 2025",
    status: "Active", codeTone: "cyan", description: "Card payment campaign discount.", audience: "All Customers",
  },
  {
    id: 7, code: "FLASH50", name: "Flash Sale ₹50 Off", type: "Fixed", discount: "₹50 OFF",
    discountValue: 50, minOrder: 799, used: 1412, limit: 2500, start: "May 18, 2025", end: "May 20, 2025",
    status: "Active", codeTone: "yellow", description: "Limited-duration flash sale coupon.", audience: "All Customers",
  },
  {
    id: 8, code: "MEGA30", name: "Mega Discount 30%", type: "Percentage", discount: "30% OFF",
    discountValue: 30, minOrder: 2499, used: 128, limit: 1000, start: "May 25, 2025", end: "Jun 05, 2025",
    status: "Scheduled", codeTone: "red", description: "Scheduled high value promotional campaign.", audience: "VIP Customers",
  },
];

const distribution = [
  { label: "Percentage", percent: "64%", amount: "₹5,41,196", color: "#7c4dff" },
  { label: "Fixed Amount", percent: "22%", amount: "₹1,86,036", color: "#ff6b00" },
  { label: "Free Shipping", percent: "14%", amount: "₹1,18,388", color: "#16a34a" },
];

function DiscountDistributionModal({ onClose, toast }) {
  return (
    <motion.div className="modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div
        className="modal-responsive"
        initial={{ y: 16, scale: 0.96 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: 16, scale: 0.96 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-head" style={{ paddingBottom: 12 }}>
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 800, color: "#10172f", margin: 0 }}>Discount Distribution & Coupon Mix</h2>
            <p style={{ fontSize: 12, color: "#667085", margin: "4px 0 0", fontWeight: 500 }}>Comprehensive breakdown of discount types and gross revenue savings</p>
          </div>
          <button className="close-btn" type="button" onClick={onClose} title="Close" aria-label="Close"><FiX size={18} /></button>
        </div>

        <div className="modal-metrics-grid">
          <div className="modal-metric-box">
            <span>Total Discount</span>
            <strong>₹8,45,620</strong>
          </div>
          <div className="modal-metric-box" style={{ background: "#f3fbf6", borderColor: "#d4f3e1" }}>
            <span style={{ color: "#16a34a" }}>Primary Type</span>
            <strong style={{ color: "#16a34a" }}>Percentage (64%)</strong>
          </div>
          <div className="modal-metric-box">
            <span style={{ color: "#0056c3" }}>Avg Savings / Order</span>
            <strong style={{ color: "#0056c3" }}>₹342</strong>
          </div>
        </div>

        <div className="modal-scroll-list">
          {distribution.map((item) => (
            <div key={item.label} style={{ padding: "12px 14px", border: "1px solid #ededf8", borderRadius: 10, background: "#ffffff" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ width: 10, height: 10, borderRadius: "50%", background: item.color, display: "inline-block" }} />
                  <strong style={{ fontSize: 13, fontWeight: 700, color: "#10172f" }}>{item.label}</strong>
                </div>
                <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: "#10172f" }}>{item.amount}</span>
                  <span style={{ fontSize: 12, fontWeight: 800, color: item.color }}>{item.percent}</span>
                </div>
              </div>
              <div style={{ width: "100%", height: 6, background: "#f3f3fe", borderRadius: 999, overflow: "hidden" }}>
                <div style={{ width: item.percent, height: "100%", background: item.color, borderRadius: 999 }} />
              </div>
            </div>
          ))}
        </div>

        <div className="modal-footer-row">
          <span style={{ fontSize: 11.5, color: "#16a34a", fontWeight: 600, display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#16a34a", display: "inline-block" }} />
            Live discount tracking active
          </span>
          <button className="primary-btn" type="button" onClick={() => { toast("Discount distribution report exported."); onClose(); }}>
            Export Distribution (CSV)
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

function TopPerformingCouponsModal({ onClose, toast }) {
  const topList = [
    { rank: 1, code: "SUMMER20", name: "Summer Sale Booster", discount: "20% OFF", redeemed: 842, limit: 1000, revenue: "₹3,42,800", rate: "84.2%" },
    { rank: 2, code: "NEW10", name: "New Customer Welcome", discount: "10% OFF", redeemed: 1245, limit: 2000, revenue: "₹4,12,650", rate: "62.3%" },
    { rank: 3, code: "FREESHIP", name: "Free Shipping Club", discount: "Free Shipping", redeemed: 2156, limit: 3000, revenue: "₹5,84,200", rate: "71.9%" },
    { rank: 4, code: "FLAT100", name: "Flat ₹100 Cart Discount", discount: "₹100 OFF", redeemed: 630, limit: 800, revenue: "₹1,89,000", rate: "78.8%" },
    { rank: 5, code: "VIP30", name: "VIP Elite Exclusive", discount: "30% OFF", redeemed: 128, limit: 200, revenue: "₹96,400", rate: "64.0%" },
  ];

  return (
    <motion.div className="modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div
        className="modal-responsive"
        initial={{ y: 16, scale: 0.96 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: 16, scale: 0.96 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-head" style={{ paddingBottom: 12 }}>
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 800, color: "#10172f", margin: 0 }}>Top Performing Coupons</h2>
            <p style={{ fontSize: 12, color: "#667085", margin: "4px 0 0", fontWeight: 500 }}>Ranked conversion, total redemption volume, and revenue attribution</p>
          </div>
          <button className="close-btn" type="button" onClick={onClose} title="Close" aria-label="Close"><FiX size={18} /></button>
        </div>

        <div className="modal-metrics-grid">
          <div className="modal-metric-box">
            <span>Total Redemptions</span>
            <strong>5,001 Uses</strong>
          </div>
          <div className="modal-metric-box" style={{ background: "#f3fbf6", borderColor: "#d4f3e1" }}>
            <span style={{ color: "#16a34a" }}>Top Campaign</span>
            <strong style={{ color: "#16a34a" }}>FREESHIP (2,156)</strong>
          </div>
          <div className="modal-metric-box">
            <span style={{ color: "#0056c3" }}>Attributed Revenue</span>
            <strong style={{ color: "#0056c3" }}>₹16.25L</strong>
          </div>
        </div>

        <div className="modal-scroll-list">
          {topList.map((item) => (
            <div key={item.code} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 14px", border: "1px solid #ededf8", borderRadius: 10, background: "#ffffff" }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: "#e7efff", border: "1px solid #dfe4ef", color: "#0056c3", display: "grid", placeItems: "center", fontSize: 13, fontWeight: 800, flexShrink: 0 }}>
                {item.rank}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <strong style={{ fontSize: 13, fontWeight: 800, color: "#10172f" }}>{item.code}</strong>
                  <span style={{ fontSize: 11, color: "#667085" }}>· {item.name}</span>
                </div>
                <div style={{ fontSize: 11.5, color: "#0056c3", fontWeight: 700, marginTop: 2 }}>{item.discount} · {item.revenue} gross</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <strong style={{ display: "block", fontSize: 12.5, fontWeight: 800, color: "#10172f" }}>{item.redeemed.toLocaleString()} Uses</strong>
                <small style={{ display: "block", fontSize: 10.5, color: "#16a34a", fontWeight: 700, marginTop: 1 }}>{item.rate} Fill</small>
              </div>
            </div>
          ))}
        </div>

        <div className="modal-footer-row">
          <span style={{ fontSize: 11.5, color: "#16a34a", fontWeight: 600, display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#16a34a", display: "inline-block" }} />
            Rankings refreshed in real time
          </span>
          <button className="primary-btn" type="button" onClick={() => { toast("Top performing coupons exported."); onClose(); }}>
            Export Rankings (CSV)
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

function RecentCouponActivityModal({ onClose, toast }) {
  const activities = [
    { code: "SUMMER20", title: "Coupon created", text: "New 20% discount code created for Summer Sale Campaign.", time: "Today · 11:30 AM", user: "Admin (Sudeep)", icon: FiTag, tone: "orange" },
    { code: "FLAT100", title: "Coupon expired", text: "Flat ₹100 OFF coupon reached end date and automatically expired.", time: "Yesterday · 11:59 PM", user: "System Auto-Expiry", icon: FiClock, tone: "red" },
    { code: "NEW10", title: "Coupon updated", text: "Usage limit extended from 1,000 to 2,000 redemptions.", time: "May 16 · 03:20 PM", user: "Marketing Lead", icon: FiRefreshCw, tone: "blue" },
    { code: "FREESHIP", title: "Free shipping activated", text: "Free delivery threshold lowered to ₹499 cart minimum.", time: "May 15 · 09:15 AM", user: "Admin (Sudeep)", icon: FiTag, tone: "orange" },
    { code: "VIP30", title: "Audience rule applied", text: "Restricted usage to VIP Customers segment only.", time: "May 14 · 04:45 PM", user: "Growth Specialist", icon: FiUsers, tone: "blue" },
  ];

  return (
    <motion.div className="modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div
        className="modal-responsive"
        initial={{ y: 16, scale: 0.96 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: 16, scale: 0.96 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-head" style={{ paddingBottom: 12 }}>
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 800, color: "#10172f", margin: 0 }}>Recent Coupon Activity & Audit Log</h2>
            <p style={{ fontSize: 12, color: "#667085", margin: "4px 0 0", fontWeight: 500 }}>Chronological history of coupon creations, edits, status toggles, and expirations</p>
          </div>
          <button className="close-btn" type="button" onClick={onClose} title="Close" aria-label="Close"><FiX size={18} /></button>
        </div>

        <div className="modal-metrics-grid">
          <div className="modal-metric-box">
            <span>Logged Events</span>
            <strong>{activities.length} Events</strong>
          </div>
          <div className="modal-metric-box" style={{ background: "#f3fbf6", borderColor: "#d4f3e1" }}>
            <span style={{ color: "#16a34a" }}>Audit Sync</span>
            <strong style={{ color: "#16a34a" }}>100% OK</strong>
          </div>
          <div className="modal-metric-box">
            <span style={{ color: "#0056c3" }}>Active Authors</span>
            <strong style={{ color: "#0056c3" }}>3 Staff</strong>
          </div>
        </div>

        <div className="modal-scroll-list">
          {activities.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "12px 14px", border: "1px solid #ededf8", borderRadius: 10, background: "#f8f9fc" }}>
                <div className={`activity-ico ${item.tone}`} style={{ flexShrink: 0 }}>
                  <IconComp />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
                    <strong style={{ fontSize: 13, fontWeight: 700, color: "#10172f" }}>{item.code} {item.title.toLowerCase()}</strong>
                    <span style={{ fontSize: 10.5, fontWeight: 700, color: "#667085", background: "#ffffff", padding: "2px 8px", borderRadius: 999, border: "1px solid #ededf8" }}>
                      {item.time}
                    </span>
                  </div>
                  <div style={{ fontSize: 11.5, color: "#4b5563", marginTop: 3, lineHeight: 1.4 }}>{item.text}</div>
                  <div style={{ fontSize: 10.5, color: "#8c95a6", marginTop: 4, fontWeight: 600 }}>By {item.user}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="modal-footer-row">
          <span style={{ fontSize: 11.5, color: "#16a34a", fontWeight: 600, display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#16a34a", display: "inline-block" }} />
            Immutable audit record
          </span>
          <button className="primary-btn" type="button" onClick={() => { toast("Coupon activity log exported."); onClose(); }}>
            Export History (CSV)
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

function CouponModalForm({ modal, onSave, onClose }) {
  const initialCoupon = modal.coupon;
  const [code, setCode] = useState(initialCoupon?.code || "");
  const [name, setName] = useState(initialCoupon?.name || "");
  const [discountType, setDiscountType] = useState(initialCoupon?.type || "Percentage");
  const [discountValue, setDiscountValue] = useState(initialCoupon?.discountValue || "");
  const [minOrder, setMinOrder] = useState(initialCoupon?.minOrder || "");
  const [limit, setLimit] = useState(initialCoupon?.limit || "");
  const [start, setStart] = useState(initialCoupon?.start || "May 18, 2025");
  const [end, setEnd] = useState(initialCoupon?.end || "May 31, 2025");
  const [audience, setAudience] = useState(initialCoupon?.audience || "All Customers");
  const [status, setStatus] = useState(initialCoupon?.status || "Active");
  const [description, setDescription] = useState(initialCoupon?.description || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    const numDiscountValue = Number(discountValue || 0);
    let discount;
    if (discountType === "Percentage") discount = `${numDiscountValue}% OFF`;
    else if (discountType === "Fixed") discount = `₹${numDiscountValue} OFF`;
    else discount = "Free Shipping";

    onSave({
      ...(initialCoupon || {}),
      id: initialCoupon?.id || Date.now(),
      code: code.trim().toUpperCase() || "DISCOUNT10",
      name: name.trim() || "Promotional Coupon",
      type: discountType,
      discount,
      discountValue: numDiscountValue,
      minOrder: Number(minOrder || 0),
      used: initialCoupon?.used || 0,
      limit: limit ? Number(limit) : null,
      start: start || "May 18, 2025",
      end: end || "May 31, 2025",
      status,
      codeTone: initialCoupon?.codeTone || (discountType === "Fixed" ? "orange" : discountType === "Shipping" ? "green" : "blue"),
      description: description.trim() || "Promotional coupon",
      audience,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="form-group">
          <label>Coupon Code</label>
          <input
            name="code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="e.g. SUMMER20"
            required
          />
        </div>

        <div className="form-group">
          <label>Coupon Name</label>
          <input
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Flat ₹100 Off"
            required
          />
        </div>

        <div className="form-group">
          <label>Discount Type</label>
          <MasterDropdown
            options={[
              { value: "Percentage", label: "Percentage (%)" },
              { value: "Fixed", label: "Fixed Amount (Flat ₹)" },
              { value: "Shipping", label: "Free Shipping" },
            ]}
            value={discountType}
            onChange={(val) => setDiscountType(val)}
            style={{ width: "100%" }}
          />
        </div>

        <div className="form-group">
          <label>
            {discountType === "Fixed"
              ? "Discount Amount (₹)"
              : discountType === "Percentage"
              ? "Discount Percentage (%)"
              : "Discount Value"}
          </label>
          <input
            type="number"
            name="discountValue"
            value={discountValue}
            onChange={(e) => setDiscountValue(e.target.value)}
            placeholder={discountType === "Fixed" ? "e.g. 100 (₹100 OFF)" : discountType === "Percentage" ? "e.g. 20 (20% OFF)" : "0"}
            disabled={discountType === "Shipping"}
          />
        </div>

        <div className="form-group">
          <label>Minimum Order Value (₹)</label>
          <input
            type="number"
            name="minOrder"
            value={minOrder}
            onChange={(e) => setMinOrder(e.target.value)}
            placeholder="e.g. 1299"
          />
        </div>

        <div className="form-group">
          <label>Usage Limit</label>
          <input
            type="number"
            name="limit"
            value={limit}
            onChange={(e) => setLimit(e.target.value)}
            placeholder="Leave empty for unlimited"
          />
        </div>

        <div className="form-group">
          <label>Start Date</label>
          <MasterDatePicker
            singleDate
            value={start}
            onChange={setStart}
            placeholder="Select start date"
          />
        </div>

        <div className="form-group">
          <label>End Date</label>
          <MasterDatePicker
            singleDate
            value={end}
            onChange={setEnd}
            placeholder="Select end date"
          />
        </div>

        <div className="form-group">
          <label>Target Audience</label>
          <MasterDropdown
            options={[
              "All Customers",
              "New Customers",
              "Repeat Customers",
              "VIP Customers",
            ]}
            value={audience}
            onChange={(val) => setAudience(val)}
            style={{ width: "100%" }}
          />
        </div>

        <div className="form-group">
          <label>Status</label>
          <MasterDropdown
            options={[
              "Active",
              "Scheduled",
              "Paused",
              "Expired",
            ]}
            value={status}
            onChange={(val) => setStatus(val)}
            style={{ width: "100%" }}
          />
        </div>

        <div className="form-group full">
          <label>Description</label>
          <textarea
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe this coupon..."
          />
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "flex-end", gap: 10, marginTop: 18 }}>
        <button type="button" className="action-btn cancel-white-btn" style={{ flex: "none" }} onClick={onClose}>Cancel</button>
        <button type="submit" className="action-btn primary" style={{ flex: "none" }}>
          <FiSave size={14} /> {modal.mode === "edit" ? "Save Changes" : "Create Coupon"}
        </button>
      </div>
    </form>
  );
}

export default function CouponsManagement() {
  const [coupons, setCoupons] = useState(initialCoupons);
  const [tab, setTab] = useState("All Coupons");
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");
  const [dateFilter, setDateFilter] = useState("Last 7 Days");
  const [selected, setSelected] = useState([]);
  const [drawer, setDrawer] = useState(null);
  const [modal, setModal] = useState(null);
  const [deleteCaution, setDeleteCaution] = useState(null);
  const [toast, setToast] = useState("");
  const [distributionModalOpen, setDistributionModalOpen] = useState(false);
  const [topPerformingModalOpen, setTopPerformingModalOpen] = useState(false);
  const [activityModalOpen, setActivityModalOpen] = useState(false);

  const [desktopSidebarOpen, setDesktopSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    if (window.innerWidth < 1050) {
      setMobileMenuOpen(prev => !prev);
    } else {
      setDesktopSidebarOpen(prev => !prev);
    }
  };

  const showToast = message => {
    setToast(message);
    clearTimeout(window.__couponToast);
    window.__couponToast = setTimeout(() => setToast(""), 2200);
  };

  const filteredCoupons = useMemo(() => coupons.filter(coupon => {
    const q = search.trim().toLowerCase();
    const searchMatch = !q || coupon.code.toLowerCase().includes(q) || coupon.name.toLowerCase().includes(q);
    const tabMatch = tab === "All Coupons" || coupon.status === tab;
    const statusMatch = statusFilter === "All" || coupon.status === statusFilter;
    const typeMatch = typeFilter === "All" || coupon.type === typeFilter;
    return searchMatch && tabMatch && statusMatch && typeMatch;
  }), [coupons, search, tab, statusFilter, typeFilter]);

  const toggleSelect = id => {
    setSelected(current => current.includes(id) ? current.filter(x => x !== id) : [...current, id]);
  };

  const exportCSV = () => {
    const rows = [
      ["Coupon Code", "Coupon Name", "Type", "Discount", "Min Order", "Used", "Limit", "Start", "End", "Status"],
      ...filteredCoupons.map(c => [
        c.code, c.name, c.type, c.discount, c.minOrder, c.used, c.limit ?? "Unlimited", c.start, c.end, c.status
      ])
    ];
    const csv = rows.map(r => r.map(c => `"${String(c).replaceAll('"', '""')}"`).join(",")).join("\n");
    const url = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = "coupons.csv";
    a.click();
    URL.revokeObjectURL(url);
    showToast("Coupons exported successfully.");
  };

  const copyCode = async code => {
    try {
      await navigator.clipboard.writeText(code);
      showToast(`${code} copied to clipboard.`);
    } catch {
      showToast(`Coupon code: ${code}`);
    }
  };

  const saveCoupon = coupon => {
    setCoupons(current => {
      const exists = current.some(item => item.id === coupon.id);
      return exists ? current.map(item => item.id === coupon.id ? coupon : item) : [coupon, ...current];
    });
    setModal(null);
    setDrawer(null);
    showToast("Coupon saved successfully.");
  };

  const toggleStatus = id => {
    setCoupons(current => current.map(c => c.id === id ? { ...c, status: c.status === "Active" ? "Paused" : "Active" } : c));
    setDrawer(current => current?.id === id ? { ...current, status: current.status === "Active" ? "Paused" : "Active" } : current);
    showToast("Coupon status updated.");
  };

  const promptDeleteCoupon = coupon => {
    setDeleteCaution(coupon);
  };

  const confirmDeleteCoupon = () => {
    if (!deleteCaution) return;
    const targetCode = deleteCaution.code;
    setCoupons(current => current.filter(item => item.id !== deleteCaution.id));
    if (drawer?.id === deleteCaution.id) setDrawer(null);
    setDeleteCaution(null);
    showToast(`${targetCode} coupon deleted.`);
  };

  const kpis = [
    ["Total Coupons", "32", "+14.3%", "vs last 7 days", "trust", FiTag],
    ["Active Coupons", "18", "+20.0%", "vs last 7 days", "green", FiCheck],
    ["Coupons Redeemed", "3,248", "+18.6%", "vs last 7 days", "orange", FiActivity],
    ["Total Discount Given", "₹8,45,620", "+16.2%", "vs last 7 days", "purple", FiPercent],
    ["Expired Coupons", "14", "-12.5%", "vs last 7 days", "red", FiCalendar],
  ];

  return (
    <div className="coupons-scope">
      <style>{css}</style>
      <div className="admin-shell">
        {desktopSidebarOpen && (
          <div className="desktop-sidebar-wrapper">
            <AdminSidebar activePage="Coupons" onClose={() => setDesktopSidebarOpen(false)} />
          </div>
        )}
        <AnimatePresence>
          {mobileMenuOpen && (
            <AdminSidebar activePage="Coupons" mobile onClose={() => setMobileMenuOpen(false)} />
          )}
        </AnimatePresence>

        <main className="dashboard-main">
          <AdminTopbar onToggleSidebar={handleToggleMenu} desktopSidebarOpen={desktopSidebarOpen} />

          <div className="page">
            {/* Page Head */}
            <div className="page-head">
              <div>
                <h1>Coupons Management</h1>
                <p>Create, manage and track performance of discount coupons.</p>
              </div>
              <div className="head-actions">
                <MasterDatePicker value={dateFilter} onChange={setDateFilter} />
                <button className="primary-btn" onClick={() => setModal({ mode: "create" })}>
                  <FiPlus size={15} /> Create Coupon
                </button>
              </div>
            </div>

            {/* Master KPI Cards Grid */}
            <section className="kpi-grid">
              {kpis.map(x => (
                <KpiCard key={x[0]} item={x} />
              ))}
            </section>

            {/* Main Split Table & Side Card Container */}
            <section className={`coupons-split ${drawer ? "has-selected" : ""}`} style={{ marginBottom: 18 }}>
              <div className="card table-card" style={{ margin: 0 }}>
                <div className="tabs-row">
                  {[
                    ["All Coupons", 32],
                    ["Active", 18],
                    ["Scheduled", 6],
                    ["Expired", 14],
                  ].map(([tabName, count]) => (
                    <button
                      key={tabName}
                      className={`tab ${tab === tabName ? "active" : ""}`}
                      onClick={() => setTab(tabName)}
                    >
                      {tabName} <b>{count}</b>
                    </button>
                  ))}
                </div>

                <div className="toolbar">
                  <div className="search-box">
                    <FiSearch size={15} color="#667085" />
                    <input
                      value={search}
                      onChange={e => setSearch(e.target.value)}
                      placeholder="Search coupons by code or name..."
                    />
                  </div>

                  <MasterDropdown
                    options={[{ value: "All", label: "Status: All" }, "Active", "Scheduled", "Expired", "Paused"]}
                    value={statusFilter}
                    onChange={setStatusFilter}
                  />

                  <MasterDropdown
                    options={[{ value: "All", label: "Type: All" }, "Percentage", "Fixed", "Shipping"]}
                    value={typeFilter}
                    onChange={setTypeFilter}
                  />

                  <button className="outline-btn" onClick={() => showToast("Filters applied.")}>
                    <FiFilter size={14} /> Filters
                  </button>

                  <div className="spacer" />

                  <button className="outline-btn" onClick={exportCSV}>
                    <FiDownload size={14} /> Export
                  </button>
                </div>

                {/* Selection Bar */}
                <div className="selection-bar">
                  <AnimatedCheckbox
                    checked={filteredCoupons.length > 0 && selected.length === filteredCoupons.length}
                    onChange={e => setSelected(e.target.checked ? filteredCoupons.map(c => c.id) : [])}
                  />
                  <strong>{selected.length} selected</strong>
                  <span>Select all {filteredCoupons.length} on this page</span>
                  <div style={{ flex: 1 }} />
                  <button className="clear-btn" onClick={() => setSelected([])}>Clear selection</button>
                  <MasterDropdown
                    staticLabel="Bulk Actions"
                    rightAlign
                    options={[
                      { label: "Export selected CSV", action: exportCSV },
                      { label: "Clear selection", action: () => setSelected([]) }
                    ]}
                  />
                </div>

                {/* Table */}
                <div className="table-scroll">
                  <table className="coupons-table">
                    <thead>
                      <tr>
                        <th style={{ width: 42 }}>
                          <AnimatedCheckbox
                            checked={filteredCoupons.length > 0 && selected.length === filteredCoupons.length}
                            onChange={e => setSelected(e.target.checked ? filteredCoupons.map(c => c.id) : [])}
                          />
                        </th>
                        <th>Coupon Code</th>
                        <th>Coupon Name</th>
                        <th>Type</th>
                        <th>Discount</th>
                        <th>Min. Order</th>
                        <th>Usage / Limit</th>
                        <th>Validity</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredCoupons.map(coupon => {
                        const percentage = coupon.limit ? Math.min(100, (coupon.used / coupon.limit) * 100) : 100;
                        const statusKey = coupon.status.toLowerCase();
                        const typeKey = coupon.type.toLowerCase();
                        return (
                          <tr key={coupon.id} className={drawer?.id === coupon.id ? "selected" : ""}>
                            <td>
                              <AnimatedCheckbox
                                checked={selected.includes(coupon.id)}
                                onChange={() => toggleSelect(coupon.id)}
                              />
                            </td>
                            <td>
                              <span className={`coupon-code code-${coupon.codeTone}`}>{coupon.code}</span>
                            </td>
                            <td className="coupon-name">
                              <strong>{coupon.name}</strong>
                            </td>
                            <td>
                              <span className={`type-badge type-${typeKey}`}>{coupon.type}</span>
                            </td>
                            <td>
                              <strong>{coupon.discount}</strong>
                            </td>
                            <td>
                              <strong>₹{coupon.minOrder.toLocaleString("en-IN")}</strong>
                            </td>
                            <td>
                              <div className="usage-wrap">
                                <div className="usage-value">
                                  <span>{coupon.used.toLocaleString("en-IN")} / {coupon.limit ? coupon.limit.toLocaleString("en-IN") : "∞"}</span>
                                </div>
                                <div className="usage-track">
                                  <span style={{ width: `${percentage}%` }} />
                                </div>
                              </div>
                            </td>
                            <td>{coupon.start} – {coupon.end}</td>
                            <td>
                              <span className={`status-pill status-${statusKey}`}>
                                <i />{coupon.status}
                              </span>
                            </td>
                            <td>
                              <div className="row-actions">
                                <button
                                  title="View Details"
                                  className={drawer?.id === coupon.id ? "active-action" : ""}
                                  onClick={() => setDrawer(curr => curr?.id === coupon.id ? null : coupon)}
                                >
                                  <FiEye />
                                </button>
                                <button title="Edit Coupon" onClick={() => setModal({ mode: "edit", coupon })}><FiEdit2 /></button>
                                <button title="Copy Code" onClick={() => copyCode(coupon.code)}><FiCopy /></button>
                                <button title="Delete Coupon" className="delete-btn" onClick={() => promptDeleteCoupon(coupon)}><FiTrash2 /></button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                {/* Mobile Table Cards */}
                <MobileTableCards
                  items={filteredCoupons}
                  renderItem={(coupon) => {
                    const statusKey = coupon.status.toLowerCase();
                    const percentage = coupon.limit ? Math.min(100, (coupon.used / coupon.limit) * 100) : 100;
                    return (
                      <MobileTableCard
                        key={coupon.id}
                        title={coupon.name}
                        subtitle={`Code: ${coupon.code}`}
                        badge={
                          <span className={`status-pill status-${statusKey}`}>
                            <i />{coupon.status}
                          </span>
                        }
                        meta={[
                          { label: "Type", value: coupon.type },
                          { label: "Discount", value: coupon.discount },
                          { label: "Min. Order", value: `₹${coupon.minOrder.toLocaleString("en-IN")}` },
                          { label: "Usage / Limit", value: `${coupon.used.toLocaleString("en-IN")} / ${coupon.limit ? coupon.limit.toLocaleString("en-IN") : "∞"} (${percentage.toFixed(0)}%)` },
                          { label: "Validity", value: `${coupon.start} – ${coupon.end}` },
                        ]}
                        actions={
                          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, width: "100%" }}>
                            <button
                              type="button"
                              className="mobile-table-card-action-btn"
                              onClick={() => setDrawer((curr) => (curr?.id === coupon.id ? null : coupon))}
                            >
                              <FiEye /> View Details
                            </button>
                            <button
                              type="button"
                              className="mobile-table-card-action-btn"
                              onClick={() => setModal({ mode: "edit", coupon })}
                            >
                              <FiEdit2 /> Edit Coupon
                            </button>
                          </div>
                        }
                      />
                    );
                  }}
                />

                <div className="footerbar">
                  <span>Showing 1 to {filteredCoupons.length} of {coupons.length} coupons</span>
                  <div className="pagination">
                    <button type="button"><FiChevronLeft /></button>
                    <button type="button" className="active">1</button>
                    <button type="button">2</button>
                    <button type="button"><FiChevronRight /></button>
                  </div>
                </div>
              </div>

              <AnimatePresence>
                {drawer && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <IntegrationDetailsDrawer
                      item={drawer}
                      title="Coupon Details"
                      editLabel="Edit Configuration"
                      onClose={() => setDrawer(null)}
                      onEdit={() => { setDrawer(null); setModal({ mode: "edit", coupon: drawer }); }}
                      onToast={showToast}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </section>

            {/* Bottom 3 Cards Row below Table */}
            <div className="bottom-grid js-reveal">
              {/* Card 1: Discount Distribution */}
              <div className="card side-panel">
                <div className="side-card-head">
                  <h3>Discount Distribution</h3>
                  <button type="button" onClick={() => setDistributionModalOpen(true)}>View all</button>
                </div>
                <div style={{ cursor: "pointer", flex: 1, display: "flex" }} onClick={() => setDistributionModalOpen(true)}>
                  <MasterPieChart
                    centerTitle="TOTAL DISCOUNT"
                    centerValue="₹8,45,620"
                    data={distribution.map(item => ({ label: item.label, percent: item.percent, count: item.amount, color: item.color }))}
                    conicGradient="conic-gradient(#7c4dff 0% 64%, #fd661d 64% 86%, #16a34a 86% 100%)"
                    shape="circle"
                    onItemClick={() => setDistributionModalOpen(true)}
                  />
                </div>
              </div>

              {/* Card 2: Top Performing Coupons */}
              <div className="card side-panel">
                <div className="side-card-head">
                  <h3>Top Performing Coupons</h3>
                  <button type="button" onClick={() => setTopPerformingModalOpen(true)}>View all</button>
                </div>
                <div className="performing-list">
                  {[
                    { rank: 1, code: "SUMMER20", discount: "20% OFF", redeemed: "842" },
                    { rank: 2, code: "NEW10", discount: "10% OFF", redeemed: "1,245" },
                    { rank: 3, code: "FREESHIP", discount: "Free Shipping", redeemed: "2,156" },
                  ].map(item => (
                    <div className="performing-item" key={item.code} onClick={() => setTopPerformingModalOpen(true)}>
                      <div className="rank-badge">{item.rank}</div>
                      <div className="performing-info">
                        <strong>{item.code}</strong>
                        <small>{item.discount}</small>
                      </div>
                      <div className="performing-right">
                        <strong>{item.redeemed}</strong>
                        <small>Redeemed</small>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card 3: Recent Coupon Activity */}
              <div className="card side-panel">
                <div className="side-card-head">
                  <h3>Recent Coupon Activity</h3>
                  <button type="button" onClick={() => setActivityModalOpen(true)}>View all</button>
                </div>
                <div className="activity-list">
                  {[
                    { code: "SUMMER20", text: "coupon created", time: "Today · 11:30 AM", ico: FiTag, tone: "orange" },
                    { code: "FLAT100", text: "coupon expired", time: "Yesterday · 11:59 PM", ico: FiClock, tone: "red" },
                    { code: "NEW10", text: "coupon updated", time: "May 16 · 03:20 PM", ico: FiRefreshCw, tone: "blue" },
                  ].map((item, i) => {
                    const Icon = item.ico;
                    return (
                      <div className="activity-item" key={i} onClick={() => setActivityModalOpen(true)}>
                        <div className={`activity-ico ${item.tone}`}>
                          <Icon />
                        </div>
                        <div className="activity-text">
                          <strong>{item.code} {item.text}</strong>
                          <time>{item.time}</time>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Edit / Create Modal */}
      <AnimatePresence>
        {modal && (
          <div className="modal-overlay" onClick={() => setModal(null)}>
            <motion.div
              className="modal"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 14 }}
              onClick={e => e.stopPropagation()}
            >
              <div className="modal-head">
                <h2>{modal.mode === "edit" ? "Edit Coupon" : "Create Coupon"}</h2>
                <button className="close-btn" onClick={() => setModal(null)}><FiX size={18} /></button>
              </div>

              <CouponModalForm modal={modal} onSave={saveCoupon} onClose={() => setModal(null)} />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Delete Caution Confirmation Modal */}
      <AnimatePresence>
        {deleteCaution && (
          <div className="modal-overlay" onClick={() => setDeleteCaution(null)}>
            <motion.div
              className="modal"
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              onClick={e => e.stopPropagation()}
              style={{ maxWidth: 440, padding: 24, textAlign: "center" }}
            >
              <div style={{
                width: 52, height: 52, borderRadius: "50%", background: "#ffe8e9", color: "#e5484d",
                display: "grid", placeItems: "center", fontSize: 24, margin: "0 auto 16px"
              }}>
                <FiAlertCircle />
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: "#10172f", margin: "0 0 8px" }}>
                Delete Caution
              </h3>
              <p style={{ fontSize: 13, color: "#47516b", margin: "0 0 20px", lineHeight: 1.5 }}>
                Are you sure you are gonna delete <strong>{deleteCaution.code}</strong> coupon?
              </p>
              <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
                <button
                  className="action-btn cancel-white-btn"
                  style={{ flex: 1 }}
                  onClick={() => setDeleteCaution(null)}
                >
                  Cancel
                </button>
                <button
                  className="action-btn danger-confirm-btn"
                  style={{ flex: 1 }}
                  onClick={confirmDeleteCoupon}
                >
                  Confirm
                </button>
              </div>
            </motion.div>
          </div>
        )}
        {distributionModalOpen && (
          <DiscountDistributionModal
            onClose={() => setDistributionModalOpen(false)}
            toast={showToast}
          />
        )}
        {topPerformingModalOpen && (
          <TopPerformingCouponsModal
            onClose={() => setTopPerformingModalOpen(false)}
            toast={showToast}
          />
        )}
        {activityModalOpen && (
          <RecentCouponActivityModal
            onClose={() => setActivityModalOpen(false)}
            toast={showToast}
          />
        )}
      </AnimatePresence>

      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            className="toast"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
