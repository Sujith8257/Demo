import React, { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AdminSidebar from "../../../components/Admin/AdminSidebar";
import AdminTopbar from "../../../components/Admin/AdminTopbar";
import MasterDropdown from "../../../components/Admin/MasterDropdown";
import IntegrationDetailsDrawer from "../../../components/Admin/IntegrationDetailsDrawer";
import KpiCard from "../../../components/Admin/KpiCard";
import MasterPieChart from "../../../components/Admin/MasterPieChart";
import MobileTableCards, { MobileTableCard } from "../../../components/Admin/MobileTableCards";
import {
  FiActivity,
  FiAlertCircle,
  FiAlertTriangle,
  FiBell,
  FiBox,
  FiCheck,
  FiChevronDown,
  FiChevronLeft,
  FiChevronRight,
  FiClipboard,
  FiCopy,
  FiDatabase,
  FiEye,
  FiEyeOff,
  FiFileText,
  FiFilter,
  FiGift,
  FiGrid,
  FiHeart,
  FiHome,
  FiImage,
  FiLink,
  FiMenu,
  FiMoreVertical,
  FiPackage,
  FiPauseCircle,
  FiPlay,
  FiPlus,
  FiRefreshCw,
  FiSearch,
  FiSettings,
  FiShoppingBag,
  FiTag,
  FiEdit2,
  FiTrash2,
  FiUsers,
  FiX,
} from "react-icons/fi";
import {
  SiFacebook,
  SiGoogleanalytics,
  SiMailchimp,
  SiRazorpay,
  SiShopify,
  SiWhatsapp,
} from "react-icons/si";

const styles = String.raw`
.integration-scope {
  --page: #faf8ff;
  --card: #ffffff;
  --text: #10172f;
  --muted: #667085;
  --border: #dfe4ef;
  --line: #edf0f6;
  --blue: #0b57d0;
  --blue-2: #1266eb;
  --green: #17a45b;
  --orange: #ff6500;
  --purple: #7c4dff;
  --red: #e5484d;
  --yellow: #f4a300;
  --cyan: #12a8c3;
  --shadow: 0 4px 14px rgba(25, 35, 70, 0.055);
  --shadow-lg: 0 22px 65px rgba(16, 24, 40, 0.18);
  min-height: 100vh;
  background: var(--page);
  color: var(--text);
  font-family: Manrope, Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.integration-scope * { box-sizing: border-box; }

.integration-scope .admin-shell {
  display: flex;
  min-height: 100vh;
}
.integration-scope .desktop-sidebar-wrapper {
  flex-shrink: 0;
}
.integration-scope .dashboard-main {
  flex: 1;
  min-width: 0;
}

.integration-scope .page {
  padding: 20px 24px 36px;
}
.integration-scope .page-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 22px;
}
.integration-scope .page-header h1 {
  margin: 0;
  font-size: 30px;
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: #191b23;
}
.integration-scope .page-header p {
  margin: 6px 0 0;
  color: #667085;
  font-size: 13.5px;
  font-weight: 500;
}
.integration-scope .header-actions {
  display: flex;
  align-items: center;
  gap: 10px;
}
.integration-scope .secondary-header-button,
.integration-scope .primary-header-button {
  height: 42px;
  padding: 0 18px;
  border-radius: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.18s ease;
  font-family: inherit;
}
.integration-scope .secondary-header-button {
  border: 1px solid #c2c6d5;
  background: #ffffff;
  color: #191b23;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.06);
}
.integration-scope .secondary-header-button:hover {
  background: #f8f9fe;
  border-color: #0056c3;
  color: #0056c3;
}
.integration-scope .primary-header-button {
  border: 0;
  background: #fd661d;
  color: #ffffff;
  box-shadow: 0 4px 10px rgba(253, 102, 29, 0.25);
}
.integration-scope .primary-header-button:hover {
  background: #e25510;
}

/* KPI Cards */
.integration-scope .kpi-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(140px, 1fr));
  gap: 12px;
  margin-bottom: 20px;
}

/* Main Grid */
.integration-scope .main-content-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  align-items: start;
  margin-bottom: 18px;
  transition: grid-template-columns 0.25s ease;
}
.integration-scope .main-content-grid.has-selection {
  grid-template-columns: minmax(0, 1.62fr) minmax(330px, 0.78fr);
}
.integration-scope .integration-table tr {
  transition: background 0.18s ease;
}
.integration-scope .integration-table tr.selected {
  background: #f0f5ff;
}
.integration-scope .card {
  background: #ffffff;
  border: 1px solid #c2c6d5;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(25, 27, 35, 0.05);
  overflow: visible;
}
.integration-scope .integrations-card {
  overflow: visible;
  padding: 0;
}
.integration-scope .tabs {
  display: flex;
  gap: 2px;
  overflow-x: auto;
  padding: 0 10px;
  border-bottom: 1px solid #ededf8;
  scrollbar-width: none;
  background: #ffffff;
}
.integration-scope .tabs::-webkit-scrollbar {
  display: none;
}
.integration-scope .tab {
  height: 44px;
  border: 0;
  background: transparent;
  padding: 0 12px;
  font-size: 12px;
  font-weight: 800;
  color: #191b23;
  position: relative;
  white-space: nowrap;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  font-family: inherit;
  transition: color 0.15s ease;
}
.integration-scope .tab:hover {
  color: #0056c3;
}
.integration-scope .tab b {
  margin-left: 5px;
  padding: 3px 6px;
  border-radius: 999px;
  background: #ededf8;
  font-size: 10px;
  font-weight: 800;
  color: #191b23;
}
.integration-scope .tab.active {
  color: #0056c3;
}
.integration-scope .tab.active b {
  background: #e7efff;
  color: #004094;
}
.integration-scope .tab.active:after {
  content: "";
  position: absolute;
  left: 8px;
  right: 8px;
  bottom: 0;
  height: 2px;
  background: #0056c3;
}
.integration-scope .filters {
  padding: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  border-bottom: 1px solid #ededf8;
  background: #ffffff;
}
.integration-scope .field {
  height: 38px;
  border: 1px solid #c2c6d5;
  border-radius: 8px;
  background: #fff;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 10px;
  font-size: 12px;
  font-weight: 800;
  color: #191b23;
  flex: 1 1 240px;
  max-width: 320px;
  box-sizing: border-box;
  font-family: inherit;
  transition: all 0.18s ease;
}
.integration-scope .field:focus-within {
  border-color: #0056c3;
  box-shadow: 0 0 0 3px rgba(0, 86, 195, 0.1);
}
.integration-scope .field input {
  border: 0;
  outline: 0;
  width: 100%;
  background: transparent;
  font-size: 12px;
  font-weight: 800;
  color: #191b23;
  font-family: inherit;
  box-sizing: border-box;
}
.integration-scope .filterbtn {
  height: 38px;
  border: 1px solid #c2c6d5;
  background: #fff;
  border-radius: 8px;
  padding: 0 12px;
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 12px;
  font-weight: 800;
  color: #191b23;
  cursor: pointer;
  font-family: inherit;
  transition: all 180ms ease;
}
.integration-scope .filterbtn:hover {
  background: #f8f9fe;
  border-color: #0056c3;
}

.integration-scope .table-scroll { overflow-x: auto; }
.integration-scope .integration-table {
  width: 100%;
  min-width: 850px;
  border-collapse: collapse;
}
.integration-scope .integration-table thead { background: #f3f3fe; }
.integration-scope .integration-table { width: 100%; min-width: 860px; border-collapse: collapse; border-spacing: 0; }
.integration-scope .integration-table th, .integration-scope .integration-table td { box-sizing: border-box; }
.integration-scope .integration-table thead tr { height: 44px; }
.integration-scope .integration-table tbody tr { height: 60px; box-sizing: border-box; }
.integration-scope .integration-table th { height: 44px; background: #f3f3fe; color: #191b23; text-align: left; font-size: 12px; font-weight: 800; border-bottom: 1px solid #ededf8; text-transform: uppercase; letter-spacing: .04em; padding: 0 18px; white-space: nowrap; vertical-align: middle; }
.integration-scope .integration-table td { height: 60px; border-bottom: 1px solid #ededf8; font-size: 12.5px; font-weight: 500; color: #191b23; padding: 0 18px; white-space: nowrap; vertical-align: middle; }
.integration-scope .integration-table th:first-child, .integration-scope .integration-table td:first-child { padding-left: 18px; border-top-left-radius: 10px; }
.integration-scope .integration-table th:last-child, .integration-scope .integration-table td:last-child { width: 130px; padding: 0 14px; text-align: center; border-top-right-radius: 10px; }
.integration-scope .integration-cell {
  display: flex;
  align-items: center;
  gap: 12px;
  height: 100%;
}
.integration-scope .integration-brand-icon {
  width: 36px;
  height: 36px;
  flex: 0 0 auto;
  border-radius: 9px;
  display: grid;
  place-items: center;
  background: #f6f8fc;
  border: 1px solid #ebeff5;
  font-size: 20px;
}
.integration-scope .integration-cell strong {
  display: block;
  color: #17203a;
  font-size: 12.5px;
  font-weight: 700;
  margin: 0;
  padding: 0;
  line-height: 1.2;
}
.integration-scope .integration-cell small {
  display: block;
  margin-top: 2px;
  color: #69748b;
  font-size: 10.5px;
  font-weight: 500;
  margin: 0;
  padding: 0;
  line-height: 1.2;
}

.integration-scope .category-pill,
.integration-scope .status-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 24px;
  padding: 0 10px;
  border-radius: 999px;
  font-size: 10.5px;
  font-weight: 700;
}
.integration-scope .category-ecommerce { background: #e6f9f3; color: #0d9488; border: 1px solid #b2f0db; }
.integration-scope .category-payments { background: #f3e8ff; color: #7c3aed; border: 1px solid #ddd6fe; }
.integration-scope .category-shipping { background: #e0f2fe; color: #0284c7; border: 1px solid #bae6fd; }
.integration-scope .category-marketing { background: #fef3c7; color: #d97706; border: 1px solid #fde68a; }
.integration-scope .category-analytics { background: #e0e7ff; color: #4338ca; border: 1px solid #c7d2fe; }
.integration-scope .category-communication { background: #fce7f3; color: #db2777; border: 1px solid #fbcfe8; }
.integration-scope .category-advertising { background: #ffedd5; color: #ea580c; border: 1px solid #fed7aa; }

.integration-scope .status-pill.active { background: #ddf7e6; color: #159543; }
.integration-scope .status-pill.inactive { background: #fff0df; color: #e06b11; }
.integration-scope .status-pill.failed { background: #ffe5e8; color: #dd3941; }
.integration-scope .status-dot { width: 6px; height: 6px; border-radius: 50%; background: currentColor; }

.integration-scope .sync-time strong { display: block; color: #1f2942; font-size: 11.5px; font-weight: 600; }
.integration-scope .sync-time small { display: block; margin-top: 2px; color: #68738a; font-size: 10px; font-weight: 500; }
.integration-scope .sync-time.retry strong { color: #d83d47; }

.integration-scope .table-actions { display: flex; align-items: center; justify-content: center; gap: 6px; }
.integration-scope .table-actions button {
  width: 34px;
  height: 34px;
  border-radius: 8px;
  border: 1px solid #c2c6d5;
  background: #ffffff;
  color: #191b23;
  display: grid;
  place-items: center;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.18s ease;
}
.integration-scope .table-actions button:hover {
  background: #f3f3fe;
  border-color: #0056c3;
  color: #0056c3;
}
.integration-scope .table-actions button.active-action {
  border-color: #0056c3;
  background: #f3f3fe;
  color: #0056c3;
}
.integration-scope .table-actions button.delete-btn:hover {
  background: #ffe8eb;
  border-color: #D32F2F;
  color: #D32F2F;
}

.integration-scope .table-footer {
  min-height: 52px;
  padding: 10px 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}
.integration-scope .table-footer > span { color: #536078; font-size: 11.5px; font-weight: 500; }
.integration-scope .pagination { display: flex; align-items: center; gap: 6px; }
.integration-scope .pagination button {
  width: 32px;
  height: 32px;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: #ffffff;
  color: #27324e;
  display: grid;
  place-items: center;
  font-size: 11.5px;
  font-weight: 700;
}
.integration-scope .pagination button.active {
  border-color: var(--blue);
  background: var(--blue);
  color: #ffffff;
}

.integration-scope .mobile-integration-list { display: none; }

/* Details Panel */
.integration-scope .detail-card {
  padding: 20px;
  min-height: 480px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}
.integration-scope .detail-card-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}
.integration-scope .detail-card-head h3 { margin: 0; font-size: 15px; font-weight: 800; color: #10172f; }
.integration-scope .detail-brand {
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 14px 16px;
  background: #f8fafe;
  border: 1px solid var(--line);
  border-radius: 12px;
}
.integration-scope .detail-brand-icon {
  width: 64px;
  height: 64px;
  flex: 0 0 auto;
  border-radius: 14px;
  display: grid !important;
  place-items: center !important;
  place-content: center !important;
  background: #ffffff;
  border: 1px solid var(--border);
  box-shadow: 0 4px 12px rgba(16, 24, 40, 0.06);
  padding: 0;
  overflow: hidden;
}
.integration-scope .detail-brand-icon svg {
  width: 38px !important;
  height: 38px !important;
  font-size: 38px !important;
  display: block !important;
  margin: auto !important;
}
.integration-scope .detail-brand strong { display: block; font-size: 17px; font-weight: 800; color: #10172f; }
.integration-scope .detail-brand span { display: block; margin-top: 3px; color: #667085; font-size: 12px; font-weight: 500; }
.integration-scope .detail-list {
  margin-top: 18px;
  display: grid;
  gap: 12px;
  flex: 1;
}
.integration-scope .detail-row {
  display: grid;
  grid-template-columns: 110px minmax(0, 1fr);
  gap: 12px;
  align-items: start;
}
.integration-scope .detail-row > span:first-child {
  color: #5a6680;
  font-size: 11.5px;
  font-weight: 600;
}
.integration-scope .detail-value {
  color: #26324d;
  font-size: 11.5px;
  line-height: 1.55;
  word-break: break-word;
  overflow-wrap: break-word;
  min-width: 0;
}
.integration-scope .api-value { display: flex; align-items: center; gap: 8px; min-width: 0; }
.integration-scope .api-value code {
  font-size: 11px;
  letter-spacing: 0.04em;
  background: #f3f5fb;
  padding: 2px 6px;
  border-radius: 6px;
  word-break: break-all;
  min-width: 0;
}
.integration-scope .inline-action {
  width: 26px;
  height: 26px;
  border: 0;
  border-radius: 6px;
  background: transparent;
  color: #516079;
  display: grid;
  place-items: center;
  cursor: pointer;
  flex-shrink: 0;
}
.integration-scope .inline-action:hover { background: #f4f6fa; }
.integration-scope .webhook { display: flex; align-items: center; gap: 8px; min-width: 0; }
.integration-scope .webhook a {
  min-width: 0;
  color: var(--blue);
  text-decoration: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 11px;
}
.integration-scope .sync-checks { display: flex; flex-wrap: wrap; gap: 8px; }
.integration-scope .sync-check {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 11.5px;
  background: #f8f9fe;
  padding: 3px 8px;
  border-radius: 6px;
  border: 1px solid var(--line);
}
.integration-scope .sync-check i {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #ddf7e6;
  color: #159543;
  display: grid;
  place-items: center;
  font-style: normal;
  font-size: 9px;
  font-weight: 900;
}

.integration-scope .detail-actions {
  margin-top: 24px;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.18fr);
  gap: 10px;
  width: 100%;
}
.integration-scope .detail-secondary,
.integration-scope .detail-primary {
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 12px;
  font-weight: 700;
  white-space: nowrap;
}
.integration-scope .detail-secondary { border: 1px solid var(--border); background: #ffffff; color: #25304a; }
.integration-scope .detail-primary { border: 0; background: var(--orange); color: #ffffff; }
.integration-scope .split-button {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 38px;
  border-radius: 8px;
  overflow: hidden;
  background: var(--orange);
  position: relative;
  height: 40px;
}
.integration-scope .split-button .detail-primary { border-radius: 0; }
.integration-scope .split-button > button:last-child {
  border: 0;
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  background: var(--orange);
  color: #ffffff;
  display: grid;
  place-items: center;
  cursor: pointer;
}
.integration-scope .test-menu {
  position: absolute;
  right: 0;
  bottom: 48px;
  width: 190px;
  padding: 6px;
  border: 1px solid var(--border);
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 0 14px 35px rgba(16, 24, 40, 0.14);
  z-index: 25;
}
.integration-scope .test-menu button {
  width: 100%;
  height: 36px;
  border: 0;
  border-radius: 7px;
  background: transparent;
  text-align: left;
  padding: 0 10px;
  font-size: 11.5px;
  font-weight: 600;
}
.integration-scope .test-menu button:hover { background: #f5f7fb; }

/* Bottom Analytics */
.integration-scope .bottom-grid {
  display: grid;
  grid-template-columns: minmax(340px, 1.05fr) minmax(340px, 1fr) minmax(330px, 0.95fr);
  gap: 16px;
}
.integration-scope .bottom-card { padding: 18px; min-height: 240px; }
.integration-scope .card-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}
.integration-scope .card-head h3 { margin: 0; font-size: 14px; font-weight: 800; color: #10172f; }
.integration-scope .card-head button {
  border: 0;
  background: transparent;
  color: var(--blue);
  font-size: 11.5px;
  font-weight: 700;
}
.integration-scope .period-select {
  height: 32px;
  padding: 0 28px 0 10px;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: #ffffff;
  color: #26324d;
  font-size: 11px;
  font-weight: 700;
}
.integration-scope .sync-legend {
  display: flex;
  align-items: center;
  gap: 14px;
  margin: 12px 0 4px;
  color: #526079;
  font-size: 11px;
  font-weight: 600;
}
.integration-scope .sync-legend i { display: inline-block; width: 14px; height: 3px; margin-right: 6px; vertical-align: middle; }
.integration-scope .sync-success { background: #17a45b; }
.integration-scope .sync-failed { background: #e5484d; }
.integration-scope .sync-total { background: #176cec; }
.integration-scope .sync-chart { width: 100%; height: 170px; display: block; }
.integration-scope .chart-grid-line { stroke: #edf0f6; stroke-width: 1; }
.integration-scope .chart-axis { font-size: 9.5px; fill: #788296; }
.integration-scope .total-area { fill: url(#syncGradient); }
.integration-scope .total-line { fill: none; stroke: #176cec; stroke-width: 2; }
.integration-scope .success-line { fill: none; stroke: #17a45b; stroke-width: 2; }
.integration-scope .failed-line { fill: none; stroke: #e5484d; stroke-width: 1.7; }

/* Sync Activity */
.integration-scope .sync-activity-list { display: grid; margin-top: 10px; }
.integration-scope .sync-activity-row {
  display: grid;
  grid-template-columns: 32px 1fr auto;
  gap: 12px;
  align-items: start;
  padding: 10px 0;
  border-bottom: 1px solid var(--line);
}
.integration-scope .sync-activity-row:last-child { border-bottom: 0; }
.integration-scope .sync-activity-icon {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 13px;
  font-weight: 800;
}
.integration-scope .sync-activity-icon.success { background: #ddf7e6; color: #159543; }
.integration-scope .sync-activity-icon.failed { background: #ffe5e8; color: #dd3941; }
.integration-scope .sync-activity-copy strong { display: block; font-size: 12px; font-weight: 700; color: #10172f; }
.integration-scope .sync-activity-copy span { display: block; margin-top: 2px; color: #68738a; font-size: 10.5px; }
.integration-scope .sync-activity-time { text-align: right; }
.integration-scope .sync-activity-time strong { display: block; font-size: 11px; color: #4e5a73; font-weight: 700; }
.integration-scope .sync-activity-time span { display: block; margin-top: 2px; font-size: 10px; color: #667085; }

/* Category Donut */
.integration-scope .category-layout { display: flex; align-items: center; gap: 20px; margin-top: 16px; }
.integration-scope .category-donut {
  width: 140px;
  height: 140px;
  flex: 0 0 auto;
  border-radius: 50%;
  background: conic-gradient(
    #7d4ff2 0 28.6%,
    #176cec 28.6% 50%,
    #55c984 50% 64.3%,
    #ff7a00 64.3% 78.6%,
    #f8b84a 78.6% 92.9%,
    #f27d98 92.9% 100%
  );
  position: relative;
}
.integration-scope .category-donut::after {
  content: "";
  position: absolute;
  inset: 30px;
  border-radius: 50%;
  background: #ffffff;
}
.integration-scope .category-center {
  position: absolute;
  inset: 0;
  z-index: 1;
  display: grid;
  place-content: center;
  text-align: center;
}
.integration-scope .category-center strong { font-size: 18px; font-weight: 800; color: #10172f; }
.integration-scope .category-center span { margin-top: 2px; color: #68738a; font-size: 10.5px; }
.integration-scope .category-legend { display: grid; gap: 8px; flex: 1; }
.integration-scope .category-legend-row {
  display: grid;
  grid-template-columns: 10px 1fr auto;
  gap: 8px;
  align-items: center;
}
.integration-scope .category-legend-row i { width: 8px; height: 8px; border-radius: 50%; }
.integration-scope .category-legend-row span { font-size: 11px; color: #33405a; font-weight: 600; }
.integration-scope .category-legend-row strong { font-size: 11px; color: #4b5870; font-weight: 700; }

/* Modals & Toast */
.integration-scope .modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 110;
  padding: 16px;
  display: grid;
  place-items: center;
  background: rgba(14, 22, 43, 0.43);
}
.integration-scope .modal {
  width: min(590px, 100%);
  max-height: 90vh;
  overflow-y: auto;
  padding: 22px;
  border-radius: 14px;
  background: #ffffff;
  box-shadow: var(--shadow-lg);
}
.integration-scope .modal-header {
  padding-bottom: 14px;
  border-bottom: 1px solid var(--line);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.integration-scope .modal-header h2 { margin: 0; font-size: 18px; font-weight: 800; color: #10172f; }
.integration-scope .modal-copy { margin: 12px 0; color: #536078; font-size: 12px; line-height: 1.6; }
.integration-scope .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-top: 16px; }
.integration-scope .form-field { display: grid; gap: 6px; }
.integration-scope .form-field.full { grid-column: 1 / 3; }
.integration-scope .form-field span { font-size: 11.5px; font-weight: 700; color: #10172f; }
.integration-scope .form-field input,
.integration-scope .form-field select,
.integration-scope .form-field textarea {
  width: 100%;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: #ffffff;
  outline: 0;
  font-size: 12px;
}
.integration-scope .form-field input,
.integration-scope .form-field select { height: 40px; padding: 0 12px; }
.integration-scope .form-field textarea { min-height: 85px; padding: 10px; resize: vertical; }
.integration-scope .modal-actions { display: flex; justify-content: flex-end; gap: 10px; margin-top: 18px; }
.integration-scope .modal-secondary,
.integration-scope .modal-primary {
  height: 40px;
  padding: 0 18px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 12px;
  font-weight: 700;
}
.integration-scope .modal-secondary {
  border: 1px solid var(--border);
  background: #ffffff;
  color: #10172f;
  transition: all 0.18s ease;
}
.integration-scope .modal-secondary:hover {
  background: #f8f9fe;
  border-color: #c2c6d5;
}
.integration-scope .modal-primary {
  border: 0;
  background: #fd661d;
  color: #ffffff;
  box-shadow: 0 4px 12px rgba(253, 102, 29, 0.28);
  transition: all 0.2s ease;
}
.integration-scope .modal-primary:hover {
  background: #e55610;
}

.integration-scope .logs-list { display: grid; gap: 10px; margin-top: 16px; }
.integration-scope .log-row {
  padding: 12px;
  border: 1px solid var(--line);
  border-radius: 99px;
  display: grid;
  grid-template-columns: 85px 130px 1fr;
  gap: 12px;
  align-items: center;
  background: #f8f9fe;
}
.integration-scope .log-row time,
.integration-scope .log-row span { font-size: 11px; color: #657087; }
.integration-scope .log-row strong { font-size: 12px; font-weight: 700; color: #10172f; }

.integration-scope .toast {
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 130;
  padding: 12px 18px;
  border-radius: 10px;
  background: #10172f;
  color: #ffffff;
  box-shadow: 0 18px 45px rgba(16, 24, 40, 0.2);
  font-size: 12px;
  font-weight: 600;
}

@media (max-width: 1050px) {
  .integration-scope .desktop-sidebar-wrapper { display: none !important; }
  .integration-scope .kpi-grid { grid-template-columns: repeat(3, 1fr); }
  .integration-scope .main-content-grid { grid-template-columns: 1fr; }
  .integration-scope .detail-card { min-height: 0; }
  .integration-scope .bottom-grid { grid-template-columns: 1fr; }
  .integration-scope .bottom-grid .categories-card { grid-column: auto; }
}

@media (max-width: 768px) {
  .integration-scope { max-width: 100vw; overflow-x: clip; }
  .integration-scope .page { padding: 14px 12px 28px !important; max-width: 100vw; overflow-x: clip; box-sizing: border-box; }
  .integration-scope .page-header {
    display: flex !important;
    flex-direction: column !important;
    align-items: stretch !important;
    gap: 12px !important;
    margin-bottom: 16px !important;
  }
  .integration-scope .page-header h1 { font-size: 22px !important; }
  .integration-scope .header-actions {
    display: grid !important;
    grid-template-columns: 1fr 1fr !important;
    gap: 8px !important;
    width: 100% !important;
  }
  .integration-scope .secondary-header-button,
  .integration-scope .primary-header-button {
    width: 100% !important;
    height: 38px !important;
    padding: 0 10px !important;
    font-size: 12px !important;
    justify-content: center !important;
  }
  
  .integration-scope .kpi-grid {
    display: grid !important;
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    gap: 8px !important;
  }
  .integration-scope .kpi-card { padding: 12px 14px; }
  .integration-scope .kpi-value { font-size: 19px; }

  .integration-scope .integrations-top {
    display: flex !important;
    flex-direction: column !important;
    align-items: stretch !important;
    gap: 10px !important;
  }
  .integration-scope .integration-filters {
    display: grid !important;
    grid-template-columns: 1fr 1fr !important;
    gap: 8px !important;
    width: 100% !important;
  }
  .integration-scope .integration-search {
    grid-column: 1 / -1 !important;
    width: 100% !important;
    min-width: 0 !important;
    max-width: 100% !important;
    height: 38px !important;
  }
  .integration-scope .integration-filters .master-dropdown {
    width: 100% !important;
  }

  .integration-scope .table-scroll { display: none !important; }
  .integration-scope .detail-brand { padding: 12px; gap: 12px; }
  .integration-scope .detail-brand-icon { width: 50px; height: 50px; }
  .integration-scope .detail-brand-icon svg { width: 30px !important; height: 30px !important; }
  .integration-scope .detail-row { grid-template-columns: 95px minmax(0, 1fr); gap: 8px; }

  .integration-scope .modal-overlay {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    padding: 12px 10px !important;
  }
  .integration-scope .modal {
    width: calc(100vw - 20px) !important;
    padding: 16px 14px !important;
    border-radius: 12px !important;
    max-height: 86vh !important;
    overflow-y: auto !important;
  }
  .integration-scope .form-grid {
    grid-template-columns: 1fr !important;
    gap: 10px !important;
  }
  .integration-scope .form-field.full {
    grid-column: 1 / -1 !important;
  }
  .integration-scope .modal-actions {
    display: grid !important;
    grid-template-columns: 1fr 1fr !important;
    gap: 8px !important;
    width: 100% !important;
  }
  .integration-scope .modal-secondary,
  .integration-scope .modal-primary {
    width: 100% !important;
    height: 38px !important;
    justify-content: center !important;
    font-size: 12px !important;
  }
  .integration-scope .log-row { grid-template-columns: 1fr; gap: 4px; border-radius: 10px; padding: 10px; }
  .integration-scope .toast { left: 12px; right: 12px; bottom: 16px; width: auto; max-width: none; text-align: center; justify-content: center; }
}

@media (max-width: 480px) {
  .integration-scope .header-actions { display: grid !important; grid-template-columns: 1fr 1fr !important; gap: 8px !important; width: 100% !important; }
  .integration-scope .modal-actions { display: grid !important; grid-template-columns: 1fr 1fr !important; gap: 8px !important; width: 100% !important; }
}
`;

const initialIntegrations = [
  {
    id: "shopify",
    name: "Shopify",
    subtitle: "E-commerce Platform",
    category: "E-commerce",
    status: "Active",
    lastSyncPrimary: "2 minutes ago",
    lastSyncSecondary: "May 18, 2025 10:28 AM",
    nextSyncPrimary: "In 58 minutes",
    nextSyncSecondary: "May 18, 2025 11:30 AM",
    brand: "shopify",
    description: "Sync products, orders, inventory and customers between your store and Shopify.",
    connectedOn: "May 10, 2025 02:30 PM",
    apiKey: "sk_live_amihive_1234",
    webhook: "https://api.amihive.com/webhooks/shopify",
    frequency: "Every 30 minutes",
    dataSync: ["Products", "Orders", "Inventory", "Customers"],
  },
  {
    id: "razorpay",
    name: "Razorpay",
    subtitle: "Payment Gateway",
    category: "Payments",
    status: "Active",
    lastSyncPrimary: "5 minutes ago",
    lastSyncSecondary: "May 18, 2025 10:25 AM",
    nextSyncPrimary: "In 25 minutes",
    nextSyncSecondary: "May 18, 2025 10:50 AM",
    brand: "razorpay",
    description: "Synchronize settlements, payment events, refunds and transaction status with Razorpay.",
    connectedOn: "Apr 22, 2025 09:15 AM",
    apiKey: "rzp_live_amihive_7782",
    webhook: "https://api.amihive.com/webhooks/razorpay",
    frequency: "Every 15 minutes",
    dataSync: ["Payments", "Refunds", "Settlements"],
  },
  {
    id: "shiprocket",
    name: "Shiprocket",
    subtitle: "Shipping & Logistics",
    category: "Shipping",
    status: "Active",
    lastSyncPrimary: "15 minutes ago",
    lastSyncSecondary: "May 18, 2025 10:15 AM",
    nextSyncPrimary: "In 1 hour 45 mins",
    nextSyncSecondary: "May 18, 2025 12:15 PM",
    brand: "shiprocket",
    description: "Sync shipments, tracking events, courier availability and delivery status.",
    connectedOn: "Mar 18, 2025 12:40 PM",
    apiKey: "shr_live_amihive_9921",
    webhook: "https://api.amihive.com/webhooks/shiprocket",
    frequency: "Every 2 hours",
    dataSync: ["Orders", "Shipments", "Tracking"],
  },
  {
    id: "mailchimp",
    name: "Mailchimp",
    subtitle: "Email Marketing",
    category: "Marketing",
    status: "Inactive",
    lastSyncPrimary: "2 days ago",
    lastSyncSecondary: "May 16, 2025 09:20 AM",
    nextSyncPrimary: "-",
    nextSyncSecondary: "",
    brand: "mailchimp",
    description: "Synchronize customer audiences and marketing consent with Mailchimp.",
    connectedOn: "Feb 11, 2025 08:30 AM",
    apiKey: "mc_live_amihive_5542",
    webhook: "https://api.amihive.com/webhooks/mailchimp",
    frequency: "Manual",
    dataSync: ["Customers", "Segments"],
  },
  {
    id: "google-analytics",
    name: "Google Analytics",
    subtitle: "Analytics Platform",
    category: "Analytics",
    status: "Active",
    lastSyncPrimary: "1 hour ago",
    lastSyncSecondary: "May 18, 2025 09:30 AM",
    nextSyncPrimary: "In 2 hours",
    nextSyncSecondary: "May 18, 2025 12:00 PM",
    brand: "google",
    description: "Send storefront events, conversions and commerce analytics to Google Analytics.",
    connectedOn: "Jan 29, 2025 03:10 PM",
    apiKey: "ga4_amihive_4822",
    webhook: "https://api.amihive.com/webhooks/analytics",
    frequency: "Every hour",
    dataSync: ["Events", "Orders", "Conversions"],
  },
  {
    id: "whatsapp",
    name: "WhatsApp Business",
    subtitle: "Communication",
    category: "Communication",
    status: "Failed",
    lastSyncPrimary: "3 hours ago",
    lastSyncSecondary: "May 18, 2025 07:45 AM",
    nextSyncPrimary: "Retry in 15 mins",
    nextSyncSecondary: "May 18, 2025 10:15 AM",
    brand: "whatsapp",
    description: "Send order, shipment and customer-service notifications through WhatsApp Business.",
    connectedOn: "May 02, 2025 01:20 PM",
    apiKey: "wa_live_amihive_2255",
    webhook: "https://api.amihive.com/webhooks/whatsapp",
    frequency: "Real time",
    dataSync: ["Messages", "Customers", "Orders"],
  },
  {
    id: "facebook-pixel",
    name: "Facebook Pixel",
    subtitle: "Advertising & Tracking",
    category: "Advertising",
    status: "Active",
    lastSyncPrimary: "4 hours ago",
    lastSyncSecondary: "May 18, 2025 06:45 AM",
    nextSyncPrimary: "In 4 hours",
    nextSyncSecondary: "May 18, 2025 02:45 PM",
    brand: "facebook",
    description: "Send storefront conversion and audience events to Meta advertising services.",
    connectedOn: "Dec 12, 2024 10:00 AM",
    apiKey: "meta_amihive_8877",
    webhook: "https://api.amihive.com/webhooks/meta",
    frequency: "Every 4 hours",
    dataSync: ["Events", "Conversions", "Customers"],
  },
];

const categoryDistribution = [
  { label: "E-commerce", value: "4 (28.6%)", color: "#7d4ff2" },
  { label: "Payments", value: "3 (21.4%)", color: "#176cec" },
  { label: "Shipping", value: "2 (14.3%)", color: "#55c984" },
  { label: "Marketing", value: "2 (14.3%)", color: "#ff7a00" },
  { label: "Analytics", value: "2 (14.3%)", color: "#f8b84a" },
  { label: "Communication", value: "1 (7.1%)", color: "#f27d98" },
];

const recentSyncs = [
  { id: 1, name: "Shopify - Products Sync", text: "156 products synced successfully", relative: "2 minutes ago", time: "10:28 AM", status: "success" },
  { id: 2, name: "Razorpay - Payments Sync", text: "28 payments synced successfully", relative: "5 minutes ago", time: "10:25 AM", status: "success" },
  { id: 3, name: "WhatsApp Business - Messages Sync", text: "Failed to sync 12 messages", relative: "3 hours ago", time: "07:45 AM", status: "failed" },
  { id: 4, name: "Google Analytics - Events Sync", text: "342 events synced successfully", relative: "1 hour ago", time: "09:30 AM", status: "success" },
];

const syncTotal = [700, 880, 930, 1010, 950, 900, 980];
const syncSuccess = [350, 510, 520, 410, 550, 570, 620];
const syncFailed = [5, 4, 7, 8, 6, 10, 7];

function IntegrationBrandIcon({ brand }) {
  const map = {
    shopify: [SiShopify, "#63b54b"],
    razorpay: [SiRazorpay, "#1266eb"],
    mailchimp: [SiMailchimp, "#1d1d1d"],
    google: [SiGoogleanalytics, "#f59e0b"],
    whatsapp: [SiWhatsapp, "#25d366"],
    facebook: [SiFacebook, "#1877f2"],
  };

  if (brand === "shiprocket") {
    return <FiPackage color="#6a3df0" style={{ display: "block", margin: "auto" }} />;
  }

  const [Icon, color] = map[brand] || [FiPackage, "#4c5b73"];
  return <Icon color={color} style={{ display: "block", margin: "auto" }} />;
}

function categoryClass(category) {
  return `category-${category.toLowerCase().replaceAll(" ", "").replaceAll("-", "").replace("&", "")}`;
}

function buildPath(values, width, height, padX = 30, padY = 18) {
  const max = Math.max(...values);
  const min = Math.min(...values);
  const span = max - min || 1;
  const points = values.map((value, index) => ({
    x: padX + (index / (values.length - 1)) * (width - padX * 2),
    y: padY + (1 - (value - min) / span) * (height - padY * 2),
  }));

  let path = `M ${points[0].x} ${points[0].y}`;
  for (let i = 0; i < points.length - 1; i++) {
    const current = points[i];
    const next = points[i + 1];
    const cx = (current.x + next.x) / 2;
    path += ` C ${cx} ${current.y}, ${cx} ${next.y}, ${next.x} ${next.y}`;
  }
  return path;
}

function PageHeader({ onViewLogs, onAddIntegration }) {
  return (
    <section className="page-header">
      <div>
        <h1>Integration Management</h1>
        <p>Connect and manage third-party services and platforms.</p>
      </div>

      <div className="header-actions">
        <button className="secondary-header-button" type="button" onClick={onViewLogs}>
          <FiFileText /> View Logs
        </button>
        <button className="primary-header-button" type="button" onClick={onAddIntegration}>
          <FiPlus /> Add Integration
        </button>
      </div>
    </section>
  );
}

const kpiItems = [
  ["Total Integrations", "14", "+16.7%", "vs last 7 days", "purple", FiLink],
  ["Active Integrations", "10", "+25%", "vs last 7 days", "success", FiCheck],
  ["Inactive Integrations", "2", "-33.3%", "vs last 7 days", "warning", FiPauseCircle],
  ["Failed Integrations", "2", "-50%", "vs last 7 days", "danger", FiAlertCircle],
  ["Successful Syncs", "1,248", "+18.4%", "vs last 7 days", "trust", FiRefreshCw],
];

function KpiSection() {
  return (
    <section className="kpi-grid js-reveal">
      {kpiItems.map((item) => (
        <KpiCard key={item[0]} item={item} />
      ))}
    </section>
  );
}

function IntegrationTabs({ active, onChange, counts }) {
  const tabs = [
    { label: "All", count: counts?.all ?? 14 },
    { label: "Active", count: counts?.active ?? 10 },
    { label: "Inactive", count: counts?.inactive ?? 2 },
    { label: "Failed", count: counts?.failed ?? 2 },
  ];

  return (
    <div className="tabs">
      {tabs.map((tab) => (
        <button
          key={tab.label}
          type="button"
          className={`tab ${active === tab.label ? "active" : ""}`}
          onClick={() => onChange(tab.label)}
        >
          {tab.label}
          <b>{tab.count}</b>
        </button>
      ))}
    </div>
  );
}

function IntegrationFilters({ category, setCategory, search, setSearch, failedOnly, setFailedOnly, categories, onToast }) {
  const categoryOptions = useMemo(
    () => [
      { value: "All Categories", label: "All Categories" },
      ...categories.map((c) => ({ value: c, label: c })),
    ],
    [categories]
  );

  return (
    <div className="filters">
      <label className="field">
        <FiSearch style={{ fontSize: 14, color: "#667085", flexShrink: 0 }} />
        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search integrations..."
        />
      </label>

      <MasterDropdown
        value={category}
        onChange={(val) => setCategory(val)}
        options={categoryOptions}
      />

      <button
        className="filterbtn"
        type="button"
        onClick={() => {
          setFailedOnly((v) => !v);
          if (onToast) onToast(!failedOnly ? "Filter active: Showing failed integrations." : "Filter reset: Showing all.");
        }}
        style={failedOnly ? { borderColor: "#e5484d", color: "#e5484d", background: "#fff8f9" } : undefined}
      >
        <FiFilter /> Filters
      </button>
    </div>
  );
}

function IntegrationTableStatus({ status }) {
  return (
    <span className={`status-pill ${status.toLowerCase()}`}>
      <i className="status-dot" />
      {status}
    </span>
  );
}

function SyncTime({ primary, secondary, retry = false }) {
  return (
    <div className={`sync-time ${retry ? "retry" : ""}`}>
      <strong>{primary}</strong>
      {secondary && <small>{secondary}</small>}
    </div>
  );
}

function IntegrationRow({ integration, isSelected, onSelect, onEdit, onMore }) {
  return (
    <tr className={isSelected ? "selected" : ""}>
      <td>
        <button type="button" style={{ all: "unset", cursor: "pointer" }} onClick={() => onSelect(integration)}>
          <div className="integration-cell">
            <span className="integration-brand-icon">
              <IntegrationBrandIcon brand={integration.brand} />
            </span>
            <div>
              <strong>{integration.name}</strong>
              <small>{integration.subtitle}</small>
            </div>
          </div>
        </button>
      </td>
      <td>
        <span className={`category-pill ${categoryClass(integration.category)}`}>{integration.category}</span>
      </td>
      <td>
        <IntegrationTableStatus status={integration.status} />
      </td>
      <td>
        <SyncTime primary={integration.lastSyncPrimary} secondary={integration.lastSyncSecondary} />
      </td>
      <td>
        <SyncTime primary={integration.nextSyncPrimary} secondary={integration.nextSyncSecondary} retry={integration.status === "Failed"} />
      </td>
      <td>
        <div className="table-actions">
          <button
            type="button"
            className={isSelected ? "active-action" : ""}
            onClick={() => onSelect(integration)}
            aria-label={`View details for ${integration.name}`}
            title="View Details"
          >
            <FiEye />
          </button>
          <button
            type="button"
            onClick={() => onEdit(integration)}
            aria-label={`Edit ${integration.name}`}
            title="Edit Configuration"
          >
            <FiEdit2 />
          </button>
          <button
            type="button"
            className="delete-btn"
            onClick={() => onMore(integration)}
            aria-label={`Delete ${integration.name}`}
            title="Delete Integration"
          >
            <FiTrash2 />
          </button>
        </div>
      </td>
    </tr>
  );
}

function DesktopIntegrationTable({ integrations, selectedId, onSelect, onEdit, onMore }) {
  return (
    <div className="table-scroll">
      <table className="integration-table">
        <thead>
          <tr>
            <th>Integration</th>
            <th>Category</th>
            <th>Status</th>
            <th>Last Sync</th>
            <th>Next Sync</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {integrations.map((integration) => (
            <IntegrationRow
              key={integration.id}
              integration={integration}
              isSelected={integration.id === selectedId}
              onSelect={onSelect}
              onEdit={onEdit}
              onMore={onMore}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function MobileIntegrationList({ integrations, onSelect, onEdit }) {
  return (
    <MobileTableCards
      items={integrations}
      renderItem={(integration) => (
        <MobileTableCard
          key={integration.id}
          title={integration.name}
          subtitle={integration.subtitle}
          badge={<IntegrationTableStatus status={integration.status} />}
          meta={[
            { label: "Category", value: integration.category },
            { label: "Last Sync", value: integration.lastSyncPrimary },
            { label: "Next Sync", value: integration.nextSyncPrimary },
            { label: "Frequency", value: integration.frequency },
          ]}
          actions={
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, width: "100%" }}>
              <button
                type="button"
                className="mobile-table-card-action-btn"
                onClick={() => onSelect(integration)}
              >
                <FiEye /> View Details
              </button>
              <button
                type="button"
                className="mobile-table-card-action-btn"
                onClick={() => onEdit(integration)}
              >
                <FiSettings /> Configure
              </button>
            </div>
          }
        />
      )}
    />
  );
}

function DeleteIntegrationModal({ integration, onClose, onConfirm }) {
  return (
    <motion.div className="modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div className="modal" initial={{ y: 18, scale: 0.98 }} animate={{ y: 0, scale: 1 }} exit={{ y: 18, scale: 0.98 }} onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Disconnect {integration.name}</h2>
          <button className="modal-close" type="button" onClick={onClose} title="Close" aria-label="Close">
            <FiX size={16} />
          </button>
        </div>
        <div style={{ background: "#fff5e6", border: "1px solid #fed7aa", borderRadius: 8, padding: "10px 12px", display: "flex", gap: 10, alignItems: "flex-start", marginTop: 12 }}>
          <FiAlertTriangle style={{ color: "#d97706", fontSize: 18, flexShrink: 0, marginTop: 2 }} />
          <div style={{ fontSize: 11.5, color: "#92400e", lineHeight: 1.4 }}>
            <strong>Caution:</strong> Disconnecting this integration will immediately halt all automated sync events (products, inventory, payments, or orders) between your store and {integration.name}. Active webhooks and API keys will be revoked.
          </div>
        </div>
        <p className="modal-copy" style={{ marginTop: 12 }}>
          Are you sure you want to remove <strong>{integration.name}</strong> from your active store integrations?
        </p>
        <div className="modal-actions" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 16 }}>
          <button className="modal-secondary" type="button" onClick={onClose}>
            Cancel
          </button>
          <button className="modal-primary" style={{ background: "#d32f2f" }} type="button" onClick={() => onConfirm(integration)}>
            <FiTrash2 /> Disconnect
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Pagination() {
  return (
    <div className="pagination">
      <button type="button">
        <FiChevronLeft />
      </button>
      <button type="button" className="active">
        1
      </button>
      <button type="button">2</button>
      <button type="button">
        <FiChevronRight />
      </button>
    </div>
  );
}

function IntegrationsCard({
  integrations,
  allIntegrations,
  tab,
  setTab,
  category,
  setCategory,
  search,
  setSearch,
  failedOnly,
  setFailedOnly,
  categories,
  selectedId,
  onSelect,
  onEdit,
  onMore,
  onToast,
}) {
  const counts = useMemo(() => {
    const list = allIntegrations || integrations || [];
    return {
      all: list.length,
      active: list.filter((i) => i.status === "Active").length,
      inactive: list.filter((i) => i.status === "Inactive").length,
      failed: list.filter((i) => i.status === "Failed").length,
    };
  }, [allIntegrations, integrations]);

  return (
    <section className="card integrations-card">
      <IntegrationTabs active={tab} onChange={setTab} counts={counts} />

      <IntegrationFilters
        category={category}
        setCategory={setCategory}
        search={search}
        setSearch={setSearch}
        failedOnly={failedOnly}
        setFailedOnly={setFailedOnly}
        categories={categories}
        onToast={onToast}
      />

      <DesktopIntegrationTable
        integrations={integrations}
        selectedId={selectedId}
        onSelect={onSelect}
        onEdit={onEdit}
        onMore={onMore}
      />
      <MobileIntegrationList
        integrations={integrations}
        onSelect={onSelect}
        onEdit={onEdit}
      />

      <div className="table-footer">
        <span>Showing 1 to {integrations.length} of {counts.all} integrations</span>
        <Pagination />
      </div>
    </section>
  );
}

function DetailRow({ label, children }) {
  return (
    <div className="detail-row">
      <span>{label}</span>
      <div className="detail-value">{children}</div>
    </div>
  );
}

function IntegrationDetails(props) {
  return (
    <IntegrationDetailsDrawer
      {...props}
      BrandIconComponent={IntegrationBrandIcon}
      StatusComponent={IntegrationTableStatus}
    />
  );
}

function SynchronizationChart() {
  const width = 520;
  const height = 170;
  const totalPath = buildPath(syncTotal, width, height);
  const successPath = buildPath(syncSuccess, width, height);
  const failedPath = buildPath(syncFailed, width, height);

  return (
    <svg className="sync-chart" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none">
      <defs>
        <linearGradient id="syncGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#176cec" stopOpacity=".14" />
          <stop offset="100%" stopColor="#176cec" stopOpacity="0" />
        </linearGradient>
      </defs>

      {[35, 70, 105, 140].map((y) => (
        <line key={y} x1="30" x2="500" y1={y} y2={y} className="chart-grid-line" />
      ))}

      <text x="4" y="38" className="chart-axis">1.2K</text>
      <text x="8" y="73" className="chart-axis">900</text>
      <text x="8" y="108" className="chart-axis">600</text>
      <text x="8" y="143" className="chart-axis">300</text>
      <text x="19" y="165" className="chart-axis">0</text>

      <path d={`${totalPath} L 490 153 L 30 153 Z`} className="total-area" />
      <path d={totalPath} className="total-line" />
      <path d={successPath} className="success-line" />
      <path d={failedPath} className="failed-line" />

      {["May 12", "May 13", "May 14", "May 15", "May 16", "May 17", "May 18"].map((label, index) => (
        <text key={label} x={36 + index * 72} y="166" className="chart-axis">
          {label}
        </text>
      ))}
    </svg>
  );
}

function SynchronizationOverview() {
  const [period, setPeriod] = useState("This Week");

  return (
    <section className="card bottom-card">
      <div className="card-head">
        <h3>Synchronization Overview</h3>
        <MasterDropdown
          value={period}
          onChange={(val) => setPeriod(val)}
          options={[
            { value: "This Week", label: "This Week" },
            { value: "Last Week", label: "Last Week" },
            { value: "This Month", label: "This Month" },
          ]}
          rightAlign
        />
      </div>

      <div className="sync-legend">
        <span><i className="sync-success" />Successful</span>
        <span><i className="sync-failed" />Failed</span>
        <span><i className="sync-total" />Total Syncs</span>
      </div>

      <SynchronizationChart />
    </section>
  );
}

function SyncActivityRow({ item }) {
  return (
    <div className="sync-activity-row">
      <span className={`sync-activity-icon ${item.status}`}>{item.status === "success" ? <FiCheck /> : <FiX />}</span>
      <div className="sync-activity-copy">
        <strong>{item.name}</strong>
        <span>{item.text}</span>
      </div>
      <div className="sync-activity-time">
        <strong>{item.relative}</strong>
        <span>{item.time}</span>
      </div>
    </div>
  );
}

function RecentSyncActivities() {
  return (
    <section className="card bottom-card">
      <div className="card-head">
        <h3>Recent Sync Activities</h3>
        <button type="button">View all</button>
      </div>
      <div className="sync-activity-list">
        {recentSyncs.map((item) => (
          <SyncActivityRow key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

function IntegrationCategories() {
  return (
    <section className="card bottom-card categories-card">
      <div className="card-head">
        <h3>Integration Categories</h3>
        <button type="button">View all</button>
      </div>
      <MasterPieChart
        shape="circle"
        centerTitle="TOTAL"
        centerValue="14"
        data={categoryDistribution.map((item) => [item.label, item.value, item.color])}
        conicGradient="conic-gradient(#7d4ff2 0 28.6%, #176cec 28.6% 50%, #55c984 50% 64.3%, #ff7a00 64.3% 78.6%, #f8b84a 78.6% 92.9%, #f27d98 92.9% 100%)"
      />
    </section>
  );
}

function BottomAnalytics() {
  return (
    <section className="bottom-grid">
      <SynchronizationOverview />
      <RecentSyncActivities />
      <IntegrationCategories />
    </section>
  );
}

function FormField({ label, full = false, children }) {
  return (
    <label className={`form-field ${full ? "full" : ""}`}>
      <span>{label}</span>
      {children}
    </label>
  );
}

function AddIntegrationModal({ onClose, onAdd }) {
  const [form, setForm] = useState({
    name: "",
    subtitle: "",
    category: "E-commerce",
    webhook: "",
    frequency: "Every 30 minutes",
  });

  const update = (key, value) => setForm((current) => ({ ...current, [key]: value }));

  const submit = (event) => {
    event.preventDefault();
    if (!form.name.trim()) return;

    onAdd({
      id: `custom-${Date.now()}`,
      name: form.name.trim(),
      subtitle: form.subtitle.trim() || "Third-party Integration",
      category: form.category,
      status: "Inactive",
      lastSyncPrimary: "Never",
      lastSyncSecondary: "",
      nextSyncPrimary: "-",
      nextSyncSecondary: "",
      brand: "custom",
      description: `Custom ${form.name.trim()} integration.`,
      connectedOn: new Date().toLocaleString(),
      apiKey: "new_integration_key",
      webhook: form.webhook || "https://api.amihive.com/webhooks/custom",
      frequency: form.frequency,
      dataSync: ["Orders"],
    });
  };

  return (
    <motion.div className="modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.form
        className="modal"
        initial={{ y: 18, scale: 0.98 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: 18, scale: 0.98 }}
        onClick={(event) => event.stopPropagation()}
        onSubmit={submit}
      >
        <div className="modal-header">
          <h2>Add Integration</h2>
          <button className="modal-close" type="button" onClick={onClose} title="Close" aria-label="Close">
            <FiX size={16} />
          </button>
        </div>
        <p className="modal-copy">Add a new service connection. The integration is created as inactive until its credentials are tested successfully.</p>

        <div className="form-grid">
          <FormField label="Integration Name">
            <input value={form.name} onChange={(event) => update("name", event.target.value)} placeholder="e.g. Klaviyo" required />
          </FormField>
          <FormField label="Category">
            <MasterDropdown
              value={form.category}
              onChange={(val) => update("category", val)}
              options={[
                { value: "E-commerce", label: "E-commerce" },
                { value: "Payments", label: "Payments" },
                { value: "Shipping", label: "Shipping" },
                { value: "Marketing", label: "Marketing" },
                { value: "Analytics", label: "Analytics" },
                { value: "Communication", label: "Communication" },
                { value: "Advertising", label: "Advertising" },
              ]}
            />
          </FormField>
          <FormField label="Service Type">
            <input value={form.subtitle} onChange={(event) => update("subtitle", event.target.value)} placeholder="e.g. Email Marketing" />
          </FormField>
          <FormField label="Sync Frequency">
            <MasterDropdown
              value={form.frequency}
              onChange={(val) => update("frequency", val)}
              options={[
                { value: "Every 15 minutes", label: "Every 15 minutes" },
                { value: "Every 30 minutes", label: "Every 30 minutes" },
                { value: "Every hour", label: "Every hour" },
                { value: "Every 2 hours", label: "Every 2 hours" },
                { value: "Manual", label: "Manual" },
              ]}
            />
          </FormField>
          <FormField label="Webhook URL" full>
            <input value={form.webhook} onChange={(event) => update("webhook", event.target.value)} placeholder="https://api.amihive.com/webhooks/..." />
          </FormField>
        </div>

        <div className="modal-actions">
          <button className="modal-secondary" type="button" onClick={onClose}>
            Cancel
          </button>
          <button className="modal-primary" type="submit">
            <FiPlus /> Add Integration
          </button>
        </div>
      </motion.form>
    </motion.div>
  );
}

function EditIntegrationModal({ integration, onClose, onSave }) {
  const [form, setForm] = useState({
    webhook: integration.webhook,
    frequency: integration.frequency,
    status: integration.status,
  });

  return (
    <motion.div className="modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.form
        className="modal"
        initial={{ y: 18, scale: 0.98 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: 18, scale: 0.98 }}
        onClick={(event) => event.stopPropagation()}
        onSubmit={(event) => {
          event.preventDefault();
          onSave({ ...integration, ...form });
        }}
      >
        <div className="modal-header">
          <h2>Edit {integration.name}</h2>
          <button className="modal-close" type="button" onClick={onClose} title="Close" aria-label="Close">
            <FiX size={16} />
          </button>
        </div>

        <div className="form-grid">
          <FormField label="Webhook URL" full>
            <input value={form.webhook} onChange={(event) => setForm((current) => ({ ...current, webhook: event.target.value }))} />
          </FormField>
          <FormField label="Sync Frequency">
            <MasterDropdown
              value={form.frequency}
              onChange={(val) => setForm((current) => ({ ...current, frequency: val }))}
              options={[
                { value: "Every 15 minutes", label: "Every 15 minutes" },
                { value: "Every 30 minutes", label: "Every 30 minutes" },
                { value: "Every hour", label: "Every hour" },
                { value: "Every 2 hours", label: "Every 2 hours" },
                { value: "Every 4 hours", label: "Every 4 hours" },
                { value: "Manual", label: "Manual" },
                { value: "Real time", label: "Real time" },
              ]}
            />
          </FormField>
          <FormField label="Status">
            <MasterDropdown
              value={form.status}
              onChange={(val) => setForm((current) => ({ ...current, status: val }))}
              options={[
                { value: "Active", label: "Active" },
                { value: "Inactive", label: "Inactive" },
                { value: "Failed", label: "Failed" },
              ]}
            />
          </FormField>
        </div>

        <div className="modal-actions" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 18 }}>
          <button className="modal-secondary" type="button" onClick={onClose}>
            Cancel
          </button>
          <button className="modal-primary" type="submit" style={{ justifyContent: "center" }}>
            <FiSettings /> Save Configuration
          </button>
        </div>
      </motion.form>
    </motion.div>
  );
}

function LogsModal({ onClose }) {
  const logs = [
    ["10:28 AM", "Shopify", "Products sync completed successfully"],
    ["10:25 AM", "Razorpay", "Payments sync completed successfully"],
    ["09:30 AM", "Google Analytics", "342 events synchronized"],
    ["07:45 AM", "WhatsApp Business", "12 message events failed to synchronize"],
  ];

  return (
    <motion.div className="modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div className="modal" initial={{ y: 18, scale: 0.98 }} animate={{ y: 0, scale: 1 }} exit={{ y: 18, scale: 0.98 }} onClick={(event) => event.stopPropagation()}>
        <div className="modal-header">
          <h2>Integration Logs</h2>
          <button className="modal-close" type="button" onClick={onClose} title="Close" aria-label="Close">
            <FiX size={16} />
          </button>
        </div>
        <div className="logs-list">
          {logs.map(([time, service, message]) => (
            <div className="log-row" key={`${time}-${service}`}>
              <time>{time}</time>
              <strong>{service}</strong>
              <span>{message}</span>
            </div>
          ))}
        </div>
        <div className="modal-actions">
          <button className="modal-primary" type="button" onClick={onClose}>
            Close
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function IntegrationManagement() {
  const [desktopSidebarOpen, setDesktopSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [integrations, setIntegrations] = useState(initialIntegrations);
  const [selectedId, setSelectedId] = useState(null);
  const [tab, setTab] = useState("All");
  const [category, setCategory] = useState("All Categories");
  const [search, setSearch] = useState("");
  const [failedOnly, setFailedOnly] = useState(false);

  const [addOpen, setAddOpen] = useState(false);
  const [editIntegration, setEditIntegration] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [logsOpen, setLogsOpen] = useState(false);
  const [toast, setToast] = useState("");
  const toastTimer = useRef(null);

  useEffect(() => {
    return () => {
      if (toastTimer.current) clearTimeout(toastTimer.current);
    };
  }, []);

  const handleToggleMenu = () => {
    if (window.innerWidth <= 980) {
      setMobileMenuOpen((prev) => !prev);
    } else {
      setDesktopSidebarOpen((prev) => !prev);
    }
  };

  const showToast = (message) => {
    setToast(message);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(""), 2300);
  };

  const categories = useMemo(() => [...new Set(integrations.map((item) => item.category))], [integrations]);

  const filtered = useMemo(
    () =>
      integrations.filter((item) => {
        const q = search.trim().toLowerCase();
        const searchOk = !q || item.name.toLowerCase().includes(q) || item.subtitle.toLowerCase().includes(q) || item.category.toLowerCase().includes(q);
        const tabOk = tab === "All" || item.status === tab;
        const categoryOk = category === "All Categories" || item.category === category;
        const failedOk = !failedOnly || item.status === "Failed";
        return searchOk && tabOk && categoryOk && failedOk;
      }),
    [integrations, search, tab, category, failedOnly]
  );

  const selected = useMemo(() => integrations.find((item) => item.id === selectedId) || null, [integrations, selectedId]);

  const saveIntegration = (updated) => {
    setIntegrations((current) => current.map((item) => (item.id === updated.id ? updated : item)));
    setEditIntegration(null);
    showToast(`${updated.name} configuration saved.`);
  };

  const deleteIntegration = (target) => {
    setIntegrations((current) => current.filter((item) => item.id !== target.id));
    if (selectedId === target.id) setSelectedId(null);
    setDeleteTarget(null);
    showToast(`${target.name} integration disconnected.`);
  };

  const addIntegration = (integration) => {
    setIntegrations((current) => [integration, ...current]);
    setSelectedId(integration.id);
    setAddOpen(false);
    showToast(`${integration.name} added. Test the connection before activation.`);
  };

  const testConnection = (integration, type) => {
    const names = { full: "Connection", auth: "Authentication", webhook: "Webhook", sync: "Test sync" };
    showToast(`${names[type] || "Connection"} test passed for ${integration.name}.`);
  };

  return (
    <div className="integration-scope">
      <style>{styles}</style>

      <div className="admin-shell">
        {desktopSidebarOpen && (
          <div className="desktop-sidebar-wrapper">
            <AdminSidebar activePage="Integrations" onClose={() => setDesktopSidebarOpen(false)} />
          </div>
        )}
        <AnimatePresence>
          {mobileMenuOpen && (
            <AdminSidebar activePage="Integrations" mobile onClose={() => setMobileMenuOpen(false)} />
          )}
        </AnimatePresence>

        <main className="dashboard-main">
          <AdminTopbar onToggleSidebar={handleToggleMenu} desktopSidebarOpen={desktopSidebarOpen} />

          <div className="page">
            <PageHeader onViewLogs={() => setLogsOpen(true)} onAddIntegration={() => setAddOpen(true)} />
            <KpiSection />

            <section className={`main-content-grid ${selected ? "has-selection" : ""}`}>
              <IntegrationsCard
                integrations={filtered}
                allIntegrations={integrations}
                tab={tab}
                setTab={setTab}
                category={category}
                setCategory={setCategory}
                search={search}
                setSearch={setSearch}
                failedOnly={failedOnly}
                setFailedOnly={setFailedOnly}
                categories={categories}
                selectedId={selectedId}
                onSelect={(integration) => setSelectedId((current) => (current === integration.id ? null : integration.id))}
                onEdit={(integration) => {
                  setSelectedId(null);
                  setEditIntegration(integration);
                }}
                onMore={(integration) => setDeleteTarget(integration)}
                onToast={showToast}
              />

              <AnimatePresence>
                {selected && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <IntegrationDetails
                      integration={selected}
                      onClose={() => setSelectedId(null)}
                      onEdit={setEditIntegration}
                      onTest={testConnection}
                      onToast={showToast}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </section>

            <BottomAnalytics />
          </div>
        </main>
      </div>

      <AnimatePresence>
        {addOpen && <AddIntegrationModal onClose={() => setAddOpen(false)} onAdd={addIntegration} />}
      </AnimatePresence>

      <AnimatePresence>
        {editIntegration && (
          <EditIntegrationModal integration={editIntegration} onClose={() => setEditIntegration(null)} onSave={saveIntegration} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {deleteTarget && (
          <DeleteIntegrationModal
            integration={deleteTarget}
            onClose={() => setDeleteTarget(null)}
            onConfirm={deleteIntegration}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>{logsOpen && <LogsModal onClose={() => setLogsOpen(false)} />}</AnimatePresence>

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
