import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AdminSidebar from "../../../components/Admin/AdminSidebar";
import AdminTopbar from "../../../components/Admin/AdminTopbar";
import KpiCard from "../../../components/Admin/KpiCard";
import MasterDropdown from "../../../components/Admin/MasterDropdown";
import IntegrationDetailsDrawer from "../../../components/Admin/IntegrationDetailsDrawer";
import AnimatedCheckbox from "../../../components/Admin/AnimatedCheckbox";
import MobileTableCards, { MobileTableCard } from "../../../components/Admin/MobileTableCards";
import MasterDatePicker from "../../../components/Admin/MasterDatePicker";
import MasterPieChart from "../../../components/Admin/MasterPieChart";
import {
  FiAlertCircle,
  FiAward,
  FiBarChart2,
  FiBriefcase,
  FiChevronLeft,
  FiChevronRight,
  FiDownload,
  FiEdit2,
  FiEye,
  FiFilter,
  FiGift,
  FiHeart,
  FiMail,
  FiPauseCircle,
  FiPlayCircle,
  FiPlus,
  FiRefreshCw,
  FiSave,
  FiSearch,
  FiShoppingBag,
  FiShoppingCart,
  FiTag,
  FiTarget,
  FiTrash2,
  FiUserCheck,
  FiUserPlus,
  FiUsers,
  FiX,
} from "react-icons/fi";

