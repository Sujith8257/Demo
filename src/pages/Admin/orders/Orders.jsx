import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import AdminSidebar from "../../../components/Admin/AdminSidebar";
import OrdersTable from "../../../components/Admin/OrdersTable";
import AdminTopbar from "../../../components/Admin/AdminTopbar";
import KpiCard from "../../../components/Admin/KpiCard";
import MasterDropdown from "../../../components/Admin/MasterDropdown";
import AnimatedCheckbox from "../../../components/Admin/AnimatedCheckbox";
import MasterDatePicker from "../../../components/Admin/MasterDatePicker";
import IntegrationDetailsDrawer from "../../../components/Admin/IntegrationDetailsDrawer";
import SearchableDatabaseSelect from "../../../components/Admin/SearchableDatabaseSelect";
import { fetchAllCustomers, registerOrder } from "../../../data/mockDatabase";
import { FiCheckCircle } from "react-icons/fi";
import {
  FiAlertTriangle, FiBarChart2, FiBell, FiBox, FiCalendar, FiCheck,
  FiChevronDown, FiChevronLeft, FiChevronRight, FiClock, FiCreditCard,
  FiDownload, FiEye, FiExternalLink, FiFilter, FiGift, FiHeadphones, FiHome,
  FiImage, FiMenu, FiMinus, FiMoreVertical, FiPackage, FiPlus, FiPrinter, FiRefreshCw,
  FiRotateCcw, FiSearch, FiSettings, FiShoppingBag, FiStar, FiTag, FiTrash2, FiTrendingUp,
  FiTruck, FiUser, FiUsers, FiX
} from "react-icons/fi";

