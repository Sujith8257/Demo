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
  FiAlertCircle,
  FiAlertTriangle,
  FiCalendar,
  FiCheckCircle,
  FiChevronLeft,
  FiChevronRight,
  FiClock,
  FiCreditCard,
  FiDollarSign,
  FiDownload,
  FiEye,
  FiFilter,
  FiHome,
  FiMoreVertical,
  FiPlus,
  FiPocket,
  FiRefreshCw,
  FiRotateCcw,
  FiSearch,
  FiSettings,
  FiShoppingBag,
  FiSmartphone,
  FiUsers,
  FiX,
  FiZap,
} from "react-icons/fi";

const paymentsCss = `
.payments-scope {
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

.payments-scope * { box-sizing: border-box; }
.payments-scope *::-webkit-scrollbar,
.modal::-webkit-scrollbar,
.modal *::-webkit-scrollbar {
  display: none !important;
  width: 0 !important;
  height: 0 !important;
}
.payments-scope *,
.modal,
.modal * {
  scrollbar-width: none !important;
  -ms-overflow-style: none !important;
}
.payments-shell { min-height: 100vh; display: flex; background: var(--admin-surface); color: var(--admin-text); font-family: 'Manrope', system-ui, sans-serif; }
.payments-main { flex: 1; min-width: 0; display: flex; flex-direction: column; }
.payments-content { padding: 24px 28px 36px; }

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
  .payments-scope .desktop-sidebar-wrapper { display: none !important; }
}

@media (max-width: 768px) {
  .payments-scope { max-width: 100vw; overflow-x: clip; }
  .payments-content { padding: 14px 12px 28px !important; max-width: 100vw; overflow-x: clip; box-sizing: border-box; }
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
  .payments-scope .kpi-grid {
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
  .method-layout {
    flex-direction: row !important;
    align-items: center !important;
    justify-content: space-between !important;
    gap: 14px !important;
    padding: 6px 0 !important;
  }
  .method-donut {
    width: 116px !important;
    height: 116px !important;
    flex: 0 0 116px !important;
  }
  .method-donut::after {
    inset: 18px !important;
  }
  .method-legend {
    flex: 1 !important;
    min-width: 0 !important;
  }
  .gateway-row, .transaction-row {
    padding: 10px 12px !important;
    border-radius: 10px !important;
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
  .modal.modal-overflow-visible,
  .refund-modal {
    overflow: visible !important;
  }
  .reconcile-summary {
    grid-template-columns: 1fr 1fr !important;
    gap: 8px !important;
  }
}

@media (max-width: 480px) {
  .pagehead > div:last-child { width: 100% !important; display: grid !important; grid-template-columns: 1fr 1fr !important; gap: 8px !important; }
  .primarybtn, .secondarybtn { flex: 1 !important; justify-content: center !important; height: 38px !important; }
}

/* Master KPI Grid Spacing matching Orders, Inventory, Banners, and Reviews pages */
.payments-scope .kpi-grid {
  display: grid;
  grid-template-columns: repeat(6, minmax(140px, 1fr));
  gap: 14px;
  margin-bottom: 20px;
}
@media (max-width: 1350px) {
  .payments-scope .kpi-grid { grid-template-columns: repeat(3, 1fr); }
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

/* Table Styles matching OrdersTable */
.table-scroll { width: 100%; overflow-x: auto; }
.payment-table { width: 100%; min-width: 900px; border-collapse: collapse; border-spacing: 0; }
.payment-table th, .payment-table td { box-sizing: border-box; }
.payment-table thead tr { height: 44px; }
.payment-table tbody tr { height: 60px; box-sizing: border-box; }
.payment-table th { height: 44px; background: #f3f3fe; color: #191b23; text-align: left; font-size: 12px; font-weight: 800; border-bottom: 1px solid #ededf8; text-transform: uppercase; letter-spacing: .04em; padding: 0 18px; white-space: nowrap; vertical-align: middle; }
.payment-table td { height: 60px; border-bottom: 1px solid #ededf8; font-size: 12.5px; font-weight: 500; color: #191b23; padding: 0 18px; white-space: nowrap; vertical-align: middle; }
.payment-table th:first-child, .payment-table td:first-child { width: 48px; padding-left: 18px; padding-right: 8px; text-align: center; border-top-left-radius: 10px; }
.payment-table th:last-child, .payment-table td:last-child { width: 130px; padding: 0 14px; text-align: center; border-top-right-radius: 10px; }
.payment-table tr { transition: background 0.18s ease; }
.payment-table tr.selected { background: #f0f5ff !important; }

.payment-table td strong {
  color: #191b23;
  font-weight: 500;
  font-size: 13px;
}

.payment-id { color: #191b23; font-size: 13px; font-weight: 500; }
.order-id { color: #191b23; font-size: 12.5px; font-weight: 500; }
.customer-name { color: #191b23; font-size: 13px; font-weight: 500; }
.amount { font-size: 13px; font-weight: 500; color: #191b23; }

.payment-table .customer {
  display: flex;
  align-items: center;
  gap: 10px;
}
.payment-table .customer .avatar {
  width: 34px;
  height: 34px;
  font-size: 11px;
  font-weight: 800;
  border-radius: 50%;
  background: #004094;
  color: #ffffff;
  display: grid;
  place-items: center;
  flex-shrink: 0;
}
.payment-table .customer strong {
  display: block;
  font-size: 13px;
  color: #191b23;
  font-weight: 500;
}
.payment-table .customer small {
  display: block;
  font-size: 11px;
  color: #191b23;
  font-weight: 500;
  margin-top: 1px;
}

.method-cell { display: flex; align-items: center; gap: 8px; font-size: 12.5px; font-weight: 500; color: #191b23; }
.payment-method-icon { width: 26px; height: 26px; border-radius: 6px; display: grid; place-items: center; font-size: 14px; flex-shrink: 0; }
.method-upi { background: #fff2e8; color: #ff7a00; }
.method-card { background: #e9efff; color: #176cec; }
.method-bank { background: #eef0f4; color: #4e5c75; }
.method-wallet { background: #f0e9ff; color: #7851db; }

.gateway-cell { display: flex; align-items: center; gap: 7px; font-size: 12.5px; font-weight: 500; color: #191b23; }
.gateway-mark { min-width: 24px; height: 22px; padding: 0 6px; border-radius: 6px; display: grid; place-items: center; font-size: 10px; font-weight: 900; background: #eef3ff; color: #176cec; }
.gateway-mark.upi { background: #fff1e6; color: #f27400; }
.gateway-mark.paytm { background: #e8f5ff; color: #1484c7; }
.gateway-mark.card { background: #f3f4f8; color: #26324d; }

.status-pill { display: inline-flex; align-items: center; justify-content: center; height: 24px; padding: 0 12px; border-radius: 999px; font-size: 11px; font-weight: 800; white-space: nowrap; }
.status-pill.success { background: #def6e5; color: #138a42; }
.status-pill.pending { background: #fff0d8; color: #d66c00; }
.status-pill.failed { background: #ffe2df; color: #b12626; }
.status-pill.refunded { background: #ede8ff; color: #674ccd; }
.status-pill.chargeback { background: #ffe2df; color: #b12626; }
.status-dot { display: none; }

.rowactions { display: flex; align-items: center; justify-content: center; gap: 6px; }
.rowactions button { width: 34px; height: 34px; border-radius: 8px; border: 1px solid #c2c6d5; background: #ffffff; color: #191b23; display: grid; place-items: center; font-size: 15px; cursor: pointer; transition: all .18s ease; }
.rowactions button:hover { background: #f3f3fe; border-color: #0056c3; color: #0056c3; }
.rowactions button.active-view { background: #0056c3; color: #ffffff; border-color: #0056c3; }

.row-menu { position: absolute; right: 0; top: 36px; width: 165px; z-index: 40; padding: 6px; border: 1px solid var(--admin-outline); border-radius: 8px; background: #fff; box-shadow: var(--admin-shadow); }
.row-menu button { width: 100%; height: 32px; padding: 0 10px; border: 0; border-radius: 6px; background: transparent; text-align: left; font-size: 12px; font-weight: 600; color: var(--admin-text); cursor: pointer; }
.row-menu button:hover { background: #f5f7fb; color: var(--admin-primary-2); }

.footerbar { display: flex; align-items: center; justify-content: space-between; padding: 12px 16px; border-top: 1px solid #ededf8; font-size: 12px; font-weight: 600; color: var(--admin-text); }
.footerbar .pagination { display: flex; gap: 4px; }
.footerbar .pagination button { min-width: 32px; height: 32px; padding: 0 6px; border: 1px solid var(--admin-outline); background: #ffffff; border-radius: 6px; font-size: 12px; font-weight: 700; cursor: pointer; }
.footerbar .pagination button.active { background: var(--admin-primary-2); color: #ffffff; border-color: var(--admin-primary-2); }

/* Mobile Cards */
.mobile-payment-list { display: none; padding: 12px; flex-direction: column; gap: 10px; }
@media (max-width: 980px) {
  .table-scroll { display: none; }
  .mobile-payment-list { display: flex; }
}
.mobile-payment-card { border: 1px solid var(--admin-outline); border-radius: 10px; padding: 12px; background: #ffffff; display: flex; flex-direction: column; gap: 10px; }
.mobile-payment-head { display: flex; align-items: center; justify-content: space-between; gap: 10px; }
.mobile-payment-actions { display: flex; gap: 8px; }
.mobile-payment-actions button { flex: 1; height: 36px; border: 1px solid var(--admin-outline); background: #fff; border-radius: 8px; font-weight: 700; font-size: 12px; display: flex; align-items: center; justify-content: center; gap: 6px; cursor: pointer; }

/* Right Column Details Card (Matching Integrations Page Pattern) */
.payment-details { padding: 18px; background: #fff; border: 1px solid var(--admin-outline); border-radius: 12px; box-shadow: var(--admin-shadow); }
.detail-head { display: flex; align-items: center; justify-content: space-between; gap: 10px; margin-bottom: 14px; }
.detail-head h3 { margin: 0; font-size: 15px; font-weight: 800; color: var(--admin-text); }
.detail-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
.detail-box { padding: 10px; border: 1px solid var(--admin-surface-mid); border-radius: 8px; background: #f8f9fc; }
.detail-box span { display: block; color: var(--admin-muted); font-size: 10.5px; }
.detail-box strong { display: block; margin-top: 3px; font-size: 12.5px; font-weight: 700; color: var(--admin-text); }

/* 3-Column Summary Cards Grid (Below Table) */
.summary-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-bottom: 16px; }
@media (max-width: 1200px) { .summary-grid { grid-template-columns: 1fr; } }

.side-card { padding: 16px; background: #fff; border: 1px solid var(--admin-outline); border-radius: 12px; box-shadow: var(--admin-shadow); display: flex; flex-direction: column; }
.card-head { display: flex; align-items: center; justify-content: space-between; gap: 10px; margin-bottom: 12px; }
.card-head h3 { margin: 0; font-size: 14px; font-weight: 800; color: #10172f; }
.card-head button { border: 0; background: transparent; color: #0056c3; font-size: 11.5px; font-weight: 800; cursor: pointer; padding: 0; transition: opacity 0.18s ease; }
.card-head button:hover { opacity: 0.8; text-decoration: underline; }

.method-layout { display: flex; align-items: center; gap: 16px; margin: auto 0; padding: 6px 0; }
.method-donut { width: 105px; height: 140px; flex: 0 0 auto; border-radius: 50%; background: conic-gradient(#7c4dff 0% 40%, #0056c3 40% 68%, #16a34a 68% 83%, #ff6b00 83% 93%, #06b6d4 93% 98%, #64748b 98% 100%); position: relative; display: grid; place-items: center; }
.method-donut::after { content: ""; position: absolute; inset: 24px 16px; border-radius: 50%; background: #fff; }
.method-donut .donut-center { position: relative; z-index: 2; text-align: center; }
.method-donut .donut-center span { display: block; font-size: 8.5px; font-weight: 900; color: #10172f; text-transform: uppercase; letter-spacing: .02em; white-space: nowrap; }
.method-donut .donut-center strong { display: block; font-size: 13px; font-weight: 500; color: #10172f; margin-top: 3px; white-space: nowrap; }
.method-legend { display: grid; gap: 8px; flex: 1; }
.method-legend .legend-row { display: grid; grid-template-columns: 8px 1fr auto; gap: 8px; align-items: center; font-size: 11.5px; }
.method-legend .legend-row i { width: 8px; height: 8px; border-radius: 50%; }
.method-legend .legend-row span { font-size: 11.5px; font-weight: 600; color: #10172f; }
.method-legend .legend-row strong { font-size: 11.5px; font-weight: 500; color: #10172f; }

.gateway-list { 
  display: grid; 
  gap: 8px; 
  margin-top: 6px; 
  max-height: 200px; 
  overflow-y: auto; 
  scrollbar-width: none !important; 
  -ms-overflow-style: none !important; 
}
.gateway-list::-webkit-scrollbar { 
  display: none !important; 
  width: 0 !important; 
  height: 0 !important; 
}
.gateway-row { display: flex; align-items: center; gap: 10px; padding: 8px 12px; border: 1px solid #ededf8; border-radius: 9px; background: #ffffff; transition: all 0.18s ease; cursor: pointer; }
.gateway-row:hover { background: #f8faff; border-color: #c2c6d5; box-shadow: 0 2px 6px rgba(0,0,0,.04); }
.gateway-avatar { width: 32px; height: 32px; border-radius: 8px; display: grid; place-items: center; background: #e7efff; color: #0056c3; font-size: 12px; font-weight: 800; border: 1px solid #dfe4ef; flex-shrink: 0; }
.gateway-copy { flex: 1; min-width: 0; }
.gateway-copy strong { display: block; font-size: 13px; font-weight: 700; color: #10172f; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.gateway-right { margin-left: auto; text-align: right; flex-shrink: 0; }
.gateway-count-val { font-size: 12.5px; font-weight: 700; color: #10172f; display: block; }
.gateway-percent-val { font-size: 11px; font-weight: 700; color: #16a34a; margin-top: 1px; display: block; }

.transaction-list { 
  display: grid; 
  gap: 8px; 
  margin-top: 6px; 
  max-height: 200px; 
  overflow-y: auto; 
  scrollbar-width: none !important; 
  -ms-overflow-style: none !important; 
}
.transaction-list::-webkit-scrollbar { 
  display: none !important; 
  width: 0 !important; 
  height: 0 !important; 
}
.transaction-row { display: flex; align-items: center; gap: 10px; padding: 8px 12px; border: 1px solid #ededf8; border-radius: 9px; background: #ffffff; transition: all 0.18s ease; cursor: pointer; }
.transaction-row:hover { background: #f8faff; border-color: #c2c6d5; box-shadow: 0 2px 6px rgba(0,0,0,.04); }
.transaction-icon { width: 32px; height: 32px; border-radius: 8px; display: grid; place-items: center; font-size: 13px; flex-shrink: 0; }
.transaction-icon.purple { background: #efe8ff; color: #7851db; border: 1px solid #dfd0ff; }
.transaction-icon.blue { background: #e3edff; color: #0056c3; border: 1px solid #cadcff; }
.transaction-icon.orange { background: #fff0d8; color: #d66c00; border: 1px solid #ffe1b5; }
.transaction-copy { flex: 1; min-width: 0; }
.transaction-copy strong { display: block; font-size: 12px; font-weight: 700; color: #10172f; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.transaction-copy span { display: block; margin-top: 2px; color: #64748b; font-size: 10.5px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.transaction-amount { font-size: 12.5px; font-weight: 800; flex-shrink: 0; }
.transaction-amount.positive { color: #16a34a; }
.transaction-amount.negative { color: #e5484d; }

.modal-overlay { position: fixed; inset: 0; display: grid; place-items: center; padding: 16px; z-index: 110; background: rgba(16, 23, 47, 0.45); backdrop-filter: blur(2px); }
.modal { width: min(600px, 100%); max-height: 92vh; overflow-y: auto; padding: 20px; border-radius: 12px; background: #fff; box-shadow: 0 22px 65px rgba(16,24,40,.18); }
.modal.modal-overflow-visible,
.refund-modal {
  overflow: visible !important;
}
.refund-modal .master-dropdown {
  position: relative;
  z-index: 9999 !important;
}
.refund-modal .master-dropdown-menu {
  z-index: 99999 !important;
  max-height: 240px;
  overflow-y: auto;
  box-shadow: 0 16px 40px rgba(16, 24, 40, 0.28) !important;
}
.modal-head { display: flex; align-items: center; justify-content: space-between; padding-bottom: 12px; border-bottom: 1px solid var(--admin-surface-mid); }
.modal-close { width: 34px; height: 34px; border: 1px solid #dfe4ef; border-radius: 8px; background: #f8faff; display: grid; place-items: center; cursor: pointer; color: #667085; transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1); }
.modal-close:hover, .modal-close:active, .modal-close:focus { background: #eff6ff; border-color: #93c5fd; color: #0056c3; transform: scale(1.06); }

.reconcile-summary { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-top: 14px; }
.reconcile-box { padding: 12px; border: 1px solid var(--admin-surface-mid); border-radius: 8px; background: #fafbfe; }
.reconcile-box span { display: block; color: var(--admin-muted); font-size: 11px; }
.reconcile-box strong { display: block; margin-top: 4px; font-size: 16px; font-weight: 800; color: var(--admin-text); }

/* Toast */
.toast { position: fixed; right: 24px; bottom: 24px; z-index: 140; min-width: 280px; padding: 12px 16px; border-radius: 10px; background: #10172f; color: #ffffff; box-shadow: 0 18px 45px rgba(16,24,40,.24); display: flex; align-items: center; gap: 10px; font-size: 12.5px; font-weight: 600; }
.toast-icon { width: 24px; height: 24px; border-radius: 50%; background: #16a34a; color: #fff; display: grid; place-items: center; font-size: 13px; flex-shrink: 0; }
`;