const css = String.raw`
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap");

.segments-scope {
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
  background: var(--bg);
  color: var(--text);
  font-family: 'Manrope', system-ui, sans-serif;
}

.segments-scope * { box-sizing: border-box; }
.segments-scope button, .segments-scope input, .segments-scope select { font: inherit; }
.segments-scope button { cursor: pointer; }

.segments-scope .admin-shell {
  display: flex;
  min-height: 100vh;
  background: var(--bg);
}

.segments-scope .desktop-sidebar-wrapper {
  width: 256px;
  min-width: 256px;
  flex-shrink: 0;
}
.segments-scope .desktop-sidebar-wrapper.is-closed {
  display: none;
}

.segments-scope .dashboard-main {
  flex: 1;
  min-width: 0;
}

.segments-scope .page {
  padding: 22px 28px 36px;
}

.segments-scope .page-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 14px;
  margin-bottom: 18px;
}

.segments-scope .page-head h1 {
  font-size: 28px;
  letter-spacing: -.02em;
  font-weight: 800;
  margin: 0;
  color: #10172f;
}

.segments-scope .page-head p {
  font-size: 12px;
  margin: 5px 0 0;
  color: var(--muted);
  font-weight: 500;
}

.segments-scope .head-actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

/* Primary Action Buttons (#FD661D) */
.segments-scope .primary-btn {
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
.segments-scope .primary-btn:hover {
  background: var(--orange-dark);
  transform: translateY(-1px);
  box-shadow: 0 6px 16px rgba(253, 102, 29, 0.32);
}

.segments-scope .kpi-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(150px, 1fr));
  gap: 14px;
  margin-bottom: 20px;
}

.segments-scope .grid-layout {
  display: block;
  margin-bottom: 18px;
}
.segments-scope .bottom-grid {
  display: grid;
  grid-template-columns: minmax(280px, 1fr) minmax(280px, 1fr) minmax(280px, 1fr);
  gap: 14px;
  margin-top: 18px;
}

.segments-scope .card {
  background: #ffffff;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  overflow: hidden;
}
.segments-scope .side-panel {
  padding: 16px;
  display: flex;
  flex-direction: column;
}

.segments-scope .donut-layout {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 12px;
}
.segments-scope .donut-chart {
  width: 105px;
  height: 140px;
  border-radius: 50%;
  background: conic-gradient(#0056c3 0% 9.5%, #16a34a 9.5% 37%, #7c4dff 37% 53.8%, #fd661d 53.8% 68.7%, #10172f 68.7% 100%);
  position: relative;
  display: grid;
  place-items: center;
  flex-shrink: 0;
}
.segments-scope .donut-chart:after {
  content: "";
  position: absolute;
  inset: 24px 16px;
  border-radius: 50%;
  background: #ffffff;
}

.segments-scope .donut-center {
  position: relative;
  z-index: 1;
  text-align: center;
}
.segments-scope .donut-center strong {
  display: block;
  font-size: 9px;
  font-weight: 900;
  color: #10172f;
  text-transform: uppercase;
  letter-spacing: .02em;
}
.segments-scope .donut-center span {
  display: block;
  font-size: 10px;
  font-weight: 600;
  color: #10172f;
  margin-top: 2px;
}

.segments-scope .legend-grid {
  display: grid;
  gap: 8px;
  flex: 1;
}
.segments-scope .legend-row {
  display: grid;
  grid-template-columns: 8px 1fr auto;
  gap: 8px;
  align-items: center;
}
.segments-scope .legend-row i {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}
.segments-scope .legend-row span {
  font-size: 11px;
  font-weight: 600;
  color: #10172f;
}
.segments-scope .legend-row strong {
  font-size: 11px;
  font-weight: 800;
  color: #10172f;
}

.segments-scope .card {
  background: #ffffff;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  overflow: hidden;
}

.segments-scope .tabs-row {
  height: 48px;
  border-bottom: 1px solid var(--line);
  display: flex;
  align-items: flex-end;
  padding: 0 14px;
  gap: 4px;
  overflow-x: auto;
  scrollbar-width: none;
}
.segments-scope .tab {
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
.segments-scope .tab b {
  margin-left: 6px;
  background: #ededf8;
  border-radius: 999px;
  padding: 3px 8px;
  font-size: 10.5px;
  color: #424753;
  transition: all 0.18s ease;
}
.segments-scope .tab.active {
  color: #0056c3;
}
.segments-scope .tab.active b {
  background: #e7efff;
  color: #0056c3;
}
.segments-scope .tab.active:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 8px;
  right: 8px;
  height: 2px;
  background: #0056c3;
}

.segments-scope .toolbar {
  padding: 12px 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  border-bottom: 1px solid var(--line);
  flex-wrap: wrap;
}
.segments-scope .search-box {
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
.segments-scope .search-box input {
  border: 0;
  outline: 0;
  min-width: 0;
  flex: 1;
  font-size: 12px;
  font-weight: 600;
  background: transparent;
}
.segments-scope .toolbar .spacer { flex: 1; }

.segments-scope .outline-btn {
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
.segments-scope .outline-btn:hover {
  background: #fff5f0;
  border-color: var(--orange);
  color: var(--orange);
  transform: translateY(-1px);
}

.segments-scope .segments-split {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  align-items: start;
  margin-bottom: 18px;
  transition: grid-template-columns 0.25s ease;
}
.segments-scope .segments-split.has-selected {
  grid-template-columns: minmax(0, 1.62fr) minmax(330px, 0.78fr);
}
.segments-scope .selection-bar {
  padding: 10px 18px;
  background: #ffffff;
  border-bottom: 1px solid #ededf8;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
}
.segments-scope .selection-bar strong {
  color: #191b23;
  font-weight: 800;
  font-size: 12px;
}
.segments-scope .selection-bar span {
  color: #424753;
  font-size: 11px;
  font-weight: 500;
}
.segments-scope .clear-btn {
  border: 0;
  background: transparent;
  color: #0056c3;
  font-size: 11px;
  font-weight: 800;
  cursor: pointer;
  padding: 0;
  transition: color 0.18s ease;
}
.segments-scope .clear-btn:hover {
  color: #003882;
  text-decoration: underline;
}

.segments-scope .table-scroll {
  overflow-x: auto;
}
.segments-scope .segments-table {
  width: 100%;
  min-width: 900px;
  border-collapse: collapse;
  border-spacing: 0;
}
.segments-scope .segments-table th, .segments-scope .segments-table td { box-sizing: border-box; }
.segments-scope .segments-table thead tr { height: 44px; }
.segments-scope .segments-table tbody tr { height: 60px; box-sizing: border-box; }
.segments-scope .segments-table tr { transition: background 0.18s ease; }
.segments-scope .segments-table tr.selected { background: #f0f5ff; }
.segments-scope .segments-table th {
  height: 44px;
  background: #f3f3fe;
  border-bottom: 1px solid #ededf8;
  font-size: 12px;
  font-weight: 800;
  color: #191b23;
  text-align: left;
  padding: 0 18px;
  white-space: nowrap;
  text-transform: uppercase;
  letter-spacing: .04em;
  vertical-align: middle;
}
.segments-scope .segments-table td {
  height: 60px;
  border-bottom: 1px solid #ededf8;
  font-size: 12.5px;
  font-weight: 500;
  color: #191b23;
  padding: 0 18px;
  white-space: nowrap;
  vertical-align: middle;
}
.segments-scope .segments-table th:first-child, .segments-scope .segments-table td:first-child { width: 48px; padding-left: 18px; padding-right: 8px; text-align: center; border-top-left-radius: 10px; }
.segments-scope .segments-table th:last-child, .segments-scope .segments-table td:last-child { width: 130px; padding: 0 14px; text-align: center; border-top-right-radius: 10px; }
.segments-scope .cell-stack {
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 1.25;
}
.segments-scope .cell-stack strong {
  font-size: 12.5px;
  font-weight: 500;
  color: #191b23;
  display: block;
}
.segments-scope .cell-stack small.share {
  font-size: 11px;
  color: #424753;
  font-weight: 500;
  display: block;
  margin-top: 1px;
}
.segments-scope .segment-cell {
  display: flex;
  align-items: center;
  gap: 10px;
}
.segments-scope .segment-cell strong {
  display: block;
  font-size: 12.5px;
  font-weight: 700;
  color: #191b23;
}
.segments-scope .segment-cell small {
  display: block;
  font-size: 11px;
  color: #667085;
  margin-top: 1px;
}
.segments-scope .segment-ico {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 16px;
  color: #ffffff;
  flex-shrink: 0;
}
.segments-scope .segment-vip { background: #0056c3; }
.segments-scope .segment-new { background: #7c4dff; }
.segments-scope .segment-spenders { background: #fd661d; }
.segments-scope .segment-discount { background: #16a34a; }
.segments-scope .segment-repeat { background: #ff4e86; }
.segments-scope .segment-inactive { background: #d77a00; }
.segments-scope .segment-birthday { background: #7c4dff; }
.segments-scope .segment-corporate { background: #004094; }

.segments-scope .type-badge, .segments-scope .status-badge {
  display: inline-flex;
  align-items: center;
  height: 22px;
  padding: 0 10px;
  border-radius: 999px;
  font-size: 10.5px;
  font-weight: 800;
}
.segments-scope .type-badge.custom { background: #e3f8e8; color: #14a447; }
.segments-scope .type-badge.system { background: #e7efff; color: #0b63e8; }
.segments-scope .status-badge.active { background: #e3f8e8; color: #14a447; }
.segments-scope .status-badge.inactive { background: #ffe8e9; color: #e53945; }

.segments-scope .row-actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
}
.segments-scope .row-actions button {
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
  transition: all .18s ease;
}
.segments-scope .row-actions button:hover {
  background: #f3f3fe;
  border-color: #0056c3;
  color: #0056c3;
}
.segments-scope .row-actions button.delete-btn:hover {
  background: #ffe8eb;
  border-color: #D32F2F;
  color: #D32F2F;
}

.segments-scope .footerbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-top: 1px solid #ededf8;
  font-size: 12.5px;
  font-weight: 600;
  color: #191B23;
}
.segments-scope .pagination {
  display: flex;
  gap: 4px;
}
.segments-scope .pagination button {
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
.segments-scope .pagination button.active {
  background: #0056c3;
  color: #ffffff;
  border-color: #0056c3;
}

.segments-scope .side-cards {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.segments-scope .panel-head, .segments-scope .side-card-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
}
.segments-scope .panel-head h3, .segments-scope .side-card-head h3 {
  font-size: 14px;
  font-weight: 800;
  margin: 0;
  color: #10172f;
}
.segments-scope .link-btn, .segments-scope .side-card-head button {
  border: 0;
  background: transparent;
  color: #0056c3 !important;
  font-size: 11.5px;
  font-weight: 800;
  padding: 0;
  cursor: pointer;
  display: inline-block;
  transition: color 0.18s ease;
}
.segments-scope .link-btn:hover, .segments-scope .side-card-head button:hover {
  color: #003882 !important;
  text-decoration: underline;
}

.segments-scope .donut-wrap {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 10px;
  width: 100%;
}
.segments-scope .donut {
  width: 116px;
  height: 116px;
  border-radius: 50%;
  background: conic-gradient(#7c4dff 0% 26%, #fd661d 26% 62%, #0056c3 62% 86%, #10172f 86% 100%);
  position: relative;
  flex: 0 0 116px;
  display: grid;
  place-items: center;
}
.segments-scope .donut:after {
  content: "";
  position: absolute;
  inset: 18px;
  border-radius: 50%;
  background: #ffffff;
}
.segments-scope .donut-center {
  position: relative;
  z-index: 2;
  text-align: center;
}
.segments-scope .donut-center span {
  display: block;
  font-size: 8px;
  font-weight: 800;
  color: #10172f;
  text-transform: uppercase;
  letter-spacing: .03em;
}
.segments-scope .donut-center strong {
  display: block;
  font-size: 13px;
  font-weight: 800;
  color: #10172f;
  margin-top: 1px;
}
.segments-scope .legend {
  display: grid;
  gap: 8px;
  flex: 1;
  min-width: 0;
}
.segments-scope .legend-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  font-size: 12px;
}
.segments-scope .legend-row-left {
  display: flex;
  align-items: center;
  gap: 8px;
}
.segments-scope .legend-row i {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.segments-scope .legend-row span {
  color: #10172f;
  font-weight: 700;
  font-size: 12px;
  white-space: nowrap;
}
.segments-scope .legend-row strong {
  color: #10172f;
  font-weight: 600;
  font-size: 11.5px;
  text-align: right;
  white-space: nowrap;
}

/* Card 2: Performing list styled like signups */
.segments-scope .performing-list {
  display: grid;
  gap: 8px;
  margin-top: 12px;
  max-height: 185px;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.segments-scope .performing-list::-webkit-scrollbar {
  display: none;
  width: 0;
  height: 0;
}
.segments-scope .performing-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border: 1px solid #ededf8;
  border-radius: 9px;
  background: #ffffff;
  transition: all .18s ease;
  cursor: pointer;
}
.segments-scope .performing-item:hover {
  background: #f8faff;
  border-color: #c2c6d5;
  box-shadow: 0 2px 6px rgba(0,0,0,.04);
}
.segments-scope .mini-avatar {
  width: 36px;
  height: 36px;
  border: 1px solid #dfe4ef;
  background: #e7efff;
  color: #0056c3;
  border-radius: 8px;
  display: grid;
  place-items: center;
  font-size: 12px;
  font-weight: 800;
  flex-shrink: 0;
}
.segments-scope .performing-info strong {
  display: block;
  font-size: 12px;
  font-weight: 700;
  color: #10172f;
}
.segments-scope .performing-info small {
  display: block;
  font-size: 10.5px;
  color: #667085;
  margin-top: 1px;
}
.segments-scope .performing-right {
  margin-left: auto;
  text-align: right;
}
.segments-scope .performing-right strong {
  display: block;
  font-size: 12px;
  font-weight: 700;
  color: #191b23;
}
.segments-scope .performing-right small {
  display: block;
  font-size: 10px;
  color: #16a34a;
  font-weight: 700;
  margin-top: 1px;
}

/* Card 3: Activity list styled like Support Flags / Notes */
.segments-scope .activity-list {
  display: grid;
  gap: 8px;
  margin-top: 12px;
}
.segments-scope .activity-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border: 1px solid var(--line, #edf0f6);
  border-radius: 9px;
  background: #f8f9fc;
  transition: all .18s ease;
}
.segments-scope .activity-item:hover {
  background: #f1f4f9;
}
.segments-scope .activity-ico {
  font-size: 17px;
  display: grid;
  place-items: center;
  flex-shrink: 0;
}
.segments-scope .activity-text strong {
  display: block;
  font-size: 11.5px;
  font-weight: 700;
  color: #10172f;
}
.segments-scope .activity-text small {
  display: block;
  font-size: 10px;
  color: var(--muted, #667085);
  margin-top: 1px;
}
.segments-scope .activity-tag {
  margin-left: auto;
  font-size: 10px;
  font-weight: 800;
  padding: 3px 8px;
  border-radius: 99px;
  white-space: nowrap;
}
.segments-scope .activity-tag.blue { background: #e7efff; color: #0b63e8; }
.segments-scope .activity-tag.green { background: #e3f8e8; color: #16a34a; }
.segments-scope .activity-tag.orange { background: #fff0e3; color: #fd661d; }

/* Overlay & Drawer */
.segments-scope .drawer-overlay {
  position: fixed;
  inset: 0;
  background: rgba(25, 27, 35, 0.55);
  backdrop-filter: blur(4px);
  z-index: 99;
}
.segments-scope .drawer {
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
.segments-scope .drawer-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 16px;
  border-bottom: 1px solid #ededf8;
}
.segments-scope .drawer-head small {
  display: block;
  color: #191b23;
  font-weight: 800;
  font-size: 11.5px;
  letter-spacing: .04em;
}
.segments-scope .drawer-head h2 {
  margin: 4px 0 0;
  font-size: 24px;
  font-weight: 500;
  color: #424753;
}
.segments-scope .close-btn {
  width: 34px;
  height: 34px;
  border: 1px solid #dfe4ef;
  border-radius: 8px;
  background: #f8faff;
  color: #667085;
  display: grid;
  place-items: center;
  cursor: pointer;
  padding: 0;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.segments-scope .close-btn:hover,
.segments-scope .close-btn:active,
.segments-scope .close-btn:focus {
  background: #eff6ff;
  border-color: #93c5fd;
  color: #0056c3;
  transform: scale(1.06);
}

.segments-scope .drawer-section {
  margin-top: 22px;
}
.segments-scope .drawer-section h3 {
  margin: 0 0 12px;
  font-size: 14.5px;
  font-weight: 800;
  color: #191b23;
}
.segments-scope .meta-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}
.segments-scope .meta-box {
  padding: 14px;
  border: 1px solid #ededf8;
  border-radius: 10px;
  background: #f8f9fc;
}
.segments-scope .meta-box span {
  font-size: 12px;
  color: #191b23;
  font-weight: 800;
  display: block;
}
.segments-scope .meta-box strong {
  font-size: 13px;
  font-weight: 500;
  color: #424753;
  display: block;
  margin-top: 4px;
}

.segments-scope .condition-tags { display: flex; flex-wrap: wrap; gap: 6px; }
.segments-scope .condition-tag {
  padding: 6px 11px;
  border-radius: 6px;
  background: #fff0e3;
  color: var(--orange);
  font-size: 11.5px;
  font-weight: 700;
}

.segments-scope .drawer-footer {
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
.segments-scope .action-btn {
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
.segments-scope .action-btn.primary {
  border: 0;
  background: var(--orange);
  color: #ffffff;
  box-shadow: 0 4px 12px rgba(253, 102, 29, 0.22);
}
.segments-scope .action-btn.primary:hover {
  background: var(--orange-dark);
  transform: translateY(-1px);
  box-shadow: 0 6px 16px rgba(253, 102, 29, 0.32);
}
.segments-scope .action-btn.secondary {
  border: 1px solid var(--border);
  background: #ffffff;
  color: #10172f;
}
.segments-scope .action-btn.secondary:hover {
  background: #fff5f0;
  border-color: var(--orange);
  color: var(--orange);
  transform: translateY(-1px);
}

.segments-scope .danger-confirm-btn {
  border: 0 !important;
  background: #e5484d !important;
  color: #ffffff !important;
  box-shadow: 0 4px 12px rgba(229, 72, 77, 0.25) !important;
  transition: all 0.2s ease !important;
}
.segments-scope .danger-confirm-btn:hover {
  background: #c53030 !important;
  transform: translateY(-1px) !important;
  box-shadow: 0 6px 16px rgba(229, 72, 77, 0.35) !important;
}

.segments-scope .cancel-white-btn {
  background: #ffffff !important;
  color: #10172f !important;
  border: 1px solid #dfe4ef !important;
  transition: all 0.2s ease !important;
}
.segments-scope .cancel-white-btn:hover {
  background: #f8f9fc !important;
  border-color: #10172f !important;
  color: #10172f !important;
  transform: translateY(-1px) !important;
}

.segments-scope .modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(25, 27, 35, 0.55);
  backdrop-filter: blur(4px);
  z-index: 1100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  box-sizing: border-box;
}
.segments-scope .modal {
  width: min(540px, 100%);
  background: #ffffff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
  margin: auto;
}
.segments-scope .modal-responsive {
  max-width: 660px;
  width: 95%;
  padding: 22px 24px;
  max-height: 88vh;
  display: flex;
  flex-direction: column;
  border-radius: 14px;
  background: #ffffff;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
  margin: auto;
}
.segments-scope .modal-metrics-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin: 14px 0 16px;
}
.segments-scope .modal-metric-box {
  background: #f8faff;
  border: 1px solid #ededf8;
  border-radius: 9px;
  padding: 10px 14px;
}
.segments-scope .modal-metric-box span {
  font-size: 10.5px;
  color: #667085;
  font-weight: 700;
  text-transform: uppercase;
}
.segments-scope .modal-metric-box strong {
  display: block;
  font-size: 16px;
  color: #10172f;
  margin-top: 3px;
  font-weight: 800;
}
.segments-scope .modal-scroll-list {
  flex: 1;
  overflow-y: auto;
  display: grid;
  gap: 10px;
  padding-right: 4px;
  max-height: 380px;
  scrollbar-width: none;
}
.segments-scope .modal-scroll-list::-webkit-scrollbar {
  display: none;
  width: 0;
  height: 0;
}
.segments-scope .modal-item-card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 14px;
  border: 1px solid #ededf8;
  border-radius: 10px;
  background: #ffffff;
  transition: all .18s ease;
}
.segments-scope .modal-footer-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  padding-top: 14px;
  border-top: 1px solid #ededf8;
  gap: 10px;
}
.segments-scope .modal-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--line);
}
.segments-scope .modal-head h2 { margin: 0; font-size: 18px; font-weight: 800; color: #10172f; }
.segments-scope .form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-top: 16px;
}
.segments-scope .form-group { display: flex; flex-direction: column; gap: 6px; }
.segments-scope .form-group.full { grid-column: 1 / -1; }
.segments-scope .form-group label { font-size: 11.5px; font-weight: 700; color: #10172f; }
.segments-scope .form-group input, .segments-scope .form-group select, .segments-scope .form-group textarea {
  height: 38px;
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 0 12px;
  font-size: 12px;
  color: #10172f;
  outline: 0;
  transition: border-color 0.18s ease;
}
.segments-scope .form-group input:focus, .segments-scope .form-group select:focus, .segments-scope .form-group textarea:focus {
  border-color: var(--orange);
}
.segments-scope .form-group textarea {
  height: 80px;
  padding: 8px 12px;
  resize: vertical;
}

.segments-scope .modal-field-dropdown { width: 100% !important; display: block !important; position: relative !important; }
.segments-scope .modal-field-dropdown .master-dropdown-trigger { width: 100% !important; height: 38px !important; padding: 0 12px !important; border: 1px solid var(--border) !important; border-radius: 8px !important; background: #ffffff !important; justify-content: space-between !important; font-size: 12px !important; font-weight: 600 !important; color: #10172f !important; }
.segments-scope .modal-field-dropdown .master-dropdown-trigger:hover { border-color: var(--orange) !important; }
.segments-scope .modal-field-dropdown .master-dropdown-label { font-size: 12px !important; font-weight: 600 !important; color: #10172f !important; }
.segments-scope .modal-field-dropdown .master-dropdown-menu { width: 100% !important; max-height: 200px !important; overflow-y: auto !important; z-index: 99999 !important; box-shadow: 0 16px 40px rgba(16, 24, 40, 0.2) !important; }

.segments-scope .toast {
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

@media (max-width: 1250px) {
  .segments-scope .kpi-grid { grid-template-columns: repeat(3, 1fr); }
  .segments-scope .bottom-grid { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 1049px) {
  .segments-scope .desktop-sidebar-wrapper { display: none !important; }
}

@media (max-width: 980px) {
  .segments-scope .table-scroll { display: none !important; }
}

@media (max-width: 650px) {
  .segments-scope .page {
    padding: 14px 10px 24px !important;
    max-width: 100vw;
    overflow-x: clip;
    box-sizing: border-box;
  }
  .segments-scope .page-head {
    flex-direction: column !important;
    align-items: flex-start !important;
    gap: 10px !important;
    margin-bottom: 14px !important;
  }
  .segments-scope .page-head h1 { font-size: 22px !important; }
  .segments-scope .page-head p { font-size: 12px !important; margin-top: 2px !important; }
  .segments-scope .head-actions {
    display: grid !important;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) !important;
    gap: 8px !important;
    width: 100% !important;
  }
  .segments-scope .head-actions > .outline-btn {
    width: 100% !important;
    justify-content: center !important;
    height: 38px !important;
    padding: 0 10px !important;
    font-size: 12px !important;
  }
  .segments-scope .head-actions > .primary-btn {
    grid-column: 1 / -1 !important;
    width: 100% !important;
    justify-content: center !important;
    height: 38px !important;
    font-size: 13px !important;
    font-weight: 800 !important;
    margin-top: 2px !important;
  }
  .segments-scope .kpi-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    gap: 8px !important;
    margin-bottom: 14px !important;
  }
  .segments-scope .kpi-grid > *:last-child:nth-child(odd) {
    grid-column: 1 / -1 !important;
  }
  .segments-scope .segments-split {
    width: 100% !important;
    max-width: 100% !important;
    min-width: 0 !important;
    box-sizing: border-box !important;
    overflow: hidden !important;
  }
  .segments-scope .card {
    width: 100% !important;
    max-width: 100% !important;
    min-width: 0 !important;
    box-sizing: border-box !important;
    overflow: hidden !important;
  }
  .segments-scope .tabs-row {
    padding: 0 6px !important;
    gap: 2px !important;
  }
  .segments-scope .tab {
    padding: 0 10px !important;
    font-size: 11.5px !important;
  }
  .segments-scope .toolbar {
    display: grid !important;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) !important;
    gap: 8px !important;
    padding: 10px 12px !important;
    width: 100% !important;
    box-sizing: border-box !important;
  }
  .segments-scope .search-box {
    grid-column: 1 / -1 !important;
    width: 100% !important;
    max-width: none !important;
    height: 38px !important;
    box-sizing: border-box !important;
  }
  .segments-scope .toolbar .master-dropdown,
  .segments-scope .toolbar .master-date-picker {
    width: 100% !important;
    min-width: 0 !important;
    display: block !important;
    box-sizing: border-box !important;
  }
  .segments-scope .toolbar .master-dropdown-trigger,
  .segments-scope .toolbar .master-date-picker-trigger {
    width: 100% !important;
    min-width: 0 !important;
    height: 38px !important;
    padding: 0 10px !important;
    justify-content: space-between !important;
    font-size: 11.5px !important;
    box-sizing: border-box !important;
  }
  .segments-scope .toolbar .master-dropdown-label {
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    white-space: nowrap !important;
    font-size: 11.5px !important;
  }
  .segments-scope .toolbar .outline-btn {
    width: 100% !important;
    min-width: 0 !important;
    height: 38px !important;
    padding: 0 10px !important;
    font-size: 11.5px !important;
    justify-content: center !important;
    box-sizing: border-box !important;
  }
  .segments-scope .toolbar .spacer { display: none !important; }
  .segments-scope .selection-bar {
    padding: 8px 12px !important;
    font-size: 11px !important;
    flex-wrap: wrap !important;
    gap: 8px !important;
    box-sizing: border-box !important;
  }
  .segments-scope .selection-bar .spacer { display: none !important; }
  .segments-scope .table-scroll {
    display: none !important;
  }
  .segments-scope .footerbar {
    flex-direction: column !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 10px !important;
    padding: 14px 12px !important;
    height: auto !important;
    text-align: center !important;
  }
  .segments-scope .footerbar > span {
    display: block !important;
    width: 100% !important;
    text-align: center !important;
    font-size: 11.5px !important;
    color: #667085 !important;
    margin: 0 !important;
  }
  .segments-scope .pagination {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 6px !important;
    width: 100% !important;
  }
  .segments-scope .bottom-grid {
    grid-template-columns: 1fr !important;
    gap: 12px !important;
  }
  .segments-scope .side-panel {
    padding: 14px !important;
  }
  .segments-scope .donut-wrap {
    flex-direction: row !important;
    align-items: center !important;
    justify-content: space-between !important;
    gap: 14px !important;
  }
  .segments-scope .modal-overlay {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    padding: 12px 10px !important;
  }
  .segments-scope .modal {
    width: calc(100vw - 20px) !important;
    max-width: 100% !important;
    padding: 16px 14px !important;
    margin: auto !important;
    max-height: 88vh !important;
    overflow-y: auto !important;
    box-sizing: border-box !important;
  }
  .segments-scope .form-grid {
    grid-template-columns: 1fr !important;
    gap: 10px !important;
  }
  .segments-scope .form-group.full {
    grid-column: auto !important;
  }
  .segments-scope .modal-responsive {
    width: calc(100vw - 20px) !important;
    max-width: 100vw !important;
    padding: 16px 12px !important;
    max-height: 86vh !important;
    border-radius: 12px !important;
    margin: auto !important;
  }
  .segments-scope .modal-metrics-grid {
    grid-template-columns: 1fr 1fr 1fr !important;
    gap: 6px !important;
    margin: 12px 0 14px !important;
  }
  .segments-scope .modal-metric-box {
    padding: 8px 6px !important;
    text-align: center !important;
  }
  .segments-scope .modal-metric-box span {
    font-size: 8.5px !important;
    white-space: nowrap !important;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    display: block !important;
  }
  .segments-scope .modal-metric-box strong {
    font-size: 13px !important;
    margin-top: 2px !important;
  }
  .segments-scope .modal-item-card {
    padding: 10px 8px !important;
    gap: 8px !important;
  }
  .segments-scope .modal-item-card .item-badge-box {
    width: 34px !important;
    height: 34px !important;
    font-size: 11px !important;
    border-radius: 8px !important;
  }
  .segments-scope .modal-item-card strong {
    font-size: 12px !important;
  }
  .segments-scope .modal-item-card small {
    font-size: 10px !important;
  }
  .segments-scope .modal-item-card .item-stats {
    font-size: 10px !important;
    gap: 6px !important;
    flex-wrap: wrap !important;
  }
  .segments-scope .modal-item-card .item-right strong {
    font-size: 12px !important;
  }
  .segments-scope .modal-item-card .item-right span {
    font-size: 9.5px !important;
  }
  .segments-scope .modal-footer-row {
    flex-direction: column !important;
    align-items: stretch !important;
    gap: 10px !important;
    margin-top: 14px !important;
    padding-top: 12px !important;
  }
  .segments-scope .modal-footer-row > span {
    justify-content: center !important;
    text-align: center !important;
    font-size: 11px !important;
  }
  .segments-scope .modal-footer-row button {
    width: 100% !important;
    height: 38px !important;
    justify-content: center !important;
  }
  .segments-scope .form-grid {
    grid-template-columns: 1fr !important;
  }
}
`;

