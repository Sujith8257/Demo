import React, { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AdminSidebar from "../../../components/Admin/AdminSidebar";
import AdminTopbar from "../../../components/Admin/AdminTopbar";
import KpiCard from "../../../components/Admin/KpiCard";
import MasterDropdown from "../../../components/Admin/MasterDropdown";
import MasterPieChart from "../../../components/Admin/MasterPieChart";
import AnimatedCheckbox from "../../../components/Admin/AnimatedCheckbox";
import MobileTableCards, { MobileTableCard } from "../../../components/Admin/MobileTableCards";
import {
  FiActivity,
  FiBox,
  FiCheck,
  FiChevronLeft,
  FiChevronRight,
  FiCopy,
  FiDownload,
  FiEdit2,
  FiEye,
  FiFilter,
  FiLock,
  FiMoreVertical,
  FiPlus,
  FiSearch,
  FiShield,
  FiShoppingBag,
  FiUser,
  FiUserCheck,
  FiUsers,
  FiX,
  FiCheckCircle,
  FiRotateCcw,
  FiPackage,
  FiImage,
  FiTag,
  FiStar,
  FiCreditCard,
  FiBarChart2,
  FiSettings,
  FiHome,
} from "react-icons/fi";
import {
  RiBarChartBoxLine,
  RiCustomerService2Line,
  RiMoneyDollarCircleLine,
  RiPencilRuler2Line,
  RiShieldUserLine,
  RiVipCrownLine,
} from "react-icons/ri";

const rolesCss = `
.roles-scope {
  --admin-surface: #faf8ff;
  --admin-surface-low: #f3f3fe;
  --admin-surface-mid: #ededf8;
  --admin-surface-high: #e7e7f3;
  --admin-text: #191b23;
  --admin-muted: #424753;
  --admin-outline: #c2c6d5;
  --admin-primary: #004094;
  --admin-primary-2: #0056c3;
  --admin-orange: #fd661d;
  --admin-green: #0b6b1d;
  --admin-red: #D32F2F;
  --admin-shadow: 0 4px 14px rgba(0,0,0,.06);
}

.roles-scope * { box-sizing: border-box; }
.roles-shell { min-height: 100vh; display: flex; background: var(--admin-surface); color: var(--admin-text); font-family: 'Manrope', system-ui, sans-serif; }
.roles-main { flex: 1; min-width: 0; display: flex; flex-direction: column; }
.roles-content { padding: 24px 28px 36px; }

.desktop-sidebar-wrapper { width: 256px; flex-shrink: 0; transition: all .25s ease; }
.desktop-sidebar-wrapper.is-closed { display: none; }

.pagehead { display: flex; justify-content: space-between; gap: 20px; align-items: flex-end; margin-bottom: 22px; }
.pagehead h1 { margin: 0; font-size: 30px; letter-spacing: -.02em; font-weight: 800; line-height: 1.2; color: var(--admin-text); }
.pagehead p { margin: 6px 0 0; font-size: 13.5px; color: var(--admin-muted); font-weight: 500; }

.primarybtn, .secondarybtn { height: 42px; border-radius: 10px; padding: 0 18px; display: inline-flex; align-items: center; gap: 9px; font-size: 13px; font-weight: 700; cursor: pointer; transition: all .18s ease; }
.primarybtn { border: 0; background: var(--admin-orange); color: #fff; box-shadow: 0 4px 10px rgba(253,102,29,.25); }
.primarybtn:hover { background: #e25510; }
.secondarybtn { border: 1px solid var(--admin-outline); background: #fff; color: var(--admin-text); box-shadow: var(--admin-shadow); }
.secondarybtn:hover { background: var(--admin-surface-low); border-color: var(--admin-primary-2); color: var(--admin-primary-2); }

@media (max-width: 1050px) {
  .roles-scope .desktop-sidebar-wrapper { display: none !important; }
}

@media (max-width: 768px) {
  .roles-scope { max-width: 100vw; overflow-x: clip; }
  .roles-content { padding: 14px 12px 28px !important; max-width: 100vw; overflow-x: clip; box-sizing: border-box; }
  .pagehead {
    display: flex !important;
    flex-direction: column !important;
    align-items: stretch !important;
    gap: 12px !important;
    margin-bottom: 16px !important;
  }
  .pagehead h1 { font-size: 22px !important; }
  .pagehead p { font-size: 12px !important; line-height: 1.4 !important; }
  .pagehead > div:last-child {
    display: grid !important;
    grid-template-columns: 1fr 1fr !important;
    gap: 8px !important;
    width: 100% !important;
  }
  .primarybtn, .secondarybtn {
    width: 100% !important;
    height: 38px !important;
    padding: 0 10px !important;
    font-size: 12px !important;
    justify-content: center !important;
  }
  .roles-scope .kpi-grid {
    display: grid !important;
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    gap: 8px !important;
  }
  .filters {
    display: grid !important;
    grid-template-columns: 1fr 1fr !important;
    gap: 8px !important;
    padding: 10px !important;
  }
  .filters .field {
    grid-column: 1 / -1 !important;
    max-width: 100% !important;
    width: 100% !important;
    margin: 0 !important;
  }
  .filters .master-dropdown {
    width: 100% !important;
  }
  .filters .filterbtn {
    grid-column: 1 / -1 !important;
    width: 100% !important;
    justify-content: center !important;
  }
  .selbar {
    flex-wrap: wrap !important;
    gap: 8px !important;
    padding: 10px 12px !important;
  }
  .footerbar {
    flex-direction: column !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 12px !important;
    padding: 14px 12px !important;
    text-align: center !important;
  }
  .footerbar > span {
    width: 100% !important;
    text-align: center !important;
    font-size: 12px !important;
    order: 1 !important;
  }
  .footerbar .pagination {
    order: 2 !important;
    justify-content: center !important;
    gap: 6px !important;
    width: 100% !important;
  }
  .summary-grid {
    grid-template-columns: 1fr !important;
    gap: 12px !important;
  }
  .permission-overview-layout {
    flex-direction: row !important;
    align-items: center !important;
    justify-content: space-between !important;
    gap: 14px !important;
    padding: 6px 0 !important;
  }
  .permission-donut {
    width: 116px !important;
    height: 116px !important;
    flex: 0 0 116px !important;
  }
  .permission-donut::after {
    inset: 18px !important;
  }
  .permission-legend {
    flex: 1 !important;
    min-width: 0 !important;
  }
  .modal-overlay {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    padding: 12px 10px !important;
  }
  .modal {
    width: calc(100vw - 20px) !important;
    padding: 16px 14px !important;
    margin: auto !important;
    max-height: 86vh !important;
    overflow-y: auto !important;
  }
  .form-grid {
    grid-template-columns: 1fr !important;
    gap: 10px !important;
  }
  .form-field.full {
    grid-column: 1 / -1 !important;
  }
  .permission-editor-row {
    grid-template-columns: 1fr !important;
    gap: 8px !important;
  }
}

.roles-scope .role-details-backdrop {
  display: contents;
}

@media (max-width: 980px) {
  .roles-scope .role-details-backdrop {
    position: fixed !important;
    inset: 0 !important;
    background: rgba(25, 27, 35, 0.55) !important;
    backdrop-filter: blur(4px) !important;
    z-index: 9999 !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    padding: 16px !important;
    box-sizing: border-box !important;
  }
  .roles-scope .role-details {
    position: relative !important;
    width: min(520px, 100%) !important;
    max-height: 88vh !important;
    overflow-y: auto !important;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25) !important;
    border-radius: 14px !important;
    background: #ffffff !important;
  }
  .roles-scope .modal-actions-2col {
    display: grid !important;
    grid-template-columns: 1fr 1fr !important;
    gap: 8px !important;
    margin-top: 12px !important;
  }
  .roles-scope .modal-actions-2col button {
    width: 100% !important;
    justify-content: center !important;
    height: 38px !important;
    font-size: 12px !important;
  }
}

@media (max-width: 650px) {
  .roles-scope .modal-overlay,
  .modal-overlay {
    padding: 12px 10px !important;
  }
  .roles-scope .modal,
  .modal {
    width: calc(100vw - 20px) !important;
    max-width: 100% !important;
    padding: 16px 14px !important;
    max-height: 88vh !important;
    overflow-y: auto !important;
    box-sizing: border-box !important;
  }
  .roles-scope .form-grid,
  .form-grid {
    grid-template-columns: 1fr !important;
    gap: 10px !important;
  }
  .roles-scope .form-field.full,
  .form-field.full {
    grid-column: auto !important;
  }
}

@media (max-width: 480px) {
  .permission-editor-row {
    grid-template-columns: 1fr !important;
    gap: 8px !important;
  }
  .permission-editor-row .master-dropdown {
    width: 100% !important;
  }
  .pagehead > div:last-child { width: 100% !important; display: grid !important; grid-template-columns: 1fr 1fr !important; gap: 8px !important; }
  .primarybtn, .secondarybtn { flex: 1 !important; justify-content: center !important; height: 38px !important; }
}

/* Master KPI Grid Spacing matching Orders, Inventory, Banners, and Reviews pages */
.roles-scope .kpi-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(150px, 1fr));
  gap: 14px;
  margin-bottom: 20px;
}
@media (max-width: 1250px) {
  .roles-scope .kpi-grid { grid-template-columns: repeat(3, 1fr); }
}

/* Master Panel Styles */
.panel-section { margin-bottom: 16px; }

/* Main Grid Layout (Matching Integrations Page Pattern) */
.main-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  align-items: start;
  margin-bottom: 16px;
  transition: grid-template-columns 0.25s ease;
}
.main-grid.has-selection {
  grid-template-columns: minmax(0, 1.62fr) minmax(330px, 0.78fr);
}
@media (max-width: 1200px) {
  .main-grid.has-selection {
    grid-template-columns: 1fr;
  }
}

.panel { background: #fff; border: 1px solid var(--admin-outline); border-radius: 12px; box-shadow: var(--admin-shadow); overflow: hidden; }
.tabs { display: flex; gap: 2px; overflow-x: auto; padding: 0 10px; border-bottom: 1px solid var(--admin-surface-mid); scrollbar-width: none; }
.tabs::-webkit-scrollbar { display: none; }
.tab { height: 44px; border: 0; background: transparent; padding: 0 12px; font-size: 12px; font-weight: 800; color: var(--admin-text); position: relative; white-space: nowrap; cursor: pointer; }
.tab b { margin-left: 5px; padding: 3px 6px; border-radius: 999px; background: var(--admin-surface-mid); font-size: 10px; font-weight: 800; color: var(--admin-text); }
.tab.active { color: var(--admin-primary-2); }
.tab.active:after { content: ""; position: absolute; left: 8px; right: 8px; bottom: 0; height: 2px; background: var(--admin-primary-2); }
.filters { padding: 12px; display: flex; align-items: center; gap: 8px; flex-wrap: wrap; border-bottom: 1px solid var(--admin-surface-mid); }
.field { height: 38px; border: 1px solid var(--admin-outline); border-radius: 8px; background: #fff; display: flex; align-items: center; gap: 8px; padding: 0 10px; font-size: 12px; font-weight: 800; color: var(--admin-text); }
.field input { border: 0; outline: 0; width: 100%; background: transparent; font-size: 12px; font-weight: 800; color: var(--admin-text); }
.filterbtn { height: 38px; border: 1px solid var(--admin-outline); background: #fff; border-radius: 8px; padding: 0 12px; display: flex; align-items: center; gap: 7px; font-size: 12px; font-weight: 800; color: var(--admin-text); cursor: pointer; }

/* Selection Bar matching Orders & Inventory pages */
.selbar { display: flex; align-items: center; gap: 12px; padding: 12px 18px; border-bottom: 1px solid var(--admin-surface-mid); background: #ffffff; }
.selbar strong { font-size: 12px; font-weight: 800; color: var(--admin-text); }
.selbar span { font-size: 11px; color: var(--admin-muted); font-weight: 500; }
.selbar .spacer { margin-left: auto; }
.clear { border: 0; background: transparent; color: var(--admin-primary-2); font-size: 11px; font-weight: 800; cursor: pointer; }

/* Table Styles */
.table-scroll { width: 100%; overflow-x: auto; }
.roles-table { width: 100%; min-width: 860px; border-collapse: collapse; border-spacing: 0; }
.roles-table th, .roles-table td { box-sizing: border-box; }
.roles-table thead tr { height: 44px; }
.roles-table tbody tr { height: 60px; box-sizing: border-box; }
.roles-table th { height: 44px; background: #f3f3fe; color: #191b23; text-align: left; font-size: 12px; font-weight: 800; border-bottom: 1px solid #ededf8; text-transform: uppercase; letter-spacing: .04em; padding: 0 18px; white-space: nowrap; vertical-align: middle; }
.roles-table td { height: 60px; border-bottom: 1px solid #ededf8; font-size: 12.5px; font-weight: 500; color: #191b23; padding: 0 18px; white-space: nowrap; vertical-align: middle; }
.roles-table td strong { color: #191b23; font-weight: 500; font-size: 13px; }
.roles-table td div { font-weight: 500; }
.roles-table td span { font-weight: 500; }
.roles-table th:first-child, .roles-table td:first-child { width: 48px; padding-left: 18px; padding-right: 8px; text-align: center; border-top-left-radius: 10px; }
.roles-table th:last-child, .roles-table td:last-child { width: 130px; padding: 0 14px; text-align: center; border-top-right-radius: 10px; }
.roles-table tr { transition: background 0.18s ease; }
.roles-table tr.selected { background: #f0f5ff !important; }

.role-name-cell { display: flex; align-items: center; gap: 10px; height: 100%; }
.role-icon { width: 34px; height: 34px; border-radius: 50%; display: grid; place-items: center; color: #fff; font-size: 15px; flex-shrink: 0; }
.role-icon.purple { background: #8b5cf6; }
.role-icon.blue { background: #176cec; }
.role-icon.orange { background: #ff7900; }
.role-icon.green { background: #1eb465; }
.role-icon.violet { background: #8b65ed; }
.role-icon.amber { background: #f49a00; }
.role-icon.pink { background: #f45d87; }
.role-icon.slate { background: #9ba6bc; }

.role-name-copy { display: flex; flex-direction: column; justify-content: center; line-height: 1.25; }
.role-name-copy strong { display: block; color: #191b23; font-size: 13px; font-weight: 500; margin: 0; padding: 0; line-height: 1.2; }
.role-name-copy span { display: block; margin-top: 2px; color: var(--admin-muted); font-size: 11px; font-weight: 500; margin: 0; padding: 0; line-height: 1.2; }

.role-description-cell { max-width: 250px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-weight: 500; }

.type-pill { display: inline-flex; align-items: center; justify-content: center; height: 22px; padding: 0 10px; border-radius: 6px; font-size: 11px; font-weight: 800; white-space: nowrap; }
.type-pill.system { background: #e3edff; color: #0056c3; }
.type-pill.custom { background: #def6e5; color: #138a42; }

.status-pill { display: inline-flex; align-items: center; gap: 5px; height: 24px; padding: 0 10px; border-radius: 999px; font-size: 11px; font-weight: 800; white-space: nowrap; }
.status-pill.active { background: #def6e5; color: #138a42; }
.status-pill.inactive { background: #ffe8eb; color: #D32F2F; }
.status-dot { width: 6px; height: 6px; border-radius: 50%; background: currentColor; }

.rowactions { display: flex; align-items: center; justify-content: center; gap: 6px; }
.rowactions button { width: 34px; height: 34px; border-radius: 8px; border: 1px solid var(--admin-outline); background: #ffffff; color: var(--admin-text); display: grid; place-items: center; font-size: 15px; cursor: pointer; transition: all .18s ease; }
.rowactions button:hover { background: #f3f3fe; border-color: var(--admin-primary-2); color: var(--admin-primary-2); }
.rowactions button.active-view { background: var(--admin-primary-2); color: #ffffff; border-color: var(--admin-primary-2); }

.row-menu { position: absolute; right: 0; top: 36px; width: 165px; z-index: 40; padding: 6px; border: 1px solid var(--admin-outline); border-radius: 8px; background: #fff; box-shadow: var(--admin-shadow); }
.row-menu button { width: 100%; height: 32px; padding: 0 10px; border: 0; border-radius: 6px; background: transparent; text-align: left; font-size: 12px; font-weight: 600; color: var(--admin-text); cursor: pointer; }
.row-menu button:hover { background: #f5f7fb; color: var(--admin-primary-2); }

.footerbar { display: flex; align-items: center; justify-content: space-between; padding: 12px 16px; border-top: 1px solid #ededf8; font-size: 12px; font-weight: 600; color: var(--admin-text); }
.footerbar .pagination { display: flex; gap: 4px; }
.footerbar .pagination button { min-width: 32px; height: 32px; padding: 0 6px; border: 1px solid var(--admin-outline); background: #ffffff; border-radius: 6px; font-size: 12px; font-weight: 700; cursor: pointer; }
.footerbar .pagination button.active { background: var(--admin-primary-2); color: #ffffff; border-color: var(--admin-primary-2); }

/* Mobile Cards */
.mobile-role-list { display: none; padding: 12px; flex-direction: column; gap: 10px; }
@media (max-width: 980px) {
  .table-scroll { display: none; }
  .mobile-role-list { display: flex; }
}
.mobile-role-card { border: 1px solid var(--admin-outline); border-radius: 10px; padding: 12px; background: #ffffff; display: flex; flex-direction: column; gap: 10px; }
.mobile-role-head { display: flex; align-items: center; justify-content: space-between; gap: 10px; }
.mobile-role-actions { display: flex; gap: 8px; }
.mobile-role-actions button { flex: 1; height: 36px; border: 1px solid var(--admin-outline); background: #fff; border-radius: 8px; font-weight: 700; font-size: 12px; display: flex; align-items: center; justify-content: center; gap: 6px; cursor: pointer; }

/* Right Column Details Card (Matching Integrations Page Pattern) */
.role-details { padding: 18px; background: #fff; border: 1px solid var(--admin-outline); border-radius: 12px; box-shadow: var(--admin-shadow); }
.detail-head { display: flex; align-items: center; justify-content: space-between; gap: 10px; margin-bottom: 14px; }
.detail-head h3 { margin: 0; font-size: 15px; font-weight: 800; color: var(--admin-text); }

.detail-info { margin-top: 14px; padding-bottom: 14px; border-bottom: 1px solid var(--admin-surface-mid); display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
.detail-info-row { display: grid; gap: 2px; }
.detail-info-row span { font-size: 11px; color: var(--admin-muted); }
.detail-info-row strong { font-size: 12.5px; font-weight: 700; color: var(--admin-text); }

.permissions-grid { margin-top: 12px; display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
.permission-line { display: flex; align-items: center; gap: 8px; padding: 8px; border: 1px solid var(--admin-surface-mid); border-radius: 8px; background: #f8f9fc; }
.permission-check { width: 22px; height: 22px; border-radius: 6px; background: #def6e5; color: #138a42; display: grid; place-items: center; font-size: 12px; font-weight: 800; flex-shrink: 0; }

/* 3-Column Summary Cards Grid (Below Table) */
.summary-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-bottom: 16px; }
@media (max-width: 1200px) { .summary-grid { grid-template-columns: 1fr; } }

.side-card { padding: 16px; background: #fff; border: 1px solid var(--admin-outline); border-radius: 12px; box-shadow: var(--admin-shadow); }
.card-head { display: flex; align-items: center; justify-content: space-between; gap: 10px; margin-bottom: 12px; }
.card-head h3 { margin: 0; font-size: 17.5px; font-weight: 800; letter-spacing: -.02em; color: var(--admin-text); }
.card-head button { border: 0; background: transparent; color: var(--admin-primary-2); font-size: 12px; font-weight: 700; cursor: pointer; }

.permission-overview-layout { display: flex; align-items: center; gap: 16px; margin-top: 10px; }
.permission-donut { width: 120px; height: 120px; flex: 0 0 auto; border-radius: 50%; background: conic-gradient(#138a42 0 50%, #0056c3 50% 76.9%, #fd661d 76.9% 92.3%, #8b5cf6 92.3% 100%); position: relative; }
.permission-donut::after { content: ""; position: absolute; inset: 24px; border-radius: 50%; background: #fff; }
.donut-center { position: absolute; inset: 0; z-index: 1; display: grid; place-content: center; text-align: center; }
.donut-center strong { font-size: 16px; font-weight: 800; color: var(--admin-text); }
.donut-center span { margin-top: 1px; color: var(--admin-muted); font-size: 10px; }
.permission-legend { display: grid; gap: 8px; flex: 1; }
.legend-row { display: grid; grid-template-columns: 8px 1fr auto; gap: 8px; align-items: center; font-size: 11.5px; }
.legend-row i { width: 8px; height: 8px; border-radius: 50%; }

.usage-chart { height: 160px; margin-top: 12px; display: flex; align-items: flex-end; gap: 8px; position: relative; border-bottom: 1px solid var(--admin-surface-mid); padding-bottom: 4px; }
.usage-columns { flex: 1; height: 100%; display: grid; grid-template-columns: repeat(8, 1fr); gap: 6px; align-items: end; }
.usage-column { height: 100%; display: flex; flex-direction: column; justify-content: flex-end; align-items: center; }
.usage-bar { width: 16px; min-height: 4px; border-radius: 3px 3px 0 0; }
.usage-label { font-size: 9.5px; color: var(--admin-muted); text-align: center; margin-top: 4px; line-height: 1.1; }

.activity-list { display: grid; }
.activity-row { display: grid; grid-template-columns: 32px 1fr; gap: 10px; align-items: center; padding: 10px 0; border-bottom: 1px solid var(--admin-surface-mid); }
.activity-row:last-child { border-bottom: 0; }
.activity-icon { width: 32px; height: 32px; border-radius: 50%; display: grid; place-items: center; font-size: 14px; }
.activity-icon.green { background: #def6e5; color: #138a42; }
.activity-icon.blue { background: #e3edff; color: #0056c3; }
.activity-icon.orange { background: #fff0d8; color: #d66c00; }
.activity-icon.red { background: #ffe8eb; color: #D32F2F; }

.modal-overlay { position: fixed; inset: 0; display: grid; place-items: center; padding: 16px; z-index: 110; background: rgba(16, 23, 47, 0.45); backdrop-filter: blur(2px); }
.modal { width: min(640px, 100%); max-height: 92vh; overflow-y: auto; padding: 20px; border-radius: 12px; background: #fff; box-shadow: 0 22px 65px rgba(16,24,40,.18); }
.modal.modal-wide { width: min(760px, 100%); }
.modal-head { display: flex; align-items: center; justify-content: space-between; padding-bottom: 12px; border-bottom: 1px solid var(--admin-surface-mid); }
.modal-head h2 { margin: 0; font-size: 18px; font-weight: 800 !important; color: #191b23; letter-spacing: -0.02em; }
.modal-close { width: 34px; height: 34px; border: 1px solid var(--admin-outline); border-radius: 8px; background: #fff; display: grid; place-items: center; cursor: pointer; color: var(--admin-text); transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1); }
.modal-close:hover, .modal-close:active, .modal-close:focus { background: #eff6ff; border-color: #93c5fd; color: #0056c3; transform: scale(1.06); }

.form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 14px; }
.form-field { display: flex; flex-direction: column; gap: 6px; }
.form-field.full { grid-column: 1 / 3; }
.form-field span { font-size: 12px; font-weight: 700; color: var(--admin-text); }
.form-field input, .form-field select, .form-field textarea { width: 100%; border: 1px solid var(--admin-outline); border-radius: 8px; background: #fff; outline: 0; font-size: 12.5px; font-family: inherit; }
.form-field input, .form-field select { height: 40px; padding: 0 12px; }
.form-field textarea { min-height: 80px; padding: 10px 12px; resize: vertical; }

.permission-editor { display: grid; gap: 8px; margin-top: 14px; }
.permission-editor-row { padding: 10px 12px; border: 1px solid var(--admin-surface-mid); border-radius: 8px; display: grid; grid-template-columns: 1fr 140px; gap: 12px; align-items: center; background: #fafbfe; }

/* Page Assignment Selector in Role Modal */
.page-select-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 12px;
  border: 1px solid var(--admin-surface-mid);
  border-radius: 9px;
  background: #ffffff;
  transition: all 0.18s ease;
  cursor: pointer;
  box-sizing: border-box;
}
.page-select-row:hover {
  border-color: #0056c3;
  background: #f8faff;
}
.page-select-row.is-selected {
  border-color: #bfdbfe;
  background: #f3f7fe;
}
.page-icon-badge {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: #ededf8;
  color: #424753;
  display: grid;
  place-items: center;
  font-size: 15px;
  flex-shrink: 0;
  transition: all 0.18s ease;
}
.page-icon-badge.active {
  background: #e7efff;
  color: #0056c3;
}
.page-group-tag {
  font-size: 10px;
  font-weight: 700;
  color: #0056c3;
  background: #eef4ff;
  padding: 1px 6px;
  border-radius: 4px;
}
.page-added-badge {
  font-size: 10px;
  font-weight: 800;
  color: #138a42;
  background: #def6e5;
  padding: 1px 6px;
  border-radius: 999px;
}
.btn-preset {
  border: 1px solid var(--admin-outline);
  background: #ffffff;
  border-radius: 6px;
  padding: 3px 9px;
  font-size: 11px;
  font-weight: 700;
  color: var(--admin-text);
  cursor: pointer;
  transition: all 0.15s ease;
}
.btn-preset:hover {
  background: #eff6ff;
  border-color: #93c5fd;
  color: #0056c3;
}
.role-presets-row {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
  margin-bottom: 10px;
  padding: 8px 10px;
  background: #f8f9fe;
  border-radius: 8px;
  border: 1px solid var(--admin-surface-mid);
}
.role-presets-row button {
  border: 1px solid #d1d5db;
  background: #ffffff;
  border-radius: 6px;
  padding: 3px 8px;
  font-size: 11px;
  font-weight: 700;
  color: #374151;
  cursor: pointer;
  transition: all 0.15s ease;
}
.role-presets-row button:hover {
  background: #0056c3;
  border-color: #0056c3;
  color: #ffffff;
}
.page-search-box {
  display: flex;
  align-items: center;
  gap: 8px;
  height: 36px;
  border: 1px solid var(--admin-outline);
  border-radius: 8px;
  background: #ffffff;
  padding: 0 10px;
  flex: 1 1 180px;
  box-sizing: border-box;
}
.page-search-box input {
  border: 0;
  outline: 0;
  width: 100%;
  font-size: 12px;
  font-family: inherit;
  color: var(--admin-text);
  background: transparent;
}
.page-search-box svg {
  color: #667085;
  font-size: 14px;
  flex-shrink: 0;
}
.page-group-filter {
  display: flex;
  gap: 4px;
  overflow-x: auto;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
  padding: 2px 0;
  flex-wrap: wrap;
}
.page-group-filter::-webkit-scrollbar {
  display: none;
}
.page-group-filter button {
  border: 1px solid transparent;
  background: #ededf8;
  border-radius: 6px;
  padding: 3px 8px;
  font-size: 11px;
  font-weight: 700;
  color: #424753;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.15s ease;
}
.page-group-filter button.active {
  background: #0056c3;
  color: #ffffff;
}
.btn-add-page {
  border: 1px dashed #0056c3;
  background: #f0f6ff;
  border-radius: 7px;
  padding: 6px 10px;
  font-size: 11.5px;
  font-weight: 700;
  color: #0056c3;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  width: 100%;
  justify-content: center;
  transition: all 0.15s ease;
}
.btn-add-page:hover {
  background: #0056c3;
  color: #ffffff;
}
.pages-scroll-list {
  display: grid;
  gap: 8px;
  max-height: 280px;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding-right: 2px;
}
.permission-line.denied {
  opacity: 0.65;
  background: #fdfdfd;
}
.permission-check.denied {
  background: #f1f2f6;
  color: #8c93a3;
}

@media (max-width: 650px) {
  .page-select-row {
    flex-direction: column !important;
    align-items: stretch !important;
    gap: 8px !important;
  }
  .page-select-row > div:last-child {
    width: 100% !important;
  }
  .page-group-filter {
    width: 100% !important;
  }
}

/* Toast */
.toast { position: fixed; right: 24px; bottom: 24px; z-index: 140; min-width: 280px; padding: 12px 16px; border-radius: 10px; background: #10172f; color: #ffffff; box-shadow: 0 18px 45px rgba(16,24,40,.24); display: flex; align-items: center; gap: 10px; font-size: 12.5px; font-weight: 600; }
.toast-icon { width: 24px; height: 24px; border-radius: 50%; background: #16a34a; color: #fff; display: grid; place-items: center; font-size: 13px; flex-shrink: 0; }
`;

export const availablePages = [
  { id: "Dashboard", name: "Dashboard", group: "Overview", icon: FiHome, path: "/dashboard", description: "Main KPI overview and store metrics" },
  { id: "Orders", name: "Orders", group: "Orders", icon: FiShoppingBag, path: "/orders", description: "Order processing, tracking, and details" },
  { id: "Returns", name: "Returns", group: "Orders", icon: FiRotateCcw, path: "/returns", description: "Return requests, pickups, and refund processing" },
  { id: "Products", name: "Products", group: "Products", icon: FiPackage, path: "/products", description: "Catalog items, pricing, categories, and variants" },
  { id: "Inventory", name: "Inventory", group: "Products", icon: FiBox, path: "/inventory", description: "Stock levels, warehouses, and low-stock alerts" },
  { id: "Customers", name: "Customers", group: "Customers", icon: FiUsers, path: "/customers", description: "Customer database, profiles, and order history" },
  { id: "Segments", name: "Segments", group: "Customers", icon: FiUser, path: "/segments", description: "Customer segmentation and audience groups" },
  { id: "Banners", name: "Banners", group: "Marketing", icon: FiImage, path: "/banners", description: "Promotional hero banners and campaign visuals" },
  { id: "Coupons", name: "Coupons", group: "Marketing", icon: FiTag, path: "/coupons", description: "Discount codes, limits, and coupon rules" },
  { id: "Reviews", name: "Reviews", group: "Marketing", icon: FiStar, path: "/reviews", description: "Customer ratings, feedback, and moderation" },
  { id: "Payments", name: "Payments", group: "Finance", icon: FiCreditCard, path: "/payments", description: "Payment transactions, refunds, and gateways" },
  { id: "Analytics", name: "Analytics & Reports", group: "Finance", icon: FiBarChart2, path: "/analytics", description: "Revenue charts, sales analytics, and reports" },
  { id: "Admin Users", name: "Admin Users", group: "User Management", icon: FiUsers, path: "/admin-users", description: "Staff accounts, logins, and status" },
  { id: "Roles & Permissions", name: "Roles & Permissions", group: "User Management", icon: FiShield, path: "/roles-permissions", description: "Role definitions and access policies" },
  { id: "Settings", name: "Settings", group: "Store Settings", icon: FiSettings, path: "/settings", description: "Store preferences, taxes, and configurations" },
  { id: "Integrations", name: "Integrations", group: "Store Settings", icon: FiPackage, path: "/integrations", description: "Third-party apps, APIs, and webhooks" },
];

export const permissionModules = availablePages.map((p) => p.name);

export const getPermissionForPage = (role, page) => {
  if (!role || !role.permissions) return "No Access";
  if (role.permissions[page.name]) return role.permissions[page.name];
  if (role.permissions[page.id]) return role.permissions[page.id];
  // Fallbacks for initial legacy roles
  if (page.id === "Analytics" && role.permissions["Reports"]) return role.permissions["Reports"];
  if (page.id === "Admin Users" && role.permissions["Users"]) return role.permissions["Users"];
  if (["Banners", "Coupons", "Reviews"].includes(page.id) && role.permissions["Marketing"]) return role.permissions["Marketing"];
  if (page.id === "Payments" && role.permissions["Finance"]) return role.permissions["Finance"];
  if (page.id === "Returns" && role.permissions["Orders"]) return role.permissions["Orders"];
  if (page.id === "Segments" && role.permissions["Customers"]) return role.permissions["Customers"];
  return "No Access";
};

const initialRoles = [
  {
    id: "ROLE-001",
    name: "Super Admin",
    subtitle: "Full system access",
    type: "System",
    users: 1,
    description: "Full access to all modules, settings and system controls.",
    status: "Active",
    icon: "crown",
    tone: "purple",
    createdOn: "Jan 10, 2025 09:15 AM",
    lastUpdated: "May 18, 2025 10:24 AM",
    createdBy: "System",
    permissions: Object.fromEntries(permissionModules.map((name) => [name, "Full Access"])),
  },
  {
    id: "ROLE-002",
    name: "Administrator",
    subtitle: "Manage all operations",
    type: "System",
    users: 5,
    description: "Manage users, roles, settings and all business operations.",
    status: "Active",
    icon: "user",
    tone: "blue",
    createdOn: "Jan 10, 2025 09:20 AM",
    lastUpdated: "May 18, 2025 09:40 AM",
    createdBy: "System",
    permissions: {
      Dashboard: "Full Access", Orders: "Full Access", Products: "Full Access", Inventory: "Full Access",
      Customers: "Full Access", Reports: "Full Access", Settings: "Full Access", Users: "Full Access",
      "Roles & Permissions": "Read Access", Marketing: "Full Access", Finance: "Read Access", Integrations: "Read Access",
    },
  },
  {
    id: "ROLE-003",
    name: "Manager",
    subtitle: "Operational manager",
    type: "Custom",
    users: 3,
    description: "Manage orders, products, inventory and customers.",
    status: "Active",
    icon: "manager",
    tone: "orange",
    createdOn: "Jan 21, 2025 11:00 AM",
    lastUpdated: "May 16, 2025 04:30 PM",
    createdBy: "Sujith",
    permissions: {
      Dashboard: "Full Access", Orders: "Full Access", Products: "Full Access", Inventory: "Full Access",
      Customers: "Full Access", Reports: "Read Access", Settings: "No Access", Users: "No Access",
      "Roles & Permissions": "No Access", Marketing: "Read Access", Finance: "Read Access", Integrations: "No Access",
    },
  },
  {
    id: "ROLE-004",
    name: "Editor",
    subtitle: "Content editor",
    type: "Custom",
    users: 2,
    description: "Manage content, banners, coupons and reviews.",
    status: "Active",
    icon: "edit",
    tone: "green",
    createdOn: "Feb 05, 2025 10:10 AM",
    lastUpdated: "May 18, 2025 09:45 AM",
    createdBy: "Priya Sharma",
    permissions: {
      Dashboard: "Read Access", Orders: "Read Access", Products: "Write Access", Inventory: "Read Access",
      Customers: "Read Access", Reports: "Read Access", Settings: "No Access", Users: "No Access",
      "Roles & Permissions": "No Access", Marketing: "Full Access", Finance: "No Access", Integrations: "No Access",
    },
  },
  {
    id: "ROLE-005",
    name: "Support Agent",
    subtitle: "Customer support",
    type: "System",
    users: 4,
    description: "Handle customer queries, returns and support tickets.",
    status: "Active",
    icon: "support",
    tone: "violet",
    createdOn: "Jan 10, 2025 09:30 AM",
    lastUpdated: "May 17, 2025 06:20 PM",
    createdBy: "System",
    permissions: {
      Dashboard: "Read Access", Orders: "Read Access", Products: "Read Access", Inventory: "Read Access",
      Customers: "Full Access", Reports: "Read Access", Settings: "No Access", Users: "No Access",
      "Roles & Permissions": "No Access", Marketing: "Read Access", Finance: "No Access", Integrations: "No Access",
    },
  },
  {
    id: "ROLE-006",
    name: "Viewer",
    subtitle: "Read only access",
    type: "System",
    users: 2,
    description: "View reports, analytics and basic information.",
    status: "Active",
    icon: "viewer",
    tone: "amber",
    createdOn: "Jan 10, 2025 09:35 AM",
    lastUpdated: "May 14, 2025 01:15 PM",
    createdBy: "System",
    permissions: Object.fromEntries(permissionModules.map((name) => [
      name,
      ["Dashboard", "Products", "Customers", "Reports"].includes(name) ? "Read Access" : "No Access"
    ])),
  },
  {
    id: "ROLE-007",
    name: "Finance Manager",
    subtitle: "Financial operations",
    type: "Custom",
    users: 1,
    description: "Manage payments, payouts, refunds and financial reports.",
    status: "Active",
    icon: "finance",
    tone: "pink",
    createdOn: "May 18, 2025 10:15 AM",
    lastUpdated: "May 18, 2025 10:15 AM",
    createdBy: "Sujith",
    permissions: {
      Dashboard: "Read Access", Orders: "Read Access", Products: "No Access", Inventory: "No Access",
      Customers: "Read Access", Reports: "Full Access", Settings: "No Access", Users: "No Access",
      "Roles & Permissions": "No Access", Marketing: "No Access", Finance: "Full Access", Integrations: "Read Access",
    },
  },
  {
    id: "ROLE-008",
    name: "Inventory Manager",
    subtitle: "Inventory management",
    type: "Custom",
    users: 0,
    description: "Manage inventory, stock, suppliers and warehouse.",
    status: "Inactive",
    icon: "inventory",
    tone: "slate",
    createdOn: "Mar 12, 2025 02:40 PM",
    lastUpdated: "May 12, 2025 05:30 PM",
    createdBy: "Sujith",
    permissions: {
      Dashboard: "Read Access", Orders: "Read Access", Products: "Write Access", Inventory: "Full Access",
      Customers: "No Access", Reports: "Read Access", Settings: "No Access", Users: "No Access",
      "Roles & Permissions": "No Access", Marketing: "No Access", Finance: "No Access", Integrations: "Read Access",
    },
  },
];

const permissionOverview = [
  { label: "Full Access", value: "78 (50.0%)", color: "#138a42" },
  { label: "Read Access", value: "42 (26.9%)", color: "#0056c3" },
  { label: "Write Access", value: "24 (15.4%)", color: "#fd661d" },
  { label: "No Access", value: "12 (7.7%)", color: "#8b5cf6" },
];

const roleUsage = [
  { label: "Super Admin", value: 1, color: "#6d28d9" },
  { label: "Admin", value: 5, color: "#0056c3" },
  { label: "Manager", value: 3, color: "#fd661d" },
  { label: "Editor", value: 2, color: "#138a42" },
  { label: "Support", value: 4, color: "#ef6b8d" },
  { label: "Viewer", value: 2, color: "#f2a800" },
  { label: "Finance", value: 1, color: "#8b5cf6" },
  { label: "Inventory", value: 0, color: "#9ba6bc" },
];

const recentActivities = [
  { id: 1, title: 'New role "Finance Manager" created', date: "May 18, 2025 10:15 AM", by: "Sujith", tone: "green", icon: FiPlus },
  { id: 2, title: 'Permissions updated for "Editor" role', date: "May 18, 2025 09:45 AM", by: "Priya Sharma", tone: "blue", icon: FiEdit2 },
  { id: 3, title: 'User Arjun Mehta assigned to "Manager" role', date: "May 17, 2025 03:20 PM", by: "Sujith", tone: "orange", icon: FiUserCheck },
  { id: 4, title: 'Role "Inventory Manager" deactivated', date: "May 16, 2025 06:10 PM", by: "Sujith", tone: "red", icon: FiLock },
];

function RoleGraphic({ role }) {
  if (role.icon === "crown") return <RiVipCrownLine />;
  if (role.icon === "user") return <RiShieldUserLine />;
  if (role.icon === "manager") return <FiShoppingBag />;
  if (role.icon === "edit") return <RiPencilRuler2Line />;
  if (role.icon === "support") return <RiCustomerService2Line />;
  if (role.icon === "viewer") return <RiBarChartBoxLine />;
  if (role.icon === "finance") return <RiMoneyDollarCircleLine />;
  return <FiBox />;
}

function RoleIcon({ role, className = "" }) {
  return <span className={`role-icon ${role.tone} ${className}`}><RoleGraphic role={role} /></span>;
}

function TypePill({ type }) {
  return <span className={`type-pill ${type.toLowerCase()}`}>{type}</span>;
}

function StatusPill({ status }) {
  return <span className={`status-pill ${status.toLowerCase()}`}><i className="status-dot" />{status}</span>;
}

function RowMenu({ role, onSelect, onEdit, onDuplicate, onToggleStatus, onClose }) {
  return (
    <motion.div className="row-menu" initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }}>
      <button type="button" onClick={() => { onSelect(role); onClose(); }}>View details</button>
      <button type="button" onClick={() => { onEdit(role); onClose(); }}>Edit role</button>
      <button type="button" onClick={() => { onDuplicate(role); onClose(); }}>Duplicate role</button>
      <button type="button" onClick={() => { onToggleStatus(role); onClose(); }}>{role.status === "Active" ? "Deactivate role" : "Activate role"}</button>
    </motion.div>
  );
}