const initialPayments = [
  { id: "PAY-AMH1250", orderId: "#AMH1250", customer: "Priya Sharma", email: "priya@email.com", method: "UPI", gateway: "Razorpay", amount: 2549, status: "Success", date: "19 Aug 2026", time: "10:24 AM", reference: "RZP-785421" },
  { id: "PAY-AMH1249", orderId: "#AMH1249", customer: "Arjun Mehta", email: "arjun@email.com", method: "UPI", gateway: "UPI", amount: 1299, status: "Success", date: "19 Aug 2026", time: "09:45 AM", reference: "UPI-661904" },
  { id: "PAY-AMH1248", orderId: "#AMH1248", customer: "Sneha Iyer", email: "sneha@email.com", method: "Card", gateway: "VISA •••• 4242", amount: 3199, status: "Success", date: "18 Aug 2026", time: "08:15 PM", reference: "CARD-4242" },
  { id: "PAY-AMH1247", orderId: "#AMH1247", customer: "Karan Verma", email: "karan@email.com", method: "Net Banking", gateway: "Net Banking", amount: 899, status: "Pending", date: "18 Aug 2026", time: "06:40 PM", reference: "NB-118220" },
  { id: "PAY-AMH1246", orderId: "#AMH1246", customer: "Ananya Rao", email: "ananya@email.com", method: "UPI", gateway: "Razorpay", amount: 1199, status: "Success", date: "18 Aug 2026", time: "05:20 PM", reference: "RZP-774802" },
  { id: "PAY-AMH1245", orderId: "#AMH1245", customer: "Riya Nair", email: "riya@email.com", method: "Wallet", gateway: "Paytm", amount: 4760, status: "Refunded", date: "17 Aug 2026", time: "04:30 PM", reference: "PYTM-552081" },
  { id: "PAY-AMH1244", orderId: "#AMH1244", customer: "Meera Joshi", email: "meera@email.com", method: "Card", gateway: "•••• 8888", amount: 5299, status: "Failed", date: "17 Aug 2026", time: "03:10 PM", reference: "CARD-8888" },
  { id: "PAY-AMH1243", orderId: "#AMH1243", customer: "Vivek Agarwal", email: "vivek@email.com", method: "Net Banking", gateway: "Net Banking", amount: 1749, status: "Refunded", date: "17 Aug 2026", time: "02:20 PM", reference: "NB-993425" },
];

