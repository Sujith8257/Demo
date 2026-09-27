import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import AdminSidebar from "../../../components/Admin/AdminSidebar";
import OrdersTable from "../../../components/Admin/OrdersTable";
import AdminTopbar from "../../../components/Admin/AdminTopbar";
import KpiCard from "../../../components/Admin/KpiCard";
import DashboardListCard from "../../../components/Admin/DashboardListCard";
import LowStockCard from "../../../components/Admin/LowStockCard";
import ActiveBannersCard from "../../../components/Admin/ActiveBannersCard";
import AnimatedCheckbox from "../../../components/Admin/AnimatedCheckbox";
import MasterDropdown from "../../../components/Admin/MasterDropdown";
import MasterDatePicker from "../../../components/Admin/MasterDatePicker";
import MasterPieChart from "../../../components/Admin/MasterPieChart";
import {
  FiAlertTriangle, FiBarChart2, FiBell, FiBox, FiCheck, FiChevronDown, FiChevronLeft, FiChevronRight,
  FiClock, FiCreditCard, FiEye, FiExternalLink, FiGift, FiHeadphones, FiHome,
  FiImage, FiMenu, FiMoreVertical, FiPackage, FiPlus, FiRefreshCw, FiRotateCcw, FiSearch,
  FiSettings, FiShoppingBag, FiStar, FiTag, FiTrendingDown, FiTrendingUp,
  FiUser, FiUsers, FiX
} from "react-icons/fi";