const ordersCss = `
.orders-scope {
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
.orders-scope * { box-sizing: border-box; }

.orders-split {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  align-items: start;
  margin-bottom: 18px;
  transition: grid-template-columns 0.25s ease;
}
.orders-split.has-selected {
  grid-template-columns: minmax(0, 1.62fr) minmax(330px, 0.78fr);
}

.orders-shell { display: flex; min-height: 100vh; background: var(--admin-surface); color: var(--admin-text); }
.orders-main { flex: 1; min-width: 0; }

.desktop-sidebar-wrapper {
  width: 256px;
  flex-shrink: 0;
  transition: all .25s ease;
}
.desktop-sidebar-wrapper.is-closed {
  display: none;
}

.orders-content { padding: 24px 28px 36px; }

.pagehead { display: flex; justify-content: space-between; gap: 20px; align-items: flex-end; margin-bottom: 22px; }
.pagehead h1 { margin: 0; font-size: 30px; letter-spacing: -.02em; font-weight: 800; line-height: 1.2; }
.pagehead p { margin: 6px 0 0; font-size: 13.5px; color: var(--admin-muted); font-weight: 500; }

.primarybtn, .secondarybtn { height: 42px; border-radius: 10px; padding: 0 18px; display: flex; align-items: center; gap: 9px; font-size: 13px; font-weight: 700; cursor: pointer; transition: all .18s; }
.primarybtn { border: 0; background: var(--admin-orange); color: #fff; box-shadow: 0 4px 10px rgba(253,102,29,.25); }
.primarybtn:hover { background: #e25510; }
.secondarybtn { border: 1px solid var(--admin-outline); background: #fff; color: var(--admin-text); box-shadow: var(--admin-shadow); }
.secondarybtn:hover { background: var(--admin-surface-low); border-color: var(--admin-primary-2); color: var(--admin-primary-2); }

@media (max-width: 1050px) {
  .orders-scope .desktop-sidebar-wrapper { display: none !important; }
}

@media (max-width: 768px) {
  .orders-scope { max-width: 100vw; overflow-x: clip; }
  .orders-content { padding: 14px 12px 28px !important; max-width: 100vw; overflow-x: clip; box-sizing: border-box; }
  .pagehead { flex-direction: row !important; align-items: center !important; justify-content: space-between !important; gap: 10px !important; margin-bottom: 16px !important; }
  .pagehead h1 { font-size: 22px !important; }
  .pagehead p { font-size: 12px !important; line-height: 1.4 !important; }
  .pagehead > div:last-child { display: flex !important; gap: 8px !important; flex-shrink: 0 !important; }
  .primarybtn, .secondarybtn { height: 38px !important; padding: 0 14px !important; font-size: 12px !important; }
  .filters { display: grid !important; grid-template-columns: repeat(2, minmax(0, 1fr)) !important; gap: 8px !important; padding: 10px 12px !important; width: 100% !important; box-sizing: border-box !important; }
  .filters .search-field, .filters label.field { grid-column: 1 / -1 !important; max-width: 100% !important; width: 100% !important; flex: none !important; height: 38px !important; }
  .filters .master-dropdown { width: 100% !important; min-width: 0 !important; }
  .filters .master-dropdown-trigger { width: 100% !important; height: 38px !important; display: flex !important; justify-content: space-between !important; }
  .filters .master-date-picker { width: 100% !important; min-width: 0 !important; }
  .filters .master-date-trigger { width: 100% !important; height: 38px !important; display: flex !important; justify-content: space-between !important; }
  .filters .filterbtn { grid-column: 1 / -1 !important; width: 100% !important; height: 38px !important; justify-content: center !important; }
  .selbar { flex-wrap: wrap !important; gap: 8px !important; }
  .selbar .spacer { display: none !important; }
}

@media (max-width: 480px) {
  .pagehead { flex-direction: column !important; align-items: flex-start !important; gap: 10px !important; }
  .pagehead > div:last-child { width: 100% !important; display: flex !important; gap: 8px !important; }
  .primarybtn, .secondarybtn { flex: 1 !important; justify-content: center !important; height: 40px !important; }
}

.orders-scope .kpi-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(150px, 1fr));
  gap: 14px;
  margin-bottom: 20px;
}
@media (max-width: 1250px) {
  .orders-scope .kpi-grid { grid-template-columns: repeat(3, 1fr); }
}
@media (max-width: 720px) {
  .orders-scope .kpi-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 440px) {
  .orders-scope .kpi-grid { grid-template-columns: 1fr; }
}

.panel { background: #fff; border: 1px solid var(--admin-outline); border-radius: 12px; box-shadow: var(--admin-shadow); overflow: hidden; }
.tabs { display: flex; gap: 2px; overflow-x: auto; padding: 0 10px; border-bottom: 1px solid var(--admin-surface-mid); scrollbar-width: none; }
.tabs::-webkit-scrollbar { display: none; }
.tab { height: 44px; border: 0; background: transparent; padding: 0 12px; font-size: 12px; font-weight: 800; color: var(--admin-text); position: relative; white-space: nowrap; cursor: pointer; }
.tab b { margin-left: 5px; padding: 3px 6px; border-radius: 999px; background: var(--admin-surface-mid); font-size: 10px; font-weight: 800; color: var(--admin-text); }
.tab.active { color: var(--admin-primary-2); }
.tab.active:after { content: ""; position: absolute; left: 8px; right: 8px; bottom: 0; height: 2px; background: var(--admin-primary-2); }
.filters { padding: 12px; display: flex; align-items: center; gap: 8px; flex-wrap: wrap; border-bottom: 1px solid var(--admin-surface-mid); }
.filters .search-field { flex: 1 1 240px; max-width: 320px; }
.field { height: 38px; border: 1px solid var(--admin-outline); border-radius: 8px; background: #fff; display: flex; align-items: center; gap: 8px; padding: 0 10px; font-size: 12px; font-weight: 800; color: var(--admin-text); }
.field input, .field select { border: 0; outline: 0; width: 100%; background: transparent; font-size: 12px; font-weight: 800; color: var(--admin-text); }
.filterbtn { height: 38px; border: 1px solid var(--admin-outline); background: #fff; border-radius: 8px; padding: 0 12px; display: flex; align-items: center; gap: 7px; font-size: 12px; font-weight: 800; color: var(--admin-text); cursor: pointer; }
.selbar { display: flex; align-items: center; gap: 10px; padding: 10px 12px; border-bottom: 1px solid var(--admin-surface-mid); }
.selbar strong { font-size: 12px; font-weight: 800; color: var(--admin-text); }
.selbar span { font-size: 11px; color: var(--admin-muted); font-weight: 500; }
.selbar .spacer { margin-left: auto; }
.smallbtn { height: 34px; border: 1px solid var(--admin-outline); background: #fff; border-radius: 8px; padding: 0 12px; font-size: 12px; font-weight: 800; color: var(--admin-text); cursor: pointer; display: inline-flex; align-items: center; justify-content: center; gap: 6px; white-space: nowrap; }
.smallbtn svg { font-size: 13px; flex-shrink: 0; }
.clear { border: 0; background: transparent; color: var(--admin-primary-2); font-size: 11px; font-weight: 800; cursor: pointer; }
.dropdown { position: absolute; right: 0; top: calc(100% + 4px); min-width: 160px; background: #fff; border: 1px solid var(--admin-outline); border-radius: 9px; box-shadow: 0 8px 24px rgba(25,27,35,.12); z-index: 50; padding: 4px; display: grid; gap: 2px; }
.dropdown button { width: 100%; height: 34px; border: 0; background: transparent; border-radius: 6px; text-align: left; padding: 0 10px; font-size: 12px; font-weight: 700; color: var(--admin-text); cursor: pointer; }
.dropdown button:hover { background: var(--admin-surface-low); color: var(--admin-primary-2); }

.status-modal-wrap {
  position: fixed; inset: 0; z-index: 120; background: rgba(25,27,35,.55);
  backdrop-filter: blur(4px); display: grid; place-items: center; padding: 20px;
}
.status-modal {
  width: min(520px, 100%); background: #fff; border: 1px solid var(--admin-outline);
  border-radius: 14px; box-shadow: 0 20px 60px rgba(25,27,35,.18); overflow: visible;
}
.status-modal-head {
  display: flex; align-items: flex-start; justify-content: space-between; gap: 16px;
  padding: 18px 18px 14px; border-bottom: 1px solid var(--admin-surface-mid);
}
.status-modal-head small {
  display: block; font-size: 11px; font-weight: 800; letter-spacing: .12em; color: var(--admin-primary);
}
.status-modal-head h2 { margin: 4px 0 0; font-size: 20px; font-weight: 800; letter-spacing: -.02em; color: var(--admin-text); }
.status-modal-body { padding: 18px; display: grid; gap: 15px; }
.status-context {
  display: flex; align-items: center; justify-content: space-between; gap: 12px;
  padding: 12px; border: 1px solid var(--admin-surface-mid); background: var(--admin-surface-low); border-radius: 99px;
}
.status-context span { font-size: 12px; color: var(--admin-muted); font-weight: 600; }
.status-context strong { font-size: 13px; font-weight: 800; color: var(--admin-text); }
.form-field { display: grid; gap: 7px; }
.form-field label { font-size: 12px; font-weight: 800; color: var(--admin-text); }
.form-field select, .form-field input, .form-field textarea {
  width: 100%; border: 1px solid var(--admin-outline); background: #fff; border-radius: 9px;
  color: var(--admin-text); outline: none; font-size: 13px; font-weight: 600;
}
.form-field select, .form-field input { height: 42px; padding: 0 11px; }
.form-field textarea { min-height: 84px; padding: 10px 11px; resize: vertical; }
.form-field select:focus, .form-field input:focus, .form-field textarea:focus {
  border-color: var(--admin-primary-2); box-shadow: 0 0 0 3px rgba(0,86,195,.08);
}
.notify-row {
  display: flex; align-items: flex-start; gap: 9px; padding: 11px; border: 1px solid var(--admin-surface-mid);
  border-radius: 9px; background: #fff; cursor: pointer;
}
.notify-row input { margin-top: 2px; accent-color: var(--admin-primary); width: 16px; height: 16px; }
.notify-row strong { display: block; font-size: 12.5px; font-weight: 800; color: var(--admin-text); }
.notify-row small { display: block; font-size: 11px; color: var(--admin-muted); margin-top: 2px; line-height: 1.45; font-weight: 500; }
.status-modal-actions {
  display: flex; justify-content: flex-end; gap: 8px; padding: 14px 18px 18px;
  border-top: 1px solid var(--admin-surface-mid);
}
.status-modal-actions button:disabled { opacity: .45; cursor: not-allowed; }
.toast {
  position: fixed; right: 18px; top: 80px; z-index: 140; min-width: 280px; max-width: 380px;
  display: flex; align-items: flex-start; gap: 10px; padding: 12px 14px; border-radius: 10px;
  background: #fff; border: 1px solid #ccebd7; box-shadow: 0 14px 36px rgba(25,27,35,.14);
}
.toast-icon {
  width: 28px; height: 28px; border-radius: 50%; background: #def6e5; color: #138a42;
  display: grid; place-items: center; flex: 0 0 auto; font-weight: 800;
}
.toast strong { display: block; font-size: 12.5px; font-weight: 800; color: var(--admin-text); }
.toast small { display: block; margin-top: 2px; color: var(--admin-muted); font-size: 11px; line-height: 1.4; font-weight: 500; }
.timeline-dot.done { background: #149047; }
.timeline-dot.current { background: var(--admin-orange); box-shadow: 0 0 0 4px rgba(253,102,29,.12); }
.timeline-dot.future { background: #cbd0dc; }

.create-order-wrap {
  position: fixed; inset: 0; z-index: 125; background: rgba(25,27,35,.55);
  backdrop-filter: blur(4px); display: grid; place-items: center; padding: 20px;
}
.create-order-modal {
  width: min(880px, 100%); max-height: 92vh; overflow-y: auto; background: #fff;
  border: 1px solid var(--admin-outline); border-radius: 14px;
  box-shadow: 0 24px 70px rgba(25,27,35,.2);
}
.create-order-head {
  position: sticky; top: 0; z-index: 3; background: #fff;
  display: flex; align-items: flex-start; justify-content: space-between; gap: 16px;
  padding: 18px 20px 14px; border-bottom: 1px solid var(--admin-surface-mid);
}
.create-order-head small {
  display: block; font-size: 11px; font-weight: 800; letter-spacing: .12em; color: var(--admin-primary);
}
.create-order-head h2 { margin: 4px 0 0; font-size: 21px; font-weight: 800; letter-spacing: -.02em; color: var(--admin-text); }
.create-order-body { padding: 18px 20px 20px; }
.create-section {
  border: 1px solid var(--admin-surface-mid); border-radius: 10px; background: #fff;
  padding: 15px; margin-bottom: 12px;
}
.create-section-head {
  display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 12px;
}
.create-section-head h3 { margin: 0; font-size: 14px; font-weight: 800; color: var(--admin-text); }
.create-section-head span { font-size: 11px; color: var(--admin-muted); font-weight: 600; }
.create-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; }
.create-grid.three { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.create-field { display: grid; gap: 6px; min-width: 0; }
.create-field.full { grid-column: 1/-1; }
.create-field label { font-size: 12px; font-weight: 800; color: var(--admin-text); }
.create-field input, .create-field select, .create-field textarea {
  width: 100%; border: 1px solid var(--admin-outline); background: #fff; border-radius: 9px;
  color: var(--admin-text); outline: none; font-size: 13px; font-weight: 600;
}
.create-field input, .create-field select { height: 42px; padding: 0 11px; }
.create-field textarea { min-height: 76px; padding: 10px 11px; resize: vertical; }
.create-field input:focus, .create-field select:focus, .create-field textarea:focus {
  border-color: var(--admin-primary-2); box-shadow: 0 0 0 3px rgba(0,86,195,.08);
}
.modal-field-dropdown { width: 100% !important; display: block !important; position: relative !important; }
.modal-field-dropdown .master-dropdown-trigger { width: 100% !important; height: 42px !important; padding: 0 11px !important; border: 1px solid var(--admin-outline) !important; border-radius: 9px !important; background: #fff !important; justify-content: space-between !important; font-size: 13px !important; font-weight: 600 !important; color: var(--admin-text) !important; }
.modal-field-dropdown .master-dropdown-trigger:hover { border-color: var(--admin-primary-2) !important; }
.modal-field-dropdown .master-dropdown-label { font-size: 13px !important; font-weight: 600 !important; color: var(--admin-text) !important; }
.modal-field-dropdown .master-dropdown-menu { width: 100% !important; max-height: 200px !important; overflow-y: auto !important; z-index: 99999 !important; box-shadow: 0 16px 40px rgba(16, 24, 40, 0.2) !important; }

.db-fetch-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 5px;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  gap: 6px;
  flex-wrap: wrap;
}
.db-fetch-label {
  font-size: 12px;
  font-weight: 800;
  color: var(--admin-text);
  line-height: 1.4;
  margin: 0;
  max-width: 100%;
  word-break: break-word;
  overflow-wrap: break-word;
}
.db-fetch-hint {
  font-weight: 600;
  color: #0056c3;
  font-size: 11.5px;
}
.db-fetch-badge-success {
  font-size: 11px;
  font-weight: 700;
  color: #138a42;
  background: #def6e5;
  padding: 2px 8px;
  border-radius: 999px;
  white-space: nowrap;
  flex-shrink: 0;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
}
.line-items { display: grid; gap: 8px; }
.line-item {
  display: grid; grid-template-columns: minmax(0, 1.6fr) 120px 120px 38px;
  gap: 8px; align-items: end; padding: 10px; border: 1px solid var(--admin-surface-mid);
  border-radius: 9px; background: var(--admin-surface-low);
}
.qty-control {
  height: 42px; border: 1px solid var(--admin-outline); border-radius: 9px; background: #fff;
  display: grid; grid-template-columns: 34px 1fr 34px; align-items: center;
}
.qty-control button { height: 100%; border: 0; background: transparent; display: grid; place-items: center; color: var(--admin-text); cursor: pointer; }
.qty-control strong { text-align: center; font-size: 13px; font-weight: 800; color: var(--admin-text); }
.line-total {
  height: 42px; border: 1px solid var(--admin-surface-mid); border-radius: 9px; background: #fff;
  display: flex; align-items: center; justify-content: flex-end; padding: 0 10px; font-size: 13px; font-weight: 800; color: var(--admin-text);
}
.delete-line {
  width: 38px; height: 42px; border: 1px solid var(--admin-outline); border-radius: 9px; background: #fff;
  color: var(--admin-red); display: grid; place-items: center; font-size: 16px; cursor: pointer; transition: all .18s;
}
.delete-line:hover { background: #ffe2df; }
.add-line {
  height: 38px; border: 1px dashed var(--admin-primary-2); border-radius: 9px; background: #f7faff;
  color: var(--admin-primary); padding: 0 14px; display: flex; align-items: center; gap: 7px;
  font-size: 12px; font-weight: 800; cursor: pointer; transition: background .18s;
}
.add-line:hover { background: #ebf3ff; }
.order-summary-box {
  display: grid; grid-template-columns: 1fr 320px; gap: 14px; align-items: start;
}
.order-note {
  padding: 14px; border: 1px solid var(--admin-surface-mid); border-radius: 9px; background: var(--admin-surface-low);
  font-size: 12px; color: var(--admin-muted); line-height: 1.6; font-weight: 500;
}
.totals-card {
  border: 1px solid var(--admin-surface-mid); border-radius: 10px; background: #fff; padding: 14px;
}
.total-row {
  display: flex; justify-content: space-between; gap: 12px; padding: 7px 0;
  font-size: 12.5px; color: var(--admin-muted); font-weight: 500;
}
.total-row strong { color: var(--admin-text); font-weight: 800; }
.total-row.grand {
  margin-top: 5px; padding-top: 11px; border-top: 1px solid var(--admin-surface-mid);
  font-size: 14.5px; font-weight: 800; color: var(--admin-text);
}
.create-order-actions {
  position: sticky; bottom: 0; z-index: 3; background: #fff; border-top: 1px solid var(--admin-surface-mid);
  padding: 14px 20px 18px; display: flex; justify-content: flex-end; gap: 8px;
}
.create-order-actions button:disabled { opacity: .45; cursor: not-allowed; }

.overlay { position: fixed; inset: 0; background: rgba(25,27,35,.55); backdrop-filter: blur(4px); z-index: 99; }
.drawer { position: absolute; right: 0; top: 0; height: 100%; width: min(540px,100%); background: #fff; padding: 24px; overflow-y: auto; box-shadow: -8px 0 32px rgba(0,0,0,.15); }
.drawerhead { display: flex; justify-content: space-between; align-items: center; padding-bottom: 16px; border-bottom: 1px solid var(--admin-surface-mid); }
.drawerhead small { color: var(--admin-text); font-weight: 800; font-size: 11.5px; letter-spacing: .04em; }
.drawerhead h2 { margin: 0; font-size: 24px; font-weight: 500; color: var(--admin-muted); }
.order-summary { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 18px; }
.info-card { border: 1px solid var(--admin-surface-mid); border-radius: 10px; padding: 14px; background: var(--admin-surface-low); }
.info-card span { font-size: 12px; color: var(--admin-text); font-weight: 800; display: block; }
.info-card strong { display: block; margin-top: 4px; font-size: 13px; font-weight: 500; color: var(--admin-muted); }
.detail-section { margin-top: 22px; }
.detail-section h3 { font-size: 14.5px; font-weight: 800; color: var(--admin-text); margin: 0 0 12px; }
.productline { display: grid; grid-template-columns: 48px 1fr auto; gap: 12px; align-items: center; padding: 12px 0; border-bottom: 1px solid var(--admin-surface-mid); }
.productthumb { width: 48px; height: 48px; border-radius: 99px; background: var(--admin-surface-mid); display: grid; place-items: center; color: var(--admin-primary-2); font-weight: 800; font-size: 13px; }
.productline strong { display: block; font-size: 13px; font-weight: 500; color: var(--admin-muted); }
.productline small { display: block; font-size: 11px; color: var(--admin-text); font-weight: 800; margin-top: 2px; }
.timeline { display: grid; gap: 14px; margin-top: 12px; }
.timeline-row { display: grid; grid-template-columns: 20px 1fr; gap: 12px; }
.timeline-dot { width: 12px; height: 12px; border-radius: 50%; background: var(--admin-primary-2); margin-top: 4px; position: relative; }
.timeline-row:not(:last-child) .timeline-dot:after { content: ""; position: absolute; left: 5px; top: 13px; width: 2px; height: 32px; background: var(--admin-surface-high); }
.timeline-row strong { display: block; font-size: 12.5px; font-weight: 500; color: var(--admin-muted); }
.timeline-row small { font-size: 11px; color: var(--admin-text); font-weight: 800; }
.drawer-actions { display: flex; gap: 10px; position: sticky; bottom: 0; background: #fff; padding: 16px 0 0; margin-top: 24px; }
.drawer-actions button { flex: 1; }
.mobile-backdrop { position: fixed; inset: 0; background: rgba(25,27,35,.55); backdrop-filter: blur(4px); z-index: 90; border: 0; }

@media(max-width:1200px){ .summary-grid{grid-template-columns:repeat(3,1fr)} }
@media(max-width:1050px){ .desktop-sidebar-wrapper{display:none!important;} }
@media(max-width:900px){
  .orders-content{padding:16px 14px 28px}
  .summary-grid{grid-template-columns:repeat(2,1fr)}
  .order-summary-box { display: flex !important; flex-direction: column !important; gap: 12px !important; }
  .order-note { order: 1 !important; width: 100% !important; }
  .totals-card { order: 2 !important; width: 100% !important; }
}
@media(max-width:650px){
  .orders-content{padding:14px 10px 24px; max-width:100vw; overflow-x:hidden;}
  .pagehead{flex-direction:column; align-items:flex-start; gap:10px;}
  .pagehead h1{font-size:22px;}
  .pagehead p{font-size:12px;}
  .summary-grid{grid-template-columns:repeat(2,minmax(0,1fr)); gap:8px;}
  .summary-card{padding:10px 8px; min-height:76px;}
  .summary-card span{font-size:12px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;}
  .summary-card strong{font-size:18px;}
  .summary-card small{font-size:9.5px;}
  .filters{display:grid; grid-template-columns:1fr 1fr; gap:8px;}
  .filter-search{grid-column:1/3; min-width:0; height:36px;}
  .filter-search input{font-size:12px;}
  .select, .filterbtn{height:36px; padding:0 10px; font-size:11.5px;}
  .drawer{width:100%; padding:16px;}
  .status-modal-wrap, .create-order-wrap { padding: 10px 8px !important; box-sizing: border-box !important; overflow-x: hidden !important; }
  .status-modal, .create-order-modal { width: calc(100vw - 16px) !important; max-width: calc(100vw - 16px) !important; max-height: 88vh !important; border-radius: 12px !important; overflow-x: hidden !important; box-sizing: border-box !important; }
  .create-order-head { padding: 12px !important; max-width: 100% !important; box-sizing: border-box !important; }
  .create-order-head h2 { font-size: 18px !important; }
  .create-section { padding: 12px 10px !important; margin-bottom: 10px !important; max-width: 100% !important; box-sizing: border-box !important; }
  .status-modal-body, .create-order-body { padding: 12px 10px !important; max-width: 100% !important; box-sizing: border-box !important; }
  .status-modal-actions { flex-direction: column-reverse !important; gap: 8px !important; }
  .status-modal-actions button { width: 100% !important; justify-content: center !important; }
  .create-order-actions { display: flex !important; flex-direction: row !important; align-items: center !important; gap: 8px !important; padding: 12px !important; }
  .create-order-actions button { flex: 1 !important; width: auto !important; justify-content: center !important; height: 38px !important; font-size: 12.5px !important; }
  .create-grid, .create-grid.three { grid-template-columns: 100% !important; gap: 8px !important; width: 100% !important; max-width: 100% !important; box-sizing: border-box !important; }
  .create-field { width: 100% !important; max-width: 100% !important; min-width: 0 !important; box-sizing: border-box !important; }
  .create-field.full { grid-column: 1 / -1 !important; width: 100% !important; max-width: 100% !important; }
  .db-fetch-header { flex-direction: column !important; align-items: flex-start !important; gap: 4px !important; width: 100% !important; max-width: 100% !important; box-sizing: border-box !important; }
  .db-fetch-label { width: 100% !important; max-width: 100% !important; font-size: 11.5px !important; word-break: break-word !important; overflow-wrap: break-word !important; }
  .db-fetch-badge-success { font-size: 10.5px !important; width: auto !important; max-width: 100% !important; white-space: normal !important; word-break: break-word !important; }
  .line-item { grid-template-columns: 1fr 1fr auto !important; gap: 8px !important; box-sizing: border-box !important; }
  .line-item .create-field:first-child { grid-column: 1 / -1 !important; }
  .order-summary-box { display: flex !important; flex-direction: column !important; gap: 12px !important; width: 100% !important; box-sizing: border-box !important; }
  .order-note { order: 1 !important; width: 100% !important; box-sizing: border-box !important; }
  .totals-card { order: 2 !important; width: 100% !important; box-sizing: border-box !important; }
}
`;

