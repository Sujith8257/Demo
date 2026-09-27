import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import AdminSidebar from "../../../components/Admin/AdminSidebar";
import AdminTopbar from "../../../components/Admin/AdminTopbar";
import KpiCard from "../../../components/Admin/KpiCard";
import InventoryTable from "../../../components/Admin/InventoryTable";
import MasterDropdown from "../../../components/Admin/MasterDropdown";
import MasterDatePicker from "../../../components/Admin/MasterDatePicker";
import MasterPieChart from "../../../components/Admin/MasterPieChart";
import LowStockCard from "../../../components/Admin/LowStockCard";
import DashboardListCard from "../../../components/Admin/DashboardListCard";
import AnimatedCheckbox from "../../../components/Admin/AnimatedCheckbox";
import IntegrationDetailsDrawer from "../../../components/Admin/IntegrationDetailsDrawer";
import {
  FiAlertTriangle, FiArchive, FiBarChart2, FiBell, FiBox, FiCalendar, FiCheckCircle, FiChevronDown,
  FiChevronLeft, FiChevronRight, FiCreditCard, FiDownload, FiEdit3, FiEye, FiExternalLink, FiFilter,
  FiGift, FiHeadphones, FiHome, FiImage, FiMenu, FiPackage, FiPhone,
  FiPlus, FiRefreshCw, FiRotateCcw, FiSearch, FiSettings, FiShoppingBag, FiStar, FiTag,
  FiTrendingDown, FiTrendingUp, FiTruck, FiUser, FiUsers, FiX
} from "react-icons/fi";