function RoleDetails({ role, onClose, onEditPermissions, onToggleStatus, onDuplicate, onEdit }) {
  return (
    <div className="role-details-backdrop" onClick={onClose}>
      <aside className="card role-details" onClick={(e) => e.stopPropagation()}>
        <div className="detail-head">
          <h3>Role Details</h3>
          <button className="modal-close" type="button" onClick={onClose}><FiX /></button>
        </div>

        <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 16 }}>
          <RoleIcon role={role} style={{ width: 48, height: 48, fontSize: 22 }} />
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
              <strong style={{ fontSize: 16 }}>{role.name}</strong>
              <TypePill type={role.type} />
            </div>
            <p style={{ margin: "4px 0 0", color: "var(--admin-muted)", fontSize: 12 }}>{role.description}</p>
          </div>
        </div>

        <div className="detail-info">
          <div className="detail-info-row"><span>Status</span><StatusPill status={role.status} /></div>
          <div className="detail-info-row"><span>Assigned Users</span><strong>{role.users} Users</strong></div>
          <div className="detail-info-row"><span>Created On</span><strong>{role.createdOn}</strong></div>
          <div className="detail-info-row"><span>Created By</span><strong>{role.createdBy}</strong></div>
        </div>

        <div style={{ paddingTop: 14, borderTop: "1px solid var(--admin-surface-mid)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10, flexWrap: "wrap", gap: 6 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <h4 style={{ margin: 0, fontSize: 13, fontWeight: 800 }}>Role Permissions &amp; Pages</h4>
              <span style={{ fontSize: 11, fontWeight: 700, background: "#def6e5", color: "#138a42", padding: "1px 8px", borderRadius: 999 }}>
                {availablePages.filter((p) => getPermissionForPage(role, p) !== "No Access").length} Pages Active
              </span>
            </div>
            <button style={{ border: 0, background: "transparent", color: "var(--admin-primary-2)", fontSize: 12, fontWeight: 700, cursor: "pointer" }} onClick={() => onEditPermissions(role)}>Edit Permissions</button>
          </div>
          <div className="permissions-grid">
            {availablePages.map((page) => {
              const access = getPermissionForPage(role, page);
              const hasAccess = access !== "No Access";
              return (
                <div className={`permission-line ${hasAccess ? "granted" : "denied"}`} key={page.id}>
                  <span className={`permission-check ${hasAccess ? "granted" : "denied"}`}>
                    {hasAccess ? <FiCheck /> : <FiX />}
                  </span>
                  <div style={{ minWidth: 0, flex: 1 }}>
                    <strong style={{ display: "block", fontSize: 12, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{page.name}</strong>
                    <span style={{ fontSize: 11, color: hasAccess ? (access === "Full Access" ? "#138a42" : access === "Write Access" ? "#d66c00" : "#0056c3") : "var(--admin-muted)", fontWeight: hasAccess ? 700 : 500 }}>
                      {access}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div style={{ display: "flex", gap: 8, marginTop: 20, flexWrap: "wrap" }}>
          <button className="secondarybtn" type="button" style={{ flex: 1, justifyContent: "center" }} onClick={() => onEdit(role)}><FiEdit2 /> Edit</button>
          <button className="secondarybtn" type="button" style={{ flex: 1, justifyContent: "center" }} onClick={() => onDuplicate(role)}><FiCopy /> Duplicate</button>
          <button className="secondarybtn" type="button" style={{ flex: 1, justifyContent: "center", color: role.status === "Active" ? "var(--admin-red)" : "var(--admin-green)" }} onClick={() => onToggleStatus(role)}>
            {role.status === "Active" ? <FiLock /> : <FiCheck />}
            {role.status === "Active" ? "Deactivate" : "Activate"}
          </button>
        </div>
      </aside>
    </div>
  );
}

function PageAssignmentSection({ selectedPages, setSelectedPages, pageAccess, setPageAccess }) {
  const [search, setSearch] = useState("");
  const [activeGroup, setActiveGroup] = useState("All");

  const groups = ["All", "Overview", "Orders", "Products", "Marketing", "Finance", "User Management", "Store Settings"];

  const filteredPages = useMemo(() => {
    return availablePages.filter((page) => {
      const matchesSearch =
        !search.trim() ||
        page.name.toLowerCase().includes(search.toLowerCase()) ||
        page.group.toLowerCase().includes(search.toLowerCase()) ||
        page.description.toLowerCase().includes(search.toLowerCase());
      const matchesGroup = activeGroup === "All" || page.group === activeGroup;
      return matchesSearch && matchesGroup;
    });
  }, [search, activeGroup]);

  const selectedCount = useMemo(() => {
    return Object.values(selectedPages).filter(Boolean).length;
  }, [selectedPages]);

  const togglePage = (id) => {
    setSelectedPages((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const selectAll = () => {
    const updated = { ...selectedPages };
    filteredPages.forEach((p) => {
      updated[p.id] = true;
    });
    setSelectedPages(updated);
  };

  const clearAll = () => {
    const updated = { ...selectedPages };
    filteredPages.forEach((p) => {
      updated[p.id] = false;
    });
    setSelectedPages(updated);
  };

  const applyPreset = (preset) => {
    const newSelected = {};
    const newAccess = { ...pageAccess };

    if (preset === "admin") {
      availablePages.forEach((p) => {
        newSelected[p.id] = true;
        newAccess[p.id] = "Full Access";
      });
    } else if (preset === "orders") {
      availablePages.forEach((p) => {
        newSelected[p.id] = ["Dashboard", "Orders", "Returns", "Inventory", "Customers"].includes(p.id);
        newAccess[p.id] = "Full Access";
      });
    } else if (preset === "catalog") {
      availablePages.forEach((p) => {
        newSelected[p.id] = ["Dashboard", "Products", "Inventory", "Banners", "Coupons", "Reviews"].includes(p.id);
        newAccess[p.id] = "Full Access";
      });
    } else if (preset === "support") {
      availablePages.forEach((p) => {
        newSelected[p.id] = ["Dashboard", "Orders", "Returns", "Customers", "Reviews"].includes(p.id);
        newAccess[p.id] = ["Orders", "Returns", "Customers"].includes(p.id) ? "Full Access" : "Read Access";
      });
    } else if (preset === "finance") {
      availablePages.forEach((p) => {
        newSelected[p.id] = ["Dashboard", "Payments", "Analytics"].includes(p.id);
        newAccess[p.id] = "Full Access";
      });
    } else if (preset === "clear") {
      availablePages.forEach((p) => {
        newSelected[p.id] = false;
      });
    }

    setSelectedPages(newSelected);
    setPageAccess(newAccess);
  };

  return (
    <div style={{ marginTop: 18, borderTop: "1px solid var(--admin-surface-mid)", paddingTop: 14 }}>
      {/* Header & Badges */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8, flexWrap: "wrap", gap: 8 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
          <label style={{ fontSize: 13, fontWeight: 800, color: "var(--admin-text)" }}>
            Pages &amp; Module Access
          </label>
          <span style={{ fontSize: 11, fontWeight: 700, background: selectedCount > 0 ? "#def6e5" : "#ededf8", color: selectedCount > 0 ? "#138a42" : "#737785", padding: "2px 8px", borderRadius: 999 }}>
            {selectedCount} of {availablePages.length} pages added
          </span>
        </div>
        <div style={{ display: "flex", gap: 6 }}>
          <button type="button" className="btn-preset" onClick={selectAll}>Select Filtered</button>
          <button type="button" className="btn-preset" onClick={clearAll}>Deselect Filtered</button>
        </div>
      </div>

      <p style={{ margin: "0 0 10px 0", fontSize: 12, color: "var(--admin-muted)" }}>
        Select which administration pages this role can access and configure their permissions level.
      </p>

      {/* Quick Presets */}
      <div className="role-presets-row">
        <span style={{ fontSize: 11, fontWeight: 700, color: "#667085" }}>Quick Presets:</span>
        <button type="button" onClick={() => applyPreset("admin")}>Full Admin (All)</button>
        <button type="button" onClick={() => applyPreset("orders")}>Orders &amp; Ops</button>
        <button type="button" onClick={() => applyPreset("catalog")}>Catalog &amp; Content</button>
        <button type="button" onClick={() => applyPreset("support")}>Support Agent</button>
        <button type="button" onClick={() => applyPreset("finance")}>Finance</button>
        <button type="button" onClick={() => applyPreset("clear")} style={{ color: "#b91c1c" }}>Clear</button>
      </div>

      {/* Filter and Search Bar */}
      <div style={{ display: "flex", gap: 8, marginBottom: 10, flexWrap: "wrap", alignItems: "center" }}>
        <div className="page-search-box">
          <FiSearch />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search pages (Orders, Returns, Banners...)"
          />
          {search && (
            <button type="button" onClick={() => setSearch("")} style={{ border: 0, background: "transparent", cursor: "pointer", color: "#667085", display: "grid", placeItems: "center" }}>
              <FiX size={13} />
            </button>
          )}
        </div>
        <div className="page-group-filter">
          {groups.map((group) => (
            <button
              key={group}
              type="button"
              className={activeGroup === group ? "active" : ""}
              onClick={() => setActiveGroup(group)}
            >
              {group}
            </button>
          ))}
        </div>
      </div>

      {/* Pages List */}
      <div className="pages-scroll-list">
        {filteredPages.length > 0 ? (
          filteredPages.map((page) => {
            const isSelected = !!selectedPages[page.id];
            const PageIcon = page.icon;

            return (
              <div
                key={page.id}
                className={`page-select-row ${isSelected ? "is-selected" : ""}`}
                onClick={() => togglePage(page.id)}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10, flex: 1, minWidth: 0 }}>
                  <AnimatedCheckbox
                    checked={isSelected}
                    onChange={() => togglePage(page.id)}
                  />
                  <span className={`page-icon-badge ${isSelected ? "active" : ""}`}>
                    <PageIcon />
                  </span>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
                      <strong style={{ fontSize: 13, color: "var(--admin-text)" }}>{page.name}</strong>
                      <span className="page-group-tag">{page.group}</span>
                      {isSelected && <span className="page-added-badge">✓ Added</span>}
                    </div>
                    <small style={{ fontSize: 11, color: "var(--admin-muted)", display: "block" }}>
                      {page.description}
                    </small>
                  </div>
                </div>

                <div onClick={(e) => e.stopPropagation()} style={{ flexShrink: 0, width: 140 }}>
                  {isSelected ? (
                    <MasterDropdown
                      options={["Full Access", "Write Access", "Read Access"]}
                      value={pageAccess[page.id] || "Full Access"}
                      onChange={(val) => setPageAccess((prev) => ({ ...prev, [page.id]: val }))}
                      className="modal-field-dropdown"
                    />
                  ) : (
                    <button
                      type="button"
                      className="btn-add-page"
                      onClick={() => togglePage(page.id)}
                    >
                      <FiPlus /> Add Page
                    </button>
                  )}
                </div>
              </div>
            );
          })
        ) : (
          <div style={{ padding: 18, textAlign: "center", color: "var(--admin-muted)", fontSize: 12 }}>
            No pages found matching &quot;{search}&quot;.
          </div>
        )}
      </div>
    </div>
  );
}

function CreateRoleModal({ onClose, onCreate }) {
  const [form, setForm] = useState({ name: "", subtitle: "", description: "", status: "Active" });

  const [selectedPages, setSelectedPages] = useState(() => {
    const map = {};
    availablePages.forEach((p) => {
      map[p.id] = ["Dashboard", "Orders", "Products"].includes(p.id);
    });
    return map;
  });

  const [pageAccess, setPageAccess] = useState(() => {
    const map = {};
    availablePages.forEach((p) => {
      map[p.id] = "Full Access";
    });
    return map;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim()) return;

    const permissions = {};
    availablePages.forEach((p) => {
      permissions[p.name] = selectedPages[p.id] ? pageAccess[p.id] || "Full Access" : "No Access";
    });
    // Legacy mapping support
    permissions["Reports"] = selectedPages["Analytics"] ? pageAccess["Analytics"] || "Full Access" : "No Access";
    permissions["Users"] = selectedPages["Admin Users"] ? pageAccess["Admin Users"] || "Full Access" : "No Access";
    permissions["Finance"] = selectedPages["Payments"] ? pageAccess["Payments"] || "Full Access" : "No Access";
    permissions["Marketing"] = (selectedPages["Banners"] || selectedPages["Coupons"] || selectedPages["Reviews"]) ? "Full Access" : "No Access";

    const pages = availablePages.filter((p) => selectedPages[p.id]).map((p) => p.id);

    onCreate({
      ...form,
      permissions,
      pages,
    });
  };

  return (
    <motion.div className="modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.form
        className="modal modal-wide"
        initial={{ y: 18, scale: .98 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: 18, scale: .98 }}
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit}
      >
        <div className="modal-head">
          <h2>Create Role</h2>
          <button className="modal-close" type="button" onClick={onClose}><FiX /></button>
        </div>
        <div style={{ margin: "10px 0", fontSize: 12.5, color: "var(--admin-muted)" }}>
          Create a custom administrative role and assign the relevant pages and access levels.
        </div>

        <div className="form-grid">
          <label className="form-field">
            <span>Role Name *</span>
            <input required value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} placeholder="e.g. Warehouse Manager" />
          </label>
          <label className="form-field">
            <span>Short Label</span>
            <input value={form.subtitle} onChange={(e) => setForm((f) => ({ ...f, subtitle: e.target.value }))} placeholder="Role summary" />
          </label>
          <label className="form-field">
            <span>Status</span>
            <MasterDropdown
              options={["Active", "Inactive"]}
              value={form.status}
              onChange={(val) => setForm((f) => ({ ...f, status: val }))}
            />
          </label>
          <label className="form-field">
            <span>Type</span>
            <input value="Custom" disabled />
          </label>
          <label className="form-field full">
            <span>Description</span>
            <textarea value={form.description} onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))} placeholder="Describe the responsibilities of this role..." />
          </label>
        </div>

        {/* Interactive Page Assignment Component */}
        <PageAssignmentSection
          selectedPages={selectedPages}
          setSelectedPages={setSelectedPages}
          pageAccess={pageAccess}
          setPageAccess={setPageAccess}
        />

        <div style={{ display: "flex", justifyContent: "flex-end", gap: 10, marginTop: 20 }}>
          <button className="secondarybtn" type="button" onClick={onClose}>Cancel</button>
          <button className="primarybtn" type="submit"><FiPlus /> Create Role</button>
        </div>
      </motion.form>
    </motion.div>
  );
}

function EditRoleModal({ role, onClose, onSave }) {
  const [form, setForm] = useState({ name: role.name, subtitle: role.subtitle, description: role.description, status: role.status });

  const [selectedPages, setSelectedPages] = useState(() => {
    const map = {};
    availablePages.forEach((p) => {
      map[p.id] = getPermissionForPage(role, p) !== "No Access";
    });
    return map;
  });

  const [pageAccess, setPageAccess] = useState(() => {
    const map = {};
    availablePages.forEach((p) => {
      const perm = getPermissionForPage(role, p);
      map[p.id] = perm !== "No Access" ? perm : "Full Access";
    });
    return map;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim()) return;

    const permissions = { ...role.permissions };
    availablePages.forEach((p) => {
      permissions[p.name] = selectedPages[p.id] ? pageAccess[p.id] || "Full Access" : "No Access";
    });
    permissions["Reports"] = selectedPages["Analytics"] ? pageAccess["Analytics"] || "Full Access" : "No Access";
    permissions["Users"] = selectedPages["Admin Users"] ? pageAccess["Admin Users"] || "Full Access" : "No Access";
    permissions["Finance"] = selectedPages["Payments"] ? pageAccess["Payments"] || "Full Access" : "No Access";
    permissions["Marketing"] = (selectedPages["Banners"] || selectedPages["Coupons"] || selectedPages["Reviews"]) ? "Full Access" : "No Access";

    const pages = availablePages.filter((p) => selectedPages[p.id]).map((p) => p.id);

    onSave({
      ...role,
      ...form,
      permissions,
      pages,
      lastUpdated: new Date().toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" }),
    });
  };

  return (
    <motion.div className="modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.form
        className="modal modal-wide"
        initial={{ y: 18, scale: .98 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: 18, scale: .98 }}
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit}
      >
        <div className="modal-head">
          <h2>Edit Role — {role.name}</h2>
          <button className="modal-close" type="button" onClick={onClose}><FiX /></button>
        </div>

        <div className="form-grid">
          <label className="form-field">
            <span>Role Name</span>
            <input value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} />
          </label>
          <label className="form-field">
            <span>Short Label</span>
            <input value={form.subtitle} onChange={(e) => setForm((f) => ({ ...f, subtitle: e.target.value }))} />
          </label>
          <label className="form-field">
            <span>Type</span>
            <input value={role.type} disabled />
          </label>
          <label className="form-field">
            <span>Status</span>
            <MasterDropdown
              options={["Active", "Inactive"]}
              value={form.status}
              onChange={(val) => setForm((f) => ({ ...f, status: val }))}
            />
          </label>
          <label className="form-field full">
            <span>Description</span>
            <textarea value={form.description} onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))} />
          </label>
        </div>

        {/* Interactive Page Assignment Component */}
        <PageAssignmentSection
          selectedPages={selectedPages}
          setSelectedPages={setSelectedPages}
          pageAccess={pageAccess}
          setPageAccess={setPageAccess}
        />

        <div style={{ display: "flex", justifyContent: "flex-end", gap: 10, marginTop: 20 }}>
          <button className="secondarybtn" type="button" onClick={onClose}>Cancel</button>
          <button className="primarybtn" type="submit"><FiEdit2 /> Save Changes</button>
        </div>
      </motion.form>
    </motion.div>
  );
}