const orders = [
  {id:"#AMH1250",date:"19 Aug 2026",customer:"Priya Sharma",email:"priya@email.com",items:"2 items",total:"₹2,549",payment:"Paid",status:"Processing",shipping:"Standard"},
  {id:"#AMH1249",date:"19 Aug 2026",customer:"Arjun Mehta",email:"arjun@email.com",items:"1 item",total:"₹1,299",payment:"Paid",status:"Shipped",shipping:"Express"},
  {id:"#AMH1248",date:"18 Aug 2026",customer:"Sneha Iyer",email:"sneha@email.com",items:"3 items",total:"₹3,199",payment:"Paid",status:"Delivered",shipping:"Standard"},
  {id:"#AMH1247",date:"18 Aug 2026",customer:"Karan Verma",email:"karan@email.com",items:"1 item",total:"₹899",payment:"Pending",status:"Pending",shipping:"COD"},
  {id:"#AMH1246",date:"18 Aug 2026",customer:"Ananya Rao",email:"ananya@email.com",items:"1 item",total:"₹1,199",payment:"Paid",status:"Delivered",shipping:"Standard"},
  {id:"#AMH1245",date:"17 Aug 2026",customer:"Riya Nair",email:"riya@email.com",items:"2 items",total:"₹4,760",payment:"Refunded",status:"Cancelled",shipping:"Standard"},
];

