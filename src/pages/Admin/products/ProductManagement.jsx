import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiAlertCircle,
  FiArchive,
  FiBox,
  FiCheck,
  FiChevronDown,
  FiChevronLeft,
  FiChevronRight,
  FiDownload,
  FiEdit2,
  FiEye,
  FiFileText,
  FiFilter,
  FiGift,
  FiImage,
  FiLink,
  FiPackage,
  FiPlus,
  FiRefreshCw,
  FiSearch,
  FiShoppingBag,
  FiTag,
  FiTrendingDown,
  FiTrendingUp,
  FiUpload,
  FiX,
  FiXCircle,
  FiCalendar,
  FiLayers
} from "react-icons/fi";

import AdminSidebar from "../../../components/Admin/AdminSidebar";
import AdminTopbar from "../../../components/Admin/AdminTopbar";
import KpiCard from "../../../components/Admin/KpiCard";
import MasterDropdown from "../../../components/Admin/MasterDropdown";
import MasterDatePicker from "../../../components/Admin/MasterDatePicker";
import MasterPieChart from "../../../components/Admin/MasterPieChart";
import LowStockCard from "../../../components/Admin/LowStockCard";
import DashboardListCard from "../../../components/Admin/DashboardListCard";
import AnimatedCheckbox from "../../../components/Admin/AnimatedCheckbox";
import MobileTableCards, { MobileTableCard } from "../../../components/Admin/MobileTableCards";
import IntegrationDetailsDrawer from "../../../components/Admin/IntegrationDetailsDrawer";