const inventoryCss = `
.inventory-scope {
  --admin-surface: #faf8ff;
  --admin-surface-low: #f3f3fe;
  --admin-surface-mid: #ededf8;
  --admin-surface-high: #e7e7f3;
  --admin-white: #ffffff;
  --admin-text: #191b23;
  --admin-muted: #191B23;
  --admin-outline: #c2c6d5;
  --admin-primary: #004094;
  --admin-primary-2: #0056c3;
  --admin-orange: #fd661d;
  --admin-green: #0b6b1d;
  --admin-red: #D32F2F;
  --admin-shadow: 0 4px 14px rgba(0,0,0,.06);
}

.inventory-scope * { box-sizing: border-box; }
.inv-split { display: grid; grid-template-columns: 1fr; gap: 16px; align-items: start; margin-bottom: 18px; transition: grid-template-columns 0.25s ease; }
.inv-split.has-selected { grid-template-columns: minmax(0, 1.62fr) minmax(330px, 0.78fr); }
.inventory-shell { min-height: 100vh; display: flex; background: var(--admin-surface); color: var(--admin-text); font-family: 'Manrope', system-ui, sans-serif; }
.inventory-main { flex: 1; min-width: 0; display: flex; flex-direction: column; }
.inventory-content { padding: 24px 28px 36px; }

.desktop-sidebar-wrapper { width: 256px; flex-shrink: 0; transition: all .25s ease; }
.desktop-sidebar-wrapper.is-closed { display: none; }

.pagehead { display: flex; justify-content: space-between; gap: 20px; align-items: flex-end; margin-bottom: 22px; }
.pagehead h1 { margin: 0; font-size: 30px; letter-spacing: -.02em; font-weight: 800; line-height: 1.2; color: var(--admin-text); }
.pagehead p { margin: 6px 0 0; font-size: 13.5px; color: var(--admin-muted); font-weight: 500; }

.primarybtn, .secondarybtn { height: 42px; border-radius: 10px; padding: 0 18px; display: inline-flex; align-items: center; gap: 9px; font-size: 13px; font-weight: 800; cursor: pointer; transition: all .18s ease; }
.primarybtn { border: 0; background: #FD661D; color: #fff; box-shadow: 0 4px 12px rgba(253,102,29,.25); }
.primarybtn:hover { background: #e05510; }
.secondarybtn { border: 1px solid var(--admin-outline); background: #fff; color: var(--admin-text); box-shadow: var(--admin-shadow); }
.secondarybtn:hover { background: var(--admin-surface-low); border-color: var(--admin-primary-2); color: var(--admin-primary-2); }

@media (max-width: 640px) {
  .inventory-content { padding: 16px 14px 28px !important; }
  .pagehead { flex-direction: column !important; align-items: flex-start !important; gap: 12px !important; margin-bottom: 16px !important; }
  .pagehead h1 { font-size: 24px !important; }
  .pagehead p { font-size: 13px !important; line-height: 1.4 !important; }
  .pagehead > div:last-child { display: flex !important; flex-wrap: wrap !important; gap: 8px !important; width: 100% !important; }
  .primarybtn, .secondarybtn { height: 38px !important; padding: 0 14px !important; font-size: 12px !important; }
}

.btn { height: 40px; border-radius: 999px; padding: 0 16px; display: inline-flex; align-items: center; justify-content: center; gap: 8px; font-size: 12px; font-weight: 800; cursor: pointer; transition: all .18s; }
.btn.primary { border: 0; background: var(--admin-orange); color: #fff; }
.btn.secondary { border: 1px solid var(--admin-outline); background: #fff; color: var(--admin-text); }
.btn.danger { border: 1px solid #f3b3ad; background: #fff; color: var(--admin-red); }

.panel { background: #fff; border: 1px solid var(--admin-outline); border-radius: 10px; box-shadow: 0 4px 12px rgba(25,27,35,.05); overflow: hidden; }
.tabs { display: flex; gap: 2px; overflow-x: auto; padding: 0 10px; border-bottom: 1px solid var(--admin-surface-mid); }
.tab { height: 44px; border: 0; background: transparent; padding: 0 12px; font-size: 12px; font-weight: 800; color: var(--admin-text); position: relative; white-space: nowrap; cursor: pointer; }
.tab b { margin-left: 5px; padding: 3px 6px; border-radius: 999px; background: var(--admin-surface-mid); font-size: 10px; font-weight: 800; color: var(--admin-text); }
.tab.active { color: var(--admin-primary-2); }
.tab.active:after { content: ""; position: absolute; left: 8px; right: 8px; bottom: 0; height: 2px; background: var(--admin-primary-2); }
.filters { padding: 12px; display: flex; align-items: center; gap: 8px; flex-wrap: wrap; border-bottom: 1px solid var(--admin-surface-mid); }
.field { height: 38px; border: 1px solid var(--admin-outline); border-radius: 8px; background: #fff; display: flex; align-items: center; gap: 8px; padding: 0 10px; font-size: 12px; font-weight: 800; color: var(--admin-text); }
.field input, .field select { border: 0; outline: 0; width: 100%; background: transparent; font-size: 12px; font-weight: 800; color: var(--admin-text); }
.filterbtn { height: 38px; border: 1px solid var(--admin-outline); background: #fff; border-radius: 8px; padding: 0 12px; display: flex; align-items: center; gap: 7px; font-size: 12px; font-weight: 800; color: var(--admin-text); cursor: pointer; }
.selection-bar, .selbar {
  padding: 10px 18px;
  background: #ffffff;
  border-bottom: 1px solid #ededf8;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  flex-wrap: wrap;
  position: relative;
  z-index: 20;
}
.selection-bar strong, .selbar strong { font-size: 12px; font-weight: 800; color: #191b23; }
.selection-bar span, .selbar span { font-size: 11px; color: #424753; font-weight: 500; }
.selection-spacer, .selbar .spacer { margin-left: auto; }
.smallbtn { height: 34px; border: 1px solid var(--admin-outline); background: #fff; border-radius: 8px; padding: 0 12px; font-size: 12px; font-weight: 800; color: var(--admin-text); cursor: pointer; display: inline-flex; align-items: center; justify-content: center; gap: 6px; white-space: nowrap; }
.smallbtn svg { font-size: 13px; flex-shrink: 0; }
.clear {
  border: 0;
  background: transparent;
  color: #0056c3;
  font-size: 11px;
  font-weight: 800;
  cursor: pointer;
  padding: 0 8px;
  height: 34px;
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
  transition: color 0.18s ease;
}
.clear:hover { color: #003882; text-decoration: underline; }

.tablewrap { overflow-x: auto; }
table { width: 100%; border-collapse: collapse; min-width: 1100px; }
thead { background: #f3f3fe; }
th { height: 44px; padding: 0 14px; border-bottom: 1px solid #ededf8; text-align: left; font-size: 13px; font-weight: 800; color: #191b23; text-transform: uppercase; letter-spacing: .04em; white-space: nowrap; }
td { height: 62px; padding: 0 14px; border-bottom: 1px solid #ededf8; font-size: 12.5px; font-weight: 500; color: #191b23; vertical-align: middle; }
td strong { color: #191b23; font-weight: 500; }
.product { display: flex; align-items: center; gap: 10px; }
.pthumb { width: 34px; height: 34px; border-radius: 50%; background: #004094; display: grid; place-items: center; color: #ffffff; font-weight: 800; font-size: 11px; flex-shrink: 0; }
.pmeta strong { display: block; font-size: 13px; color: #191b23; font-weight: 500; }
.pmeta small { display: block; margin-top: 1px; font-size: 11px; color: #191b23; font-weight: 500; }
.category { color: #191b23; font-weight: 500; }
.numgood { color: #158c43; font-weight: 800; }
.numwarn { color: #d66c00; font-weight: 800; }
.numbad { color: var(--admin-red); font-weight: 800; }

.status { display: inline-flex; align-items: center; justify-content: center; height: 24px; padding: 0 12px; border-radius: 999px; font-size: 11px; font-weight: 800; white-space: nowrap; }
.status.in-stock { background: #def6e5; color: #138a42; }
.status.low-stock { background: #fff0d8; color: #d66c00; }
.status.out-of-stock { background: #ffe2df; color: #b32626; }
.status.incoming { background: #e7efff; color: #2b65c8; }
.status.archived { background: #ececf2; color: #616674; }

.actions { display: flex; gap: 6px; }
.actions button { width: 34px; height: 34px; border: 1px solid #c2c6d5; border-radius: 8px; background: #ffffff; color: #191b23; display: grid; place-items: center; font-size: 16px; cursor: pointer; transition: all .18s ease; }
.actions button:hover { background: #fff5f0; border-color: #fd661d; color: #fd661d; }
.pagination { display: flex; align-items: center; justify-content: space-between; padding: 12px 14px; }
.pagination span { font-size: 12px; font-weight: 600; color: var(--admin-muted); }
.pages { display: flex; gap: 5px; }
.pages button { width: 34px; height: 34px; border: 1px solid var(--admin-outline); background: #fff; border-radius: 7px; font-size: 12px; font-weight: 700; cursor: pointer; }
.pages button.active { background: var(--admin-primary-2); color: #fff; border-color: var(--admin-primary-2); }

.bottom { display: grid; grid-template-columns: 1.05fr 1fr 1.25fr; gap: 14px; margin-top: 20px; }
.bottom-card { background: #fff; border: 1px solid rgba(194,198,213,.62); border-radius: 12px; box-shadow: var(--admin-shadow); padding: 16px 18px; display: flex; flex-direction: column; }
.bottom-card-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; }
.bottom-card-head h3 { margin: 0; font-size: 13px; font-weight: 800; color: #10172f; }
.link-btn { border: 0; background: transparent; color: var(--admin-primary-2); font-size: 11px; font-weight: 750; padding: 0; cursor: pointer; }
.link-btn:hover { text-decoration: underline; }

.donut-layout { display: flex; align-items: center; gap: 20px; margin-top: 6px; flex: 1; }
.donut-chart {
  width: 142px; height: 142px; border-radius: 50%;
  background: conic-gradient(#1456c7 0 79%, #ff7a1a 79% 89%, #fb4a4a 89% 92%, #7aa994 92% 100%);
  position: relative; display: grid; place-items: center; flex-shrink: 0;
}
.donut-chart:after { content: ""; position: absolute; inset: 28px; border-radius: 50%; background: #fff; }
.donut-center { position: relative; z-index: 1; text-align: center; }
.donut-center strong { display: block; font-size: 9.5px; font-weight: 800; color: #12141C; text-transform: uppercase; letter-spacing: .02em; }
.donut-center span { display: block; font-size: 11.5px; font-weight: 600; color: #12141C; margin-top: 1px; }
.legend-grid { display: grid; gap: 9px; flex: 1; }
.legend-row { display: grid; grid-template-columns: 9px 1fr auto; gap: 8px; align-items: center; }
.legend-row span { font-size: 9.5px; font-weight: 500; color: #667085; }
.legend-row strong { font-size: 11px; font-weight: 600; color: #12141C; }
.legend-row i { width: 8px; height: 8px; border-radius: 50%; }

.alert-list, .update-list {
  display: grid;
  gap: 8px;
  max-height: 220px;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.alert-list::-webkit-scrollbar, .update-list::-webkit-scrollbar {
  display: none;
  width: 0;
  height: 0;
}
.alert-item, .update-item {
  display: flex; align-items: center; gap: 10px; padding: 10px 12px;
  border: 1px solid #ededf8; border-radius: 9px; background: #ffffff;
  transition: all .18s ease;
}
.alert-item:hover, .update-item:hover {
  background: #f8faff; border-color: #c2c6d5; box-shadow: 0 2px 6px rgba(0,0,0,.04);
}
.mini-thumb { width: 36px; height: 36px; border: 1px solid #c2c6d5; background: #f8faff; border-radius: 8px; display: grid; place-items: center; font-size: 16px; flex-shrink: 0; overflow: hidden; }
.mini-thumb img { width: 100%; height: 100%; object-fit: cover; border-radius: 7px; }
.item-info strong { display: block; font-size: 12px; font-weight: 700; color: #10172f; }
.item-info small { display: block; font-size: 10.5px; color: #667085; margin-top: 1px; }
.alert-right { margin-left: auto; text-align: right; }
.alert-right b { font-size: 11px; color: #d66c00; display: block; font-weight: 800; }
.alert-right span { font-size: 10px; color: #6c768b; }
.update-right { margin-left: auto; text-align: right; }
.update-right span { font-size: 11px; color: #191b23; font-weight: 600; }
.update-right time { display: block; font-size: 10px; color: #7a8497; margin-top: 2px; }
.help span { display: flex; align-items: center; gap: 8px; font-size: 12px; color: var(--admin-text); font-weight: 600; margin: 9px 0; }

.overlay { position: fixed; inset: 0; background: rgba(25,27,35,.55); backdrop-filter: blur(4px); z-index: 90; }
.drawer { position: absolute; right: 0; top: 0; width: min(540px, 100%); height: 100%; background: #fff; overflow-y: auto; padding: 20px; box-shadow: -8px 0 32px rgba(0,0,0,.15); }
.dhead { display: flex; justify-content: space-between; align-items: flex-start; gap: 10px; padding-bottom: 14px; border-bottom: 1px solid var(--admin-surface-mid); }
.dtitle { display: flex; align-items: center; gap: 10px; }
.dthumb { width: 58px; height: 58px; border-radius: 9px; background: var(--admin-surface-low); display: grid; place-items: center; color: var(--admin-primary-2); font-weight: 800; font-size: 14px; }
.dhead h2 { margin: 0; font-size: 20px; font-weight: 800; color: var(--admin-text); }
.dhead small { display: block; margin-top: 3px; font-size: 11px; color: var(--admin-muted); font-weight: 500; }
.section { padding: 14px 0; border-bottom: 1px solid var(--admin-surface-mid); }
.section h3 { margin: 0 0 10px; font-size: 13.5px; font-weight: 800; color: var(--admin-text); }
.infogrid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; }
.info { border: 1px solid var(--admin-surface-mid); background: var(--admin-surface-low); border-radius: 8px; padding: 10px; }
.info span { font-size: 11px; color: var(--admin-text); font-weight: 800; }
.info strong { display: block; margin-top: 3px; font-size: 13px; color: var(--admin-muted); font-weight: 500; }
.warehouse { display: grid; gap: 10px; }
.wrow { display: grid; grid-template-columns: 1fr auto; gap: 8px; }
.wrow strong, .wrow span { font-size: 12px; font-weight: 600; color: var(--admin-text); }
.bar { grid-column: 1/3; height: 6px; border-radius: 999px; background: var(--admin-surface-mid); overflow: hidden; }
.bar i { display: block; height: 100%; background: var(--admin-primary-2); }
.movement { display: grid; gap: 10px; }
.mrow { display: grid; grid-template-columns: auto 1fr auto; gap: 8px; align-items: center; }
.micon { width: 28px; height: 28px; border-radius: 50%; display: grid; place-items: center; font-size: 12px; }
.micon.up { background: #e0f7e7; color: #168447; }
.micon.down { background: #ffe2df; color: #b32626; }
.mrow strong { display: block; font-size: 12px; font-weight: 800; color: var(--admin-text); }
.mrow small { font-size: 11px; color: var(--admin-muted); font-weight: 500; }
.mrow b { font-size: 12px; font-weight: 800; }
.kv { display: grid; grid-template-columns: 150px 1fr; gap: 8px 12px; }
.kv span { font-size: 12px; color: var(--admin-text); font-weight: 800; }
.kv strong { font-size: 12.5px; color: var(--admin-muted); font-weight: 500; }
.dactions { position: sticky; bottom: 0; background: #fff; padding-top: 14px; display: flex; gap: 8px; }

.modalwrap { position: fixed; inset: 0; background: rgba(25,27,35,.55); backdrop-filter: blur(4px); z-index: 100; display: grid; place-items: center; padding: 16px; }
.modal { width: min(640px, 100%); max-height: 90vh; overflow-y: auto; background: #fff; border-radius: 12px; box-shadow: 0 18px 50px rgba(25,27,35,.12); padding: 18px; border: 1px solid var(--admin-outline); }
.mhead { display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--admin-surface-mid); padding-bottom: 12px; }
.mhead h2 { margin: 0; font-size: 20px; font-weight: 800; color: var(--admin-text); }
.formgrid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 14px; }
.f { display: grid; gap: 6px; }
.f.full { grid-column: 1/3; }
.f label { font-size: 12px; font-weight: 800; color: var(--admin-text); }
.f input, .f select, .f textarea { width: 100%; border: 1px solid var(--admin-outline); border-radius: 8px; background: #fff; padding: 10px; font-size: 13px; font-weight: 600; outline: none; }
.mactions { display: flex; justify-content: flex-end; gap: 8px; margin-top: 16px; }
.inventory-modal-overflow { overflow: visible !important; }
.modal-field-dropdown { width: 100% !important; display: block !important; position: relative !important; }
.modal-field-dropdown .master-dropdown-trigger { width: 100% !important; height: 38px !important; padding: 0 11px !important; border: 1px solid var(--admin-outline) !important; border-radius: 8px !important; background: #fff !important; justify-content: space-between !important; font-size: 13px !important; font-weight: 600 !important; color: var(--admin-text) !important; }
.modal-field-dropdown .master-dropdown-trigger:hover { border-color: var(--admin-primary-2) !important; }
.modal-field-dropdown .master-dropdown-label { font-size: 13px !important; font-weight: 600 !important; color: var(--admin-text) !important; }
.modal-field-dropdown .master-dropdown-menu { width: 100% !important; max-height: 200px !important; overflow-y: auto !important; z-index: 99999 !important; box-shadow: 0 16px 40px rgba(16, 24, 40, 0.2) !important; }
.toast { position: fixed; right: 18px; bottom: 18px; z-index: 120; background: var(--admin-text); color: #fff; border-radius: 99px; padding: 12px 14px; box-shadow: 0 18px 50px rgba(25,27,35,.12); font-size: 12px; font-weight: 600; display: flex; align-items: center; gap: 8px; }
@media(min-width:1050px){ .topbar .menu-toggle-btn.desktop-hidden { display: none; } }
@media(max-width:1250px){
  .bottom { grid-template-columns: 1fr 1fr; }
  .bottom .bottom-card:last-child { grid-column: 1 / 3; }
}
@media(max-width:1050px){ .desktop-sidebar-wrapper{display:none!important;} }
@media(max-width:980px){
  .inventory-content{padding:16px}
  .selection-bar, .selbar {
    padding: 8px 12px !important;
    font-size: 11px !important;
    flex-wrap: wrap !important;
    gap: 8px !important;
    box-sizing: border-box !important;
  }
  .selection-bar .selection-spacer,
  .selection-bar .spacer,
  .selbar .spacer,
  .selbar .selection-spacer {
    display: none !important;
  }
  .selection-bar .master-dropdown,
  .selbar .master-dropdown {
    margin-left: auto !important;
  }
  /* Stack bottom cards one below another on mobile */
  .bottom {
    display: flex !important;
    flex-direction: column !important;
    gap: 14px !important;
    width: 100% !important;
  }
  .bottom .bottom-card {
    width: 100% !important;
    box-sizing: border-box !important;
  }
  .bottom .bottom-card:last-child {
    grid-column: auto !important;
  }
}
@media(max-width:650px){
  .modalwrap { padding: 12px 10px !important; }
  .modal { width: calc(100vw - 20px) !important; max-width: 100% !important; padding: 16px 14px !important; max-height: 88vh !important; overflow-y: auto !important; box-sizing: border-box !important; }
  .formgrid { grid-template-columns: 1fr !important; gap: 10px !important; }
  .f.full { grid-column: auto !important; }
  .mactions { flex-direction: column-reverse !important; gap: 8px !important; }
  .mactions button { width: 100% !important; justify-content: center !important; }
}
@media(max-width:480px){ .inventory-content{padding:10px} .filters{grid-template-columns:1fr} .filters .field:first-child{grid-column:auto} .formgrid{grid-template-columns:1fr} .f.full{grid-column:auto} .kv{grid-template-columns:1fr} .dactions{flex-direction:column} }
`;