function OrderDrawer({order,onClose,onUpdateStatus}){
  if(!order)return null;

  const steps = ["Pending","Processing","Packed","Shipped","Out for Delivery","Delivered"];
  const currentIndex = steps.indexOf(order.status);
  const isCancelled = order.status === "Cancelled";

  return <motion.div className="overlay" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={onClose}>
    <motion.aside className="drawer" initial={{x:"100%"}} animate={{x:0}} exit={{x:"100%"}} transition={{duration:.25}} onClick={e=>e.stopPropagation()}>
      <div className="drawerhead">
        <div>
          <small>ORDER DETAILS</small>
          <h2>{order.id}</h2>
        </div>
        <button className="menu-toggle-btn" onClick={onClose}><FiX/></button>
      </div>

      <div className="order-summary">
        <div className="info-card"><span>Customer</span><strong>{order.customer}</strong></div>
        <div className="info-card"><span>Order Total</span><strong>{order.total}</strong></div>
        <div className="info-card"><span>Payment</span><strong>{order.payment}</strong></div>
        <div className="info-card"><span>Fulfillment</span><strong>{order.status}</strong></div>
      </div>

      <div className="detail-section">
        <h3>Customer & Shipping</h3>
        <div className="info-card">
          <span>Email</span><strong>{order.email}</strong><br/>
          <span style={{display:"block",marginTop:8}}>Shipping Address</span><strong>12 Lake View Road, Hyderabad, Telangana 500081</strong>
        </div>
      </div>

      <div className="detail-section">
        <h3>Products</h3>
        <div className="productline">
          <div className="productthumb">01</div>
          <div><strong>Aster No. 04 Automatic</strong><small>40 mm · Brushed steel</small></div>
          <strong>₹18,900</strong>
        </div>
        <div className="productline">
          <div className="productthumb">02</div>
          <div><strong>Leather Carry Case</strong><small>Tan · Full grain leather</small></div>
          <strong>₹5,900</strong>
        </div>
      </div>

      <div className="detail-section">
        <h3>Order Timeline</h3>
        <div className="timeline">
          {isCancelled ? (
            <>
              <div className="timeline-row"><div className="timeline-dot done"/><div><strong>Order placed</strong><small>19 Aug 2026 · 10:24 AM</small></div></div>
              <div className="timeline-row"><div className="timeline-dot current"/><div><strong>Cancelled</strong><small>Order fulfilment stopped</small></div></div>
            </>
          ) : steps.map((step,i)=>{
            const state = i < currentIndex ? "done" : i === currentIndex ? "current" : "future";
            return <div className="timeline-row" key={step}>
              <div className={`timeline-dot ${state}`}/>
              <div>
                <strong>{step}</strong>
                <small>{i < currentIndex ? "Completed" : i === currentIndex ? "Current status" : "Pending"}</small>
              </div>
            </div>
          })}
        </div>
      </div>

      <div className="drawer-actions">
        <button className="secondarybtn"><FiPrinter/> Print Invoice</button>
        <button className="primarybtn" onClick={()=>onUpdateStatus(order)}><FiTruck/> Update Status</button>
      </div>
    </motion.aside>
  </motion.div>
}

