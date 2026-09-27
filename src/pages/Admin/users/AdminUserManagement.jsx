import React, { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AdminSidebar from "../../../components/Admin/AdminSidebar";
import AdminTopbar from "../../../components/Admin/AdminTopbar";
import KpiCard from "../../../components/Admin/KpiCard";
import MasterDropdown from "../../../components/Admin/MasterDropdown";
import MasterDatePicker from "../../../components/Admin/MasterDatePicker";
import MasterPieChart from "../../../components/Admin/MasterPieChart";
import AnimatedCheckbox from "../../../components/Admin/AnimatedCheckbox";
import MobileTableCards, { MobileTableCard } from "../../../components/Admin/MobileTableCards";
import {
  FiActivity,
  FiBarChart2,
  FiBox,
  FiCalendar,
  FiCheck,
  FiCheckCircle,
  FiChevronLeft,
  FiChevronRight,
  FiCreditCard,
  FiDownload,
  FiEdit2,
  FiEye,
  FiFilter,
  FiHome,
  FiImage,
  FiLock,
  FiMail,
  FiMoreVertical,
  FiPackage,
  FiPlus,
  FiRotateCcw,
  FiSearch,
  FiSettings,
  FiShield,
  FiShoppingBag,
  FiStar,
  FiTag,
  FiUser,
  FiUserCheck,
  FiUserMinus,
  FiUserPlus,
  FiUsers,
  FiX,
} from "react-icons/fi";

const adminUsersCss = `
.admin-users-scope {
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

.admin-users-scope * { box-sizing: border-box; }
.admin-users-scope *::-webkit-scrollbar,
.modal::-webkit-scrollbar,
.modal *::-webkit-scrollbar {
  display: none !important;
  width: 0 !important;
  height: 0 !important;
}
.admin-users-scope *,
.modal,
.modal * {
  scrollbar-width: none !important;
  -ms-overflow-style: none !important;
}
.admin-users-shell { min-height: 100vh; display: flex; background: var(--admin-surface); color: var(--admin-text); font-family: 'Manrope', system-ui, sans-serif; }
.admin-users-main { flex: 1; min-width: 0; display: flex; flex-direction: column; }
.admin-users-content { padding: 24px 28px 36px; }

.desktop-sidebar-wrapper { width: 256px; flex-shrink: 0; transition: all .25s ease; }
.desktop-sidebar-wrapper.is-closed { display: none; }

.pagehead { display: flex; justify-content: space-between; gap: 20px; align-items: flex-end; margin-bottom: 22px; }
.pagehead h1 { margin: 0; font-size: 30px; letter-spacing: -.02em; font-weight: 800; line-height: 1.2; color: var(--admin-text); }
.pagehead p { margin: 6px 0 0; font-size: 13.5px; color: var(--admin-muted); font-weight: 500; }

.primarybtn, .secondarybtn {
  height: 42px;
  border-radius: 10px;
  padding: 0 18px;
  display: inline-flex !important;
  flex-direction: row !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 8px !important;
  font-size: 13px;
  font-weight: 700;
  white-space: nowrap !important;
  cursor: pointer;
  transition: all .18s ease;
  flex-shrink: 0 !important;
}
.primarybtn svg, .secondarybtn svg {
  flex-shrink: 0 !important;
  font-size: 16px !important;
  display: inline-block !important;
}
.primarybtn { border: 0; background: var(--admin-orange); color: #fff; box-shadow: 0 4px 10px rgba(253,102,29,.25); }
.primarybtn:hover { background: #e25510; }
.secondarybtn { border: 1px solid var(--admin-outline); background: #fff; color: var(--admin-text); box-shadow: var(--admin-shadow); }
.secondarybtn:hover { background: var(--admin-surface-low); border-color: var(--admin-primary-2); color: var(--admin-primary-2); }

@media (max-width: 1050px) {
  .admin-users-scope .desktop-sidebar-wrapper { display: none !important; }
}

@media (max-width: 768px) {
  .admin-users-scope { max-width: 100vw; overflow-x: clip; }
  .admin-users-content { padding: 14px 12px 28px !important; max-width: 100vw; overflow-x: clip; box-sizing: border-box; }
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
  .admin-users-scope .kpi-grid {
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
  .filters .master-date-picker {
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
  .role-layout {
    flex-direction: row !important;
    align-items: center !important;
    justify-content: space-between !important;
    gap: 14px !important;
    padding: 6px 0 !important;
  }
  .role-donut {
    width: 116px !important;
    height: 116px !important;
    flex: 0 0 116px !important;
  }
  .role-donut::after {
    inset: 18px !important;
  }
  .role-legend {
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
}

@media (max-width: 480px) {
  .pagehead > div:last-child { width: 100% !important; display: grid !important; grid-template-columns: 1fr 1fr !important; gap: 8px !important; }
  .primarybtn, .secondarybtn { flex: 1 !important; justify-content: center !important; height: 38px !important; }
}

/* Master KPI Grid Spacing matching Orders, Inventory, Banners, and Reviews pages */
.admin-users-scope .kpi-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(150px, 1fr));
  gap: 14px;
  margin-bottom: 20px;
}
@media (max-width: 1250px) {
  .admin-users-scope .kpi-grid { grid-template-columns: repeat(3, 1fr); }
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
.users-table { width: 100%; min-width: 820px; border-collapse: collapse; }
.users-table th { height: 44px; background: #f3f3fe; color: #191b23; text-align: left; font-size: 12px; font-weight: 800; border-bottom: 1px solid #ededf8; text-transform: uppercase; letter-spacing: .04em; padding: 0 18px; white-space: nowrap; }
.users-table td { height: 60px; border-bottom: 1px solid #ededf8; font-size: 12.5px; font-weight: 500; color: #191b23; padding: 0 18px; white-space: nowrap; vertical-align: middle; }
.users-table td strong { color: #191b23; font-weight: 500; font-size: 13px; }
.users-table td div { font-weight: 500; }
.users-table td span { font-weight: 500; }
.users-table th:first-child, .users-table td:first-child { width: 48px; padding-left: 18px; padding-right: 8px; text-align: center; border-top-left-radius: 10px; }
.users-table th:last-child, .users-table td:last-child { width: 130px; padding: 0 14px; text-align: center; border-top-right-radius: 10px; }
.users-table tr { transition: background 0.18s ease; }
.users-table tr.selected { background: #f0f5ff !important; }

.user-cell { display: flex; align-items: center; gap: 10px; }
.user-avatar { width: 34px; height: 34px; border-radius: 50%; overflow: hidden; background: #f5f6f9; border: 1px solid var(--admin-outline); flex-shrink: 0; display: grid; place-items: center; font-size: 12px; font-weight: 800; color: var(--admin-primary-2); }
.user-avatar img { width: 100%; height: 100%; object-fit: cover; }
.user-copy strong { display: block; color: #191b23; font-size: 13px; font-weight: 500; }
.user-copy span { display: block; margin-top: 1px; color: var(--admin-muted); font-size: 11px; font-weight: 500; }

.role-pill { display: inline-flex; align-items: center; justify-content: center; height: 22px; padding: 0 10px; border-radius: 6px; font-size: 11px; font-weight: 800; white-space: nowrap; }
.role-superadmin { background: #efe8ff; color: #7a4cdb; }
.role-admin { background: #e3edff; color: #0056c3; }
.role-manager { background: #fff0d8; color: #d66c00; }
.role-editor { background: #efe8ff; color: #7952d7; }
.role-support { background: #def6e5; color: #138a42; }
.role-viewer { background: #f0f2f7; color: #566178; }

.status-pill { display: inline-flex; align-items: center; gap: 5px; height: 24px; padding: 0 10px; border-radius: 999px; font-size: 11px; font-weight: 800; white-space: nowrap; }
.status-pill.active { background: #def6e5; color: #138a42; }
.status-pill.inactive { background: #ffe8eb; color: #D32F2F; }
.status-pill.invited { background: #e3edff; color: #0056c3; }
.status-dot { width: 6px; height: 6px; border-radius: 50%; background: currentColor; }

.rowactions { display: flex; align-items: center; justify-content: center; gap: 6px; }
.rowactions button { width: 34px; height: 34px; border-radius: 8px; border: 1px solid var(--admin-outline); background: #ffffff; color: var(--admin-text); display: grid; place-items: center; font-size: 15px; cursor: pointer; transition: all .18s ease; }
.rowactions button:hover { background: #f3f3fe; border-color: var(--admin-primary-2); color: var(--admin-primary-2); }
.rowactions button.active-view { background: var(--admin-primary-2); color: #ffffff; border-color: var(--admin-primary-2); }

.row-menu { position: absolute; right: 0; top: 36px; width: 160px; z-index: 40; padding: 6px; border: 1px solid var(--admin-outline); border-radius: 8px; background: #fff; box-shadow: var(--admin-shadow); }
.row-menu button { width: 100%; height: 32px; padding: 0 10px; border: 0; border-radius: 6px; background: transparent; text-align: left; font-size: 12px; font-weight: 600; color: var(--admin-text); cursor: pointer; }
.row-menu button:hover { background: #f5f7fb; color: var(--admin-primary-2); }

.footerbar { display: flex; align-items: center; justify-content: space-between; padding: 12px 16px; border-top: 1px solid #ededf8; font-size: 12px; font-weight: 600; color: var(--admin-text); }
.footerbar .pagination { display: flex; gap: 4px; }
.footerbar .pagination button { min-width: 32px; height: 32px; padding: 0 6px; border: 1px solid var(--admin-outline); background: #ffffff; border-radius: 6px; font-size: 12px; font-weight: 700; cursor: pointer; }
.footerbar .pagination button.active { background: var(--admin-primary-2); color: #ffffff; border-color: var(--admin-primary-2); }

/* Mobile Cards */
.mobile-user-list { display: none; padding: 12px; flex-direction: column; gap: 10px; }
@media (max-width: 980px) {
  .table-scroll { display: none; }
  .mobile-user-list { display: flex; }
}
.mobile-user-card { border: 1px solid var(--admin-outline); border-radius: 10px; padding: 12px; background: #ffffff; display: flex; flex-direction: column; gap: 10px; }
.mobile-user-head { display: flex; align-items: center; justify-content: space-between; gap: 10px; }
.mobile-user-actions { display: flex; gap: 8px; }
.mobile-user-actions button { flex: 1; height: 36px; border: 1px solid var(--admin-outline); background: #fff; border-radius: 8px; font-weight: 700; font-size: 12px; display: flex; align-items: center; justify-content: center; gap: 6px; cursor: pointer; }

/* Right Column Details Card (Matching Integrations Page Pattern) */
.user-details { padding: 18px; background: #fff; border: 1px solid var(--admin-outline); border-radius: 12px; box-shadow: var(--admin-shadow); }
.detail-head { display: flex; align-items: center; justify-content: space-between; gap: 10px; margin-bottom: 14px; }
.detail-head h3 { margin: 0; font-size: 15px; font-weight: 800; color: var(--admin-text); }
.detail-profile { display: flex; align-items: flex-start; gap: 14px; margin-bottom: 16px; }
.detail-avatar { width: 56px; height: 56px; border-radius: 50%; overflow: hidden; background: #f5b828; position: relative; border: 1px solid var(--admin-outline); flex-shrink: 0; }
.detail-avatar img { width: 100%; height: 100%; object-fit: cover; }
.online-dot { position: absolute; right: 2px; bottom: 2px; width: 12px; height: 12px; border: 2px solid #fff; border-radius: 50%; background: #138a42; }
.detail-meta { margin-top: 6px; display: flex; align-items: center; gap: 6px; color: var(--admin-muted); font-size: 11.5px; }

.permission-chips { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 8px; }
.permission-chip { height: 24px; padding: 0 10px; border-radius: 6px; background: #f0f2f7; color: var(--admin-text); display: inline-flex; align-items: center; font-size: 11px; font-weight: 700; }

/* 3-Column Summary Cards Grid (Below Table) */
.summary-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-bottom: 16px; }
@media (max-width: 1200px) { .summary-grid { grid-template-columns: 1fr; } }

.side-card { padding: 16px; background: #fff; border: 1px solid var(--admin-outline); border-radius: 12px; box-shadow: var(--admin-shadow); }
.card-head { display: flex; align-items: center; justify-content: space-between; gap: 10px; margin-bottom: 12px; }
.card-head h3 { margin: 0; font-size: 14px; font-weight: 800; color: var(--admin-text); }
.card-head button { border: 0; background: transparent; color: var(--admin-primary-2); font-size: 12px; font-weight: 700; cursor: pointer; }

.role-layout { display: flex; align-items: center; gap: 16px; margin-top: 10px; }
.role-donut { width: 120px; height: 120px; flex: 0 0 auto; border-radius: 50%; background: conic-gradient(#7d4ff2 0 16.7%, #4389e8 16.7% 44.4%, #ff7a00 44.4% 61.1%, #5acb87 61.1% 77.8%, #ef6b8d 77.8% 88.9%, #f2b84e 88.9% 100%); position: relative; }
.role-donut::after { content: ""; position: absolute; inset: 24px; border-radius: 50%; background: #fff; }
.donut-center { position: absolute; inset: 0; z-index: 1; display: grid; place-content: center; text-align: center; }
.donut-center strong { font-size: 17px; font-weight: 800; color: var(--admin-text); }
.donut-center span { margin-top: 1px; color: var(--admin-muted); font-size: 10px; }
.role-legend { display: grid; gap: 8px; flex: 1; }
.role-legend-row { display: grid; grid-template-columns: 8px 1fr auto; gap: 8px; align-items: center; font-size: 11.5px; }
.role-legend-row i { width: 8px; height: 8px; border-radius: 50%; }

.activity-list { display: grid; }
.activity-row { display: grid; grid-template-columns: 32px 1fr auto; gap: 10px; align-items: center; padding: 10px 0; border-bottom: 1px solid var(--admin-surface-mid); }
.activity-row:last-child { border-bottom: 0; }
.activity-icon { width: 32px; height: 32px; border-radius: 50%; display: grid; place-items: center; font-size: 14px; }
.activity-icon.green { background: #def6e5; color: #138a42; }
.activity-icon.blue { background: #e3edff; color: #0056c3; }
.activity-icon.orange { background: #fff0d8; color: #d66c00; }
.activity-copy strong { display: block; font-size: 12px; font-weight: 700; color: var(--admin-text); }
.activity-copy span { display: block; margin-top: 2px; color: var(--admin-muted); font-size: 10.5px; }

.modal-overlay { position: fixed; inset: 0; display: grid; place-items: center; padding: 16px; z-index: 110; background: rgba(16, 23, 47, 0.45); backdrop-filter: blur(2px); }
.modal { width: min(680px, 100%); max-height: 92vh; overflow-y: auto; padding: 22px 24px; border-radius: 12px; background: #fff; box-shadow: 0 22px 65px rgba(16,24,40,.18); }
.modal-head { display: flex; align-items: center; justify-content: space-between; padding-bottom: 12px; border-bottom: 1px solid var(--admin-surface-mid); }
.modal-close { width: 34px; height: 34px; border: 1px solid #dfe4ef; border-radius: 8px; background: #f8faff; display: grid; place-items: center; cursor: pointer; color: #667085; transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1); }
.modal-close:hover, .modal-close:active, .modal-close:focus { background: #eff6ff; border-color: #93c5fd; color: #0056c3; transform: scale(1.06); }
.form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 14px; }
.form-field { display: flex; flex-direction: column; gap: 6px; }
.form-field.full { grid-column: 1 / 3; }
.form-field span { font-size: 12px; font-weight: 700; color: var(--admin-text); }
.form-field input, .form-field select { width: 100%; height: 40px; padding: 0 12px; border: 1px solid var(--admin-outline); border-radius: 8px; background: #fff; outline: 0; font-size: 12.5px; font-family: inherit; }

/* User Search in Modal */
.user-search-wrap { position: relative; width: 100%; margin-top: 6px; }
.user-search-input {
  width: 100%;
  height: 42px;
  border: 1px solid #c2c6d5;
  border-radius: 9px;
  background: #ffffff;
  padding: 0 38px 0 38px;
  font-size: 13px;
  font-weight: 600;
  color: #191b23;
  outline: none;
  transition: border-color 0.18s ease, box-shadow 0.18s ease;
}
.user-search-input:focus {
  border-color: #0056c3;
  box-shadow: 0 0 0 3px rgba(0, 86, 195, 0.12);
}
.user-search-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #64748b;
  font-size: 16px;
  pointer-events: none;
}
.user-search-dropdown {
  position: absolute;
  top: 48px;
  left: 0;
  right: 0;
  max-height: 240px;
  overflow-y: auto;
  background: #ffffff;
  border: 1px solid #c2c6d5;
  border-radius: 10px;
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.12);
  z-index: 120;
  padding: 6px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.user-search-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid transparent;
  background: #ffffff;
  cursor: pointer;
  transition: all 0.15s ease;
}
.user-search-item:hover {
  background: #f8faff;
  border-color: #dfe4ef;
}
.candidate-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #e7efff;
  color: #0056c3;
  font-weight: 800;
  font-size: 11.5px;
  display: grid;
  place-items: center;
  border: 1px solid #cadcff;
  flex-shrink: 0;
}
.candidate-info { flex: 1; min-width: 0; }
.candidate-info strong { display: block; font-size: 12.5px; font-weight: 700; color: #10172f; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.candidate-info span { display: block; font-size: 11px; color: #64748b; margin-top: 1px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.candidate-tag { font-size: 10.5px; font-weight: 700; background: #f3f4f6; color: #475569; padding: 2px 8px; border-radius: 5px; flex-shrink: 0; }

.selected-user-card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 14px;
  border: 1px solid #d4f3e1;
  background: #f3fbf6;
  border-radius: 10px;
  margin-top: 6px;
}
.selected-user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #0056c3;
  color: #ffffff;
  font-weight: 800;
  font-size: 13px;
  display: grid;
  place-items: center;
  flex-shrink: 0;
  box-shadow: 0 2px 8px rgba(0, 86, 195, 0.25);
}
.selected-user-copy { flex: 1; min-width: 0; }
.selected-user-copy strong { display: block; font-size: 13.5px; font-weight: 800; color: #10172f; }
.selected-user-copy span { display: block; font-size: 11.5px; color: #475569; margin-top: 1px; }
.selected-user-change-btn {
  border: 1px solid #c2c6d5;
  background: #ffffff;
  color: #0056c3;
  font-size: 11.5px;
  font-weight: 700;
  padding: 5px 12px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.18s ease;
}
.selected-user-change-btn:hover {
  background: #eff6ff;
  border-color: #0056c3;
}

/* Page Access Checkbox Cards */
.page-access-section { margin-top: 18px; }
.page-access-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 10px;
}
.page-access-header h4 {
  margin: 0;
  font-size: 13px;
  font-weight: 800;
  color: #10172f;
  display: flex;
  align-items: center;
  gap: 8px;
}
.page-count-badge {
  font-size: 11px;
  font-weight: 700;
  background: #e7efff;
  color: #0056c3;
  padding: 2px 8px;
  border-radius: 999px;
}
.page-action-links { display: flex; align-items: center; gap: 8px; }
.page-action-btn {
  border: 0;
  background: transparent;
  color: #0056c3;
  font-size: 11.5px;
  font-weight: 700;
  cursor: pointer;
  padding: 0;
}
.page-action-btn:hover { text-decoration: underline; }

.page-cards-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  max-height: 240px;
  overflow-y: auto;
  padding-right: 4px;
}
@media (max-width: 580px) {
  .page-cards-grid { grid-template-columns: 1fr; }
}
.page-card-option {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border: 1px solid #ededf8;
  border-radius: 9px;
  background: #ffffff;
  cursor: pointer;
  transition: all 0.18s ease;
  user-select: none;
}
.page-card-option:hover {
  background: #f8faff;
  border-color: #c2c6d5;
}
.page-card-option.is-selected {
  background: #f0f6ff;
  border-color: #93c5fd;
}
.page-icon-badge {
  width: 30px;
  height: 30px;
  border-radius: 7px;
  background: #f1f5f9;
  color: #0056c3;
  display: grid;
  place-items: center;
  font-size: 14px;
  flex-shrink: 0;
}
.page-card-option.is-selected .page-icon-badge {
  background: #dbeafe;
  color: #0056c3;
}
.page-info-wrap { flex: 1; min-width: 0; }
.page-title { display: block; font-size: 12px; font-weight: 700; color: #10172f; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.page-category-tag { display: block; font-size: 10px; color: #64748b; font-weight: 500; margin-top: 1px; }

.permission-selector { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-top: 10px; }
.permission-option { min-height: 38px; padding: 8px; border: 1px solid var(--admin-outline); border-radius: 8px; display: flex; align-items: center; gap: 8px; font-size: 12px; }
.permission-option input { accent-color: var(--admin-orange); }

.modal-primary { height: 40px; padding: 0 18px; border: 0; border-radius: 8px; background: var(--admin-orange); color: #fff; font-size: 13px; font-weight: 700; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; gap: 8px; white-space: nowrap; flex-direction: row; transition: background .18s; }
.modal-primary:hover { background: #e25510; }
.modal-secondary { height: 40px; padding: 0 18px; border: 1px solid var(--admin-outline); border-radius: 8px; background: #ffffff; color: var(--admin-text); font-size: 13px; font-weight: 700; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; gap: 8px; white-space: nowrap; flex-direction: row; transition: all .18s; }
.modal-secondary:hover { background: var(--admin-surface-low); }

/* Toast */
.toast { position: fixed; right: 24px; bottom: 24px; z-index: 140; min-width: 280px; padding: 12px 16px; border-radius: 10px; background: #10172f; color: #ffffff; box-shadow: 0 18px 45px rgba(16,24,40,.24); display: flex; align-items: center; gap: 10px; font-size: 12.5px; font-weight: 600; }
.toast-icon { width: 24px; height: 24px; border-radius: 50%; background: #16a34a; color: #fff; display: grid; place-items: center; font-size: 13px; flex-shrink: 0; }
`;

const avatars = {
  sujith: "SU",
  priya: "PS",
  arjun: "AM",
  sneha: "SI",
  karan: "KV",
  ananya: "AR",
  rohit: "RS",
  meera: "MJ",
};

export const systemPages = [
  { id: "Dashboard", name: "Dashboard", category: "Overview", icon: FiHome },
  { id: "Orders", name: "Orders", category: "Sales", icon: FiShoppingBag },
  { id: "Returns", name: "Returns", category: "Sales", icon: FiRotateCcw },
  { id: "Products", name: "Products", category: "Catalog", icon: FiPackage },
  { id: "Inventory", name: "Inventory", category: "Catalog", icon: FiBox },
  { id: "Customers", name: "Customers", category: "Audience", icon: FiUsers },
  { id: "Segments", name: "Segments", category: "Audience", icon: FiUser },
  { id: "Banners", name: "Banners", category: "Marketing", icon: FiImage },
  { id: "Coupons", name: "Coupons", category: "Marketing", icon: FiTag },
  { id: "Reviews", name: "Reviews", category: "Marketing", icon: FiStar },
  { id: "Payments", name: "Payments", category: "Finance", icon: FiCreditCard },
  { id: "Analytics", name: "Analytics", category: "Finance", icon: FiBarChart2 },
  { id: "Admin Users", name: "Admin Users", category: "Administration", icon: FiUsers },
  { id: "Roles & Permissions", name: "Roles & Permissions", category: "Administration", icon: FiShield },
  { id: "Settings", name: "Settings", category: "Settings", icon: FiSettings },
  { id: "Integrations", name: "Integrations", category: "Settings", icon: FiPackage },
];

export const defaultRolePages = {
  "Super Admin": [
    "Dashboard", "Orders", "Returns", "Products", "Inventory",
    "Customers", "Segments", "Banners", "Coupons", "Reviews",
    "Payments", "Analytics", "Admin Users", "Roles & Permissions",
    "Settings", "Integrations"
  ],
  "Admin": [
    "Dashboard", "Orders", "Returns", "Products", "Inventory",
    "Customers", "Segments", "Banners", "Coupons", "Reviews",
    "Payments", "Analytics", "Admin Users", "Integrations"
  ],
  "Manager": [
    "Dashboard", "Orders", "Returns", "Products", "Inventory",
    "Customers", "Segments", "Reviews", "Analytics"
  ],
  "Editor": [
    "Dashboard", "Products", "Banners", "Coupons", "Reviews"
  ],
  "Support": [
    "Dashboard", "Orders", "Returns", "Customers", "Reviews"
  ],
  "Viewer": [
    "Dashboard", "Analytics"
  ],
};

export const candidateUsers = [
  { id: "CAND-001", name: "Rohan Sharma", email: "rohan.s@amihive.com", avatar: "RS", department: "Engineering", title: "Tech Lead" },
  { id: "CAND-002", name: "Vikram Patel", email: "vikram.p@amihive.com", avatar: "VP", department: "Operations", title: "Logistics Manager" },
  { id: "CAND-003", name: "Divya Kapoor", email: "divya.k@amihive.com", avatar: "DK", department: "Marketing", title: "Growth Specialist" },
  { id: "CAND-004", name: "Aditya Sen", email: "aditya.s@amihive.com", avatar: "AS", department: "Finance", title: "Accounts Manager" },
  { id: "CAND-005", name: "Kavita Rao", email: "kavita.r@amihive.com", avatar: "KR", department: "Customer Support", title: "Support Lead" },
  { id: "CAND-006", name: "Meenakshi Sundaram", email: "meenakshi.s@amihive.com", avatar: "MS", department: "Product", title: "Catalog Specialist" },
  { id: "CAND-007", name: "Harish Reddy", email: "harish.r@amihive.com", avatar: "HR", department: "Sales", title: "Category Manager" },
  { id: "CAND-008", name: "Pooja Verma", email: "pooja.v@amihive.com", avatar: "PV", department: "Marketing", title: "Brand Strategist" },
  { id: "CAND-009", name: "Naveen Kumar", email: "naveen.k@amihive.com", avatar: "NK", department: "Operations", title: "Inventory Associate" },
  { id: "CAND-010", name: "Deepak Choudhary", email: "deepak.c@amihive.com", avatar: "DC", department: "Security", title: "Systems Auditor" },
];

const allPermissions = systemPages.map((p) => p.id);

const initialUsers = [
  { id: "USR-001", name: "Sujith", email: "sujith@amihive.com", avatar: "sujith", role: "Super Admin", status: "Active", lastLoginDate: "May 18, 2025", lastLoginTime: "10:24 AM", joinedDate: "Jan 10, 2025", joinedTime: "09:15 AM", permissions: allPermissions },
  { id: "USR-002", name: "Priya Sharma", email: "priya@amihive.com", avatar: "priya", role: "Admin", status: "Active", lastLoginDate: "May 18, 2025", lastLoginTime: "09:45 AM", joinedDate: "Feb 12, 2025", joinedTime: "02:30 PM", permissions: ["Dashboard", "Orders", "Products", "Customers", "Marketing", "Reports", "Returns", "Inventory", "Reviews"] },
  { id: "USR-003", name: "Arjun Mehta", email: "arjun@amihive.com", avatar: "arjun", role: "Manager", status: "Active", lastLoginDate: "May 17, 2025", lastLoginTime: "08:15 PM", joinedDate: "Feb 20, 2025", joinedTime: "11:20 AM", permissions: ["Dashboard", "Orders", "Products", "Customers", "Reports", "Inventory", "Reviews"] },
  { id: "USR-004", name: "Sneha Iyer", email: "sneha@amihive.com", avatar: "sneha", role: "Editor", status: "Inactive", lastLoginDate: "May 10, 2025", lastLoginTime: "06:20 PM", joinedDate: "Mar 05, 2025", joinedTime: "10:00 AM", permissions: ["Dashboard", "Products", "Marketing", "Banners", "Coupons"] },
  { id: "USR-005", name: "Karan Verma", email: "karan@amihive.com", avatar: "karan", role: "Support", status: "Active", lastLoginDate: "May 18, 2025", lastLoginTime: "06:40 PM", joinedDate: "Mar 18, 2025", joinedTime: "03:45 PM", permissions: ["Dashboard", "Orders", "Customers", "Returns", "Reviews"] },
  { id: "USR-006", name: "Ananya Rao", email: "ananya@amihive.com", avatar: "ananya", role: "Editor", status: "Active", lastLoginDate: "May 17, 2025", lastLoginTime: "05:20 PM", joinedDate: "Apr 02, 2025", joinedTime: "01:30 PM", permissions: ["Dashboard", "Products", "Marketing", "Banners", "Coupons"] },
  { id: "USR-007", name: "Rohit Singh", email: "rohit@amihive.com", avatar: "rohit", role: "Viewer", status: "Invited", lastLoginDate: "—", lastLoginTime: "", joinedDate: "May 18, 2025", joinedTime: "10:00 AM", permissions: ["Dashboard", "Reports"] },
  { id: "USR-008", name: "Meera Joshi", email: "meera@amihive.com", avatar: "meera", role: "Support", status: "Inactive", lastLoginDate: "May 05, 2025", lastLoginTime: "11:10 AM", joinedDate: "Apr 10, 2025", joinedTime: "09:40 AM", permissions: ["Dashboard", "Orders", "Customers", "Returns", "Reviews"] },
];

const roleDistribution = [
  { label: "Super Admin", value: "3 (16.7%)", color: "#7d4ff2" },
  { label: "Admin", value: "5 (27.8%)", color: "#4389e8" },
  { label: "Manager", value: "3 (16.7%)", color: "#ff7a00" },
  { label: "Editor", value: "3 (16.7%)", color: "#5acb87" },
  { label: "Support", value: "2 (11.1%)", color: "#ef6b8d" },
  { label: "Viewer", value: "2 (11.1%)", color: "#f2b84e" },
];

const recentActivity = [
  { id: 1, title: "Priya Sharma updated product permissions", time: "May 18, 2025 09:45 AM", tone: "green", icon: FiSettings },
  { id: 2, title: "Arjun Mehta logged in", time: "May 18, 2025 08:15 PM", tone: "blue", icon: FiUserCheck },
  { id: 3, title: "Sneha Iyer was deactivated", time: "May 17, 2025 06:20 PM", tone: "orange", icon: FiUserMinus },
];

function roleClass(role) {
  return `role-${role.toLowerCase().replaceAll(" ", "")}`;
}

function RolePill({ role }) {
  return <span className={`role-pill ${roleClass(role)}`}>{role}</span>;
}

function StatusPill({ status }) {
  return <span className={`status-pill ${status.toLowerCase()}`}><i className="status-dot" />{status}</span>;
}

function RowMenu({ user, onSelect, onEdit, onToggleStatus, onResend, onClose }) {
  return (
    <motion.div className="row-menu" initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }}>
      <button type="button" onClick={() => { onSelect(user); onClose(); }}>Toggle user details</button>
      <button type="button" onClick={() => { onEdit(user); onClose(); }}>Edit user</button>
      {user.status === "Invited" && <button type="button" onClick={() => { onResend(user); onClose(); }}>Resend invitation</button>}
      {user.status !== "Invited" && <button type="button" onClick={() => { onToggleStatus(user); onClose(); }}>{user.status === "Active" ? "Deactivate user" : "Activate user"}</button>}
    </motion.div>
  );
}