const initial = [
  {id:"P001",product:"Linen Blend Shirt (M)",variant:"Size: M · Color: White",sku:"SKU-AMH-TS-001",category:"Men > Shirts",available:128,reserved:15,incoming:40,reorder:30,supplier:"Raxotex Textiles",warehouse:"Main Warehouse",updated:"May 19, 2025 10:26 AM",status:"In Stock",archived:false},
  {id:"P002",product:"Leather Tote Bag",variant:"Brown",sku:"SKU-AMH-BG-002",category:"Bags > Tote",available:22,reserved:8,incoming:20,reorder:30,supplier:"LPI Supplies",warehouse:"Mumbai Warehouse",updated:"May 18, 2025 09:45 AM",status:"Low Stock",archived:false},
  {id:"P003",product:"Ceramic Vase Set",variant:"Set of 3",sku:"SKU-AMH-HM-015",category:"Home > Decor",available:6,reserved:0,incoming:0,reorder:15,supplier:"Ceramic World",warehouse:"Delhi Warehouse",updated:"May 18, 2025 09:30 AM",status:"Out of Stock",archived:false},
  {id:"P004",product:"Wireless Earbuds",variant:"Black",sku:"SKU-AMH-EL-010",category:"Electronics > Audio",available:54,reserved:5,incoming:25,reorder:20,supplier:"TechHub",warehouse:"Main Warehouse",updated:"May 17, 2025 08:00 PM",status:"In Stock",archived:false},
  {id:"P005",product:"Vitamin C Serum",variant:"30ml",sku:"SKU-AMH-BTY-020",category:"Beauty > Skincare",available:18,reserved:2,incoming:30,reorder:25,supplier:"Glow Labs",warehouse:"Mumbai Warehouse",updated:"May 17, 2025 05:20 PM",status:"Low Stock",archived:false},
  {id:"P006",product:"Running Shoes",variant:"UK 9 / Blue",sku:"SKU-AMH-SP-030",category:"Footwear > Men",available:0,reserved:3,incoming:40,reorder:20,supplier:"Step Ahead",warehouse:"Delhi Warehouse",updated:"May 17, 2025 04:36 PM",status:"Out of Stock",archived:false},
  {id:"P007",product:"Scented Candle",variant:"Lavender",sku:"SKU-AMH-HM-022",category:"Home > Fragrance",available:36,reserved:4,incoming:12,reorder:20,supplier:"Aroma House",warehouse:"Chennai Warehouse",updated:"May 16, 2025 11:32 AM",status:"In Stock",archived:false},
  {id:"P008",product:"Denim Jacket",variant:"Size: L",sku:"SKU-AMH-AP-045",category:"Men > Jackets",available:12,reserved:1,incoming:15,reorder:18,supplier:"Denim Co.",warehouse:"Main Warehouse",updated:"May 16, 2025 10:00 AM",status:"Low Stock",archived:false}
];