const productsCss = `
.products-scope {
  --admin-surface:#faf8ff;
  --admin-surface-low:#f3f3fe;
  --admin-surface-mid:#ededf8;
  --admin-text:#191b23;
  --admin-muted:#424753;
  --admin-outline:#c2c6d5;
  --admin-primary:#004094;
  --admin-primary-2:#0056c3;
  --admin-orange:#fd661d;
  --admin-green:#0b6b1d;
  --admin-red:#D32F2F;
  --admin-shadow:0 4px 14px rgba(25,27,35,.06);
  min-height:100vh;background:var(--admin-surface);color:var(--admin-text);font-family:'Manrope',system-ui,sans-serif
}
.products-scope *{box-sizing:border-box}
.products-scope button,.products-scope input,.products-scope textarea,.products-scope select{font:inherit}
.products-scope button{cursor:pointer}
.products-scope .admin-shell{display:flex;min-height:100vh;background:var(--admin-surface)}

.products-scope .products-split {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  align-items: start;
  margin-bottom: 18px;
  transition: grid-template-columns 0.25s ease;
}
.products-scope .products-split.has-selected {
  grid-template-columns: minmax(0, 1.62fr) minmax(330px, 0.78fr);
}
.products-scope table tr {
  transition: background 0.18s ease;
}
.products-scope table tr.selected {
  background: #f0f5ff;
}
.products-scope .row-actions button.active-action {
  border-color: #0056c3;
  background: #f3f3fe;
  color: #0056c3;
}
.products-scope .desktop-sidebar-wrapper{width:256px;min-width:256px;flex-shrink:0}
.products-scope .desktop-sidebar-wrapper.is-closed{display:none}
.products-scope .dashboard-main{flex:1;min-width:0}
.products-scope .dashboard-content{padding:24px 28px 36px}

.products-scope .page-heading{display:flex;justify-content:space-between;align-items:center;gap:16px;margin-bottom:20px;flex-wrap:wrap;position:relative;z-index:40}
.products-scope .page-heading h1{margin:0;font-size:26px;line-height:1.2;letter-spacing:-.02em;font-weight:800;color:#11131b;white-space:nowrap}
.products-scope .page-heading p{margin:4px 0 0;font-size:12.5px;color:var(--admin-muted);font-weight:500;white-space:nowrap}
.products-scope .page-actions{display:flex;gap:7px;flex-wrap:nowrap;align-items:center;position:relative;z-index:40}
.products-scope .date-btn{height:38px;border:1px solid var(--admin-outline);background:#fff;border-radius:9px;padding:0 12px;display:flex;align-items:center;gap:7px;font-size:12px;font-weight:700;color:#191b23;white-space:nowrap;flex-shrink:0}
.products-scope .primary-action,.products-scope .secondary-action{
  height:38px;border-radius:9px;padding:0 12px;display:inline-flex;align-items:center;justify-content:center;
  gap:6px;font-size:12px;font-weight:800;cursor:pointer;white-space:nowrap;user-select:none;flex-shrink:0;
}
.products-scope .primary-action{border:0;background:var(--admin-orange);color:#fff;box-shadow:0 4px 12px rgba(253,102,29,.2)}
.products-scope .primary-action:hover{background:#e25510}
.products-scope .secondary-action{border:1px solid var(--admin-outline);background:#fff;color:var(--admin-text)}
.products-scope .secondary-action:hover{background:var(--admin-surface-low);border-color:var(--admin-primary-2);color:var(--admin-primary-2)}
.products-scope .secondary-action.is-open{background:var(--admin-surface-low);border-color:var(--admin-primary-2);color:var(--admin-primary-2)}

/* Action Dropdowns */
.products-scope .action-dropdown-wrap {
  position: relative;
  display: inline-block;
  z-index: 50;
}
.products-scope .action-dropdown-wrap.is-open,
.products-scope .action-dropdown-wrap:has(.action-dropdown-menu) {
  z-index: 99999;
}
.products-scope .action-dropdown-menu {
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  min-width: 270px;
  background: #ffffff;
  border: 1px solid var(--admin-outline);
  border-radius: 12px;
  box-shadow: 0 16px 40px rgba(16, 24, 40, 0.22);
  z-index: 999999 !important;
  padding: 6px;
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.products-scope .action-dropdown-item {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 11px;
  padding: 9px 12px;
  border-radius: 8px;
  border: 1px solid transparent;
  background: transparent;
  text-align: left;
  cursor: pointer;
  transition: all 0.16s ease;
  color: #10172f;
}
.products-scope .action-dropdown-item:hover:not(:disabled) {
  background: #f0f6ff;
  border-color: #dbeafe;
  color: #0056c3;
}
.products-scope .action-dropdown-item:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}
.products-scope .action-item-icon {
  width: 32px;
  height: 32px;
  border-radius: 7px;
  background: #f1f5f9;
  color: #0056c3;
  display: grid;
  place-items: center;
  font-size: 14px;
  flex-shrink: 0;
}
.products-scope .action-dropdown-item:hover:not(:disabled) .action-item-icon {
  background: #dbeafe;
  color: #0056c3;
}
.products-scope .action-item-text {
  flex: 1;
  min-width: 0;
}
.products-scope .action-item-text strong {
  display: block;
  font-size: 12.5px;
  font-weight: 700;
  color: #10172f;
  line-height: 1.3;
}
.products-scope .action-item-text span {
  display: block;
  font-size: 11px;
  color: #64748b;
  font-weight: 500;
  line-height: 1.3;
  margin-top: 1px;
}
.products-scope .action-item-badge {
  font-size: 10.5px;
  font-weight: 700;
  background: #e7efff;
  color: #0056c3;
  padding: 2px 8px;
  border-radius: 999px;
  flex-shrink: 0;
}

.products-scope .kpi-grid{display:grid;grid-template-columns:repeat(5,minmax(150px,1fr));gap:14px;margin-bottom:20px}

.products-scope .management-panel{background:#fff;border:1px solid rgba(194,198,213,.62);border-radius:12px;box-shadow:var(--admin-shadow);overflow:visible}
.products-scope .tabs{display:flex;gap:2px;padding:0 14px;border-bottom:1px solid var(--admin-surface-mid);overflow-x:auto;scrollbar-width:none}
.products-scope .tab{height:46px;border:0;background:transparent;padding:0 14px;color:#424753;font-size:12px;font-weight:800;white-space:nowrap;position:relative;cursor:pointer}
.products-scope .tab b{margin-left:5px;background:#ededf8;border-radius:999px;padding:3px 7px;font-size:10px;color:#424753}
.products-scope .tab.active{color:var(--admin-primary-2)}
.products-scope .tab.active b{background:#e7efff;color:#0056c3}
.products-scope .tab.active:after{content:"";position:absolute;left:8px;right:8px;bottom:0;height:2px;background:var(--admin-primary-2)}

.products-scope .filters{padding:14px;display:flex;align-items:center;gap:8px;flex-wrap:wrap;border-bottom:1px solid var(--admin-surface-mid);position:relative;z-index:30}
.products-scope .local-search{flex:1;min-width:240px;height:38px;border:1px solid var(--admin-outline);border-radius:8px;display:flex;align-items:center;gap:8px;padding:0 11px;background:#fff;color:#424753}
.products-scope .local-search input{flex:1;min-width:0;border:0;outline:0;background:transparent;font-size:12px;font-weight:600}
.products-scope .filter-button{height:34px;border:1px solid var(--admin-outline);border-radius:8px;background:#fff;padding:0 12px;display:flex;align-items:center;gap:7px;font-size:12px;font-weight:800;color:#191b23}

.products-scope .selection-bar{padding:10px 18px;background:#ffffff;border-bottom:1px solid #ededf8;display:flex;align-items:center;gap:10px;font-size:12px;flex-wrap:wrap;position:relative;z-index:20}
.products-scope .selection-bar strong{font-size:12px;font-weight:800;color:#191b23}
.products-scope .selection-bar span{font-size:11px;color:#424753;font-weight:500}
.products-scope .selection-spacer{margin-left:auto}
.products-scope .clear{
  border:0;background:transparent;color:#0056c3;font-size:11px;font-weight:800;
  cursor:pointer;padding:0 8px;height:34px;display:inline-flex;align-items:center;white-space:nowrap;transition:color 0.18s ease
}
.products-scope .clear:hover{color:#003882;text-decoration:underline}

.products-scope .table-scroll{width:100%;overflow-x:auto;position:relative;z-index:1}
.products-scope table{width:100%;border-collapse:collapse;min-width:1140px}
.products-scope th{
  height:44px;background:#f3f3fe;color:#191b23;text-align:left;font-size:13px;font-weight:800;
  border-bottom:1px solid #ededf8;text-transform:uppercase;letter-spacing:.04em;padding:0 14px;white-space:nowrap
}
.products-scope th:last-child, .products-scope td:last-child {
  width: 120px;
  text-align: center;
  padding: 0 14px;
}
.products-scope td{
  height:62px;border-bottom:1px solid #ededf8;font-size:12.5px;font-weight:500;color:#191b23;
  padding:0 14px;white-space:nowrap;vertical-align:middle
}
.products-scope td strong{font-size:13px;font-weight:500;color:#191b23}
.products-scope td small{font-size:11px;font-weight:500;color:#191b23}
.products-scope .check{width:17px;height:17px;accent-color:#004094;cursor:pointer}
.products-scope .product-cell{display:flex;align-items:center;gap:10px}
.products-scope .product-thumb{
  width:38px;height:38px;border-radius:8px;background:#f3f3fe;color:#0056c3;font-weight:800;
  font-size:11px;display:grid;place-items:center;flex-shrink:0;overflow:hidden;border:1px solid #c2c6d5
}
.products-scope .product-thumb img{width:100%;height:100%;object-fit:cover;border-radius:7px}
.products-scope .product-meta strong{display:block;font-size:13px;font-weight:500;color:#191b23}
.products-scope .product-meta small{display:block;font-size:11px;color:#667085;font-weight:500;margin-top:1px}
.products-scope .category-text{color:#191b23;font-weight:500;font-size:12.5px}
.products-scope .stock-good{color:#138a42;font-weight:750}.products-scope .stock-warn{color:#d66c00;font-weight:750}.products-scope .stock-bad{color:#b12626;font-weight:750}

.products-scope .status-pill{
  display:inline-flex;align-items:center;gap:6px;height:24px;padding:0 10px;border-radius:999px;
  font-size:11px;font-weight:800;white-space:nowrap
}
.products-scope .status-pill i{width:5px;height:5px;border-radius:50%;background:currentColor}
.products-scope .status-published{background:#ddf7e4;color:#159a43}
.products-scope .status-draft{background:#e4efff;color:#1670e8}
.products-scope .status-archived{background:#edf0f5;color:#667085}

.products-scope .row-actions{display:flex;align-items:center;justify-content:center;gap:6px}
.products-scope .row-actions button{
  width:34px;height:34px;border-radius:8px;border:1px solid #c2c6d5;background:#ffffff;color:#191b23;
  display:grid;place-items:center;font-size:16px;cursor:pointer;transition:all .18s ease
}
.products-scope .row-actions button:hover{background:#f3f3fe;border-color:#0056c3;color:#0056c3}

.products-scope .footerbar{
  height:48px;padding:0 16px;display:flex;align-items:center;justify-content:space-between;border-top:1px solid #ededf8;
  font-size:12px;font-weight:600;color:#191b23
}
.products-scope .pagination{display:flex;gap:4px}
.products-scope .pagination button{
  min-width:32px;height:32px;padding:0 6px;border:1px solid #c2c6d5;background:#ffffff;border-radius:6px;
  font-size:12px;font-weight:700;cursor:pointer
}
.products-scope .pagination button.active{background:#0056c3;color:#ffffff;border-color:#0056c3}

/* Bottom Grid Section: 3 Cards Side-by-Side */
.products-scope .bottom-grid{display:grid;grid-template-columns:1.05fr 1fr 1.25fr;gap:14px;margin-top:20px}
.products-scope .bottom-card{background:#fff;border:1px solid rgba(194,198,213,.62);border-radius:12px;box-shadow:var(--admin-shadow);padding:16px 18px;display:flex;flex-direction:column}
.products-scope .bottom-card-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:12px}
.products-scope .bottom-card-head h3{margin:0;font-size:13px;font-weight:800;color:#10172f}
.products-scope .link-btn{border:0;background:transparent;color:var(--admin-primary-2);font-size:11px;font-weight:750;padding:0;cursor:pointer}
.products-scope .link-btn:hover{text-decoration:underline}

.products-scope .donut-layout{display:flex;align-items:center;gap:20px;margin-top:6px;flex:1}
.products-scope .donut-chart{
  width:142px;height:142px;border-radius:50%;
  background:conic-gradient(#1456c7 0 33%,#2f7be8 33% 58%,#ff7a1a 58% 74%,#fb4a4a 74% 86%,#7aa994 86% 94%,#8e99ad 94% 100%);
  position:relative;display:grid;place-items:center;flex-shrink:0
}
.products-scope .donut-chart:after{content:"";position:absolute;inset:28px;border-radius:50%;background:#fff}
.products-scope .donut-center{position:relative;z-index:1;text-align:center}
.products-scope .donut-center strong{display:block;font-size:9.5px;font-weight:800;color:#12141C;text-transform:uppercase;letter-spacing:.02em}
.products-scope .donut-center span{display:block;font-size:11.5px;font-weight:600;color:#12141C;margin-top:1px}
.products-scope .legend-grid{display:grid;gap:9px;flex:1}
.products-scope .legend-row{display:grid;grid-template-columns:9px 1fr auto;gap:8px;align-items:center}
.products-scope .legend-row span{font-size:9.5px;font-weight:500;color:#667085}
.products-scope .legend-row strong{font-size:11px;font-weight:600;color:#12141C}
.products-scope .legend-row i{width:8px;height:8px;border-radius:50%}

.products-scope .alert-list,.products-scope .update-list{display:grid;gap:8px;max-height:220px;overflow-y:auto;scrollbar-width:none;-ms-overflow-style:none}
.products-scope .alert-list::-webkit-scrollbar,.products-scope .update-list::-webkit-scrollbar{display:none;width:0;height:0}
.products-scope .alert-item,.products-scope .update-item{
  display:flex;align-items:center;gap:10px;padding:10px 12px;
  border:1px solid #ededf8;border-radius:9px;background:#ffffff;
  transition:all .18s ease
}
.products-scope .alert-item:hover,.products-scope .update-item:hover{
  background:#f8faff;border-color:#c2c6d5;box-shadow:0 2px 6px rgba(0,0,0,.04)
}
.products-scope .mini-thumb{width:36px;height:36px;border:1px solid #c2c6d5;background:#f8faff;border-radius:8px;display:grid;place-items:center;font-size:16px;flex-shrink:0;overflow:hidden}
.products-scope .mini-thumb img{width:100%;height:100%;object-fit:cover;border-radius:7px}
.products-scope .item-info strong{display:block;font-size:12px;font-weight:700;color:#10172f}
.products-scope .item-info small{display:block;font-size:10.5px;color:#667085;margin-top:1px}
.products-scope .alert-right{margin-left:auto;text-align:right}
.products-scope .alert-right b{font-size:11px;color:#d66c00;display:block;font-weight:800}
.products-scope .alert-right span{font-size:10px;color:#6c768b}
.products-scope .update-right{margin-left:auto;text-align:right}
.products-scope .update-right span{font-size:11px;color:#191b23;font-weight:600}
.products-scope .update-right time{display:block;font-size:10px;color:#7a8497;margin-top:2px}

/* Drawer & Modal Styling */
.products-scope .drawer-bg{position:fixed;inset:0;background:rgba(14,22,43,.45);z-index:100}
.products-scope .drawer{position:absolute;right:0;top:0;width:min(540px,100%);height:100%;background:#fff;overflow:auto;box-shadow:-18px 0 55px rgba(16,24,40,.16);padding:20px}
.products-scope .drawer-top{display:flex;align-items:flex-start;justify-content:space-between;padding-bottom:14px;border-bottom:1px solid #ededf8}
.products-scope .drawer-top h2{font-size:20px;font-weight:800;margin:0}
.products-scope .drawer-section{padding:16px 0;border-bottom:1px solid #ededf8}
.products-scope .drawer-section h3{font-size:12px;font-weight:800;margin:0 0 10px}
.products-scope .detail-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.products-scope .detail{padding:11px;border:1px solid #ededf8;border-radius:99px;border-radius:9px}
.products-scope .detail span{font-size:10px;color:#667085;font-weight:600}
.products-scope .detail strong{display:block;font-size:12px;font-weight:700;margin-top:3px}
.products-scope .drawer-actions{display:flex;gap:10px;padding-top:16px;position:sticky;bottom:0;background:#fff;border-top:1px solid #ededf8}

.products-scope .modal-wrap{position:fixed;inset:0;background:rgba(25,27,35,.48);z-index:110;display:grid;place-items:center;padding:16px}
.products-scope .modal{width:min(700px,100%);max-height:90vh;overflow-y:auto;background:#fff;border-radius:12px;box-shadow:0 18px 55px rgba(25,27,35,.18);padding:20px}
.products-scope .modal-head{display:flex;align-items:flex-start;justify-content:space-between;gap:12px;padding-bottom:14px;border-bottom:1px solid #ededf8;flex-wrap:nowrap;width:100%}
.products-scope .modal-head h2{margin:0;font-size:19px;font-weight:800;color:#191b23}
.products-scope .form-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:14px}.products-scope .field{display:grid;gap:6px;align-content:start}.products-scope .field.full{grid-column:1/3}
.products-scope .field-pair-grid{grid-column:1/3;display:grid;grid-template-columns:1fr 1fr;gap:12px}
.products-scope .field label{font-size:11px;font-weight:800;color:#191b23}
.products-scope .field input,.products-scope .field textarea,.products-scope .field select{
  width:100%;border:1px solid #c2c6d5;border-radius:8px;background:#fff;padding:0 11px;font-size:12px;color:#191b23;outline:none;box-sizing:border-box
}
.products-scope .field input,.products-scope .field select{height:38px}
.products-scope .field textarea{min-height:84px;padding:10px 11px;resize:vertical}
.products-scope .field input:focus,.products-scope .field textarea:focus,.products-scope .field select:focus{border-color:#0056c3;box-shadow:0 0 0 3px rgba(0,86,195,.1)}
.products-scope .image-dropzone{border:2px dashed #0056c3;border-radius:10px;background:#f8faff;padding:18px;text-align:center;color:#0056c3;cursor:pointer;display:block;transition:all 180ms ease}
.products-scope .image-dropzone:hover{background:#edf3ff;border-color:#004094}
.products-scope .image-grid{display:flex;gap:10px;flex-wrap:wrap;margin-top:10px}
.products-scope .image-thumb-box{width:64px;height:64px;border-radius:8px;border:1px solid #c2c6d5;position:relative;background:#f3f3fe}
.products-scope .image-thumb-box img{width:100%;height:100%;border-radius:7px;object-fit:cover}
.products-scope .image-thumb-remove{position:absolute;top:-6px;right:-6px;width:20px;height:20px;border-radius:50%;background:#b12626;color:#fff;border:0;display:grid;place-items:center;font-size:11px;cursor:pointer;box-shadow:0 2px 6px rgba(0,0,0,.18)}
.products-scope .modal-actions{display:flex;align-items:center;justify-content:flex-end;gap:12px;margin-top:20px;padding-top:14px;border-top:1px solid #ededf8}
.products-scope .upload-box{border:1px dashed #0056c3;border-radius:10px;padding:22px;text-align:center;color:#0056c3;background:#f8faff}
.products-scope .upload-box input{margin-top:10px}
.products-scope .toast{position:fixed;right:20px;bottom:20px;z-index:130;background:#191b23;color:#fff;border-radius:10px;padding:12px 14px;box-shadow:0 14px 36px rgba(25,27,35,.2);display:flex;align-items:center;gap:9px;font-size:11px;font-weight:700}

.products-scope .sync-pill {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background: #eef3ff;
  color: #0056c3;
  font-size: 10.5px;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 999px;
  margin-left: 8px;
  vertical-align: middle;
  border: 1px solid #d0e0fc;
}
.products-scope .cascading-select-row {
  display: flex;
  align-items: center;
  gap: 6px;
  position: relative;
}
.products-scope .cascading-select-row:has(.master-dropdown.open) {
  position: relative;
  z-index: 1001;
}
.products-scope .cascading-select-row .master-dropdown {
  flex: 1;
  min-width: 0;
}
.products-scope .field:has(.master-dropdown.open),
.products-scope .field:focus-within {
  position: relative;
  z-index: 1000;
}
.products-scope .modal-dropdown {
  width: 100%;
  display: block;
  position: relative;
}
.products-scope .modal-dropdown.open {
  position: relative;
  z-index: 99999 !important;
}
.products-scope .modal-dropdown .master-dropdown-trigger {
  width: 100%;
  height: 38px;
  border-radius: 8px;
  border: 1px solid #c2c6d5;
  background: #ffffff;
  padding: 0 12px;
  font-size: 12.5px;
  font-weight: 600;
  color: #191b23;
  justify-content: space-between;
  box-sizing: border-box;
}
.products-scope .modal-dropdown .master-dropdown-label {
  font-size: 12.5px;
  font-weight: 600;
  color: #191b23;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.products-scope .modal-dropdown .master-dropdown-menu {
  width: 100%;
  max-height: 240px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #c2c6d5 transparent;
  z-index: 999999 !important;
}
.products-scope .modal-dropdown .master-dropdown-menu::-webkit-scrollbar {
  width: 5px;
}
.products-scope .modal-dropdown .master-dropdown-menu::-webkit-scrollbar-track {
  background: transparent;
}
.products-scope .modal-dropdown .master-dropdown-menu::-webkit-scrollbar-thumb {
  background: #c2c6d5;
  border-radius: 4px;
}
.products-scope .cascade-sep {
  color: #8c95a6;
  font-size: 16px;
  font-weight: 700;
  user-select: none;
  flex-shrink: 0;
}
.products-scope .url-slug-preview {
  margin-top: 5px;
  font-size: 11px;
  font-weight: 500;
  color: #667085;
  display: flex;
  align-items: center;
  gap: 4px;
}
.products-scope .url-slug-label {
  color: #667085;
}
.products-scope .url-slug-val {
  font-weight: 800;
  color: #191b23;
}
.products-scope .desc-box {
  border: 1px solid #c2c6d5;
  border-radius: 8px;
  background: #ffffff;
  overflow: hidden;
  transition: border-color 0.18s ease;
}
.products-scope .desc-box:focus-within {
  border-color: #0056c3;
  box-shadow: 0 0 0 3px rgba(0, 86, 195, 0.1);
}
.products-scope .desc-toolbar {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 10px;
  background: #fafbfe;
  border-bottom: 1px solid #ededf8;
}
.products-scope .desc-tool-btn {
  width: 26px;
  height: 26px;
  border-radius: 4px;
  border: 0;
  background: transparent;
  color: #424753;
  display: grid;
  place-items: center;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.15s ease;
}
.products-scope .desc-tool-btn:hover {
  background: #eef3ff;
  color: #0056c3;
}
.products-scope .desc-toolbar-sep {
  width: 1px;
  height: 16px;
  background: #dfe4ef;
  margin: 0 4px;
}
.products-scope .desc-textarea {
  width: 100%;
  border: 0;
  outline: none;
  padding: 10px 12px;
  font-size: 12.5px;
  font-family: inherit;
  color: #191b23;
  min-height: 80px;
  resize: vertical;
  background: transparent;
}
.products-scope .desc-footer {
  display: flex;
  justify-content: flex-end;
  padding: 4px 10px 8px;
  font-size: 11px;
  color: #8c95a6;
  font-weight: 600;
  font-family: inherit;
}
.products-scope .desc-footer span {
  font-size: 11px;
  color: #8c95a6;
  font-weight: 600;
  font-family: inherit;
}
.products-scope .add-cat-btn {
  border: 0;
  background: transparent;
  color: #0056c3;
  font-size: 11.5px;
  font-weight: 700;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 3px 7px;
  border-radius: 5px;
  transition: all 0.16s ease;
  margin-left: auto;
}
.products-scope .add-cat-btn:hover {
  background: #e7efff;
  color: #003882;
}

.products-scope .color-dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 1px solid rgba(0,0,0,0.18);
  display: inline-block;
  flex-shrink: 0;
  vertical-align: middle;
}
.products-scope .color-swatch-list {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 6px;
}
.products-scope .color-swatch-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 11px;
  border-radius: 999px;
  border: 1.5px solid #d1d5db;
  background: #ffffff;
  font-size: 11.5px;
  font-weight: 700;
  color: #1e293b;
  cursor: pointer;
  transition: all 0.16s ease;
}
.products-scope .color-swatch-btn:hover {
  border-color: #0056c3;
  background: #f0f6ff;
}
.products-scope .color-swatch-btn.selected {
  border-color: #0056c3;
  background: #eff6ff;
  color: #004094;
  box-shadow: 0 0 0 2px rgba(0, 86, 195, 0.18);
}
.products-scope .preset-mode-tabs {
  display: flex;
  gap: 4px;
  background: #f1f5f9;
  padding: 3px;
  border-radius: 8px;
  margin-bottom: 10px;
}
.products-scope .preset-mode-tab {
  flex: 1;
  padding: 6px 10px;
  border-radius: 6px;
  border: 0;
  background: transparent;
  font-size: 11.5px;
  font-weight: 700;
  color: #64748b;
  cursor: pointer;
  text-align: center;
  transition: all 0.15s ease;
}
.products-scope .preset-mode-tab.active {
  background: #ffffff;
  color: #004094;
  box-shadow: 0 1px 3px rgba(0,0,0,0.08);
}
.products-scope .preset-grid {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}
.products-scope .preset-btn {
  padding: 5px 12px;
  border-radius: 6px;
  border: 1px solid #cbd5e1;
  background: #fff;
  font-size: 11.5px;
  font-weight: 700;
  color: #334155;
  cursor: pointer;
  transition: all 0.15s ease;
}
.products-scope .preset-btn:hover {
  border-color: #0056c3;
  color: #0056c3;
  background: #f8faff;
}
.products-scope .preset-btn.active {
  border-color: #0056c3;
  background: #0056c3;
  color: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 86, 195, 0.25);
}
.products-scope .variant-tag {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 7px;
  border-radius: 5px;
  background: #f1f5f9;
  border: 1px solid #e2e8f0;
  font-size: 11px;
  font-weight: 700;
  color: #334155;
}
.products-scope .variant-chip-remove {
  border: 0;
  background: transparent;
  color: #94a3b8;
  cursor: pointer;
  padding: 0;
  display: grid;
  place-items: center;
  font-size: 11px;
  margin-left: 2px;
}
.products-scope .variant-chip-remove:hover {
  color: #b12626;
}
.products-scope .brand-badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 7px;
  border-radius: 5px;
  background: #fef3c7;
  color: #92400e;
  border: 1px solid #fde68a;
  font-size: 10.5px;
  font-weight: 700;
}
.products-scope .product-modal {
  width: min(780px, 100%);
  max-height: 92vh;
  padding: 24px;
}
.products-scope .custom-color-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
  padding: 10px;
  background: #f8faff;
  border-radius: 8px;
  border: 1px solid #bfdbfe;
}
.products-scope .custom-spec-row {
  display: flex;
  gap: 8px;
  margin-top: 10px;
}
.products-scope .variant-matrix-card {
  border: 1px solid #e2e8f0;
  border-radius: 9px;
  background: #fafbfe;
  padding: 12px;
  margin-top: 8px;
}
.products-scope .variant-matrix-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}
.products-scope .variant-matrix-table-wrap {
  max-height: 240px;
  overflow-y: auto;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  margin-top: 8px;
  border: 1px solid #e2e8f0;
  border-radius: 7px;
  background: #ffffff;
}
.products-scope .variant-matrix-table {
  width: 100%;
  min-width: 480px;
  border-collapse: collapse;
  font-size: 11.5px;
  background: #ffffff;
  border: 0;
}
.products-scope .variant-matrix-table th {
  background: #f1f5f9;
  padding: 7px 10px;
  font-size: 10.5px;
  font-weight: 800;
  color: #475569;
  border-bottom: 1px solid #e2e8f0;
  text-align: left;
  text-transform: uppercase;
}
.products-scope .variant-matrix-table td {
  padding: 7px 10px;
  border-bottom: 1px solid #f1f5f9;
  vertical-align: middle;
  height: auto;
  font-size: 11.5px;
}
.products-scope .variant-matrix-table input {
  padding: 4px 8px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  font-size: 11px;
  width: 100%;
  height: 28px;
}
.products-scope .category-split-badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 8px;
  background: #eff6ff;
  color: #1e40af;
  border: 1px solid #bfdbfe;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 700;
}

.products-scope *::-webkit-scrollbar,
.products-scope .modal::-webkit-scrollbar,
.products-scope .modal *::-webkit-scrollbar {
  display: none !important;
  width: 0 !important;
  height: 0 !important;
}
.products-scope *,
.products-scope .modal,
.products-scope .modal * {
  scrollbar-width: none !important;
  -ms-overflow-style: none !important;
}

@media(max-width:1250px){.products-scope .kpi-grid{grid-template-columns:repeat(3,1fr)}.products-scope .bottom-grid{grid-template-columns:1fr 1fr}.products-scope .bottom-grid .bottom-card:last-child{grid-column:1/3}}
@media(max-width:1049px){
  .products-scope .desktop-sidebar-wrapper{display:none}
  .products-scope .dashboard-content{padding:20px}
  .products-scope .bottom-grid{grid-template-columns:1fr !important; gap:14px !important;}
  .products-scope .bottom-grid .bottom-card:last-child{grid-column:auto !important;}
}

@media(max-width:768px){
  .products-scope .dashboard-content {
    padding: 14px 10px 24px !important;
    max-width: 100vw;
    overflow-x: clip;
    box-sizing: border-box;
  }
  .products-scope .page-heading {
    flex-direction: column !important;
    align-items: flex-start !important;
    gap: 10px !important;
    margin-bottom: 14px !important;
  }
  .products-scope .page-heading h1 { font-size: 22px !important; }
  .products-scope .page-heading p { font-size: 12px !important; margin-top: 2px !important; }
  .products-scope .page-actions {
    display: grid !important;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) !important;
    gap: 8px !important;
    width: 100% !important;
  }
  .products-scope .action-dropdown-wrap {
    width: 100% !important;
  }
  .products-scope .action-dropdown-wrap .secondary-action {
    width: 100% !important;
    justify-content: center !important;
    height: 38px !important;
    padding: 0 10px !important;
    font-size: 12px !important;
  }
  .products-scope .page-actions > .secondary-action {
    width: 100% !important;
    justify-content: center !important;
    height: 38px !important;
    padding: 0 10px !important;
    font-size: 12px !important;
  }
  .products-scope .primary-action {
    grid-column: 1 / -1 !important;
    width: 100% !important;
    justify-content: center !important;
    height: 38px !important;
    font-size: 13px !important;
    font-weight: 800 !important;
    margin-top: 2px !important;
  }
  .products-scope .action-dropdown-menu {
    left: 0 !important;
    right: auto !important;
    min-width: 240px !important;
    max-width: calc(100vw - 32px) !important;
  }
  .products-scope .kpi-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    gap: 8px !important;
    margin-bottom: 14px !important;
  }
  .products-scope .products-split {
    width: 100% !important;
    max-width: 100% !important;
    min-width: 0 !important;
    box-sizing: border-box !important;
    overflow: visible !important;
  }
  .products-scope .management-panel {
    width: 100% !important;
    max-width: 100% !important;
    min-width: 0 !important;
    box-sizing: border-box !important;
    overflow: visible !important;
  }
  .products-scope .tabs {
    padding: 0 6px !important;
    gap: 2px !important;
  }
  .products-scope .tab {
    padding: 0 10px !important;
    font-size: 11.5px !important;
  }
  .products-scope .filters {
    display: grid !important;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) !important;
    gap: 8px !important;
    padding: 10px 12px !important;
    width: 100% !important;
    box-sizing: border-box !important;
  }
  .products-scope .local-search {
    grid-column: 1 / -1 !important;
    width: 100% !important;
    max-width: none !important;
    height: 38px !important;
    box-sizing: border-box !important;
  }
  .products-scope .filters .master-dropdown {
    width: 100% !important;
    min-width: 0 !important;
    display: block !important;
    box-sizing: border-box !important;
  }
  .products-scope .filters .master-dropdown-trigger {
    width: 100% !important;
    min-width: 0 !important;
    height: 38px !important;
    padding: 0 10px !important;
    justify-content: space-between !important;
    font-size: 11.5px !important;
    box-sizing: border-box !important;
  }
  .products-scope .filters .master-dropdown-label {
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    white-space: nowrap !important;
    font-size: 11.5px !important;
  }
  .products-scope .filter-button {
    width: 100% !important;
    min-width: 0 !important;
    height: 38px !important;
    padding: 0 10px !important;
    font-size: 11.5px !important;
    justify-content: center !important;
    box-sizing: border-box !important;
  }
  .products-scope .filters .secondary-action {
    display: none !important;
  }
  .products-scope .selection-bar {
    padding: 8px 12px !important;
    font-size: 11px !important;
    flex-wrap: wrap !important;
    gap: 8px !important;
    box-sizing: border-box !important;
  }
  .products-scope .selection-bar .selection-spacer { display: none !important; }
  .products-scope .table-scroll {
    display: none !important;
  }
  .products-scope .footerbar {
    flex-direction: column !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 10px !important;
    padding: 14px 12px !important;
    height: auto !important;
    text-align: center !important;
  }
  .products-scope .footerbar > span {
    display: block !important;
    width: 100% !important;
    text-align: center !important;
    font-size: 11.5px !important;
    color: #667085 !important;
    margin: 0 !important;
  }
  .products-scope .pagination {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 6px !important;
    width: 100% !important;
  }
  .products-scope .bottom-grid {
    grid-template-columns: 1fr !important;
    gap: 12px !important;
  }

  /* Match bottom cards with Inventory page sizing */
  .products-scope .bottom-card {
    padding: 16px 18px !important;
    border-radius: 12px !important;
  }

  .products-scope .bottom-card-head {
    margin-bottom: 12px !important;
  }

  .products-scope .bottom-card-head h3 {
    font-size: 13px !important;
    font-weight: 800 !important;
    color: #10172f !important;
  }

  .products-scope .link-btn {
    font-size: 11px !important;
    font-weight: 750 !important;
    color: #0056c3 !important;
  }

  /* Donut chart card: keep graph on left and data at right side */
  .products-scope .donut-layout {
    display: flex !important;
    flex-direction: row !important;
    align-items: center !important;
    justify-content: flex-start !important;
    gap: 14px !important;
  }

  .products-scope .donut-chart {
    width: 124px !important;
    height: 124px !important;
    flex-shrink: 0 !important;
  }

  .products-scope .donut-chart:after {
    inset: 22px !important;
  }

  .products-scope .donut-center strong {
    font-size: 8px !important;
    font-weight: 800 !important;
  }

  .products-scope .donut-center span {
    font-size: 11px !important;
    font-weight: 700 !important;
  }

  .products-scope .legend-grid {
    flex: 1 !important;
    min-width: 0 !important;
    display: grid !important;
    gap: 6px !important;
    width: auto !important;
  }

  .products-scope .legend-row {
    display: flex !important;
    align-items: center !important;
    gap: 7px !important;
    padding: 0 !important;
    background: transparent !important;
    border: none !important;
    border-radius: 0 !important;
  }

  .products-scope .legend-row span {
    font-size: 11px !important;
    color: #424753 !important;
    font-weight: 600 !important;
    white-space: nowrap !important;
  }

  .products-scope .legend-row strong {
    font-size: 11px !important;
    font-weight: 700 !important;
    color: #10172f !important;
    margin-left: auto !important;
    white-space: nowrap !important;
  }

  .products-scope .legend-row i {
    width: 8px !important;
    height: 8px !important;
    border-radius: 50% !important;
    flex-shrink: 0 !important;
  }

  /* Alert list & Update list: exactly matched with InventoryManagement page sizing */
  .products-scope .alert-list,
  .products-scope .update-list {
    display: grid !important;
    gap: 8px !important;
    max-height: 220px !important;
    overflow-y: auto !important;
    scrollbar-width: none !important;
    -ms-overflow-style: none !important;
  }
  .products-scope .alert-list::-webkit-scrollbar,
  .products-scope .update-list::-webkit-scrollbar {
    display: none !important;
    width: 0 !important;
    height: 0 !important;
  }

  .products-scope .alert-item,
  .products-scope .update-item {
    display: flex !important;
    align-items: center !important;
    gap: 10px !important;
    padding: 10px 12px !important;
    border-radius: 9px !important;
    border: 1px solid #ededf8 !important;
    background: #ffffff !important;
    transition: all .18s ease !important;
  }

  .products-scope .mini-thumb {
    width: 36px !important;
    height: 36px !important;
    border: 1px solid #c2c6d5 !important;
    background: #f8faff !important;
    border-radius: 8px !important;
    font-size: 16px !important;
    display: grid !important;
    place-items: center !important;
    flex-shrink: 0 !important;
    overflow: hidden !important;
  }

  .products-scope .item-info {
    flex: 1 !important;
    min-width: 0 !important;
  }

  .products-scope .item-info strong {
    display: block !important;
    font-size: 12px !important;
    font-weight: 700 !important;
    color: #10172f !important;
    white-space: normal !important;
    line-height: 1.3 !important;
  }

  .products-scope .item-info small {
    display: block !important;
    font-size: 10.5px !important;
    color: #667085 !important;
    margin-top: 1px !important;
  }

  /* Alert right (Low Stock: stock count + reorder) matching Inventory exactly */
  .products-scope .alert-right {
    margin-left: auto !important;
    text-align: right !important;
    flex-shrink: 0 !important;
  }

  .products-scope .alert-right b {
    font-size: 11px !important;
    font-weight: 800 !important;
    color: #d66c00 !important;
    display: block !important;
  }

  .products-scope .alert-right span {
    font-size: 10px !important;
    color: #6c768b !important;
    display: block !important;
    margin-top: 1px !important;
  }

  /* Update right (Recent updates: action label + time) matching Inventory exactly */
  .products-scope .update-right {
    margin-left: auto !important;
    text-align: right !important;
    flex-shrink: 0 !important;
    max-width: 48% !important;
  }

  .products-scope .update-right span {
    font-size: 11px !important;
    color: #191b23 !important;
    font-weight: 600 !important;
    white-space: normal !important;
    line-height: 1.3 !important;
  }

  .products-scope .update-right time {
    font-size: 10px !important;
    color: #7a8497 !important;
    margin-top: 2px !important;
    line-height: 1.4 !important;
    white-space: normal !important;
    display: block !important;
  }

  .products-scope .modal-wrap {
    padding: 8px 6px !important;
    align-items: center !important;
    justify-content: center !important;
  }
  .products-scope .modal,
  .products-scope .product-modal {
    width: calc(100vw - 16px) !important;
    max-width: 100% !important;
    padding: 16px 12px !important;
    max-height: 92vh !important;
    max-height: calc(100dvh - 16px) !important;
    border-radius: 12px !important;
    overflow-y: auto !important;
    overflow-x: hidden !important;
    -webkit-overflow-scrolling: touch !important;
    box-sizing: border-box !important;
  }
  .products-scope .modal-head {
    display: flex !important;
    align-items: flex-start !important;
    gap: 12px !important;
    padding-bottom: 12px !important;
  }
  .products-scope .modal-head h2 {
    font-size: 18px !important;
    font-weight: 800 !important;
    color: #191b23 !important;
    line-height: 1.25 !important;
  }
  .products-scope .modal-head div {
    font-size: 11px !important;
    line-height: 1.35 !important;
  }
  .products-scope .form-grid {
    grid-template-columns: 1fr !important;
    gap: 11px !important;
    margin-top: 11px !important;
  }
  .products-scope .field.full {
    grid-column: auto !important;
  }
  .products-scope .field-pair-grid {
    grid-column: auto !important;
    display: grid !important;
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    gap: 10px !important;
    width: 100% !important;
  }
  .products-scope .field label {
    font-size: 11px !important;
    display: flex !important;
    flex-wrap: wrap !important;
    justify-content: space-between !important;
    align-items: center !important;
    gap: 4px !important;
    width: 100% !important;
  }
  .products-scope .field label span {
    word-break: break-word !important;
    white-space: normal !important;
  }
  .products-scope .field input,
  .products-scope .field textarea,
  .products-scope .field select {
    font-size: 13px !important;
    height: 38px !important;
    box-sizing: border-box !important;
    width: 100% !important;
  }
  .products-scope .field textarea {
    height: auto !important;
  }
  .products-scope .add-cat-btn {
    font-size: 10.5px !important;
    padding: 2px 7px !important;
  }

  /* Responsive Cascading Select */
  .products-scope .cascading-select-row {
    flex-direction: column !important;
    align-items: stretch !important;
    gap: 6px !important;
    width: 100% !important;
  }
  .products-scope .cascading-select-row .master-dropdown {
    width: 100% !important;
  }
  .products-scope .cascade-sep {
    display: none !important;
  }
  .products-scope .url-slug-preview {
    flex-wrap: wrap !important;
    word-break: break-all !important;
  }

  /* Responsive Variant Preset Mode Tabs (Horizontal scrollable pill strip) */
  .products-scope .preset-mode-tabs {
    overflow-x: auto !important;
    white-space: nowrap !important;
    flex-wrap: nowrap !important;
    scrollbar-width: none !important;
    -webkit-overflow-scrolling: touch !important;
    padding: 3px !important;
    gap: 4px !important;
    margin-bottom: 8px !important;
  }
  .products-scope .preset-mode-tab {
    flex: 0 0 auto !important;
    font-size: 11px !important;
    padding: 6px 11px !important;
    white-space: nowrap !important;
  }

  /* Responsive Preset Buttons */
  .products-scope .preset-grid {
    gap: 5px !important;
  }
  .products-scope .preset-btn {
    padding: 5px 9px !important;
    font-size: 11px !important;
  }

  /* Responsive Color Swatches & Custom Color */
  .products-scope .color-swatch-list {
    gap: 6px !important;
    max-height: 140px !important;
    overflow-y: auto !important;
  }
  .products-scope .color-swatch-btn {
    padding: 4px 8px !important;
    font-size: 11px !important;
  }
  .products-scope .custom-color-row {
    flex-wrap: wrap !important;
    gap: 6px !important;
  }
  .products-scope .custom-color-row input[type="text"] {
    flex: 1 1 calc(100% - 50px) !important;
  }
  .products-scope .custom-color-row button {
    width: 100% !important;
    margin-top: 2px !important;
  }

  /* Responsive Custom Spec Adder */
  .products-scope .custom-spec-row {
    flex-wrap: wrap !important;
    gap: 6px !important;
  }
  .products-scope .custom-spec-row button {
    width: 100% !important;
  }

  /* Responsive Variant Combinations Matrix */
  .products-scope .variant-matrix-card {
    padding: 10px 8px !important;
    box-sizing: border-box !important;
    max-width: 100% !important;
  }
  .products-scope .variant-matrix-head {
    flex-direction: column !important;
    align-items: flex-start !important;
    gap: 8px !important;
  }
  .products-scope .variant-matrix-head > div:last-child {
    width: 100% !important;
    justify-content: space-between !important;
    display: flex !important;
  }
  .products-scope .variant-matrix-table-wrap {
    overflow-x: auto !important;
    width: 100% !important;
    box-sizing: border-box !important;
    -webkit-overflow-scrolling: touch !important;
  }
  .products-scope .variant-matrix-table {
    min-width: 460px !important;
  }

  /* Responsive Description Box */
  .products-scope .desc-toolbar {
    flex-wrap: wrap !important;
    gap: 4px !important;
    padding: 6px 8px !important;
  }
  .products-scope .desc-tool-btn {
    width: 28px !important;
    height: 28px !important;
  }

  /* Responsive Modal Actions */
  .products-scope .modal-actions {
    flex-direction: column-reverse !important;
    gap: 8px !important;
    margin-top: 14px !important;
    padding-top: 12px !important;
  }
  .products-scope .modal-actions button,
  .products-scope .modal-actions .secondary-action,
  .products-scope .modal-actions .primary-action {
    width: 100% !important;
    height: 40px !important;
    font-size: 13px !important;
    justify-content: center !important;
  }
}
`;