function UserDetails({ user, onClose, onEditPermissions, onToggleStatus, onResetPassword, onEdit, isModal = false }) {
  const content = (
    <>
      <div className="detail-head">
        <h3>User Details</h3>
        <button className="modal-close" type="button" onClick={onClose}><FiX /></button>
      </div>

      <div className="detail-profile">
        <div className="detail-avatar">
          <span style={{ display: "grid", placeItems: "center", width: "100%", height: "100%", fontWeight: 800, color: "#fff" }}>
            {avatars[user.avatar] || "US"}
          </span>
          {user.status === "Active" && <span className="online-dot" />}
        </div>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
            <strong>{user.name}</strong>
            <RolePill role={user.role} />
          </div>
          <span style={{ display: "block", marginTop: 4, color: "var(--admin-muted)", fontSize: 11.5 }}>{user.email}</span>
          <div className="detail-meta"><FiCalendar /> Joined on {user.joinedDate}</div>
          <div className="detail-meta"><FiActivity /> Last login: {user.lastLoginDate} {user.lastLoginTime}</div>
        </div>
      </div>

      <div style={{ paddingTop: 14, borderTop: "1px solid var(--admin-surface-mid)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
          <h4 style={{ margin: 0, fontSize: 13, fontWeight: 800 }}>Role & Permissions</h4>
          <button style={{ border: 0, background: "transparent", color: "var(--admin-primary-2)", fontSize: 12, fontWeight: 700, cursor: "pointer" }} onClick={() => onEditPermissions(user)}>Edit</button>
        </div>
        <div style={{ marginBottom: 10, fontSize: 12 }}><span style={{ color: "var(--admin-muted)" }}>Role: </span><strong style={{ color: "var(--admin-primary-2)" }}>{user.role}</strong></div>
        <div style={{ fontSize: 12, fontWeight: 700, color: "var(--admin-text)" }}>Permissions ({user.permissions.length})</div>
        <div className="permission-chips">
          {user.permissions.map((p) => (
            <span key={p} className="permission-chip">{p}</span>
          ))}
        </div>
      </div>

      <div style={{ marginTop: 16, paddingTop: 14, borderTop: "1px solid var(--admin-surface-mid)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
          <h4 style={{ margin: 0, fontSize: 13, fontWeight: 800 }}>Account Access</h4>
          <StatusPill status={user.status} />
        </div>
        <div style={{ display: "flex", gap: 8, marginTop: 14, flexWrap: "wrap" }}>
          <button className="secondarybtn" type="button" style={{ flex: 1, justifyContent: "center" }} onClick={() => onEdit(user)}><FiEdit2 /> Edit</button>
          {user.status !== "Invited" && (
            <button className="secondarybtn" type="button" style={{ flex: 1, justifyContent: "center", color: user.status === "Active" ? "var(--admin-red)" : "var(--admin-green)" }} onClick={() => onToggleStatus(user)}>
              {user.status === "Active" ? <FiUserMinus /> : <FiUserCheck />}
              {user.status === "Active" ? "Deactivate" : "Activate"}
            </button>
          )}
          <button className="primarybtn" type="button" style={{ flex: 1, justifyContent: "center" }} onClick={() => onResetPassword(user)}><FiLock /> Reset</button>
        </div>
      </div>
    </>
  );

  if (isModal) {
    return content;
  }

  return (
    <aside className="card user-details">
      {content}
    </aside>
  );
}

function AddUserModal({ onClose, onAdd }) {
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [role, setRole] = useState("Admin");
  const [status, setStatus] = useState("Active");
  const [selectedPages, setSelectedPages] = useState(defaultRolePages["Admin"] || []);

  const searchRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // When role changes, automatically update the default pages for that role
  const handleRoleChange = (newRole) => {
    setRole(newRole);
    if (defaultRolePages[newRole]) {
      setSelectedPages([...defaultRolePages[newRole]]);
    }
  };

  // Toggle individual page checkbox
  const togglePage = (pageId) => {
    setSelectedPages((prev) =>
      prev.includes(pageId) ? prev.filter((p) => p !== pageId) : [...prev, pageId]
    );
  };

  const handleSelectAll = () => {
    setSelectedPages(systemPages.map((p) => p.id));
  };

  const handleClearAll = () => {
    setSelectedPages([]);
  };

  const handleResetDefaults = () => {
    setSelectedPages([...(defaultRolePages[role] || [])]);
  };

  const filteredCandidates = useMemo(() => {
    if (!searchQuery.trim()) return candidateUsers;
    const q = searchQuery.toLowerCase();
    return candidateUsers.filter(
      (u) =>
        u.name.toLowerCase().includes(q) ||
        u.email.toLowerCase().includes(q) ||
        u.department.toLowerCase().includes(q) ||
        u.title.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const handleSelectCandidate = (candidate) => {
    setSelectedUser(candidate);
    setSearchQuery("");
    setDropdownOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let name = "";
    let email = "";
    let avatar = "sujith";

    if (selectedUser) {
      name = selectedUser.name;
      email = selectedUser.email;
      avatar = selectedUser.avatar.toLowerCase();
    } else if (searchQuery.trim().includes("@")) {
      email = searchQuery.trim();
      name = searchQuery.split("@")[0].replace(/[._]/g, " ");
      name = name.charAt(0).toUpperCase() + name.slice(1);
      avatar = name.slice(0, 2).toUpperCase();
    } else if (searchQuery.trim()) {
      name = searchQuery.trim();
      email = `${searchQuery.toLowerCase().replace(/\s+/g, ".")}@amihive.com`;
      avatar = name.slice(0, 2).toUpperCase();
    } else {
      return;
    }

    onAdd({
      name,
      email,
      avatar,
      role,
      status,
      permissions: selectedPages,
    });
  };

  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.form
        className="modal"
        style={{ maxWidth: 680, width: "95%", padding: "24px 26px" }}
        initial={{ y: 16, scale: 0.96 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: 16, scale: 0.96 }}
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit}
      >
        <div className="modal-head" style={{ paddingBottom: 12 }}>
          <div>
            <h2 style={{ fontSize: 19, fontWeight: 800, color: "#10172f", margin: 0 }}>Add Admin User</h2>
            <p style={{ fontSize: 12.5, color: "#667085", margin: "4px 0 0", fontWeight: 500 }}>
              Search for a user, assign administrative role, and customize module page permissions
            </p>
          </div>
          <button className="modal-close" type="button" onClick={onClose} title="Close" aria-label="Close">
            <FiX size={18} />
          </button>
        </div>

        {/* Step 1: Search for User */}
        <div style={{ marginTop: 16 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
            <span style={{ fontSize: 12.5, fontWeight: 700, color: "#10172f" }}>Search for User</span>
            {selectedUser && (
              <span style={{ fontSize: 11, color: "#16a34a", fontWeight: 700, display: "flex", alignItems: "center", gap: 4 }}>
                <FiCheckCircle size={13} /> User Selected
              </span>
            )}
          </div>

          {!selectedUser ? (
            <div className="user-search-wrap" ref={searchRef}>
              <FiSearch className="user-search-icon" />
              <input
                className="user-search-input"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setDropdownOpen(true);
                }}
                onFocus={() => setDropdownOpen(true)}
                placeholder="Search user by name, email, or department..."
                autoFocus
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", border: 0, background: "transparent", color: "#64748b", cursor: "pointer", display: "grid", placeItems: "center" }}
                >
                  <FiX size={16} />
                </button>
              )}

              {/* Autocomplete Dropdown List */}
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    className="user-search-dropdown"
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                  >
                    <div style={{ padding: "4px 8px 6px", fontSize: 11, fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: ".04em" }}>
                      Registered Staff & Accounts ({filteredCandidates.length})
                    </div>
                    {filteredCandidates.length > 0 ? (
                      filteredCandidates.map((candidate) => (
                        <div
                          key={candidate.id}
                          className="user-search-item"
                          onClick={() => handleSelectCandidate(candidate)}
                        >
                          <div className="candidate-avatar">{candidate.avatar}</div>
                          <div className="candidate-info">
                            <strong>{candidate.name}</strong>
                            <span>{candidate.email}</span>
                          </div>
                          <span className="candidate-tag">{candidate.department}</span>
                        </div>
                      ))
                    ) : (
                      <div style={{ padding: "12px 14px", textAlign: "center", color: "#64748b", fontSize: 12 }}>
                        No direct match found. You can enter details directly below.
                      </div>
                    )}

                    {/* Manual Fallback Option if typing custom name/email */}
                    {searchQuery.trim() && (
                      <div
                        className="user-search-item"
                        style={{ borderTop: "1px solid #ededf8", marginTop: 4, background: "#faf8ff" }}
                        onClick={() => {
                          const isEmail = searchQuery.includes("@");
                          const candidateName = isEmail ? searchQuery.split("@")[0] : searchQuery;
                          const candidateEmail = isEmail ? searchQuery : `${searchQuery.toLowerCase().replace(/\s+/g, ".")}@amihive.com`;
                          setSelectedUser({
                            name: candidateName.charAt(0).toUpperCase() + candidateName.slice(1),
                            email: candidateEmail,
                            avatar: candidateName.slice(0, 2).toUpperCase(),
                            department: "Invited",
                            title: "Staff Member"
                          });
                          setDropdownOpen(false);
                        }}
                      >
                        <div className="candidate-avatar" style={{ background: "#fef3c7", color: "#d97706", borderColor: "#fde68a" }}>+</div>
                        <div className="candidate-info">
                          <strong>Invite "{searchQuery}"</strong>
                          <span>Add as a new administrative account</span>
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <div className="selected-user-card">
              <div className="selected-user-avatar">
                {selectedUser.avatar || selectedUser.name.slice(0, 2).toUpperCase()}
              </div>
              <div className="selected-user-copy">
                <strong>{selectedUser.name}</strong>
                <span>{selectedUser.email} {selectedUser.department ? `· ${selectedUser.department}` : ""}</span>
              </div>
              <button
                type="button"
                className="selected-user-change-btn"
                onClick={() => {
                  setSelectedUser(null);
                  setSearchQuery("");
                  setDropdownOpen(true);
                }}
              >
                Change User
              </button>
            </div>
          )}
        </div>

        {/* Step 2: Role Selection & Status */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 14 }}>
          <div className="form-field">
            <span style={{ fontSize: 12, fontWeight: 700, color: "#10172f" }}>Admin Access Role</span>
            <MasterDropdown
              options={["Super Admin", "Admin", "Manager", "Editor", "Support", "Viewer"]}
              value={role}
              onChange={handleRoleChange}
            />
          </div>
          <div className="form-field">
            <span style={{ fontSize: 12, fontWeight: 700, color: "#10172f" }}>Account Status</span>
            <MasterDropdown
              options={["Active", "Invited", "Inactive"]}
              value={status}
              onChange={setStatus}
            />
          </div>
        </div>

        {/* Step 3: Checkbox Option to Select or Unselect Default Pages */}
        <div className="page-access-section">
          <div className="page-access-header">
            <h4>
              Assigned Page Permissions
              <span className="page-count-badge">
                {selectedPages.length} of {systemPages.length} Selected
              </span>
            </h4>
            <div className="page-action-links">
              <button type="button" className="page-action-btn" onClick={handleSelectAll}>Select All</button>
              <span style={{ color: "#c2c6d5" }}>•</span>
              <button type="button" className="page-action-btn" onClick={handleClearAll}>Unselect All</button>
              <span style={{ color: "#c2c6d5" }}>•</span>
              <button type="button" className="page-action-btn" onClick={handleResetDefaults}>Reset ({role})</button>
            </div>
          </div>

          <div className="page-cards-grid">
            {systemPages.map((page) => {
              const Icon = page.icon;
              const isChecked = selectedPages.includes(page.id);
              return (
                <div
                  key={page.id}
                  className={`page-card-option ${isChecked ? "is-selected" : ""}`}
                  onClick={() => togglePage(page.id)}
                >
                  <AnimatedCheckbox
                    checked={isChecked}
                    onChange={() => togglePage(page.id)}
                  />
                  <div className="page-icon-badge">
                    <Icon />
                  </div>
                  <div className="page-info-wrap">
                    <span className="page-title">{page.name}</span>
                    <span className="page-category-tag">{page.category}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Modal Actions */}
        <div style={{ display: "flex", justifyContent: "flex-end", gap: 10, marginTop: 22, paddingTop: 14, borderTop: "1px solid #ededf8" }}>
          <button className="modal-secondary" type="button" onClick={onClose}>
            Cancel
          </button>
          <button
            className="modal-primary"
            type="submit"
            disabled={!selectedUser && !searchQuery.trim()}
            style={{ opacity: (!selectedUser && !searchQuery.trim()) ? 0.6 : 1, display: "inline-flex", alignItems: "center", gap: 8 }}
          >
            <FiUserPlus /> Add Admin User
          </button>
        </div>
      </motion.form>
    </motion.div>
  );
}

export default function AdminUserManagement() {
  const [desktopSidebarOpen, setDesktopSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= 1050 : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1050);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [users, setUsers] = useState(initialUsers);
  const [selectedId, setSelectedId] = useState(null);
  const [selectedRowIds, setSelectedRowIds] = useState([]);

  const [tab, setTab] = useState("All Users");
  const [role, setRole] = useState("All Roles");
  const [search, setSearch] = useState("");
  const [dateFilter, setDateFilter] = useState("Last 7 Days");
  const [rowMenuOpenId, setRowMenuOpenId] = useState(null);

  const [addOpen, setAddOpen] = useState(false);
  const [editUser, setEditUser] = useState(null);
  const [permissionsUser, setPermissionsUser] = useState(null);
  const [toast, setToast] = useState(null);

  const handleToggleMenu = () => {
    if (window.innerWidth <= 1050) {
      setMobileMenuOpen((prev) => !prev);
    } else {
      setDesktopSidebarOpen((prev) => !prev);
    }
  };

  const showToast = (message) => {
    setToast({ title: "User Management", message });
    setTimeout(() => setToast(null), 3000);
  };

  const filtered = useMemo(() => users.filter((user) => {
    const q = search.trim().toLowerCase();
    const searchOk = !q || user.name.toLowerCase().includes(q) || user.email.toLowerCase().includes(q) || user.role.toLowerCase().includes(q);
    const tabOk = tab === "All Users" || user.status === tab;
    const roleOk = role === "All Roles" || user.role === role;
    return searchOk && tabOk && roleOk;
  }), [users, search, tab, role]);

  const selected = useMemo(() => users.find((u) => u.id === selectedId) || null, [users, selectedId]);

  const toggleSelectUser = (u) => {
    setSelectedId((current) => (current === u.id ? null : u.id));
  };

  const exportCSV = () => {
    const rows = [
      ["Name", "Email", "Role", "Status", "Last Login", "Joined On"],
      ...filtered.map((u) => [u.name, u.email, u.role, u.status, `${u.lastLoginDate} ${u.lastLoginTime}`.trim(), `${u.joinedDate} ${u.joinedTime}`])
    ];
    const csv = rows.map((row) => row.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(",")).join("\n");
    const url = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
    const a = document.createElement("a");
    a.href = url; a.download = "admin-users.csv"; a.click();
    URL.revokeObjectURL(url);
    showToast("Admin users exported successfully.");
  };

  const addUser = (form) => {
    const newUser = {
      id: `USR-${String(Date.now()).slice(-3)}`,
      name: form.name.trim(),
      email: form.email.trim(),
      avatar: form.avatar || "sujith",
      role: form.role,
      status: form.status,
      lastLoginDate: "—",
      lastLoginTime: "",
      joinedDate: new Date().toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" }),
      joinedTime: new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
      permissions: (form.permissions && form.permissions.length > 0) ? form.permissions : (defaultRolePages[form.role] || ["Dashboard"]),
    };
    setUsers((current) => [newUser, ...current]);
    setSelectedId(newUser.id);
    setAddOpen(false);
    showToast(`${newUser.name} added as ${newUser.role} with ${newUser.permissions.length} page permissions.`);
  };

  const saveUser = (updated) => {
    setUsers((current) => current.map((u) => u.id === updated.id ? updated : u));
    setSelectedId(updated.id);
    setEditUser(null);
    setPermissionsUser(null);
    showToast(`${updated.name} updated successfully.`);
  };

  const toggleStatus = (user) => {
    const nextStatus = user.status === "Active" ? "Inactive" : "Active";
    setUsers((current) => current.map((u) => u.id === user.id ? { ...u, status: nextStatus } : u));
    showToast(`${user.name} is now ${nextStatus}.`);
  };

  const resetPassword = (user) => {
    showToast(`Password reset link sent to ${user.email}.`);
  };

  const resendInvitation = (user) => {
    showToast(`Invitation resent to ${user.email}.`);
  };

  const kpis = [
    ["Total Admin Users", "18", "+12.5%", "vs last 7 days", "purple", FiUsers],
    ["Active Users", "16", "+14.3%", "vs last 7 days", "success", FiShield],
    ["New Users", "2", "+100%", "vs last 7 days", "warning", FiUserPlus],
    ["Inactive Users", "2", "-33.3%", "vs last 7 days", "danger", FiUserMinus],
    ["Super Admins", "3", "0.0%", "vs last 7 days", "trust", FiShield],
  ];

  const tabs = [
    ["All Users", 18],
    ["Active", 16],
    ["Inactive", 2],
    ["Invited", 3],
  ];

  return (
    <div className="admin-users-scope">
      <style>{adminUsersCss}</style>

      <div className="admin-users-shell">
        <div className={`desktop-sidebar-wrapper ${!desktopSidebarOpen ? "is-closed" : ""}`}>
          <AdminSidebar activePage="Admin Users" onClose={() => setDesktopSidebarOpen(false)} />
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <AdminSidebar activePage="Admin Users" mobile onClose={() => setMobileMenuOpen(false)} />
          )}
        </AnimatePresence>

        <main className="admin-users-main">
          <AdminTopbar onToggleMenu={handleToggleMenu} desktopSidebarOpen={desktopSidebarOpen} />

          <div className="admin-users-content">
            {/* Page Header */}
            <div className="pagehead">
              <div>
                <h1>Admin User Management</h1>
                <p>Manage admin users, assigned roles, module permissions, and account access.</p>
              </div>
              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <button className="secondarybtn" onClick={exportCSV}><FiDownload /> Export</button>
                <button className="primarybtn" onClick={() => setAddOpen(true)}><FiUserPlus /> Add Admin User</button>
              </div>
            </div>

            {/* KPI Section */}
            <section className="kpi-grid">
              {kpis.map((x) => (
                <KpiCard key={x[0]} item={x} />
              ))}
            </section>

            {/* Main Grid: Full-width Table when unselected; Splits to 2 columns when a user is selected */}
            <section className={`main-grid ${selected && !isMobile ? "has-selection" : ""}`}>
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
                      placeholder="Search admin users..."
                    />
                  </label>

                  <MasterDropdown
                    options={[{ value: "All Roles", label: "All Roles" }, "Super Admin", "Admin", "Manager", "Editor", "Support", "Viewer"]}
                    value={role}
                    onChange={setRole}
                  />

                  <MasterDatePicker value={dateFilter} onChange={setDateFilter} rightAlign />

                  <button className="filterbtn" onClick={() => showToast("Filter options applied.")}>
                    <FiFilter /> Filters
                  </button>
                </div>

                {/* Selection Bar (Matching Orders & Inventory pages) */}
                <div className="selbar">
                  <AnimatedCheckbox
                    checked={filtered.length > 0 && selectedRowIds.length === filtered.length}
                    onChange={(e) => setSelectedRowIds(e.target.checked ? filtered.map((u) => u.id) : [])}
                  />
                  <strong>{selectedRowIds.length} selected</strong>
                  <span>Select all {filtered.length} on this page</span>
                  <div className="spacer" />
                  <button
                    className="clear"
                    onClick={() => selectedRowIds.length > 0 ? setSelectedRowIds([]) : showToast("No users selected.")}
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
                          if (selectedRowIds.length === 0) showToast("Please select users first.");
                          else {
                            setUsers((current) => current.map((u) => selectedRowIds.includes(u.id) ? { ...u, status: "Active" } : u));
                            showToast(`${selectedRowIds.length} users activated.`);
                            setSelectedRowIds([]);
                          }
                        }
                      },
                      {
                        label: "Deactivate Selected",
                        action: () => {
                          if (selectedRowIds.length === 0) showToast("Please select users first.");
                          else {
                            setUsers((current) => current.map((u) => selectedRowIds.includes(u.id) ? { ...u, status: "Inactive" } : u));
                            showToast(`${selectedRowIds.length} users deactivated.`);
                            setSelectedRowIds([]);
                          }
                        }
                      },
                      {
                        label: "Reset Passwords",
                        action: () => {
                          if (selectedRowIds.length === 0) showToast("Please select users first.");
                          else {
                            showToast(`Password reset links sent to ${selectedRowIds.length} users.`);
                            setSelectedRowIds([]);
                          }
                        }
                      },
                      {
                        label: "Export Selected",
                        action: () => {
                          if (selectedRowIds.length === 0) showToast("Please select users first.");
                          else {
                            const selectedUsers = users.filter((u) => selectedRowIds.includes(u.id));
                            const rows = [
                              ["Name", "Email", "Role", "Status", "Last Login", "Joined On"],
                              ...selectedUsers.map((u) => [u.name, u.email, u.role, u.status, `${u.lastLoginDate} ${u.lastLoginTime}`.trim(), `${u.joinedDate} ${u.joinedTime}`])
                            ];
                            const csv = rows.map((row) => row.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(",")).join("\n");
                            const url = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
                            const a = document.createElement("a");
                            a.href = url; a.download = "selected-admin-users.csv"; a.click();
                            URL.revokeObjectURL(url);
                            showToast(`${selectedRowIds.length} selected users exported.`);
                            setSelectedRowIds([]);
                          }
                        }
                      }
                    ]}
                  />
                </div>

                {/* Desktop Table */}
                <div className="table-scroll">
                  <table className="users-table">
                    <thead>
                      <tr>
                        <th style={{ width: 40 }}>
                          <AnimatedCheckbox
                            checked={filtered.length > 0 && selectedRowIds.length === filtered.length}
                            onChange={(e) => setSelectedRowIds(e.target.checked ? filtered.map((u) => u.id) : [])}
                          />
                        </th>
                        <th>User</th>
                        <th>Role</th>
                        <th>Status</th>
                        <th>Last Login</th>
                        <th>Joined On</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filtered.map((u) => (
                        <tr key={u.id} className={selectedId === u.id ? "selected" : ""}>
                          <td style={{ width: 40 }} onClick={(e) => e.stopPropagation()}>
                            <AnimatedCheckbox
                              checked={selectedRowIds.includes(u.id)}
                              onChange={(e) => setSelectedRowIds((curr) => e.target.checked ? [...curr, u.id] : curr.filter((id) => id !== u.id))}
                            />
                          </td>
                          <td>
                            <div className="user-cell" style={{ cursor: "pointer" }} onClick={() => toggleSelectUser(u)}>
                              <div className="user-avatar">{avatars[u.avatar] || "US"}</div>
                              <div className="user-copy">
                                <strong>{u.name}</strong>
                                <span>{u.email}</span>
                              </div>
                            </div>
                          </td>
                          <td><RolePill role={u.role} /></td>
                          <td><StatusPill status={u.status} /></td>
                          <td>
                            <strong>{u.lastLoginDate}</strong>
                            <div style={{ fontSize: 11, color: "var(--admin-muted)" }}>{u.lastLoginTime}</div>
                          </td>
                          <td>
                            <strong>{u.joinedDate}</strong>
                            <div style={{ fontSize: 11, color: "var(--admin-muted)" }}>{u.joinedTime}</div>
                          </td>
                          <td>
                            <div className="rowactions">
                              <button
                                className={selectedId === u.id ? "active-view" : ""}
                                title={selectedId === u.id ? "Hide Details" : "View Details"}
                                onClick={() => toggleSelectUser(u)}
                              >
                                <FiEye />
                              </button>
                              <button
                                title="Edit User"
                                onClick={() => setEditUser(u)}
                              >
                                <FiEdit2 />
                              </button>
                              <div style={{ position: "relative" }}>
                                <button title="More Actions" onClick={() => setRowMenuOpenId((curr) => (curr === u.id ? null : u.id))}>
                                  <FiMoreVertical />
                                </button>
                                <AnimatePresence>
                                  {rowMenuOpenId === u.id && (
                                    <RowMenu
                                      user={u}
                                      onSelect={toggleSelectUser}
                                      onEdit={setEditUser}
                                      onToggleStatus={toggleStatus}
                                      onResend={resendInvitation}
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
                  renderItem={(u) => (
                    <MobileTableCard
                      key={u.id}
                      title={u.name}
                      subtitle={u.email}
                      badge={<StatusPill status={u.status} />}
                      meta={[
                        { label: "Role", value: u.role },
                        { label: "User ID", value: u.id },
                        { label: "Last Login", value: `${u.lastLoginDate} ${u.lastLoginTime}` },
                        { label: "Joined", value: `${u.joinedDate} ${u.joinedTime}` },
                      ]}
                      actions={
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, width: "100%" }}>
                          <button
                            type="button"
                            className="mobile-table-card-action-btn"
                            onClick={() => toggleSelectUser(u)}
                          >
                            <FiEye /> {selectedId === u.id ? "Hide Details" : "View Details"}
                          </button>
                          <button
                            type="button"
                            className="mobile-table-card-action-btn"
                            onClick={() => setEditUser(u)}
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
                  <span>Showing 1–{filtered.length} of {filtered.length} users</span>
                  <div className="pagination">
                    <button>‹</button>
                    <button className="active">1</button>
                    <button>2</button>
                    <button>›</button>
                  </div>
                </div>
              </div>

              {/* Side Details Card (Desktop) */}
              <AnimatePresence>
                {selected && !isMobile && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <UserDetails
                      user={selected}
                      onClose={() => setSelectedId(null)}
                      onEditPermissions={(u) => setPermissionsUser(u)}
                      onToggleStatus={toggleStatus}
                      onResetPassword={resetPassword}
                      onEdit={(u) => setEditUser(u)}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </section>

            {/* Performance & Summary Grid (Positioned Below Table) */}
            <section className="summary-grid">
              <section className="side-card">
                <div className="card-head">
                  <h3>User Role Distribution</h3>
                  <button type="button" onClick={() => showToast("Showing all user roles.")}>View all</button>
                </div>
                <MasterPieChart
                  shape="circle"
                  centerTitle="TOTAL"
                  centerValue="18"
                  data={roleDistribution.map((item) => [item.label, item.value, item.color])}
                  conicGradient="conic-gradient(#7d4ff2 0 16.7%, #4389e8 16.7% 44.4%, #ff7a00 44.4% 61.1%, #5acb87 61.1% 77.8%, #ef6b8d 77.8% 88.9%, #f2b84e 88.9% 100%)"
                />
              </section>

              <section className="side-card">
                <div className="card-head"><h3>Recent Activity</h3><button onClick={() => showToast("Showing all activity.")}>View all</button></div>
                <div className="activity-list">
                  {recentActivity.map((a) => {
                    const Icon = a.icon;
                    return (
                      <div className="activity-row" key={a.id}>
                        <span className={`activity-icon ${a.tone}`}><Icon /></span>
                        <div className="activity-copy">
                          <strong>{a.title}</strong>
                          <span>{a.time}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              <section className="side-card">
                <div className="card-head"><h3>Security Overview</h3></div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 10 }}>
                  <div style={{ padding: 10, border: "1px solid var(--admin-surface-mid)", borderRadius: 8, background: "#f8f9fc" }}>
                    <div style={{ fontSize: 11, color: "var(--admin-muted)" }}>2-Factor Authentication</div>
                    <strong style={{ display: "block", marginTop: 2, fontSize: 13, color: "var(--admin-green)" }}>Enforced (100%)</strong>
                  </div>
                  <div style={{ padding: 10, border: "1px solid var(--admin-surface-mid)", borderRadius: 8, background: "#f8f9fc" }}>
                    <div style={{ fontSize: 11, color: "var(--admin-muted)" }}>Password Expiry Policy</div>
                    <strong style={{ display: "block", marginTop: 2, fontSize: 13, color: "var(--admin-primary-2)" }}>Every 90 Days</strong>
                  </div>
                </div>
              </section>
            </section>
          </div>
        </main>
      </div>

      {/* Add User Modal */}
      <AnimatePresence>
        {addOpen && (
          <AddUserModal onClose={() => setAddOpen(false)} onAdd={addUser} />
        )}
      </AnimatePresence>

      {/* Edit User Modal */}
      <AnimatePresence>
        {editUser && (
          <EditUserModal user={editUser} onClose={() => setEditUser(null)} onSave={saveUser} />
        )}
      </AnimatePresence>

      {/* Permissions Modal */}
      <AnimatePresence>
        {permissionsUser && (
          <PermissionsModal user={permissionsUser} onClose={() => setPermissionsUser(null)} onSave={saveUser} />
        )}
      </AnimatePresence>

      {/* Mobile User Details Modal Popup */}
      <AnimatePresence>
        {selected && isMobile && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              className="modal user-details-modal"
              style={{ width: "min(520px, 100%)", maxHeight: "88vh", overflowY: "auto" }}
              initial={{ y: 20, scale: 0.98 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 20, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <UserDetails
                user={selected}
                onClose={() => setSelectedId(null)}
                onEditPermissions={(u) => {
                  setSelectedId(null);
                  setPermissionsUser(u);
                }}
                onToggleStatus={toggleStatus}
                onResetPassword={resetPassword}
                onEdit={(u) => {
                  setSelectedId(null);
                  setEditUser(u);
                }}
                isModal
              />
            </motion.div>
          </motion.div>
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