const tabs = ["All Products","In Stock","Low Stock","Out of Stock","Incoming","Archived"];
const cats = ["All Categories","Men > Shirts","Bags > Tote","Home > Decor","Electronics > Audio","Beauty > Skincare","Footwear > Men","Home > Fragrance","Men > Jackets"];
const warehouses = ["All Warehouses","Main Warehouse","Mumbai Warehouse","Delhi Warehouse","Chennai Warehouse"];
const suppliers = ["All Suppliers","Raxotex Textiles","LPI Supplies","Ceramic World","TechHub","Glow Labs","Step Ahead","Aroma House","Denim Co."];

const Status = ({value}) => <span className={`status ${value.toLowerCase().replaceAll(" ","-")}`}>{value}</span>;

function Drawer({item,onClose,onUpdate,toast,onAdjust,onPO}){
  const [editing,setEditing]=useState(false);
  const [reorder,setReorder]=useState(item.reorder);
  const wh=[["Main Warehouse",78],["Mumbai Warehouse",30],["Delhi Warehouse",20],["Chennai Warehouse",0]];

  return <motion.div className="overlay" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={onClose}>
    <motion.aside className="drawer" initial={{x:"100%"}} animate={{x:0}} exit={{x:"100%"}} transition={{duration:.25}} onClick={e=>e.stopPropagation()}>
      <div className="dhead">
        <div className="dtitle">
          <div className="dthumb">01</div>
          <div><h2>{item.product}</h2><small>{item.sku}</small><Status value={item.status}/></div>
        </div>
        <button className="menu-toggle-btn" onClick={onClose}><FiX/></button>
      </div>

      <div className="section">
        <h3>Stock Summary</h3>
        <div className="infogrid">
          <div className="info"><span>Available</span><strong>{item.available}</strong></div>
          <div className="info"><span>Reserved</span><strong>{item.reserved}</strong></div>
          <div className="info"><span>Incoming</span><strong>{item.incoming}</strong></div>
          <div className="info"><span>On Hand</span><strong>{item.available+item.reserved+item.incoming}</strong></div>
        </div>
      </div>

      <div className="section">
        <h3>Warehouse Breakdown</h3>
        <div className="warehouse">
          {wh.map(([n,v])=><div className="wrow" key={n}>
            <strong>{n}</strong><span>{v}</span>
            <div className="bar"><i style={{width:`${Math.min(100,v)}%`}}/></div>
          </div>)}
        </div>
      </div>

      <div className="section">
        <h3>Recent Stock Movements</h3>
        <div className="movement">
          {[["Stock received","+40","May 19, 2025 09:26 AM",true],["Order #AMH12560","-2","May 19, 2025 10:24 AM",false],["Manual adjustment","+10","May 17, 2025 04:40 PM",true],["Order #AMH12890","-1","May 17, 2025 09:45 AM",false]].map(([n,v,d,u])=><div className="mrow" key={n}>
            <span className={`micon ${u?"up":"down"}`}>{u?<FiTrendingUp/>:<FiTrendingDown/>}</span>
            <div><strong>{n}</strong><small>{d}</small></div>
            <b>{v}</b>
          </div>)}
        </div>
      </div>

      <div className="section">
        <h3>Reorder Settings <button className="btn secondary" style={{float:"right",height:30}} onClick={()=>setEditing(v=>!v)}><FiEdit3/> {editing?"Done":"Edit"}</button></h3>
        <div className="kv">
          <span>Reorder Level</span>{editing?<input type="number" value={reorder} onChange={e=>setReorder(Number(e.target.value))}/>:<strong>{reorder}</strong>}
          <span>Reorder Quantity</span><strong>60</strong>
          <span>Preferred Warehouse</span><strong>{item.warehouse}</strong>
        </div>
        {editing&&<button className="btn primary" style={{marginTop:10}} onClick={()=>{onUpdate(item.id,{reorder});setEditing(false);toast("Reorder settings saved.")}}>Save Reorder Settings</button>}
      </div>

      <div className="section">
        <h3>Supplier Information</h3>
        <div className="kv">
          <span>Supplier</span><strong>{item.supplier}</strong>
          <span>Email</span><strong>support@{item.supplier.toLowerCase().replaceAll(" ","")}.com</strong>
          <span>Phone</span><strong>+91 80 1234 5678</strong>
        </div>
      </div>

      <div className="dactions">
        <button className="btn primary" onClick={()=>onAdjust(item)}><FiRefreshCw/> Adjust Stock</button>
        <button className="btn secondary" onClick={()=>onPO(item)}><FiTruck/> Create PO</button>
        <button className="btn danger" onClick={()=>{onUpdate(item.id,{archived:true,status:"Archived"});toast("Product archived.");onClose()}}><FiArchive/> Archive</button>
      </div>
    </motion.aside>
  </motion.div>
}