const adminCss = `
.admin-scope {
  --admin-surface: #faf8ff;
  --admin-surface-low: #f3f3fe;
  --admin-surface-mid: #ededf8;
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

.admin-shell { display: flex; min-height: 100vh; background: var(--admin-surface); color: var(--admin-text); }
.dashboard-main { flex: 1; min-width: 0; }

.js-reveal { opacity: 1; }

.desktop-sidebar-wrapper {
  width: 256px;
  flex-shrink: 0;
  transition: all .25s ease;
}
.desktop-sidebar-wrapper.is-closed {
  display: none;
}

.dashboard-content { padding: 24px 28px 36px; }
.welcome-row { display: flex; justify-content: space-between; align-items: flex-start; gap: 20px; margin-bottom: 20px; }
.welcome-row h1 { margin: 0; font-size: 28px; line-height: 1.2; letter-spacing: -.02em; font-weight: 800; }
.welcome-row p { margin: 6px 0 0; font-size: 13px; color: var(--admin-muted); font-weight: 500; }
.date-control, .ghost-control { height: 38px; border: 1px solid var(--admin-outline); background: #fff; border-radius: 8px; padding: 0 13px; display: flex; align-items: center; gap: 8px; font-size: 12px; font-weight: 700; color: var(--admin-text); box-shadow: var(--admin-shadow); cursor: pointer; transition: all .18s ease; }
.date-control:hover, .ghost-control:hover { background: var(--admin-surface-low); border-color: var(--admin-primary-2); }

.analytics-grid { display: grid; grid-template-columns: minmax(0,1.45fr) minmax(250px,1.08fr) minmax(260px,1fr); gap: 12px; margin-bottom: 12px; }
.operations-grid { display: grid; grid-template-columns: 1.35fr 1.05fr 1.05fr; gap: 12px; margin-bottom: 12px; }
.panel { min-width: 0; background: #fff; border: 1px solid rgba(194,198,213,.62); border-radius: 12px; padding: 16px; box-shadow: var(--admin-shadow); overflow: hidden; }
.panel-heading { display: flex; justify-content: space-between; align-items: center; gap: 12px; }
.panel-heading h3 { margin: 0; font-size: 17.5px; font-weight: 800; letter-spacing: -.02em; color: var(--admin-text); }

.slider-controls { display: flex; align-items: center; gap: 5px; }
.slider-arrow-btn { width: 26px; height: 26px; border: 1px solid var(--admin-outline); border-radius: 6px; background: #fff; display: grid; place-items: center; color: var(--admin-text); font-size: 14px; cursor: pointer; transition: all .18s; }
.slider-arrow-btn:hover { background: var(--admin-surface-low); color: var(--admin-primary-2); border-color: var(--admin-primary-2); }

.info-dot { width: 16px; height: 16px; border: 1px solid #737785; border-radius: 50%; display: inline-grid; place-items: center; font-size: 9px; color: #737785; margin-left: 4px; }
.big-value { display: flex; align-items: baseline; gap: 6px; margin-top: 8px; font-size: 24px; font-weight: 500; color: var(--admin-muted); letter-spacing: -.02em; }
.big-value span { display: flex; align-items: center; gap: 4px; font-size: 11px; color: #11a34a; font-weight: 700; }
.big-value small { font-size: 10px; color: var(--admin-muted); font-weight: 500; }

.chart-legend { display: flex; justify-content: flex-end; gap: 16px; margin: -6px 4px 0; font-size: 11px; color: var(--admin-muted); font-weight: 600; }
.chart-legend span { display: flex; align-items: center; gap: 6px; }
.chart-legend i { width: 16px; height: 4px; border-radius: 999px; }
.chart-legend .blue { background: #1366e8; }
.chart-legend .orange { background: var(--admin-orange); }
.chart svg { width: 100%; height: 200px; }
.grid-line { stroke: #eceef5; stroke-width: 1; }
.revenue-area { fill: rgba(9,89,198,.09); }
.revenue-line { fill: none; stroke: #1366e8; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }
.orders-line { fill: none; stroke: var(--admin-orange); stroke-width: 2.2; stroke-dasharray: 6 5; stroke-linecap: round; }
.x-axis { display: grid; grid-template-columns: repeat(8,1fr); margin-top: -4px; }
.x-axis span { text-align: center; font-size: 9.5px; font-weight: 600; color: #10172f; }

.sales-category-panel { display: flex; flex-direction: column; }
.donut-layout { display: flex; align-items: center; gap: 16px; margin-top: 14px; flex: 1; }
.donut-container { display: flex; justify-content: center; align-items: center; }
.donut { width: 120px; height: 120px; border-radius: 50%; background: conic-gradient(#0056c3 0% 42%, #fd661d 42% 62%, #7d4ff2 62% 78%, #16a34a 78% 91%, #aeb7c7 91% 100%); display: grid; place-items: center; position: relative; flex-shrink: 0; }
.donut:before { content: ""; position: absolute; inset: 18px; border-radius: 50%; background: #fff; }
.donut > div { position: relative; z-index: 2; text-align: center; }
.donut strong { display: block; font-size: 9px; font-weight: 900; color: #10172f; text-transform: uppercase; letter-spacing: .02em; }
.donut span { display: block; font-size: 11px; font-weight: 700; color: #10172f; margin-top: 2px; }

.legend-list { flex: 1; min-width: 0; display: flex; flex-direction: column; justify-content: space-between; gap: 10px; }
.legend-row { display: grid; grid-template-columns: 9px 1fr auto; gap: 4px 10px; align-items: center; }
.legend-row i { width: 9px; height: 9px; border-radius: 50%; flex-shrink: 0; }
.legend-row span { font-size: 12px; color: #10172f; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.legend-row strong { font-size: 12px; font-weight: 700; color: #10172f; text-align: right; white-space: nowrap; }
.legend-row small { grid-column: 2 / 4; margin-top: -1px; color: #737785; font-size: 11px; font-weight: 500; white-space: nowrap; }

.panel-link { border: 0; background: transparent; color: var(--admin-primary-2); font-size: 11.5px; font-weight: 800; display: flex; align-items: center; gap: 6px; cursor: pointer; transition: opacity .18s; }
.panel-link:hover { opacity: .8; }
.panel-link.center { margin: 10px auto 0; }

.summary-label { display: block; margin-top: 8px; font-size: 13.5px; color: #10172f; font-weight: 600; }
.payment-total { display: block; font-size: 24px; font-weight: 400; color: #10172f; margin-top: 1px; }
.inline-trend { display: flex; align-items: center; gap: 4px; margin-top: 3px; font-size: 10.5px; font-weight: 700; }
.inline-trend em { font-style: normal; color: var(--admin-muted); font-weight: 500; }
.payment-methods { display: grid; gap: 10px; margin-top: 12px; }
.payment-method > div:first-child { display: grid; grid-template-columns: 1fr auto auto; gap: 8px; font-size: 12px; }
.payment-method span { font-weight: 500; color: var(--admin-text); }
.payment-method strong { font-weight: 500; color: var(--admin-muted); }
.payment-method b { font-weight: 500; color: var(--admin-text); }
.progress { height: 4px; border-radius: 999px; background: var(--admin-surface-mid); overflow: hidden; margin-top: 3px; }
.progress span { display: block; height: 100%; }
.progress .blue { background: #1d64d8; }
.progress .purple { background: #8654eb; }
.progress .teal { background: #00a896; }
.progress .orange { background: #fd661d; }
.progress .green { background: #38b869; }

.banners-panel { display: flex; flex-direction: column; height: 100%; box-sizing: border-box; }
.banner-slider-container { display: flex; gap: 14px; overflow-x: auto; scroll-behavior: smooth; margin: auto 0; padding: 10px 2px; scroll-snap-type: x mandatory; scrollbar-width: none; }
.banner-slider-container::-webkit-scrollbar { display: none; }
.banner-box-card { min-width: 220px; width: 220px; flex-shrink: 0; scroll-snap-align: start; border: 1px solid var(--admin-outline); border-radius: 12px; background: #ffffff; box-shadow: 0 3px 10px rgba(0,0,0,.04); overflow: hidden; display: flex; flex-direction: column; transition: all .2s ease; }
.banner-box-card:hover { border-color: var(--admin-primary-2); box-shadow: 0 6px 16px rgba(0,0,0,.08); transform: translateY(-2px); }
.banner-img-box { width: 100%; height: 105px; position: relative; overflow: hidden; }
.banner-img-box img { width: 100%; height: 100%; object-fit: cover; }
.banner-overlay { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(0,0,0,0.1), rgba(0,40,100,0.6)); }
.banner-tag { position: absolute; left: 10px; bottom: 30px; color: #ffffff; font-size: 10px; font-weight: 800; letter-spacing: .02em; text-shadow: 0 1px 3px rgba(0,0,0,0.7); }
.banner-shop-btn { position: absolute; left: 10px; bottom: 8px; height: 20px; border: 0; border-radius: 5px; padding: 0 8px; background: #ffffff; color: var(--admin-primary); font-size: 9px; font-weight: 800; cursor: pointer; }
.banner-details-container { padding: 10px 12px; display: flex; flex-direction: column; gap: 6px; background: #fafbfe; flex: 1; border-top: 1px solid var(--admin-surface-mid); }
.banner-title { font-size: 12.5px; font-weight: 800; color: var(--admin-text); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; margin: 0; }
.banner-meta-table { width: 100%; border-collapse: collapse; margin-top: 2px; }
.banner-meta-table td { padding: 3.5px 0; font-size: 11px; border-bottom: 1px dashed var(--admin-surface-mid); vertical-align: middle; }
.banner-meta-table tr:last-child td { border-bottom: 0; }
.banner-meta-table td:first-child { color: var(--admin-muted); font-weight: 500; }
.banner-meta-table td:last-child { text-align: right; font-weight: 700; color: var(--admin-text); }

.low-stock-slider, .transactions-slider { max-height: 250px; overflow-y: auto; scroll-behavior: smooth; margin-top: 10px; scrollbar-width: thin; padding-right: 4px; }
.low-stock-slider::-webkit-scrollbar, .transactions-slider::-webkit-scrollbar { width: 4px; }
.low-stock-slider::-webkit-scrollbar-thumb, .transactions-slider::-webkit-scrollbar-thumb { background: var(--admin-outline); border-radius: 999px; }
.rotate-90 { transform: rotate(90deg); }

.compact-list { display: grid; gap: 2px; }
.compact-row, .transaction-row { width: 100%; min-height: 48px; border: 0; border-bottom: 1px solid var(--admin-surface-mid); background: transparent; display: grid; align-items: center; gap: 10px; padding: 6px 8px; border-radius: 8px; text-align: left; cursor: pointer; transition: background .18s ease; }
.compact-row:hover, .transaction-row:hover { background: var(--admin-surface-low); }
.compact-row { grid-template-columns: auto 1fr auto; }
.product-mini { width: 32px; height: 32px; border-radius: 8px; background: var(--admin-surface-low); display: grid; place-items: center; font-size: 11px; color: var(--admin-primary-2); font-weight: 800; }
.compact-row strong, .transaction-row strong { font-size: 12px; font-weight: 700; color: var(--admin-text); }
.compact-row small, .transaction-row small { display: block; font-size: 10px; color: var(--admin-muted); margin-top: 2px; font-weight: 500; }
.compact-row > b { font-size: 12px; color: var(--admin-red); font-weight: 800; }
.transaction-row { grid-template-columns: auto minmax(0,1fr) auto auto; }
.transaction-icon { width: 32px; height: 32px; border-radius: 50%; display: grid; place-items: center; font-size: 14px; flex-shrink: 0; }
.transaction-icon.success { background: #e0f7e7; color: #18a550; }
.transaction-icon.pending { background: #fff0dd; color: #fd661d; }
.transaction-icon.refunded { background: #e0ebff; color: #2d6bdc; }
.transaction-row > b { font-size: 12px; font-weight: 800; color: var(--admin-text); }

.status-modal-wrap {
  position: fixed; inset: 0; z-index: 120; background: rgba(25,27,35,.55);
  backdrop-filter: blur(4px); display: grid; place-items: center; padding: 20px;
}
.status-modal {
  width: min(520px, 100%); background: #fff; border: 1px solid var(--admin-outline);
  border-radius: 14px; box-shadow: 0 20px 60px rgba(25,27,35,.18); overflow: visible;
}
.modal-field-dropdown { width: 100% !important; display: block !important; position: relative !important; }
.modal-field-dropdown .master-dropdown-trigger { width: 100% !important; height: 42px !important; padding: 0 11px !important; border: 1px solid var(--admin-outline) !important; border-radius: 9px !important; background: #fff !important; justify-content: space-between !important; font-size: 13px !important; font-weight: 600 !important; color: var(--admin-text) !important; }
.modal-field-dropdown .master-dropdown-trigger:hover { border-color: var(--admin-primary-2) !important; }
.modal-field-dropdown .master-dropdown-label { font-size: 13px !important; font-weight: 600 !important; color: var(--admin-text) !important; }
.modal-field-dropdown .master-dropdown-menu { width: 100% !important; max-height: 200px !important; overflow-y: auto !important; z-index: 99999 !important; box-shadow: 0 16px 40px rgba(16, 24, 40, 0.2) !important; }
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

.mobile-backdrop { position: fixed; inset: 0; z-index: 99; border: 0; background: rgba(25,27,35,.55); backdrop-filter: blur(4px); cursor: pointer; }

@media(max-width:1300px){ 
  .analytics-grid{grid-template-columns:1.6fr .9fr}
  .analytics-grid>section:last-child{grid-column:1/3}
  .payment-methods{grid-template-columns:repeat(4,1fr)}
  .operations-grid{grid-template-columns:1.2fr 1fr}
  .operations-grid>section:last-child{grid-column:1/3} 
}
@media(max-width:1050px){ 
  .desktop-sidebar-wrapper{display:none!important;}
  .analytics-grid{grid-template-columns:1fr 1fr}
  .revenue-panel{grid-column:1/3}
  .operations-grid{grid-template-columns:1fr 1fr}
  .banners-panel{grid-column:1/3} 
}
@media(max-width:900px){ 
  .dashboard-content{padding:16px 14px 28px}
  .analytics-grid,.operations-grid{grid-template-columns:1fr}
  .revenue-panel,.analytics-grid>section:last-child,.banners-panel,.operations-grid>section:last-child{grid-column:auto}
  .payment-methods{grid-template-columns:repeat(2,1fr)} 
}
@media(max-width:650px){
  .dashboard-content{padding:14px 10px 24px; max-width:100vw; overflow-x:hidden;}
  .welcome-row{flex-direction:column; gap:10px; align-items:stretch;}
  .welcome-row h1{font-size:20px;}
  .welcome-row p{font-size:12px;}
  .date-control{width:100%; justify-content:space-between; height:36px; padding:0 10px; font-size:11.5px; box-sizing:border-box;}
  .panel{padding:12px; border-radius:10px;}
  .panel-heading h3{font-size:15px;}
  .sales-category-panel { height: auto !important; min-height: 0 !important; }
  .sales-category-panel .donut-layout { flex: none; margin-top: 12px; margin-bottom: 2px; gap: 14px; }
  .donut { width: 106px !important; height: 106px !important; }
  .donut:before { inset: 16px !important; width: auto !important; height: auto !important; }
  .donut strong { font-size: 8.5px !important; }
  .donut span { font-size: 10.5px !important; }
  .legend-list { gap: 8px !important; }
  .legend-row { gap: 4px 8px !important; }
  .legend-row span { font-size: 11.5px !important; }
  .legend-row strong { font-size: 11.5px !important; }
  .legend-row small { font-size: 10.5px !important; }
  .payment-methods{grid-template-columns:1fr;}
  .status-modal-wrap { padding: 12px 10px !important; }
  .status-modal { width: calc(100vw - 20px) !important; max-height: 88vh !important; border-radius: 12px !important; }
  .status-modal-body { padding: 14px 12px !important; }
  .status-modal-actions { flex-direction: column-reverse !important; gap: 8px !important; }
  .status-modal-actions button { width: 100% !important; justify-content: center !important; }
}

@media(max-width:360px){
  .sales-category-panel .donut-layout { gap: 10px !important; }
  .donut { width: 94px !important; height: 94px !important; }
  .donut:before { inset: 14px !important; }
  .donut strong { font-size: 7.5px !important; }
  .donut span { font-size: 9.5px !important; }
}
`;

