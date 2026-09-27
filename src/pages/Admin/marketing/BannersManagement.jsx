import React, { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AdminSidebar from "../../../components/Admin/AdminSidebar";
import AdminTopbar from "../../../components/Admin/AdminTopbar";
import KpiCard from "../../../components/Admin/KpiCard";
import MasterDropdown from "../../../components/Admin/MasterDropdown";
import MasterDatePicker from "../../../components/Admin/MasterDatePicker";
import MasterPieChart from "../../../components/Admin/MasterPieChart";
import ActiveBannersCard from "../../../components/Admin/ActiveBannersCard";
import DashboardListCard from "../../../components/Admin/DashboardListCard";
import IntegrationDetailsDrawer from "../../../components/Admin/IntegrationDetailsDrawer";
import MobileTableCards, { MobileTableCard } from "../../../components/Admin/MobileTableCards";
import {
  FiAlertCircle,
  FiAlertTriangle,
  FiArchive,
  FiBarChart2,
  FiCalendar,
  FiCheckCircle,
  FiChevronLeft,
  FiChevronRight,
  FiClock,
  FiDownload,
  FiEdit2,
  FiEye,
  FiFileText,
  FiFilter,
  FiImage,
  FiLayout,
  FiMonitor,
  FiMoreVertical,
  FiPlus,
  FiRefreshCw,
  FiSave,
  FiSearch,
  FiSmartphone,
  FiTag,
  FiTarget,
  FiTrash2,
  FiTrendingUp,
  FiX,
} from "react-icons/fi";

const bannersCss = `
.banner-scope {
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

.banner-scope * { box-sizing: border-box; }
.banner-scope *::-webkit-scrollbar,
.modal::-webkit-scrollbar,
.modal *::-webkit-scrollbar,
.dashboard-list-scroll::-webkit-scrollbar,
.active-banners-slider-wrapper::-webkit-scrollbar {
  display: none !important;
  width: 0 !important;
  height: 0 !important;
}
.banner-scope *,
.modal,
.modal *,
.dashboard-list-scroll,
.active-banners-slider-wrapper {
  scrollbar-width: none !important;
  -ms-overflow-style: none !important;
}
.banner-shell { min-height: 100vh; display: flex; background: var(--admin-surface); color: var(--admin-text); font-family: 'Manrope', system-ui, sans-serif; }
.banner-main { flex: 1; min-width: 0; display: flex; flex-direction: column; }
.banner-content { padding: 24px 28px 36px; }

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

.banner-scope .kpi-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 12px;
  margin-bottom: 18px;
}
@media (max-width: 1100px) {
  .banner-scope .kpi-grid {
    grid-template-columns: repeat(3, 1fr) !important;
  }
}

@media (max-width: 1050px) {
  .banner-scope .desktop-sidebar-wrapper { display: none !important; }
}

@media (max-width: 768px) {
  .banner-scope { max-width: 100vw; overflow-x: clip; }
  .banner-content { padding: 14px 12px 28px !important; max-width: 100vw; overflow-x: clip; box-sizing: border-box; }
  .pagehead {
    flex-direction: column !important;
    align-items: stretch !important;
    gap: 10px !important;
    margin-bottom: 16px !important;
  }
  .pagehead h1 { font-size: 20px !important; }
  .pagehead p { font-size: 12px !important; line-height: 1.4 !important; }
  .pagehead > div:last-child {
    display: grid !important;
    grid-template-columns: 1fr 1fr !important;
    gap: 8px !important;
    width: 100% !important;
  }
  .primarybtn, .secondarybtn {
    height: 38px !important;
    padding: 0 10px !important;
    font-size: 12px !important;
    justify-content: center !important;
    width: 100% !important;
  }
  .banner-scope .kpi-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    gap: 8px !important;
    margin-bottom: 14px !important;
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
    flex: 1 1 100% !important;
  }
  .filters .master-dropdown {
    width: 100% !important;
  }
  .filters .filterbtn {
    width: 100% !important;
    justify-content: center !important;
  }
  .table-scroll { display: none !important; }
  .mobile-table-cards-wrap { display: flex !important; }
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
  .bottom-grid {
    grid-template-columns: 1fr !important;
    gap: 12px !important;
  }
  .donut-wrap {
    flex-direction: row !important;
    align-items: center !important;
    justify-content: space-between !important;
    gap: 14px !important;
    padding: 6px 0 !important;
  }
  .modal-overlay {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    padding: 12px 10px !important;
  }
  .modal {
    width: calc(100vw - 20px) !important;
    max-width: 100% !important;
    padding: 18px 14px !important;
    margin: auto !important;
    max-height: 88vh !important;
    overflow-y: auto !important;
    box-sizing: border-box !important;
  }
  .modal-responsive {
    width: calc(100vw - 20px) !important;
    max-width: 100vw !important;
    padding: 16px 12px !important;
    max-height: 86vh !important;
    border-radius: 12px !important;
    margin: auto !important;
  }
  .form-grid {
    grid-template-columns: 1fr !important;
    gap: 12px !important;
    margin-top: 14px !important;
  }
  .form-field.full {
    grid-column: auto !important;
  }
  .modal-actions {
    flex-direction: column-reverse !important;
    gap: 8px !important;
    width: 100% !important;
    margin-top: 16px !important;
  }
  .modal-actions button,
  .modal-actions .modal-primary,
  .modal-actions .modal-secondary {
    width: 100% !important;
    justify-content: center !important;
  }
  .banner-date-range-grid {
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }
  .view-all-modal {
    width: calc(100vw - 20px) !important;
    max-width: 100% !important;
    padding: 16px 14px !important;
    max-height: 88vh !important;
    margin: auto !important;
  }
  .modal-stat-grid {
    grid-template-columns: 1fr !important;
    gap: 8px !important;
  }
  .placement-metric-strip {
    grid-template-columns: repeat(2, 1fr) !important;
    gap: 8px 12px !important;
  }
  .modal-preview-grid {
    grid-template-columns: 1fr !important;
    gap: 10px !important;
  }
  .modal-list-card {
    flex-wrap: wrap !important;
    gap: 10px !important;
  }
  .modal-list-card > div:last-child {
    width: 100% !important;
    text-align: left !important;
    display: flex !important;
    align-items: center !important;
    justify-content: space-between !important;
    padding-top: 6px !important;
    border-top: 1px dashed #f1f5f9 !important;
    margin-top: 2px !important;
  }
  .view-all-modal-footer {
    flex-direction: column-reverse !important;
    align-items: stretch !important;
    gap: 10px !important;
  }
  .view-all-modal-footer .footer-actions {
    flex-direction: column-reverse !important;
    gap: 8px !important;
    width: 100% !important;
  }
  .view-all-modal-footer .footer-actions button {
    width: 100% !important;
    justify-content: center !important;
  }
  .view-all-modal-footer .footer-note {
    text-align: center !important;
    justify-content: center !important;
  }
}
@media (max-width: 440px) {
  .banner-date-range-grid {
    grid-template-columns: 1fr !important;
    gap: 8px !important;
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

/* Panel Section & Grids Below Table */
.panel-section { margin-bottom: 16px; }
.summary-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-bottom: 16px; }
@media (max-width: 1200px) {
  .summary-grid { grid-template-columns: 1fr; }
  .bottom-grid { grid-template-columns: 1fr; }
}

/* Master Table Styles */
.table-card { background: #ffffff; border: 1px solid var(--admin-outline); border-radius: 12px; box-shadow: var(--admin-shadow); overflow: hidden; }
.table-scroll { width: 100%; overflow-x: auto; }
.banner-table { width: 100%; min-width: 860px; border-collapse: collapse; border-spacing: 0; }
.banner-table th, .banner-table td { box-sizing: border-box; }
.banner-table thead tr { height: 44px; }
.banner-table tbody tr { height: 60px; box-sizing: border-box; }
.banner-table th { height: 44px; background: #f3f3fe; color: #191b23; text-align: left; font-size: 12px; font-weight: 800; border-bottom: 1px solid #ededf8; text-transform: uppercase; letter-spacing: .04em; padding: 0 18px; white-space: nowrap; vertical-align: middle; }
.banner-table td { height: 60px; border-bottom: 1px solid #ededf8; font-size: 12.5px; font-weight: 500; color: #191b23; padding: 0 18px; white-space: nowrap; vertical-align: middle; }
.banner-table th:first-child, .banner-table td:first-child { width: 48px; padding-left: 18px; padding-right: 8px; text-align: center; border-top-left-radius: 10px; }
.banner-table th:last-child, .banner-table td:last-child { width: 130px; padding: 0 14px; text-align: center; border-top-right-radius: 10px; }

.banner-cell { display: flex; align-items: center; gap: 10px; height: 100%; }
.banner-thumb { width: 72px; height: 40px; flex: 0 0 auto; border-radius: 6px; overflow: hidden; border: 1px solid var(--admin-outline); background: #f6f7fa; }
.banner-thumb img { width: 100%; height: 100%; object-fit: cover; }
.banner-name { display: flex; flex-direction: column; justify-content: center; line-height: 1.25; }
.banner-name strong { display: block; color: var(--admin-text); font-size: 13px; font-weight: 700; margin: 0; padding: 0; line-height: 1.2; }
.banner-name small { display: block; margin-top: 2px; color: var(--admin-muted); font-size: 11px; margin: 0; padding: 0; line-height: 1.2; }

.placement-cell { display: flex; align-items: center; gap: 6px; }
.placement-cell svg { font-size: 14px; color: var(--admin-primary-2); flex-shrink: 0; }

.ctr.good { color: var(--admin-green); font-weight: 800; }
.ctr.warning { color: #d77a00; font-weight: 800; }
.ctr.bad { color: var(--admin-red); font-weight: 800; }

.status-pill { display: inline-flex; align-items: center; justify-content: center; height: 24px; padding: 0 12px; border-radius: 999px; font-size: 11px; font-weight: 800; white-space: nowrap; }
.status-pill.active { background: #def6e5; color: #138a42; }
.status-pill.scheduled { background: #fff0d8; color: #d66c00; }
.status-pill.draft { background: #efe8ff; color: #7a4cdb; }
.status-pill.archived { background: #edf0f5; color: #667085; }

.rowactions { display: flex; align-items: center; justify-content: center; gap: 6px; }
.rowactions button { width: 34px; height: 34px; border-radius: 8px; border: 1px solid var(--admin-outline); background: #ffffff; color: var(--admin-text); display: grid; place-items: center; font-size: 15px; cursor: pointer; transition: all .18s ease; }
.rowactions button:hover { background: #f3f3fe; border-color: var(--admin-primary-2); color: var(--admin-primary-2); }

.row-menu { position: absolute; right: 0; top: 38px; width: 140px; z-index: 9999 !important; padding: 6px; border: 1px solid #dfe4ef; border-radius: 8px; background: #ffffff; box-shadow: 0 12px 32px rgba(25, 27, 35, 0.18) !important; }
.row-menu button { width: 100%; height: 32px; padding: 0 10px; border: 0; border-radius: 6px; background: transparent; text-align: left; font-size: 12px; font-weight: 600; color: var(--admin-text); cursor: pointer; transition: all .15s ease; }
.row-menu button:hover { background: #f3f5fa; color: var(--admin-primary-2); }

.footerbar { display: flex; align-items: center; justify-content: space-between; padding: 12px 16px; border-top: 1px solid #ededf8; font-size: 12px; font-weight: 600; color: var(--admin-text); }
.footerbar .pagination { display: flex; gap: 4px; }
.footerbar .pagination button { min-width: 32px; height: 32px; padding: 0 6px; border: 1px solid var(--admin-outline); background: #ffffff; border-radius: 6px; font-size: 12px; font-weight: 700; cursor: pointer; }
.footerbar .pagination button.active { background: var(--admin-primary-2); color: #ffffff; border-color: var(--admin-primary-2); }

/* Right Column Cards */
.right-column { display: grid; gap: 14px; align-content: start; }
.side-card { padding: 16px; background: #fff; border: 1px solid var(--admin-outline); border-radius: 12px; box-shadow: var(--admin-shadow); }
.card-head { display: flex; align-items: center; justify-content: space-between; gap: 10px; margin-bottom: 12px; }
.card-head h3,
.dashboard-list-heading h3,
.active-banners-heading h3 {
  margin: 0;
  font-size: 14px;
  font-weight: 800;
  color: #10172f;
  font-family: 'Manrope', system-ui, sans-serif;
}
.card-head button,
.dashboard-list-action-btn,
.active-banners-action-btn {
  border: 0;
  background: transparent;
  color: #0056c3 !important;
  font-size: 11.5px;
  font-weight: 800;
  cursor: pointer;
  padding: 0;
  transition: color 0.18s ease;
}
.card-head button:hover,
.dashboard-list-action-btn:hover,
.active-banners-action-btn:hover {
  color: #003882 !important;
  text-decoration: underline;
}

.summary-grid .side-card {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.donut-wrap {
  display: flex;
  align-items: center;
  gap: 16px;
  margin: auto 0;
  padding: 10px 0;
  flex: 1;
}
.donut {
  width: 116px;
  height: 116px;
  border-radius: 50%;
  background: conic-gradient(#7c4dff 0 38%, #fd661d 38% 60%, #0056c3 60% 78%, #16a34a 78% 90%, #10172f 90% 100%);
  position: relative;
  flex: 0 0 116px;
  display: grid;
  place-items: center;
}
.donut:after {
  content: "";
  position: absolute;
  inset: 18px;
  border-radius: 50%;
  background: #ffffff;
}
.donut-center {
  position: relative;
  z-index: 2;
  text-align: center;
}
.donut-center span {
  display: block;
  font-size: 8px;
  font-weight: 800;
  color: #10172f;
  text-transform: uppercase;
  letter-spacing: .03em;
  white-space: nowrap;
}
.donut-center strong {
  display: block;
  font-size: 13px;
  font-weight: 800;
  color: #10172f;
  margin-top: 1px;
}
.legend {
  display: grid;
  gap: 8px;
  flex: 1;
  min-width: 0;
}
.legend-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  font-size: 12px;
}
.legend-row-left {
  display: flex;
  align-items: center;
  gap: 8px;
}
.legend-row i {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.legend-row span {
  color: #10172f;
  font-weight: 700;
  font-size: 12px;
  white-space: nowrap;
}
.legend-row strong {
  color: #10172f;
  font-weight: 600;
  font-size: 11.5px;
  text-align: right;
  white-space: nowrap;
}

.performing-list {
  display: grid;
  gap: 8px;
  margin-top: 6px;
}
.performing-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  border: 1px solid #ededf8;
  border-radius: 9px;
  background: #ffffff;
  transition: all .18s ease;
  cursor: pointer;
}
.performing-item:hover {
  background: #f8faff;
  border-color: #c2c6d5;
  box-shadow: 0 2px 6px rgba(0,0,0,.04);
}
.performing-thumb {
  width: 44px;
  height: 28px;
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid #dfe4ef;
  background: #f7f8fa;
  flex-shrink: 0;
}
.performing-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.performing-info {
  flex: 1;
  min-width: 0;
}
.performing-info strong {
  display: block;
  font-size: 12px;
  font-weight: 700;
  color: #10172f;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.performing-info small {
  display: block;
  font-size: 10.5px;
  color: #667085;
  margin-top: 1px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.performing-right {
  margin-left: auto;
  text-align: right;
  flex-shrink: 0;
}
.performing-right strong {
  display: block;
  font-size: 11.5px;
  font-weight: 800;
  color: #16a34a;
}
.performing-right small {
  display: block;
  font-size: 10px;
  color: #667085;
  margin-top: 1px;
}

.placement-summary { display: grid; gap: 4px; margin-top: 6px; }
.placement-summary-head, .placement-summary-row { display: grid; grid-template-columns: 1fr 78px 52px; gap: 8px; align-items: center; }
.placement-summary-head { padding-bottom: 6px; border-bottom: 1px solid var(--admin-surface-mid, #edf0f6); color: #10172f; font-size: 11px; font-weight: 700; }
.placement-summary-row { padding: 4px 0; border-bottom: 1px solid rgba(237, 240, 246, 0.6); }
.placement-summary-row:last-child { border-bottom: 0; }
.placement-name { display: flex; align-items: center; gap: 8px; font-size: 11.5px; min-width: 0; }
.placement-icon-wrap { width: 26px; height: 26px; border-radius: 6px; background: #f8faff; border: 1px solid #ededf8; display: grid; place-items: center; font-size: 13px; flex-shrink: 0; }
.placement-bar-wrap { width: 100%; height: 4px; background: #f1f5f9; border-radius: 99px; overflow: hidden; display: flex; margin-top: 4px; }
.placement-bar { height: 4px; border-radius: 99px; }

/* Bottom Grid Cards */
.bottom-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-top: 16px; }
@media (max-width: 1200px) { .bottom-grid { grid-template-columns: 1fr; } }
.bottom-card { padding: 16px; background: #fff; border: 1px solid var(--admin-outline); border-radius: 12px; box-shadow: var(--admin-shadow); }

.preview-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-top: 10px; }
@media (max-width: 640px) { .preview-grid { grid-template-columns: 1fr; } }
.preview-card { min-width: 0; }
.preview-image { width: 100%; aspect-ratio: 1.48/1; border-radius: 6px; overflow: hidden; border: 1px solid var(--admin-outline); background: #f7f8fa; }
.preview-image img { width: 100%; height: 100%; object-fit: cover; }
.preview-card strong { display: block; margin-top: 6px; font-size: 12px; font-weight: 700; color: var(--admin-text); }
.preview-card span { display: block; margin-top: 1px; color: var(--admin-muted); font-size: 10.5px; }
.preview-status { margin-top: 4px; }

.update-list, .note-list { display: grid; margin-top: 8px; }
.update-row, .note-row { display: grid; grid-template-columns: 32px 1fr auto; gap: 10px; align-items: start; padding: 10px 0; border-bottom: 1px solid var(--admin-surface-mid); }
.update-row:last-child, .note-row:last-child { border-bottom: 0; }
.update-icon, .note-icon { width: 32px; height: 32px; border-radius: 50%; display: grid; place-items: center; font-size: 14px; }
.update-icon.blue { background: #e3edff; color: #0056c3; }
.update-icon.orange { background: #fff0d7; color: #d77a00; }
.update-icon.purple { background: #eadfff; color: #7157d9; }
.note-icon.green { background: #ddf6e4; color: #0b6b1d; }
.note-icon.orange { background: #fff0d7; color: #d77a00; }
.note-icon.purple { background: #eadfff; color: #7157d9; }
.update-copy strong, .note-copy strong { display: block; font-size: 12px; font-weight: 700; color: var(--admin-text); }
.banner-scope .banners-split {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  align-items: start;
  margin-bottom: 18px;
  transition: grid-template-columns 0.25s ease;
}
.banner-scope .banners-split.has-selected {
  grid-template-columns: minmax(0, 1.62fr) minmax(330px, 0.78fr);
}
.banner-scope .banner-table tr { transition: background 0.18s ease; }
.banner-scope .banner-table tr.selected { background: #f0f5ff; }
.banner-scope .rowactions button.active-action {
  border-color: #0056c3;
  background: #f3f3fe;
  color: #0056c3;
}
.overlay, .modal-overlay { position: fixed; inset: 0; z-index: 105; background: rgba(16, 23, 47, 0.45); backdrop-filter: blur(2px); }
.drawer { position: absolute; right: 0; top: 0; width: min(460px, 100%); height: 100%; overflow-y: auto; padding: 20px; background: #fff; box-shadow: -18px 0 55px rgba(16, 24, 40, .17); }
.drawer-head { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; padding-bottom: 14px; border-bottom: 1px solid var(--admin-surface-mid); }
.drawer-banner { width: 120px; height: 68px; border-radius: 8px; overflow: hidden; border: 1px solid var(--admin-outline); }
.drawer-banner img { width: 100%; height: 100%; object-fit: cover; }
.drawer-title h2 { margin: 0; font-size: 18px; font-weight: 800; color: var(--admin-text); }
.drawer-title span { display: block; margin-top: 2px; color: var(--admin-muted); font-size: 11.5px; }
.drawer-section { padding: 14px 0; border-bottom: 1px solid var(--admin-surface-mid); }
.drawer-section h3 { margin: 0 0 10px; font-size: 13px; font-weight: 800; color: var(--admin-text); }
.detail-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
.detail-box { padding: 10px; border: 1px solid var(--admin-surface-mid); border-radius: 8px; background: #f8f9fc; }
.detail-box span { display: block; color: var(--admin-muted); font-size: 10.5px; }
.detail-box strong { display: block; margin-top: 3px; font-size: 12.5px; font-weight: 700; color: var(--admin-text); }

.modal-overlay { display: grid; place-items: center; padding: 16px; z-index: 110; }
.modal { width: min(620px, 100%); max-height: 92vh; overflow-y: auto; padding: 20px; border-radius: 12px; background: #fff; box-shadow: 0 22px 65px rgba(16,24,40,.18); box-sizing: border-box; }
.modal-head { display: flex; align-items: center; justify-content: space-between; padding-bottom: 12px; border-bottom: 1px solid var(--admin-surface-mid); gap: 12px; }
.modal-head h2 { margin: 0; font-size: 18px; font-weight: 800; color: #191b23; }
.modal-close {
  width: 32px;
  height: 32px;
  border: 1px solid #c2c6d5;
  border-radius: 8px;
  background: #ffffff;
  display: grid;
  place-items: center;
  cursor: pointer;
  color: #191b23;
  padding: 0;
  flex-shrink: 0;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.modal-close:hover, .modal-close:active, .modal-close:focus {
  background: #eff6ff;
  border-color: #93c5fd;
  color: #0056c3;
  transform: scale(1.06);
}
.form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 16px; }
.form-field { display: flex; flex-direction: column; gap: 6px; }
.form-field.full { grid-column: 1 / 3; }
.form-field span { font-size: 12px; font-weight: 700; color: var(--admin-text); }
.form-field input, .form-field select, .form-field textarea { width: 100%; border: 1px solid var(--admin-outline); border-radius: 8px; background: #fff; outline: 0; font-size: 12.5px; padding: 0 12px; height: 40px; font-family: inherit; box-sizing: border-box; }
.form-field textarea { min-height: 85px; padding: 10px; resize: vertical; }

.form-field .master-dropdown { width: 100% !important; }
.form-field .master-dropdown-trigger { width: 100% !important; height: 40px !important; border-radius: 8px !important; border: 1px solid var(--admin-outline) !important; padding: 0 12px !important; font-size: 12.5px !important; font-weight: 600 !important; justify-content: space-between !important; background: #ffffff !important; box-sizing: border-box !important; }
.banner-form-date { width: 100% !important; }
.banner-form-date .master-date-trigger { width: 100% !important; height: 40px !important; border-radius: 8px !important; border: 1px solid var(--admin-outline) !important; padding: 0 10px !important; font-size: 12.5px !important; justify-content: space-between !important; background: #ffffff !important; box-sizing: border-box !important; }

.banner-date-range-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }

.upload-box {
  border: 1.5px dashed #0056c3;
  border-radius: 10px;
  padding: 16px 14px;
  text-align: center;
  background: #f8faff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  cursor: pointer;
  transition: all 0.18s ease;
  box-sizing: border-box;
}
.upload-box:hover { background: #eff6ff; border-color: #004094; }

.modal-actions { display: flex; justify-content: flex-end; gap: 10px; margin-top: 20px; }
.modal-primary { height: 40px; padding: 0 18px; border: 0; border-radius: 8px; background: var(--admin-orange); color: #fff; font-size: 13px; font-weight: 700; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; gap: 8px; white-space: nowrap; flex-direction: row; transition: background .18s; box-sizing: border-box; }
.modal-primary:hover { background: #e25510; }
.modal-secondary { height: 40px; padding: 0 18px; border: 1px solid var(--admin-outline); border-radius: 8px; background: #ffffff; color: var(--admin-text); font-size: 13px; font-weight: 700; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; gap: 8px; white-space: nowrap; flex-direction: row; transition: all .18s; box-sizing: border-box; }
.modal-secondary:hover { background: var(--admin-surface-low); }

/* View All Modals Standard Layout */
.view-all-modal {
  width: min(680px, 100%) !important;
  max-height: 90vh !important;
  overflow-y: auto !important;
  padding: 20px 22px !important;
  border-radius: 12px !important;
  background: #ffffff !important;
  box-shadow: 0 22px 65px rgba(16, 24, 40, 0.18) !important;
  box-sizing: border-box !important;
}
.modal-stat-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin: 14px 0 16px;
}
.modal-stat-card {
  border-radius: 9px;
  padding: 10px 14px;
}
.modal-scroll-list {
  flex: 1;
  overflow-y: auto;
  display: grid;
  gap: 10px;
  padding-right: 4px;
  max-height: 360px;
}
.modal-list-card {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 14px;
  border: 1px solid #ededf8;
  border-radius: 10px;
  background: #ffffff;
  transition: background 0.15s ease;
}
.modal-list-card:hover {
  background: #f8faff;
}
.placement-metric-strip {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  margin-top: 12px;
  padding: 8px 10px;
  background: #f8fafc;
  border-radius: 6px;
  border: 1px solid #f1f5f9;
}
.modal-preview-grid {
  flex: 1;
  overflow-y: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 14px;
  padding-right: 4px;
  max-height: 360px;
}
.view-all-modal-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 18px;
  padding-top: 14px;
  border-top: 1px solid #ededf8;
  gap: 12px;
}
.view-all-modal-footer .footer-actions {
  display: flex;
  gap: 8px;
  align-items: center;
}
.view-all-modal-footer .footer-note {
  font-size: 11.5px;
  color: #16a34a;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 6px;
}

/* Toast */
.toast { position: fixed; right: 24px; bottom: 24px; z-index: 140; min-width: 280px; padding: 12px 16px; border-radius: 10px; background: #10172f; color: #ffffff; box-shadow: 0 18px 45px rgba(16,24,40,.24); display: flex; align-items: center; gap: 10px; font-size: 12.5px; font-weight: 600; }
.toast-icon { width: 24px; height: 24px; border-radius: 50%; background: #16a34a; color: #fff; display: grid; place-items: center; font-size: 13px; flex-shrink: 0; }
`;

const bannerImages = {
  summer: "data:image/jpeg;base64,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",
  deal: "data:image/jpeg;base64,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",
  weekend: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCABPAHUDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/9oACAEBAAAf0Pt9p6nFN30b6Nm9f/r1Js2/N/F1o3bv4aXbRv2/w07bRs20b6N1LS0tJTqXdSYptLTt9Nzmnbh7U1aduo2bKN9G6nUUU3fzTqKdvo30u6k3Um+lp26jdTqdRS76KXd/u0+iiiikxSbaSn4pNlKFo3U3fTt+aXp/u0lO/3aXbRvpdtLsp1P30baXZTsUZpdtJT6KdmjIpd1LS1/9k=",
  new: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAuAFUDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/9oACAEBAAAf0Pct3/2r0hOD39etDSEf3/1o8w56/wDjVHmDPT9aN2/v+tHme360eYD6+nX2o8w/7VIZD3zR5hx3o3ev+fek3ev09+tL5lHm/wC92/ioaQ+vp3oo8w/7X60eZk9/1pDIe+aN59/1pA2fc+npRvPv29PWjeccH19qBIe2en+FIZDj+Lv2o3kjvj60bj1+n+FBY+vp+FIXPv2oMn17flRvOec0eZ7n+VHmf7XpSbyR3zxR5hB4Jo3nt+FFHmgdM/Tmk8wfX+VJv9/0pfMP+TSebz3o8zg+/b2pfM9z+VJ5mO31xR5hPr/k0GQ+h9aBIe+e3SjzD75+lBkPv2o8zP/66Td/vUUeYPf8AWjzOP4u3f0o8znv27/4Uhk+v9KPM+v8AD+NG/B5wfxo8znv2/h9aDIQfp7etIZOT1+nBo8zjof/rUeZwff2pd/v6/wn/GgSH17f57Unmcd+oo8z2NFHmH37dzSecfU/pS+Y3r+v1o8xgP4v8AP+NJvPr/AEP+FAmI7/l/n2o8xgf/ANf+FDSn/J/+vQZD/DXP/16PMPT/H+v+FAkbHegyn/J/wA+1DSse1BkOevp/D/9ekLEnr/Kj/PQUUUUAFB6UUUAf//Z",
  festive: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAuAFUDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/9oACAEBAAAf0Tzgd8f0pnmn1PP+FIZD3z/jQZcd8cfn9aRpT+oo8z8en4elHmf4f596PMPbPXgfn/Sgyn2yB+HajzTnuRxj/P40eYR7kY7dP84pPM4PXj/PH6UeaT7E4+vtR5px+Wfpn/wCvR5nHfpj8P/rUeaceh44ooo8zjp6+/fpSZJHfnn+dB4J6/hSeo5457f5NHJ6E8Yzx+P8ASlySc/mP8+/+FKec+nT3/D60n55xjn2x/wDWoyfUnp+P/wCugE+5yMjP+fU/nR+fbp2Hf88flRzz0yOMfh0+gzS8nnscds4/zmjOTwScnH4/44/pRRnnGT/n+uaOfU//AKqCc/3sn8/woyc+/Xp27e/rRn5eMg4yAew7fpn86Afmz6jOT+f6ZP50hPPcEEkZ4x/nj8aM+/PTA7f/AFuM/lRzjPIIGB+PQ/gAPzoPqCRnkc/iR+Jx+VA9iRxgn/PPf9KO2OoOQMDp3I/QflRR+fcY9+/48UAe57d6Cc+/Q9PxoyQe+4Y47Z/ySPxoPA6ng5546c/h3oBx3PA5+vp7dD+VGeMHp0OB26f4fgaTPOSemecewB/L/Gjk888nOSfx/wD1UD24/n9PzJ/KgkY5yAM/h/nNHU5ySDgn3P8An+dFAHtnn/PNBOep55/A0E5P/wCqjk+u4/hzQT9cnjP60Zz1yfw7dB2+p/GgnrnOSc5H1/rQffJ4xjH5igHnjg5JyB3/AP1fnQfp3x+XFA5yRnPTHv3P4Yo+vUn8j/hRQOenPJHHftQfXnp+dHQnqccH6/8A6qP4u/4en+T+tHTk9cn9O36/nSDg8dskfhyP1xQOnHTHH/xX8jQOwzn+px/U/rQTnJPcc8dTjJ/maOmcdRx+HTP50A575yO3r0P5Cjuc+mfrx/n8KKP4uvfv2pf4vc5575pOx69f/AK9J0GBn05PFL3HbPf0/yaD2Hf6e1J1yefb3oxyeo/kKCOxyeOfxz/8AE/rQOnH/Abb6/8A66OM8c5Pb8hR+fI6+vv/AJ9KDyOfx9/U/jRR357c9Pyo6N6cYpejc9M54pP4v+Bd+/FFHc55/wx/pRDnu+n+FKOaX+IZ9/6UnYZ9O30FJ/CM+n8zR6d+P55zR2Pv1/Wl/HHHb9f8+1HY/l/j+tFf/2Q==",
};

const initialBanners = [
  { id: "BNR-001", name: "Summer Collection '25", image: "summer", placement: "Home Hero", placementIcon: "monitor", schedule: "May 1 – May 31, 2025", impressions: 245000, clicks: 12400, ctr: 5.1, status: "Active", device: "Desktop", campaign: "Summer Collection" },
  { id: "BNR-002", name: "Deal of the Week", image: "deal", placement: "Homepage Promo Strip", placementIcon: "layout", schedule: "May 10 – May 25, 2025", impressions: 188000, clicks: 8950, ctr: 4.8, status: "Active", device: "All", campaign: "Weekly Deals" },
  { id: "BNR-003", name: "Weekend Sale", image: "weekend", placement: "Category Hero", placementIcon: "image", schedule: "May 14 – May 19, 2025", impressions: 96000, clicks: 3620, ctr: 3.8, status: "Scheduled", device: "Desktop", campaign: "Weekend Sale" },
  { id: "BNR-004", name: "New Arrivals Push", image: "new", placement: "Mobile Home Top", placementIcon: "mobile", schedule: "May 18 – Jun 2, 2025", impressions: 134000, clicks: 5270, ctr: 3.9, status: "Draft", device: "Mobile", campaign: "New Arrivals" },
  { id: "BNR-005", name: "Festive Launch Banner", image: "festive", placement: "Search Results Top", placementIcon: "search", schedule: "Apr 20 – May 5, 2025", impressions: 310000, clicks: 9920, ctr: 3.2, status: "Archived", device: "All", campaign: "Festive Launch" },
];

const performanceMix = [
  { label: "Home Hero", percent: "38.0%", count: "48", color: "#7c4dff" },
  { label: "Promo Strip", percent: "22.0%", count: "28", color: "#ff6b00" },
  { label: "Category Hero", percent: "18.0%", count: "23", color: "#2d7deb" },
  { label: "Mobile Top", percent: "12.0%", count: "16", color: "#16a34a" },
  { label: "Search Top", percent: "10.0%", count: "13", color: "#10172f" },
];

const placementSummary = [
  {
    id: "slot-1",
    label: "Home Hero",
    dimension: "1920×600",
    page: "Homepage Top",
    impressions: "745,000",
    clicks: "38,000",
    ctr: "5.1%",
    revenue: "₹4.2L",
    activeBanners: 3,
    fillRate: "88%",
    color: "#0056c3",
    status: "High Performing",
    growth: "+18.4%",
    icon: "monitor",
  },
  {
    id: "slot-2",
    label: "Promo Strip",
    dimension: "1200×240",
    page: "Mid Homepage",
    impressions: "432,000",
    clicks: "19,000",
    ctr: "4.4%",
    revenue: "₹2.8L",
    activeBanners: 2,
    fillRate: "67%",
    color: "#fd661d",
    status: "High Performing",
    growth: "+12.1%",
    icon: "layout",
  },
  {
    id: "slot-3",
    label: "Category Hero",
    dimension: "800×400",
    page: "Category Header",
    impressions: "356,000",
    clicks: "12,800",
    ctr: "3.6%",
    revenue: "₹1.9L",
    activeBanners: 4,
    fillRate: "58%",
    color: "#0b6b1d",
    status: "Optimal",
    growth: "+8.5%",
    icon: "image",
  },
  {
    id: "slot-4",
    label: "Mobile Top",
    dimension: "750×300",
    page: "App / Mobile Web",
    impressions: "268,000",
    clicks: "9,900",
    ctr: "3.7%",
    revenue: "₹1.4L",
    activeBanners: 2,
    fillRate: "44%",
    color: "#7157d9",
    status: "Optimal",
    growth: "+15.2%",
    icon: "mobile",
  },
  {
    id: "slot-5",
    label: "Search Top",
    dimension: "600×200",
    page: "Search Results",
    impressions: "198,000",
    clicks: "5,740",
    ctr: "2.9%",
    revenue: "₹85K",
    activeBanners: 1,
    fillRate: "34%",
    color: "#4a8294",
    status: "Needs Refresh",
    growth: "+6.0%",
    icon: "search",
  },
];

const recentUpdates = [
  { id: 1, title: "Summer Collection '25 updated", text: "Image and CTA updated for desktop hero slot", date: "May 18, 2025", time: "10:24 AM", author: "Admin (Sudeep)", tone: "blue", icon: FiImage },
  { id: 2, title: "Deal of the Week scheduled", text: "Schedule extended to May 25 across storefront", date: "May 17, 2025", time: "09:45 AM", author: "Marketing Lead", tone: "orange", icon: FiClock },
  { id: 3, title: "Weekend Sale status changed", text: "From Draft to Scheduled for Category Hero slot", date: "May 16, 2025", time: "06:15 PM", author: "Admin (Sudeep)", tone: "purple", icon: FiRefreshCw },
  { id: 4, title: "New Arrivals Push published", text: "Live on Mobile Home Top with 3.9% CTR benchmark", date: "May 15, 2025", time: "03:10 PM", author: "Creative Designer", tone: "blue", icon: FiImage },
  { id: 5, title: "Festive Launch Banner archived", text: "Campaign ended successfully with 310K impressions", date: "May 14, 2025", time: "11:30 AM", author: "System Auto-Archive", tone: "orange", icon: FiClock },
  { id: 6, title: "Search Results Top slot synced", text: "Targeting parameters refreshed for keyword matches", date: "May 13, 2025", time: "08:20 AM", author: "Optimization Engine", tone: "purple", icon: FiRefreshCw },
];

const optimizationNotes = [
  { id: 1, title: "Summer Collection delivers highest CTR on mobile", text: "Mobile CTR reached 5.1% (+18.4% growth). Recommend keeping top placement.", date: "May 18, 2025", author: "CRO Specialist", tone: "green", icon: FiTrendingUp },
  { id: 2, title: "Promo strip underperforms on desktop screens", text: "Desktop CTR is at 2.4%. Suggest A/B testing a bolder headline and brighter button.", date: "May 17, 2025", author: "Marketing Lead", tone: "orange", icon: FiAlertTriangle },
  { id: 3, title: "Category hero needs refreshed CTA copy", text: "Testing 'Shop Exclusive Styles' vs 'Explore Now' to improve conversions.", date: "May 16, 2025", author: "Admin (Sudeep)", tone: "purple", icon: FiFileText },
  { id: 4, title: "Search Top placement has high buyer intent", text: "Conversion rate is 4.8% despite lower overall impression volume.", date: "May 15, 2025", author: "Analytics Team", tone: "green", icon: FiTrendingUp },
  { id: 5, title: "Weekend Sale creative fatigue observed", text: "CTR dipped by 0.6% after 4 days. Schedule banner rotation every 72 hours.", date: "May 14, 2025", author: "Ad Ops Lead", tone: "orange", icon: FiAlertTriangle },
  { id: 6, title: "App push notification sync recommended", text: "Align mobile top banner promotion with weekly Saturday push notification.", date: "May 13, 2025", author: "Growth Lead", tone: "purple", icon: FiTag },
];

function PlacementIcon({ type }) {
  if (type === "monitor") return <FiMonitor />;
  if (type === "layout") return <FiLayout />;
  if (type === "mobile") return <FiSmartphone />;
  if (type === "search") return <FiSearch />;
  return <FiImage />;
}

function ctrTone(value) {
  if (value >= 4.5) return "good";
  if (value >= 3.5) return "warning";
  return "bad";
}

function StatusPill({ status }) {
  return <span className={`status-pill ${status.toLowerCase()}`}>{status}</span>;
}

function RowMenu({ banner, onEdit, onArchive, onClose }) {
  return (
    <motion.div className="row-menu" initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }}>
      <button type="button" onClick={() => { onEdit(banner); onClose(); }}>Edit banner</button>
      <button type="button" onClick={() => { onArchive(banner.id); onClose(); }}>{banner.status === "Archived" ? "Restore" : "Archive"}</button>
    </motion.div>
  );
}