const initialSegments = [
  {
    id: 1, name: "VIP Customers", description: "High value customers with frequent purchases", type: "Custom",
    customers: 2345, share: "9.5% of total", createdOn: "May 10, 2025", createdTime: "10:30 AM",
    updatedOn: "May 17, 2025", updatedTime: "09:15 AM", status: "Active", icon: "vip",
    openRate: "38.2%", revenue: 1245890, conditions: ["Total Spend > ₹25,000", "Orders > 5"]
  },
  {
    id: 2, name: "New Customers", description: "Customers who joined in the last 30 days", type: "System",
    customers: 4128, share: "16.8% of total", createdOn: "Apr 18, 2025", createdTime: "11:45 AM",
    updatedOn: "May 18, 2025", updatedTime: "08:20 AM", status: "Active", icon: "new",
    openRate: "30.4%", revenue: 482360, conditions: ["Joined within 30 days"]
  },
  {
    id: 3, name: "High Spenders", description: "Customers who spent more than ₹10,000", type: "Custom",
    customers: 1987, share: "8.1% of total", createdOn: "May 02, 2025", createdTime: "02:15 PM",
    updatedOn: "May 16, 2025", updatedTime: "04:10 PM", status: "Active", icon: "spenders",
    openRate: "32.1%", revenue: 876430, conditions: ["Average Order Value > ₹5,000"]
  },
  {
    id: 4, name: "Discount Seekers", description: "Customers who use coupons frequently", type: "Custom",
    customers: 3658, share: "14.9% of total", createdOn: "Apr 28, 2025", createdTime: "09:00 AM",
    updatedOn: "May 15, 2025", updatedTime: "01:30 PM", status: "Active", icon: "discount",
    openRate: "26.6%", revenue: 432980, conditions: ["Coupons used > 3"]
  },
  {
    id: 5, name: "Repeat Customers", description: "Customers with more than 2 orders", type: "System",
    customers: 6742, share: "27.5% of total", createdOn: "Apr 10, 2025", createdTime: "08:30 AM",
    updatedOn: "May 18, 2025", updatedTime: "07:50 AM", status: "Active", icon: "repeat",
    openRate: "28.7%", revenue: 654210, conditions: ["Orders > 2"]
  },
  {
    id: 6, name: "Inactive 60+ Days", description: "Customers inactive for more than 60 days", type: "System",
    customers: 2156, share: "8.8% of total", createdOn: "Apr 10, 2025", createdTime: "08:30 AM",
    updatedOn: "May 17, 2025", updatedTime: "06:10 PM", status: "Inactive", icon: "inactive",
    openRate: "7.2%", revenue: 120430, conditions: ["No order in last 60 days"]
  },
  {
    id: 7, name: "Birthday This Month", description: "Customers with birthdays in current month", type: "System",
    customers: 1214, share: "4.9% of total", createdOn: "Apr 12, 2025", createdTime: "10:20 AM",
    updatedOn: "May 18, 2025", updatedTime: "09:00 AM", status: "Active", icon: "birthday",
    openRate: "33.8%", revenue: 234510, conditions: ["Birthday month = Current month"]
  },
  {
    id: 8, name: "Corporate Accounts", description: "Registered business accounts", type: "Custom",
    customers: 344, share: "1.4% of total", createdOn: "May 01, 2025", createdTime: "03:10 PM",
    updatedOn: "May 14, 2025", updatedTime: "11:40 AM", status: "Active", icon: "corporate",
    openRate: "41.5%", revenue: 341260, conditions: ["Account type = Business"]
  }
];