function PermissionsModal({ role, onClose, onSave }) {
  const [permissions, setPermissions] = useState({ ...role.permissions });

  return (
    <motion.div className="modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div className="modal modal-wide" initial={{ y: 18, scale: .98 }} animate={{ y: 0, scale: 1 }} exit={{ y: 18, scale: .98 }} onClick={(e) => e.stopPropagation()}>
        <div className="modal-head">
          <h2 style={{ fontWeight: 800 }}>Edit Permissions — {role.name}</h2>
          <button className="modal-close" type="button" onClick={onClose}><FiX /></button>
        </div>
        <div style={{ margin: "10px 0", fontSize: 12.5, color: "var(--admin-muted)" }}>Configure access levels for each administrative module and page.</div>
        <div className="permission-editor" style={{ maxHeight: 360, overflowY: "auto", paddingRight: 4 }}>
          {availablePages.map((page) => {
            const currentAccess = getPermissionForPage({ permissions }, page);
            return (
              <div className="permission-editor-row" key={page.id}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span className={`page-icon-badge ${currentAccess !== "No Access" ? "active" : ""}`}>
                    <page.icon />
                  </span>
                  <div>
                    <strong style={{ fontSize: 13 }}>{page.name}</strong>
                    <div style={{ fontSize: 11, color: "var(--admin-muted)" }}>{page.description}</div>
                  </div>
                </div>
                <MasterDropdown
                  options={["Full Access", "Write Access", "Read Access", "No Access"]}
                  value={currentAccess}
                  onChange={(val) => setPermissions((current) => ({ ...current, [page.name]: val, [page.id]: val }))}
                  className="modal-field-dropdown"
                />
              </div>
            );
          })}
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end", gap: 10, marginTop: 20 }}>
          <button className="secondarybtn" type="button" onClick={onClose}>Cancel</button>
          <button className="primarybtn" type="button" onClick={() => onSave({ ...role, permissions, pages: availablePages.filter(p => getPermissionForPage({ permissions }, p) !== "No Access").map(p => p.id), lastUpdated: new Date().toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" }) })}><FiShield /> Save Permissions</button>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ConfirmStatusModal({ role, onClose, onConfirm }) {
  const deactivating = role.status === "Active";

  return (
    <motion.div className="modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div className="modal" style={{ width: "min(480px,100%)" }} initial={{ y: 18, scale: .98 }} animate={{ y: 0, scale: 1 }} exit={{ y: 18, scale: .98 }} onClick={(e) => e.stopPropagation()}>
        <div className="modal-head">
          <h2>{deactivating ? "Deactivate Role" : "Activate Role"}</h2>
          <button className="modal-close" type="button" onClick={onClose}><FiX /></button>
        </div>
        <div style={{ margin: "10px 0", fontSize: 12.5, color: "var(--admin-muted)" }}>
          {deactivating ? `Users assigned to ${role.name} may lose administrative access associated with this role.` : `This will reactivate ${role.name} and restore its configured permissions.`}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10, padding: 12, border: "1px solid var(--admin-surface-mid)", borderRadius: 8, background: "#fafbfe" }}>
          <RoleIcon role={role} />
          <div className="role-name-copy">
            <strong>{role.name}</strong>
            <span>{role.description}</span>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end", gap: 10, marginTop: 20 }}>
          <button className="secondarybtn" type="button" onClick={onClose}>Cancel</button>
          <button className="primarybtn" type="button" onClick={onConfirm} style={deactivating ? { background: "var(--admin-red)", boxShadow: "none" } : {}}>
            {deactivating ? <FiLock /> : <FiCheck />}
            {deactivating ? "Deactivate Role" : "Activate Role"}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function RolesPermissionsManagement() {
  const [desktopSidebarOpen, setDesktopSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [roles, setRoles] = useState(initialRoles);
  const [selectedId, setSelectedId] = useState(null);
  const [selectedRowIds, setSelectedRowIds] = useState([]);

  const [tab, setTab] = useState("All Roles");
  const [status, setStatus] = useState("All Statuses");
  const [type, setType] = useState("All Types");
  const [search, setSearch] = useState("");
  const [rowMenuOpenId, setRowMenuOpenId] = useState(null);

  const [createOpen, setCreateOpen] = useState(false);
  const [editRole, setEditRole] = useState(null);
  const [permissionsRole, setPermissionsRole] = useState(null);
  const [statusRole, setStatusRole] = useState(null);
  const [toast, setToast] = useState(null);

  const handleToggleMenu = () => {
    if (window.innerWidth <= 1050) {
      setMobileMenuOpen((prev) => !prev);
    } else {
      setDesktopSidebarOpen((prev) => !prev);
    }
  };

  const showToast = (message) => {
    setToast({ title: "Roles & Permissions", message });
    setTimeout(() => setToast(null), 3000);
  };

  const filtered = useMemo(() => roles.filter((role) => {
    const q = search.trim().toLowerCase();
    const searchOk = !q || role.name.toLowerCase().includes(q) || role.subtitle.toLowerCase().includes(q) || role.description.toLowerCase().includes(q);
    const tabOk = tab === "All Roles" || (tab === "System Roles" && role.type === "System") || (tab === "Custom Roles" && role.type === "Custom") || (tab === "Inactive" && role.status === "Inactive");
    const statusOk = status === "All Statuses" || role.status === status;
    const typeOk = type === "All Types" || role.type === type;
    return searchOk && tabOk && statusOk && typeOk;
  }), [roles, search, tab, status, type]);

  const selected = useMemo(() => roles.find((r) => r.id === selectedId) || null, [roles, selectedId]);

  const toggleSelectRole = (r) => {
    setSelectedId((current) => (current === r.id ? null : r.id));
  };

  const exportCSV = () => {
    const rows = [
      ["Role Name", "Type", "Users", "Description", "Status"],
      ...filtered.map((role) => [role.name, role.type, role.users, role.description, role.status])
    ];
    const csv = rows.map((row) => row.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(",")).join("\n");
    const url = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
    const a = document.createElement("a");
    a.href = url; a.download = "roles-and-permissions.csv"; a.click();
    URL.revokeObjectURL(url);
    showToast("Roles exported successfully.");
  };

  const createRole = (form) => {
    const assignedCount = form.pages ? form.pages.length : 0;
    const role = {
      id: `ROLE-${String(Date.now()).slice(-3)}`,
      name: form.name.trim(),
      subtitle: form.subtitle.trim() || "Custom administrative role",
      type: "Custom",
      users: 0,
      description: form.description.trim() || "Custom administrative role.",
      status: form.status,
      icon: "edit",
      tone: "green",
      createdOn: new Date().toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" }),
      lastUpdated: new Date().toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" }),
      createdBy: "Sujith",
      permissions: form.permissions || Object.fromEntries(permissionModules.map((name) => [name, "No Access"])),
      pages: form.pages || [],
    };
    setRoles((current) => [role, ...current]);
    setSelectedId(role.id);
    setCreateOpen(false);
    showToast(`${role.name} created with ${assignedCount} page${assignedCount === 1 ? "" : "s"} assigned.`);
  };

  const saveRole = (updated) => {
    setRoles((current) => current.map((r) => r.id === updated.id ? updated : r));
    setSelectedId(updated.id);
    setEditRole(null);
    setPermissionsRole(null);
    showToast(`${updated.name} updated successfully.`);
  };

  const duplicateRole = (role) => {
    const copy = {
      ...role,
      id: `ROLE-${String(Date.now()).slice(-3)}`,
      name: `${role.name} Copy`,
      subtitle: `Copy of ${role.name}`,
      type: "Custom",
      users: 0,
      status: "Inactive",
      createdOn: new Date().toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" }),
      lastUpdated: new Date().toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" }),
      createdBy: "Sujith",
      tone: "green",
      icon: "edit",
      permissions: { ...role.permissions },
      pages: role.pages ? [...role.pages] : availablePages.filter(p => getPermissionForPage(role, p) !== "No Access").map(p => p.id),
    };
    setRoles((current) => [copy, ...current]);
    setSelectedId(copy.id);
    showToast(`${role.name} duplicated as custom role.`);
  };

  const confirmStatusChange = () => {
    const role = statusRole;
    const nextStatus = role.status === "Active" ? "Inactive" : "Active";
    setRoles((current) => current.map((item) => item.id === role.id ? { ...item, status: nextStatus } : item));
    setStatusRole(null);
    showToast(`${role.name} ${nextStatus === "Active" ? "activated" : "deactivated"}.`);
  };

  const kpis = [
    ["Total Roles", "8", "+14.3%", "vs last 7 days", "purple", FiUsers],
    ["Active Roles", "7", "+12.5%", "vs last 7 days", "success", FiShield],
    ["Custom Roles", "5", "+25.0%", "vs last 7 days", "warning", FiShield],
    ["Users with Roles", "18", "+10.5%", "vs last 7 days", "danger", FiUserCheck],
    ["Permission Groups", "12", "0.0%", "vs last 7 days", "trust", FiShield],
  ];

  const tabs = [
    ["All Roles", 8],
    ["System Roles", 3],
    ["Custom Roles", 5],
    ["Inactive", 1],
  ];

  return (
    <div className="roles-scope">
      <style>{rolesCss}</style>

      <div className="roles-shell">
        <div className={`desktop-sidebar-wrapper ${!desktopSidebarOpen ? "is-closed" : ""}`}>
          <AdminSidebar activePage="Roles & Permissions" onClose={() => setDesktopSidebarOpen(false)} />
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <AdminSidebar activePage="Roles & Permissions" mobile onClose={() => setMobileMenuOpen(false)} />
          )}
        </AnimatePresence>

        <main className="roles-main">
          <AdminTopbar onToggleMenu={handleToggleMenu} desktopSidebarOpen={desktopSidebarOpen} />

          <div className="roles-content">
            {/* Page Header */}
            <div className="pagehead">
              <div>
                <h1>Roles &amp; Permissions Management</h1>
                <p>Manage user roles, module permissions and access controls across the system.</p>
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                <button className="secondarybtn" onClick={exportCSV}><FiDownload /> Export</button>
                <button className="primarybtn" onClick={() => setCreateOpen(true)}><FiPlus /> Create Role</button>
              </div>
            </div>

            {/* KPI Section */}
            <section className="kpi-grid">
              {kpis.map((x) => (
                <KpiCard key={x[0]} item={x} />
              ))}
            </section>

            {/* Main Grid: Full-width Table when unselected; Splits to 2 columns when a role is selected */}
            <section className={`main-grid ${selected ? "has-selection" : ""}`}>
              <div className="panel">
                <div className="tabs">
                  {tabs.map(([label, count]) => (
                    <button
                      key={label}
                      className={`tab ${tab === label ? "active" : ""}`}
                      onClick={() => setTab(label)}
                    >
                      {label}<b>{count}</b>
                    </button>
                  ))}
                </div>

                <div className="filters">
                  <label className="field" style={{ flex: "1 1 220px", maxWidth: 300 }}>
                    <FiSearch />
                    <input
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Search roles..."
                    />
                  </label>

                  <MasterDropdown
                    options={[{ value: "All Statuses", label: "All Statuses" }, "Active", "Inactive"]}
                    value={status}
                    onChange={setStatus}
                  />

                  <MasterDropdown
                    options={[{ value: "All Types", label: "All Types" }, "System", "Custom"]}
                    value={type}
                    onChange={setType}
                  />

                  <button className="filterbtn" onClick={() => showToast("Filter options applied.")}>
                    <FiFilter /> Filters
                  </button>
                </div>

                {/* Selection Bar (Matching Orders & Inventory pages) */}
                <div className="selbar">
                  <AnimatedCheckbox
                    checked={filtered.length > 0 && selectedRowIds.length === filtered.length}
                    onChange={(e) => setSelectedRowIds(e.target.checked ? filtered.map((r) => r.id) : [])}
                  />
                  <strong>{selectedRowIds.length} selected</strong>
                  <span>Select all {filtered.length} on this page</span>
                  <div className="spacer" />
                  <button
                    className="clear"
                    onClick={() => selectedRowIds.length > 0 ? setSelectedRowIds([]) : showToast("No roles selected.")}
                  >
                    Clear selection
                  </button>
                  <MasterDropdown
                    staticLabel="Bulk Actions"
                    rightAlign
                    options={[
                      {
                        label: "Activate Selected",
                        action: () => {
                          if (selectedRowIds.length === 0) showToast("Please select roles first.");
                          else {
                            setRoles((current) => current.map((r) => selectedRowIds.includes(r.id) ? { ...r, status: "Active" } : r));
                            showToast(`${selectedRowIds.length} roles activated.`);
                            setSelectedRowIds([]);
                          }
                        }
                      },
                      {
                        label: "Deactivate Selected",
                        action: () => {
                          if (selectedRowIds.length === 0) showToast("Please select roles first.");
                          else {
                            setRoles((current) => current.map((r) => selectedRowIds.includes(r.id) ? { ...r, status: "Inactive" } : r));
                            showToast(`${selectedRowIds.length} roles deactivated.`);
                            setSelectedRowIds([]);
                          }
                        }
                      },
                      {
                        label: "Export Selected",
                        action: () => {
                          if (selectedRowIds.length === 0) showToast("Please select roles first.");
                          else {
                            const selectedRoles = roles.filter((r) => selectedRowIds.includes(r.id));
                            const rows = [
                              ["Role Name", "Type", "Users", "Description", "Status"],
                              ...selectedRoles.map((r) => [r.name, r.type, r.users, r.description, r.status])
                            ];
                            const csv = rows.map((row) => row.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(",")).join("\n");
                            const url = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
                            const a = document.createElement("a");
                            a.href = url; a.download = "selected-roles.csv"; a.click();
                            URL.revokeObjectURL(url);
                            showToast(`${selectedRowIds.length} selected roles exported.`);
                            setSelectedRowIds([]);
                          }
                        }
                      }
                    ]}
                  />
                </div>

                {/* Desktop Table */}
                <div className="table-scroll">
                  <table className="roles-table">
                    <thead>
                      <tr>
                        <th style={{ width: 40 }}>
                          <AnimatedCheckbox
                            checked={filtered.length > 0 && selectedRowIds.length === filtered.length}
                            onChange={(e) => setSelectedRowIds(e.target.checked ? filtered.map((r) => r.id) : [])}
                          />
                        </th>
                        <th>Role Name</th>
                        <th>Type</th>
                        <th>Users</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filtered.map((r) => (
                        <tr key={r.id} className={selectedId === r.id ? "selected" : ""}>
                          <td onClick={(e) => e.stopPropagation()}>
                            <AnimatedCheckbox
                              checked={selectedRowIds.includes(r.id)}
                              onChange={(e) => setSelectedRowIds((curr) => e.target.checked ? [...curr, r.id] : curr.filter((id) => id !== r.id))}
                            />
                          </td>
                          <td>
                            <div className="role-name-cell" style={{ cursor: "pointer" }} onClick={() => toggleSelectRole(r)}>
                              <RoleIcon role={r} />
                              <div className="role-name-copy">
                                <strong>{r.name}</strong>
                                <span>{r.subtitle}</span>
                              </div>
                            </div>
                          </td>
                          <td><TypePill type={r.type} /></td>
                          <td><strong>{r.users}</strong></td>
                          <td className="role-description-cell">{r.description}</td>
                          <td><StatusPill status={r.status} /></td>
                          <td>
                            <div className="rowactions">
                              <button
                                className={selectedId === r.id ? "active-view" : ""}
                                title={selectedId === r.id ? "Hide Details" : "View Details"}
                                onClick={() => toggleSelectRole(r)}
                              >
                                <FiEye />
                              </button>
                              <button
                                title="Edit Role"
                                onClick={() => setEditRole(r)}
                              >
                                <FiEdit2 />
                              </button>
                              <div style={{ position: "relative" }}>
                                <button title="More Actions" onClick={() => setRowMenuOpenId((curr) => (curr === r.id ? null : r.id))}>
                                  <FiMoreVertical />
                                </button>
                                <AnimatePresence>
                                  {rowMenuOpenId === r.id && (
                                    <RowMenu
                                      role={r}
                                      onSelect={toggleSelectRole}
                                      onEdit={setEditRole}
                                      onDuplicate={duplicateRole}
                                      onToggleStatus={setStatusRole}
                                      onClose={() => setRowMenuOpenId(null)}
                                    />
                                  )}
                                </AnimatePresence>
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile Table Cards */}
                <MobileTableCards
                  items={filtered}
                  renderItem={(r) => (
                    <MobileTableCard
                      key={r.id}
                      title={r.name}
                      subtitle={r.subtitle}
                      badge={<StatusPill status={r.status} />}
                      meta={[
                        { label: "Role Type", value: r.type },
                        { label: "Assigned Users", value: `${r.users} Staff Users` },
                        { label: "Description", value: r.description },
                        { label: "Role ID", value: r.id },
                      ]}
                      actions={
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, width: "100%" }}>
                          <button
                            type="button"
                            className="mobile-table-card-action-btn"
                            onClick={() => toggleSelectRole(r)}
                          >
                            <FiEye /> {selectedId === r.id ? "Hide Details" : "View Details"}
                          </button>
                          <button
                            type="button"
                            className="mobile-table-card-action-btn"
                            onClick={() => setEditRole(r)}
                          >
                            <FiEdit2 /> Edit
                          </button>
                        </div>
                      }
                    />
                  )}
                />

                {/* Table Footer */}
                <div className="footerbar">
                  <span>Showing 1–{filtered.length} of {filtered.length} roles</span>
                  <div className="pagination">
                    <button>‹</button>
                    <button className="active">1</button>
                    <button>2</button>
                    <button>›</button>
                  </div>
                </div>
              </div>

              {/* Side Details Card (Identical to Integration & Admin User Management Pattern) */}
              <AnimatePresence>
                {selected && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <RoleDetails
                      role={selected}
                      onClose={() => setSelectedId(null)}
                      onEditPermissions={(r) => setPermissionsRole(r)}
                      onToggleStatus={(r) => setStatusRole(r)}
                      onDuplicate={duplicateRole}
                      onEdit={(r) => setEditRole(r)}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </section>

            {/* Performance & Summary Grid (Positioned Below Table) */}
            <section className="summary-grid">
              <section className="side-card">
                <div className="card-head">
                  <h3>Permission Distribution</h3>
                  <button type="button" onClick={() => showToast("Showing all permissions.")}>View all</button>
                </div>
                <MasterPieChart
                  shape="circle"
                  centerTitle="TOTAL"
                  centerValue="156"
                  data={permissionOverview.map((item) => [item.label, item.value, item.color])}
                  conicGradient="conic-gradient(#138a42 0 50%, #0056c3 50% 76.9%, #fd661d 76.9% 92.3%, #8b5cf6 92.3% 100%)"
                />
              </section>

              <section className="side-card">
                <div className="card-head"><h3>Role Usage Distribution</h3><button onClick={() => showToast("Showing usage statistics.")}>View all</button></div>
                <div className="usage-chart">
                  <div className="usage-columns">
                    {roleUsage.map((item) => (
                      <div className="usage-column" key={item.label}>
                        <span style={{ fontSize: 11, fontWeight: 800 }}>{item.value}</span>
                        <div className="usage-bar" style={{ height: `${Math.max(4, (item.value / 5) * 90)}px`, background: item.color }} />
                        <span className="usage-label">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section className="side-card">
                <div className="card-head"><h3>Recent Role Activities</h3><button onClick={() => showToast("Showing activity logs.")}>View all</button></div>
                <div className="activity-list">
                  {recentActivities.map((a) => {
                    const Icon = a.icon;
                    return (
                      <div className="activity-row" key={a.id}>
                        <span className={`activity-icon ${a.tone}`}><Icon /></span>
                        <div className="role-name-copy">
                          <strong>{a.title}</strong>
                          <span>{a.date} · By {a.by}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            </section>
          </div>
        </main>
      </div>

      {/* Create Role Modal */}
      <AnimatePresence>
        {createOpen && (
          <CreateRoleModal onClose={() => setCreateOpen(false)} onCreate={createRole} />
        )}
      </AnimatePresence>

      {/* Edit Role Modal */}
      <AnimatePresence>
        {editRole && (
          <EditRoleModal role={editRole} onClose={() => setEditRole(null)} onSave={saveRole} />
        )}
      </AnimatePresence>

      {/* Permissions Modal */}
      <AnimatePresence>
        {permissionsRole && (
          <PermissionsModal role={permissionsRole} onClose={() => setPermissionsRole(null)} onSave={saveRole} />
        )}
      </AnimatePresence>

      {/* Confirm Status Modal */}
      <AnimatePresence>
        {statusRole && (
          <ConfirmStatusModal role={statusRole} onClose={() => setStatusRole(null)} onConfirm={confirmStatusChange} />
        )}
      </AnimatePresence>

      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            className="toast"
            initial={{ opacity: 0, y: -10, scale: .98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: .98 }}
          >
            <span className="toast-icon"><FiCheckCircle /></span>
            <div>
              <strong>{toast.title}</strong>
              <div style={{ fontSize: 11, opacity: .85 }}>{toast.message}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