function BannerDrawer({ banner, onClose, onEdit, onArchive }) {
  return (
    <motion.div className="overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
        style={{ position: "fixed", right: 20, top: 20, bottom: 20, zIndex: 120, width: "min(440px, 90vw)" }}
      >
        <IntegrationDetailsDrawer
          item={banner}
          title="Banner Details"
          onClose={onClose}
          onEdit={() => onEdit(banner)}
        />
      </motion.div>
    </motion.div>
  );
}

function BannerModal({ initial, onClose, onSave }) {
  const fileRef = useRef(null);
  const [preview, setPreview] = useState(initial ? bannerImages[initial.image] : bannerImages.summer);
  const [form, setForm] = useState({
    name: initial?.name || "",
    placement: initial?.placement || "Home Hero",
    status: initial?.status || "Draft",
    device: initial?.device || "All",
    scheduleStart: "",
    scheduleEnd: "",
    campaign: initial?.campaign || "",
  });

  const update = (key, value) => setForm((current) => ({ ...current, [key]: value }));

  const receiveFile = (file) => {
    if (!file || !file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = () => setPreview(String(reader.result || ""));
    reader.readAsDataURL(file);
  };

  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim()) return;
    onSave({
      ...(initial || {}),
      id: initial?.id || `BNR-${String(Date.now()).slice(-3)}`,
      name: form.name.trim(),
      image: initial?.image || "summer",
      customPreview: preview,
      placement: form.placement,
      placementIcon:
        form.placement.includes("Mobile") ? "mobile" :
        form.placement.includes("Search") ? "search" :
        form.placement.includes("Promo") ? "layout" :
        form.placement.includes("Category") ? "image" : "monitor",
      schedule: form.scheduleStart && form.scheduleEnd
        ? `${form.scheduleStart} – ${form.scheduleEnd}`
        : form.scheduleStart || form.scheduleEnd || initial?.schedule || "",
      impressions: initial?.impressions || 0,
      clicks: initial?.clicks || 0,
      ctr: initial?.ctr || 0,
      status: form.status,
      device: form.device,
      campaign: form.campaign || form.name.trim(),
    });
  };

  return (
    <motion.div className="modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.form className="modal" initial={{ y: 18, scale: .98 }} animate={{ y: 0, scale: 1 }} exit={{ y: 18, scale: .98 }} onClick={(e) => e.stopPropagation()} onSubmit={submit}>
        <div className="modal-head">
          <h2>{initial ? "Edit Banner" : "Create Banner"}</h2>
          <button className="modal-close" type="button" onClick={onClose}><FiX /></button>
        </div>

        <div className="form-grid">
          <label className="form-field"><span>Banner Name</span><input required value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="e.g. Summer Collection '25" /></label>
          <label className="form-field"><span>Campaign</span><input value={form.campaign} onChange={(e) => update("campaign", e.target.value)} placeholder="Campaign name" /></label>
          
          <label className="form-field">
            <span>Placement</span>
            <MasterDropdown
              options={["Home Hero", "Homepage Promo Strip", "Category Hero", "Mobile Home Top", "Search Results Top"]}
              value={form.placement}
              onChange={(val) => update("placement", val)}
            />
          </label>

          <label className="form-field">
            <span>Device</span>
            <MasterDropdown
              options={["All", "Desktop", "Mobile"]}
              value={form.device}
              onChange={(val) => update("device", val)}
            />
          </label>

          <label className="form-field">
            <span>Status</span>
            <MasterDropdown
              options={["Active", "Scheduled", "Draft", "Archived"]}
              value={form.status}
              onChange={(val) => update("status", val)}
            />
          </label>

          <label className="form-field full">
            <span>Schedule (Start – End)</span>
            <div className="banner-date-range-grid">
              <div>
                <div style={{ fontSize: 10.5, color: "#667085", fontWeight: 600, marginBottom: 4 }}>Start Date</div>
                <MasterDatePicker
                  singleDate
                  value={form.scheduleStart}
                  onChange={(v) => update("scheduleStart", v)}
                  placeholder="Start Date"
                  className="banner-form-date"
                />
              </div>
              <div>
                <div style={{ fontSize: 10.5, color: "#667085", fontWeight: 600, marginBottom: 4 }}>End Date</div>
                <MasterDatePicker
                  singleDate
                  value={form.scheduleEnd}
                  onChange={(v) => update("scheduleEnd", v)}
                  placeholder="End Date"
                  className="banner-form-date"
                />
              </div>
            </div>
          </label>
          
          <label className="form-field full">
            <span>Banner Image</span>
            <div className="upload-box" onDragOver={(e) => e.preventDefault()} onDrop={(e) => { e.preventDefault(); receiveFile(e.dataTransfer.files?.[0]); }}>
              {preview ? (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, width: "100%" }}>
                  <img
                    src={preview}
                    alt="Banner Preview"
                    style={{ maxHeight: 90, maxWidth: "100%", borderRadius: 6, objectFit: "cover", border: "1px solid #c2c6d5" }}
                  />
                  <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                    <button className="secondarybtn" type="button" style={{ height: 32, fontSize: 11, padding: "0 14px" }} onClick={() => fileRef.current?.click()}>Change Image</button>
                  </div>
                </div>
              ) : (
                <div>
                  <FiImage size={24} style={{ color: "var(--admin-primary-2)" }} />
                  <div style={{ fontSize: 12, marginTop: 5, fontWeight: 600 }}>Upload promotional banner image</div>
                  <button className="secondarybtn" type="button" style={{ marginTop: 8, height: 34, fontSize: 11 }} onClick={() => fileRef.current?.click()}>Choose Image</button>
                </div>
              )}
              <input ref={fileRef} hidden type="file" accept="image/*" onChange={(e) => receiveFile(e.target.files?.[0])} />
            </div>
          </label>
        </div>

        <div className="modal-actions">
          <button className="modal-secondary" type="button" onClick={onClose}>Cancel</button>
          <button className="modal-primary" type="submit"><FiSave /> {initial ? "Save Changes" : "Create Banner"}</button>
        </div>
      </motion.form>
    </motion.div>
  );
}

