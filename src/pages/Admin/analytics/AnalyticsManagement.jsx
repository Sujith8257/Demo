import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiActivity,
  FiBox,
  FiDownload,
  FiRefreshCw,
  FiRotateCcw,
  FiShoppingBag,
  FiTrendingUp,
  FiUserCheck,
  FiUsers,
} from "react-icons/fi";

import AdminSidebar from "../../../components/Admin/AdminSidebar";
import AdminTopbar from "../../../components/Admin/AdminTopbar";
import KpiCard from "../../../components/Admin/KpiCard";
import MasterDatePicker from "../../../components/Admin/MasterDatePicker";
import MasterDropdown from "../../../components/Admin/MasterDropdown";
import MasterPieChart from "../../../components/Admin/MasterPieChart";

const styles = String.raw`
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap");

.analytics-scope {
  --page: #faf8ff;
  --card: #ffffff;
  --text: #10172f;
  --muted: #667085;
  --border: #dfe4ef;
  --line: #edf0f6;

  --blue: #0056c3;
  --blue2: #1266eb;
  --green: #17a45b;
  --orange: #fd661d;
  --orange-dark: #e05512;
  --purple: #7d4ff2;
  --pink: #ff4e86;
  --red: #e5484d;
  --cyan: #16b9bd;
  --slate: #95a0b4;

  --shadow: 0 4px 14px rgba(25,35,70,.055);
  --shadow-lg: 0 20px 60px rgba(16,24,40,.18);
  min-height: 100vh;
  max-width: 100vw;
  overflow-x: clip;
  background: var(--page);
  color: var(--text);
  font-family: 'Manrope', system-ui, -apple-system, sans-serif;
}

.analytics-scope * { box-sizing: border-box; }
.analytics-scope button, .analytics-scope input, .analytics-scope select { font: inherit; }
.analytics-scope button { cursor: pointer; }

.analytics-scope .admin-shell {
  display: flex;
  min-height: 100vh;
  max-width: 100vw;
  background: var(--page);
}

.analytics-scope .desktop-sidebar-wrapper {
  width: 256px;
  min-width: 256px;
  flex-shrink: 0;
  transition: all .25s ease;
}
.analytics-scope .desktop-sidebar-wrapper.is-closed {
  display: none;
}

.analytics-scope .dashboard-main {
  flex: 1;
  min-width: 0;
}

.analytics-scope .page {
  padding: 22px 28px 36px;
  max-width: 100%;
  box-sizing: border-box;
}

.analytics-scope .page-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 14px;
  margin-bottom: 18px;
}
.analytics-scope .page-title h1 {
  margin: 0;
  font-size: 28px;
  line-height: 1.2;
  letter-spacing: -.02em;
  font-weight: 800;
  color: #10172f;
}
.analytics-scope .page-title p {
  margin: 5px 0 0;
  color: var(--muted);
  font-size: 12px;
  font-weight: 500;
}
.analytics-scope .page-actions {
  display: flex;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;
}

.analytics-scope .primary-btn {
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
.analytics-scope .primary-btn:hover {
  background: var(--orange-dark);
  transform: translateY(-1px);
  box-shadow: 0 6px 16px rgba(253, 102, 29, 0.32);
}

.analytics-scope .outline-btn {
  height: 38px;
  border: 1px solid var(--border);
  background: #ffffff;
  border-radius: 8px;
  padding: 0 14px;
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 12px;
  font-weight: 800;
  color: #191b23;
  cursor: pointer;
  transition: all 0.2s ease;
}
.analytics-scope .outline-btn:hover {
  background: #fff5f0;
  border-color: var(--orange);
  color: var(--orange);
  transform: translateY(-1px);
}

/* Standard KPI Cards Grid */
.analytics-scope .kpi-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 12px;
  margin-bottom: 18px;
}

/* Analytics Main Grid */
.analytics-scope .analytics-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.6fr) minmax(0, 1fr) minmax(0, 1.05fr);
  gap: 14px;
  margin-bottom: 18px;
}

.analytics-scope .card {
  background: #ffffff;
  border: 1px solid var(--border);
  border-radius: 12px;
  box-shadow: var(--shadow);
}
.analytics-scope .chart-card {
  padding: 16px;
  display: flex;
  flex-direction: column;
}

.analytics-scope .chart-card.donut-card {
  display: flex;
  flex-direction: column;
}

.analytics-scope .donut-chart-body {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.analytics-scope .card-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 14px;
}
.analytics-scope .card-head h3 {
  margin: 0;
  font-size: 15px;
  font-weight: 800;
  color: #10172f;
}
.analytics-scope .card-head button {
  border: 0;
  background: transparent;
  color: #0056c3 !important;
  font-size: 12px;
  font-weight: 800;
  padding: 0;
  cursor: pointer;
  transition: color 0.18s ease;
}
.analytics-scope .card-head button:hover {
  color: #003882 !important;
  text-decoration: underline;
}

.analytics-scope .custom-reset-btn {
  border: 0;
  background: transparent;
  color: #667085;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  transition: all 0.18s ease;
}
.analytics-scope .custom-reset-btn:hover {
  background: #f3f3fe;
  color: #0056c3;
}

.analytics-scope .chart-legend {
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 11.5px;
  color: #526079;
  font-weight: 700;
}
.analytics-scope .chart-legend i {
  display: inline-block;
  width: 14px;
  height: 3px;
  margin-right: 6px;
  vertical-align: middle;
  border-radius: 99px;
}
.analytics-scope .legend-blue { background: #1266eb; }
.analytics-scope .legend-orange { background: #fd661d; }

.analytics-scope .line-chart {
  width: 100%;
  height: 250px;
  display: block;
}
.analytics-scope .grid-line { stroke: #edf0f6; stroke-width: 1; }
.analytics-scope .axis-label { font-size: 10px; fill: #10172f; font-weight: 600; }
.analytics-scope .revenue-line { fill: none; stroke: #1266eb; stroke-width: 2.5; }
.analytics-scope .order-line { fill: none; stroke: #fd661d; stroke-width: 2; stroke-dasharray: 5 4; }
.analytics-scope .area-fill { fill: url(#areaGradient); }

/* Donut Cards (Egg / Oval / Ellipse Shape) */
.analytics-scope .donut-layout {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 14px;
}
.analytics-scope .donut {
  width: 115px;
  height: 150px;
  flex: 0 0 auto;
  border-radius: 50%;
  position: relative;
}
.analytics-scope .sales-donut {
  background: conic-gradient(
    #0056c3 0% 42%,
    #fd661d 42% 62%,
    #7d4ff2 62% 78%,
    #16a34a 78% 91%,
    #aeb7c7 91% 100%
  );
}
.analytics-scope .traffic-donut {
  background: conic-gradient(
    #0056c3 0% 37.9%,
    #16a34a 37.9% 67.9%,
    #7d4ff2 67.9% 85.2%,
    #fd661d 85.2% 95.1%,
    #aeb7c7 95.1% 100%
  );
}
.analytics-scope .donut::after {
  content: "";
  position: absolute;
  inset: 26px 18px;
  border-radius: 50%;
  background: #ffffff;
}
.analytics-scope .donut-center {
  position: absolute;
  inset: 0;
  z-index: 1;
  display: grid;
  place-content: center;
  text-align: center;
}
.analytics-scope .donut-center span {
  color: #10172f;
  font-size: 9px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: .02em;
}
.analytics-scope .donut-center strong {
  margin-top: 2px;
  font-size: 10px;
  font-weight: 600;
  color: #10172f;
}

.analytics-scope .legend-list {
  flex: 1;
  display: grid;
  gap: 8px;
}
.analytics-scope .legend-row {
  display: grid;
  grid-template-columns: 8px 1fr auto;
  gap: 8px;
  align-items: start;
}
.analytics-scope .legend-row i {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-top: 3px;
}
.analytics-scope .legend-row span {
  font-size: 11px;
  color: #10172f;
  font-weight: 600;
}
.analytics-scope .legend-row strong {
  font-size: 11px;
  font-weight: 600;
  color: #10172f;
  text-align: right;
}
.analytics-scope .legend-row small {
  grid-column: 2 / 4;
  margin-top: -3px;
  color: #10172f;
  font-size: 10px;
  font-weight: 600;
}

.analytics-scope .view-report {
  margin-top: 14px;
  text-align: center;
}
.analytics-scope .view-report button {
  border: 0;
  background: transparent;
  color: #0056c3 !important;
  font-size: 11.5px;
  font-weight: 800;
  padding: 0;
  cursor: pointer;
  transition: color 0.18s ease;
}
.analytics-scope .view-report button:hover {
  color: #003882 !important;
  text-decoration: underline;
}

/* Secondary KPI Row */
.analytics-scope .secondary-kpis {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 12px;
  margin-bottom: 18px;
}

.analytics-scope .tone-purple .kpi-icon { background: #efe9ff; color: #7b4ef4; }
.analytics-scope .tone-orange .kpi-icon { background: #fff0e3; color: #fd661d; }
.analytics-scope .tone-blue .kpi-icon { background: #e7efff; color: #0b63e8; }
.analytics-scope .tone-cyan .kpi-icon { background: #e3f7f7; color: #0d9fa5; }
.analytics-scope .tone-red .kpi-icon { background: #ffe8e9; color: #e5484d; }
.analytics-scope .tone-green .kpi-icon { background: #e3f8e8; color: #16a34a; }

/* Bottom Grid */
.analytics-scope .bottom-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(0, 1.15fr) minmax(0, 1.05fr);
  gap: 14px;
}
.analytics-scope .bottom-card {
  padding: 18px 20px;
  min-height: 340px;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border: 1px solid #dfe4ef;
  border-radius: 14px;
  box-shadow: 0 4px 14px rgba(25, 35, 70, 0.055);
}

.analytics-scope .top-products-card .card-head h3,
.analytics-scope .orders-card .card-head h3 {
  font-size: 15px;
  font-weight: 1000 !important;
  color: #191b23 !important;
}

.analytics-scope .table-scroll {
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden !important;
  -webkit-overflow-scrolling: touch;
}

.analytics-scope .orders-card,
.analytics-scope .top-products-card {
  min-height: auto;
}

.analytics-scope .orders-card .table-scroll,
.analytics-scope .top-products-card .table-scroll {
  overflow-y: hidden !important;
}

/* Top Products Table Layout matching uploaded design */
.analytics-scope .products-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  margin-top: 6px;
  min-width: 300px;
}
.analytics-scope .products-table thead tr {
  background: #f8f9fe;
}
.analytics-scope .products-table th {
  height: 38px;
  color: #191b23 !important;
  font-size: 12px;
  font-weight: 800 !important;
  text-transform: none;
  letter-spacing: 0;
  padding: 0 10px;
  border: 0;
  white-space: nowrap !important;
}
.analytics-scope .products-table th:first-child {
  border-radius: 8px 0 0 8px;
  text-align: left;
}
.analytics-scope .products-table th:nth-child(2) {
  text-align: right;
  padding-right: 16px;
  white-space: nowrap !important;
}
.analytics-scope .products-table th:last-child {
  border-radius: 0 8px 8px 0;
  text-align: right;
  padding-right: 10px;
  white-space: nowrap !important;
}
.analytics-scope .products-table td {
  height: 48px;
  border-bottom: 1px solid #f0f2f7;
  font-size: 13px;
  font-weight: 500;
  color: #10172f;
  padding: 0 10px;
  vertical-align: middle;
}
.analytics-scope .products-table tr:last-child td { border-bottom: 0; }

.analytics-scope .product-cell {
  display: flex;
  align-items: center;
  gap: 12px;
}
.analytics-scope .product-thumb {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: #f4f6fa;
  border: 1px solid #dfe4ef;
  display: grid;
  place-items: center;
  font-size: 17px;
  flex-shrink: 0;
}
.analytics-scope .product-cell strong {
  font-size: 13px;
  font-weight: 500;
  color: #10172f;
}
.analytics-scope .units-cell {
  text-align: right;
  padding-right: 16px;
  font-weight: 500;
  color: #10172f;
  white-space: nowrap !important;
}
.analytics-scope .amount-cell {
  text-align: right;
  padding-right: 10px;
  font-weight: 500;
  color: #10172f;
  white-space: nowrap !important;
}

/* Orders Table */
.analytics-scope .orders-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  margin-top: 6px;
}
.analytics-scope .orders-table thead tr {
  background: #f8f9fe;
}
.analytics-scope .orders-table th {
  height: 38px;
  color: #191b23 !important;
  font-size: 12px;
  font-weight: 800 !important;
  text-transform: none;
  letter-spacing: 0;
  padding: 0 10px;
  border: 0;
  white-space: nowrap !important;
}
.analytics-scope .orders-table th:first-child {
  border-radius: 8px 0 0 8px;
  text-align: left;
}
.analytics-scope .orders-table th:nth-child(2) {
  text-align: left;
}
.analytics-scope .orders-table th:nth-child(3) {
  text-align: right;
  padding-right: 14px;
}
.analytics-scope .orders-table th:last-child {
  border-radius: 0 8px 8px 0;
  text-align: right;
  padding-right: 10px;
}
.analytics-scope .orders-table td {
  height: 48px;
  border-bottom: 1px solid #f0f2f7;
  font-size: 12.5px;
  font-weight: 500;
  color: #10172f;
  padding: 0 10px;
  vertical-align: middle;
  white-space: nowrap;
}
.analytics-scope .orders-table td:nth-child(3) {
  text-align: right;
  padding-right: 14px;
}
.analytics-scope .orders-table td:last-child {
  text-align: right;
  padding-right: 10px;
}
.analytics-scope .orders-table tr:last-child td { border-bottom: 0; }
.analytics-scope .amount { font-weight: 500; color: #10172f; }

/* Acquisition Bar Chart */
.analytics-scope .acquisition-chart {
  height: 200px;
  padding: 12px 4px 0;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  gap: 12px;
  position: relative;
}
.analytics-scope .bar-group {
  flex: 1;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 6px;
  height: 160px;
  position: relative;
}
.analytics-scope .bar {
  width: 18px;
  border-radius: 4px 4px 0 0;
}
.analytics-scope .bar.blue { background: #0056c3; }
.analytics-scope .bar.green { background: #16a34a; }
.analytics-scope .bar-label {
  position: absolute;
  bottom: -22px;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  font-size: 10px;
  color: #667085;
  font-weight: 600;
}
.analytics-scope .bar-axis {
  position: absolute;
  left: 0;
  right: 0;
  border-top: 1px solid #edf0f6;
}
.analytics-scope .axis1 { bottom: 40px; }
.analytics-scope .axis2 { bottom: 80px; }
.analytics-scope .axis3 { bottom: 120px; }
.analytics-scope .acquisition-legend {
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  font-size: 11.5px;
  color: #526079;
  font-weight: 700;
  margin-bottom: 6px;
}
.analytics-scope .acquisition-legend i {
  display: inline-block;
  width: 14px;
  height: 3px;
  margin-right: 6px;
  vertical-align: middle;
  border-radius: 99px;
}

/* Status Pill */
.analytics-scope .status-pill {
  display: inline-flex;
  align-items: center;
  height: 22px;
  padding: 0 10px;
  border-radius: 999px;
  font-size: 10.5px;
  font-weight: 800;
}
.analytics-scope .delivered { background: #ddf7e4; color: #159a43; }
.analytics-scope .shipped { background: #e4efff; color: #1670e8; }
.analytics-scope .processing { background: #fff0df; color: #f07413; }
.analytics-scope .pending { background: #fff0df; color: #f07413; }

.analytics-scope .toast {
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

/* Mobile Products & Orders list */
.analytics-scope .mobile-products-list {
  display: none;
  flex-direction: column;
  gap: 8px;
  margin-top: 10px;
}
.analytics-scope .mobile-product-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px;
  background: #f8f9fe;
  border: 1px solid #edf0f6;
  border-radius: 10px;
  gap: 12px;
}
.analytics-scope .mobile-product-left {
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
  flex: 1;
}
.analytics-scope .mobile-product-info {
  display: flex;
  flex-direction: column;
  min-width: 0;
}
.analytics-scope .mobile-product-info strong {
  font-size: 12.5px;
  font-weight: 700;
  color: #10172f;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.analytics-scope .mobile-product-info small {
  font-size: 11px;
  color: #667085;
  font-weight: 500;
  margin-top: 2px;
}
.analytics-scope .mobile-product-right {
  text-align: right;
  flex-shrink: 0;
}
.analytics-scope .mobile-product-rev {
  font-size: 13px;
  font-weight: 700;
  color: #10172f;
}

.analytics-scope .mobile-orders-list {
  display: none;
  flex-direction: column;
  gap: 8px;
  margin-top: 10px;
}
.analytics-scope .mobile-order-card {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 10px 12px;
  background: #f8f9fe;
  border: 1px solid #edf0f6;
  border-radius: 10px;
}
.analytics-scope .mobile-order-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}
.analytics-scope .mobile-order-id {
  font-size: 12px;
  font-weight: 700;
  color: #0056c3;
  font-family: monospace;
}
.analytics-scope .mobile-order-body {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}
.analytics-scope .mobile-order-customer {
  display: flex;
  flex-direction: column;
}
.analytics-scope .mobile-order-customer small,
.analytics-scope .mobile-order-amount small {
  font-size: 10px;
  color: #667085;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.02em;
}
.analytics-scope .mobile-order-customer strong {
  font-size: 12.5px;
  font-weight: 600;
  color: #10172f;
  margin-top: 2px;
}
.analytics-scope .mobile-order-amount {
  text-align: right;
  display: flex;
  flex-direction: column;
}
.analytics-scope .mobile-order-amount strong {
  font-size: 13px;
  font-weight: 700;
  color: #10172f;
  margin-top: 2px;
}

@media(max-width:1420px){
  .analytics-scope .analytics-grid{grid-template-columns:1.5fr 1fr}
  .analytics-scope .analytics-grid .traffic-card{grid-column:1/3}
  .analytics-scope .bottom-grid{grid-template-columns:1fr 1fr}
  .analytics-scope .bottom-grid .orders-card{grid-column:1/3}
  .analytics-scope .kpi-grid{grid-template-columns:repeat(3,1fr)}
  .analytics-scope .secondary-kpis{grid-template-columns:repeat(3,1fr)}
}
@media(max-width:1049px){
  .analytics-scope .desktop-sidebar-wrapper{display:none !important}
  .analytics-scope .page{padding:14px 12px 28px !important}
  .analytics-scope .page-header{flex-direction:column;align-items:stretch;gap:12px;margin-bottom:16px}
  .analytics-scope .page-title h1{font-size:22px}
  .analytics-scope .page-actions{width:100%;display:grid;grid-template-columns:1fr 1fr;gap:8px}
  .analytics-scope .primary-btn, .analytics-scope .outline-btn{width:100%;height:38px;justify-content:center;font-size:12px}
}
@media(max-width:768px){
  .analytics-scope { max-width: 100vw; overflow-x: clip; }
  .analytics-scope .kpi-grid,.analytics-scope .secondary-kpis{grid-template-columns:repeat(2, minmax(0, 1fr)) !important;gap:8px !important}
  .analytics-scope .analytics-grid{grid-template-columns:1fr !important;gap:12px !important}
  .analytics-scope .analytics-grid .traffic-card{grid-column:auto}
  .analytics-scope .bottom-grid{grid-template-columns:1fr !important;gap:12px !important}
  .analytics-scope .bottom-grid .orders-card{grid-column:auto}
  .analytics-scope .card-head{flex-wrap:wrap;gap:8px}
  .analytics-scope .donut-layout{flex-direction:row;gap:14px;align-items:center;justify-content:space-around}
  .analytics-scope .modal-overlay { display: flex !important; align-items: center !important; justify-content: center !important; padding: 12px 10px !important; }
  .analytics-scope .modal { width: calc(100vw - 20px) !important; padding: 16px 14px !important; margin: auto !important; max-height: 86vh !important; overflow-y: auto !important; }

  .analytics-scope .table-scroll { display: none !important; }
  .analytics-scope .mobile-products-list { display: flex !important; }
  .analytics-scope .mobile-orders-list { display: flex !important; }
  
  .analytics-scope .acquisition-legend {
    flex-wrap: wrap !important;
    justify-content: flex-start !important;
    gap: 12px !important;
    margin-bottom: 10px !important;
    font-size: 11px !important;
  }
  .analytics-scope .acquisition-chart {
    height: 180px !important;
    gap: 4px !important;
    padding: 10px 2px 26px !important;
    overflow: visible !important;
  }
  .analytics-scope .bar-group {
    gap: 3px !important;
    height: 140px !important;
  }
  .analytics-scope .bar {
    width: 10px !important;
    min-width: 8px !important;
    border-radius: 3px 3px 0 0 !important;
  }
  .analytics-scope .bar-label {
    font-size: 8.5px !important;
    bottom: -22px !important;
    font-weight: 600 !important;
  }
}
@media(max-width:480px){
  .analytics-scope .page{padding:12px 10px 28px}
  .analytics-scope .page-title h1{font-size:21px}
  .analytics-scope .page-actions{grid-template-columns:1fr 1fr;gap:8px}
  .analytics-scope .kpi-grid,.analytics-scope .secondary-kpis{grid-template-columns:repeat(2, minmax(0, 1fr)) !important;gap:8px !important}
  .analytics-scope .donut-layout{flex-direction:row;gap:12px;align-items:center}
  .analytics-scope .legend-list{width:100%}
  .analytics-scope .line-chart{height:195px}
  .analytics-scope .bottom-card{padding:14px 12px;min-height:auto}

  .analytics-scope .acquisition-chart {
    gap: 2px !important;
    padding: 10px 0 26px !important;
  }
  .analytics-scope .bar-group {
    gap: 2px !important;
  }
  .analytics-scope .bar {
    width: 8px !important;
    min-width: 6px !important;
  }
  .analytics-scope .bar-label {
    font-size: 8px !important;
    bottom: -22px !important;
  }
}
`;