function AdjustModal({item,onClose,onSave}){
  const [qty,setQty]=useState(0);
  const [reason,setReason]=useState("New Stock");
  const [notes,setNotes]=useState("");

  return <motion.div className="modalwrap" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={onClose}>
    <motion.form className="modal inventory-modal-overflow" initial={{y:18,scale:.98}} animate={{y:0,scale:1}} exit={{y:18,scale:.98}} onClick={e=>e.stopPropagation()} onSubmit={e=>{e.preventDefault();onSave({qty:Number(qty),reason,notes})}}>
      <div className="mhead"><h2>Adjust Stock · {item.product}</h2><button type="button" className="menu-toggle-btn" onClick={onClose}><FiX/></button></div>
      <div className="formgrid">
        <div className="f"><label>Current Available</label><input value={item.available} readOnly/></div>
        <div className="f"><label>Adjustment Quantity</label><input type="number" value={qty} onChange={e=>setQty(e.target.value)} placeholder="Use negative value to reduce"/></div>
        <div className="f">
          <label>Reason</label>
          <MasterDropdown
            options={["New Stock","Damaged","Returned","Manual Correction","Order Adjustment"]}
            value={reason}
            onChange={setReason}
            className="modal-field-dropdown"
          />
        </div>
        <div className="f full"><label>Notes</label><textarea value={notes} onChange={e=>setNotes(e.target.value)} placeholder="Optional internal notes"/></div>
      </div>
      <div className="mactions">
        <button type="button" className="btn secondary" onClick={onClose}>Cancel</button>
        <button className="btn primary">Save Adjustment</button>
      </div>
    </motion.form>
  </motion.div>
}