function UpdateStatusModal({config,onClose,onConfirm}){
  const [status,setStatus]=useState(config.currentStatus || "");
  const [note,setNote]=useState("");
  const [tracking,setTracking]=useState("");
  const [notify,setNotify]=useState(true);

  const statuses = ["Pending","Processing","Packed","Shipped","Out for Delivery","Delivered","Cancelled"];
  const needsTracking = status === "Shipped" || status === "Out for Delivery";

  return <motion.div
    className="status-modal-wrap"
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    onClick={onClose}
  >
    <motion.section
      className="status-modal"
      initial={{opacity:0,y:18,scale:.98}}
      animate={{opacity:1,y:0,scale:1}}
      exit={{opacity:0,y:18,scale:.98}}
      transition={{duration:.2}}
      onClick={e=>e.stopPropagation()}
    >
      <div className="status-modal-head">
        <div>
          <small>FULFILLMENT</small>
          <h2>Update Order Status</h2>
        </div>
        <button className="menu-toggle-btn" onClick={onClose}><FiX/></button>
      </div>

      <div className="status-modal-body">
        <div className="status-context">
          <span>{config.ids.length === 1 ? "Order" : "Selected orders"}</span>
          <strong>{config.ids.length === 1 ? config.ids[0] : `${config.ids.length} orders`}</strong>
        </div>

        {config.currentStatus && <div className="status-context">
          <span>Current status</span>
          <span className={`status ${config.currentStatus.toLowerCase().replaceAll(" ","-")}`}>{config.currentStatus}</span>
        </div>}

        <div className="form-field">
          <label>New status</label>
          <MasterDropdown
            options={statuses}
            value={status}
            onChange={setStatus}
            placeholder="Select a status"
            className="modal-field-dropdown"
          />
        </div>

        {needsTracking && <div className="form-field">
          <label>Tracking number</label>
          <input value={tracking} onChange={e=>setTracking(e.target.value)} placeholder="e.g. AWB123456789"/>
        </div>}

        <div className="form-field">
          <label>Internal note <span style={{fontWeight:500,color:"#737785"}}>(optional)</span></label>
          <textarea
            value={note}
            onChange={e=>setNote(e.target.value)}
            placeholder="Add a note about this status change..."
          />
        </div>

        <label className="notify-row">
          <AnimatedCheckbox checked={notify} onChange={e=>setNotify(e.target.checked)}/>
          <span>
            <strong>Notify customer</strong>
            <small>Send an order-status update by email/SMS when this change is saved.</small>
          </span>
        </label>
      </div>

      <div className="status-modal-actions">
        <button className="secondarybtn" onClick={onClose}>Cancel</button>
        <button
          className="primarybtn"
          disabled={!status || (needsTracking && !tracking.trim())}
          onClick={()=>onConfirm({status,note,tracking,notify})}
        >
          <FiCheck/> Update Status
        </button>
      </div>
    </motion.section>
  </motion.div>
}