const segmentIconMap = {
  vip: FiUsers,
  new: FiUserPlus,
  spenders: FiShoppingCart,
  discount: FiTag,
  repeat: FiHeart,
  inactive: FiRefreshCw,
  birthday: FiGift,
  corporate: FiBriefcase,
};

const distribution = [
  { label: "VIP", percent: "26% (3,345)", color: "#7c4dff" },
  { label: "Repeat", percent: "36% (4,624)", color: "#fd661d" },
  { label: "New", percent: "24% (3,081)", color: "#0056c3" },
  { label: "Inactive", percent: "14% (1,792)", color: "#10172f" },
];

function SegmentOverviewModal({ onClose, toast }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <motion.div
        className="modal modal-responsive"
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 12 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-head">
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 800, color: "#10172f", margin: 0 }}>
              Segment Overview & Distribution Report
            </h2>
            <p style={{ fontSize: 12, color: "#667085", margin: "4px 0 0", fontWeight: 500 }}>
              Total Customer Base: 24,568 across 5 core segments
            </p>
          </div>
          <button
            type="button"
            className="close-btn"
            onClick={onClose}
            title="Close"
            aria-label="Close"
          >
            <FiX size={18} />
          </button>
        </div>

        {/* Quick summary metrics */}
        <div className="modal-metrics-grid">
          <div className="modal-metric-box">
            <span>Total Segments</span>
            <strong>5 Active</strong>
          </div>
          <div className="modal-metric-box" style={{ background: "#f3fbf6", borderColor: "#d4f3e1" }}>
            <span style={{ color: "#16a34a" }}>Customer Base</span>
            <strong style={{ color: "#16a34a" }}>24,568</strong>
          </div>
          <div className="modal-metric-box" style={{ background: "#f8f8ff" }}>
            <span style={{ color: "#0056c3" }}>Avg Share</span>
            <strong style={{ color: "#0056c3" }}>20.0%</strong>
          </div>
        </div>

        {/* Detailed Breakdown List */}
        <div className="modal-scroll-list">
          {[
            { label: "VIP Customers", percent: "9.5%", count: "2,345", revenue: "₹12,45,890", color: "#7c4dff", desc: "Top 10% spenders with highest AOV and lifetime value" },
            { label: "Repeat Customers", percent: "27.5%", count: "6,742", revenue: "₹18,54,210", color: "#ff6b00", desc: "Placed 2+ orders in the last 90 days with steady retention" },
            { label: "New Customers", percent: "16.8%", count: "4,128", revenue: "₹6,82,360", color: "#2d7deb", desc: "Joined within the last 30 days, high conversion potential" },
            { label: "Discount Seekers", percent: "14.9%", count: "3,658", revenue: "₹4,92,300", color: "#16a34a", desc: "Primarily purchase during seasonal discount promotions" },
            { label: "Others (Standard)", percent: "31.3%", count: "7,695", revenue: "₹8,12,450", color: "#10172f", desc: "Occasional and general store shoppers" },
          ].map((item) => (
            <div key={item.label} className="modal-item-card">
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: item.color,
                  flexShrink: 0,
                }}
              />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
                  <strong style={{ fontSize: 13, fontWeight: 700, color: "#10172f" }}>{item.label}</strong>
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 800,
                      padding: "1px 6px",
                      borderRadius: 999,
                      background: "#f3f3fe",
                      color: item.color,
                    }}
                  >
                    {item.percent}
                  </span>
                </div>
                <div style={{ fontSize: 11, color: "#667085", marginTop: 2, lineHeight: 1.35 }}>
                  {item.desc}
                </div>
              </div>
              <div className="item-right" style={{ textAlign: "right", flexShrink: 0 }}>
                <strong style={{ display: "block", fontSize: 12.5, color: "#10172f", fontWeight: 800 }}>{item.count}</strong>
                <span style={{ display: "block", fontSize: 10.5, color: "#16a34a", fontWeight: 700, marginTop: 1 }}>{item.revenue}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="modal-footer-row">
          <span style={{ fontSize: 11, color: "#16a34a", fontWeight: 600, display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#16a34a", display: "inline-block" }} />
            Calculated across active customer base
          </span>
          <button
            className="action-btn primary"
            style={{ flex: "none" }}
            onClick={() => {
              toast("Segment distribution report exported to CSV.");
              onClose();
            }}
          >
            Export Report (CSV)
          </button>
        </div>
      </motion.div>
    </div>
  );
}