function ProductModal({onClose,onCreate}){
  const [f,setF]=useState({product:"",sku:"",variant:"",category:"Men > Shirts",available:0,reserved:0,incoming:0,reorder:10,supplier:"",warehouse:"Main Warehouse"});
  const change=e=>setF({...f,[e.target.name]:e.target.value});

  return <motion.div className="modalwrap" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={onClose}>
    <motion.form className="modal inventory-modal-overflow" initial={{y:18,scale:.98}} animate={{y:0,scale:1}} exit={{y:18,scale:.98}} onClick={e=>e.stopPropagation()} onSubmit={e=>{e.preventDefault();if(!f.product||!f.sku)return;onCreate({...f,id:`P${Date.now()}`,available:Number(f.available),reserved:Number(f.reserved),incoming:Number(f.incoming),reorder:Number(f.reorder),status:Number(f.available)<=0?"Out of Stock":Number(f.available)<=Number(f.reorder)?"Low Stock":"In Stock",updated:new Date().toLocaleString("en-IN"),archived:false})}}>
      <div className="mhead"><h2>Add Product</h2><button type="button" className="menu-toggle-btn" onClick={onClose}><FiX/></button></div>
      <div className="formgrid">
        {[["Product Name","product"],["SKU","sku"],["Variant","variant"],["Supplier","supplier"]].map(([l,n])=><div className="f" key={n}><label>{l}</label><input name={n} value={f[n]} onChange={change}/></div>)}
        <div className="f">
          <label>Category</label>
          <MasterDropdown
            options={cats.slice(1)}
            value={f.category}
            onChange={(val) => setF(prev => ({ ...prev, category: val }))}
            className="modal-field-dropdown"
          />
        </div>
        <div className="f">
          <label>Warehouse</label>
          <MasterDropdown
            options={warehouses.slice(1)}
            value={f.warehouse}
            onChange={(val) => setF(prev => ({ ...prev, warehouse: val }))}
            className="modal-field-dropdown"
          />
        </div>
        {[["Available","available"],["Reserved","reserved"],["Incoming","incoming"],["Reorder Level","reorder"]].map(([l,n])=><div className="f" key={n}><label>{l}</label><input type="number" name={n} value={f[n]} onChange={change}/></div>)}
      </div>
      <div className="mactions">
        <button type="button" className="btn secondary" onClick={onClose}>Cancel</button>
        <button className="btn primary"><FiPlus/> Add Product</button>
      </div>
    </motion.form>
  </motion.div>
}

function POModal({item,onClose,onCreate}){
  const [qty,setQty]=useState(Math.max(1,item.reorder*2));
  const [eta,setEta]=useState("");

  return <motion.div className="modalwrap" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={onClose}>
    <motion.form className="modal" initial={{y:18,scale:.98}} animate={{y:0,scale:1}} exit={{y:18,scale:.98}} onClick={e=>e.stopPropagation()} onSubmit={e=>{e.preventDefault();onCreate({qty:Number(qty),eta})}}>
      <div className="mhead"><h2>Create Purchase Order</h2><button type="button" className="menu-toggle-btn" onClick={onClose}><FiX/></button></div>
      <div className="formgrid">
        <div className="f"><label>Product</label><input value={item.product} readOnly/></div>
        <div className="f"><label>Supplier</label><input value={item.supplier} readOnly/></div>
        <div className="f"><label>Quantity</label><input type="number" value={qty} onChange={e=>setQty(e.target.value)}/></div>
        <div className="f">
          <label>Expected Arrival</label>
          <MasterDatePicker
            singleDate
            value={eta}
            onChange={setEta}
            placeholder="Select arrival date"
          />
        </div>
      </div>
      <div className="mactions">
        <button type="button" className="btn secondary" onClick={onClose}>Cancel</button>
        <button className="btn primary"><FiTruck/> Create PO</button>
      </div>
    </motion.form>
  </motion.div>
}