const paymentMethods = [
  { label: "UPI", value: "40% (1,027)", color: "#176cec" },
  { label: "Cards", value: "28% (718)", color: "#5acb87" },
  { label: "Net Banking", value: "15% (385)", color: "#63c98a" },
  { label: "Wallets", value: "10% (256)", color: "#7d4ff2" },
  { label: "COD", value: "5% (128)", color: "#ff8a00" },
  { label: "Others", value: "2% (54)", color: "#9aa4b5" },
];

const gateways = [
  { name: "Razorpay", count: "1,248", percent: "48.6%", width: "86%", color: "#176cec" },
  { name: "UPI", count: "856", percent: "33.3%", width: "67%", color: "#17a45b" },
  { name: "Paytm", count: "256", percent: "10.0%", width: "31%", color: "#7d4ff2" },
  { name: "Cashfree", count: "128", percent: "5.0%", width: "17%", color: "#ff7a00" },
  { name: "Stripe", count: "80", percent: "3.1%", width: "10%", color: "#e5484d" },
];

const recentTransactions = [
  { id: 1, title: "Refund #RFN1243", order: "Order #AMH1243", date: "May 17, 2025 02:05 PM", amount: "- ₹1,749", status: "Success", tone: "purple", icon: FiRefreshCw },
  { id: 2, title: "Payment #PAY-AMH1246", order: "Order #AMH1246", date: "May 17, 2025 05:20 PM", amount: "+ ₹1,199", status: "Success", tone: "blue", icon: FiCreditCard },
  { id: 3, title: "Payment #PAY-AMH1247", order: "Order #AMH1247", date: "May 17, 2025 06:40 PM", amount: "+ ₹899", status: "Pending", tone: "orange", icon: FiCreditCard },
  { id: 4, title: "Payment #PAY-AMH1248", order: "Order #AMH1248", date: "May 17, 2025 08:15 PM", amount: "+ ₹3,199", status: "Success", tone: "purple", icon: FiCreditCard },
];

function methodIcon(method) {
  if (method === "UPI") return FiSmartphone;
  if (method === "Card") return FiCreditCard;
  if (method === "Net Banking") return FiHome;
  return FiPocket;
}

function methodClass(method) {
  if (method === "UPI") return "method-upi";
  if (method === "Card") return "method-card";
  if (method === "Net Banking") return "method-bank";
  return "method-wallet";
}

function gatewayKind(gateway) {
  const v = gateway.toLowerCase();
  if (v.includes("upi")) return "upi";
  if (v.includes("paytm")) return "paytm";
  if (v.includes("visa") || v.includes("8888")) return "card";
  return "";
}

function gatewayLabel(gateway) {
  if (gateway === "Razorpay") return "RZ";
  if (gateway === "UPI") return "UPI";
  if (gateway === "Paytm") return "P";
  if (gateway.includes("VISA")) return "VISA";
  if (gateway.includes("8888")) return "MC";
  if (gateway === "Net Banking") return "NB";
  return "PG";
}

function StatusPill({ status }) {
  return <span className={`status-pill ${status.toLowerCase()}`}>{status}</span>;
}

function MethodCell({ method }) {
  const Icon = methodIcon(method);
  return (
    <div className="method-cell">
      <span className={`payment-method-icon ${methodClass(method)}`}><Icon /></span>
      <span>{method}</span>
    </div>
  );
}

function GatewayCell({ gateway }) {
  return (
    <div className="gateway-cell">
      <span className={`gateway-mark ${gatewayKind(gateway)}`}>{gatewayLabel(gateway)}</span>
      <span>{gateway}</span>
    </div>
  );
}

function RowMenu({ payment, onSelect, onRefund, onRetry, onClose }) {
  return (
    <motion.div className="row-menu" initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }}>
      <button type="button" onClick={() => { onSelect(payment); onClose(); }}>View payment details</button>
      {payment.status === "Success" && <button type="button" onClick={() => { onRefund(payment); onClose(); }}>Issue refund</button>}
      {payment.status === "Failed" && <button type="button" onClick={() => { onRetry(payment); onClose(); }}>Retry payment</button>}
      <button type="button" onClick={onClose}>Download receipt</button>
    </motion.div>
  );
}