function TopPerformingSegmentsModal({ onClose, toast }) {
  const topSegmentsList = [
    { name: "VIP Customers", open: "38.2%", revenue: "₹12,45,890", badge: "VIP", members: "2,345", growth: "+15.4%" },
    { name: "High Spenders", open: "32.1%", revenue: "₹8,76,430", badge: "HS", members: "1,987", growth: "+15.4%" },
    { name: "Repeat Customers", open: "28.7%", revenue: "₹6,54,210", badge: "RC", members: "6,742", growth: "+15.4%" },
    { name: "Discount Seekers", open: "24.3%", revenue: "₹4,92,300", badge: "DS", members: "3,658", growth: "+11.8%" },
    { name: "Loyalty Club", open: "41.5%", revenue: "₹4,18,650", badge: "LC", members: "1,250", growth: "+18.2%" },
    { name: "Festive Buyers", open: "35.8%", revenue: "₹3,84,120", badge: "FB", members: "2,180", growth: "+9.6%" },
    { name: "App Exclusive", open: "29.4%", revenue: "₹3,25,900", badge: "AE", members: "1,890", growth: "+14.1%" },
    { name: "Cart Recovered", open: "22.6%", revenue: "₹2,78,400", badge: "CR", members: "940", growth: "+8.5%" },
  ];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <motion.div
        className="modal modal-responsive"
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 12 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-head">
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 800, color: "#10172f", margin: 0 }}>
              Top Performing Segments
            </h2>
            <p style={{ fontSize: 12, color: "#667085", margin: "4px 0 0", fontWeight: 500 }}>
              Ranked by campaign open rates, customer engagement & generated revenue
            </p>
          </div>
          <button
            type="button"
            className="close-btn"
            onClick={onClose}
            title="Close"
            aria-label="Close"
          >
            <FiX size={18} />
          </button>
        </div>

        {/* Quick summary metrics */}
        <div className="modal-metrics-grid">
          <div className="modal-metric-box">
            <span>Ranked</span>
            <strong>8 Segments</strong>
          </div>
          <div className="modal-metric-box" style={{ background: "#f3fbf6", borderColor: "#d4f3e1" }}>
            <span style={{ color: "#16a34a" }}>Avg Open Rate</span>
            <strong style={{ color: "#16a34a" }}>31.6%</strong>
          </div>
          <div className="modal-metric-box" style={{ background: "#f8f8ff" }}>
            <span style={{ color: "#0056c3" }}>Total Generated</span>
            <strong style={{ color: "#0056c3" }}>₹46.7L</strong>
          </div>
        </div>

        {/* List of Performing Segments */}
        <div className="modal-scroll-list">
          {topSegmentsList.map((item, index) => (
            <div key={item.name} className="modal-item-card">
              <div
                className="item-badge-box"
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 9,
                  background: "#e7efff",
                  border: "1px solid #c2c6d5",
                  color: "#004094",
                  display: "grid",
                  placeItems: "center",
                  fontSize: 12,
                  fontWeight: 800,
                  flexShrink: 0,
                }}
              >
                {item.badge}
              </div>

              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
                  <span style={{ fontSize: 10.5, fontWeight: 800, color: "#0056c3", background: "#f3f3fe", padding: "1px 5px", borderRadius: 4 }}>
                    #{index + 1}
                  </span>
                  <strong style={{ fontSize: 13, fontWeight: 700, color: "#10172f" }}>{item.name}</strong>
                  <small style={{ fontSize: 10.5, color: "#667085" }}>({item.members})</small>
                </div>
                <div className="item-stats" style={{ display: "flex", gap: 8, marginTop: 3, fontSize: 11, color: "#667085" }}>
                  <span>Open: <strong style={{ color: "#10172f" }}>{item.open}</strong></span>
                  <span>· Conv: <strong style={{ color: "#10172f" }}>4.8%</strong></span>
                </div>
              </div>

              <div className="item-right" style={{ textAlign: "right", flexShrink: 0 }}>
                <strong style={{ display: "block", fontSize: 12.5, color: "#191b23", fontWeight: 800 }}>{item.revenue}</strong>
                <span style={{ display: "inline-block", fontSize: 10, color: "#16a34a", fontWeight: 700, marginTop: 1 }}>
                  {item.growth}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="modal-footer-row">
          <span style={{ fontSize: 11, color: "#16a34a", fontWeight: 600, display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#16a34a", display: "inline-block" }} />
            Performance benchmark: Last 30 days
          </span>
          <button
            className="action-btn primary"
            style={{ flex: "none" }}
            onClick={() => {
              toast("Top performing segments report exported to CSV.");
              onClose();
            }}
          >
            Export CSV
          </button>
        </div>
      </motion.div>
    </div>
  );
}

function RecentSegmentActivityModal({ onClose, toast }) {
  const activityLogs = [
    { title: "VIP Customers", text: "Updated criteria: Minimum annual spend threshold set to > ₹25,000", time: "Today · 09:15 AM", author: "Admin (Sudeep)", tone: "blue" },
    { title: "New Customers", text: "+126 members added automatically this week following first order completions", time: "Today · 08:20 AM", author: "System Auto-Sync", tone: "green" },
    { title: "Inactive 60+ Days", text: "Segment deactivated automatically due to scheduled dormancy maintenance rule", time: "Yesterday · 06:10 PM", author: "Automated Cron #14", tone: "orange" },
    { title: "High Spenders", text: "Rule updated: Average Order Value requirement raised to ₹5,000", time: "May 16, 2025 · 04:10 PM", author: "Marketing Lead", tone: "blue" },
    { title: "Discount Seekers", text: "+84 new customers qualified via coupon SUMMER20 promotion campaign", time: "May 15, 2025 · 01:30 PM", author: "Promotion Engine", tone: "green" },
    { title: "Loyalty Club", text: "Tier evaluation completed successfully for 1,250 registered members", time: "May 14, 2025 · 11:00 AM", author: "Loyalty Module", tone: "blue" },
  ];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <motion.div
        className="modal modal-responsive"
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 12 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-head">
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 800, color: "#10172f", margin: 0 }}>
              Recent Segment Activity & Audit Log
            </h2>
            <p style={{ fontSize: 12, color: "#667085", margin: "4px 0 0", fontWeight: 500 }}>
              Complete chronological record of automated and administrator segment changes
            </p>
          </div>
          <button
            type="button"
            className="close-btn"
            onClick={onClose}
            title="Close"
            aria-label="Close"
          >
            <FiX size={18} />
          </button>
        </div>

        {/* Quick summary metrics */}
        <div className="modal-metrics-grid">
          <div className="modal-metric-box">
            <span>Logged Events</span>
            <strong>6 Actions</strong>
          </div>
          <div className="modal-metric-box" style={{ background: "#f3fbf6", borderColor: "#d4f3e1" }}>
            <span style={{ color: "#16a34a" }}>Sync Health</span>
            <strong style={{ color: "#16a34a" }}>100%</strong>
          </div>
          <div className="modal-metric-box" style={{ background: "#f8f8ff" }}>
            <span style={{ color: "#0056c3" }}>Active Rules</span>
            <strong style={{ color: "#0056c3" }}>12 Rules</strong>
          </div>
        </div>

        {/* List of Activity Logs */}
        <div className="modal-scroll-list">
          {activityLogs.map((item, index) => (
            <div
              key={index}
              className="modal-item-card"
              style={{ alignItems: "flex-start" }}
            >
              <div
                style={{
                  color: item.tone === "blue" ? "#0056c3" : item.tone === "green" ? "#16a34a" : "#fd661d",
                  fontSize: 16,
                  marginTop: 2,
                  flexShrink: 0,
                }}
              >
                <FiAlertCircle />
              </div>

              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 6, flexWrap: "wrap" }}>
                  <strong style={{ fontSize: 13, fontWeight: 700, color: "#10172f" }}>{item.title}</strong>
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 800,
                      padding: "2px 7px",
                      borderRadius: 999,
                      background: item.tone === "blue" ? "#e7efff" : item.tone === "green" ? "#e3f8e8" : "#fff0e3",
                      color: item.tone === "blue" ? "#0056c3" : item.tone === "green" ? "#16a34a" : "#fd661d",
                    }}
                  >
                    {item.time}
                  </span>
                </div>
                <div style={{ fontSize: 11.5, color: "#4b5563", marginTop: 3, lineHeight: 1.35 }}>
                  {item.text}
                </div>
                <div style={{ fontSize: 10, color: "#8c95a6", marginTop: 3, fontWeight: 600 }}>
                  Initiator: {item.author}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="modal-footer-row">
          <span style={{ fontSize: 11, color: "#16a34a", fontWeight: 600, display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#16a34a", display: "inline-block" }} />
            Audit trail immutable log
          </span>
          <button
            className="action-btn primary"
            style={{ flex: "none" }}
            onClick={() => {
              toast("Audit trail log exported to CSV.");
              onClose();
            }}
          >
            Export Log
          </button>
        </div>
      </motion.div>
    </div>
  );
}