const kpis = [
  ["Total Revenue","₹12,45,890","+18.2%","vs last 7 days","success",FiTrendingUp],
  ["Orders","1,248","+12.5%","vs last 7 days","action",FiShoppingBag],
  ["Customers","982","+9.4%","vs last 7 days","purple",FiUsers],
  ["Avg. Order Value","₹1,238","+5.7%","vs last 7 days","trust",FiCreditCard],
  ["Pending Orders","24","-14.3%","vs yesterday","warning",FiClock],
  ["Low Stock Items","16","Need attention","","danger",FiBox],
];

const banners = [
  { name: "Summer Collection '26", img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80", date: "Till Aug 31, 2026", placement: "Hero Carousel", ctr: "4.8%", status: "Active", tag: "SUMMER COLLECTION" },
  { name: "Deal of the Week", img: "https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?auto=format&fit=crop&w=800&q=80", date: "Till Aug 25, 2026", placement: "Category Top", ctr: "3.5%", status: "Active", tag: "DEAL OF THE WEEK" },
  { name: "Weekend Sale", img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80", date: "Till Aug 23, 2026", placement: "Homepage Promo", ctr: "5.2%", status: "Active", tag: "UPTO 50% OFF" },
  { name: "New Tech Gadgets", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80", date: "Till Sep 05, 2026", placement: "Sidebar Banner", ctr: "2.9%", status: "Active", tag: "SPECIAL SALE" },
  { name: "Home Decor Mega Deal", img: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80", date: "Till Sep 10, 2026", placement: "Footer Banner", ctr: "3.1%", status: "Active", tag: "MEGA SALE" },
];

const lowStock = [
  ["Linen Blend Shirt","AMH-FS-001",3],
  ["Leather Tote Bag","AMH-BG-002",5],
  ["Ceramic Vase Set","AMH-HM-015",7],
  ["Wireless Earbuds","AMH-EL-010",8],
  ["Vitamin C Serum","AMH-BY-020",9],
  ["Mechanical Keyboard","AMH-EL-034",4],
  ["Smart Watch Band","AMH-WT-008",2],
  ["Ergonomic Mouse Pad","AMH-AC-012",6],
  ["Cotton Canvas Apron","AMH-FS-042",3],
  ["Minimalist Desk Lamp","AMH-HM-088",1],
];

const transactions = [
  ["Order #AMH1250","Aug 19, 2026 · 10:24 AM","+ ₹2,549","Success"],
  ["Order #AMH1249","Aug 19, 2026 · 09:45 AM","+ ₹1,299","Success"],
  ["Order #AMH1248","Aug 18, 2026 · 08:15 PM","+ ₹3,199","Success"],
  ["Order #AMH1247","Aug 18, 2026 · 06:40 PM","+ ₹899","Pending"],
  ["Refund #RFND674","Aug 18, 2026 · 05:30 PM","- ₹1,299","Refunded"],
  ["Order #AMH1246","Aug 18, 2026 · 04:15 PM","+ ₹2,199","Success"],
  ["Order #AMH1245","Aug 18, 2026 · 03:00 PM","+ ₹4,299","Success"],
  ["Order #AMH1244","Aug 18, 2026 · 01:20 PM","+ ₹1,850","Success"],
];

const ordersList = [
  { id: "#AMH1250", date: "19 Aug 2026", customer: "Priya Sharma", email: "priya@email.com", items: "2 items", total: "₹2,549", payment: "Paid", status: "Processing", shipping: "Standard" },
  { id: "#AMH1249", date: "19 Aug 2026", customer: "Arjun Mehta", email: "arjun@email.com", items: "1 item", total: "₹1,299", payment: "Paid", status: "Shipped", shipping: "Express" },
  { id: "#AMH1248", date: "18 Aug 2026", customer: "Sneha Iyer", email: "sneha@email.com", items: "3 items", total: "₹3,199", payment: "Paid", status: "Delivered", shipping: "Standard" },
  { id: "#AMH1247", date: "18 Aug 2026", customer: "Karan Verma", email: "karan@email.com", items: "1 item", total: "₹899", payment: "Pending", status: "Pending", shipping: "COD" },
  { id: "#AMH1246", date: "18 Aug 2026", customer: "Ananya Rao", email: "ananya@email.com", items: "1 item", total: "₹1,199", payment: "Paid", status: "Delivered", shipping: "Standard" },
  { id: "#AMH1245", date: "17 Aug 2026", customer: "Riya Nair", email: "riya@email.com", items: "2 items", total: "₹4,760", payment: "Refunded", status: "Cancelled", shipping: "Standard" },
];

function RevenueChart(){
  const navigate = useNavigate();
  const [timeRange, setTimeRange] = useState("This Week");
  const revenue=[64,82,70,108,93,141,101,72];
  const ordersLine=[58,69,61,92,84,104,112,62];
  const w=720,h=250,p=26,max=160;
  const pts=(arr)=>arr.map((v,i)=>{
    const x=p+(i/(arr.length-1))*(w-p*2);
    const y=h-28-(v/max)*(h-58);
    return `${x},${y}`;
  }).join(" ");
  return (
    <section className="panel revenue-panel js-reveal">
      <div className="panel-heading" style={{ flexDirection: "column", alignItems: "stretch", gap: 6 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
          <h3>Revenue Overview <span className="info-dot">i</span></h3>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <MasterDropdown
              options={[
                { value: "This Week", label: "This Week" },
                { value: "Last Week", label: "Last Week" },
                { value: "This Month", label: "This Month" },
                { value: "Last 30 Days", label: "Last 30 Days" },
                { value: "This Year", label: "This Year" },
              ]}
              value={timeRange}
              onChange={setTimeRange}
              rightAlign
            />
            <button className="panel-link" onClick={() => navigate("/analytics")}>View all</button>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, flexWrap: "wrap", marginTop: 2 }}>
          <div className="big-value" style={{ marginTop: 0 }}>
            ₹12,45,890 <span><FiTrendingUp/>18.2%</span><small>vs previous 7 days</small>
          </div>
          <div className="chart-legend" style={{ margin: 0 }}>
            <span><i className="blue"/> Revenue</span>
            <span><i className="orange"/> Orders</span>
          </div>
        </div>
      </div>
      <div className="chart">
        <svg viewBox={`0 0 ${w} ${h}`}>
          {[45,90,135,180].map(y=><line key={y} x1="26" x2="694" y1={y} y2={y} className="grid-line"/>)}
          <polygon points={`${p},${h-28} ${pts(revenue)} ${w-p},${h-28}`} className="revenue-area"/>
          <polyline points={pts(revenue)} className="revenue-line"/>
          <polyline points={pts(ordersLine)} className="orders-line"/>
        </svg>
        <div className="x-axis">{["Aug 12","Aug 13","Aug 14","Aug 15","Aug 16","Aug 17","Aug 18","Aug 19"].map(x=><span key={x}>{x}</span>)}</div>
      </div>
    </section>
  )
}

function SalesCategory(){
  const navigate = useNavigate();
  const items=[
    { label: "Watches", value: "₹5,24,890", percent: "42%", color: "#0056c3" },
    { label: "Handcrafted", value: "₹2,45,600", percent: "20%", color: "#fd661d" },
    { label: "Jewelry", value: "₹2,01,430", percent: "16%", color: "#7d4ff2" },
    { label: "Home & Living", value: "₹1,56,290", percent: "13%", color: "#16a34a" },
    { label: "Others", value: "₹1,17,680", percent: "9%", color: "#10172f" }
  ];

  return (
    <section className="panel sales-category-panel js-reveal">
      <div className="panel-heading simple">
        <h3>Sales by Category</h3>
        <button className="panel-link" onClick={() => navigate("/analytics")}>View all</button>
      </div>
      <MasterPieChart
        shape="circle"
        centerTitle="TOTAL SALES"
        centerValue="₹12,45,890"
        data={items}
        conicGradient="conic-gradient(#0056c3 0% 42%, #fd661d 42% 62%, #7d4ff2 62% 78%, #16a34a 78% 91%, #10172f 91% 100%)"
      />
    </section>
  );
}

function Payments(){
  const navigate = useNavigate();
  const data=[
    ["Razorpay","₹5,45,320","45%",45,"blue"],
    ["UPI","₹2,85,410","23%",23,"purple"],
    ["COD (Cash on Delivery)","₹1,98,400","16%",16,"teal"],
    ["Cards","₹1,25,600","10%",10,"orange"],
    ["Net Banking","₹78,030","6%",6,"green"]
  ];
  return (
    <section className="panel js-reveal">
      <div className="panel-heading simple"><h3>Payments Summary</h3><button className="panel-link" onClick={() => navigate("/payments")}>View all</button></div>
      <span className="summary-label">Total Collected</span><strong className="payment-total">₹12,32,760</strong>
      <span className="positive inline-trend"><FiTrendingUp/>15.6% <em>vs last 7 days</em></span>
      <div className="payment-methods">
        {data.map(([n,a,p,w,c])=><div className="payment-method" key={n}><div><span>{n}</span><strong>{a}</strong><b>{p}</b></div><div className="progress"><span className={c} style={{width:`${w}%`}}/></div></div>)}
      </div>
    </section>
  )
}

function ActiveBanners(){
  const navigate = useNavigate();
  return (
    <ActiveBannersCard
      actionLabel="View all"
      onAction={() => navigate("/banners")}
    />
  );
}

function LowStock() {
  const navigate = useNavigate();
  return (
    <LowStockCard
      items={lowStock}
      actionLabel="View all"
      onAction={() => navigate("/inventory", { state: { status: "Low Stock", tab: "Low Stock" } })}
    />
  );
}

function Transactions() {
  const navigate = useNavigate();
  const items = transactions.map(([r, d, a, s]) => ({
    id: r,
    icon: s === "Success" ? FiTrendingUp : s === "Pending" ? FiClock : FiRotateCcw,
    iconStyle: s.toLowerCase(),
    title: r,
    subtitle: d,
    value: a,
    status: s,
    statusType: s.toLowerCase(),
  }));

  return (
    <DashboardListCard
      title="Recent Transactions"
      items={items}
      actionLabel="View all"
      onAction={() => navigate("/payments")}
    />
  );
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

function RecentOrders(){
  const navigate = useNavigate();
  const [orders, setOrders] = useState(ordersList);
  const [selected, setSelected] = useState([]);
  const [statusConfig, setStatusConfig] = useState(null);
  const [toast, setToast] = useState(null);

  const toggle = (id) => setSelected(s => s.includes(id) ? s.filter(x => x !== id) : [...s, id]);

  const openStatusModal = (target) => {
    const ids = Array.isArray(target) ? target : [target.id];
    const currentStatus = ids.length === 1 ? orders.find(o => o.id === ids[0])?.status || "" : "";
    setStatusConfig({ids, currentStatus});
  };

  const confirmStatusUpdate = ({status, note, tracking, notify}) => {
    const ids = statusConfig.ids;
    setOrders(current => current.map(order => ids.includes(order.id) ? {
      ...order,
      status,
      tracking: tracking || order.tracking || "",
      lastStatusNote: note,
      customerNotified: notify
    } : order));

    setSelected([]);
    setStatusConfig(null);
    setToast({
      title: ids.length === 1 ? `${ids[0]} updated to ${status}` : `${ids.length} orders updated`,
      message: notify ? "Customer notification is enabled for this update." : "Status saved without customer notification."
    });
    window.setTimeout(() => setToast(null), 3200);
  };

  return (
    <section className="panel orders-panel js-reveal">
      <div className="panel-heading simple">
        <h3>Recent Orders</h3>
        <button className="panel-link" onClick={() => navigate("/orders")}>
          View all orders <FiChevronRight/>
        </button>
      </div>
      <div style={{ marginTop: 14 }}>
        <OrdersTable 
          orders={orders}
          selected={selected}
          onToggle={toggle}
          onViewDetails={() => navigate("/orders")}
          onUpdateStatus={openStatusModal}
          totalCount={1248}
        />
      </div>

      <AnimatePresence>
        {statusConfig && (
          <UpdateStatusModal
            key={`${statusConfig.ids.join("-")}-${statusConfig.currentStatus}`}
            config={statusConfig}
            onClose={() => setStatusConfig(null)}
            onConfirm={confirmStatusUpdate}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {toast && (
          <motion.div
            className="toast"
            initial={{opacity:0, y:-10, scale:.98}}
            animate={{opacity:1, y:0, scale:1}}
            exit={{opacity:0, y:-10, scale:.98}}
          >
            <span className="toast-icon"><FiCheck/></span>
            <div><strong>{toast.title}</strong><small>{toast.message}</small></div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default function AdminDashboard(){
  const [desktopSidebarOpen, setDesktopSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dateFilter, setDateFilter] = useState({ label: "Aug 13 – Aug 19, 2026", range: "Last 7 Days" });
  const root = useRef(null);

  const handleToggleMenu = () => {
    if (window.innerWidth < 1050) {
      setMobileMenuOpen(prev => !prev);
    } else {
      setDesktopSidebarOpen(prev => !prev);
    }
  };

  return (
    <div className="admin-scope">
      <style>{adminCss}</style>
      <div className="admin-shell" ref={root}>

        {desktopSidebarOpen && (
          <div className="desktop-sidebar-wrapper">
            <AdminSidebar activePage="Dashboard" onClose={() => setDesktopSidebarOpen(false)} />
          </div>
        )}
        <AnimatePresence>
          {mobileMenuOpen && (
            <AdminSidebar activePage="Dashboard" mobile onClose={() => setMobileMenuOpen(false)} />
          )}
        </AnimatePresence>

        <main className="dashboard-main">
          <AdminTopbar onToggleSidebar={handleToggleMenu} desktopSidebarOpen={desktopSidebarOpen} />

        <div className="dashboard-content">
          <section className="welcome-row js-reveal">
            <div><h1>Good morning, Sujith 👋</h1><p>Here’s what’s happening with your store today.</p></div>
            <MasterDatePicker value={dateFilter} onChange={setDateFilter} rightAlign />
          </section>

          <section className="kpi-grid">{kpis.map(x=><KpiCard key={x[0]} item={x}/>)}</section>

          <section className="analytics-grid"><RevenueChart/><SalesCategory/><Payments/></section>
          <section className="operations-grid"><ActiveBanners/><LowStock/><Transactions/></section>
          <RecentOrders/>
        </div>
      </main>
      </div>
    </div>
  );
}