const productCatalog = [
  {id:"P001",name:"Aster No. 04 Automatic",variant:"40 mm · Brushed steel",price:18900},
  {id:"P002",name:"Leather Carry Case",variant:"Tan · Full grain leather",price:5900},
  {id:"P003",name:"Earthline Hand-thrown Vase",variant:"Natural ceramic",price:3480},
  {id:"P004",name:"Contour Sterling Pendant",variant:"Sterling silver",price:4250},
  {id:"P005",name:"Nocturne Black Dial",variant:"Black · Quartz",price:12490},
];

function CreateOrderModal({onClose,onCreate}){
  const [customer,setCustomer]=useState({
    name:"",
    email:"",
    phone:"",
    address:"",
  });
  const [dbCustomers] = useState(() => fetchAllCustomers());
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const handleSelectCustomer = (c) => {
    setSelectedCustomer(c);
    setCustomer({
      name: c.name,
      email: c.email || "",
      phone: c.phone || "",
      address: c.address || "",
    });
  };

  const [lineItems,setLineItems]=useState([{productId:productCatalog[0].id,qty:1}]);
  const [shipping,setShipping]=useState("Standard");
  const [paymentMethod,setPaymentMethod]=useState("Razorpay");
  const [paymentStatus,setPaymentStatus]=useState("Paid");
  const [orderStatus,setOrderStatus]=useState("Processing");
  const [note,setNote]=useState("");

  const updateCustomer=(key,value)=>setCustomer(c=>({...c,[key]:value}));

  const updateLine=(index,patch)=>{
    setLineItems(items=>items.map((item,i)=>i===index?{...item,...patch}:item));
  };

  const addLine=()=>setLineItems(items=>[...items,{productId:productCatalog[0].id,qty:1}]);
  const removeLine=(index)=>setLineItems(items=>items.length===1?items:items.filter((_,i)=>i!==index));

  const resolvedItems=lineItems.map(item=>{
    const product=productCatalog.find(p=>p.id===item.productId) || productCatalog[0];
    return {...product,qty:item.qty};
  });

  const subtotal=resolvedItems.reduce((sum,item)=>sum+(item.price*item.qty),0);
  const shippingFee=shipping==="Express"?199:shipping==="Same Day"?349:0;
  const grandTotal=subtotal+shippingFee;
  const totalQty=resolvedItems.reduce((sum,item)=>sum+item.qty,0);

  const valid=
    customer.name.trim() &&
    customer.email.trim() &&
    customer.phone.trim() &&
    customer.address.trim() &&
    resolvedItems.length>0;

  return <motion.div
    className="create-order-wrap"
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    onClick={onClose}
  >
    <motion.section
      className="create-order-modal"
      initial={{opacity:0,y:22,scale:.985}}
      animate={{opacity:1,y:0,scale:1}}
      exit={{opacity:0,y:22,scale:.985}}
      transition={{duration:.22}}
      onClick={e=>e.stopPropagation()}
    >
      <div className="create-order-head">
        <div>
          <h2>Create Order</h2>
        </div>
        <button className="menu-toggle-btn" onClick={onClose}><FiX/></button>
      </div>

      <div className="create-order-body">
        <section className="create-section">
          <div className="create-section-head">
            <h3>Customer Details</h3>
            <span>Required information</span>
          </div>
          <div className="create-grid">
            <div className="create-field full" style={{ marginBottom: 6 }}>
              <div className="db-fetch-header">
                <label className="db-fetch-label">
                  Customer <span className="db-fetch-hint">(Fetch from Customers Database)</span>
                </label>
                {selectedCustomer && (
                  <span className="db-fetch-badge-success">
                    ✓ Fetched: {selectedCustomer.name}
                  </span>
                )}
              </div>
              <SearchableDatabaseSelect
                type="customer"
                items={dbCustomers}
                value={customer.name}
                placeholder="Search the customer's"
                onSelect={handleSelectCustomer}
              />
            </div>

            <div className="create-field">
              <label>Customer name</label>
              <input value={customer.name} onChange={e=>updateCustomer("name",e.target.value)} placeholder="e.g. Priya Sharma"/>
            </div>
            <div className="create-field">
              <label>Email</label>
              <input type="email" value={customer.email} onChange={e=>updateCustomer("email",e.target.value)} placeholder="customer@example.com"/>
            </div>
            <div className="create-field">
              <label>Phone</label>
              <input value={customer.phone} onChange={e=>updateCustomer("phone",e.target.value)} placeholder="+91 98765 43210"/>
            </div>
            <div className="create-field">
              <label>Shipping method</label>
              <MasterDropdown
                options={["Standard", "Express", "Same Day"]}
                value={shipping}
                onChange={setShipping}
                className="modal-field-dropdown"
              />
            </div>
            <div className="create-field full">
              <label>Shipping address</label>
              <textarea value={customer.address} onChange={e=>updateCustomer("address",e.target.value)} placeholder="Full delivery address"/>
            </div>
          </div>
        </section>

        <section className="create-section">
          <div className="create-section-head">
            <h3>Products</h3>
            <span>{totalQty} item{totalQty===1?"":"s"}</span>
          </div>

          <div className="line-items">
            {lineItems.map((item,index)=>{
              const product=productCatalog.find(p=>p.id===item.productId) || productCatalog[0];
              return <div className="line-item" key={index}>
                <div className="create-field product-field">
                  <label>Product</label>
                  <MasterDropdown
                    options={productCatalog.map(p=>({ value: p.id, label: `${p.name} — ₹${p.price.toLocaleString("en-IN")}` }))}
                    value={item.productId}
                    onChange={val=>updateLine(index,{productId:val})}
                    className="modal-field-dropdown"
                  />
                </div>

                <div className="create-field">
                  <label>Quantity</label>
                  <div className="qty-control">
                    <button onClick={()=>updateLine(index,{qty:Math.max(1,item.qty-1)})}><FiMinus/></button>
                    <strong>{item.qty}</strong>
                    <button onClick={()=>updateLine(index,{qty:item.qty+1})}><FiPlus/></button>
                  </div>
                </div>

                <div className="create-field">
                  <label>Line total</label>
                  <div className="line-total">₹{(product.price*item.qty).toLocaleString("en-IN")}</div>
                </div>

                <button className="delete-line" title="Remove product" onClick={()=>removeLine(index)}><FiTrash2/></button>
              </div>
            })}
          </div>

          <button className="add-line" onClick={addLine} style={{marginTop:10}}><FiPlus/> Add another product</button>
        </section>

        <section className="create-section">
          <div className="create-section-head">
            <h3>Payment & Fulfillment</h3>
            <span>Initial order state</span>
          </div>
          <div className="create-grid three">
            <div className="create-field">
              <label>Payment method</label>
              <MasterDropdown
                options={["Razorpay", "UPI", "Credit Card", "Net Banking", "Cash on Delivery"]}
                value={paymentMethod}
                onChange={setPaymentMethod}
                className="modal-field-dropdown"
              />
            </div>
            <div className="create-field">
              <label>Payment status</label>
              <MasterDropdown
                options={["Paid", "Pending"]}
                value={paymentStatus}
                onChange={setPaymentStatus}
                className="modal-field-dropdown"
              />
            </div>
            <div className="create-field">
              <label>Order status</label>
              <MasterDropdown
                options={["Pending", "Processing", "Packed", "Shipped"]}
                value={orderStatus}
                onChange={setOrderStatus}
                className="modal-field-dropdown"
              />
            </div>
            <div className="create-field full">
              <label>Internal note <span style={{fontWeight:500,color:"#737785"}}>(optional)</span></label>
              <textarea value={note} onChange={e=>setNote(e.target.value)} placeholder="Add any instruction or note for the order team..."/>
            </div>
          </div>
        </section>

        <div className="order-summary-box">
          <div className="order-note">
            The new order will be added to the top of the Orders table immediately. You can open it, update its fulfillment status, print the invoice, or select it for bulk actions.
          </div>

          <div className="totals-card">
            <div className="total-row"><span>Subtotal</span><strong>₹{subtotal.toLocaleString("en-IN")}</strong></div>
            <div className="total-row"><span>Shipping</span><strong>{shippingFee?`₹${shippingFee.toLocaleString("en-IN")}`:"Free"}</strong></div>
            <div className="total-row grand"><span>Order Total</span><strong>₹{grandTotal.toLocaleString("en-IN")}</strong></div>
          </div>
        </div>
      </div>

      <div className="create-order-actions">
        <button className="secondarybtn" onClick={onClose}>Cancel</button>
        <button
          className="primarybtn"
          disabled={!valid}
          onClick={()=>onCreate({
            customer,
            lineItems:resolvedItems,
            shipping,
            paymentMethod,
            paymentStatus,
            orderStatus,
            note,
            grandTotal,
            totalQty
          })}
        >
          <FiShoppingBag/> Create Order
        </button>
      </div>
    </motion.section>
  </motion.div>
}