function SegmentFormModal({ modal, onClose, onSave }) {
  const [type, setType] = useState(modal.segment?.type || "Custom");
  const [status, setStatus] = useState(modal.segment?.status || "Active");

  return (
    <div className="modal-overlay" onClick={onClose}>
      <motion.div
        className="modal"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 14 }}
        onClick={e => e.stopPropagation()}
        style={{ overflow: "visible" }}
      >
        <div className="modal-head">
          <h2>{modal.mode === "edit" ? "Edit Segment" : "Create Segment"}</h2>
          <button className="close-btn" onClick={onClose}><FiX size={18} /></button>
        </div>

        <form onSubmit={e => {
          e.preventDefault();
          const form = e.target.elements;
          onSave({
            ...(modal.segment || {}),
            id: modal.segment?.id || Date.now(),
            name: form.name.value.trim() || "New Segment",
            type: type,
            customers: Number(form.customers.value || 0),
            status: status,
            description: form.description.value.trim() || "Custom segment",
            conditions: [form.condition.value || "Custom rule"],
            share: modal.segment?.share || "1.0% of total",
            createdOn: modal.segment?.createdOn || "May 20, 2025",
            createdTime: modal.segment?.createdTime || "10:00 AM",
            updatedOn: "May 20, 2025",
            updatedTime: "10:00 AM",
            icon: modal.segment?.icon || "vip",
            openRate: modal.segment?.openRate || "30.0%",
            revenue: modal.segment?.revenue || 500000,
          });
        }}>
          <div className="form-grid">
            <div className="form-group">
              <label>Segment Name</label>
              <input name="name" defaultValue={modal.segment?.name || ""} placeholder="e.g. VIP Customers" required />
            </div>

            <div className="form-group">
              <label>Segment Type</label>
              <MasterDropdown
                options={["Custom", "System"]}
                value={type}
                onChange={setType}
                className="modal-field-dropdown"
              />
            </div>

            <div className="form-group">
              <label>Estimated Customers</label>
              <input type="number" name="customers" defaultValue={modal.segment?.customers || ""} placeholder="e.g. 2500" />
            </div>

            <div className="form-group">
              <label>Status</label>
              <MasterDropdown
                options={["Active", "Inactive"]}
                value={status}
                onChange={setStatus}
                className="modal-field-dropdown"
              />
            </div>

            <div className="form-group full">
              <label>Description</label>
              <textarea name="description" defaultValue={modal.segment?.description || ""} placeholder="Describe this segment..." />
            </div>

            <div className="form-group full">
              <label>Primary Rule / Condition</label>
              <input name="condition" defaultValue={modal.segment?.conditions?.[0] || ""} placeholder="e.g. Total Spend > ₹25,000" />
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "flex-end", gap: 10, marginTop: 18 }}>
            <button type="button" className="action-btn cancel-white-btn" style={{ flex: "none" }} onClick={onClose}>Cancel</button>
            <button type="submit" className="action-btn primary" style={{ flex: "none" }}>
              <FiSave size={14} /> {modal.mode === "edit" ? "Save Changes" : "Create Segment"}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