export const initialCategoryTaxonomy = {
  "Men": ["Shirts", "Trousers", "Jackets", "T-Shirts", "Footwear", "Accessories"],
  "Women": ["Bags", "Dresses", "Tops", "Trousers", "Jackets", "Footwear", "Jewelry"],
  "Watches": ["Analog Watches", "Smartwatches", "Chronographs", "Luxury", "Watch Straps"],
  "Kids": ["Boys Clothing", "Girls Clothing", "Footwear", "Toys", "Accessories"],
  "Home & Living": ["Decor", "Fragrance", "Furniture", "Kitchen", "Bedding"],
  "Beauty": ["Skincare", "Fragrance", "Haircare", "Makeup", "Bath & Body"],
  "Electronics": ["Audio", "Wearables", "Accessories", "Gadgets"],
  "Jewelry": ["Watches", "Rings", "Necklaces", "Bracelets"]
};

export const initialCatalogPathTaxonomy = {
  "Clothing": ["Shirts", "Trousers", "Jackets", "T-Shirts", "Dresses", "Tops", "Boys Clothing", "Girls Clothing"],
  "Footwear": ["Sneakers", "Formal Shoes", "Sandals", "Boots", "Footwear"],
  "Watches": ["Analog Watches", "Smartwatches", "Chronographs", "Luxury", "Watch Straps"],
  "Accessories": ["Bags", "Watches", "Wallets", "Belts", "Jewelry", "Audio", "Wearables", "Gadgets", "Accessories"],
  "Home & Living": ["Decor", "Fragrance", "Furniture", "Kitchen", "Bedding"],
  "Beauty": ["Skincare", "Fragrance", "Haircare", "Makeup", "Bath & Body"],
  "Electronics": ["Audio", "Wearables", "Accessories", "Gadgets"]
};

export const categoryTaxonomy = initialCategoryTaxonomy;
export const catalogPathTaxonomy = initialCatalogPathTaxonomy;