function BannerPerformanceMixModal({ onClose, toast }) {
  return (
    <motion.div className="modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div
        className="modal view-all-modal"
        initial={{ y: 16, scale: 0.96 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: 16, scale: 0.96 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-head">
          <div>
            <h2>Banner Performance Mix & Placement Share</h2>
            <div style={{ fontSize: 11, color: "#667085", marginTop: 2 }}>Total Impressions: 1,999,000 across 5 active placement slots</div>
          </div>
          <button className="modal-close" type="button" onClick={onClose} title="Close" aria-label="Close"><FiX size={16} /></button>
        </div>

        <div className="modal-stat-grid">
          <div className="modal-stat-card" style={{ background: "#f8faff", border: "1px solid #ededf8" }}>
            <span style={{ fontSize: 10.5, color: "#667085", fontWeight: 700, textTransform: "uppercase" }}>Total Banners</span>
            <strong style={{ display: "block", fontSize: 16, color: "#10172f", marginTop: 3, fontWeight: 800 }}>128 Active</strong>
          </div>
          <div className="modal-stat-card" style={{ background: "#f3fbf6", border: "1px solid #d4f3e1" }}>
            <span style={{ fontSize: 10.5, color: "#16a34a", fontWeight: 700, textTransform: "uppercase" }}>Average CTR</span>
            <strong style={{ display: "block", fontSize: 16, color: "#16a34a", marginTop: 3, fontWeight: 800 }}>4.1%</strong>
          </div>
          <div className="modal-stat-card" style={{ background: "#f8f8ff", border: "1px solid #ededf8" }}>
            <span style={{ fontSize: 10.5, color: "#0056c3", fontWeight: 700, textTransform: "uppercase" }}>Top Placement</span>
            <strong style={{ display: "block", fontSize: 16, color: "#0056c3", marginTop: 3, fontWeight: 800 }}>Home Hero (38%)</strong>
          </div>
        </div>

        <div className="modal-scroll-list">
          {[
            { label: "Home Hero", percent: "38.0%", impressions: "745,000", ctr: "5.1%", color: "#7c4dff", desc: "Top prominent storefront banner slot with highest desktop traffic" },
            { label: "Promo Strip", percent: "22.0%", impressions: "432,000", ctr: "4.4%", color: "#ff6b00", desc: "High-conversion mid-page promotional banner carousel" },
            { label: "Category Hero", percent: "18.0%", impressions: "356,000", ctr: "3.6%", color: "#2d7deb", desc: "Targeted header banners on specific category listing pages" },
            { label: "Mobile Top", percent: "12.0%", impressions: "268,000", ctr: "3.7%", color: "#16a34a", desc: "Mobile-exclusive sticky header banner for app & responsive web" },
            { label: "Search Top", percent: "10.0%", impressions: "198,000", ctr: "2.9%", color: "#10172f", desc: "Contextual search query promotional banner placements" },
          ].map((item) => (
            <div key={item.label} className="modal-list-card">
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: item.color, flexShrink: 0 }} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                  <strong style={{ fontSize: 13.5, fontWeight: 700, color: "#10172f" }}>{item.label}</strong>
                  <span style={{ fontSize: 10.5, fontWeight: 800, padding: "2px 7px", borderRadius: 999, background: "#f3f3fe", color: item.color }}>{item.percent} Share</span>
                </div>
                <div style={{ fontSize: 11.5, color: "#667085", marginTop: 3 }}>{item.desc}</div>
              </div>
              <div style={{ textAlign: "right", flexShrink: 0 }}>
                <strong style={{ display: "block", fontSize: 13, color: "#10172f", fontWeight: 800 }}>{item.impressions}</strong>
                <span style={{ display: "block", fontSize: 11, color: "#16a34a", fontWeight: 700, marginTop: 2 }}>{item.ctr} CTR</span>
              </div>
            </div>
          ))}
        </div>

        <div className="view-all-modal-footer">
          <span className="footer-note">
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#16a34a", display: "inline-block" }} />
            Calculated from active campaign metrics
          </span>
          <div className="footer-actions">
            <button className="modal-secondary" type="button" onClick={onClose}>Close</button>
            <button className="modal-primary" type="button" onClick={() => { toast("Performance mix report exported to CSV."); onClose(); }}>
              <FiDownload /> Export CSV
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function TopPerformingBannersModal({ banners, onClose, toast }) {
  return (
    <motion.div className="modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div
        className="modal view-all-modal"
        initial={{ y: 16, scale: 0.96 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: 16, scale: 0.96 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-head">
          <div>
            <h2>Top Performing Banners</h2>
            <div style={{ fontSize: 11, color: "#667085", marginTop: 2 }}>Ranked by Click-Through Rate (CTR), impressions, and user engagement</div>
          </div>
          <button className="modal-close" type="button" onClick={onClose} title="Close" aria-label="Close"><FiX size={16} /></button>
        </div>

        <div className="modal-stat-grid">
          <div className="modal-stat-card" style={{ background: "#f8faff", border: "1px solid #ededf8" }}>
            <span style={{ fontSize: 10.5, color: "#667085", fontWeight: 700, textTransform: "uppercase" }}>Ranked</span>
            <strong style={{ display: "block", fontSize: 16, color: "#10172f", marginTop: 3, fontWeight: 800 }}>{banners.length} Banners</strong>
          </div>
          <div className="modal-stat-card" style={{ background: "#f3fbf6", border: "1px solid #d4f3e1" }}>
            <span style={{ fontSize: 10.5, color: "#16a34a", fontWeight: 700, textTransform: "uppercase" }}>Average CTR</span>
            <strong style={{ display: "block", fontSize: 16, color: "#16a34a", marginTop: 3, fontWeight: 800 }}>4.1%</strong>
          </div>
          <div className="modal-stat-card" style={{ background: "#f8f8ff", border: "1px solid #ededf8" }}>
            <span style={{ fontSize: 10.5, color: "#0056c3", fontWeight: 700, textTransform: "uppercase" }}>Total Clicks</span>
            <strong style={{ display: "block", fontSize: 16, color: "#0056c3", marginTop: 3, fontWeight: 800 }}>40,160</strong>
          </div>
        </div>

        <div className="modal-scroll-list">
          {banners.map((b, index) => (
            <div key={b.id} className="modal-list-card">
              <div style={{ width: 56, height: 34, borderRadius: 6, overflow: "hidden", border: "1px solid #dfe4ef", flexShrink: 0, background: "#f7f8fa" }}>
                <img src={bannerImages[b.image]} alt={b.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                  <span style={{ fontSize: 11, fontWeight: 800, color: "#0056c3", background: "#f3f3fe", padding: "1px 6px", borderRadius: 4 }}>#{index + 1}</span>
                  <strong style={{ fontSize: 13.5, fontWeight: 700, color: "#10172f" }}>{b.name}</strong>
                  <StatusPill status={b.status} />
                </div>
                <div style={{ display: "flex", gap: 10, marginTop: 4, fontSize: 11.5, color: "#667085", flexWrap: "wrap" }}>
                  <span>Slot: <strong style={{ color: "#10172f" }}>{b.placement}</strong></span>
                  <span>· Device: {b.device}</span>
                  <span>· {b.schedule}</span>
                </div>
              </div>
              <div style={{ textAlign: "right", flexShrink: 0 }}>
                <strong style={{ display: "block", fontSize: 13, color: "#10172f", fontWeight: 800 }}>{b.impressions.toLocaleString()} Impr</strong>
                <span className={`ctr ${ctrTone(b.ctr)}`} style={{ display: "inline-block", marginTop: 2 }}>{b.ctr.toFixed(1)}% CTR</span>
              </div>
            </div>
          ))}
        </div>

        <div className="view-all-modal-footer">
          <span className="footer-note">
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#16a34a", display: "inline-block" }} />
            Ranked performance: Last 30 days
          </span>
          <div className="footer-actions">
            <button className="modal-secondary" type="button" onClick={onClose}>Close</button>
            <button className="modal-primary" type="button" onClick={() => { toast("Top performing banners report exported."); onClose(); }}>
              <FiDownload /> Export CSV
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function PlacementSummaryModal({ onClose, toast }) {
  return (
    <motion.div className="modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div
        className="modal view-all-modal"
        initial={{ y: 16, scale: 0.96 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: 16, scale: 0.96 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-head">
          <div>
            <h2>Banner Placement Summary & Slot Audit</h2>
            <div style={{ fontSize: 11, color: "#667085", marginTop: 2 }}>Comprehensive performance, traffic volume, and CTR breakdown across all page slots</div>
          </div>
          <button className="modal-close" type="button" onClick={onClose} title="Close" aria-label="Close"><FiX size={16} /></button>
        </div>

        <div className="modal-stat-grid">
          <div className="modal-stat-card" style={{ background: "#f8faff", border: "1px solid #ededf8" }}>
            <span style={{ fontSize: 10.5, color: "#667085", fontWeight: 700, textTransform: "uppercase" }}>Active Slots</span>
            <strong style={{ display: "block", fontSize: 16, color: "#10172f", marginTop: 3, fontWeight: 800 }}>5 Locations</strong>
          </div>
          <div className="modal-stat-card" style={{ background: "#f3fbf6", border: "1px solid #d4f3e1" }}>
            <span style={{ fontSize: 10.5, color: "#16a34a", fontWeight: 700, textTransform: "uppercase" }}>Total Traffic</span>
            <strong style={{ display: "block", fontSize: 16, color: "#16a34a", marginTop: 3, fontWeight: 800 }}>1.99M Impressions</strong>
          </div>
          <div className="modal-stat-card" style={{ background: "#f8f8ff", border: "1px solid #ededf8" }}>
            <span style={{ fontSize: 10.5, color: "#0056c3", fontWeight: 700, textTransform: "uppercase" }}>Revenue Impact</span>
            <strong style={{ display: "block", fontSize: 16, color: "#0056c3", marginTop: 3, fontWeight: 800 }}>₹10.75L Total</strong>
          </div>
        </div>

        <div className="modal-scroll-list">
          {placementSummary.map((item) => (
            <div key={item.id || item.label} style={{ padding: "14px 16px", border: "1px solid #ededf8", borderRadius: 10, background: "#ffffff", boxShadow: "0 1px 3px rgba(0,0,0,0.02)" }}>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10, flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div className="placement-icon-wrap" style={{ width: 34, height: 34, borderRadius: 8, color: item.color, fontSize: 16, flexShrink: 0 }}>
                    <PlacementIcon type={item.icon} />
                  </div>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                      <strong style={{ fontSize: 14, fontWeight: 800, color: "#10172f" }}>{item.label}</strong>
                      <span style={{ fontSize: 10.5, fontWeight: 800, padding: "2px 7px", borderRadius: 999, background: item.status === "High Performing" ? "#dcfce7" : item.status === "Optimal" ? "#e0f2fe" : "#fef3c7", color: item.status === "High Performing" ? "#15803d" : item.status === "Optimal" ? "#0369a1" : "#b45309" }}>
                        {item.status}
                      </span>
                    </div>
                    <div style={{ fontSize: 11.5, color: "#64748b", marginTop: 2 }}>
                      {item.page} · <strong style={{ color: "#334155" }}>{item.dimension}</strong> · {item.activeBanners} Active Creatives
                    </div>
                  </div>
                </div>

                <div style={{ textAlign: "right" }}>
                  <span style={{ fontSize: 11, fontWeight: 800, color: "#16a34a", background: "#f0fdf4", padding: "2px 6px", borderRadius: 4 }}>
                    {item.growth}
                  </span>
                  <div style={{ fontSize: 13, fontWeight: 800, color: "#10172f", marginTop: 3 }}>
                    {item.revenue} Rev
                  </div>
                </div>
              </div>

              {/* 4 Metrics Strip */}
              <div className="placement-metric-strip">
                <div>
                  <span style={{ display: "block", fontSize: 10, color: "#64748b", fontWeight: 600 }}>IMPRESSIONS</span>
                  <strong style={{ display: "block", fontSize: 12, color: "#10172f", fontWeight: 700, marginTop: 1 }}>{item.impressions}</strong>
                </div>
                <div>
                  <span style={{ display: "block", fontSize: 10, color: "#64748b", fontWeight: 600 }}>CLICKS</span>
                  <strong style={{ display: "block", fontSize: 12, color: "#10172f", fontWeight: 700, marginTop: 1 }}>{item.clicks}</strong>
                </div>
                <div>
                  <span style={{ display: "block", fontSize: 10, color: "#64748b", fontWeight: 600 }}>CTR</span>
                  <strong style={{ display: "block", fontSize: 12, color: "#16a34a", fontWeight: 800, marginTop: 1 }}>{item.ctr}</strong>
                </div>
                <div>
                  <span style={{ display: "block", fontSize: 10, color: "#64748b", fontWeight: 600 }}>FILL RATE</span>
                  <strong style={{ display: "block", fontSize: 12, color: item.color, fontWeight: 800, marginTop: 1 }}>{item.fillRate}</strong>
                </div>
              </div>

              {/* Progress bar */}
              <div style={{ width: "100%", height: 5, background: "#f1f5f9", borderRadius: 999, overflow: "hidden", marginTop: 8 }}>
                <div style={{ width: item.fillRate, height: "100%", background: item.color, borderRadius: 999 }} />
              </div>
            </div>
          ))}
        </div>

        <div className="view-all-modal-footer">
          <span className="footer-note">
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#16a34a", display: "inline-block" }} />
            Placement inventory live routing
          </span>
          <div className="footer-actions">
            <button className="modal-secondary" type="button" onClick={onClose}>Close</button>
            <button className="modal-primary" type="button" onClick={() => { toast("Placement summary exported."); onClose(); }}>
              <FiDownload /> Export CSV
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ActiveBannerPreviewsModal({ banners, onClose, toast }) {
  const activeBanners = banners.filter(b => b.status === "Active" || b.status === "Scheduled");
  return (
    <motion.div className="modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div
        className="modal view-all-modal"
        initial={{ y: 16, scale: 0.96 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: 16, scale: 0.96 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-head">
          <div>
            <h2>Active Banner Previews Gallery</h2>
            <div style={{ fontSize: 11, color: "#667085", marginTop: 2 }}>Live aspect ratio previews of all currently running storefront promotional creatives</div>
          </div>
          <button className="modal-close" type="button" onClick={onClose} title="Close" aria-label="Close"><FiX size={16} /></button>
        </div>

        <div className="modal-stat-grid">
          <div className="modal-stat-card" style={{ background: "#f8faff", border: "1px solid #ededf8" }}>
            <span style={{ fontSize: 10.5, color: "#667085", fontWeight: 700, textTransform: "uppercase" }}>Active Live</span>
            <strong style={{ display: "block", fontSize: 16, color: "#10172f", marginTop: 3, fontWeight: 800 }}>{activeBanners.length} Banners</strong>
          </div>
          <div className="modal-stat-card" style={{ background: "#f3fbf6", border: "1px solid #d4f3e1" }}>
            <span style={{ fontSize: 10.5, color: "#16a34a", fontWeight: 700, textTransform: "uppercase" }}>Coverage</span>
            <strong style={{ display: "block", fontSize: 16, color: "#16a34a", marginTop: 3, fontWeight: 800 }}>Desktop & Mobile</strong>
          </div>
          <div className="modal-stat-card" style={{ background: "#f8f8ff", border: "1px solid #ededf8" }}>
            <span style={{ fontSize: 10.5, color: "#0056c3", fontWeight: 700, textTransform: "uppercase" }}>Live Avg CTR</span>
            <strong style={{ display: "block", fontSize: 16, color: "#0056c3", marginTop: 3, fontWeight: 800 }}>4.9%</strong>
          </div>
        </div>

        <div className="modal-preview-grid">
          {activeBanners.map((b) => (
            <div key={b.id} style={{ border: "1px solid #ededf8", borderRadius: 10, padding: 10, background: "#ffffff" }}>
              <div style={{ width: "100%", aspectRatio: "1.6/1", borderRadius: 8, overflow: "hidden", border: "1px solid #dfe4ef", background: "#f8f9fc" }}>
                <img src={bannerImages[b.image]} alt={b.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ marginTop: 8 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 6 }}>
                  <strong style={{ fontSize: 12.5, fontWeight: 700, color: "#10172f" }}>{b.name}</strong>
                  <StatusPill status={b.status} />
                </div>
                <div style={{ fontSize: 11, color: "#667085", marginTop: 3 }}>{b.placement} · {b.device}</div>
                <div style={{ fontSize: 10.5, color: "#0056c3", fontWeight: 700, marginTop: 4 }}>{b.schedule}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="view-all-modal-footer">
          <span className="footer-note">
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#16a34a", display: "inline-block" }} />
            Storefront preview rendering live
          </span>
          <div className="footer-actions">
            <button className="modal-secondary" type="button" onClick={onClose}>Close</button>
            <button className="modal-primary" type="button" onClick={() => { toast("Active previews exported."); onClose(); }}>
              <FiDownload /> Export CSV
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function RecentBannerUpdatesModal({ onClose, toast }) {
  return (
    <motion.div className="modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div
        className="modal view-all-modal"
        initial={{ y: 16, scale: 0.96 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: 16, scale: 0.96 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-head">
          <div>
            <h2>Recent Banner Updates & Audit History</h2>
            <div style={{ fontSize: 11, color: "#667085", marginTop: 2 }}>Chronological history of creative uploads, scheduling, and status modifications</div>
          </div>
          <button className="modal-close" type="button" onClick={onClose} title="Close" aria-label="Close"><FiX size={16} /></button>
        </div>

        <div className="modal-stat-grid">
          <div className="modal-stat-card" style={{ background: "#f8faff", border: "1px solid #ededf8" }}>
            <span style={{ fontSize: 10.5, color: "#667085", fontWeight: 700, textTransform: "uppercase" }}>Logged Updates</span>
            <strong style={{ display: "block", fontSize: 16, color: "#10172f", marginTop: 3, fontWeight: 800 }}>{recentUpdates.length} Events</strong>
          </div>
          <div className="modal-stat-card" style={{ background: "#f3fbf6", border: "1px solid #d4f3e1" }}>
            <span style={{ fontSize: 10.5, color: "#16a34a", fontWeight: 700, textTransform: "uppercase" }}>Audit Sync</span>
            <strong style={{ display: "block", fontSize: 16, color: "#16a34a", marginTop: 3, fontWeight: 800 }}>100% OK</strong>
          </div>
          <div className="modal-stat-card" style={{ background: "#f8f8ff", border: "1px solid #ededf8" }}>
            <span style={{ fontSize: 10.5, color: "#0056c3", fontWeight: 700, textTransform: "uppercase" }}>Active Authors</span>
            <strong style={{ display: "block", fontSize: 16, color: "#0056c3", marginTop: 3, fontWeight: 800 }}>4 Staff</strong>
          </div>
        </div>

        <div className="modal-scroll-list">
          {recentUpdates.map((u) => {
            const IconComp = typeof u.icon === "function" ? u.icon : FiImage;
            return (
              <div key={u.id} style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "12px 14px", border: "1px solid #ededf8", borderRadius: 10, background: "#f8f9fc" }}>
                <div className={`update-icon ${u.tone}`} style={{ flexShrink: 0 }}>
                  <IconComp />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, flexWrap: "wrap" }}>
                    <strong style={{ fontSize: 13.5, fontWeight: 700, color: "#10172f" }}>{u.title}</strong>
                    <span style={{ fontSize: 10.5, fontWeight: 700, color: "#667085", background: "#ffffff", padding: "2px 8px", borderRadius: 999, border: "1px solid #ededf8", flexShrink: 0 }}>
                      {u.date} · {u.time}
                    </span>
                  </div>
                  <div style={{ fontSize: 12, color: "#4b5563", marginTop: 3, lineHeight: 1.4 }}>{u.text}</div>
                  <div style={{ fontSize: 10.5, color: "#8c95a6", marginTop: 4, fontWeight: 600 }}>Staff: {u.author}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="view-all-modal-footer">
          <span className="footer-note">
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#16a34a", display: "inline-block" }} />
            Immutable audit record
          </span>
          <div className="footer-actions">
            <button className="modal-secondary" type="button" onClick={onClose}>Close</button>
            <button className="modal-primary" type="button" onClick={() => { toast("Recent banner updates exported."); onClose(); }}>
              <FiDownload /> Export CSV
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function OptimizationNotesModal({ onAddNote, onClose, toast }) {
  return (
    <motion.div className="modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div
        className="modal view-all-modal"
        initial={{ y: 16, scale: 0.96 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: 16, scale: 0.96 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-head">
          <div>
            <h2>Banner Optimization Notes & Growth Tests</h2>
            <div style={{ fontSize: 11, color: "#667085", marginTop: 2 }}>Actionable conversion rate insights and visual testing recommendations</div>
          </div>
          <button className="modal-close" type="button" onClick={onClose} title="Close" aria-label="Close"><FiX size={16} /></button>
        </div>

        <div className="modal-stat-grid">
          <div className="modal-stat-card" style={{ background: "#f8faff", border: "1px solid #ededf8" }}>
            <span style={{ fontSize: 10.5, color: "#667085", fontWeight: 700, textTransform: "uppercase" }}>Total Notes</span>
            <strong style={{ display: "block", fontSize: 16, color: "#10172f", marginTop: 3, fontWeight: 800 }}>{optimizationNotes.length} Insights</strong>
          </div>
          <div className="modal-stat-card" style={{ background: "#f3fbf6", border: "1px solid #d4f3e1" }}>
            <span style={{ fontSize: 10.5, color: "#16a34a", fontWeight: 700, textTransform: "uppercase" }}>High Impact</span>
            <strong style={{ display: "block", fontSize: 16, color: "#16a34a", marginTop: 3, fontWeight: 800 }}>3 Tests</strong>
          </div>
          <div className="modal-stat-card" style={{ background: "#f8f8ff", border: "1px solid #ededf8" }}>
            <span style={{ fontSize: 10.5, color: "#0056c3", fontWeight: 700, textTransform: "uppercase" }}>Review Status</span>
            <strong style={{ display: "block", fontSize: 16, color: "#0056c3", marginTop: 3, fontWeight: 800 }}>100% Current</strong>
          </div>
        </div>

        <div className="modal-scroll-list">
          {optimizationNotes.map((n) => {
            const IconComp = typeof n.icon === "function" ? n.icon : FiTrendingUp;
            return (
              <div key={n.id} style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "12px 14px", border: "1px solid #ededf8", borderRadius: 10, background: "#f8f9fc" }}>
                <div className={`note-icon ${n.tone}`} style={{ flexShrink: 0 }}>
                  <IconComp />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, flexWrap: "wrap" }}>
                    <strong style={{ fontSize: 13.5, fontWeight: 700, color: "#10172f" }}>{n.title}</strong>
                    <span style={{ fontSize: 10.5, fontWeight: 700, color: "#667085", background: "#ffffff", padding: "2px 8px", borderRadius: 999, border: "1px solid #ededf8", flexShrink: 0 }}>
                      {n.date} · By {n.author}
                    </span>
                  </div>
                  <div style={{ fontSize: 12, color: "#4b5563", marginTop: 3, lineHeight: 1.4 }}>{n.text}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="view-all-modal-footer">
          <button className="secondarybtn" type="button" onClick={onAddNote} style={{ height: 36, fontSize: 12, fontWeight: 700, display: "inline-flex", alignItems: "center", gap: 6 }}>
            <FiPlus /> Add Note
          </button>
          <div className="footer-actions">
            <button className="modal-secondary" type="button" onClick={onClose}>Close</button>
            <button className="modal-primary" type="button" onClick={() => { toast("Optimization notes exported."); onClose(); }}>
              <FiDownload /> Export CSV
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function NoteModal({ onClose, onSave }) {
  const [note, setNote] = useState("");
  return (
    <motion.div className="modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.form
        className="modal"
        style={{ width: "min(480px, 100%)", borderRadius: 12, padding: "20px 22px" }}
        initial={{ y: 18, scale: .98 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: 18, scale: .98 }}
        onClick={(e) => e.stopPropagation()}
        onSubmit={(e) => { e.preventDefault(); if (note.trim()) onSave(note.trim()); }}
      >
        <div className="modal-head">
          <div>
            <h2>Add Optimization Note</h2>
            <div style={{ fontSize: 11, color: "#667085", marginTop: 2 }}>Record a new conversion observation or visual recommendation</div>
          </div>
          <button className="modal-close" type="button" onClick={onClose} title="Close" aria-label="Close"><FiX size={16} /></button>
        </div>
        <div className="form-grid" style={{ marginTop: 14 }}>
          <label className="form-field full">
            <span>Note Content</span>
            <textarea
              rows={4}
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Write a performance or optimization observation..."
              style={{ width: "100%", boxSizing: "border-box" }}
            />
          </label>
        </div>
        <div className="modal-actions" style={{ marginTop: 18, display: "flex", justifyContent: "flex-end", gap: 10 }}>
          <button className="modal-secondary" type="button" onClick={onClose}>Cancel</button>
          <button className="modal-primary" type="submit"><FiPlus /> Add Note</button>
        </div>
      </motion.form>
    </motion.div>
  );
}

export default function BannersManagement() {
  const [desktopSidebarOpen, setDesktopSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [banners, setBanners] = useState(initialBanners);
  const [tab, setTab] = useState("All Banners");
  const [search, setSearch] = useState("");
  const [placement, setPlacement] = useState("All Placements");
  const [status, setStatus] = useState("All Statuses");
  const [device, setDevice] = useState("All Devices");
  const [dateFilter, setDateFilter] = useState("Last 7 Days");
  const [rowMenuOpenId, setRowMenuOpenId] = useState(null);

  const [drawer, setDrawer] = useState(null);
  const [modal, setModal] = useState(null);
  const [noteOpen, setNoteOpen] = useState(false);
  const [mixModalOpen, setMixModalOpen] = useState(false);
  const [topPerformingModalOpen, setTopPerformingModalOpen] = useState(false);
  const [placementModalOpen, setPlacementModalOpen] = useState(false);
  const [previewsModalOpen, setPreviewsModalOpen] = useState(false);
  const [updatesModalOpen, setUpdatesModalOpen] = useState(false);
  const [notesModalOpen, setNotesModalOpen] = useState(false);
  const [toast, setToast] = useState(null);

  const handleToggleMenu = () => {
    if (window.innerWidth <= 1050) {
      setMobileMenuOpen((prev) => !prev);
    } else {
      setDesktopSidebarOpen((prev) => !prev);
    }
  };

  const showToast = (message) => {
    setToast({ title: "Banners Updated", message });
    setTimeout(() => setToast(null), 3000);
  };

  const filtered = useMemo(() => banners.filter((banner) => {
    const q = search.trim().toLowerCase();
    const searchOk = !q || banner.name.toLowerCase().includes(q) || banner.campaign.toLowerCase().includes(q) || banner.placement.toLowerCase().includes(q);
    const tabOk =
      tab === "All Banners" ||
      (tab === "Active" && banner.status === "Active") ||
      (tab === "Scheduled" && banner.status === "Scheduled") ||
      (tab === "Draft" && banner.status === "Draft") ||
      (tab === "Archived" && banner.status === "Archived");
    const placementOk = placement === "All Placements" || banner.placement === placement;
    const statusOk = status === "All Statuses" || banner.status === status;
    const deviceOk = device === "All Devices" || banner.device === "All" || banner.device === device;
    return searchOk && tabOk && placementOk && statusOk && deviceOk;
  }), [banners, tab, search, placement, status, device]);

  const exportCSV = () => {
    const rows = [
      ["Banner", "ID", "Placement", "Schedule", "Impressions", "Clicks", "CTR", "Status"],
      ...filtered.map((banner) => [banner.name, banner.id, banner.placement, banner.schedule, banner.impressions, banner.clicks, `${banner.ctr}%`, banner.status])
    ];
    const csv = rows.map((row) => row.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(",")).join("\n");
    const url = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
    const a = document.createElement("a");
    a.href = url; a.download = "banners.csv"; a.click();
    URL.revokeObjectURL(url);
    showToast("Banner report exported successfully.");
  };

  const saveBanner = (banner) => {
    setBanners((current) => {
      const exists = current.some((item) => item.id === banner.id);
      return exists ? current.map((item) => item.id === banner.id ? banner : item) : [banner, ...current];
    });
    setModal(null);
    setDrawer(null);
    showToast(`Banner ${banner.id} saved successfully.`);
  };

  const duplicateBanner = (banner) => {
    const copy = { ...banner, id: `BNR-${String(Date.now()).slice(-3)}`, name: `${banner.name} Copy`, status: "Draft" };
    setBanners((current) => [copy, ...current]);
    showToast(`${banner.name} duplicated as draft.`);
  };

  const archiveBanner = (id) => {
    setBanners((current) => current.map((item) => item.id === id ? { ...item, status: item.status === "Archived" ? "Draft" : "Archived" } : item));
    setDrawer((current) => current?.id === id ? { ...current, status: current.status === "Archived" ? "Draft" : "Archived" } : current);
    showToast("Banner status updated.");
  };

  const kpis = [
    ["Total Banners", "128", "+15.3%", "vs last 7 days", "success", FiImage],
    ["Active Banners", "42", "+12.7%", "vs last 7 days", "success", FiCheckCircle],
    ["Scheduled", "18", "+9.4%", "vs last 7 days", "warning", FiClock],
    ["Draft Banners", "21", "+5.0%", "vs last 7 days", "purple", FiFileText],
    ["Avg. CTR", "4.8%", "+0.6%", "vs last 7 days", "trust", FiBarChart2],
    ["Conversion Rate", "3.2%", "-0.4%", "vs last 7 days", "danger", FiTarget],
  ];

  const tabs = [
    ["All Banners", 128],
    ["Active", 42],
    ["Scheduled", 18],
    ["Draft", 21],
    ["Archived", 47],
  ];

  return (
    <div className="banner-scope">
      <style>{bannersCss}</style>

      <div className="banner-shell">
        <div className={`desktop-sidebar-wrapper ${!desktopSidebarOpen ? "is-closed" : ""}`}>
          <AdminSidebar activePage="Banners" onClose={() => setDesktopSidebarOpen(false)} />
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <AdminSidebar activePage="Banners" mobile onClose={() => setMobileMenuOpen(false)} />
          )}
        </AnimatePresence>

        <main className="banner-main">
          <AdminTopbar onToggleMenu={handleToggleMenu} desktopSidebarOpen={desktopSidebarOpen} />

          <div className="banner-content">
            {/* Header */}
            <div className="pagehead">
              <div>
                <h1>Banners Management</h1>
                <p>Create, schedule, track, and optimize promotional banners across your storefront.</p>
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                <button className="secondarybtn" onClick={exportCSV}><FiDownload /> Export</button>
                <button className="primarybtn" onClick={() => setModal({ mode: "create" })}><FiPlus /> Create Banner</button>
              </div>
            </div>

            {/* KPI Cards */}
            <section className="kpi-grid">
              {kpis.map((x) => (
                <KpiCard key={x[0]} item={x} />
              ))}
            </section>

            {/* Full Width Banner Table Panel */}
            <section className="panel-section">
              <div className={`banners-split ${drawer ? "has-selected" : ""}`}>
                <div className="panel" style={{ margin: 0 }}>
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
                        placeholder="Search banners, campaigns..."
                      />
                    </label>

                    <MasterDropdown
                      options={[{ value: "All Placements", label: "All Placements" }, "Home Hero", "Homepage Promo Strip", "Category Hero", "Mobile Home Top", "Search Results Top"]}
                      value={placement}
                      onChange={setPlacement}
                    />

                    <MasterDropdown
                      options={[{ value: "All Statuses", label: "All Statuses" }, "Active", "Scheduled", "Draft", "Archived"]}
                      value={status}
                      onChange={setStatus}
                    />

                    <MasterDropdown
                      options={[{ value: "All Devices", label: "All Devices" }, "Desktop", "Mobile"]}
                      value={device}
                      onChange={setDevice}
                    />

                    <MasterDatePicker value={dateFilter} onChange={setDateFilter} rightAlign />

                    <button className="filterbtn" onClick={() => showToast("Filter options applied.")}>
                      <FiFilter /> Filters
                    </button>
                  </div>

                  {/* Desktop Table */}
                  <div className="table-scroll">
                    <table className="banner-table">
                      <thead>
                        <tr>
                          <th>Banner</th>
                          <th>Placement</th>
                          <th>Schedule</th>
                          <th>Impressions</th>
                          <th>Clicks</th>
                          <th>CTR</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filtered.map((b) => (
                          <tr
                            key={b.id}
                            className={drawer?.id === b.id ? "selected" : ""}
                            style={{
                              position: "relative",
                              zIndex: rowMenuOpenId === b.id ? 80 : 1,
                            }}
                          >
                            <td>
                              <div className="banner-cell">
                                <div className="banner-thumb">
                                  <img src={bannerImages[b.image]} alt="" />
                                </div>
                                <div className="banner-name">
                                  <strong>{b.name}</strong>
                                  <small>ID: {b.id}</small>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="placement-cell">
                                <PlacementIcon type={b.placementIcon} />
                                <span>{b.placement}</span>
                              </div>
                            </td>
                            <td>{b.schedule}</td>
                            <td>{b.impressions.toLocaleString("en-IN")}</td>
                            <td>{b.clicks.toLocaleString("en-IN")}</td>
                            <td><span className={`ctr ${ctrTone(b.ctr)}`}>{b.ctr.toFixed(1)}%</span></td>
                            <td><StatusPill status={b.status} /></td>
                            <td style={{ position: "relative", zIndex: rowMenuOpenId === b.id ? 90 : 1 }}>
                              <div className="rowactions" style={{ position: "relative", zIndex: rowMenuOpenId === b.id ? 90 : 1 }}>
                                <button
                                  title="View Details"
                                  className={drawer?.id === b.id ? "active-action" : ""}
                                  onClick={() => setDrawer(curr => curr?.id === b.id ? null : b)}
                                >
                                  <FiEye />
                                </button>
                                <div style={{ position: "relative" }}>
                                  <button title="More Actions" onClick={() => setRowMenuOpenId((curr) => (curr === b.id ? null : b.id))}>
                                    <FiMoreVertical />
                                  </button>
                                  <AnimatePresence>
                                    {rowMenuOpenId === b.id && (
                                      <RowMenu
                                        banner={b}
                                        onEdit={(banner) => setModal({ mode: "edit", banner })}
                                        onArchive={archiveBanner}
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
                    renderItem={(b) => (
                      <MobileTableCard
                        key={b.id}
                        title={b.name}
                        subtitle={`ID: ${b.id}`}
                        badge={<StatusPill status={b.status} />}
                        meta={[
                          { label: "Placement", value: b.placement },
                          { label: "Schedule", value: b.schedule },
                          { label: "Impressions", value: b.impressions.toLocaleString("en-IN") },
                          { label: "Clicks / CTR", value: `${b.clicks.toLocaleString("en-IN")} (${b.ctr.toFixed(1)}%)` },
                        ]}
                        actions={
                          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, width: "100%" }}>
                            <button
                              type="button"
                              className="mobile-table-card-action-btn"
                              onClick={() => setDrawer((curr) => (curr?.id === b.id ? null : b))}
                            >
                              <FiEye /> View Details
                            </button>
                            <button
                              type="button"
                              className="mobile-table-card-action-btn"
                              onClick={() => archiveBanner(b.id)}
                              style={{
                                color: b.status === "Archived" ? "#0056c3" : "#d32f2f",
                                borderColor: b.status === "Archived" ? "#c2c6d5" : "#f5c6cb",
                              }}
                            >
                              {b.status === "Archived" ? (
                                <>
                                  <FiRefreshCw /> Restore
                                </>
                              ) : (
                                <>
                                  <FiArchive /> Archive
                                </>
                              )}
                            </button>
                          </div>
                        }
                      />
                    )}
                  />

                  {/* Table Footer */}
                  <div className="footerbar">
                    <span>Showing 1–{filtered.length} of {filtered.length} banners</span>
                    <div className="pagination">
                      <button>‹</button>
                      <button className="active">1</button>
                      <button>2</button>
                      <button>›</button>
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
                        title="Banner Details"
                        onClose={() => setDrawer(null)}
                        onEdit={(b) => { setDrawer(null); setModal({ mode: "edit", banner: b }); }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </section>

            {/* Performance & Placement Summary Grid (Positioned Directly Below Table) */}
            <section className="summary-grid">
              <section className="side-card">
                <div className="card-head">
                  <h3>Banner Performance Mix</h3>
                  <button type="button" onClick={() => setMixModalOpen(true)}>View all</button>
                </div>
                <div style={{ cursor: "pointer", flex: 1, display: "flex" }} onClick={() => setMixModalOpen(true)}>
                  <MasterPieChart
                    centerTitle="TOTAL BANNERS"
                    centerValue="128"
                    data={performanceMix.map(item => ({ label: item.label, percent: item.percent, count: item.count, color: item.color }))}
                    conicGradient="conic-gradient(#7c4dff 0 38%, #fd661d 38% 60%, #0056c3 60% 78%, #16a34a 78% 90%, #10172f 90% 100%)"
                    shape="circle"
                    onItemClick={() => setMixModalOpen(true)}
                  />
                </div>
              </section>

              <section className="side-card">
                <div className="card-head">
                  <h3>Top Performing Banners</h3>
                  <button type="button" onClick={() => setTopPerformingModalOpen(true)}>View all</button>
                </div>
                <div className="performing-list">
                  {banners.slice(0, 3).map((b) => (
                    <div className="performing-item" key={b.id} onClick={() => setTopPerformingModalOpen(true)}>
                      <div className="performing-thumb">
                        <img src={bannerImages[b.image]} alt={b.name} />
                      </div>
                      <div className="performing-info">
                        <strong>{b.name}</strong>
                        <small>{b.placement} · {b.impressions.toLocaleString()} Impr</small>
                      </div>
                      <div className="performing-right">
                        <strong>{b.ctr.toFixed(1)}% CTR</strong>
                        <small>+15.4%</small>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="side-card">
                <div className="card-head"><h3>Placement Summary</h3><button type="button" onClick={() => setPlacementModalOpen(true)}>View all</button></div>
                <div className="placement-summary">
                  <div className="placement-summary-head"><span>Placement</span><span style={{ textAlign: "right" }}>Impressions</span><span style={{ textAlign: "right" }}>CTR</span></div>
                  {placementSummary.map((item) => (
                    <div className="placement-summary-row" key={item.label}>
                      <div className="placement-name">
                        <div className="placement-icon-wrap" style={{ color: item.color }}>
                          <PlacementIcon type={item.icon} />
                        </div>
                        <div style={{ minWidth: 0, flex: 1 }}>
                          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                            <span style={{ fontSize: 12, fontWeight: 500, color: "#10172f" }}>{item.label}</span>
                            <span style={{ fontSize: 9.5, fontWeight: 500, color: "#64748b", background: "#f1f5f9", padding: "1px 5px", borderRadius: 3 }}>
                              {item.activeBanners} active
                            </span>
                          </div>
                          <div className="placement-bar-wrap">
                            <i className="placement-bar" style={{ background: item.color, width: item.fillRate }} />
                          </div>
                        </div>
                      </div>
                      <span style={{ textAlign: "right", fontWeight: 500, fontSize: 11.5, color: "#10172f" }}>{item.impressions}</span>
                      <span style={{ textAlign: "right", fontWeight: 500, fontSize: 11.5, color: "var(--admin-green, #16a34a)" }}>{item.ctr}</span>
                    </div>
                  ))}
                </div>
              </section>
            </section>

            {/* Bottom Cards Grid */}
            <section className="bottom-grid">
              <ActiveBannersCard
                title="Active Banner Previews"
                actionLabel="View all"
                onAction={() => setPreviewsModalOpen(true)}
              />

              <DashboardListCard
                title="Recent Banner Updates"
                actionLabel="View all"
                onAction={() => setUpdatesModalOpen(true)}
                items={recentUpdates.map((u) => ({
                  id: u.id,
                  icon: u.icon,
                  iconStyle: u.tone,
                  title: u.title,
                  subtitle: u.text,
                  value: `${u.date} · ${u.time}`,
                  valueStyle: { fontSize: "11px", fontWeight: 600, color: "var(--admin-muted)" },
                }))}
              />

              <DashboardListCard
                title="Optimization Notes"
                actionLabel="View all"
                onAction={() => setNotesModalOpen(true)}
                items={optimizationNotes.map((n) => ({
                  id: n.id,
                  icon: n.icon,
                  iconStyle: n.tone,
                  title: n.title,
                  subtitle: `${n.date} · By ${n.author}`,
                }))}
              />
            </section>
          </div>
        </main>
      </div>

      {/* 1. Banner Performance Mix Modal */}
      <AnimatePresence>
        {mixModalOpen && (
          <BannerPerformanceMixModal
            onClose={() => setMixModalOpen(false)}
            toast={(msg) => showToast(msg)}
          />
        )}
      </AnimatePresence>

      {/* 2. Top Performing Banners Modal */}
      <AnimatePresence>
        {topPerformingModalOpen && (
          <TopPerformingBannersModal
            banners={banners}
            onClose={() => setTopPerformingModalOpen(false)}
            toast={(msg) => showToast(msg)}
          />
        )}
      </AnimatePresence>

      {/* 3. Placement Summary Modal */}
      <AnimatePresence>
        {placementModalOpen && (
          <PlacementSummaryModal
            onClose={() => setPlacementModalOpen(false)}
            toast={(msg) => showToast(msg)}
          />
        )}
      </AnimatePresence>

      {/* 4. Active Banner Previews Modal */}
      <AnimatePresence>
        {previewsModalOpen && (
          <ActiveBannerPreviewsModal
            banners={banners}
            onClose={() => setPreviewsModalOpen(false)}
            toast={(msg) => showToast(msg)}
          />
        )}
      </AnimatePresence>

      {/* 5. Recent Banner Updates Modal */}
      <AnimatePresence>
        {updatesModalOpen && (
          <RecentBannerUpdatesModal
            onClose={() => setUpdatesModalOpen(false)}
            toast={(msg) => showToast(msg)}
          />
        )}
      </AnimatePresence>

      {/* 6. Optimization Notes Modal */}
      <AnimatePresence>
        {notesModalOpen && (
          <OptimizationNotesModal
            onAddNote={() => { setNotesModalOpen(false); setNoteOpen(true); }}
            onClose={() => setNotesModalOpen(false)}
            toast={(msg) => showToast(msg)}
          />
        )}
      </AnimatePresence>

      {/* Modal */}
      <AnimatePresence>
        {modal && (
          <BannerModal
            initial={modal.mode === "edit" ? modal.banner : null}
            onClose={() => setModal(null)}
            onSave={saveBanner}
          />
        )}
      </AnimatePresence>

      {/* Note Modal */}
      <AnimatePresence>
        {noteOpen && (
          <NoteModal
            onClose={() => setNoteOpen(false)}
            onSave={(note) => { setNoteOpen(false); showToast("Optimization note saved."); }}
          />
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