export default function SegmentsManagement() {
  const [segments, setSegments] = useState(initialSegments);
  const [tab, setTab] = useState("All Segments");
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");
  const [dateFilter, setDateFilter] = useState("Last 7 Days");
  const [selected, setSelected] = useState([]);
  const [drawer, setDrawer] = useState(null);
  const [modal, setModal] = useState(null);
  const [overviewModalOpen, setOverviewModalOpen] = useState(false);
  const [topPerformingModalOpen, setTopPerformingModalOpen] = useState(false);
  const [activityModalOpen, setActivityModalOpen] = useState(false);
  const [deleteCaution, setDeleteCaution] = useState(null);
  const [toast, setToast] = useState("");

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
    clearTimeout(window.__segmentToast);
    window.__segmentToast = setTimeout(() => setToast(""), 2200);
  };

  const filteredSegments = useMemo(() => segments.filter(segment => {
    const q = search.trim().toLowerCase();
    const searchMatch = !q || segment.name.toLowerCase().includes(q) || segment.description.toLowerCase().includes(q);
    const tabMatch =
      tab === "All Segments" ||
      (tab === "Active" && segment.status === "Active") ||
      (tab === "Inactive" && segment.status === "Inactive") ||
      (tab === "System Segments" && segment.type === "System") ||
      (tab === "Custom Segments" && segment.type === "Custom");
    const statusMatch = statusFilter === "All" || segment.status === statusFilter;
    const typeMatch = typeFilter === "All" || segment.type === typeFilter;
    return searchMatch && tabMatch && statusMatch && typeMatch;
  }), [segments, search, tab, statusFilter, typeFilter]);

  const toggleSelect = id => {
    setSelected(current => current.includes(id) ? current.filter(x => x !== id) : [...current, id]);
  };

  const exportCSV = () => {
    const rows = [
      ["Segment Name", "Type", "Customers", "Created On", "Last Updated", "Status"],
      ...filteredSegments.map(s => [
        s.name, s.type, s.customers, `${s.createdOn} ${s.createdTime}`, `${s.updatedOn} ${s.updatedTime}`, s.status
      ])
    ];
    const csv = rows.map(r => r.map(c => `"${String(c).replaceAll('"', '""')}"`).join(",")).join("\n");
    const url = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = "segments.csv";
    a.click();
    URL.revokeObjectURL(url);
    showToast("Segments exported successfully.");
  };

  const saveSegment = segment => {
    setSegments(current => {
      const exists = current.some(item => item.id === segment.id);
      return exists ? current.map(item => item.id === segment.id ? segment : item) : [segment, ...current];
    });
    setModal(null);
    setDrawer(null);
    showToast("Segment saved successfully.");
  };

  const toggleStatus = id => {
    setSegments(current => current.map(item => item.id === id ? { ...item, status: item.status === "Active" ? "Inactive" : "Active" } : item));
    setDrawer(current => current?.id === id ? { ...current, status: current.status === "Active" ? "Inactive" : "Active" } : current);
    showToast("Segment status updated.");
  };

  const promptDeleteSegment = segment => {
    setDeleteCaution(segment);
  };

  const confirmDeleteSegment = () => {
    if (!deleteCaution) return;
    const targetName = deleteCaution.name;
    setSegments(current => current.filter(item => item.id !== deleteCaution.id));
    if (drawer?.id === deleteCaution.id) setDrawer(null);
    setDeleteCaution(null);
    showToast(`${targetName} segment deleted.`);
  };

  const kpis = [
    ["Total Segments", "28", "+12.4%", "vs last 7 days", "trust", FiUsers],
    ["Active Segments", "18", "+10.3%", "vs last 7 days", "green", FiUserCheck],
    ["Total Customers", "24,568", "+15.6%", "vs last 7 days", "purple", FiTarget],
    ["Avg. Segment Size", "879", "+6.2%", "vs last 7 days", "orange", FiBarChart2],
    ["Campaigns Sent", "56", "-9.1%", "vs last 7 days", "red", FiMail],
  ];

  return (
    <div className="segments-scope">
      <style>{css}</style>
      <div className="admin-shell">
        {desktopSidebarOpen && (
          <div className="desktop-sidebar-wrapper">
            <AdminSidebar activePage="Segments" onClose={() => setDesktopSidebarOpen(false)} />
          </div>
        )}
        <AnimatePresence>
          {mobileMenuOpen && (
            <AdminSidebar activePage="Segments" mobile onClose={() => setMobileMenuOpen(false)} />
          )}
        </AnimatePresence>

        <main className="dashboard-main">
          <AdminTopbar onToggleSidebar={handleToggleMenu} desktopSidebarOpen={desktopSidebarOpen} />

          <div className="page">
            {/* Page Head */}
            <div className="page-head">
              <div>
                <h1>Segments Management</h1>
                <p>Create and manage customer segments to run targeted campaigns and offers.</p>
              </div>
              <div className="head-actions">
                <MasterDatePicker value={dateFilter} onChange={setDateFilter} />
                <button className="primary-btn" onClick={() => setModal({ mode: "create" })}>
                  <FiPlus size={15} /> Create Segment
                </button>
              </div>
            </div>

            <section className="kpi-grid">
              {kpis.map(x => (
                <KpiCard key={x[0]} item={x} />
              ))}
            </section>

            {/* Main Split Table & Side Card Container */}
            <section className={`segments-split ${drawer ? "has-selected" : ""}`} style={{ marginBottom: 18 }}>
              <div className="card table-card" style={{ margin: 0 }}>
                <div className="tabs-row">
                  {[
                    ["All Segments", 28],
                    ["Active", 18],
                    ["Inactive", 10],
                    ["System Segments", 8],
                    ["Custom Segments", 20],
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
                      placeholder="Search segments by name..."
                    />
                  </div>

                  <MasterDropdown
                    options={[{ value: "All", label: "Status: All" }, "Active", "Inactive"]}
                    value={statusFilter}
                    onChange={setStatusFilter}
                  />

                  <MasterDropdown
                    options={[{ value: "All", label: "Type: All" }, "System", "Custom"]}
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

                <div className="selection-bar">
                  <AnimatedCheckbox
                    checked={filteredSegments.length > 0 && selected.length === filteredSegments.length}
                    onChange={e => setSelected(e.target.checked ? filteredSegments.map(s => s.id) : [])}
                  />
                  <strong>{selected.length} selected</strong>
                  <span>Select all {filteredSegments.length} on this page</span>
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

                <div className="table-scroll">
                  <table className="segments-table">
                    <thead>
                      <tr>
                        <th style={{ width: 42 }}>
                          <AnimatedCheckbox
                            checked={filteredSegments.length > 0 && selected.length === filteredSegments.length}
                            onChange={e => setSelected(e.target.checked ? filteredSegments.map(s => s.id) : [])}
                          />
                        </th>
                        <th>Segment Name</th>
                        <th>Type</th>
                        <th>Customers</th>
                        <th>Created On</th>
                        <th>Last Updated</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredSegments.map(segment => {
                        const Icon = segmentIconMap[segment.icon] || FiUsers;
                        return (
                          <tr key={segment.id} className={drawer?.id === segment.id ? "selected" : ""}>
                            <td>
                              <AnimatedCheckbox
                                checked={selected.includes(segment.id)}
                                onChange={() => toggleSelect(segment.id)}
                              />
                            </td>
                            <td>
                              <div className="segment-cell">
                                <span className={`segment-ico segment-${segment.icon}`}>
                                  <Icon />
                                </span>
                                <div>
                                  <strong>{segment.name}</strong>
                                  <small>{segment.description}</small>
                                </div>
                              </div>
                            </td>
                            <td>
                              <span className={`type-badge ${segment.type.toLowerCase()}`}>{segment.type}</span>
                            </td>
                            <td>
                              <div className="cell-stack">
                                <strong>{segment.customers.toLocaleString("en-IN")}</strong>
                                <small className="share">{segment.share}</small>
                              </div>
                            </td>
                            <td>
                              <div className="cell-stack">
                                <strong>{segment.createdOn}</strong>
                                <small className="share">{segment.createdTime}</small>
                              </div>
                            </td>
                            <td>
                              <div className="cell-stack">
                                <strong>{segment.updatedOn}</strong>
                                <small className="share">{segment.updatedTime}</small>
                              </div>
                            </td>
                            <td>
                              <span className={`status-badge ${segment.status.toLowerCase()}`}>{segment.status}</span>
                            </td>
                            <td>
                              <div className="row-actions">
                                <button
                                  title="View Details"
                                  className={drawer?.id === segment.id ? "active-action" : ""}
                                  onClick={() => setDrawer(curr => curr?.id === segment.id ? null : segment)}
                                >
                                  <FiEye />
                                </button>
                                <button title="Edit Segment" onClick={() => setModal({ mode: "edit", segment })}><FiEdit2 /></button>
                                <button title="Delete Segment" className="delete-btn" onClick={() => promptDeleteSegment(segment)}><FiTrash2 /></button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                <MobileTableCards
                  items={filteredSegments}
                  renderItem={(segment) => (
                    <MobileTableCard
                      key={segment.id}
                      title={segment.name}
                      badge={segment.status}
                      badgeStatus={segment.status}
                      meta={[
                        { label: "Type", value: segment.type },
                        { label: "Audience", value: `${segment.customers.toLocaleString("en-IN")} (${segment.share})` },
                        { label: "Created", value: `${segment.createdOn} ${segment.createdTime}` },
                        { label: "Updated", value: `${segment.updatedOn} ${segment.updatedTime}` },
                      ]}
                      actionLabel="View Segment Details"
                      onAction={() => setDrawer((curr) => (curr?.id === segment.id ? null : segment))}
                    />
                  )}
                />

                <div className="footerbar">
                  <span>Showing 1 to {filteredSegments.length} of {segments.length} segments</span>
                  <div className="pagination">
                    <button type="button">‹</button>
                    <button type="button" className="active">1</button>
                    <button type="button">2</button>
                    <button type="button">›</button>
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
                      title="Segment Details"
                      editLabel="Edit Configuration"
                      onClose={() => setDrawer(null)}
                      onEdit={() => { setDrawer(null); setModal({ mode: "edit", segment: drawer }); }}
                      onToast={showToast}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </section>

            {/* Bottom 3 Cards Row below Table */}
            <div className="bottom-grid js-reveal">
              {/* Card 1: Top Customer Segments */}
              <section className="card side-panel">
                <div className="panel-head">
                  <h3>Top Customer Segments</h3>
                  <button type="button" className="link-btn" onClick={() => setOverviewModalOpen(true)}>View all</button>
                </div>
                <MasterPieChart
                  centerTitle="SEGMENTS"
                  centerValue="12,842"
                  data={distribution.map(d => ({ label: d.label, percent: d.percent, color: d.color }))}
                  conicGradient="conic-gradient(#7c4dff 0% 26%, #fd661d 26% 62%, #0056c3 62% 86%, #10172f 86% 100%)"
                  shape="circle"
                />
              </section>

              {/* Card 2: Top Performing Segments */}
              <section className="card side-panel">
                <div className="panel-head">
                  <h3>Top Performing Segments</h3>
                  <button type="button" className="link-btn" onClick={() => setTopPerformingModalOpen(true)}>View all</button>
                </div>
                <div className="performing-list">
                  {[
                    { name: "VIP Customers", open: "38.2%", revenue: "₹12,45,890", badge: "VIP" },
                    { name: "High Spenders", open: "32.1%", revenue: "₹8,76,430", badge: "HS" },
                    { name: "Repeat Customers", open: "28.7%", revenue: "₹6,54,210", badge: "RC" },
                    { name: "Discount Seekers", open: "24.3%", revenue: "₹4,92,300", badge: "DS" },
                    { name: "Loyalty Club", open: "41.5%", revenue: "₹4,18,650", badge: "LC" },
                    { name: "Festive Buyers", open: "35.8%", revenue: "₹3,84,120", badge: "FB" },
                    { name: "App Exclusive", open: "29.4%", revenue: "₹3,25,900", badge: "AE" },
                    { name: "Cart Recovered", open: "22.6%", revenue: "₹2,78,400", badge: "CR" },
                  ].map(item => (
                    <div className="performing-item" key={item.name}>
                      <div className="mini-avatar">{item.badge}</div>
                      <div className="performing-info">
                        <strong>{item.name}</strong>
                        <small>Open Rate: {item.open}</small>
                      </div>
                      <div className="performing-right">
                        <strong>{item.revenue}</strong>
                        <small>+15.4%</small>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Card 3: Recent Segment Activity */}
              <section className="card side-panel">
                <div className="panel-head">
                  <h3>Recent Segment Activity</h3>
                  <button type="button" className="link-btn" onClick={() => setActivityModalOpen(true)}>View all</button>
                </div>
                <div className="activity-list">
                  {[
                    { title: "VIP Customers", text: "Updated criteria: Spend > ₹25,000", time: "Today · 09:15 AM", tone: "blue" },
                    { title: "New Customers", text: "+126 members added this week", time: "Today · 08:20 AM", tone: "green" },
                    { title: "Inactive 60+ Days", text: "Segment deactivated automatically", time: "Yesterday · 06:10 PM", tone: "orange" },
                  ].map((item, i) => (
                    <div className="activity-item" key={i}>
                      <div className="activity-ico" style={{ color: item.tone === "blue" ? "#0056c3" : item.tone === "green" ? "#16a34a" : "#fd661d" }}>
                        <FiAlertCircle />
                      </div>
                      <div className="activity-text">
                        <strong>{item.title}</strong>
                        <small>{item.text}</small>
                      </div>
                      <span className={`activity-tag ${item.tone}`}>{item.time}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modal && (
          <SegmentFormModal
            modal={modal}
            onClose={() => setModal(null)}
            onSave={saveSegment}
          />
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
                Are you sure you are gonna delete <strong>{deleteCaution.name}</strong> segment?
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
                  onClick={confirmDeleteSegment}
                >
                  Confirm
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Segment Overview Modal */}
      <AnimatePresence>
        {overviewModalOpen && (
          <SegmentOverviewModal
            onClose={() => setOverviewModalOpen(false)}
            toast={showToast}
          />
        )}
      </AnimatePresence>

      {/* Top Performing Segments Modal */}
      <AnimatePresence>
        {topPerformingModalOpen && (
          <TopPerformingSegmentsModal
            onClose={() => setTopPerformingModalOpen(false)}
            toast={showToast}
          />
        )}
      </AnimatePresence>

      {/* Recent Segment Activity Modal */}
      <AnimatePresence>
        {activityModalOpen && (
          <RecentSegmentActivityModal
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