const topProducts = [
  { name: "Leather Tote Bag", icon: "👜", sold: 842, revenue: 842160 },
  { name: "Linen Blend Shirt (M)", icon: "👔", sold: 634, revenue: 634680 },
  { name: "Ceramic Vase Set", icon: "🏺", sold: 512, revenue: 512400 },
  { name: "Wireless Earbuds", icon: "🎧", sold: 478, revenue: 478900 },
  { name: "Vitamin C Serum", icon: "🧴", sold: 412, revenue: 412000 },
];

const recentOrders = [
  { id: "#AMH1250", customer: "Priya Sharma", amount: 2549, status: "Delivered" },
  { id: "#AMH1249", customer: "Arjun Mehta", amount: 1299, status: "Shipped" },
  { id: "#AMH1248", customer: "Sneha Iyer", amount: 3199, status: "Processing" },
  { id: "#AMH1247", customer: "Karan Verma", amount: 899, status: "Pending" },
  { id: "#AMH1246", customer: "Ananya Rao", amount: 1199, status: "Delivered" },
];

const revenueSeries = [70, 82, 120, 137, 121, 95, 80, 74, 92, 130, 168, 183, 165, 158, 121, 88, 75, 87, 96];
const orderSeries = [78, 72, 88, 95, 82, 70, 77, 104, 126, 130, 115, 124, 141, 148, 132, 98, 54, 49, 55];