function PaymentDetails({ payment, onClose, onRefund, onRetry, isModal = false }) {
  const content = (
    <>
      <div className="detail-head">
        <h3>Payment Details</h3>
        <button className="modal-close" type="button" onClick={onClose}><FiX /></button>
      </div>

      <div style={{ marginBottom: 16 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
          <div>
            <strong className="payment-id" style={{ fontSize: 16 }}>{payment.id}</strong>
            <div style={{ color: "var(--admin-muted)", fontSize: 12, marginTop: 2 }}>{payment.orderId} · {payment.customer}</div>
          </div>
          <StatusPill status={payment.status} />
        </div>
      </div>

      <div className="detail-grid" style={{ marginBottom: 16 }}>
        <div className="detail-box"><span>Amount</span><strong style={{ fontSize: 16, color: "var(--admin-primary-2)" }}>₹{payment.amount.toLocaleString("en-IN")}</strong></div>
        <div className="detail-box"><span>Gateway</span><strong>{payment.gateway}</strong></div>
        <div className="detail-box"><span>Method</span><strong>{payment.method}</strong></div>
        <div className="detail-box"><span>Reference</span><strong>{payment.reference}</strong></div>
        <div className="detail-box" style={{ gridColumn: "1 / 3" }}><span>Date & Time</span><strong>{payment.date} {payment.time}</strong></div>
      </div>

      <div style={{ paddingTop: 14, borderTop: "1px solid var(--admin-surface-mid)" }}>
        <h4 style={{ margin: "0 0 10px", fontSize: 13, fontWeight: 800 }}>Transaction Timeline</h4>
        <div style={{ display: "grid", gap: 10 }}>
          <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
            <span style={{ width: 18, height: 18, borderRadius: "50%", background: "#def6e5", color: "#138a42", display: "grid", placeItems: "center", fontSize: 11, fontWeight: 800, flexShrink: 0 }}>✓</span>
            <div>
              <strong style={{ fontSize: 12, display: "block" }}>Payment Initiated</strong>
              <span style={{ fontSize: 11, color: "var(--admin-muted)" }}>{payment.date} · {payment.time}</span>
            </div>
          </div>
          <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
            <span style={{ width: 18, height: 18, borderRadius: "50%", background: "#def6e5", color: "#138a42", display: "grid", placeItems: "center", fontSize: 11, fontWeight: 800, flexShrink: 0 }}>✓</span>
            <div>
              <strong style={{ fontSize: 12, display: "block" }}>Gateway Response Received</strong>
              <span style={{ fontSize: 11, color: "var(--admin-muted)" }}>{payment.gateway}</span>
            </div>
          </div>
          <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
            <span style={{ width: 18, height: 18, borderRadius: "50%", background: "#def6e5", color: "#138a42", display: "grid", placeItems: "center", fontSize: 11, fontWeight: 800, flexShrink: 0 }}>✓</span>
            <div>
              <strong style={{ fontSize: 12, display: "block" }}>{payment.status === "Success" ? "Payment Completed" : payment.status}</strong>
              <span style={{ fontSize: 11, color: "var(--admin-muted)" }}>Ref: {payment.reference}</span>
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", gap: 8, marginTop: 20, flexWrap: "wrap" }}>
        <button className="secondarybtn" type="button" style={{ flex: 1, justifyContent: "center" }}><FiDownload /> Receipt</button>
        {payment.status === "Success" && (
          <button className="secondarybtn" type="button" style={{ flex: 1, justifyContent: "center", color: "var(--admin-red)" }} onClick={() => onRefund(payment)}><FiRotateCcw /> Issue Refund</button>
        )}
        {payment.status === "Failed" && (
          <button className="primarybtn" type="button" style={{ flex: 1, justifyContent: "center" }} onClick={() => onRetry(payment)}><FiZap /> Retry</button>
        )}
      </div>
    </>
  );

  if (isModal) {
    return content;
  }

  return (
    <aside className="card payment-details">
      {content}
    </aside>
  );
}

function RefundCautionModal({ payment, onClose, onConfirm }) {
  const [reason, setReason] = useState("Customer requested cancellation");

  return (
    <motion.div className="modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div
        className="modal modal-overflow-visible refund-modal"
        style={{ width: "min(520px, 100%)", overflow: "visible" }}
        initial={{ y: 18, scale: .98 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: 18, scale: .98 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-head" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
          <h2 style={{ fontSize: 19, fontWeight: 800, color: "#10172f", margin: 0 }}>Confirm Payment Refund</h2>
          <button className="modal-close" type="button" onClick={onClose}><FiX /></button>
        </div>

        <div style={{ background: "#fff5e6", border: "1px solid #fed7aa", borderRadius: 8, padding: "10px 12px", display: "flex", gap: 10, alignItems: "flex-start", marginTop: 12 }}>
          <FiAlertTriangle style={{ color: "#d97706", fontSize: 18, flexShrink: 0, marginTop: 2 }} />
          <div style={{ fontSize: 11.5, color: "#92400e", lineHeight: 1.4 }}>
            <strong>Caution:</strong> Initiating this refund will immediately reverse <strong>₹{payment.amount.toLocaleString("en-IN")}</strong> to the customer via <strong>{payment.gateway}</strong> ({payment.method}). Once submitted, this financial transaction cannot be cancelled or reversed.
          </div>
        </div>

        <div style={{ marginTop: 14, background: "#f8f9fc", border: "1px solid #ededf8", borderRadius: 10, padding: "12px 14px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 12px" }}>
          <div>
            <span style={{ fontSize: 11, color: "var(--admin-muted)" }}>Payment ID</span>
            <strong style={{ display: "block", fontSize: 13, color: "var(--admin-primary-2)" }}>{payment.id}</strong>
          </div>
          <div>
            <span style={{ fontSize: 11, color: "var(--admin-muted)" }}>Order Reference</span>
            <strong style={{ display: "block", fontSize: 13 }}>{payment.orderId}</strong>
          </div>
          <div>
            <span style={{ fontSize: 11, color: "var(--admin-muted)" }}>Customer</span>
            <strong style={{ display: "block", fontSize: 13 }}>{payment.customer}</strong>
          </div>
          <div>
            <span style={{ fontSize: 11, color: "var(--admin-muted)" }}>Refund Amount</span>
            <strong style={{ display: "block", fontSize: 14, color: "#d32f2f" }}>₹{payment.amount.toLocaleString("en-IN")}</strong>
          </div>
        </div>

        <div style={{ marginTop: 14, position: "relative", zIndex: 1000 }}>
          <label style={{ display: "block", fontSize: 11.5, fontWeight: 700, marginBottom: 6, color: "var(--admin-text)" }}>Refund Reason</label>
          <MasterDropdown
            options={[
              "Customer requested cancellation",
              "Product returned / damaged",
              "Duplicate transaction / billing error",
              "Out of stock / unfulfilled order",
              "Fraudulent transaction / chargeback prevention"
            ]}
            value={reason}
            onChange={setReason}
            fullWidth
            style={{ width: "100%" }}
          />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 18, position: "relative", zIndex: 1 }}>
          <button className="secondarybtn" style={{ justifyContent: "center" }} type="button" onClick={onClose}>
            Cancel
          </button>
          <button className="primarybtn" style={{ background: "#d32f2f", justifyContent: "center" }} type="button" onClick={() => onConfirm(payment, reason)}>
            <FiRotateCcw /> Process Refund
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

function BulkRefundCautionModal({ count, totalAmount, onClose, onConfirm }) {
  return (
    <motion.div className="modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div className="modal" style={{ width: "min(500px, 100%)" }} initial={{ y: 18, scale: .98 }} animate={{ y: 0, scale: 1 }} exit={{ y: 18, scale: .98 }} onClick={(e) => e.stopPropagation()}>
        <div className="modal-head" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
          <h2 style={{ fontSize: 19, fontWeight: 800, color: "#10172f", margin: 0 }}>Confirm Bulk Refund</h2>
          <button className="modal-close" type="button" onClick={onClose}><FiX /></button>
        </div>

        <div style={{ background: "#fff5e6", border: "1px solid #fed7aa", borderRadius: 8, padding: "10px 12px", display: "flex", gap: 10, alignItems: "flex-start", marginTop: 12 }}>
          <FiAlertTriangle style={{ color: "#d97706", fontSize: 18, flexShrink: 0, marginTop: 2 }} />
          <div style={{ fontSize: 11.5, color: "#92400e", lineHeight: 1.4 }}>
            <strong>Caution:</strong> You are about to issue refunds for <strong>{count}</strong> eligible payments totaling <strong>₹{totalAmount.toLocaleString("en-IN")}</strong>. These transactions cannot be reversed once processed.
          </div>
        </div>

        <p style={{ margin: "14px 0 6px", fontSize: 12.5, color: "#191b23" }}>
          Are you sure you want to process refunds for all {count} selected payments?
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 18 }}>
          <button className="secondarybtn" style={{ justifyContent: "center" }} type="button" onClick={onClose}>
            Cancel
          </button>
          <button className="primarybtn" style={{ background: "#d32f2f", justifyContent: "center" }} type="button" onClick={onConfirm}>
            <FiRotateCcw /> Process {count} Refunds
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ReconcileModal({ onClose, onConfirm }) {
  return (
    <motion.div className="modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div className="modal" initial={{ y: 18, scale: .98 }} animate={{ y: 0, scale: 1 }} exit={{ y: 18, scale: .98 }} onClick={(e) => e.stopPropagation()}>
        <div className="modal-head" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
          <h2 style={{ fontSize: 19, fontWeight: 800, color: "#10172f", margin: 0 }}>Reconcile Payments</h2>
          <button className="modal-close" type="button" onClick={onClose}><FiX /></button>
        </div>
        <div style={{ margin: "10px 0", fontSize: 12.5, color: "var(--admin-muted)" }}>Compare gateway settlements with AMIHIVE payment records for the selected date range.</div>
        <div className="reconcile-summary">
          <div className="reconcile-box"><span>Records</span><strong>2,568</strong></div>
          <div className="reconcile-box"><span>Matched</span><strong>2,544</strong></div>
          <div className="reconcile-box"><span>Needs Review</span><strong>24</strong></div>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end", gap: 10, marginTop: 20 }}>
          <button className="secondarybtn" type="button" onClick={onClose}>Cancel</button>
          <button className="primarybtn" type="button" onClick={onConfirm}><FiRefreshCw /> Start Reconciliation</button>
        </div>
      </motion.div>
    </motion.div>
  );
}

function PaymentDistributionModal({ onClose, toast }) {
  return (
    <motion.div className="modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div
        className="modal"
        style={{ maxWidth: 680, width: "95%", padding: "24px 26px" }}
        initial={{ y: 16, scale: 0.96 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: 16, scale: 0.96 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-head" style={{ paddingBottom: 12 }}>
          <div>
            <h2 style={{ fontSize: 19, fontWeight: 800, color: "#10172f", margin: 0 }}>Payment Methods Distribution & Share</h2>
            <p style={{ fontSize: 12.5, color: "#667085", margin: "4px 0 0", fontWeight: 500 }}>Comprehensive breakdown across 2,568 processed customer transactions</p>
          </div>
          <button className="modal-close" type="button" onClick={onClose} title="Close" aria-label="Close"><FiX size={18} /></button>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, margin: "14px 0 16px" }}>
          <div style={{ background: "#f8faff", border: "1px solid #ededf8", borderRadius: 9, padding: "10px 14px" }}>
            <span style={{ fontSize: 10.5, color: "#667085", fontWeight: 700, textTransform: "uppercase" }}>Total Payments</span>
            <strong style={{ display: "block", fontSize: 16, color: "#10172f", marginTop: 3, fontWeight: 800 }}>2,568</strong>
          </div>
          <div style={{ background: "#f3fbf6", border: "1px solid #d4f3e1", borderRadius: 9, padding: "10px 14px" }}>
            <span style={{ fontSize: 10.5, color: "#16a34a", fontWeight: 700, textTransform: "uppercase" }}>Primary Mode</span>
            <strong style={{ display: "block", fontSize: 16, color: "#16a34a", marginTop: 3, fontWeight: 800 }}>UPI (40.0%)</strong>
          </div>
          <div style={{ background: "#f8f8ff", border: "1px solid #ededf8", borderRadius: 9, padding: "10px 14px" }}>
            <span style={{ fontSize: 10.5, color: "#0056c3", fontWeight: 700, textTransform: "uppercase" }}>Settled Gross</span>
            <strong style={{ display: "block", fontSize: 16, color: "#0056c3", marginTop: 3, fontWeight: 800 }}>₹64.85 Lakhs</strong>
          </div>
        </div>

        <div style={{ display: "grid", gap: 10, maxHeight: "360px", overflowY: "auto", paddingRight: 4 }}>
          {paymentMethods.map((item) => {
            const rawPercent = item.value.split("%")[0];
            const countStr = item.value.split("(")[1]?.replace(")", "") || "";
            return (
              <div key={item.label} style={{ padding: "12px 14px", border: "1px solid #ededf8", borderRadius: 10, background: "#ffffff" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ width: 10, height: 10, borderRadius: "50%", background: item.color, display: "inline-block" }} />
                    <strong style={{ fontSize: 13.5, fontWeight: 700, color: "#10172f" }}>{item.label}</strong>
                  </div>
                  <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                    <span style={{ fontSize: 12, fontWeight: 700, color: "#10172f" }}>{countStr} txns</span>
                    <span style={{ fontSize: 12, fontWeight: 800, color: item.color }}>{rawPercent}%</span>
                  </div>
                </div>
                <div style={{ width: "100%", height: 6, background: "#f3f3fe", borderRadius: 999, overflow: "hidden" }}>
                  <div style={{ width: `${rawPercent}%`, height: "100%", background: item.color, borderRadius: 999 }} />
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 18, paddingTop: 14, borderTop: "1px solid #ededf8" }}>
          <span style={{ fontSize: 11.5, color: "#16a34a", fontWeight: 600, display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#16a34a", display: "inline-block" }} />
            Method distribution updated in real time
          </span>
          <button className="primarybtn" type="button" onClick={() => { toast({ title: "Exported", message: "Payment method distribution exported to CSV." }); onClose(); }}>
            Export Distribution (CSV)
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

function TopGatewaysModal({ onClose, toast }) {
  return (
    <motion.div className="modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div
        className="modal"
        style={{ maxWidth: 700, width: "95%", padding: "24px 26px" }}
        initial={{ y: 16, scale: 0.96 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: 16, scale: 0.96 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-head" style={{ paddingBottom: 12 }}>
          <div>
            <h2 style={{ fontSize: 19, fontWeight: 800, color: "#10172f", margin: 0 }}>Top Payment Gateways & Routing Share</h2>
            <p style={{ fontSize: 12.5, color: "#667085", margin: "4px 0 0", fontWeight: 500 }}>Gateway volume, routing efficiency, and aggregate share</p>
          </div>
          <button className="modal-close" type="button" onClick={onClose} title="Close" aria-label="Close"><FiX size={18} /></button>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, margin: "14px 0 16px" }}>
          <div style={{ background: "#f8faff", border: "1px solid #ededf8", borderRadius: 9, padding: "10px 14px" }}>
            <span style={{ fontSize: 10.5, color: "#667085", fontWeight: 700, textTransform: "uppercase" }}>Total Processed</span>
            <strong style={{ display: "block", fontSize: 16, color: "#10172f", marginTop: 3, fontWeight: 800 }}>2,568 Txns</strong>
          </div>
          <div style={{ background: "#f3fbf6", border: "1px solid #d4f3e1", borderRadius: 9, padding: "10px 14px" }}>
            <span style={{ fontSize: 10.5, color: "#16a34a", fontWeight: 700, textTransform: "uppercase" }}>Primary Gateway</span>
            <strong style={{ display: "block", fontSize: 16, color: "#16a34a", marginTop: 3, fontWeight: 800 }}>Razorpay (48.6%)</strong>
          </div>
          <div style={{ background: "#f8f8ff", border: "1px solid #ededf8", borderRadius: 9, padding: "10px 14px" }}>
            <span style={{ fontSize: 10.5, color: "#0056c3", fontWeight: 700, textTransform: "uppercase" }}>Success Rate</span>
            <strong style={{ display: "block", fontSize: 16, color: "#0056c3", marginTop: 3, fontWeight: 800 }}>99.2% Overall</strong>
          </div>
        </div>

        <div style={{ display: "grid", gap: 10, maxHeight: "360px", overflowY: "auto", paddingRight: 4 }}>
          {gateways.map((g) => {
            const mark = g.name === "Razorpay" ? "RA" : g.name === "UPI" ? "UP" : g.name === "Paytm" ? "PA" : g.name === "Cashfree" ? "CA" : "ST";
            return (
              <div key={g.name} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 14px", border: "1px solid #ededf8", borderRadius: 10, background: "#ffffff" }}>
                <div style={{ width: 34, height: 34, borderRadius: 8, background: "#e7efff", border: "1px solid #dfe4ef", color: "#0056c3", display: "grid", placeItems: "center", fontSize: 12, fontWeight: 800, flexShrink: 0 }}>
                  {mark}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <strong style={{ fontSize: 13.5, fontWeight: 800, color: "#10172f", display: "block" }}>{g.name}</strong>
                  <span style={{ fontSize: 11, color: "#667085" }}>{g.count} transactions processed</span>
                </div>
                <div style={{ textAlign: "right" }}>
                  <strong style={{ display: "block", fontSize: 13, fontWeight: 800, color: "#16a34a" }}>{g.percent}</strong>
                  <small style={{ display: "block", fontSize: 10.5, color: "#667085", marginTop: 1 }}>Routing Share</small>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 18, paddingTop: 14, borderTop: "1px solid #ededf8" }}>
          <span style={{ fontSize: 11.5, color: "#16a34a", fontWeight: 600, display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#16a34a", display: "inline-block" }} />
            Gateway webhooks connected & active
          </span>
          <button className="primarybtn" type="button" onClick={() => { toast({ title: "Exported", message: "Gateway statistics exported to CSV." }); onClose(); }}>
            Export Gateways (CSV)
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

function RecentAuditActivityModal({ onClose, toast }) {
  return (
    <motion.div className="modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div
        className="modal"
        style={{ maxWidth: 700, width: "95%", padding: "24px 26px" }}
        initial={{ y: 16, scale: 0.96 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: 16, scale: 0.96 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-head" style={{ paddingBottom: 12 }}>
          <div>
            <h2 style={{ fontSize: 19, fontWeight: 800, color: "#10172f", margin: 0 }}>Recent Audit Activity & Transaction Log</h2>
            <p style={{ fontSize: 12.5, color: "#667085", margin: "4px 0 0", fontWeight: 500 }}>Live ledger of refunds, collections, and settlement records</p>
          </div>
          <button className="modal-close" type="button" onClick={onClose} title="Close" aria-label="Close"><FiX size={18} /></button>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, margin: "14px 0 16px" }}>
          <div style={{ background: "#f8faff", border: "1px solid #ededf8", borderRadius: 9, padding: "10px 14px" }}>
            <span style={{ fontSize: 10.5, color: "#667085", fontWeight: 700, textTransform: "uppercase" }}>Logged Events</span>
            <strong style={{ display: "block", fontSize: 16, color: "#10172f", marginTop: 3, fontWeight: 800 }}>{recentTransactions.length} Events</strong>
          </div>
          <div style={{ background: "#f3fbf6", border: "1px solid #d4f3e1", borderRadius: 9, padding: "10px 14px" }}>
            <span style={{ fontSize: 10.5, color: "#16a34a", fontWeight: 700, textTransform: "uppercase" }}>Net Cashflow</span>
            <strong style={{ display: "block", fontSize: 16, color: "#16a34a", marginTop: 3, fontWeight: 800 }}>+ ₹3,548</strong>
          </div>
          <div style={{ background: "#f8f8ff", border: "1px solid #ededf8", borderRadius: 9, padding: "10px 14px" }}>
            <span style={{ fontSize: 10.5, color: "#0056c3", fontWeight: 700, textTransform: "uppercase" }}>Audit Sync</span>
            <strong style={{ display: "block", fontSize: 16, color: "#0056c3", marginTop: 3, fontWeight: 800 }}>100% OK</strong>
          </div>
        </div>

        <div style={{ display: "grid", gap: 10, maxHeight: "360px", overflowY: "auto", paddingRight: 4 }}>
          {recentTransactions.map((t) => {
            const Icon = t.icon;
            const isPositive = t.amount.startsWith("+");
            return (
              <div key={t.id} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 14px", border: "1px solid #ededf8", borderRadius: 10, background: "#ffffff" }}>
                <span className={`transaction-icon ${t.tone}`} style={{ flexShrink: 0 }}><Icon /></span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <strong style={{ fontSize: 13, fontWeight: 700, color: "#10172f", display: "block" }}>{t.title}</strong>
                  <span style={{ fontSize: 11, color: "#667085", display: "block", marginTop: 2 }}>{t.order} · {t.date}</span>
                </div>
                <span style={{ fontSize: 13, fontWeight: 800, color: isPositive ? "#16a34a" : "#e5484d" }}>
                  {t.amount}
                </span>
              </div>
            );
          })}
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 18, paddingTop: 14, borderTop: "1px solid #ededf8" }}>
          <span style={{ fontSize: 11.5, color: "#16a34a", fontWeight: 600, display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#16a34a", display: "inline-block" }} />
            Ledger synced with payment gateway logs
          </span>
          <button className="primarybtn" type="button" onClick={() => { toast({ title: "Exported", message: "Audit trail log exported to CSV." }); onClose(); }}>
            Export Audit Trail (CSV)
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function PaymentsManagement() {
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

  const [payments, setPayments] = useState(initialPayments);
  const [selectedId, setSelectedId] = useState(null);
  const [selectedRowIds, setSelectedRowIds] = useState([]);

  const [tab, setTab] = useState("All Payments");
  const [status, setStatus] = useState("All Statuses");
  const [method, setMethod] = useState("All Methods");
  const [gateway, setGateway] = useState("All Gateways");
  const [dateFilter, setDateFilter] = useState("All Time");
  const [search, setSearch] = useState("");
  const [rowMenuOpenId, setRowMenuOpenId] = useState(null);

  const [distributionModalOpen, setDistributionModalOpen] = useState(false);
  const [gatewaysModalOpen, setGatewaysModalOpen] = useState(false);
  const [auditModalOpen, setAuditModalOpen] = useState(false);
  const [reconcileOpen, setReconcileOpen] = useState(false);
  const [refundTarget, setRefundTarget] = useState(null);
  const [bulkRefundTarget, setBulkRefundTarget] = useState(null);
  const [toast, setToast] = useState(null);

  const handleToggleMenu = () => {
    if (window.innerWidth <= 1050) {
      setMobileMenuOpen((prev) => !prev);
    } else {
      setDesktopSidebarOpen((prev) => !prev);
    }
  };

  const showToast = (message) => {
    setToast({ title: "Payments Updated", message });
    setTimeout(() => setToast(null), 3000);
  };

  const filtered = useMemo(() => payments.filter((payment) => {
    const q = search.trim().toLowerCase();
    const searchOk = !q || payment.id.toLowerCase().includes(q) || payment.orderId.toLowerCase().includes(q) || payment.customer.toLowerCase().includes(q) || payment.gateway.toLowerCase().includes(q);
    const tabOk = tab === "All Payments" ||
      (tab === "Successful" && payment.status === "Success") ||
      (tab === "Pending" && payment.status === "Pending") ||
      (tab === "Failed" && payment.status === "Failed") ||
      (tab === "Refunded" && payment.status === "Refunded") ||
      (tab === "Chargeback" && payment.status === "Chargeback");
    const statusOk = status === "All Statuses" || payment.status === status;
    const methodOk = method === "All Methods" || payment.method === method;
    const gatewayOk = gateway === "All Gateways" || payment.gateway === gateway;
    return searchOk && tabOk && statusOk && methodOk && gatewayOk;
  }), [payments, search, tab, status, method, gateway]);

  const selected = useMemo(() => payments.find((p) => p.id === selectedId) || null, [payments, selectedId]);

  const toggleSelectPayment = (p) => {
    setSelectedId((current) => (current === p.id ? null : p.id));
  };

  const exportCSV = () => {
    const rows = [
      ["Payment ID", "Order ID", "Customer", "Method", "Gateway", "Amount", "Status", "Date", "Time"],
      ...filtered.map((p) => [p.id, p.orderId, p.customer, p.method, p.gateway, p.amount, p.status, p.date, p.time])
    ];
    const csv = rows.map((row) => row.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(",")).join("\n");
    const url = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
    const a = document.createElement("a");
    a.href = url; a.download = "payments.csv"; a.click();
    URL.revokeObjectURL(url);
    showToast("Payments exported successfully.");
  };

  const promptRefundPayment = (payment) => {
    setRefundTarget(payment);
  };

  const confirmRefundPayment = (payment, reason) => {
    setPayments((current) => current.map((item) => (item.id === payment.id ? { ...item, status: "Refunded" } : item)));
    setRefundTarget(null);
    showToast(`₹${payment.amount.toLocaleString("en-IN")} refunded for ${payment.id} (${reason}).`);
  };

  const promptBulkRefund = () => {
    if (selectedRowIds.length === 0) {
      showToast("Please select payments first.");
      return;
    }
    const eligible = payments.filter((p) => selectedRowIds.includes(p.id) && p.status === "Success");
    if (eligible.length === 0) {
      showToast("None of the selected payments are eligible for refund (must be Successful).");
      return;
    }
    const totalAmount = eligible.reduce((sum, p) => sum + p.amount, 0);
    setBulkRefundTarget({ count: eligible.length, totalAmount, ids: eligible.map((p) => p.id) });
  };

  const confirmBulkRefund = () => {
    if (!bulkRefundTarget) return;
    setPayments((current) => current.map((p) => bulkRefundTarget.ids.includes(p.id) ? { ...p, status: "Refunded" } : p));
    showToast(`Refunds issued for ${bulkRefundTarget.count} payments (Total ₹${bulkRefundTarget.totalAmount.toLocaleString("en-IN")}).`);
    setSelectedRowIds([]);
    setBulkRefundTarget(null);
  };

  const retryPayment = (payment) => {
    setPayments((current) => current.map((item) => (item.id === payment.id ? { ...item, status: "Pending" } : item)));
    showToast(`Retry initiated for ${payment.id}.`);
  };

  const kpis = [
    ["Total Payments", "2,568", "+16.8%", "vs last 7 days", "purple", FiUsers],
    ["Successful Payments", "2,342", "+17.2%", "vs last 7 days", "success", FiCheckCircle],
    ["Refunds", "146", "-8.6%", "vs last 7 days", "warning", FiRefreshCw],
    ["Total Amount", "₹11,32,760", "+15.6%", "vs last 7 days", "trust", FiCreditCard],
    ["Avg. Transaction Value", "₹4,412", "+4.3%", "vs last 7 days", "trust", FiDollarSign],
    ["Payment Failure Rate", "1.8%", "-0.6%", "vs last 7 days", "danger", FiAlertCircle],
  ];

  const tabs = [
    ["All Payments", 2568],
    ["Successful", 2342],
    ["Pending", 58],
    ["Failed", 102],
    ["Refunded", 146],
    ["Chargeback", 12],
  ];

  return (
    <div className="payments-scope">
      <style>{paymentsCss}</style>

      <div className="payments-shell">
        <div className={`desktop-sidebar-wrapper ${!desktopSidebarOpen ? "is-closed" : ""}`}>
          <AdminSidebar activePage="Payments" onClose={() => setDesktopSidebarOpen(false)} />
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <AdminSidebar activePage="Payments" mobile onClose={() => setMobileMenuOpen(false)} />
          )}
        </AnimatePresence>

        <main className="payments-main">
          <AdminTopbar onToggleMenu={handleToggleMenu} desktopSidebarOpen={desktopSidebarOpen} />

          <div className="payments-content">
            {/* Page Header */}
            <div className="pagehead">
              <div>
                <h1>Payments Management</h1>
                <p>Track, manage and reconcile all customer payments and gateway transactions.</p>
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                <button className="secondarybtn" onClick={exportCSV}><FiDownload /> Export</button>
                <button className="primarybtn" onClick={() => setReconcileOpen(true)}><FiRefreshCw /> Reconcile</button>
              </div>
            </div>

            {/* KPI Section */}
            <section className="kpi-grid">
              {kpis.map((x) => (
                <KpiCard key={x[0]} item={x} />
              ))}
            </section>

            {/* Main Grid: Full-width Table when unselected; Splits to 2 columns when a payment is selected */}
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
                  <label className="field search-field">
                    <FiSearch />
                    <input
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Search payments, order ID, customer..."
                    />
                  </label>

                  <MasterDropdown
                    options={[{ value: "All Statuses", label: "All Statuses" }, "Success", "Pending", "Failed", "Refunded", "Chargeback"]}
                    value={status}
                    onChange={setStatus}
                  />

                  <MasterDropdown
                    options={[{ value: "All Methods", label: "All Methods" }, "UPI", "Card", "Net Banking", "Wallet"]}
                    value={method}
                    onChange={setMethod}
                  />

                  <MasterDropdown
                    options={[{ value: "All Gateways", label: "All Gateways" }, "Razorpay", "UPI", "Paytm", "Net Banking", "Stripe"]}
                    value={gateway}
                    onChange={setGateway}
                  />

                  <MasterDatePicker value={dateFilter} onChange={setDateFilter} />

                  <button className="filterbtn" onClick={() => showToast("Filter options applied.")}>
                    <FiFilter /> Filters
                  </button>
                </div>

                {/* Selection Bar (Matching Orders & Inventory pages) */}
                <div className="selbar">
                  <AnimatedCheckbox
                    checked={filtered.length > 0 && selectedRowIds.length === filtered.length}
                    onChange={(e) => setSelectedRowIds(e.target.checked ? filtered.map((p) => p.id) : [])}
                  />
                  <strong>{selectedRowIds.length} selected</strong>
                  <span>Select all {filtered.length} on this page</span>
                  <div className="spacer" />
                  <button
                    className="clear"
                    onClick={() => selectedRowIds.length > 0 ? setSelectedRowIds([]) : showToast("No payments selected.")}
                  >
                    Clear selection
                  </button>
                  <MasterDropdown
                    staticLabel="Bulk Actions"
                    rightAlign
                    options={[
                      {
                        label: "Issue Refunds",
                        action: promptBulkRefund,
                      },
                      {
                        label: "Retry Selected",
                        action: () => {
                          if (selectedRowIds.length === 0) showToast("Please select payments first.");
                          else {
                            setPayments((current) => current.map((p) => selectedRowIds.includes(p.id) && p.status === "Failed" ? { ...p, status: "Pending" } : p));
                            showToast(`Retried eligible selected payments.`);
                            setSelectedRowIds([]);
                          }
                        }
                      },
                      {
                        label: "Export Selected",
                        action: () => {
                          if (selectedRowIds.length === 0) showToast("Please select payments first.");
                          else {
                            const selectedPayments = payments.filter((p) => selectedRowIds.includes(p.id));
                            const rows = [
                              ["Payment ID", "Order ID", "Customer", "Method", "Gateway", "Amount", "Status", "Date", "Time"],
                              ...selectedPayments.map((p) => [p.id, p.orderId, p.customer, p.method, p.gateway, p.amount, p.status, p.date, p.time])
                            ];
                            const csv = rows.map((row) => row.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(",")).join("\n");
                            const url = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
                            const a = document.createElement("a");
                            a.href = url; a.download = "selected-payments.csv"; a.click();
                            URL.revokeObjectURL(url);
                            showToast(`${selectedRowIds.length} selected payments exported.`);
                            setSelectedRowIds([]);
                          }
                        }
                      }
                    ]}
                  />
                </div>

                {/* Desktop Table */}
                <div className="table-scroll">
                  <table className="payment-table">
                    <thead>
                      <tr>
                        <th style={{ width: 40 }}>
                          <AnimatedCheckbox
                            checked={filtered.length > 0 && selectedRowIds.length === filtered.length}
                            onChange={(e) => setSelectedRowIds(e.target.checked ? filtered.map((p) => p.id) : [])}
                          />
                        </th>
                        <th>Payment ID</th>
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Method</th>
                        <th>Gateway</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Date & Time</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filtered.map((p) => (
                        <tr key={p.id} className={selectedId === p.id ? "selected" : ""}>
                          <td style={{ width: 40 }} onClick={(e) => e.stopPropagation()}>
                            <AnimatedCheckbox
                              checked={selectedRowIds.includes(p.id)}
                              onChange={(e) => setSelectedRowIds((curr) => e.target.checked ? [...curr, p.id] : curr.filter((id) => id !== p.id))}
                            />
                          </td>
                          <td><span className="payment-id">{p.id}</span></td>
                          <td><span className="order-id">{p.orderId}</span></td>
                          <td>
                            <div className="customer">
                              <span className="avatar">
                                {p.customer.split(" ").map((x) => x[0]).join("").slice(0, 2)}
                              </span>
                              <div>
                                <strong>{p.customer}</strong>
                                <small>{p.email || `${p.customer.toLowerCase().split(" ")[0]}@email.com`}</small>
                              </div>
                            </div>
                          </td>
                          <td><MethodCell method={p.method} /></td>
                          <td><GatewayCell gateway={p.gateway} /></td>
                          <td><span className="amount">₹{p.amount.toLocaleString("en-IN")}</span></td>
                          <td><StatusPill status={p.status} /></td>
                          <td>
                            <div>
                              <strong>{p.date}</strong>
                              <small style={{ display: "block", fontSize: 11, color: "#191b23", fontWeight: 500, marginTop: 1 }}>{p.time}</small>
                            </div>
                          </td>
                          <td>
                            <div className="rowactions">
                              <button
                                className={selectedId === p.id ? "active-view" : ""}
                                title={selectedId === p.id ? "Hide Details" : "View Details"}
                                onClick={() => toggleSelectPayment(p)}
                              >
                                <FiEye />
                              </button>
                              {p.status === "Success" && (
                                <button
                                  title="Issue Refund"
                                  className="refund-btn"
                                  style={{ color: "#d32f2f" }}
                                  onClick={() => promptRefundPayment(p)}
                                >
                                  <FiRotateCcw />
                                </button>
                              )}
                              {p.status === "Failed" && (
                                <button
                                  title="Retry Payment"
                                  className="retry-btn"
                                  style={{ color: "var(--admin-primary-2)" }}
                                  onClick={() => retryPayment(p)}
                                >
                                  <FiRefreshCw />
                                </button>
                              )}
                              <div style={{ position: "relative" }}>
                                <button title="More Actions" onClick={() => setRowMenuOpenId((curr) => (curr === p.id ? null : p.id))}>
                                  <FiMoreVertical />
                                </button>
                                <AnimatePresence>
                                  {rowMenuOpenId === p.id && (
                                    <RowMenu
                                      payment={p}
                                      onSelect={toggleSelectPayment}
                                      onRefund={promptRefundPayment}
                                      onRetry={retryPayment}
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
                  renderItem={(p) => (
                    <MobileTableCard
                      key={p.id}
                      title={p.id}
                      subtitle={p.orderId}
                      badge={<StatusPill status={p.status} />}
                      meta={[
                        { label: "Customer", value: p.customer },
                        { label: "Amount", value: `₹${p.amount.toLocaleString("en-IN")}` },
                        { label: "Method / Gateway", value: `${p.method} (${p.gateway})` },
                        { label: "Date & Time", value: `${p.date} · ${p.time}` },
                      ]}
                      actions={
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, width: "100%" }}>
                          <button
                            type="button"
                            className="mobile-table-card-action-btn"
                            onClick={() => toggleSelectPayment(p)}
                          >
                            <FiEye /> {selectedId === p.id ? "Hide Details" : "View Details"}
                          </button>
                          <button
                            type="button"
                            className="mobile-table-card-action-btn"
                            style={p.status === "Success" ? { color: "#d32f2f" } : {}}
                            onClick={() => p.status === "Failed" ? retryPayment(p) : promptRefundPayment(p)}
                          >
                            {p.status === "Failed" ? <FiRefreshCw /> : <FiRotateCcw />} {p.status === "Failed" ? "Retry" : "Refund"}
                          </button>
                        </div>
                      }
                    />
                  )}
                />

                {/* Table Footer */}
                <div className="footerbar">
                  <span>Showing 1–{filtered.length} of {filtered.length} payments</span>
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
                    <PaymentDetails
                      payment={selected}
                      onClose={() => setSelectedId(null)}
                      onRefund={promptRefundPayment}
                      onRetry={retryPayment}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </section>

            {/* Performance & Summary Grid (Positioned Below Table) */}
            <section className="summary-grid">
              {/* Card 1: Payment Methods Distribution */}
              <section className="side-card">
                <div className="card-head">
                  <h3>Payment Methods Distribution</h3>
                  <button type="button" onClick={() => setDistributionModalOpen(true)}>View all</button>
                </div>
                <div style={{ cursor: "pointer", flex: 1, display: "flex" }} onClick={() => setDistributionModalOpen(true)}>
                  <MasterPieChart
                    centerTitle="TOTAL PAYMENTS"
                    centerValue="2,568"
                    data={paymentMethods.map((item) => [item.label, item.value, item.color])}
                    conicGradient="conic-gradient(#7c4dff 0% 40%, #0056c3 40% 68%, #16a34a 68% 83%, #ff6b00 83% 93%, #06b6d4 93% 98%, #64748b 98% 100%)"
                    shape="circle"
                    onItemClick={() => setDistributionModalOpen(true)}
                  />
                </div>
              </section>

              {/* Card 2: Top Payment Gateways */}
              <section className="side-card">
                <div className="card-head">
                  <h3>Top Payment Gateways</h3>
                  <button type="button" onClick={() => setGatewaysModalOpen(true)}>View all</button>
                </div>
                <div className="gateway-list">
                  {gateways.map((g) => {
                    const mark = g.name === "Razorpay" ? "RA" : g.name === "UPI" ? "UP" : g.name === "Paytm" ? "PA" : g.name === "Cashfree" ? "CA" : "ST";
                    return (
                      <div className="gateway-row" key={g.name} onClick={() => setGatewaysModalOpen(true)}>
                        <span className="gateway-avatar">{mark}</span>
                        <div className="gateway-copy">
                          <strong>{g.name}</strong>
                        </div>
                        <div className="gateway-right">
                          <span className="gateway-count-val">{g.count}</span>
                          <span className="gateway-percent-val">{g.percent}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* Card 3: Recent Audit Activity */}
              <section className="side-card">
                <div className="card-head">
                  <h3>Recent Audit Activity</h3>
                  <button type="button" onClick={() => setAuditModalOpen(true)}>View all</button>
                </div>
                <div className="transaction-list">
                  {recentTransactions.map((t) => {
                    const Icon = t.icon;
                    const isPositive = t.amount.startsWith("+");
                    return (
                      <div className="transaction-row" key={t.id} onClick={() => setAuditModalOpen(true)}>
                        <span className={`transaction-icon ${t.tone}`}><Icon /></span>
                        <div className="transaction-copy">
                          <strong>{t.title}</strong>
                          <span>{t.order} · {t.date}</span>
                        </div>
                        <span className={`transaction-amount ${isPositive ? "positive" : "negative"}`}>
                          {t.amount}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </section>
            </section>
          </div>
        </main>
      </div>

      {/* 3 Detail Modals */}
      <AnimatePresence>
        {distributionModalOpen && (
          <PaymentDistributionModal
            onClose={() => setDistributionModalOpen(false)}
            toast={(t) => showToast(t.message || "Payment distribution report exported.")}
          />
        )}
        {gatewaysModalOpen && (
          <TopGatewaysModal
            onClose={() => setGatewaysModalOpen(false)}
            toast={(t) => showToast(t.message || "Gateways report exported.")}
          />
        )}
        {auditModalOpen && (
          <RecentAuditActivityModal
            onClose={() => setAuditModalOpen(false)}
            toast={(t) => showToast(t.message || "Audit trail exported.")}
          />
        )}
      </AnimatePresence>

      {/* Reconcile Modal */}
      <AnimatePresence>
        {reconcileOpen && (
          <ReconcileModal onClose={() => setReconcileOpen(false)} onConfirm={() => { setReconcileOpen(false); showToast("Payment reconciliation process started."); }} />
        )}
      </AnimatePresence>

      {/* Refund Caution Modal */}
      <AnimatePresence>
        {refundTarget && (
          <RefundCautionModal
            payment={refundTarget}
            onClose={() => setRefundTarget(null)}
            onConfirm={confirmRefundPayment}
          />
        )}
      </AnimatePresence>

      {/* Bulk Refund Caution Modal */}
      <AnimatePresence>
        {bulkRefundTarget && (
          <BulkRefundCautionModal
            count={bulkRefundTarget.count}
            totalAmount={bulkRefundTarget.totalAmount}
            onClose={() => setBulkRefundTarget(null)}
            onConfirm={confirmBulkRefund}
          />
        )}
      </AnimatePresence>

      {/* Mobile Payment Details Modal Popup */}
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
              className="modal payment-details-modal"
              style={{ width: "min(520px, 100%)", maxHeight: "88vh", overflowY: "auto" }}
              initial={{ y: 20, scale: 0.98 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 20, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <PaymentDetails
                payment={selected}
                onClose={() => setSelectedId(null)}
                onRefund={(p) => {
                  setSelectedId(null);
                  promptRefundPayment(p);
                }}
                onRetry={retryPayment}
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