function LowStockModal({ items, onClose, onAdjustStock }) {
  return (
    <motion.div className="overlay" style={{ display: "grid", placeItems: "center", zIndex: 110 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div className="modal" style={{ width: "min(680px, 100%)", background: "#fff", borderRadius: 12, padding: 20, boxShadow: "0 18px 55px rgba(25,27,35,.18)" }} initial={{ y: 20, scale: 0.98 }} animate={{ y: 0, scale: 1 }} exit={{ y: 20, scale: 0.98 }} onClick={e => e.stopPropagation()}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: 14, borderBottom: "1px solid #ededf8" }}>
          <div>
            <h2 style={{ margin: 0, fontSize: 19, fontWeight: 800 }}>Low Stock & Inventory Alerts</h2>
            <div style={{ fontSize: 11, color: "#667085", marginTop: 2 }}>Items requiring immediate stock replenishment</div>
          </div>
          <button className="modal-close" type="button" onClick={onClose} title="Close" aria-label="Close">
            <FiX size={16} />
          </button>
        </div>
        <div style={{ marginTop: 16, display: "grid", gap: 10, maxHeight: "60vh", overflowY: "auto", paddingRight: 4 }}>
          {items.map(item => (
            <div key={item.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 14px", border: "1px solid #ededf8", borderRadius: 10, background: item.available <= 5 ? "#fff5f5" : "#fffdf8" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 36, height: 36, borderRadius: 8, background: "#f3f3fe", border: "1px solid #c2c6d5", display: "grid", placeItems: "center" }}>
                  <FiPackage size={18} color="#0056c3" />
                </div>
                <div>
                  <strong style={{ fontSize: 13, color: "#10172f", display: "block" }}>{item.product}</strong>
                  <div style={{ fontSize: 11, color: "#667085", marginTop: 2 }}>SKU: {item.sku} · Reorder Threshold: {item.reorder} units</div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ textAlign: "right" }}>
                  <span style={{ fontSize: 13, fontWeight: 800, color: item.available <= 5 ? "#b12626" : "#d66c00" }}>
                    {item.available} left
                  </span>
                  <div style={{ fontSize: 10, color: item.available <= 5 ? "#b12626" : "#d66c00", fontWeight: 700, marginTop: 1 }}>
                    {item.available <= 5 ? "Critical Low" : "Low Stock"}
                  </div>
                </div>
                <button className="btn secondary" style={{ height: 32, fontSize: 11, padding: "0 10px", display: "inline-flex", alignItems: "center", gap: 5 }} onClick={() => { onClose(); onAdjustStock(item); }}>
                  <FiEdit3 /> Adjust Stock
                </button>
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 20, paddingTop: 14, borderTop: "1px solid #ededf8" }}>
          <button className="btn secondary" onClick={onClose}>Close</button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function InventoryManagement(){
  const location = useLocation();
  const [desktopSidebarOpen, setDesktopSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [data,setData]=useState(initial);
  const [tab,setTab]=useState("All Products");
  const [search,setSearch]=useState("");
  const [cat,setCat]=useState("All Categories");
  const [wh,setWh]=useState("All Warehouses");
  const [supplier,setSupplier]=useState("All Suppliers");
  const [status,setStatus]=useState("All Stock Status");

  useEffect(() => {
    if (location.state?.status) {
      setStatus(location.state.status);
    }
    if (location.state?.tab) {
      setTab(location.state.tab);
    }
  }, [location.state]);
  const [selected,setSelected]=useState([]);
  const [drawer,setDrawer]=useState(null);
  const [adjust,setAdjust]=useState(null);
  const [add,setAdd]=useState(false);
  const [po,setPO]=useState(null);
  const [quick,setQuick]=useState(false);
  const [lowStockModalOpen,setLowStockModalOpen]=useState(false);
  const [toast,setToast]=useState("");

  const show=m=>{setToast(m);setTimeout(()=>setToast(""),2400)};
  const filtered=useMemo(()=>data.filter(x=>{
    const q=search.trim().toLowerCase();
    const tabok=tab==="All Products"||(tab==="Incoming"?x.incoming>0:tab==="Archived"?x.archived:x.status===tab);
    return tabok&&(!q||[x.product,x.sku,x.category,x.supplier].some(v=>String(v).toLowerCase().includes(q)))&&(cat==="All Categories"||x.category===cat)&&(wh==="All Warehouses"||x.warehouse===wh)&&(supplier==="All Suppliers"||x.supplier===supplier)&&(status==="All Stock Status"||x.status===status);
  }),[data,tab,search,cat,wh,supplier,status]);

  const counts={"All Products":data.filter(x=>!x.archived).length,"In Stock":data.filter(x=>x.status==="In Stock").length,"Low Stock":data.filter(x=>x.status==="Low Stock").length,"Out of Stock":data.filter(x=>x.status==="Out of Stock").length,Incoming:data.filter(x=>x.incoming>0).length,Archived:data.filter(x=>x.archived).length};
  const kpis=[["Total SKUs","1,248","+8.2%","vs last 7 days","blue",FiUsers],["In Stock","986","+12.5%","vs last 7 days","green",FiCheckCircle],["Low Stock","128","-4.6%","vs last 7 days","orange",FiAlertTriangle],["Out of Stock","34","+3.1%","vs last 7 days","red",FiBox],["Incoming Stock","152","+15.7%","vs last 7 days","blue",FiTruck],["Inventory Value","₹28,45,760","+9.3%","vs last 7 days","blue",FiPackage]];

  const update=(id,patch)=>{setData(d=>d.map(x=>x.id===id?{...x,...patch}:x));setDrawer(d=>d?.id===id?{...d,...patch}:d)};
  const normalize=(x)=>{const s=x.archived?"Archived":x.available<=0?"Out of Stock":x.available<=x.reorder?"Low Stock":"In Stock";return {...x,status:s}};
  const adjustSave=({qty,reason})=>{setData(d=>d.map(x=>x.id===adjust.id?normalize({...x,available:Math.max(0,x.available+qty),updated:new Date().toLocaleString("en-IN")}):x));setDrawer(d=>d?.id===adjust.id?normalize({...d,available:Math.max(0,d.available+qty)}):d);setAdjust(null);show(`Stock adjusted (${reason}).`)};

  const handleToggleMenu = () => {
    if (window.innerWidth < 1050) {
      setMobileMenuOpen(prev => !prev);
    } else {
      setDesktopSidebarOpen(prev => !prev);
    }
  };

  const exportCsv=()=>{
    const rows=[["Product","SKU","Category","Available","Reserved","Incoming","Reorder Level","Supplier","Status"],...filtered.map(x=>[x.product,x.sku,x.category,x.available,x.reserved,x.incoming,x.reorder,x.supplier,x.status])];
    const csv=rows.map(r=>r.map(v=>`"${String(v).replaceAll('"','""')}"`).join(",")).join("\n");
    const blob=new Blob([csv],{type:"text/csv"});
    const url=URL.createObjectURL(blob);
    const a=document.createElement("a");
    a.href=url;
    a.download="inventory.csv";
    a.click();
    URL.revokeObjectURL(url);
    show("Inventory exported successfully.");
  };

  const bulkArchive=()=>{
    setData(d=>d.map(x=>selected.includes(x.id)?{...x,archived:true,status:"Archived"}:x));
    show(`${selected.length} product(s) archived.`);
    setSelected([]);
  };

  return (
    <div className="inventory-scope">
      <style>{inventoryCss}</style>
      <div className="inventory-shell">
        <div className={`desktop-sidebar-wrapper ${!desktopSidebarOpen ? "is-closed" : ""}`}>
          <AdminSidebar activePage="Inventory" onClose={() => setDesktopSidebarOpen(false)} />
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <div>
              <motion.button 
                className="overlay" 
                initial={{opacity:0}} 
                animate={{opacity:1}} 
                exit={{opacity:0}} 
                onClick={() => setMobileMenuOpen(false)}
              />
              <AdminSidebar activePage="Inventory" mobile onClose={() => setMobileMenuOpen(false)} />
            </div>
          )}
        </AnimatePresence>

        <main className="inventory-main">
          <AdminTopbar onToggleMenu={handleToggleMenu} desktopSidebarOpen={desktopSidebarOpen} />

          <div className="inventory-content">
            <div className="pagehead">
              <div>
                <h1>Inventory Management</h1>
                <p>Monitor stock levels, manage inventory across warehouses, and prevent stockouts.</p>
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                <button className="secondarybtn" onClick={exportCsv}><FiDownload/> Export</button>
                <button className="secondarybtn" onClick={() => selected.length === 1 ? setAdjust(data.find(x => x.id === selected[0])) : show("Select exactly one product to adjust stock.")}><FiRefreshCw/> Adjust Stock</button>
              </div>
            </div>

            <section className="kpi-grid">
              {kpis.map(x=><KpiCard item={x} key={x[0]}/>)}
            </section>

            <div className={`inv-split ${drawer ? "has-selected" : ""}`}>
              <section className="panel">
                <div className="tabs">
                  {tabs.map(x=><button className={`tab ${tab===x?"active":""}`} onClick={()=>setTab(x)} key={x}>{x}<b>{x==="All Products"?"1,248":counts[x]}</b></button>)}
                </div>

                <div className="filters">
                  <label className="field search-field"><FiSearch/><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search by product name, SKU..."/></label>
                  <MasterDropdown options={cats} value={cat} onChange={setCat} />
                  <MasterDropdown options={warehouses} value={wh} onChange={setWh} />
                  <MasterDropdown options={suppliers} value={supplier} onChange={setSupplier} />
                  <MasterDropdown options={["All Stock Status", "In Stock", "Low Stock", "Out of Stock", "Archived"]} value={status} onChange={setStatus} />
                  <button className="filterbtn" onClick={()=>show("Additional filters ready.")}><FiFilter/> Filters</button>
                </div>

                {/* Dedicated Selection Bar placed below filters row */}
                <div className="selection-bar selbar">
                  <AnimatedCheckbox checked={filtered.length>0&&selected.length===filtered.length} onChange={e=>setSelected(e.target.checked?filtered.map(x=>x.id):[])}/>
                  <strong>{selected.length} selected</strong>
                  <span>Select all {filtered.length} on this page</span>
                  <div className="selection-spacer spacer"/>
                  <button className="clear" onClick={()=>selected.length>0?setSelected([]):show("No products are currently selected.")}>Clear selection</button>
                  <MasterDropdown
                    staticLabel="Bulk Actions"
                    rightAlign
                    options={[
                      {
                        label: "Adjust stock",
                        action: () => {
                          if (selected.length === 0) show("Please select products first.");
                          else if (selected.length === 1) setAdjust(data.find((x) => x.id === selected[0]));
                          else show("Select one product for stock adjustment.");
                        },
                      },
                      {
                        label: "Archive selected",
                        action: () => {
                          if (selected.length === 0) show("Please select products first.");
                          else bulkArchive();
                        },
                      },
                      {
                        label: "Export selected view",
                        action: () => {
                          if (selected.length === 0) show("Please select products first.");
                          else exportCsv();
                        },
                      },
                      {
                        label: "Clear selection",
                        action: () => {
                          if (selected.length === 0) show("No products are currently selected.");
                          else setSelected([]);
                        },
                      },
                    ]}
                  />
                </div>

                <div style={{ marginTop: 14 }}>
                  <InventoryTable
                    inventory={filtered}
                    selected={selected}
                    activeItemId={drawer?.id}
                    onToggle={(id) => setSelected(s => s.includes(id) ? s.filter(v => v !== id) : [...s, id])}
                    onViewDetails={(item) => setDrawer(curr => curr?.id === item.id ? null : item)}
                    onAdjustStock={setAdjust}
                    totalCount={1248}
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
                      title="Inventory Details"
                      onClose={() => setDrawer(null)}
                      onEdit={() => { setAdjust(drawer); setDrawer(null); }}
                      onToast={show}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <section className="bottom">
              {/* Card 1: Inventory Distribution */}
              <article className="bottom-card">
                <div className="bottom-card-head">
                  <h3>Inventory Distribution</h3>
                  <button className="link-btn" onClick={()=>show("Inventory Distribution report opened.")}>View all</button>
                </div>
                <MasterPieChart
                  centerTitle="TOTAL SKUS"
                  centerValue="1,248"
                  data={[
                    ["In Stock", "986 (79%)", "#1456c7"],
                    ["Low Stock", "128 (10%)", "#ff7a1a"],
                    ["Out of Stock", "34 (3%)", "#fb4a4a"],
                    ["Incoming", "152 (12%)", "#7aa994"]
                  ]}
                  conicGradient="conic-gradient(#1456c7 0 79%, #ff7a1a 79% 89%, #fb4a4a 89% 92%, #7aa994 92% 100%)"
                  shape="circle"
                />
              </article>

              {/* Card 2: Low Stock Items */}
              <section className="bottom-card">
                <div className="bottom-card-head">
                  <h3>Low Stock Items</h3>
                  <button className="link-btn" onClick={()=>setLowStockModalOpen(true)}>Restock</button>
                </div>
                <div className="alert-list">
                  {data.filter(x=>x.status==="Low Stock").map(x=>(
                    <div className="alert-item" key={x.id} style={{cursor:"pointer"}} onClick={()=>setDrawer(x)}>
                      <div className="mini-thumb"><FiPackage size={16}/></div>
                      <div className="item-info">
                        <strong>{x.product}</strong>
                        <small>SKU: {x.sku}</small>
                      </div>
                      <div className="alert-right">
                        <b>{x.available} left</b>
                        <span>Reorder level: {x.reorder}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Card 3: Restock Recommendations */}
              <section className="bottom-card">
                <div className="bottom-card-head">
                  <h3>Restock Recommendations</h3>
                  <button className="link-btn" onClick={()=>show("Restock recommendations report opened.")}>View all</button>
                </div>
                <div className="alert-list">
                  {data.filter(x=>x.available<=x.reorder).map(x=>(
                    <div className="alert-item" key={x.id} style={{cursor:"pointer"}} onClick={()=>setPO(x)}>
                      <div className="mini-thumb"><FiPackage size={16}/></div>
                      <div className="item-info">
                        <strong>{x.product}</strong>
                        <small>SKU: {x.sku}</small>
                      </div>
                      <div className="update-right">
                        <span>Reorder {Math.max(30,x.reorder*2)} units</span>
                        <time>PO Suggested</time>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </section>
          </div>
        </main>
      </div>

      <AnimatePresence>{adjust && <AdjustModal item={adjust} onClose={()=>setAdjust(null)} onSave={adjustSave}/>}</AnimatePresence>
      <AnimatePresence>{add && <ProductModal onClose={()=>setAdd(false)} onCreate={x=>{setData(d=>[x,...d]);setAdd(false);show("Product added successfully.")}}/>}</AnimatePresence>
      <AnimatePresence>{po && <POModal item={po} onClose={()=>setPO(null)} onCreate={({qty})=>{update(po.id,{incoming:po.incoming+qty});setPO(null);show("Purchase order created successfully.")}}/>}</AnimatePresence>
      <AnimatePresence>{lowStockModalOpen && <LowStockModal items={data.filter(x=>x.status==="Low Stock")} onClose={()=>setLowStockModalOpen(false)} onAdjustStock={setAdjust}/>}</AnimatePresence>
      <AnimatePresence>{toast && <motion.div className="toast" initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} exit={{opacity:0,y:12}}><FiCheckCircle/>{toast}</motion.div>}</AnimatePresence>
    </div>
  );
}