function buildSmoothPath(values, width, height, padX = 38, padY = 24) {
  const max = Math.max(...values);
  const min = Math.min(...values);
  const span = max - min || 1;
  const pts = values.map((v, i) => ({
    x: padX + (i / (values.length - 1)) * (width - padX * 2),
    y: padY + (1 - (v - min) / span) * (height - padY * 2)
  }));

  if (pts.length < 2) return "";

  let d = `M ${pts[0].x} ${pts[0].y}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i];
    const p1 = pts[i + 1];
    const cx = (p0.x + p1.x) / 2;
    d += ` C ${cx} ${p0.y}, ${cx} ${p1.y}, ${p1.x} ${p1.y}`;
  }
  return d;
}

function RevenueOverview() {
  const [period, setPeriod] = useState("Weekly");
  const [isCustom, setIsCustom] = useState(false);
  const [customRange, setCustomRange] = useState("Aug 12 – Aug 19, 2026");

  const dropdownOptions = [
    { label: "Daily", value: "Daily", action: () => { setPeriod("Daily"); setIsCustom(false); } },
    { label: "Weekly", value: "Weekly", action: () => { setPeriod("Weekly"); setIsCustom(false); } },
    { label: "Monthly", value: "Monthly", action: () => { setPeriod("Monthly"); setIsCustom(false); } },
    { label: "Yearly", value: "Yearly", action: () => { setPeriod("Yearly"); setIsCustom(false); } },
    { label: "Custom Date...", value: "Custom Date...", action: () => { setIsCustom(true); } },
  ];

  const width = 620;
  const height = 245;
  const revenuePath = buildSmoothPath(revenueSeries, width, height);
  const orderPath = buildSmoothPath(orderSeries, width, height);

  return (
    <section className="card chart-card">
      <div className="card-head">
        <h3>Revenue Overview</h3>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div className="chart-legend">
            <span><i className="legend-blue" />Revenue</span>
            <span><i className="legend-orange" />Orders</span>
          </div>

          <div>
            {!isCustom ? (
              <MasterDropdown
                options={dropdownOptions}
                value={period}
                rightAlign
              />
            ) : (
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <MasterDatePicker value={customRange} onChange={setCustomRange} />
                <button
                  type="button"
                  className="custom-reset-btn"
                  onClick={() => setIsCustom(false)}
                  title="Back to Presets"
                >
                  <FiRotateCcw size={14} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <svg className="line-chart" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none">
        <defs>
          <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1266eb" stopOpacity=".18" />
            <stop offset="100%" stopColor="#1266eb" stopOpacity="0" />
          </linearGradient>
        </defs>

        {[40, 80, 120, 160, 200].map(y => <line key={y} x1="38" x2="590" y1={y} y2={y} className="grid-line" />)}

        <text x="6" y="43" className="axis-label">₹2L</text>
        <text x="6" y="83" className="axis-label">₹1.5L</text>
        <text x="6" y="123" className="axis-label">₹1L</text>
        <text x="6" y="163" className="axis-label">₹50K</text>
        <text x="10" y="203" className="axis-label">₹0</text>

        <text x="592" y="43" className="axis-label">120</text>
        <text x="592" y="83" className="axis-label">90</text>
        <text x="592" y="123" className="axis-label">60</text>
        <text x="592" y="163" className="axis-label">30</text>
        <text x="592" y="203" className="axis-label">0</text>

        <path d={`${revenuePath} L 582 221 L 38 221 Z`} className="area-fill" />
        <path d={revenuePath} className="revenue-line" />
        <path d={orderPath} className="order-line" />

        {["May 12", "May 13", "May 14", "May 15", "May 16", "May 17", "May 18"].map((label, i) => (
          <text key={label} x={55 + i * 82} y="235" className="axis-label">{label}</text>
        ))}
      </svg>
    </section>
  );
}

function LegendList({ items }) {
  return (
    <div className="legend-list">
      {items.map(item => (
        <div className="legend-row" key={item.label}>
          <i style={{ background: item.color }} />
          <span>{item.label}</span>
          <strong>{item.percent}</strong>
          <small>{item.value}</small>
        </div>
      ))}
    </div>
  );
}

// Master Reusable Donut Overview Component for Category & Traffic Overviews
function DonutOverviewCard({
  title,
  donutClass,
  centerLabel,
  centerValue,
  items,
  onViewAll,
}) {
  return (
    <section className="card chart-card donut-card">
      <div className="card-head">
        <h3>{title}</h3>
        <button type="button" onClick={onViewAll}>View all</button>
      </div>

      <div className="donut-chart-body">
        <MasterPieChart
          centerTitle={centerLabel}
          centerValue={centerValue}
          data={items}
          shape="circle"
        />
      </div>
    </section>
  );
}

function SalesByCategory() {
  const items = [
    { label: "Fashion", percent: "42%", value: "₹5,24,890", color: "#0056c3" },
    { label: "Accessories", percent: "20%", value: "₹2,45,600", color: "#fd661d" },
    { label: "Home & Living", percent: "16%", value: "₹2,01,430", color: "#7d4ff2" },
    { label: "Beauty", percent: "13%", value: "₹1,56,290", color: "#16a34a" },
    { label: "Others", percent: "9%", value: "₹1,17,680", color: "#10172f" },
  ];

  return (
    <DonutOverviewCard
      title="Sales by Category"
      donutClass="sales-donut"
      centerLabel="Total Sales"
      centerValue="₹12,45,890"
      items={items}
    />
  );
}

function TrafficOverview() {
  const items = [
    { label: "Direct", percent: "37.9%", value: "12,456", color: "#0056c3" },
    { label: "Organic Search", percent: "30.0%", value: "9,876", color: "#16a34a" },
    { label: "Social Media", percent: "17.3%", value: "5,687", color: "#7d4ff2" },
    { label: "Referral", percent: "9.9%", value: "3,256", color: "#fd661d" },
    { label: "Other", percent: "4.8%", value: "1,581", color: "#10172f" },
  ];

  return (
    <DonutOverviewCard
      title="Traffic Overview"
      donutClass="traffic-donut"
      centerLabel="Total Sessions"
      centerValue="32,856"
      items={items}
    />
  );
}

function TopSellingProducts() {
  return (
    <section className="card bottom-card top-products-card">
      <div className="card-head">
        <h3>Top Selling Products</h3>
        <button type="button">View all</button>
      </div>

      <div className="table-scroll">
        <table className="products-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Units Sold</th>
              <th>Revenue</th>
            </tr>
          </thead>
          <tbody>
            {topProducts.map(product => (
              <tr key={product.name}>
                <td>
                  <div className="product-cell">
                    <span className="product-thumb">{product.icon}</span>
                    <strong>{product.name}</strong>
                  </div>
                </td>
                <td className="units-cell">{product.sold.toLocaleString("en-IN")}</td>
                <td className="amount-cell">₹{product.revenue.toLocaleString("en-IN")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card List for screens <= 768px */}
      <div className="mobile-products-list">
        {topProducts.map((product) => (
          <div className="mobile-product-card" key={product.name}>
            <div className="mobile-product-left">
              <span className="product-thumb">{product.icon}</span>
              <div className="mobile-product-info">
                <strong>{product.name}</strong>
                <small>{product.sold.toLocaleString("en-IN")} units sold</small>
              </div>
            </div>
            <div className="mobile-product-right">
              <span className="mobile-product-rev">₹{product.revenue.toLocaleString("en-IN")}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CustomerAcquisition() {
  const bars = [
    ["May 12", 58, 108],
    ["May 13", 82, 76],
    ["May 14", 54, 86],
    ["May 15", 96, 64],
    ["May 16", 66, 100],
    ["May 17", 71, 95],
    ["May 18", 48, 104],
  ];

  return (
    <section className="card bottom-card">
      <div className="card-head">
        <h3>Customer Acquisition</h3>
        <button type="button">View all</button>
      </div>

      <div className="acquisition-legend">
        <span><i style={{ background: "#0056c3" }} />New Customers</span>
        <span><i style={{ background: "#16a34a" }} />Returning Customers</span>
      </div>

      <div className="acquisition-chart">
        <div className="bar-axis axis1" />
        <div className="bar-axis axis2" />
        <div className="bar-axis axis3" />
        {bars.map(([label, blue, green]) => (
          <div className="bar-group" key={label}>
            <div className="bar blue" style={{ height: `${blue}px` }} />
            <div className="bar green" style={{ height: `${green}px` }} />
            <span className="bar-label">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function RecentOrders() {
  return (
    <section className="card bottom-card orders-card">
      <div className="card-head">
        <h3>Recent Orders</h3>
        <button type="button">View all orders</button>
      </div>

      <div className="table-scroll">
        <table className="orders-table">
          <thead>
            <tr><th>Order ID</th><th>Customer</th><th>Amount</th><th>Status</th></tr>
          </thead>
          <tbody>
            {recentOrders.map(order => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customer}</td>
                <td className="amount">₹{order.amount.toLocaleString("en-IN")}</td>
                <td>
                  <span className={`status-pill ${order.status.toLowerCase()}`}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Orders List for screens <= 768px */}
      <div className="mobile-orders-list">
        {recentOrders.map((order) => (
          <div className="mobile-order-card" key={order.id}>
            <div className="mobile-order-head">
              <span className="mobile-order-id">{order.id}</span>
              <span className={`status-pill ${order.status.toLowerCase()}`}>
                {order.status}
              </span>
            </div>
            <div className="mobile-order-body">
              <div className="mobile-order-customer">
                <small>Customer</small>
                <strong>{order.customer}</strong>
              </div>
              <div className="mobile-order-amount">
                <small>Amount</small>
                <strong className="amount">₹{order.amount.toLocaleString("en-IN")}</strong>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function AnalyticsManagement() {
  const [dateFilter, setDateFilter] = useState("Last 7 Days");
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

  const exportReport = () => {
    const csvRows = [
      ["Metric", "Value"],
      ["Total Revenue", "₹12,45,890"],
      ["Orders", "1,248"],
      ["Customers", "982"],
      ["Average Order Value", "₹1,238"],
      ["Conversion Rate", "3.42%"],
      ["New Customers", "256"],
      ["Returning Customers", "726"],
      ["Customer Lifetime Value", "₹4,780"],
      ["Refunds", "24"],
      ["Abandoned Carts", "86"],
    ];
    const csv = csvRows.map(row => row.map(value => `"${String(value).replaceAll('"', '""')}"`).join(",")).join("\n");
    const url = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = "analytics-report.csv";
    a.click();
    URL.revokeObjectURL(url);

    setToast("Analytics report exported successfully.");
    clearTimeout(window.__analyticsToast);
    window.__analyticsToast = setTimeout(() => setToast(""), 2200);
  };

  // Top KPI Cards Array using Master KpiCard component format
  const topKpis = [
    ["Total Revenue", "₹12,45,890", "+18.2%", "vs last 7 days", "purple", FiActivity],
    ["Orders", "1,248", "+12.5%", "vs last 7 days", "orange", FiShoppingBag],
    ["Customers", "982", "+9.4%", "vs last 7 days", "blue", FiUsers],
    ["Avg. Order Value", "₹1,238", "+5.7%", "vs last 7 days", "cyan", FiBox],
    ["Conversion Rate", "3.42%", "+0.8%", "vs last 7 days", "green", FiTrendingUp],
  ];

  // Secondary KPI Cards Array using Master KpiCard component format
  const secondaryKpis = [
    ["New Customers", "256", "+14.2%", "vs last 7 days", "purple", FiUsers],
    ["Returning Customers", "726", "+8.6%", "vs last 7 days", "cyan", FiRefreshCw],
    ["Customer Lifetime Value", "₹4,780", "+11.3%", "vs last 7 days", "blue", FiUserCheck],
    ["Refunds", "24", "-8.3%", "vs last 7 days", "red", FiBox],
    ["Abandoned Carts", "86", "-12.7%", "vs last 7 days", "orange", FiShoppingBag],
  ];

  return (
    <div className="analytics-scope">
      <style>{styles}</style>
      <div className="admin-shell">
        {desktopSidebarOpen && (
          <div className="desktop-sidebar-wrapper">
            <AdminSidebar activePage="Analytics" onClose={() => setDesktopSidebarOpen(false)} />
          </div>
        )}
        <AnimatePresence>
          {mobileMenuOpen && (
            <AdminSidebar activePage="Analytics" mobile onClose={() => setMobileMenuOpen(false)} />
          )}
        </AnimatePresence>

        <main className="dashboard-main">
          <AdminTopbar onToggleSidebar={handleToggleMenu} desktopSidebarOpen={desktopSidebarOpen} />

          <div className="page">
            {/* Page Header */}
            <div className="page-header">
              <div className="page-title">
                <h1>Analytics Management</h1>
                <p>Track your store performance, revenue breakdown, customer acquisition and key metrics.</p>
              </div>

              <div className="page-actions">
                <MasterDatePicker value={dateFilter} onChange={setDateFilter} />
                <button className="primary-btn" onClick={exportReport}>
                  <FiDownload size={15} /> Export Report
                </button>
              </div>
            </div>

            {/* Top KPI Cards Grid using master KpiCard */}
            <section className="kpi-grid">
              {topKpis.map(x => (
                <KpiCard key={x[0]} item={x} />
              ))}
            </section>

            {/* Main Analytics Row (Revenue Line Chart + Category Donut + Traffic Donut) */}
            <section className="analytics-grid">
              <RevenueOverview />
              <SalesByCategory />
              <TrafficOverview />
            </section>

            {/* Secondary KPI Cards Grid using master KpiCard */}
            <section className="secondary-kpis">
              {secondaryKpis.map(x => (
                <KpiCard key={x[0]} item={x} />
              ))}
            </section>

            {/* Bottom 3-Column Grid */}
            <section className="bottom-grid">
              <TopSellingProducts />
              <CustomerAcquisition />
              <RecentOrders />
            </section>
          </div>
        </main>
      </div>

      {/* Toast Notification */}
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