export default function OrdersManagement(){
  const [ordersList,setOrdersList]=useState(orders);
  const [selected,setSelected]=useState([]);
  const [tab,setTab]=useState("All");
  const [search,setSearch]=useState("");
  const [paymentFilter,setPaymentFilter]=useState("All");
  const [statusFilter,setStatusFilter]=useState("All");
  const [shippingFilter,setShippingFilter]=useState("All");
  const [dateFilter,setDateFilter]=useState("Last 7 Days");
  const [quick,setQuick]=useState(false);
  const [drawer,setDrawer]=useState(null);
  const [desktopSidebarOpen, setDesktopSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [statusConfig,setStatusConfig]=useState(null);
  const [toast,setToast]=useState(null);
  const [createOrderOpen,setCreateOrderOpen]=useState(false);

  const tabs = ["All","Pending","Processing","Shipped","Delivered","Cancelled"];
  const displayTotal = 1248 + ordersList.filter(o=>o.isCreated).length;

  const counts = useMemo(()=>{
    return Object.fromEntries(tabs.map(t=>[
      t, t==="All" ? displayTotal : ordersList.filter(o=>o.status===t).length
    ]));
  },[ordersList, displayTotal]);

  const filtered = useMemo(()=>{
    return ordersList.filter(o=>{
      const q = search.trim().toLowerCase();
      const matchTab = tab==="All" || o.status===tab;
      const matchSearch = !q || [o.id, o.customer, o.email, o.shipping, o.payment, o.status].some(v=>String(v||"").toLowerCase().includes(q));
      const matchPayment = paymentFilter==="All" || o.payment===paymentFilter;
      const matchStatus = statusFilter==="All" || o.status===statusFilter;
      const matchShipping = shippingFilter==="All" || o.shipping===shippingFilter;
      return matchTab && matchSearch && matchPayment && matchStatus && matchShipping;
    });
  },[ordersList, tab, search, paymentFilter, statusFilter, shippingFilter]);

  const toggle=(id)=>setSelected(s=>s.includes(id)?s.filter(x=>x!==id):[...s,id]);

  const handleToggleMenu = () => {
    if (window.innerWidth < 1050) {
      setMobileMenuOpen(prev => !prev);
    } else {
      setDesktopSidebarOpen(prev => !prev);
    }
  };

  const openStatusModal=(target)=>{
    const ids = Array.isArray(target) ? target : [target.id];
    const currentStatus = ids.length===1 ? ordersList.find(o=>o.id===ids[0])?.status || "" : "";
    setStatusConfig({ids,currentStatus});
  };

  const createOrder=(payload)=>{
    const maxId=ordersList.reduce((max,order)=>{
      const n=Number(String(order.id).replace(/\D/g,"")) || 0;
      return Math.max(max,n);
    },1250);
    const newId=`#AMH${maxId+1}`;
    const newOrder={
      id:newId,
      date:"20 Aug 2026",
      customer:payload.customer.name.trim(),
      email:payload.customer.email.trim(),
      phone:payload.customer.phone.trim(),
      address:payload.customer.address.trim(),
      items:`${payload.totalQty} item${payload.totalQty===1?"":"s"}`,
      total:`₹${payload.grandTotal.toLocaleString("en-IN")}`,
      payment:payload.paymentStatus,
      paymentMethod:payload.paymentMethod,
      status:payload.orderStatus,
      shipping:payload.shipping,
      lineItems:payload.lineItems,
      internalNote:payload.note,
      isCreated:true,
    };

    setOrdersList(current=>[newOrder,...current]);
    registerOrder(newOrder);
    setTab("All");
    setCreateOrderOpen(false);
    setToast({
      title:`${newId} created successfully`,
      message:`${payload.customer.name} · ${payload.totalQty} item${payload.totalQty===1?"":"s"} · ₹${payload.grandTotal.toLocaleString("en-IN")}`
    });
    window.setTimeout(()=>setToast(null),3200);
  };

  const confirmStatusUpdate=({status,note,tracking,notify})=>{
    const ids = statusConfig.ids;
    setOrdersList(current=>current.map(order=>ids.includes(order.id)?{
      ...order,
      status,
      tracking: tracking || order.tracking || "",
      lastStatusNote: note,
      customerNotified: notify
    }:order));

    setDrawer(current=>current && ids.includes(current.id)?{
      ...current,
      status,
      tracking: tracking || current.tracking || "",
      lastStatusNote: note,
      customerNotified: notify
    }:current);

    setSelected([]);
    setStatusConfig(null);
    setToast({
      title: ids.length===1 ? `${ids[0]} updated to ${status}` : `${ids.length} orders updated`,
      message: notify ? "Customer notification is enabled for this update." : "Status saved without customer notification."
    });
    window.setTimeout(()=>setToast(null),3200);
  };

  return (
    <div className="orders-scope">
      <style>{ordersCss}</style>
      <div className="orders-shell">

        <div className={`desktop-sidebar-wrapper ${!desktopSidebarOpen ? "is-closed" : ""}`}>
          <AdminSidebar activePage="Orders" onClose={() => setDesktopSidebarOpen(false)} />
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <div>
              <motion.button 
                className="mobile-backdrop" 
                initial={{opacity:0}} 
                animate={{opacity:1}} 
                exit={{opacity:0}} 
                onClick={() => setMobileMenuOpen(false)}
              />
              <AdminSidebar activePage="Orders" mobile onClose={() => setMobileMenuOpen(false)} />
            </div>
          )}
        </AnimatePresence>

        <main className="orders-main">
          <AdminTopbar onToggleMenu={handleToggleMenu} desktopSidebarOpen={desktopSidebarOpen} />

          <div className="orders-content">
            <div className="pagehead">
              <div><h1>Orders Management</h1><p>Manage purchases, payments, fulfillment and shipping from one place.</p></div>
              <div style={{display:"flex",gap:10}}>
                <button className="secondarybtn"><FiDownload/> Export</button>
                <button className="primarybtn" onClick={()=>setCreateOrderOpen(true)}><FiPlus/> Create Order</button>
              </div>
            </div>

            <section className="kpi-grid">
              <KpiCard item={["Total Orders", (1248 + ordersList.filter(o=>o.isCreated).length).toLocaleString("en-IN"), "+8.2%", "vs last period", "trust", FiShoppingBag]} />
              <KpiCard item={["Pending", 34 + ordersList.filter(o=>o.isCreated&&o.status==="Pending").length, "+14.2%", "Needs attention", "warning", FiClock]} />
              <KpiCard item={["Processing", 48 + ordersList.filter(o=>o.isCreated&&o.status==="Processing").length, "+21.4%", "Being fulfilled", "action", FiPackage]} />
              <KpiCard item={["Delivered", (1102 + ordersList.filter(o=>o.isCreated&&o.status==="Delivered").length).toLocaleString("en-IN"), "+18.3%", "(88.3% completion)", "success", FiCheckCircle]} />
              <KpiCard item={["Cancelled / Returned", 64 + ordersList.filter(o=>o.isCreated&&o.status==="Cancelled").length, "-4.1%", "(5.1% of orders)", "danger", FiRotateCcw]} />
            </section>

            <div className={`orders-split ${drawer ? "has-selected" : ""}`}>
              <section className="panel">
                <div className="tabs">
                  {tabs.map(x=><button className={`tab ${tab===x?"active":""}`} onClick={()=>setTab(x)} key={x}>{x}<b>{x==="All"?displayTotal:counts[x]}</b></button>)}
                </div>

                <div className="filters">
                  <label className="field search-field"><FiSearch/><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search order ID, customer, email..."/></label>
                  <MasterDropdown options={[{value:"All",label:"All Payment"},"Paid","Pending","Refunded"]} value={paymentFilter} onChange={setPaymentFilter} />
                  <MasterDropdown options={[{value:"All",label:"All Statuses"},"Pending","Processing","Shipped","Delivered","Cancelled"]} value={statusFilter} onChange={setStatusFilter} />
                  <MasterDatePicker value={dateFilter} onChange={setDateFilter} />
                  <MasterDropdown options={[{value:"All",label:"All Shipping"},"Standard","Express","COD"]} value={shippingFilter} onChange={setShippingFilter} />
                  <button className="filterbtn" onClick={()=>setToast({title:"Filters ready",message:"Filter options applied."})}><FiFilter/> Filters</button>
                </div>

                <div className="selbar">
                  <AnimatedCheckbox checked={filtered.length>0&&selected.length===filtered.length} onChange={e=>setSelected(e.target.checked?filtered.map(x=>x.id):[])}/>
                  <strong>{selected.length} selected</strong><span>Select all {filtered.length} on this page</span>
                  <div className="spacer"/>
                  <button className="clear" onClick={()=>selected.length>0?setSelected([]):setToast({title:"No selection",message:"No orders are currently selected."})}>Clear selection</button>
                  <MasterDropdown
                    staticLabel="Bulk Actions"
                    rightAlign
                    options={[
                      {
                        label: "Update status",
                        action: () => {
                          if (selected.length === 0) setToast({ title: "No orders selected", message: "Please select orders first." });
                          else openStatusModal(selected);
                        },
                      },
                      {
                        label: "Print invoices",
                        action: () => {
                          if (selected.length === 0) setToast({ title: "No orders selected", message: "Please select orders first." });
                          else setToast({ title: "Invoices printed", message: `${selected.length} invoices generated.` });
                        },
                      },
                      {
                        label: "Export selected",
                        action: () => {
                          if (selected.length === 0) setToast({ title: "No orders selected", message: "Please select orders first." });
                          else setToast({ title: "Export complete", message: `${selected.length} orders exported.` });
                        },
                      },
                      {
                        label: "Clear selection",
                        action: () => {
                          if (selected.length === 0) setToast({ title: "No selection", message: "No orders are currently selected." });
                          else setSelected([]);
                        },
                      },
                    ]}
                  />
                </div>

                <div style={{ marginTop: 14 }}>
                  <OrdersTable 
                    orders={filtered}
                    selected={selected}
                    activeOrderId={drawer?.id}
                    onToggle={toggle}
                    onViewDetails={(order) => setDrawer(curr => curr?.id === order.id ? null : order)}
                    onUpdateStatus={openStatusModal}
                    totalCount={displayTotal}
                  />
                </div>
              </section>

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
                      title="Order Details"
                      onClose={() => setDrawer(null)}
                      onEdit={() => openStatusModal(drawer)}
                      onToast={(msg) => setToast({ title: "Order Action", message: msg })}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </main>
      </div>

      <AnimatePresence>
        {createOrderOpen&&<CreateOrderModal onClose={()=>setCreateOrderOpen(false)} onCreate={createOrder}/>}
      </AnimatePresence>

      <AnimatePresence>
        {statusConfig&&<UpdateStatusModal
          key={`${statusConfig.ids.join("-")}-${statusConfig.currentStatus}`}
          config={statusConfig}
          onClose={()=>setStatusConfig(null)}
          onConfirm={confirmStatusUpdate}
        />}
      </AnimatePresence>

      <AnimatePresence>
        {toast&&<motion.div
          className="toast"
          initial={{opacity:0,y:-10,scale:.98}}
          animate={{opacity:1,y:0,scale:1}}
          exit={{opacity:0,y:-10,scale:.98}}
        >
          <span className="toast-icon"><FiCheck/></span>
          <div><strong>{toast.title}</strong><small>{toast.message}</small></div>
        </motion.div>}
      </AnimatePresence>
    </div>
  );
}