const slugify = (text) => {
  return String(text || "")
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

export const standardColorPalette = [
  { name: "Midnight Black", hex: "#111827" },
  { name: "Pure White", hex: "#ffffff" },
  { name: "Navy Blue", hex: "#1e3a8a" },
  { name: "Charcoal Grey", hex: "#374151" },
  { name: "Heather Grey", hex: "#9ca3af" },
  { name: "Olive Green", hex: "#4d5b2b" },
  { name: "Crimson Red", hex: "#b91c1c" },
  { name: "Burgundy Wine", hex: "#800020" },
  { name: "Rose Gold", hex: "#b76e79" },
  { name: "Silver Metallic", hex: "#c0c0c0" },
  { name: "Royal Gold", hex: "#d97706" },
  { name: "Sky Blue", hex: "#38bdf8" },
  { name: "Forest Green", hex: "#15803d" },
  { name: "Tan / Brown", hex: "#8b5a2b" },
];

export const initialCategoryOptions = [
  "All Categories",
  "Men > Shirts",
  "Men > Footwear",
  "Women > Bags",
  "Watches > Chronographs",
  "Watches > Smartwatches",
  "Electronics > Audio",
  "Beauty > Skincare",
  "Jewelry > Watches",
  "Home & Living"
];

export const categoryOptions = initialCategoryOptions;

const seedProducts = [
  {
    id: "PRD-001",
    name: "Leather Tote Bag",
    variant: "Bags > Tote Bags",
    sku: "AMH-BAG-001",
    category: "Women > Bags",
    brand: "AMIHIVE",
    brandVariant: "Heritage Leather",
    colors: [
      { name: "Tan / Brown", hex: "#8b5a2b" },
      { name: "Midnight Black", hex: "#111827" },
      { name: "Olive Green", hex: "#4d5b2b" }
    ],
    sizes: ["Standard Medium", "Large Carryall"],
    variants: [
      { name: "Tan / Standard Medium", sku: "AMH-BAG-001-TAN-M", stock: 60, price: 2499 },
      { name: "Midnight Black / Large", sku: "AMH-BAG-001-BLK-L", stock: 60, price: 2899 }
    ],
    price: 2499,
    available: 120,
    reserved: 4,
    sales: 184,
    revenue: 459816,
    status: "Published",
    updated: "May 18, 2025 10:30 AM",
    description: "Full-grain leather tote bag with interior organizer pockets and reinforced straps.",
    images: []
  },
  {
    id: "PRD-002",
    name: "Classic White Sneakers",
    variant: "Footwear > Sneakers",
    sku: "AMH-FWT-045",
    category: "Men > Footwear",
    brand: "Field Works",
    brandVariant: "Court Classic Edition",
    colors: [
      { name: "Pure White", hex: "#ffffff" },
      { name: "Heather Grey", hex: "#9ca3af" }
    ],
    sizes: ["UK 7", "UK 8", "UK 9", "UK 10", "UK 11"],
    variants: [
      { name: "Pure White / UK 8", sku: "AMH-FWT-045-WHT-8", stock: 4, price: 3199 },
      { name: "Pure White / UK 9", sku: "AMH-FWT-045-WHT-9", stock: 4, price: 3199 }
    ],
    price: 3199,
    available: 8,
    reserved: 2,
    sales: 92,
    revenue: 294308,
    status: "Published",
    updated: "May 18, 2025 09:21 AM",
    description: "Minimalist white leather sneakers built for daily comfort with memory foam cushioning.",
    images: []
  },
  {
    id: "PRD-003",
    name: "Linen Blend Shirt",
    variant: "Clothing > Shirts",
    sku: "AMH-SHR-117",
    category: "Men > Shirts",
    brand: "Contour",
    brandVariant: "Relaxed Tailored Fit",
    colors: [
      { name: "Pure White", hex: "#ffffff" },
      { name: "Sky Blue", hex: "#38bdf8" },
      { name: "Navy Blue", hex: "#1e3a8a" },
      { name: "Olive Green", hex: "#4d5b2b" }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    variants: [
      { name: "Sky Blue / S", sku: "AMH-SHR-117-BLU-S", stock: 15, price: 1799 },
      { name: "Sky Blue / M", sku: "AMH-SHR-117-BLU-M", stock: 20, price: 1799 },
      { name: "Pure White / L", sku: "AMH-SHR-117-WHT-L", stock: 20, price: 1799 }
    ],
    price: 1799,
    available: 55,
    reserved: 3,
    sales: 118,
    revenue: 212282,
    status: "Published",
    updated: "May 17, 2025 06:15 PM",
    description: "Breathable linen blend shirt with a relaxed tailored profile and soft washed finish.",
    images: []
  },
  {
    id: "PRD-004",
    name: "Octane Chrono Smartwatch",
    variant: "Watches > Chronographs",
    sku: "AMH-WTC-088",
    category: "Watches > Chronographs",
    brand: "Titan",
    brandVariant: "Chrono Pro Series",
    colors: [
      { name: "Midnight Black", hex: "#111827" },
      { name: "Silver Metallic", hex: "#c0c0c0" },
      { name: "Rose Gold", hex: "#b76e79" }
    ],
    sizes: ["42mm", "44mm", "Leather Strap", "Stainless Steel"],
    variants: [
      { name: "Midnight Black / 42mm - Leather Strap", sku: "AMH-WTC-088-BLK-42L", stock: 12, price: 8499 },
      { name: "Silver Metallic / 44mm - Stainless Steel", sku: "AMH-WTC-088-SLV-44S", stock: 10, price: 9999 }
    ],
    price: 8499,
    available: 22,
    reserved: 1,
    sales: 64,
    revenue: 543936,
    status: "Published",
    updated: "May 17, 2025 05:40 PM",
    description: "Precision chronograph wristwatch featuring sapphire glass, dual subdials, and interchangeable premium straps.",
    images: []
  },
  {
    id: "PRD-005",
    name: "Wireless ANC Headphones",
    variant: "Electronics > Audio",
    sku: "AMH-AUD-009",
    category: "Electronics > Audio",
    brand: "AMIHIVE",
    brandVariant: "Studio Pro Edition",
    colors: [
      { name: "Midnight Black", hex: "#111827" },
      { name: "Pure White", hex: "#ffffff" }
    ],
    sizes: ["One Size"],
    variants: [],
    price: 4999,
    available: 0,
    reserved: 0,
    sales: 76,
    revenue: 379924,
    status: "Published",
    updated: "May 17, 2025 04:48 PM",
    description: "Active noise-canceling over-ear headphones with 30-hour battery life and spatial audio.",
    images: []
  },
  {
    id: "PRD-006",
    name: "Vitamin C Radiance Serum",
    variant: "Beauty > Skincare",
    sku: "AMH-BTY-021",
    category: "Beauty > Skincare",
    brand: "Earthline",
    brandVariant: "15% Pure Active Booster",
    colors: [{ name: "Amber Glass", hex: "#d97706" }],
    sizes: ["30ml", "50ml"],
    variants: [
      { name: "30ml Standard", sku: "AMH-BTY-021-30ML", stock: 120, price: 1199 },
      { name: "50ml Value Pack", sku: "AMH-BTY-021-50ML", stock: 80, price: 1699 }
    ],
    price: 1199,
    available: 200,
    reserved: 5,
    sales: 211,
    revenue: 252989,
    status: "Draft",
    updated: "May 17, 2025 03:12 PM",
    description: "Brightening antioxidant serum formulated with 15% pure Vitamin C and Hyaluronic Acid.",
    images: []
  },
  {
    id: "PRD-007",
    name: "Minimalist Pima Cotton Polo",
    variant: "Clothing > T-Shirts",
    sku: "AMH-POL-034",
    category: "Men > T-Shirts",
    brand: "AMIHIVE",
    brandVariant: "Signature Pima Collection",
    colors: [
      { name: "Midnight Black", hex: "#111827" },
      { name: "Burgundy Wine", hex: "#800020" },
      { name: "Navy Blue", hex: "#1e3a8a" }
    ],
    sizes: ["S", "M", "L", "XL"],
    variants: [
      { name: "Midnight Black / M", sku: "AMH-POL-034-BLK-M", stock: 30, price: 1499 },
      { name: "Navy Blue / L", sku: "AMH-POL-034-NVY-L", stock: 35, price: 1499 }
    ],
    price: 1499,
    available: 65,
    reserved: 2,
    sales: 142,
    revenue: 212858,
    status: "Published",
    updated: "May 16, 2025 02:15 PM",
    description: "Ultra-soft Peruvian Pima cotton polo shirt with mother-of-pearl buttons.",
    images: []
  }
];

function AddCategoryModal({
  onClose,
  onSave,
  catalogPathTaxonomy = initialCatalogPathTaxonomy
}) {
  const catalogOptions = Object.keys(catalogPathTaxonomy && Object.keys(catalogPathTaxonomy).length > 0 ? catalogPathTaxonomy : initialCatalogPathTaxonomy);
  const [categoryName, setCategoryName] = useState("");
  const [catalogSection, setCatalogSection] = useState(catalogOptions[0] || "Clothing");
  const [customCatalogSection, setCustomCatalogSection] = useState("");
  const [isCustomCatalog, setIsCustomCatalog] = useState(false);
  const [description, setDescription] = useState("");
  const [badgeTag, setBadgeTag] = useState("Active");

  const effectiveCatalogSection = isCustomCatalog ? customCatalogSection.trim() : catalogSection;
  const previewSlug = `/${slugify(effectiveCatalogSection || categoryName)}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!categoryName.trim()) return;

    onSave({
      categoryName: categoryName.trim(),
      catalogSection: effectiveCatalogSection || categoryName.trim(),
      description: description.trim(),
      badgeTag
    });
    onClose();
  };

  return (
    <motion.div
      className="modal-wrap"
      style={{ zIndex: 130 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.form
        className="modal"
        style={{
          width: "min(540px, 100%)",
          padding: "20px 24px",
          overflow: "visible",
          maxHeight: "none"
        }}
        initial={{ y: 16, scale: 0.98 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: 16, scale: 0.98 }}
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit}
      >
        <div className="modal-head" style={{ paddingBottom: 10 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span className="category-split-badge">Level 1</span>
              <h2 style={{ fontSize: 17.5, fontWeight: 800, margin: 0, color: "#10172f" }}>Add Category</h2>
            </div>
            <div style={{ fontSize: 11.5, color: "#667085", marginTop: 4 }}>
              Create a new top-level parent category for your store catalog
            </div>
          </div>
          <button type="button" className="secondary-action" onClick={onClose} style={{ padding: 0, width: 32, height: 32 }}>
            <FiX size={16} />
          </button>
        </div>

        <div className="form-grid" style={{ marginTop: 14, gap: "12px" }}>
          {/* Category Name */}
          <div className="field full">
            <label>Parent Category Name (Level 1) *</label>
            <input
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              placeholder="e.g. Watches, Footwear, Sports & Outdoors"
              required
              autoFocus
            />
          </div>

          {/* Catalog Section */}
          <div className="field full">
            <label style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span>Storefront Catalog Section *</span>
              <button
                type="button"
                style={{ border: 0, background: "transparent", color: "#0056c3", fontSize: 11, fontWeight: 700, cursor: "pointer", padding: 0 }}
                onClick={() => setIsCustomCatalog((v) => !v)}
              >
                {isCustomCatalog ? "Select Existing" : "+ New Section"}
              </button>
            </label>
            {!isCustomCatalog ? (
              <MasterDropdown
                className="modal-dropdown"
                options={catalogOptions}
                value={catalogSection}
                onChange={setCatalogSection}
              />
            ) : (
              <input
                value={customCatalogSection}
                onChange={(e) => setCustomCatalogSection(e.target.value)}
                placeholder="e.g. Timepieces, Outdoor Gear"
                required
              />
            )}
          </div>

          {/* Description */}
          <div className="field full">
            <label>Category Description (Optional)</label>
            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="e.g. Premium analog, smartwatches, and luxury timepieces"
            />
          </div>

          {/* Badge Tag */}
          <div className="field full">
            <label>Category Status Badge</label>
            <MasterDropdown
              className="modal-dropdown"
              options={["Active", "Featured", "Trending", "Seasonal", "New Arrival"]}
              value={badgeTag}
              onChange={setBadgeTag}
            />
          </div>

          {/* Live Storefront URL preview */}
          <div className="field full" style={{ marginTop: 2 }}>
            <label style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 11 }}>
              <FiLink size={11} color="#0056c3" /> Storefront Category URL Preview
            </label>
            <div style={{ background: "#f8faff", border: "1px solid #dbeafe", padding: "8px 12px", borderRadius: 8, fontSize: 11.5, color: "#1e3a8a", display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ fontWeight: 800, color: "#0056c3" }}>https://amihive.com/shop</span>
              <span style={{ fontWeight: 700 }}>{previewSlug || "/..."}</span>
            </div>
          </div>
        </div>

        <div className="modal-actions" style={{ marginTop: 16, paddingTop: 10, display: "flex", justifyContent: "flex-end", gap: 10 }}>
          <button type="button" className="secondary-action" onClick={onClose} style={{ height: 38, padding: "0 16px" }}>
            Cancel
          </button>
          <button type="submit" className="primary-action" disabled={!categoryName.trim()} style={{ height: 38, padding: "0 18px" }}>
            <FiPlus /> Create Category
          </button>
        </div>
      </motion.form>
    </motion.div>
  );
}

function AddSubCategoryModal({
  onClose,
  onSave,
  categoryTaxonomy = initialCategoryTaxonomy,
  catalogPathTaxonomy = initialCatalogPathTaxonomy,
  defaultParent = ""
}) {
  const parentOptions = Object.keys(categoryTaxonomy && Object.keys(categoryTaxonomy).length > 0 ? categoryTaxonomy : initialCategoryTaxonomy);
  const catalogOptions = Object.keys(catalogPathTaxonomy && Object.keys(catalogPathTaxonomy).length > 0 ? catalogPathTaxonomy : initialCatalogPathTaxonomy);

  const [parentCat, setParentCat] = useState(defaultParent && parentOptions.includes(defaultParent) ? defaultParent : parentOptions[0] || "Men");
  const [subCat, setSubCat] = useState("");
  const [catalogSection, setCatalogSection] = useState(catalogOptions[0] || "Clothing");
  const [catalogSubPath, setCatalogSubPath] = useState("");
  const [description, setDescription] = useState("");

  const effectiveCatalogSection = catalogSection;
  const effectiveCatalogSubPath = catalogSubPath.trim() || subCat.trim();
  const previewSlug = `/${slugify(effectiveCatalogSection || parentCat)}/${slugify(effectiveCatalogSubPath || subCat)}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!parentCat || !subCat.trim()) return;

    onSave({
      parentCat,
      subCat: subCat.trim(),
      catalogSection: effectiveCatalogSection,
      catalogSubPath: effectiveCatalogSubPath,
      description: description.trim()
    });
    onClose();
  };

  return (
    <motion.div
      className="modal-wrap"
      style={{ zIndex: 130 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.form
        className="modal"
        style={{
          width: "min(560px, 100%)",
          padding: "20px 24px",
          overflow: "visible",
          maxHeight: "none"
        }}
        initial={{ y: 16, scale: 0.98 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: 16, scale: 0.98 }}
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit}
      >
        <div className="modal-head" style={{ paddingBottom: 10 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span className="category-split-badge" style={{ background: "#fef3c7", color: "#92400e", borderColor: "#fde68a" }}>Level 2</span>
              <h2 style={{ fontSize: 17.5, fontWeight: 800, margin: 0, color: "#10172f" }}>Add Subcategory</h2>
            </div>
            <div style={{ fontSize: 11.5, color: "#667085", marginTop: 4 }}>
              Create a child sub-category under an existing parent category
            </div>
          </div>
          <button type="button" className="secondary-action" onClick={onClose} style={{ padding: 0, width: 32, height: 32 }}>
            <FiX size={16} />
          </button>
        </div>

        <div className="form-grid" style={{ marginTop: 14, gap: "12px" }}>
          {/* Parent Category Selection */}
          <div className="field full">
            <label>Select Parent Category (Level 1) *</label>
            <MasterDropdown
              className="modal-dropdown"
              options={parentOptions}
              value={parentCat}
              onChange={setParentCat}
            />
          </div>

          {/* Sub-Category Name */}
          <div className="field full">
            <label>Subcategory Name (Level 2) *</label>
            <input
              value={subCat}
              onChange={(e) => {
                setSubCat(e.target.value);
                if (!catalogSubPath) setCatalogSubPath(e.target.value);
              }}
              placeholder="e.g. Smartwatches, Casual Shirts, Running Shoes"
              required
              autoFocus
            />
          </div>

          {/* Catalog Path Section & Subroute */}
          <div className="field">
            <label>Storefront Catalog Section *</label>
            <MasterDropdown
              className="modal-dropdown"
              options={catalogOptions}
              value={catalogSection}
              onChange={setCatalogSection}
            />
          </div>

          <div className="field">
            <label>Catalog Path Sub-route *</label>
            <input
              value={catalogSubPath}
              onChange={(e) => setCatalogSubPath(e.target.value)}
              placeholder={subCat || "e.g. smartwatches"}
              required
            />
          </div>

          {/* Description */}
          <div className="field full">
            <label>Subcategory Description (Optional)</label>
            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="e.g. Connected fitness trackers and smart notification watches"
            />
          </div>

          {/* Live Storefront URL preview */}
          <div className="field full" style={{ marginTop: 2 }}>
            <label style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 11 }}>
              <FiLink size={11} color="#0056c3" /> Storefront Breadcrumb & URL Slug Preview
            </label>
            <div style={{ background: "#f8faff", border: "1px solid #dbeafe", padding: "8px 12px", borderRadius: 8, fontSize: 11.5, color: "#1e3a8a", display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ fontWeight: 800, color: "#0056c3" }}>https://amihive.com/shop</span>
              <span style={{ fontWeight: 700 }}>{previewSlug || "/..."}</span>
            </div>
          </div>
        </div>

        <div className="modal-actions" style={{ marginTop: 16, paddingTop: 10, display: "flex", justifyContent: "flex-end", gap: 10 }}>
          <button type="button" className="secondary-action" onClick={onClose} style={{ height: 38, padding: "0 16px" }}>
            Cancel
          </button>
          <button type="submit" className="primary-action" disabled={!parentCat || !subCat.trim()} style={{ height: 38, padding: "0 18px" }}>
            <FiPlus /> Add Subcategory
          </button>
        </div>
      </motion.form>
    </motion.div>
  );
}

function TopCategoriesModal({ onClose, notify, onAddCategoryClick }) {
  const categories = [
    { name: "Men", count: 412, share: "33.0%", revenue: "₹10,29,588", color: "#1456c7" },
    { name: "Women", count: 318, share: "25.5%", revenue: "₹7,94,682", color: "#2f7be8" },
    { name: "Footwear", count: 196, share: "15.7%", revenue: "₹6,27,004", color: "#ff7a1a" },
    { name: "Electronics", count: 142, share: "11.4%", revenue: "₹7,09,858", color: "#fb4a4a" },
    { name: "Beauty", count: 98, share: "7.8%", revenue: "₹1,17,502", color: "#7aa994" },
    { name: "Others", count: 82, share: "6.6%", revenue: "₹2,36,980", color: "#8e99ad" }
  ];

  return (
    <motion.div className="modal-wrap" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div className="modal" style={{ width: "min(640px, 100%)" }} initial={{ y: 20, scale: .98 }} animate={{ y: 0, scale: 1 }} exit={{ y: 20, scale: .98 }} onClick={e => e.stopPropagation()}>
        <div className="modal-head">
          <div>
            <h2>Top Product Categories</h2>
            <div style={{ fontSize: 11, color: "#667085", marginTop: 2 }}>Breakdown of catalog distribution and sales revenue by category</div>
          </div>
          <button className="secondary-action" onClick={onClose} style={{ padding: 0, width: 32, height: 32 }} title="Close" aria-label="Close"><FiX size={16} /></button>
        </div>
        <div style={{ marginTop: 16, display: "grid", gap: 10 }}>
          {categories.map(c => (
            <div key={c.name} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 14px", border: "1px solid #ededf8", borderRadius: 10, background: "#f8f9fc" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ width: 12, height: 12, borderRadius: "50%", background: c.color, display: "inline-block" }} />
                <div>
                  <strong style={{ fontSize: 13, color: "#10172f" }}>{c.name}</strong>
                  <div style={{ fontSize: 11, color: "#667085", marginTop: 2 }}>{c.count} Products ({c.share} catalog share)</div>
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <strong style={{ fontSize: 13, color: "#10172f", display: "block" }}>{c.revenue}</strong>
                <span style={{ fontSize: 10, color: "#138a42", fontWeight: 700 }}>Active</span>
              </div>
            </div>
          ))}
        </div>
        <div className="modal-actions" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <button
            type="button"
            className="secondary-action"
            style={{ color: "#0056c3", borderColor: "#c2c6d5" }}
            onClick={() => { onClose(); if (onAddCategoryClick) onAddCategoryClick(); }}
          >
            <FiPlus /> Add New Category
          </button>
          <div style={{ display: "flex", gap: 8 }}>
            <button className="secondary-action" onClick={onClose}>Close</button>
            <button className="primary-action" onClick={() => notify("Report Exported", "Category breakdown report saved.")}><FiDownload /> Export Report</button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function LowStockModal({onClose,onEditProduct}){
  const alerts=[
    {id:"PRD-002",name:"Classic White Sneakers",sku:"AMH-FWT-045",available:8,reorder:10,status:"Low Stock",level:"warn"},
    {id:"PRD-008",name:"Analog Wrist Watch",sku:"AMH-WAT-002",available:6,reorder:10,status:"Low Stock",level:"warn"},
    {id:"PRD-012",name:"Urban Backpack",sku:"AMH-BAG-015",available:5,reorder:10,status:"Low Stock",level:"warn"},
    {id:"PRD-015",name:"Eau de Parfum - 100ml",sku:"AMH-PER-003",available:3,reorder:5,status:"Critical Low",level:"bad"},
    {id:"PRD-004",name:"Wireless Headphones",sku:"AMH-AUD-009",available:0,reorder:15,status:"Out of Stock",level:"bad"}
  ];

  return <motion.div className="modal-wrap" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={onClose}>
    <motion.div className="modal" style={{width:"min(680px,100%)"}} initial={{y:20,scale:.98}} animate={{y:0,scale:1}} exit={{y:20,scale:.98}} onClick={e=>e.stopPropagation()}>
      <div className="modal-head">
        <div>
          <h2>Low Stock & Inventory Alerts</h2>
          <div style={{fontSize:11,color:"#667085",marginTop:2}}>Items requiring immediate replenishment or stock adjustment</div>
        </div>
        <button className="secondary-action" onClick={onClose} style={{padding:0,width:32,height:32}} title="Close" aria-label="Close"><FiX size={16}/></button>
      </div>
      <div style={{marginTop:16,display:"grid",gap:10}}>
        {alerts.map(item=>(
          <div key={item.sku} style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 14px",border:"1px solid #ededf8",borderRadius:10,background:item.level==="bad"?"#fff5f5":"#fffdf8"}}>
            <div style={{display:"flex",alignItems:"center",gap:12}}>
              <div style={{width:36,height:36,borderRadius:8,background:"#f3f3fe",border:"1px solid #c2c6d5",display:"grid",placeItems:"center"}}>
                <FiPackage size={18} color="#0056c3"/>
              </div>
              <div>
                <strong style={{fontSize:13,color:"#10172f"}}>{item.name}</strong>
                <div style={{fontSize:11,color:"#667085",marginTop:2}}>SKU: {item.sku} · Reorder Threshold: {item.reorder} units</div>
              </div>
            </div>
            <div style={{display:"flex",alignItems:"center",gap:14}}>
              <div style={{textAlign:"right"}}>
                <span className={item.level==="bad"?"stock-bad":"stock-warn"} style={{fontSize:13,fontWeight:800}}>
                  {item.available} in stock
                </span>
                <div style={{fontSize:10,color:item.level==="bad"?"#b12626":"#d66c00",fontWeight:700,marginTop:1}}>{item.status}</div>
              </div>
              <button className="secondary-action" style={{height:32,fontSize:11}} onClick={()=>{onClose();onEditProduct(item)}}>
                <FiEdit2/> Restock
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="modal-actions">
        <button className="secondary-action" onClick={onClose}>Close</button>
      </div>
    </motion.div>
  </motion.div>
}

function RecentUpdatesModal({onClose}){
  const updates=[
    {title:"Linen Blend Shirt",sku:"AMH-SHR-117",action:"Price updated",change:"₹1,699 → ₹1,799",user:"Sujith",timestamp:"May 18, 2025 10:30 AM"},
    {title:"Wireless Headphones",sku:"AMH-AUD-009",action:"Stock updated",change:"10 → 0 units",user:"Sujith",timestamp:"May 17, 2025 04:48 PM"},
    {title:"Leather Tote Bag",sku:"AMH-BAG-001",action:"Status updated",change:"Draft → Published",user:"Sujith",timestamp:"May 17, 2025 11:20 AM"},
    {title:"Classic White Sneakers",sku:"AMH-FWT-045",action:"Inventory adjusted",change:"12 → 8 units",user:"Sujith",timestamp:"May 16, 2025 02:15 PM"},
    {title:"Vitamin C Serum",sku:"AMH-BTY-021",action:"Product created",change:"Draft status",user:"Sujith",timestamp:"May 15, 2025 09:10 AM"}
  ];

  return <motion.div className="modal-wrap" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={onClose}>
    <motion.div className="modal" style={{width:"min(680px,100%)"}} initial={{y:20,scale:.98}} animate={{y:0,scale:1}} exit={{y:20,scale:.98}} onClick={e=>e.stopPropagation()}>
      <div className="modal-head">
        <div>
          <h2>Recent Product Updates & Audit Log</h2>
          <div style={{fontSize:11,color:"#667085",marginTop:2}}>Complete timeline of changes across catalog items</div>
        </div>
        <button className="secondary-action" onClick={onClose} style={{padding:0,width:32,height:32}} title="Close" aria-label="Close"><FiX size={16}/></button>
      </div>
      <div style={{marginTop:16,display:"grid",gap:10}}>
        {updates.map((u,i)=>(
          <div key={i} style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 14px",border:"1px solid #ededf8",borderRadius:10,background:"#f8f9fc"}}>
            <div style={{display:"flex",alignItems:"center",gap:12}}>
              <div style={{width:36,height:36,borderRadius:8,background:"#e4efff",color:"#1670e8",display:"grid",placeItems:"center"}}>
                <FiPackage size={18}/>
              </div>
              <div>
                <strong style={{fontSize:13,color:"#10172f"}}>{u.title}</strong>
                <div style={{fontSize:11,color:"#667085",marginTop:2}}>SKU: {u.sku} · {u.action}: <b>{u.change}</b></div>
              </div>
            </div>
            <div style={{textAlign:"right"}}>
              <span style={{fontSize:11,color:"#10172f",fontWeight:700,display:"block"}}>by {u.user}</span>
              <time style={{fontSize:10,color:"#667085"}}>{u.timestamp}</time>
            </div>
          </div>
        ))}
      </div>
      <div className="modal-actions">
        <button className="secondary-action" onClick={onClose}>Close</button>
      </div>
    </motion.div>
  </motion.div>
}

function ProductDrawer({product,onClose,onEdit,onArchive}){
  if(!product) return null;
  return <motion.div className="drawer-bg" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={onClose}>
    <motion.aside className="drawer" initial={{x:"100%"}} animate={{x:0}} exit={{x:"100%"}} transition={{duration:.24}} onClick={e=>e.stopPropagation()}>
      <div className="drawer-top">
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
            <h2>{product.name}</h2>
            {product.brandVariant && (
              <span className="brand-badge">{product.brandVariant}</span>
            )}
          </div>
          <span className={`status-pill status-${product.status.toLowerCase()}`} style={{marginTop:7}}><i/>{product.status}</span>
        </div>
        <button className="secondary-action" onClick={onClose} style={{padding:0,width:32,height:32}} title="Close" aria-label="Close"><FiX size={16}/></button>
      </div>

      <div className="drawer-section">
        <h3>Product Details</h3>
        <div className="detail-grid">
          <div className="detail"><span>SKU</span><strong>{product.sku}</strong></div>
          <div className="detail"><span>Category</span><strong>{product.category}</strong></div>
          <div className="detail"><span>Brand</span><strong>{product.brand || "AMIHIVE"}</strong></div>
          <div className="detail"><span>Price</span><strong>₹{product.price.toLocaleString("en-IN")}</strong></div>
          <div className="detail"><span>Inventory</span><strong>{product.available} units in stock</strong></div>
          <div className="detail"><span>Catalog Path</span><strong>{product.variant}</strong></div>
        </div>
      </div>

      {/* Product Variants Breakdown */}
      {((product.colors && product.colors.length > 0) || (product.sizes && product.sizes.length > 0)) && (
        <div className="drawer-section">
          <h3>Variants & Specifications</h3>
          {product.colors && product.colors.length > 0 && (
            <div style={{ marginBottom: 10 }}>
              <span style={{ fontSize: 11, color: "#667085", fontWeight: 600, display: "block", marginBottom: 6 }}>Available Colors:</span>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {product.colors.map((c, i) => (
                  <span key={i} className="variant-tag" style={{ background: "#fff", border: "1px solid #cbd5e1" }}>
                    <span className="color-dot" style={{ backgroundColor: typeof c === "string" ? c : c.hex, width: 12, height: 12 }} />
                    {typeof c === "string" ? c : c.name}
                  </span>
                ))}
              </div>
            </div>
          )}

          {product.sizes && product.sizes.length > 0 && (
            <div>
              <span style={{ fontSize: 11, color: "#667085", fontWeight: 600, display: "block", marginBottom: 6 }}>Available Sizes / Dimensions:</span>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {product.sizes.map((sz, i) => (
                  <span key={i} className="variant-tag">
                    {sz}
                  </span>
                ))}
              </div>
            </div>
          )}

          {product.variants && product.variants.length > 0 && (
            <div style={{ marginTop: 12 }}>
              <span style={{ fontSize: 11, color: "#667085", fontWeight: 600, display: "block", marginBottom: 6 }}>Variant Stock Allocation:</span>
              <table className="variant-matrix-table" style={{ background: "#fafbfe" }}>
                <thead>
                  <tr>
                    <th>Variant</th>
                    <th>SKU</th>
                    <th style={{ textAlign: "right" }}>Stock</th>
                    <th style={{ textAlign: "right" }}>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {product.variants.map((v, i) => (
                    <tr key={i}>
                      <td style={{ fontWeight: 600 }}>{v.name}</td>
                      <td style={{ color: "#64748b", fontFamily: "monospace" }}>{v.sku || "-"}</td>
                      <td style={{ textAlign: "right", fontWeight: 700 }}>{v.stock}</td>
                      <td style={{ textAlign: "right" }}>₹{v.price ? Number(v.price).toLocaleString("en-IN") : "-"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      <div className="drawer-section"><h3>Inventory Health</h3><div className="detail-grid"><div className="detail"><span>Available</span><strong>{product.available}</strong></div><div className="detail"><span>Reorder Level</span><strong>10</strong></div><div className="detail"><span>Reserved</span><strong>{product.reserved}</strong></div><div className="detail"><span>Incoming</span><strong>{product.available<10?50:20}</strong></div></div></div>
      <div className="drawer-actions"><button className="primary-action" onClick={()=>onEdit(product)}><FiEdit2/> Edit Product</button><button className="secondary-action" onClick={()=>onArchive(product.id)}><FiArchive/> Archive</button></div>
    </motion.aside>
  </motion.div>
}

function ProductModal({
  product,
  onClose,
  onSave,
  categoryTaxonomy,
  catalogPathTaxonomy,
  onOpenAddCategory,
  onOpenAddSubCategory
}) {
  // Parse initial Category levels
  const initialCategoryParts = (product?.category || "Men > Shirts").split(">").map((s) => s.trim());
  const initialCatL1 = categoryTaxonomy[initialCategoryParts[0]] ? initialCategoryParts[0] : (Object.keys(categoryTaxonomy)[0] || "Men");
  const initialCatL2 = (categoryTaxonomy[initialCatL1] || []).includes(initialCategoryParts[1])
    ? initialCategoryParts[1]
    : (categoryTaxonomy[initialCatL1] || ["Shirts"])[0];

  // Parse initial Catalog Path levels
  const initialVariantParts = (product?.variant || "Clothing > Shirts").split(">").map((s) => s.trim());
  let initialCatalogL1 = catalogPathTaxonomy[initialVariantParts[0]] ? initialVariantParts[0] : (Object.keys(catalogPathTaxonomy)[0] || "Clothing");
  let initialCatalogL2 = (catalogPathTaxonomy[initialCatalogL1] || []).includes(initialVariantParts[1])
    ? initialVariantParts[1]
    : (catalogPathTaxonomy[initialCatalogL1] || ["Shirts"])[0];

  if ((catalogPathTaxonomy[initialCatalogL1] || []).includes(initialCatL2)) {
    initialCatalogL2 = initialCatL2;
  }

  const [catL1, setCatL1] = useState(initialCatL1);
  const [catL2, setCatL2] = useState(initialCatL2);
  const [catalogL1, setCatalogL1] = useState(initialCatalogL1);
  const [catalogL2, setCatalogL2] = useState(initialCatalogL2);

  const [form, setForm] = useState(
    product
      ? {
          name: product.name || "",
          sku: product.sku || "",
          price: product.price ?? "",
          available: product.available ?? "",
          brand: product.brand || "AMIHIVE",
          brandVariant: product.brandVariant || "",
          colors: product.colors || [],
          sizes: product.sizes || [],
          variants: product.variants || [],
          description: product.description || "",
          status: product.status || "Draft",
          images: product.images || [],
        }
      : {
          name: "",
          sku: "",
          price: "",
          available: "",
          brand: "AMIHIVE",
          brandVariant: "",
          colors: [],
          sizes: [],
          variants: [],
          description: "",
          status: "Draft",
          images: [],
        }
  );

  // Helper to detect preset mode based on category name
  const getCategoryPresetMode = (c1, c2) => {
    const combined = `${c1} ${c2}`.toLowerCase();
    if (combined.includes("watch") || combined.includes("jewelry") || combined.includes("chrono")) return "watches";
    if (combined.includes("footwear") || combined.includes("shoe") || combined.includes("sneaker") || combined.includes("boot")) return "footwear";
    return "clothes";
  };

  const [presetMode, setPresetMode] = useState(() => getCategoryPresetMode(initialCatL1, initialCatL2));
  const [customSizeInput, setCustomSizeInput] = useState("");
  const [customColorName, setCustomColorName] = useState("");
  const [customColorHex, setCustomColorHex] = useState("#2563eb");
  const [showCustomColorPicker, setShowCustomColorPicker] = useState(false);
  const [showVariantMatrix, setShowVariantMatrix] = useState(true);

  // Preset definitions
  const apparelSizes = ["XS", "S", "M", "L", "XL", "XXL", "3XL", "Free Size"];
  const watchDialSizes = ["38mm", "40mm", "41mm", "42mm", "44mm", "45mm", "46mm"];
  const watchStrapTypes = ["Leather Strap", "Stainless Steel", "Silicone / Sport", "Milanese Mesh", "Titanium Link"];
  const footwearSizes = ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10", "UK 11", "UK 12"];

  // Popular Brand suggestions
  const brandSuggestions = ["AMIHIVE", "Titan", "Casio", "Contour", "Field Works", "Earthline", "Zara", "Nike", "Apple", "Fossil"];

  // When Category Level 1 changes:
  const handleCatL1Change = (newL1) => {
    setCatL1(newL1);
    const subOptions = categoryTaxonomy[newL1] || [];
    const newL2 = subOptions[0] || "";
    setCatL2(newL2);
    setPresetMode(getCategoryPresetMode(newL1, newL2));
    syncCatalogPathWithCategoryL2(newL2, catalogL1);
  };

  // When Category Level 2 changes:
  const handleCatL2Change = (newL2) => {
    setCatL2(newL2);
    setPresetMode(getCategoryPresetMode(catL1, newL2));
    syncCatalogPathWithCategoryL2(newL2, catalogL1);
  };

  // Sync helper: When Category L2 changes, auto-update Catalog Path L2
  const syncCatalogPathWithCategoryL2 = (targetL2, currentCatPathL1) => {
    if (!targetL2) return;
    const currentSubOptions = catalogPathTaxonomy[currentCatPathL1] || [];
    if (currentSubOptions.includes(targetL2)) {
      setCatalogL2(targetL2);
      return;
    }
    for (const [section, subList] of Object.entries(catalogPathTaxonomy)) {
      if (subList.includes(targetL2)) {
        setCatalogL1(section);
        setCatalogL2(targetL2);
        return;
      }
    }
  };

  const handleCatalogL1Change = (newL1) => {
    setCatalogL1(newL1);
    const subOptions = catalogPathTaxonomy[newL1] || [];
    if (subOptions.includes(catL2)) {
      setCatalogL2(catL2);
    } else {
      setCatalogL2(subOptions[0] || "");
    }
  };

  const handleCatalogL2Change = (newL2) => {
    setCatalogL2(newL2);
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;
    const newUrls = files.map((f) => URL.createObjectURL(f));
    setForm((prev) => ({ ...prev, images: [...prev.images, ...newUrls] }));
  };

  const removeImage = (idx) => {
    setForm((prev) => ({ ...prev, images: prev.images.filter((_, i) => i !== idx) }));
  };

  // Variant generator function
  const autoGenerateVariants = (colorsList, sizesList, basePrice, baseSku, baseStock) => {
    if ((!colorsList || colorsList.length === 0) && (!sizesList || sizesList.length === 0)) {
      return [];
    }
    const cleanSku = baseSku ? baseSku.trim() : "AMH-PRD";
    const numPrice = Number(basePrice) || 0;
    const numStock = Number(baseStock) || 0;

    const list = [];
    if (colorsList.length > 0 && sizesList.length > 0) {
      const perStock = Math.max(1, Math.floor(numStock / (colorsList.length * sizesList.length)) || 5);
      colorsList.forEach((c) => {
        const cName = typeof c === "string" ? c : c.name;
        sizesList.forEach((s) => {
          const varName = `${cName} / ${s}`;
          const cCode = cName.substring(0, 3).toUpperCase();
          const sCode = s.replace(/[^a-zA-Z0-9]/g, "").substring(0, 4).toUpperCase();
          list.push({
            name: varName,
            sku: `${cleanSku}-${cCode}-${sCode}`,
            stock: perStock,
            price: numPrice
          });
        });
      });
    } else if (colorsList.length > 0) {
      const perStock = Math.max(1, Math.floor(numStock / colorsList.length) || 10);
      colorsList.forEach((c) => {
        const cName = typeof c === "string" ? c : c.name;
        const cCode = cName.substring(0, 3).toUpperCase();
        list.push({
          name: cName,
          sku: `${cleanSku}-${cCode}`,
          stock: perStock,
          price: numPrice
        });
      });
    } else if (sizesList.length > 0) {
      const perStock = Math.max(1, Math.floor(numStock / sizesList.length) || 10);
      sizesList.forEach((s) => {
        const sCode = s.replace(/[^a-zA-Z0-9]/g, "").substring(0, 4).toUpperCase();
        list.push({
          name: s,
          sku: `${cleanSku}-${sCode}`,
          stock: perStock,
          price: numPrice
        });
      });
    }
    return list;
  };

  // Toggle Color
  const toggleColor = (colorObj) => {
    setForm((prev) => {
      const exists = prev.colors.some((c) => (typeof c === "string" ? c === colorObj.name : c.name === colorObj.name));
      const newColors = exists
        ? prev.colors.filter((c) => (typeof c === "string" ? c !== colorObj.name : c.name !== colorObj.name))
        : [...prev.colors, colorObj];
      const newVariants = autoGenerateVariants(newColors, prev.sizes, prev.price, prev.sku, prev.available);
      return { ...prev, colors: newColors, variants: newVariants };
    });
  };

  // Add Custom Color
  const handleAddCustomColor = () => {
    if (!customColorName.trim()) return;
    const newColor = { name: customColorName.trim(), hex: customColorHex };
    setForm((prev) => {
      const exists = prev.colors.some((c) => c.name.toLowerCase() === newColor.name.toLowerCase());
      const newColors = exists ? prev.colors : [...prev.colors, newColor];
      const newVariants = autoGenerateVariants(newColors, prev.sizes, prev.price, prev.sku, prev.available);
      return { ...prev, colors: newColors, variants: newVariants };
    });
    setCustomColorName("");
    setShowCustomColorPicker(false);
  };

  // Remove Color
  const removeColor = (colorName) => {
    setForm((prev) => {
      const newColors = prev.colors.filter((c) => (typeof c === "string" ? c !== colorName : c.name !== colorName));
      const newVariants = autoGenerateVariants(newColors, prev.sizes, prev.price, prev.sku, prev.available);
      return { ...prev, colors: newColors, variants: newVariants };
    });
  };

  // Toggle Size
  const toggleSize = (sizeVal) => {
    setForm((prev) => {
      const exists = prev.sizes.includes(sizeVal);
      const newSizes = exists ? prev.sizes.filter((s) => s !== sizeVal) : [...prev.sizes, sizeVal];
      const newVariants = autoGenerateVariants(prev.colors, newSizes, prev.price, prev.sku, prev.available);
      return { ...prev, sizes: newSizes, variants: newVariants };
    });
  };

  // Add Custom Size
  const handleAddCustomSize = (e) => {
    if (e) e.preventDefault();
    if (!customSizeInput.trim()) return;
    const val = customSizeInput.trim();
    if (!form.sizes.includes(val)) {
      toggleSize(val);
    }
    setCustomSizeInput("");
  };

  const updateVariantRow = (index, field, value) => {
    setForm((prev) => {
      const next = [...prev.variants];
      next[index] = { ...next[index], [field]: value };
      return { ...prev, variants: next };
    });
  };

  const removeVariantRow = (index) => {
    setForm((prev) => ({
      ...prev,
      variants: prev.variants.filter((_, i) => i !== index)
    }));
  };

  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.sku.trim() || form.price === "") return;

    const computedCategory = `${catL1} > ${catL2}`;
    const computedVariant = `${catalogL1} > ${catalogL2}`;

    const totalStock = form.variants.length > 0
      ? form.variants.reduce((acc, curr) => acc + (Number(curr.stock) || 0), 0)
      : Number(form.available || 0);

    const base = {
      ...product,
      id: product?.id || `PRD-${Math.floor(100 + Math.random() * 800)}`,
      name: form.name.trim(),
      sku: form.sku.trim(),
      category: computedCategory,
      variant: computedVariant,
      brand: form.brand.trim() || "AMIHIVE",
      brandVariant: form.brandVariant.trim(),
      colors: form.colors,
      sizes: form.sizes,
      variants: form.variants,
      price: Number(form.price),
      available: totalStock,
      reserved: product?.reserved || 0,
      sales: product?.sales || 0,
      revenue: product?.revenue || 0,
      status: form.status,
      updated:
        new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) +
        " " +
        new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
      description: form.description.trim() || "Product description.",
      images: form.images,
    };
    onSave(base);
  };

  const storefrontSlug = `/${slugify(catalogL1)}/${slugify(catalogL2)}`;

  return (
    <motion.div
      className="modal-wrap"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.form
        className="modal product-modal"
        initial={{ y: 20, scale: 0.98 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: 20, scale: 0.98 }}
        onClick={(e) => e.stopPropagation()}
        onSubmit={submit}
      >
        <div className="modal-head" style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <h2 style={{ margin: 0, fontSize: 19, fontWeight: 800, color: "#191b23", lineHeight: 1.25 }}>
              {product ? "Edit Product" : "Add Product"}
            </h2>
            <div style={{ fontSize: 11.5, color: "#667085", marginTop: 3, lineHeight: 1.35 }}>
              Configure product details, category taxonomy, colors, size variants, and inventory.
            </div>
          </div>
          <button
            type="button"
            className="secondary-action modal-close-btn"
            onClick={onClose}
            style={{ padding: 0, width: 32, height: 32, minWidth: 32, minHeight: 32, flexShrink: 0, borderRadius: 8, display: "grid", placeItems: "center", marginTop: 1, marginLeft: "auto" }}
            title="Close"
            aria-label="Close"
          >
            <FiX size={16} />
          </button>
        </div>

        <div className="form-grid">
          {/* Product Name */}
          <div className="field full">
            <label>Product Name *</label>
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="e.g. Linen Blend Shirt or Octane Chronograph Watch"
              required
            />
          </div>

          {/* Product Images */}
          <div className="field full">
            <label>Product Images</label>
            <label className="image-dropzone">
              <FiImage size={24} style={{ marginBottom: 4 }} />
              <div style={{ fontWeight: 800, fontSize: 12 }}>Click or Drag images to upload</div>
              <div style={{ fontSize: 11, color: "#424753", marginTop: 2 }}>
                Supports PNG, JPG, WEBP (up to 5MB)
              </div>
              <input
                type="file"
                accept="image/*"
                multiple
                style={{ display: "none" }}
                onChange={handleImageUpload}
              />
            </label>
            {form.images.length > 0 && (
              <div className="image-grid">
                {form.images.map((img, i) => (
                  <div key={i} className="image-thumb-box">
                    <img src={img} alt={`Preview ${i + 1}`} />
                    <button
                      type="button"
                      className="image-thumb-remove"
                      onClick={() => removeImage(i)}
                      title="Remove image"
                    >
                      <FiX />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Row: SKU & Brand */}
          <div className="field">
            <label>Product SKU *</label>
            <input
              value={form.sku}
              onChange={(e) => setForm({ ...form, sku: e.target.value })}
              placeholder="e.g. AMH-SHR-117"
              required
            />
          </div>

          <div className="field">
            <label>Brand</label>
            <input
              list="brand-suggestions-list"
              value={form.brand}
              onChange={(e) => setForm({ ...form, brand: e.target.value })}
              placeholder="e.g. Titan, Contour, AMIHIVE, Field Works"
            />
            <datalist id="brand-suggestions-list">
              {brandSuggestions.map((b) => (
                <option key={b} value={b} />
              ))}
            </datalist>
          </div>

          {/* Brand Variant / Edition */}
          <div className="field full">
            <label style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span>Brand Variant / Edition / Series</span>
              <span style={{ fontSize: 10.5, color: "#64748b", fontWeight: 500 }}>
                e.g. Pro Series, Court Classic, Chronograph Edition, Slim Fit
              </span>
            </label>
            <div style={{ display: "flex", gap: 8 }}>
              <input
                value={form.brandVariant}
                onChange={(e) => setForm({ ...form, brandVariant: e.target.value })}
                placeholder="e.g. Octane Chrono Pro, Heritage Edition, Relaxed Fit"
                style={{ flex: 1 }}
              />
            </div>
            {/* Quick Suggestions */}
            <div style={{ display: "flex", gap: 5, flexWrap: "wrap", marginTop: 4 }}>
              {["Pro Edition", "Classic Series", "Sport Edition", "Chronograph", "Signature Line", "Limited Run"].map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setForm({ ...form, brandVariant: tag })}
                  style={{
                    border: "1px solid #e2e8f0",
                    background: form.brandVariant === tag ? "#fef3c7" : "#f8fafc",
                    color: form.brandVariant === tag ? "#92400e" : "#475569",
                    padding: "2px 8px",
                    borderRadius: 4,
                    fontSize: 10.5,
                    fontWeight: 600,
                    cursor: "pointer"
                  }}
                >
                  + {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Separate Category Level 1 Field with dedicated + Add Category button */}
          <div className="field">
            <label style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span>Parent Category (Level 1) *</span>
              <button
                type="button"
                className="add-cat-btn"
                onClick={onOpenAddCategory}
                title="Create a new parent category in a separate popup"
              >
                <FiPlus size={11} /> Add Category
              </button>
            </label>
            <MasterDropdown
              className="modal-dropdown"
              options={Object.keys(categoryTaxonomy)}
              value={catL1}
              onChange={handleCatL1Change}
            />
          </div>

          {/* Separate Subcategory Level 2 Field with dedicated + Add Subcategory button */}
          <div className="field">
            <label style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span>Subcategory (Level 2) *</span>
              <button
                type="button"
                className="add-cat-btn"
                onClick={() => onOpenAddSubCategory(catL1)}
                title="Create a child subcategory in a separate popup"
              >
                <FiPlus size={11} /> Add Subcategory
              </button>
            </label>
            <MasterDropdown
              className="modal-dropdown"
              options={categoryTaxonomy[catL1] || []}
              value={catL2}
              onChange={handleCatL2Change}
            />
          </div>

          {/* Catalog Path & Storefront Route */}
          <div className="field full">
            <label style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                Catalog Breadcrumb Path
                <span className="sync-pill">
                  <FiLink size={10} /> Auto-Synced
                </span>
              </span>
            </label>
            <div className="cascading-select-row">
              <MasterDropdown
                className="modal-dropdown"
                options={Object.keys(catalogPathTaxonomy)}
                value={catalogL1}
                onChange={handleCatalogL1Change}
              />
              <span className="cascade-sep">›</span>
              <MasterDropdown
                className="modal-dropdown"
                options={catalogPathTaxonomy[catalogL1] || []}
                value={catalogL2}
                onChange={handleCatalogL2Change}
              />
            </div>
            <div className="url-slug-preview">
              <span className="url-slug-label">Storefront:</span>
              <span className="url-slug-val">{storefrontSlug}</span>
            </div>
          </div>

          {/* Price & Available Stock */}
          <div className="field-pair-grid">
            <div className="field">
              <label>Base Price (₹) *</label>
              <input
                type="number"
                value={form.price}
                onChange={(e) => {
                  const newPrice = e.target.value;
                  setForm((prev) => ({
                    ...prev,
                    price: newPrice,
                    variants: autoGenerateVariants(prev.colors, prev.sizes, newPrice, prev.sku, prev.available)
                  }));
                }}
                placeholder="e.g. 1799"
                required
              />
            </div>

            <div className="field">
              <label>Total Available Stock</label>
              <input
                type="number"
                value={form.available}
                onChange={(e) => {
                  const newStock = e.target.value;
                  setForm((prev) => ({
                    ...prev,
                    available: newStock,
                    variants: autoGenerateVariants(prev.colors, prev.sizes, prev.price, prev.sku, newStock)
                  }));
                }}
                placeholder="0"
                min="0"
              />
            </div>
          </div>

          <div className="field">
            <label>Catalog Status</label>
            <MasterDropdown
              className="modal-dropdown"
              options={["Draft", "Published", "Archived"]}
              value={form.status}
              onChange={(val) => setForm({ ...form, status: val })}
            />
          </div>

          {/* ================= VARIANT SECTION: COLORS ================= */}
          <div className="field full" style={{ borderTop: "1px solid #ededf8", paddingTop: 14, marginTop: 6 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <label style={{ fontSize: 12, fontWeight: 800, color: "#111827", margin: 0 }}>
                Product Colors ({form.colors.length} selected)
              </label>
              <button
                type="button"
                style={{
                  border: 0,
                  background: "transparent",
                  color: "#0056c3",
                  fontSize: 11.5,
                  fontWeight: 700,
                  cursor: "pointer"
                }}
                onClick={() => setShowCustomColorPicker((v) => !v)}
              >
                {showCustomColorPicker ? "Close Custom Color" : "+ Custom Color"}
              </button>
            </div>

            {/* Custom Color Input Box */}
            {showCustomColorPicker && (
              <div className="custom-color-row">
                <input
                  type="color"
                  value={customColorHex}
                  onChange={(e) => setCustomColorHex(e.target.value)}
                  style={{ width: 34, height: 34, padding: 0, border: 0, borderRadius: 6, cursor: "pointer", background: "transparent", flexShrink: 0 }}
                />
                <input
                  value={customColorName}
                  onChange={(e) => setCustomColorName(e.target.value)}
                  placeholder="e.g. Space Grey, Champagne, Coral"
                  style={{ flex: 1, minWidth: 120 }}
                />
                <button
                  type="button"
                  className="primary-action"
                  style={{ height: 34, padding: "0 14px", fontSize: 11.5 }}
                  onClick={handleAddCustomColor}
                  disabled={!customColorName.trim()}
                >
                  Add Color
                </button>
              </div>
            )}

            {/* Standard Swatches list */}
            <div className="color-swatch-list">
              {standardColorPalette.map((cp) => {
                const isSelected = form.colors.some((c) => (typeof c === "string" ? c === cp.name : c.name === cp.name));
                return (
                  <button
                    key={cp.name}
                    type="button"
                    className={`color-swatch-btn ${isSelected ? "selected" : ""}`}
                    onClick={() => toggleColor(cp)}
                  >
                    <span className="color-dot" style={{ backgroundColor: cp.hex }} />
                    <span>{cp.name}</span>
                    {isSelected && <FiCheck size={12} color="#0056c3" />}
                  </button>
                );
              })}
            </div>

            {/* Selected Color Chips */}
            {form.colors.length > 0 && (
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 8 }}>
                {form.colors.map((c, i) => {
                  const cName = typeof c === "string" ? c : c.name;
                  const cHex = typeof c === "string" ? "#191b23" : c.hex;
                  return (
                    <span key={i} className="variant-tag" style={{ background: "#eff6ff", borderColor: "#bfdbfe" }}>
                      <span className="color-dot" style={{ backgroundColor: cHex, width: 10, height: 10 }} />
                      <strong style={{ color: "#1e40af" }}>{cName}</strong>
                      <button type="button" className="variant-chip-remove" onClick={() => removeColor(cName)}>
                        <FiX />
                      </button>
                    </span>
                  );
                })}
              </div>
            )}
          </div>

          {/* ================= VARIANT SECTION: SIZES & SPECS ================= */}
          <div className="field full" style={{ borderTop: "1px solid #ededf8", paddingTop: 14, marginTop: 4 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
              <label style={{ fontSize: 12, fontWeight: 800, color: "#111827", margin: 0 }}>
                Size & Specification Variants ({form.sizes.length} selected)
              </label>
              <span style={{ fontSize: 11, color: "#64748b" }}>
                Active Category: <b>{catL1} &gt; {catL2}</b>
              </span>
            </div>

            {/* Mode Switcher Tabs */}
            <div className="preset-mode-tabs">
              <button
                type="button"
                className={`preset-mode-tab ${presetMode === "clothes" ? "active" : ""}`}
                onClick={() => setPresetMode("clothes")}
              >
                Clothes & Apparel (S, M, L...)
              </button>
              <button
                type="button"
                className={`preset-mode-tab ${presetMode === "watches" ? "active" : ""}`}
                onClick={() => setPresetMode("watches")}
              >
                Watches (Dial & Straps)
              </button>
              <button
                type="button"
                className={`preset-mode-tab ${presetMode === "footwear" ? "active" : ""}`}
                onClick={() => setPresetMode("footwear")}
              >
                Footwear (UK Sizes)
              </button>
              <button
                type="button"
                className={`preset-mode-tab ${presetMode === "custom" ? "active" : ""}`}
                onClick={() => setPresetMode("custom")}
              >
                Custom Specs
              </button>
            </div>

            {/* Presets by Mode */}
            {presetMode === "clothes" && (
              <div>
                <div style={{ fontSize: 11, color: "#64748b", marginBottom: 6, fontWeight: 600 }}>Standard Apparel Sizes:</div>
                <div className="preset-grid">
                  {apparelSizes.map((sz) => {
                    const active = form.sizes.includes(sz);
                    return (
                      <button
                        key={sz}
                        type="button"
                        className={`preset-btn ${active ? "active" : ""}`}
                        onClick={() => toggleSize(sz)}
                      >
                        {sz}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {presetMode === "watches" && (
              <div>
                <div style={{ fontSize: 11, color: "#64748b", marginBottom: 5, fontWeight: 600 }}>Watch Case / Dial Sizes:</div>
                <div className="preset-grid" style={{ marginBottom: 8 }}>
                  {watchDialSizes.map((sz) => {
                    const active = form.sizes.includes(sz);
                    return (
                      <button
                        key={sz}
                        type="button"
                        className={`preset-btn ${active ? "active" : ""}`}
                        onClick={() => toggleSize(sz)}
                      >
                        {sz}
                      </button>
                    );
                  })}
                </div>

                <div style={{ fontSize: 11, color: "#64748b", marginBottom: 5, fontWeight: 600 }}>Watch Strap Options:</div>
                <div className="preset-grid">
                  {watchStrapTypes.map((st) => {
                    const active = form.sizes.includes(st);
                    return (
                      <button
                        key={st}
                        type="button"
                        className={`preset-btn ${active ? "active" : ""}`}
                        onClick={() => toggleSize(st)}
                      >
                        {st}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {presetMode === "footwear" && (
              <div>
                <div style={{ fontSize: 11, color: "#64748b", marginBottom: 6, fontWeight: 600 }}>Shoe Sizes (UK Standard):</div>
                <div className="preset-grid">
                  {footwearSizes.map((sz) => {
                    const active = form.sizes.includes(sz);
                    return (
                      <button
                        key={sz}
                        type="button"
                        className={`preset-btn ${active ? "active" : ""}`}
                        onClick={() => toggleSize(sz)}
                      >
                        {sz}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Custom tag adder */}
            <div className="custom-spec-row">
              <input
                value={customSizeInput}
                onChange={(e) => setCustomSizeInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter") handleAddCustomSize(e); }}
                placeholder="Add custom size or spec (e.g. 32, 50ml, 256GB, Nylon Strap)..."
                style={{ flex: 1, minWidth: 120 }}
              />
              <button
                type="button"
                className="secondary-action"
                style={{ height: 38, padding: "0 14px", fontSize: 11.5 }}
                onClick={handleAddCustomSize}
              >
                + Add Spec
              </button>
            </div>

            {/* Selected Sizes Chips */}
            {form.sizes.length > 0 && (
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 8 }}>
                {form.sizes.map((sz, i) => (
                  <span key={i} className="variant-tag" style={{ background: "#f8fafc", borderColor: "#cbd5e1" }}>
                    <strong style={{ color: "#0f172a" }}>{sz}</strong>
                    <button type="button" className="variant-chip-remove" onClick={() => toggleSize(sz)}>
                      <FiX />
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* ================= VARIANT MATRIX & COMBINATIONS ================= */}
          {form.variants.length > 0 && (
            <div className="field full" style={{ marginTop: 6 }}>
              <div className="variant-matrix-card">
                <div className="variant-matrix-head">
                  <div>
                    <strong style={{ fontSize: 12.5, color: "#0f172a" }}>
                      Generated Variant Combinations ({form.variants.length})
                    </strong>
                    <div style={{ fontSize: 11, color: "#64748b", marginTop: 1 }}>
                      Per-variant SKU, inventory allocation, and price override
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 6 }}>
                    <button
                      type="button"
                      style={{
                        border: "1px solid #cbd5e1",
                        background: "#fff",
                        padding: "3px 8px",
                        borderRadius: 6,
                        fontSize: 11,
                        cursor: "pointer",
                        fontWeight: 600
                      }}
                      onClick={() => setForm((prev) => ({
                        ...prev,
                        variants: autoGenerateVariants(prev.colors, prev.sizes, prev.price, prev.sku, prev.available)
                      }))}
                    >
                      <FiRefreshCw size={10} /> Reset Matrix
                    </button>
                    <button
                      type="button"
                      style={{
                        border: "1px solid #cbd5e1",
                        background: "#fff",
                        padding: "3px 8px",
                        borderRadius: 6,
                        fontSize: 11,
                        cursor: "pointer",
                        fontWeight: 600
                      }}
                      onClick={() => setShowVariantMatrix((v) => !v)}
                    >
                      {showVariantMatrix ? "Collapse" : "Expand"}
                    </button>
                  </div>
                </div>

                {showVariantMatrix && (
                  <div className="variant-matrix-table-wrap">
                    <table className="variant-matrix-table">
                      <thead>
                        <tr>
                          <th>Combination</th>
                          <th>SKU Suffix</th>
                          <th style={{ width: 90 }}>Stock</th>
                          <th style={{ width: 100 }}>Price (₹)</th>
                          <th style={{ width: 36 }}></th>
                        </tr>
                      </thead>
                      <tbody>
                        {form.variants.map((vr, idx) => (
                          <tr key={idx}>
                            <td style={{ fontWeight: 700, color: "#1e293b" }}>{vr.name}</td>
                            <td>
                              <input
                                value={vr.sku}
                                onChange={(e) => updateVariantRow(idx, "sku", e.target.value)}
                                placeholder="Variant SKU"
                              />
                            </td>
                            <td>
                              <input
                                type="number"
                                value={vr.stock}
                                onChange={(e) => updateVariantRow(idx, "stock", Number(e.target.value))}
                                placeholder="0"
                                min="0"
                              />
                            </td>
                            <td>
                              <input
                                type="number"
                                value={vr.price}
                                onChange={(e) => updateVariantRow(idx, "price", Number(e.target.value))}
                                placeholder="₹"
                              />
                            </td>
                            <td style={{ textAlign: "center" }}>
                              <button
                                type="button"
                                style={{ border: 0, background: "transparent", color: "#94a3b8", cursor: "pointer" }}
                                onClick={() => removeVariantRow(idx)}
                                title="Remove combination"
                              >
                                <FiX size={14} />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Description */}
          <div className="field full">
            <label>Product Description</label>
            <div className="desc-box">
              <div className="desc-toolbar">
                <button type="button" className="desc-tool-btn" title="Bold"><b>B</b></button>
                <button type="button" className="desc-tool-btn" title="Italic"><i>I</i></button>
                <button type="button" className="desc-tool-btn" title="Underline"><u>U</u></button>
                <button type="button" className="desc-tool-btn" title="Strikethrough"><s>S</s></button>
                <span className="desc-toolbar-sep" />
                <button type="button" className="desc-tool-btn" title="Bullet list">≡</button>
                <button type="button" className="desc-tool-btn" title="Numbered list">1.</button>
                <span className="desc-toolbar-sep" />
                <button type="button" className="desc-tool-btn" title="Insert Link"><FiLink size={12} /></button>
                <button type="button" className="desc-tool-btn" title="Clear formatting" style={{ fontSize: 11 }}>Tx</button>
              </div>
              <textarea
                className="desc-textarea"
                value={form.description}
                maxLength={1000}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                placeholder="Add any instruction or note for the order team..."
              />
              <div className="desc-footer">
                <span>{form.description.length} / 1000</span>
              </div>
            </div>
          </div>
        </div>

        <div className="modal-actions">
          <button type="button" className="secondary-action" onClick={onClose}>
            Cancel
          </button>
          <button className="primary-action">
            <FiCheck /> {product ? "Save Changes" : "Add Product"}
          </button>
        </div>
      </motion.form>
    </motion.div>
  );
}

function ImportModal({onClose,onImport}){
  const [file,setFile]=useState(null);
  return <motion.div className="modal-wrap" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={onClose}>
    <motion.div className="modal" initial={{y:20,scale:.98}} animate={{y:0,scale:1}} exit={{y:20,scale:.98}} onClick={e=>e.stopPropagation()}>
      <div className="modal-head"><h2>Import Products</h2><button className="secondary-action" onClick={onClose} style={{padding:0,width:32,height:32}} title="Close" aria-label="Close"><FiX size={16}/></button></div>
      <div className="upload-box" style={{marginTop:16}}><FiUpload size={24}/><div style={{fontWeight:800,marginTop:8}}>Upload product CSV</div><div style={{fontSize:11,color:"#424753",marginTop:4}}>Use CSV for bulk product creation or updates.</div><input type="file" accept=".csv,text/csv" onChange={e=>setFile(e.target.files?.[0]||null)}/></div>
      <div className="modal-actions"><button className="secondary-action" onClick={onClose}>Cancel</button><button className="primary-action" disabled={!file} onClick={()=>onImport(file)}><FiUpload/> Import</button></div>
    </motion.div>
  </motion.div>
}

export default function ProductsManagement(){
  const navigate = useNavigate();
  const [desktopSidebarOpen,setDesktopSidebarOpen]=useState(true);
  const [mobileMenuOpen,setMobileMenuOpen]=useState(false);
  const [products,setProducts]=useState(seedProducts);
  const [activeTab,setActiveTab]=useState("All Products");
  const [query,setQuery]=useState("");
  const [category,setCategory]=useState("All Categories");
  const [inventoryStatus,setInventoryStatus]=useState("All Inventory Status");
  const [selected,setSelected]=useState([]);
  const [drawer,setDrawer]=useState(null);
  const [editProduct,setEditProduct]=useState(null);
  const [addOpen,setAddOpen]=useState(false);
  const [importOpen,setImportOpen]=useState(false);
  const [importDropdownOpen,setImportDropdownOpen]=useState(false);
  const [exportDropdownOpen,setExportDropdownOpen]=useState(false);
  const [categoriesModalOpen,setCategoriesModalOpen]=useState(false);
  const [lowStockModalOpen,setLowStockModalOpen]=useState(false);
  const [updatesModalOpen,setUpdatesModalOpen]=useState(false);
  const [categoryTaxonomyState, setCategoryTaxonomyState] = useState(initialCategoryTaxonomy);
  const [catalogPathTaxonomyState, setCatalogPathTaxonomyState] = useState(initialCatalogPathTaxonomy);
  const [categoryOptionsState, setCategoryOptionsState] = useState(initialCategoryOptions);
  const [addCategoryModalOpen, setAddCategoryModalOpen] = useState(false);
  const [addSubCategoryModalOpen, setAddSubCategoryModalOpen] = useState(false);
  const [defaultParentForSubCategory, setDefaultParentForSubCategory] = useState("");
  const [toast,setToast]=useState(null);
  const [dateFilter, setDateFilter] = useState("Last 7 Days");
  const root=useRef(null);
  const importMenuRef=useRef(null);
  const exportMenuRef=useRef(null);

  const handleAddCategory = ({ categoryName, catalogSection, description, badgeTag }) => {
    setCategoryTaxonomyState((prev) => {
      if (!prev[categoryName]) {
        return { ...prev, [categoryName]: [] };
      }
      return prev;
    });

    if (catalogSection) {
      setCatalogPathTaxonomyState((prev) => {
        if (!prev[catalogSection]) {
          return { ...prev, [catalogSection]: [] };
        }
        return prev;
      });
    }

    setCategoryOptionsState((prev) => {
      if (!prev.includes(categoryName)) {
        return [...prev, categoryName];
      }
      return prev;
    });

    notify("Category Created", `Parent category "${categoryName}" added to catalog.`);
  };

  const handleAddSubCategory = ({ parentCat, subCat, catalogSection, catalogSubPath, description }) => {
    setCategoryTaxonomyState((prev) => {
      const existing = prev[parentCat] || [];
      if (!existing.includes(subCat)) {
        return { ...prev, [parentCat]: [...existing, subCat] };
      }
      return prev;
    });

    if (catalogSection) {
      setCatalogPathTaxonomyState((prev) => {
        const existing = prev[catalogSection] || [];
        if (!existing.includes(catalogSubPath)) {
          return { ...prev, [catalogSection]: [...existing, catalogSubPath] };
        }
        return prev;
      });
    }

    const newOption = `${parentCat} > ${subCat}`;
    setCategoryOptionsState((prev) => {
      if (!prev.includes(newOption)) {
        return [...prev, newOption];
      }
      return prev;
    });

    notify("Subcategory Created", `Subcategory "${subCat}" added under "${parentCat}".`);
  };

  useEffect(() => {
    function handleClickOutside(e) {
      if (importMenuRef.current && !importMenuRef.current.contains(e.target)) {
        setImportDropdownOpen(false);
      }
      if (exportMenuRef.current && !exportMenuRef.current.contains(e.target)) {
        setExportDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const notify=(title,message)=>{
    setToast({title,message});
    window.clearTimeout(window.__prodToast);
    window.__prodToast=window.setTimeout(()=>setToast(null),2600);
  };

  const handleToggleMenu=()=>{
    if(window.innerWidth<1050) setMobileMenuOpen(v=>!v);
    else setDesktopSidebarOpen(v=>!v);
  };

  const downloadSampleTemplate=()=>{
    const headers=["Product Name","SKU","Category","Price","Available Stock","Status","Description"];
    const rows=[
      ["Linen Blend Shirt","LBS-001","Apparel","1499","45","Published","Premium organic linen shirt"],
      ["Ceramic Vase Set","CVS-002","Home Decor","2199","12","Published","Handcrafted clay vase set"],
      ["Wireless Earbuds Pro","WEP-003","Electronics","3499","28","Published","Active noise cancellation earbuds"]
    ];
    const csvContent=[headers,...rows].map(r=>r.map(c=>`"${c}"`).join(",")).join("\n");
    const blob=new Blob([csvContent],{type:"text/csv"});
    const url=URL.createObjectURL(blob);
    const a=document.createElement("a");
    a.href=url;
    a.download="products_import_template.csv";
    a.click();
    URL.revokeObjectURL(url);
    notify("Template Downloaded","Sample CSV product import template saved.");
    setImportDropdownOpen(false);
  };

  const exportInventoryReport=()=>{
    const headers=["Product Name","SKU","Category","Unit Price","Available Stock","Stock Status","Estimated Stock Value"];
    const rows=products.map(p=>{
      const priceNum=Number(String(p.price).replace(/[^0-9.]/g,""))||0;
      const stockNum=Number(String(p.available).replace(/[^0-9]/g,""))||0;
      const valuation=priceNum*stockNum;
      const stockState=stockNum===0?"Out of Stock":stockNum<=10?"Low Stock":"In Stock";
      return [p.name,p.sku,p.category,`₹${priceNum}`,stockNum,stockState,`₹${valuation.toLocaleString("en-IN")}`];
    });
    const csvContent=[headers,...rows].map(r=>r.map(c=>`"${c}"`).join(",")).join("\n");
    const blob=new Blob([csvContent],{type:"text/csv"});
    const url=URL.createObjectURL(blob);
    const a=document.createElement("a");
    a.href=url;
    a.download="inventory_valuation_report.csv";
    a.click();
    URL.revokeObjectURL(url);
    notify("Report Exported",`Inventory report for ${products.length} products downloaded.`);
    setExportDropdownOpen(false);
  };

  const filtered=useMemo(()=>products.filter(p=>{
    const q=query.toLowerCase().trim();
    const tabOk=activeTab==="All Products" || p.status===activeTab;
    const qOk=!q || [p.name,p.sku,p.category,p.variant].some(v=>v.toLowerCase().includes(q));
    const catOk=category==="All Categories" || p.category===category;
    const invOk=inventoryStatus==="All Inventory Status" ||
      (inventoryStatus==="In Stock" && p.available>10) ||
      (inventoryStatus==="Low Stock" && p.available>0 && p.available<=10) ||
      (inventoryStatus==="Out of Stock" && p.available===0);
    return tabOk&&qOk&&catOk&&invOk;
  }),[products,activeTab,query,category,inventoryStatus]);

  const toggleSelect=(id)=>setSelected(s=>s.includes(id)?s.filter(x=>x!==id):[...s,id]);

  const saveProduct=(p)=>{
    setProducts(xs=>xs.some(x=>x.id===p.id)?xs.map(x=>x.id===p.id?p:x):[p,...xs]);
    setAddOpen(false);
    setEditProduct(null);
    setDrawer(null);
    notify("Product Saved",`${p.name} updated successfully.`);
  };

  const archive=(id)=>{
    setProducts(xs=>xs.map(x=>x.id===id?{...x,status:"Archived"}:x));
    setDrawer(null);
    notify("Product Archived","Item marked as archived.");
  };

  const exportRows=(rows)=>{
    const headers=["Product","SKU","Category","Price","Available","Status","Updated"];
    const body=rows.map(r=>[r.name,r.sku,r.category,r.price,r.available,r.status,r.updated]);
    const csvContent=[headers,...body].map(row=>row.map(cell=>`"${String(cell).replaceAll('"','""')}"`).join(",")).join("\n");
    const blob=new Blob([csvContent],{type:"text/csv"});
    const url=URL.createObjectURL(blob);
    const a=document.createElement("a");
    a.href=url; a.download="products.csv"; a.click();
    URL.revokeObjectURL(url);
    notify("Export Complete",`${rows.length} product rows exported to CSV.`);
  };

  const counts=useMemo(()=>({
    "All Products": products.length,
    "Published": products.filter(x=>x.status==="Published").length,
    "Draft": products.filter(x=>x.status==="Draft").length,
    "Archived": products.filter(x=>x.status==="Archived").length,
  }),[products]);

  const kpis=[
    ["Total Products","1,248","+12.4%","vs last 7 days","trust",FiBox],
    ["Active Products","1,086","+10.3%","vs last 7 days","green",FiShoppingBag],
    ["Draft Products","89","+5.2%","vs last 7 days","orange",FiPackage],
    ["Low Stock Products","34","-8.7%","vs last 7 days","orange",FiBox],
    ["Out of Stock","12","-20.0%","vs last 7 days","red",FiXCircle],
  ];

  return (
    <div className="products-scope">
      <style>{productsCss}</style>
      <div className="admin-shell" ref={root}>
        <div className={`desktop-sidebar-wrapper ${!desktopSidebarOpen?"is-closed":""}`}>
          <AdminSidebar activePage="Products" onClose={()=>setDesktopSidebarOpen(false)}/>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && <>
            <motion.button className="mobile-backdrop" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setMobileMenuOpen(false)}/>
            <AdminSidebar activePage="Products" mobile onClose={()=>setMobileMenuOpen(false)}/>
          </>}
        </AnimatePresence>

        <main className="dashboard-main">
          <AdminTopbar onToggleMenu={handleToggleMenu} desktopSidebarOpen={desktopSidebarOpen}/>

          <div className="dashboard-content">
            <section className="page-heading js-reveal">
              <div>
                <h1>Products</h1>
                <p>Manage your product catalog, inventory, and status in one place.</p>
              </div>
              <div className="page-actions">
                <MasterDatePicker value={dateFilter} onChange={setDateFilter} rightAlign />

                {/* Import Dropdown */}
                <div className={`action-dropdown-wrap ${importDropdownOpen ? "is-open" : ""}`} ref={importMenuRef}>
                  <button
                    className={`secondary-action ${importDropdownOpen ? "is-open" : ""}`}
                    onClick={() => { setImportDropdownOpen(v => !v); setExportDropdownOpen(false); }}
                  >
                    <FiUpload /> Import <FiChevronDown style={{ fontSize: 13, marginLeft: 2 }} />
                  </button>
                  <AnimatePresence>
                    {importDropdownOpen && (
                      <motion.div
                        className="action-dropdown-menu"
                        initial={{ opacity: 0, y: -4, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -4, scale: 0.98 }}
                        transition={{ duration: 0.15 }}
                      >
                        <button
                          type="button"
                          className="action-dropdown-item"
                          onClick={() => { setImportOpen(true); setImportDropdownOpen(false); }}
                        >
                          <div className="action-item-icon"><FiUpload /></div>
                          <div className="action-item-text">
                            <strong>Import CSV / Excel</strong>
                            <span>Bulk upload or update catalog</span>
                          </div>
                        </button>

                        <button
                          type="button"
                          className="action-dropdown-item"
                          onClick={downloadSampleTemplate}
                        >
                          <div className="action-item-icon"><FiFileText /></div>
                          <div className="action-item-text">
                            <strong>Download CSV Template</strong>
                            <span>Sample file with correct headers</span>
                          </div>
                        </button>

                        <button
                          type="button"
                          className="action-dropdown-item"
                          onClick={() => {
                            notify("Shopify Sync Initiated", "Catalog synchronization with Shopify in progress...");
                            setImportDropdownOpen(false);
                          }}
                        >
                          <div className="action-item-icon"><FiRefreshCw /></div>
                          <div className="action-item-text">
                            <strong>Import from Shopify</strong>
                            <span>Sync products from online store</span>
                          </div>
                        </button>

                        <button
                          type="button"
                          className="action-dropdown-item"
                          onClick={() => {
                            notify("WooCommerce Sync Initiated", "Catalog synchronization with WooCommerce in progress...");
                            setImportDropdownOpen(false);
                          }}
                        >
                          <div className="action-item-icon"><FiLayers /></div>
                          <div className="action-item-text">
                            <strong>Import from WooCommerce</strong>
                            <span>Sync external product database</span>
                          </div>
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Export Dropdown */}
                <div className={`action-dropdown-wrap ${exportDropdownOpen ? "is-open" : ""}`} ref={exportMenuRef}>
                  <button
                    className={`secondary-action ${exportDropdownOpen ? "is-open" : ""}`}
                    onClick={() => { setExportDropdownOpen(v => !v); setImportDropdownOpen(false); }}
                  >
                    <FiDownload /> Export <FiChevronDown style={{ fontSize: 13, marginLeft: 2 }} />
                  </button>
                  <AnimatePresence>
                    {exportDropdownOpen && (
                      <motion.div
                        className="action-dropdown-menu"
                        initial={{ opacity: 0, y: -4, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -4, scale: 0.98 }}
                        transition={{ duration: 0.15 }}
                      >
                        <button
                          type="button"
                          className="action-dropdown-item"
                          onClick={() => { exportRows(products); setExportDropdownOpen(false); }}
                        >
                          <div className="action-item-icon"><FiDownload /></div>
                          <div className="action-item-text">
                            <strong>Export All Products (CSV)</strong>
                            <span>Complete catalog ({products.length} products)</span>
                          </div>
                          <span className="action-item-badge">{products.length}</span>
                        </button>

                        <button
                          type="button"
                          className="action-dropdown-item"
                          onClick={() => { exportRows(filtered); setExportDropdownOpen(false); }}
                        >
                          <div className="action-item-icon"><FiFilter /></div>
                          <div className="action-item-text">
                            <strong>Export Current View (CSV)</strong>
                            <span>Filtered products ({filtered.length} products)</span>
                          </div>
                          <span className="action-item-badge">{filtered.length}</span>
                        </button>

                        <button
                          type="button"
                          className="action-dropdown-item"
                          disabled={selected.length === 0}
                          onClick={() => {
                            const selectedItems = products.filter(x => selected.includes(x.id));
                            if (selectedItems.length > 0) {
                              exportRows(selectedItems);
                            }
                            setExportDropdownOpen(false);
                          }}
                        >
                          <div className="action-item-icon"><FiCheck /></div>
                          <div className="action-item-text">
                            <strong>Export Selected Products</strong>
                            <span>{selected.length > 0 ? `${selected.length} items selected` : "No items selected"}</span>
                          </div>
                          {selected.length > 0 && <span className="action-item-badge">{selected.length}</span>}
                        </button>

                        <button
                          type="button"
                          className="action-dropdown-item"
                          onClick={exportInventoryReport}
                        >
                          <div className="action-item-icon"><FiBox /></div>
                          <div className="action-item-text">
                            <strong>Export Inventory Report</strong>
                            <span>Stock levels & valuation CSV</span>
                          </div>
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <button className="secondary-action" onClick={() => setAddCategoryModalOpen(true)}>
                  <FiPlus /> Add Category
                </button>
                <button
                  className="secondary-action"
                  onClick={() => {
                    setDefaultParentForSubCategory("");
                    setAddSubCategoryModalOpen(true);
                  }}
                >
                  <FiPlus /> Add Subcategory
                </button>
                <button className="primary-action" onClick={()=>setAddOpen(true)}><FiPlus/> Add Product</button>
              </div>
            </section>

            {/* KPI Cards Row */}
            <section className="kpi-grid js-reveal">
              {kpis.map(x=><KpiCard key={x[0]} item={x}/>)}
            </section>

            {/* Main Product Management Panel with Split Drawer Layout */}
            <div className={`products-split ${drawer ? "has-selected" : ""}`}>
              <section className="management-panel js-reveal">
                <div className="tabs">
                  {["All Products","Published","Draft","Archived"].map(x=>(
                    <button key={x} className={`tab ${activeTab===x?"active":""}`} onClick={()=>setActiveTab(x)}>
                      {x}<b>{counts[x]}</b>
                    </button>
                  ))}
                </div>

                <div className="filters">
                  <label className="local-search">
                    <FiSearch/>
                    <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search by product name, SKU..."/>
                  </label>
                  <MasterDropdown options={categoryOptionsState} value={category} onChange={setCategory}/>
                  <MasterDropdown options={["All Inventory Status","In Stock","Low Stock","Out of Stock"]} value={inventoryStatus} onChange={setInventoryStatus}/>
                  <div className="selection-spacer"/>
                  <button className="filter-button" onClick={()=>{setQuery("");setCategory("All Categories");setInventoryStatus("All Inventory Status")}}><FiFilter/> Filters</button>
                  <button className="secondary-action" style={{height:34}} onClick={()=>exportRows(filtered)}><FiDownload/> Export</button>
                </div>

                {/* Dedicated Selection Bar placed below filters row */}
                <div className="selection-bar">
                  <AnimatedCheckbox checked={filtered.length>0&&selected.length===filtered.length} onChange={e=>setSelected(e.target.checked?filtered.map(x=>x.id):[])}/>
                  <strong>{selected.length} selected</strong>
                  <span>Select all {filtered.length} on this page</span>
                  <div className="selection-spacer"/>
                  <button className="clear" onClick={()=>selected.length>0?setSelected([]):notify("No selection","No products are currently selected.")}>Clear selection</button>
                  <MasterDropdown
                    staticLabel="Bulk Actions"
                    rightAlign
                    options={[
                      { label: "Publish selected", action: ()=>notify("Status Updated",`${selected.length} products published.`) },
                      { label: "Export selected CSV", action: ()=>exportRows(filtered.filter(x=>selected.includes(x.id))) },
                      { label: "Clear selection", action: ()=>setSelected([]) }
                    ]}
                  />
                </div>

                <div className="table-scroll">
                  <table>
                    <thead>
                      <tr>
                        <th style={{width:38}}></th>
                        <th>Product</th>
                        <th>SKU</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Inventory</th>
                        <th>Status</th>
                        <th>Updated</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filtered.map(p=>(
                        <tr key={p.id} className={drawer?.id === p.id ? "selected" : ""}>
                          <td>
                            <AnimatedCheckbox checked={selected.includes(p.id)} onChange={()=>toggleSelect(p.id)}/>
                          </td>
                          <td>
                            <div className="product-cell">
                              <div className="product-thumb">
                                {p.images&&p.images.length>0?<img src={p.images[0]} alt={p.name}/>:<FiPackage size={18}/>}
                              </div>
                              <div className="product-meta">
                                <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
                                  <strong>{p.name}</strong>
                                  {p.brandVariant && (
                                    <span className="brand-badge">{p.brandVariant}</span>
                                  )}
                                </div>
                                <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 1 }}>
                                  {p.brand && <small style={{ color: "#0056c3", fontWeight: 700 }}>{p.brand}</small>}
                                  {p.brand && <small style={{ color: "#94a3b8" }}>•</small>}
                                  <small>{p.variant}</small>
                                </div>
                                {((p.colors && p.colors.length > 0) || (p.sizes && p.sizes.length > 0)) && (
                                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 4, flexWrap: "wrap" }}>
                                    {p.colors && p.colors.length > 0 && (
                                      <div style={{ display: "flex", alignItems: "center", gap: 3 }} title={p.colors.map(c => typeof c === "string" ? c : c.name).join(", ")}>
                                        {p.colors.slice(0, 4).map((c, i) => (
                                          <span
                                            key={i}
                                            className="color-dot"
                                            style={{ backgroundColor: typeof c === "string" ? c : c.hex, width: 10, height: 10 }}
                                          />
                                        ))}
                                        {p.colors.length > 4 && <span style={{ fontSize: 10, color: "#667085", fontWeight: 700 }}>+{p.colors.length - 4}</span>}
                                      </div>
                                    )}
                                    {p.sizes && p.sizes.length > 0 && (
                                      <div style={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
                                        {p.sizes.slice(0, 4).map((sz, i) => (
                                          <span key={i} className="variant-tag" style={{ fontSize: 9.5, padding: "1px 5px" }}>
                                            {sz}
                                          </span>
                                        ))}
                                        {p.sizes.length > 4 && <span style={{ fontSize: 9.5, color: "#667085", fontWeight: 700 }}>+{p.sizes.length - 4}</span>}
                                      </div>
                                    )}
                                  </div>
                                )}
                              </div>
                            </div>
                          </td>
                          <td><strong>{p.sku}</strong></td>
                          <td><span className="category-text">{p.category}</span></td>
                          <td><strong>₹{p.price.toLocaleString("en-IN")}</strong></td>
                          <td>
                            <span className={p.available===0?"stock-bad":p.available<=10?"stock-warn":"stock-good"}>
                              {p.available} in stock
                            </span>
                          </td>
                          <td>
                            <span className={`status-pill status-${p.status.toLowerCase()}`}>
                              <i/>{p.status}
                            </span>
                          </td>
                          <td>{p.updated}</td>
                          <td>
                            <div className="row-actions">
                              <button title="Edit product" onClick={()=>setEditProduct(p)}><FiEdit2/></button>
                              <button
                                title="View details"
                                className={drawer?.id === p.id ? "active-action" : ""}
                                onClick={()=>setDrawer(curr => curr?.id === p.id ? null : p)}
                              >
                                <FiEye/>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <MobileTableCards
                  items={filtered}
                  renderItem={(p) => (
                    <MobileTableCard
                      key={p.id}
                      title={p.sku || `#PRD-${p.id}`}
                      badge={p.status}
                      badgeStatus={p.status}
                      meta={[
                        { label: "Product", value: `${p.name} (${p.variant})` },
                        ...(p.brandVariant ? [{ label: "Edition", value: `${p.brand || ""} - ${p.brandVariant}` }] : []),
                        { label: "Category", value: p.category },
                        ...(p.sizes && p.sizes.length > 0 ? [{ label: "Variants", value: p.sizes.join(", ") }] : []),
                        { label: "Price", value: `₹${p.price.toLocaleString("en-IN")}` },
                        { label: "Stock", value: `${p.available} in stock` },
                        { label: "Updated", value: p.updated },
                      ]}
                      actionLabel="View Product Details"
                      onAction={() => setDrawer((curr) => (curr?.id === p.id ? null : p))}
                    />
                  )}
                />

                <div className="footerbar">
                  <span>Showing 1–{filtered.length} of 1,248 products</span>
                  <div className="pagination">
                    <button><FiChevronLeft/></button>
                    <button className="active">1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>…</button>
                    <button>125</button>
                    <button><FiChevronRight/></button>
                  </div>
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
                      title="Product Details"
                      editLabel="Edit Configuration"
                      onClose={() => setDrawer(null)}
                      onEdit={() => { setEditProduct(drawer); setDrawer(null); }}
                      onToast={(msg) => notify("Product Action", msg)}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Bottom Grid: 3 Cards Side-by-Side matching screenshot layout */}
            <div className="bottom-grid js-reveal">
              {/* Card 1 (1.05fr): Top Categories */}
              <section className="bottom-card">
                <div className="bottom-card-head">
                  <h3>Top Categories</h3>
                  <button className="link-btn" onClick={()=>setCategoriesModalOpen(true)}>View all</button>
                </div>
                <MasterPieChart
                  centerTitle="TOTAL PRODUCTS"
                  centerValue="1,248"
                  data={[
                    ["Men", "412 (33.0%)", "#1456c7"],
                    ["Women", "318 (25.5%)", "#2f7be8"],
                    ["Footwear", "196 (15.7%)", "#ff7a1a"],
                    ["Electronics", "142 (11.4%)", "#fb4a4a"],
                    ["Beauty", "98 (7.8%)", "#7aa994"],
                    ["Others", "82 (6.6%)", "#8e99ad"]
                  ]}
                  conicGradient="conic-gradient(#1456c7 0 33%, #2f7be8 33% 58%, #ff7a1a 58% 74%, #fb4a4a 74% 86%, #7aa994 86% 94%, #8e99ad 94% 100%)"
                  shape="circle"
                />
              </section>

              {/* Card 2 (1fr): Low Stock Items */}
              <section className="bottom-card">
                <div className="bottom-card-head">
                  <h3>Low Stock Items</h3>
                  <button className="link-btn" onClick={() => navigate("/inventory", { state: { status: "Low Stock", tab: "Low Stock" } })}>View all</button>
                </div>
                <div className="alert-list">
                  {[
                    ["Classic White Sneakers","AMH-FWT-045","8 in stock","10"],
                    ["Analog Wrist Watch","AMH-WAT-002","6 in stock","10"],
                    ["Urban Backpack","AMH-BAG-015","5 in stock","10"],
                    ["Eau de Parfum - 100ml","AMH-PER-003","3 in stock","5"],
                    ["Wireless Headphones","AMH-AUD-009","0 in stock","15"],
                    ["Vitamin C Serum","AMH-BTY-021","9 in stock","10"],
                    ["Leather Tote Bag","AMH-BAG-001","4 in stock","10"]
                  ].map(([n,s,stock,reorder])=>(
                    <div className="alert-item" key={s} style={{cursor:"pointer"}} onClick={() => navigate("/inventory", { state: { status: "Low Stock", tab: "Low Stock" } })}>
                      <div className="mini-thumb"><FiPackage size={16}/></div>
                      <div className="item-info">
                        <strong>{n}</strong>
                        <small>{s}</small>
                      </div>
                      <div className="alert-right">
                        <b>{stock}</b>
                        <span>Reorder level: {reorder}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Card 3 (1.25fr): Recent Product Updates */}
              <section className="bottom-card">
                <div className="bottom-card-head">
                  <h3>Recent Product Updates</h3>
                  <button className="link-btn" onClick={()=>setUpdatesModalOpen(true)}>View all</button>
                </div>
                <div className="update-list">
                  {[
                    ["Linen Blend Shirt","AMH-SHR-117","Price updated","₹1,699 → ₹1,799","May 18, 2025 10:30 AM by Sujith"],
                    ["Wireless Headphones","AMH-AUD-009","Stock updated","10 → 0","May 17, 2025 04:48 PM by Sujith"],
                    ["Leather Tote Bag","AMH-BAG-001","Status updated","Published","May 17, 2025 11:20 AM by Sujith"],
                    ["Classic White Sneakers","AMH-FWT-045","Stock updated","12 → 8","May 16, 2025 02:15 PM by Sujith"],
                    ["Analog Wrist Watch","AMH-WAT-002","Status updated","Published","May 16, 2025 11:00 AM by Sujith"]
                  ].map(([n,s,action,val,time])=>(
                    <div className="update-item" key={s}>
                      <div className="mini-thumb"><FiPackage size={16}/></div>
                      <div className="item-info">
                        <strong>{n}</strong>
                        <small>{s}</small>
                      </div>
                      <div className="update-right">
                        <span>
                          {action}{" "}
                          <strong style={{
                            color: action.includes("Price") ? "#0056c3" : action.includes("Stock") ? "#d66c00" : "#138a42",
                            fontWeight: 700
                          }}>
                            {val}
                          </strong>
                        </span>
                        <time>{time}</time>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>

      <AnimatePresence>
        {(addOpen || editProduct) && (
          <ProductModal
            product={editProduct}
            categoryTaxonomy={categoryTaxonomyState}
            catalogPathTaxonomy={catalogPathTaxonomyState}
            onOpenAddCategory={() => setAddCategoryModalOpen(true)}
            onOpenAddSubCategory={(parent) => {
              setDefaultParentForSubCategory(parent || "");
              setAddSubCategoryModalOpen(true);
            }}
            onClose={()=>{setAddOpen(false);setEditProduct(null)}}
            onSave={saveProduct}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {addCategoryModalOpen && (
          <AddCategoryModal
            catalogPathTaxonomy={catalogPathTaxonomyState}
            onClose={() => setAddCategoryModalOpen(false)}
            onSave={handleAddCategory}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {addSubCategoryModalOpen && (
          <AddSubCategoryModal
            categoryTaxonomy={categoryTaxonomyState}
            catalogPathTaxonomy={catalogPathTaxonomyState}
            defaultParent={defaultParentForSubCategory}
            onClose={() => {
              setAddSubCategoryModalOpen(false);
              setDefaultParentForSubCategory("");
            }}
            onSave={handleAddSubCategory}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {importOpen && (
          <ImportModal
            onClose={()=>setImportOpen(false)}
            onImport={()=>{setImportOpen(false);notify("Import Complete","Products imported successfully.")}}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {categoriesModalOpen && (
          <TopCategoriesModal
            onClose={()=>setCategoriesModalOpen(false)}
            notify={notify}
            onAddCategoryClick={() => setAddCategoryModalOpen(true)}
            onAddSubCategoryClick={() => {
              setDefaultParentForSubCategory("");
              setAddSubCategoryModalOpen(true);
            }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {lowStockModalOpen && (
          <LowStockModal
            onClose={()=>setLowStockModalOpen(false)}
            onEditProduct={setEditProduct}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {updatesModalOpen && (
          <RecentUpdatesModal
            onClose={()=>setUpdatesModalOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {toast && (
          <motion.div className="toast" initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} exit={{opacity:0,y:12}}>
            <FiCheck size={16}/>
            <div>
              <div style={{fontWeight:800}}>{toast.title}</div>
              <div style={{fontSize:10,opacity:.85}}>{toast.message}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
