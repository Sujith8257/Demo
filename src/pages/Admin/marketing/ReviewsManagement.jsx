import React, { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AdminSidebar from "../../../components/Admin/AdminSidebar";
import AdminTopbar from "../../../components/Admin/AdminTopbar";
import KpiCard from "../../../components/Admin/KpiCard";
import MasterDropdown from "../../../components/Admin/MasterDropdown";
import IntegrationDetailsDrawer from "../../../components/Admin/IntegrationDetailsDrawer";
import MobileTableCards, { MobileTableCard } from "../../../components/Admin/MobileTableCards";
import MasterDatePicker from "../../../components/Admin/MasterDatePicker";
import MasterPieChart from "../../../components/Admin/MasterPieChart";
import {
  FiAlertCircle,
  FiAlertTriangle,
  FiBarChart2,
  FiCheckCircle,
  FiChevronLeft,
  FiChevronRight,
  FiClock,
  FiDownload,
  FiEdit2,
  FiEye,
  FiFileText,
  FiFilter,
  FiFlag,
  FiHelpCircle,
  FiInfo,
  FiMessageSquare,
  FiMoreVertical,
  FiPlus,
  FiRefreshCw,
  FiSearch,
  FiShield,
  FiStar,
  FiThumbsDown,
  FiTrash2,
  FiTrendingDown,
  FiTrendingUp,
  FiX,
} from "react-icons/fi";

const reviewsCss = `
.reviews-scope {
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

.reviews-scope * { box-sizing: border-box; }
.reviews-scope *::-webkit-scrollbar,
.modal::-webkit-scrollbar,
.modal *::-webkit-scrollbar {
  display: none !important;
  width: 0 !important;
  height: 0 !important;
}
.reviews-scope *,
.modal,
.modal * {
  scrollbar-width: none !important;
  -ms-overflow-style: none !important;
}
.reviews-shell { min-height: 100vh; display: flex; background: var(--admin-surface); color: var(--admin-text); font-family: 'Manrope', system-ui, sans-serif; }
.reviews-main { flex: 1; min-width: 0; display: flex; flex-direction: column; }
.reviews-content { padding: 24px 28px 36px; }

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
  .reviews-scope .desktop-sidebar-wrapper { display: none !important; }
}

@media (max-width: 768px) {
  .reviews-scope { max-width: 100vw; overflow-x: clip; }
  .reviews-content { padding: 14px 12px 28px !important; max-width: 100vw; overflow-x: clip; box-sizing: border-box; }
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
  .kpi-grid {
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
  .rating-layout {
    flex-direction: row !important;
    align-items: center !important;
    justify-content: space-between !important;
    gap: 14px !important;
    padding: 6px 0 !important;
  }
  .rating-donut {
    width: 116px !important;
    height: 116px !important;
    flex: 0 0 116px !important;
  }
  .rating-donut::after {
    inset: 18px !important;
  }
  .rating-legend {
    flex: 1 !important;
    min-width: 0 !important;
  }
  .product-ranking, .reply-list, .note-list {
    gap: 8px !important;
    margin-top: 4px !important;
  }
  .ranking-row, .reply-row, .note-row {
    padding: 10px 12px !important;
    border-radius: 10px !important;
    min-height: auto !important;
  }
  .reply-row {
    align-items: flex-start !important;
  }
  .note-row {
    align-items: flex-start !important;
  }
  .reply-copy p {
    font-size: 11px !important;
    line-height: 1.4 !important;
    margin-top: 3px !important;
    display: -webkit-box !important;
    -webkit-line-clamp: 2 !important;
    -webkit-box-orient: vertical !important;
    overflow: hidden !important;
    white-space: normal !important;
  }
  .note-copy strong {
    font-size: 12px !important;
    line-height: 1.35 !important;
    word-break: break-word !important;
  }
  .modal-overlay {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    padding: 12px 10px !important;
  }
  .modal, .modal-responsive {
    width: calc(100vw - 20px) !important;
    padding: 16px 14px !important;
    margin: auto !important;
    max-height: 86vh !important;
    overflow-y: auto !important;
  }
}

@media (max-width: 480px) {
  .pagehead > div:last-child { width: 100% !important; display: grid !important; grid-template-columns: 1fr 1fr !important; gap: 8px !important; }
  .primarybtn, .secondarybtn { flex: 1 !important; justify-content: center !important; height: 38px !important; }
}

/* Master Panel Styles */
.panel-section { margin-bottom: 16px; }
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

/* Table Styles */
.table-scroll { width: 100%; overflow-x: auto; }
.review-table { width: 100%; min-width: 960px; border-collapse: collapse; border-spacing: 0; }
.review-table th, .review-table td { box-sizing: border-box; }
.review-table thead tr { height: 44px; }
.review-table tbody tr { height: 60px; box-sizing: border-box; }
.review-table th { height: 44px; background: #f3f3fe; color: #191b23; text-align: left; font-size: 12px; font-weight: 800; border-bottom: 1px solid #ededf8; text-transform: uppercase; letter-spacing: .04em; padding: 0 18px; white-space: nowrap; vertical-align: middle; }
.review-table td { height: 60px; border-bottom: 1px solid #ededf8; font-size: 12.5px; font-weight: 500; color: #191b23; padding: 0 18px; white-space: nowrap; vertical-align: middle; }
.review-table td strong { color: #191b23; font-weight: 500; font-size: 13px; }
.review-table td small { color: #191b23; font-weight: 500; font-size: 11px; }
.review-table td div { font-weight: 500; }
.review-table th:first-child, .review-table td:first-child { width: 48px; padding-left: 18px; padding-right: 8px; text-align: center; border-top-left-radius: 10px; }
.review-table th:last-child, .review-table td:last-child { width: 130px; padding: 0 14px; text-align: center; border-top-right-radius: 10px; }

.reviewer-cell { display: flex; align-items: center; gap: 10px; height: 100%; }
.reviewer-avatar { width: 34px; height: 34px; border-radius: 50%; display: grid; place-items: center; font-size: 11px; font-weight: 800; flex-shrink: 0; }
.avatar-blue { background: #e3edff; color: #0056c3; }
.avatar-indigo { background: #e9efff; color: #365ba0; }
.avatar-gold { background: #fff0d7; color: #d77a00; }
.avatar-cyan { background: #e8f7fa; color: #426d7b; }
.avatar-orange { background: #ffdbce; color: #fd661d; }
.avatar-red { background: #ffe8eb; color: #D32F2F; }

.reviewer-copy { display: flex; flex-direction: column; justify-content: center; line-height: 1.25; }
.reviewer-copy strong { display: block; color: var(--admin-text); font-size: 13px; font-weight: 500; margin: 0; padding: 0; line-height: 1.2; }
.reviewer-copy span { display: block; margin-top: 2px; color: var(--admin-muted); font-size: 11px; margin: 0; padding: 0; line-height: 1.2; font-weight: 500; }

.product-cell { display: flex; align-items: center; gap: 10px; height: 100%; }
.product-thumb { width: 36px; height: 38px; border-radius: 6px; overflow: hidden; border: 1px solid var(--admin-outline); background: #f6f7fa; flex-shrink: 0; }
.product-thumb img { width: 100%; height: 100%; object-fit: contain; }
.product-copy strong { display: block; color: var(--admin-text); font-size: 13px; font-weight: 500; margin: 0; padding: 0; line-height: 1.2; }
.product-copy span { display: block; margin-top: 2px; color: var(--admin-muted); font-size: 11px; margin: 0; padding: 0; line-height: 1.2; font-weight: 500; }

.rating-stars { display: flex; align-items: center; gap: 2px; }
.star { color: #f5a000; font-size: 14px; line-height: 1; }
.star.empty { color: #dfe3ea; }

.review-copy { max-width: 220px; }
.review-copy strong { display: block; color: var(--admin-text); font-size: 12.5px; font-weight: 500; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.review-copy span { display: block; margin-top: 2px; color: var(--admin-muted); font-size: 11px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-weight: 500; }

.status-pill { display: inline-flex; align-items: center; justify-content: center; height: 24px; padding: 0 12px; border-radius: 999px; font-size: 11px; font-weight: 800; white-space: nowrap; }
.status-pill.published { background: #def6e5; color: #138a42; }
.status-pill.pending { background: #fff0d8; color: #d66c00; }
.status-pill.flagged { background: #ffe8eb; color: #D32F2F; }

.response-pill { display: inline-flex; align-items: center; justify-content: center; height: 24px; padding: 0 10px; border-radius: 999px; font-size: 11px; font-weight: 800; background: #def6e5; color: #138a42; }

.rowactions { display: flex; align-items: center; justify-content: center; gap: 6px; }
.rowactions button { width: 34px; height: 34px; border-radius: 8px; border: 1px solid var(--admin-outline); background: #ffffff; color: var(--admin-text); display: grid; place-items: center; font-size: 15px; cursor: pointer; transition: all .18s ease; }
.rowactions button:hover { background: #f3f3fe; border-color: var(--admin-primary-2); color: var(--admin-primary-2); }

.row-menu { position: absolute; right: 0; top: 36px; width: 160px; z-index: 40; padding: 6px; border: 1px solid var(--admin-outline); border-radius: 8px; background: #fff; box-shadow: var(--admin-shadow); }
.row-menu button { width: 100%; height: 32px; padding: 0 10px; border: 0; border-radius: 6px; background: transparent; text-align: left; font-size: 12px; font-weight: 600; color: var(--admin-text); cursor: pointer; }
.row-menu button:hover { background: #f5f7fb; color: var(--admin-primary-2); }

.footerbar { display: flex; align-items: center; justify-content: space-between; padding: 12px 16px; border-top: 1px solid #ededf8; font-size: 12px; font-weight: 600; color: var(--admin-text); }
.footerbar .pagination { display: flex; gap: 4px; }
.footerbar .pagination button { min-width: 32px; height: 32px; padding: 0 6px; border: 1px solid var(--admin-outline); background: #ffffff; border-radius: 6px; font-size: 12px; font-weight: 700; cursor: pointer; }
.footerbar .pagination button.active { background: var(--admin-primary-2); color: #ffffff; border-color: var(--admin-primary-2); }

/* Mobile Cards */
.mobile-review-list { display: none; padding: 12px; flex-direction: column; gap: 10px; }
@media (max-width: 980px) {
  .table-scroll { display: none; }
  .mobile-review-list { display: flex; }
}
.mobile-review-card { border: 1px solid var(--admin-outline); border-radius: 10px; padding: 12px; background: #ffffff; display: flex; flex-direction: column; gap: 10px; }
.mobile-review-head { display: flex; align-items: center; justify-content: space-between; gap: 10px; }
.mobile-reviewer-title strong { display: block; font-size: 13px; font-weight: 700; color: var(--admin-text); }
.mobile-reviewer-title span { display: block; font-size: 11px; color: var(--admin-muted); font-weight: 500; }
.mobile-review-meta { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 11.5px; }
.mobile-meta { padding: 8px; border-radius: 8px; background: #f8f9fc; border: 1px solid var(--admin-surface-mid); }
.mobile-meta span { display: block; color: var(--admin-muted); font-size: 10px; font-weight: 600; }
.mobile-meta strong { display: block; margin-top: 2px; font-size: 11.5px; font-weight: 500; }
.mobile-review-actions { display: flex; gap: 8px; }
.mobile-review-actions button { flex: 1; height: 36px; border: 1px solid var(--admin-outline); background: #fff; border-radius: 8px; font-weight: 700; font-size: 12px; display: flex; align-items: center; justify-content: center; gap: 6px; cursor: pointer; }

/* 3-Column Summary Cards Grid (Below Table) */
.summary-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-bottom: 16px; }
@media (max-width: 1200px) {
  .summary-grid { grid-template-columns: 1fr; }
  .bottom-grid { grid-template-columns: 1fr; }
}
.side-card { padding: 16px; background: #fff; border: 1px solid var(--admin-outline); border-radius: 12px; box-shadow: var(--admin-shadow); display: flex; flex-direction: column; }
.card-head { display: flex; align-items: center; justify-content: space-between; gap: 10px; margin-bottom: 12px; }
.card-head h3 { margin: 0; font-size: 14px; font-weight: 800; color: #10172f; }
.card-head button { border: 0; background: transparent; color: #0056c3; font-size: 11.5px; font-weight: 800; cursor: pointer; padding: 0; transition: opacity 0.18s ease; }
.card-head button:hover { opacity: 0.8; text-decoration: underline; }

.rating-layout { display: flex; align-items: center; gap: 16px; margin: auto 0; padding: 6px 0; }
.rating-donut { width: 105px; height: 140px; flex: 0 0 auto; border-radius: 50%; background: conic-gradient(#16a34a 0% 60.1%, #84cc16 60.1% 85.9%, #f59e0b 85.9% 94.5%, #f97316 94.5% 98.1%, #ef4444 98.1% 100%); position: relative; display: grid; place-items: center; }
.rating-donut::after { content: ""; position: absolute; inset: 24px 16px; border-radius: 50%; background: #fff; }
.rating-donut .donut-center { position: relative; z-index: 2; text-align: center; }
.rating-donut .donut-center span { display: block; font-size: 8.5px; font-weight: 900; color: #10172f; text-transform: uppercase; letter-spacing: .02em; white-space: nowrap; }
.rating-donut .donut-center strong { display: block; font-size: 13px; font-weight: 500; color: #10172f; margin-top: 3px; white-space: nowrap; }
.rating-legend { display: grid; gap: 8px; flex: 1; }
.rating-legend .legend-row { display: grid; grid-template-columns: 8px 1fr auto auto; gap: 8px; align-items: center; font-size: 11.5px; }
.rating-legend .legend-row span { font-size: 11.5px; font-weight: 600; color: #10172f; }
.rating-legend .legend-row strong { font-size: 11.5px; font-weight: 500; color: #10172f; }
.rating-legend .legend-row em { font-size: 11px; font-weight: 500; color: #64748b; font-style: normal; }

.flagged-list { display: grid; gap: 8px; margin-top: 6px; }
.flagged-row { display: flex; align-items: center; gap: 10px; padding: 8px 12px; border: 1px solid #ededf8; border-radius: 9px; background: #ffffff; transition: all 0.18s ease; cursor: pointer; }
.flagged-row:hover { background: #f8faff; border-color: #c2c6d5; box-shadow: 0 2px 6px rgba(0,0,0,.04); }
.flagged-avatar { width: 32px; height: 32px; border-radius: 8px; display: grid; place-items: center; background: #e7efff; color: #0056c3; font-size: 12px; font-weight: 800; border: 1px solid #dfe4ef; flex-shrink: 0; }
.flagged-copy { flex: 1; min-width: 0; }
.flagged-copy strong { display: block; font-size: 12px; font-weight: 700; color: #10172f; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.flagged-copy span { display: block; margin-top: 1px; color: #64748b; font-size: 10.5px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.flagged-right { margin-left: auto; text-align: right; flex-shrink: 0; }
.flagged-date { font-size: 10.5px; color: #64748b; margin-top: 2px; display: block; }

.sentiment-summary { display: grid; gap: 4px; }
.sentiment-summary-head, .sentiment-summary-row { display: grid; grid-template-columns: 1fr 68px 48px; gap: 8px; align-items: center; }
.sentiment-summary-head { padding-bottom: 6px; border-bottom: 1px solid #edf0f6; color: #10172f; font-size: 11px; font-weight: 700; }
.sentiment-summary-row { padding: 4px 0; border-bottom: 1px solid rgba(237, 240, 246, 0.6); }
.sentiment-summary-row:last-child { border-bottom: 0; }
.sentiment-bar-wrap { width: 100%; height: 4px; background: #f1f5f9; border-radius: 99px; overflow: hidden; display: flex; margin-top: 3px; }
.sentiment-bar { height: 4px; border-radius: 99px; }
.sentiment-stats { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 10px; padding-top: 8px; border-top: 1px solid #ededf8; }
.mini-stat { padding: 8px 10px; border: 1px solid var(--admin-surface-mid); border-radius: 8px; background: #f8f9fc; }
.mini-stat span { display: block; color: var(--admin-muted); font-size: 10px; font-weight: 600; }
.mini-stat strong { display: inline-block; margin-top: 2px; font-size: 13px; font-weight: 800; color: #10172f; }
.mini-stat em { margin-left: 6px; color: #16a34a; font-style: normal; font-size: 10.5px; font-weight: 800; }

/* Bottom Grid Cards */
.bottom-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; align-items: stretch; }
.bottom-card { padding: 16px; background: #fff; border: 1px solid var(--admin-outline); border-radius: 12px; box-shadow: var(--admin-shadow); display: flex; flex-direction: column; height: 100%; }

.product-ranking { display: flex; flex-direction: column; gap: 8px; flex: 1; margin-top: 6px; justify-content: space-between; }
.ranking-row { display: flex; align-items: center; gap: 10px; padding: 10px 12px; border: 1px solid #ededf8; border-radius: 9px; background: #ffffff; flex: 1; min-height: 58px; transition: all 0.18s ease; cursor: pointer; }
.ranking-row:hover { background: #f8faff; border-color: #c2c6d5; box-shadow: 0 2px 6px rgba(0,0,0,.04); }
.rank-number { width: 26px; height: 26px; border-radius: 6px; background: #f8faff; border: 1px solid #dfe4ef; display: grid; place-items: center; font-size: 11.5px; font-weight: 800; color: #0056c3; flex-shrink: 0; }
.rank-thumb { width: 36px; height: 36px; border-radius: 8px; overflow: hidden; border: 1px solid #dfe4ef; background: #f8faff; display: grid; place-items: center; flex-shrink: 0; }
.rank-thumb img { width: 100%; height: 100%; object-fit: contain; }
.rank-info { flex: 1; min-width: 0; }
.rank-info strong { display: block; font-size: 12.5px; font-weight: 700; color: #10172f; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.rank-info small { display: block; font-size: 11px; color: #64748b; margin-top: 2px; }
.rank-rating { font-size: 11.5px; font-weight: 800; color: #16a34a; background: #f0fdf4; padding: 3px 8px; border-radius: 5px; border: 1px solid #dcfce7; flex-shrink: 0; }

.reply-list { display: flex; flex-direction: column; gap: 8px; flex: 1; margin-top: 6px; justify-content: space-between; }
.reply-row { display: flex; align-items: flex-start; gap: 10px; padding: 10px 12px; border: 1px solid #ededf8; border-radius: 9px; background: #ffffff; flex: 1; min-height: 58px; transition: all 0.18s ease; cursor: pointer; }
.reply-row:hover { background: #f8faff; border-color: #c2c6d5; box-shadow: 0 2px 6px rgba(0,0,0,.04); }
.reply-thumb { width: 36px; height: 36px; border-radius: 8px; overflow: hidden; border: 1px solid #dfe4ef; background: #f8faff; display: grid; place-items: center; flex-shrink: 0; }
.reply-thumb img { width: 100%; height: 100%; object-fit: contain; }
.reply-copy { flex: 1; min-width: 0; }
.reply-copy strong { display: block; font-size: 12.5px; font-weight: 700; color: #10172f; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.reply-copy span { display: block; margin-top: 1px; color: #64748b; font-size: 10.5px; }
.reply-copy p { margin: 2px 0 0; color: #4b5563; font-size: 11px; line-height: 1.35; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

.note-list { display: flex; flex-direction: column; gap: 8px; flex: 1; margin-top: 6px; justify-content: space-between; }
.note-row { display: flex; align-items: center; gap: 10px; padding: 10px 12px; border: 1px solid #ededf8; border-radius: 9px; background: #ffffff; flex: 1; min-height: 58px; transition: all 0.18s ease; cursor: pointer; }
.note-row:hover { background: #f8faff; border-color: #c2c6d5; box-shadow: 0 2px 6px rgba(0,0,0,.04); }
.note-icon { width: 36px; height: 36px; border-radius: 8px; display: grid; place-items: center; font-size: 15px; flex-shrink: 0; }
.note-icon.orange { background: #fff0d7; color: #d77a00; border: 1px solid #ffe1b5; }
.note-icon.green { background: #ddf6e4; color: #0b6b1d; border: 1px solid #c0ebd0; }
.note-icon.blue { background: #e3edff; color: #0056c3; border: 1px solid #cadcff; }
.note-copy { flex: 1; min-width: 0; }
.note-copy strong { display: block; font-size: 12.5px; font-weight: 500; color: #10172f; line-height: 1.35; }
.note-copy span { display: block; margin-top: 2px; color: #64748b; font-size: 10.5px; font-weight: 400; }
.reviews-scope .reviews-split {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  align-items: start;
  margin-bottom: 18px;
  transition: grid-template-columns 0.25s ease;
}
.reviews-scope .reviews-split.has-selected {
  grid-template-columns: minmax(0, 1.62fr) minmax(330px, 0.78fr);
}
.reviews-scope .review-table tr { transition: background 0.18s ease; }
.reviews-scope .review-table tr.selected { background: #f0f5ff; }
.reviews-scope .rowactions button.active-action {
  border-color: #0056c3;
  background: #f3f3fe;
  color: #0056c3;
}
/* Modals & Overlay */
.overlay, .modal-overlay { position: fixed; inset: 0; z-index: 105; background: rgba(16, 23, 47, 0.45); backdrop-filter: blur(2px); }
.drawer { position: absolute; right: 0; top: 0; width: min(460px, 100%); height: 100%; overflow-y: auto; padding: 20px; background: #fff; box-shadow: -18px 0 55px rgba(16, 24, 40, .17); }
.drawer-head { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; padding-bottom: 14px; border-bottom: 1px solid var(--admin-surface-mid); }
.drawer-reviewer { display: flex; align-items: center; gap: 10px; flex: 1; }
.drawer-avatar { width: 42px; height: 42px; border-radius: 50%; background: #e3edff; color: #0056c3; display: grid; place-items: center; font-size: 13px; font-weight: 800; }
.drawer-reviewer h2 { margin: 0; font-size: 18px; font-weight: 800; color: var(--admin-text); }
.drawer-reviewer span { display: block; margin-top: 2px; color: var(--admin-muted); font-size: 11.5px; }
.drawer-section { padding: 14px 0; border-bottom: 1px solid var(--admin-surface-mid); }
.drawer-section h3 { margin: 0 0 10px; font-size: 13px; font-weight: 800; color: var(--admin-text); }
.drawer-product { display: flex; align-items: center; gap: 10px; padding: 10px; border: 1px solid var(--admin-surface-mid); border-radius: 8px; background: #f8f9fc; }
.review-full-title { font-size: 13px; font-weight: 800; color: var(--admin-text); }
.review-full-text { margin: 6px 0 0; color: var(--admin-muted); font-size: 12px; line-height: 1.6; }
.detail-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
.detail-box { padding: 10px; border: 1px solid var(--admin-surface-mid); border-radius: 8px; background: #f8f9fc; }
.detail-box span { display: block; color: var(--admin-muted); font-size: 10.5px; }
.detail-box strong { display: block; margin-top: 3px; font-size: 12.5px; font-weight: 700; color: var(--admin-text); }
.reply-box { margin-top: 10px; padding: 10px; border-radius: 8px; background: #f6fbf7; border: 1px solid #dff0e4; }
.reply-box strong { display: block; font-size: 12px; font-weight: 700; color: var(--admin-text); }
.reply-box p { margin: 4px 0 0; color: var(--admin-muted); font-size: 11.5px; line-height: 1.5; }
.drawer-actions { position: sticky; bottom: 0; padding-top: 14px; background: #fff; display: flex; gap: 8px; flex-wrap: wrap; }

.modal-overlay { display: grid; place-items: center; padding: 16px; z-index: 110; }
.modal { width: min(600px, 100%); max-height: 92vh; overflow-y: auto; padding: 20px; border-radius: 12px; background: #fff; box-shadow: 0 22px 65px rgba(16,24,40,.18); }
.modal-head { display: flex; align-items: center; justify-content: space-between; padding-bottom: 12px; border-bottom: 1px solid var(--admin-surface-mid); }
.modal-close { width: 34px; height: 34px; border: 1px solid var(--admin-outline); border-radius: 8px; background: #fff; display: grid; place-items: center; cursor: pointer; color: var(--admin-text); transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1); }
.modal-close:hover, .modal-close:active, .modal-close:focus { background: #eff6ff; border-color: #93c5fd; color: #0056c3; transform: scale(1.06); }
.form-field { display: flex; flex-direction: column; gap: 6px; margin-top: 14px; }
.form-field span { font-size: 12px; font-weight: 700; color: var(--admin-text); }
.form-field textarea { width: 100%; min-height: 110px; padding: 10px; border: 1px solid var(--admin-outline); border-radius: 8px; outline: 0; font-size: 12.5px; resize: vertical; font-family: inherit; }

.modal-primary { height: 40px; padding: 0 18px; border: 0; border-radius: 8px; background: var(--admin-orange); color: #fff; font-size: 13px; font-weight: 700; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; gap: 8px; white-space: nowrap; flex-direction: row; transition: background .18s; }
.modal-primary:hover { background: #e25510; }
.modal-secondary { height: 40px; padding: 0 18px; border: 1px solid var(--admin-outline); border-radius: 8px; background: #ffffff; color: var(--admin-text); font-size: 13px; font-weight: 700; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; gap: 8px; white-space: nowrap; flex-direction: row; transition: all .18s; }
.modal-secondary:hover { background: var(--admin-surface-low); }

/* Toast */
.toast { position: fixed; right: 24px; bottom: 24px; z-index: 140; min-width: 280px; padding: 12px 16px; border-radius: 10px; background: #10172f; color: #ffffff; box-shadow: 0 18px 45px rgba(16,24,40,.24); display: flex; align-items: center; gap: 10px; font-size: 12.5px; font-weight: 600; }
.toast-icon { width: 24px; height: 24px; border-radius: 50%; background: #16a34a; color: #fff; display: grid; place-items: center; font-size: 13px; flex-shrink: 0; }
`;

const productImages = {
  shirt: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40' fill='none'><rect width='40' height='40' rx='8' fill='%23eff6ff'/><path d='M13 12L17 15C17.5 15.5 18.7 16 20 16C21.3 16 22.5 15.5 23 15L27 12L31 16L28 19L27 18V28H13V18L12 19L9 16L13 12Z' fill='%233b82f6'/></svg>",
  bag: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40' fill='none'><rect width='40' height='40' rx='8' fill='%23fffbeb'/><path d='M16 14C16 11.8 17.8 10 20 10C22.2 10 24 11.8 24 14V16H16V14ZM12 16H28L26 29H14L12 16Z' fill='%23f59e0b'/></svg>",
  vase: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40' fill='none'><rect width='40' height='40' rx='8' fill='%23f5f3ff'/><path d='M17 11H23V14C23 15.5 26 17.5 26 21C26 25 23.5 28 20 28C16.5 28 14 25 14 21C14 17.5 17 15.5 17 14V11Z' fill='%238b5cf6'/></svg>",
  earbuds: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40' fill='none'><rect width='40' height='40' rx='8' fill='%23ecfeff'/><circle cx='16' cy='16' r='4' fill='%2306b6d4'/><path d='M16 20V26' stroke='%2306b6d4' stroke-width='2' stroke-linecap='round'/><circle cx='24' cy='16' r='4' fill='%2306b6d4'/><path d='M24 20V26' stroke='%2306b6d4' stroke-width='2' stroke-linecap='round'/></svg>",
  serum: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40' fill='none'><rect width='40' height='40' rx='8' fill='%23fef3c7'/><rect x='15' y='18' width='10' height='12' rx='2' fill='%23f59e0b'/><path d='M18 14H22V18H18V14Z' fill='%23d97706'/><path d='M19 10H21V14H19V10Z' fill='%2392400e'/></svg>",
  chair: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40' fill='none'><rect width='40' height='40' rx='8' fill='%23f1f5f9'/><path d='M15 12C15 11 16 10 17 10H23C24 10 25 11 25 12V20H15V12ZM13 22H27V24H13V22ZM19 24V28H15V30H25V28H21V24H19Z' fill='%2364748b'/></svg>",
  candle: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40' fill='none'><rect width='40' height='40' rx='8' fill='%23fdf2f8'/><rect x='14' y='18' width='12' height='12' rx='2' fill='%23ec4899'/><path d='M20 12C20 12 18 14.5 18 16C18 17.1 18.9 18 20 18C21.1 18 22 17.1 22 16C22 14.5 20 12 20 12Z' fill='%23f59e0b'/></svg>",
};

const initialReviews = [
  { id: "REV-001", reviewer: "Priya Sharma", initials: "SI", email: "priya.s@email.com", avatarTone: "blue", product: "Linen Blend Shirt", sku: "AMH-FSH-001", productImage: "shirt", rating: 5, title: "Excellent quality and fit", text: "The fabric is so soft and the fit is excellent. Really happy with this purchase.", submittedDate: "May 18, 2025", submittedTime: "10:24 AM", status: "Published", response: "Replied", merchantReply: "Thank you for your wonderful feedback! We're so glad you love the fit and fabric.", sentiment: "Positive" },
  { id: "REV-002", reviewer: "Arjun Mehta", initials: "AH", email: "arjun.m@email.com", avatarTone: "indigo", product: "Leather Tote Bag", sku: "AMH-LBG-002", productImage: "bag", rating: 4, title: "Stylish and spacious", text: "Love the design and space. The leather feels premium and holds everything I need.", submittedDate: "May 18, 2025", submittedTime: "09:45 AM", status: "Pending", response: "-", merchantReply: "", sentiment: "Positive" },
  { id: "REV-003", reviewer: "Sneha Iyer", initials: "SI", email: "sneha.i@email.com", avatarTone: "gold", product: "Ceramic Vase Set", sku: "AMH-HM-015", productImage: "vase", rating: 3, title: "Good but packaging issue", text: "The vases are beautiful but one arrived with minor packaging damage.", submittedDate: "May 17, 2025", submittedTime: "08:15 PM", status: "Flagged", response: "-", merchantReply: "", sentiment: "Neutral" },
  { id: "REV-004", reviewer: "Karan Verma", initials: "KV", email: "karan.v@email.com", avatarTone: "cyan", product: "Wireless Earbuds", sku: "AMH-EL-010", productImage: "earbuds", rating: 5, title: "Amazing sound quality", text: "Best earbuds in this price range. Clear sound and very comfortable.", submittedDate: "May 17, 2025", submittedTime: "06:40 PM", status: "Published", response: "Replied", merchantReply: "Thanks for sharing! We're thrilled that you're happy with the sound quality.", sentiment: "Positive" },
  { id: "REV-005", reviewer: "Ananya Rao", initials: "AK", email: "ananya.r@email.com", avatarTone: "orange", product: "Vitamin C Serum", sku: "AMH-BY-020", productImage: "serum", rating: 4, title: "Works well on my skin", text: "I've been using it for a week and can already notice a difference.", submittedDate: "May 17, 2025", submittedTime: "05:20 PM", status: "Published", response: "Replied", merchantReply: "We appreciate your feedback! Consistent use makes a big difference.", sentiment: "Positive" },
  { id: "REV-006", reviewer: "Rohit Nair", initials: "RN", email: "rohit.n@email.com", avatarTone: "red", product: "Home Office Chair", sku: "AMH-FUR-003", productImage: "chair", rating: 2, title: "Not comfortable for long use", text: "The chair looks good but not comfortable enough for long working sessions.", submittedDate: "May 16, 2025", submittedTime: "11:05 AM", status: "Flagged", response: "-", merchantReply: "", sentiment: "Negative" },
  { id: "REV-007", reviewer: "Neha Kapoor", initials: "NK", email: "neha.k@email.com", avatarTone: "blue", product: "Scented Candle Set", sku: "AMH-HM-008", productImage: "candle", rating: 5, title: "Lovely fragrance", text: "The scents are amazing and last for hours. Beautiful packaging as well.", submittedDate: "May 16, 2025", submittedTime: "09:30 AM", status: "Pending", response: "-", merchantReply: "", sentiment: "Positive" },
];

const ratingBreakdown = [
  { label: "5 Stars", count: "1,704", percent: "60.1%", color: "#28b34d" },
  { label: "4 Stars", count: "733", percent: "25.8%", color: "#71cc78" },
  { label: "3 Stars", count: "244", percent: "8.6%", color: "#f6b544" },
  { label: "2 Stars", count: "102", percent: "3.6%", color: "#f18d42" },
  { label: "1 Star", count: "53", percent: "1.9%", color: "#e5484d" },
];

const recentFlagged = [
  { name: "Sneha Iyer", initials: "SI", product: "Ceramic Vase Set", rating: 3, date: "May 17, 2025" },
  { name: "Rohit Nair", initials: "RN", product: "Home Office Chair", rating: 2, date: "May 16, 2025" },
  { name: "Amit Kumar", initials: "AK", product: "Bluetooth Speaker", rating: 1, date: "May 15, 2025" },
];

const sentiment = [
  { label: "Positive", count: "1,932", percent: "68.1%", color: "#28b34d" },
  { label: "Neutral", count: "694", percent: "24.5%", color: "#176cec" },
  { label: "Negative", count: "210", percent: "7.4%", color: "#e5484d" },
];

const topProducts = [
  { rank: 1, name: "Linen Blend Shirt", image: "shirt", count: "1,248 reviews", rating: "4.6" },
  { rank: 2, name: "Leather Tote Bag", image: "bag", count: "897 reviews", rating: "4.5" },
  { rank: 3, name: "Wireless Earbuds", image: "earbuds", count: "724 reviews", rating: "4.4" },
  { rank: 4, name: "Vitamin C Serum", image: "serum", count: "612 reviews", rating: "4.3" },
  { rank: 5, name: "Home Office Chair", image: "chair", count: "581 reviews", rating: "3.9" },
];

const recentReplies = [
  { product: "Linen Blend Shirt", image: "shirt", meta: "Replied by Sujith · May 18, 2025", text: "Thank you for your wonderful feedback! We're so glad you love the..." },
  { product: "Wireless Earbuds", image: "earbuds", meta: "Replied by Priya · May 17, 2025", text: "Thanks for sharing! We're thrilled that you're happy with the sound..." },
  { product: "Vitamin C Serum", image: "serum", meta: "Replied by Sujith · May 17, 2025", text: "We appreciate your feedback! Consistent use makes a big difference..." },
];

const moderationNotes = [
  { id: 1, title: 'High number of negative reviews for "Home Office Chair".', date: "May 17, 2025", author: "Admin", tone: "orange", icon: FiAlertCircle },
  { id: 2, title: 'Packaging issues reported in 3 reviews for "Ceramic Vase Set".', date: "May 16, 2025", author: "Admin", tone: "green", icon: FiCheckCircle },
  { id: 3, title: 'Positive feedback spike for "Linen Blend Shirt" after campaign.', date: "May 15, 2025", author: "Admin", tone: "blue", icon: FiInfo },
];

function RatingStars({ rating, compact = false }) {
  return (
    <div className="rating-stars" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((value) => (
        <span key={value} className={`star ${value > rating ? "empty" : ""}`} style={compact ? { fontSize: 11 } : undefined}>★</span>
      ))}
    </div>
  );
}

function StatusPill({ status }) {
  return <span className={`status-pill ${status.toLowerCase()}`}>{status}</span>;
}

function ResponsePill({ response }) {
  return response === "Replied" ? <span className="response-pill">Replied</span> : <span style={{ color: "var(--admin-muted)" }}>-</span>;
}

function RowMenu({ review, onView, onApprove, onFlag, onReply, onDelete, onClose }) {
  return (
    <motion.div className="row-menu" initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }}>
      <button type="button" onClick={() => { onView(review); onClose(); }}>View details</button>
      {review.status !== "Published" && <button type="button" onClick={() => { onApprove(review.id); onClose(); }}>Publish review</button>}
      {review.status !== "Flagged" && <button type="button" onClick={() => { onFlag(review.id); onClose(); }}>Flag review</button>}
      <button type="button" onClick={() => { onReply(review); onClose(); }}>Reply</button>
      <button type="button" style={{ color: "#d32f2f" }} onClick={() => { onDelete(review); onClose(); }}>Delete review</button>
    </motion.div>
  );
}

function DeleteReviewModal({ review, onClose, onConfirm }) {
  return (
    <motion.div className="modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div className="modal" style={{ width: "min(480px, 100%)" }} initial={{ y: 18, scale: .98 }} animate={{ y: 0, scale: 1 }} exit={{ y: 18, scale: .98 }} onClick={(e) => e.stopPropagation()}>
        <div className="modal-head">
          <h2>Delete Customer Review</h2>
          <button className="modal-close" type="button" onClick={onClose}><FiX /></button>
        </div>
        <div style={{ background: "#fff5e6", border: "1px solid #fed7aa", borderRadius: 8, padding: "10px 12px", display: "flex", gap: 10, alignItems: "flex-start", marginTop: 12 }}>
          <FiAlertTriangle style={{ color: "#d97706", fontSize: 18, flexShrink: 0, marginTop: 2 }} />
          <div style={{ fontSize: 11.5, color: "#92400e", lineHeight: 1.4 }}>
            <strong>Caution:</strong> Deleting this review permanently removes customer feedback and recalculates the average star rating and review count for <strong>{review.product}</strong>.
          </div>
        </div>
        <p style={{ margin: "14px 0 6px", fontSize: 12.5, color: "#191b23" }}>
          Are you sure you want to delete the review by <strong>{review.reviewer}</strong> ({review.rating} ★ — "{review.title}")?
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 18 }}>
          <button className="modal-secondary" type="button" onClick={onClose}>Cancel</button>
          <button className="modal-primary" style={{ background: "#d32f2f" }} type="button" onClick={() => onConfirm(review)}>
            <FiTrash2 /> Delete Review
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ReviewDrawer({ review, onClose, onApprove, onFlag, onReply }) {
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
          item={review}
          title="Review Details"
          onClose={onClose}
          onEdit={() => onReply(review)}
        />
      </motion.div>
    </motion.div>
  );
}

function ReplyModal({ review, onClose, onSave }) {
  const [reply, setReply] = useState(review.merchantReply || "");
  return (
    <motion.div className="modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.form className="modal" initial={{ y: 18, scale: .98 }} animate={{ y: 0, scale: 1 }} exit={{ y: 18, scale: .98 }} onClick={(e) => e.stopPropagation()} onSubmit={(e) => { e.preventDefault(); if (reply.trim()) onSave(review.id, reply.trim()); }}>
        <div className="modal-head">
          <h2>Reply to {review.reviewer}</h2>
          <button className="modal-close" type="button" onClick={onClose}><FiX /></button>
        </div>
        <div style={{ margin: "12px 0", fontSize: 12, color: "var(--admin-muted)" }}><strong>{review.product}</strong> · {review.title}</div>
        <label className="form-field"><span>Merchant Reply</span><textarea value={reply} onChange={(e) => setReply(e.target.value)} placeholder="Write a helpful, professional response..." /></label>
        <div style={{ display: "flex", justifyContent: "flex-end", gap: 10, marginTop: 20 }}>
          <button className="modal-secondary" type="button" onClick={onClose}>Cancel</button>
          <button className="modal-primary" type="submit"><FiMessageSquare /> Save Reply</button>
        </div>
      </motion.form>
    </motion.div>
  );
}

function ModerationModal({ reviews, onClose, onPublishFlagged }) {
  const flagged = reviews.filter((r) => r.status === "Flagged");
  const pending = reviews.filter((r) => r.status === "Pending");
  return (
    <motion.div className="modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div className="modal" initial={{ y: 18, scale: .98 }} animate={{ y: 0, scale: 1 }} exit={{ y: 18, scale: .98 }} onClick={(e) => e.stopPropagation()}>
        <div className="modal-head">
          <h2>Review Moderation Queue</h2>
          <button className="modal-close" type="button" onClick={onClose}><FiX /></button>
        </div>
        <div style={{ margin: "12px 0", fontSize: 12.5, color: "var(--admin-muted)", lineHeight: 1.5 }}>
          This moderation preview contains {pending.length} pending reviews and {flagged.length} flagged reviews. Connect this screen to your server-side moderation queue for deployment.
        </div>
        <div className="detail-grid">
          <div className="detail-box"><span>Pending Approval</span><strong>142</strong></div>
          <div className="detail-box"><span>Flagged Reviews</span><strong>27</strong></div>
          <div className="detail-box"><span>Published</span><strong>2,654</strong></div>
          <div className="detail-box"><span>Response Rate</span><strong>87%</strong></div>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end", gap: 10, marginTop: 20 }}>
          <button className="modal-secondary" type="button" onClick={onClose}>Close</button>
          <button className="modal-primary" type="button" onClick={onPublishFlagged}><FiShield /> Review Flagged Items</button>
        </div>
      </motion.div>
    </motion.div>
  );
}

function NoteModal({ onClose, onSave }) {
  const [note, setNote] = useState("");
  return (
    <motion.div className="modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.form className="modal" style={{ width: "min(480px,100%)" }} initial={{ y: 18, scale: .98 }} animate={{ y: 0, scale: 1 }} exit={{ y: 18, scale: .98 }} onClick={(e) => e.stopPropagation()} onSubmit={(e) => { e.preventDefault(); if (note.trim()) onSave(note.trim()); }}>
        <div className="modal-head">
          <h2>Add Moderation Note</h2>
          <button className="modal-close" type="button" onClick={onClose}><FiX /></button>
        </div>
        <label className="form-field"><span>Note</span><textarea value={note} onChange={(e) => setNote(e.target.value)} placeholder="Add a moderation observation or follow-up..." /></label>
        <div style={{ display: "flex", justifyContent: "flex-end", gap: 10, marginTop: 20 }}>
          <button className="modal-secondary" type="button" onClick={onClose}>Cancel</button>
          <button className="modal-primary" type="submit"><FiPlus /> Add Note</button>
        </div>
      </motion.form>
    </motion.div>
  );
}

function RatingBreakdownModal({ onClose, toast }) {
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
            <h2 style={{ fontSize: 19, fontWeight: 800, color: "#10172f", margin: 0 }}>Rating Breakdown & Score Distribution</h2>
            <p style={{ fontSize: 12.5, color: "#667085", margin: "4px 0 0", fontWeight: 500 }}>Comprehensive star rating mix across all 2,836 customer reviews</p>
          </div>
          <button className="modal-close" type="button" onClick={onClose} title="Close" aria-label="Close"><FiX size={18} /></button>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, margin: "14px 0 16px" }}>
          <div style={{ background: "#f8faff", border: "1px solid #ededf8", borderRadius: 9, padding: "10px 14px" }}>
            <span style={{ fontSize: 10.5, color: "#667085", fontWeight: 700, textTransform: "uppercase" }}>Total Reviews</span>
            <strong style={{ display: "block", fontSize: 16, color: "#10172f", marginTop: 3, fontWeight: 800 }}>2,836</strong>
          </div>
          <div style={{ background: "#f3fbf6", border: "1px solid #d4f3e1", borderRadius: 9, padding: "10px 14px" }}>
            <span style={{ fontSize: 10.5, color: "#16a34a", fontWeight: 700, textTransform: "uppercase" }}>Average Rating</span>
            <strong style={{ display: "block", fontSize: 16, color: "#16a34a", marginTop: 3, fontWeight: 800 }}>4.6 ★ / 5.0</strong>
          </div>
          <div style={{ background: "#f8f8ff", border: "1px solid #ededf8", borderRadius: 9, padding: "10px 14px" }}>
            <span style={{ fontSize: 10.5, color: "#0056c3", fontWeight: 700, textTransform: "uppercase" }}>5-Star Share</span>
            <strong style={{ display: "block", fontSize: 16, color: "#0056c3", marginTop: 3, fontWeight: 800 }}>60.1% (1,704)</strong>
          </div>
        </div>

        <div style={{ display: "grid", gap: 10, maxHeight: "360px", overflowY: "auto", paddingRight: 4 }}>
          {ratingBreakdown.map((item) => (
            <div key={item.label} style={{ padding: "12px 14px", border: "1px solid #ededf8", borderRadius: 10, background: "#ffffff" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ width: 10, height: 10, borderRadius: "50%", background: item.color, display: "inline-block" }} />
                  <strong style={{ fontSize: 13.5, fontWeight: 700, color: "#10172f" }}>{item.label}</strong>
                </div>
                <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: "#10172f" }}>{item.count} reviews</span>
                  <span style={{ fontSize: 12, fontWeight: 800, color: item.color }}>{item.percent}</span>
                </div>
              </div>
              <div style={{ width: "100%", height: 6, background: "#f3f3fe", borderRadius: 999, overflow: "hidden" }}>
                <div style={{ width: item.percent, height: "100%", background: item.color, borderRadius: 999 }} />
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 18, paddingTop: 14, borderTop: "1px solid #ededf8" }}>
          <span style={{ fontSize: 11.5, color: "#16a34a", fontWeight: 600, display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#16a34a", display: "inline-block" }} />
            Rating distribution updated in real time
          </span>
          <button className="modal-primary" type="button" onClick={() => { toast({ title: "Exported", message: "Rating breakdown exported to CSV." }); onClose(); }}>
            Export Ratings (CSV)
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

function FlaggedReviewsModal({ onClose, toast }) {
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
            <h2 style={{ fontSize: 19, fontWeight: 800, color: "#10172f", margin: 0 }}>Recent Flagged Reviews Queue</h2>
            <p style={{ fontSize: 12.5, color: "#667085", margin: "4px 0 0", fontWeight: 500 }}>Customer reviews requiring moderation, response, or escalations</p>
          </div>
          <button className="modal-close" type="button" onClick={onClose} title="Close" aria-label="Close"><FiX size={18} /></button>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, margin: "14px 0 16px" }}>
          <div style={{ background: "#f8faff", border: "1px solid #ededf8", borderRadius: 9, padding: "10px 14px" }}>
            <span style={{ fontSize: 10.5, color: "#667085", fontWeight: 700, textTransform: "uppercase" }}>Queue Size</span>
            <strong style={{ display: "block", fontSize: 16, color: "#10172f", marginTop: 3, fontWeight: 800 }}>{recentFlagged.length} Flagged</strong>
          </div>
          <div style={{ background: "#fff5f5", border: "1px solid #fed7d7", borderRadius: 9, padding: "10px 14px" }}>
            <span style={{ fontSize: 10.5, color: "#e5484d", fontWeight: 700, textTransform: "uppercase" }}>Action Priority</span>
            <strong style={{ display: "block", fontSize: 16, color: "#e5484d", marginTop: 3, fontWeight: 800 }}>High (24h SLA)</strong>
          </div>
          <div style={{ background: "#f8f8ff", border: "1px solid #ededf8", borderRadius: 9, padding: "10px 14px" }}>
            <span style={{ fontSize: 10.5, color: "#0056c3", fontWeight: 700, textTransform: "uppercase" }}>Resolved Today</span>
            <strong style={{ display: "block", fontSize: 16, color: "#0056c3", marginTop: 3, fontWeight: 800 }}>18 Reviews</strong>
          </div>
        </div>

        <div style={{ display: "grid", gap: 10, maxHeight: "360px", overflowY: "auto", paddingRight: 4 }}>
          {recentFlagged.map((item) => (
            <div key={`${item.name}-${item.product}`} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 14px", border: "1px solid #ededf8", borderRadius: 10, background: "#ffffff" }}>
              <div style={{ width: 34, height: 34, borderRadius: 8, background: "#e7efff", border: "1px solid #dfe4ef", color: "#0056c3", display: "grid", placeItems: "center", fontSize: 12, fontWeight: 800, flexShrink: 0 }}>
                {item.initials}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <strong style={{ fontSize: 13, fontWeight: 800, color: "#10172f", display: "block" }}>{item.name}</strong>
                <span style={{ fontSize: 11, color: "#667085" }}>Product: {item.product}</span>
              </div>
              <div style={{ textAlign: "right" }}>
                <RatingStars rating={item.rating} compact />
                <small style={{ display: "block", fontSize: 10.5, color: "#667085", marginTop: 2 }}>{item.date}</small>
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 18, paddingTop: 14, borderTop: "1px solid #ededf8" }}>
          <span style={{ fontSize: 11.5, color: "#16a34a", fontWeight: 600, display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#16a34a", display: "inline-block" }} />
            Queue synced with customer support
          </span>
          <button className="modal-primary" type="button" onClick={() => { toast({ title: "Exported", message: "Flagged review queue exported to CSV." }); onClose(); }}>
            Export Queue (CSV)
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

function SentimentOverviewModal({ onClose, toast }) {
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
            <h2 style={{ fontSize: 19, fontWeight: 800, color: "#10172f", margin: 0 }}>Review Sentiment Overview & Feedback Analytics</h2>
            <p style={{ fontSize: 12.5, color: "#667085", margin: "4px 0 0", fontWeight: 500 }}>Sentiment classification and merchant response efficiency</p>
          </div>
          <button className="modal-close" type="button" onClick={onClose} title="Close" aria-label="Close"><FiX size={18} /></button>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, margin: "14px 0 16px" }}>
          <div style={{ background: "#f3fbf6", border: "1px solid #d4f3e1", borderRadius: 9, padding: "10px 14px" }}>
            <span style={{ fontSize: 10.5, color: "#16a34a", fontWeight: 700, textTransform: "uppercase" }}>Positive Share</span>
            <strong style={{ display: "block", fontSize: 16, color: "#16a34a", marginTop: 3, fontWeight: 800 }}>68.1% (1,932)</strong>
          </div>
          <div style={{ background: "#f8faff", border: "1px solid #ededf8", borderRadius: 9, padding: "10px 14px" }}>
            <span style={{ fontSize: 10.5, color: "#667085", fontWeight: 700, textTransform: "uppercase" }}>Avg Response Time</span>
            <strong style={{ display: "block", fontSize: 16, color: "#10172f", marginTop: 3, fontWeight: 800 }}>1.8 Days</strong>
          </div>
          <div style={{ background: "#f8f8ff", border: "1px solid #ededf8", borderRadius: 9, padding: "10px 14px" }}>
            <span style={{ fontSize: 10.5, color: "#0056c3", fontWeight: 700, textTransform: "uppercase" }}>Merchant Replies</span>
            <strong style={{ display: "block", fontSize: 16, color: "#0056c3", marginTop: 3, fontWeight: 800 }}>1,985 (↑ 14.6%)</strong>
          </div>
        </div>

        <div style={{ display: "grid", gap: 10, maxHeight: "360px", overflowY: "auto", paddingRight: 4 }}>
          {sentiment.map((item) => (
            <div key={item.label} style={{ padding: "12px 14px", border: "1px solid #ededf8", borderRadius: 10, background: "#ffffff" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ width: 10, height: 10, borderRadius: "50%", background: item.color, display: "inline-block" }} />
                  <strong style={{ fontSize: 13.5, fontWeight: 700, color: "#10172f" }}>{item.label} Sentiment</strong>
                </div>
                <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: "#10172f" }}>{item.count} reviews</span>
                  <span style={{ fontSize: 12, fontWeight: 800, color: item.color }}>{item.percent}</span>
                </div>
              </div>
              <div style={{ width: "100%", height: 6, background: "#f3f3fe", borderRadius: 999, overflow: "hidden" }}>
                <div style={{ width: item.percent, height: "100%", background: item.color, borderRadius: 999 }} />
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 18, paddingTop: 14, borderTop: "1px solid #ededf8" }}>
          <span style={{ fontSize: 11.5, color: "#16a34a", fontWeight: 600, display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#16a34a", display: "inline-block" }} />
            Sentiment NLP model updated
          </span>
          <button className="modal-primary" type="button" onClick={() => { toast({ title: "Exported", message: "Sentiment audit report exported to CSV." }); onClose(); }}>
            Export Sentiment (CSV)
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

function TopReviewedProductsModal({ onClose, toast }) {
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
            <h2 style={{ fontSize: 19, fontWeight: 800, color: "#10172f", margin: 0 }}>Top Reviewed Products</h2>
            <p style={{ fontSize: 12.5, color: "#667085", margin: "4px 0 0", fontWeight: 500 }}>Ranked catalog items by customer review volume and aggregate ratings</p>
          </div>
          <button className="modal-close" type="button" onClick={onClose} title="Close" aria-label="Close"><FiX size={18} /></button>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, margin: "14px 0 16px" }}>
          <div style={{ background: "#f8faff", border: "1px solid #ededf8", borderRadius: 9, padding: "10px 14px" }}>
            <span style={{ fontSize: 10.5, color: "#667085", fontWeight: 700, textTransform: "uppercase" }}>Top Product</span>
            <strong style={{ display: "block", fontSize: 16, color: "#10172f", marginTop: 3, fontWeight: 800 }}>Linen Blend Shirt</strong>
          </div>
          <div style={{ background: "#f3fbf6", border: "1px solid #d4f3e1", borderRadius: 9, padding: "10px 14px" }}>
            <span style={{ fontSize: 10.5, color: "#16a34a", fontWeight: 700, textTransform: "uppercase" }}>Top Rating</span>
            <strong style={{ display: "block", fontSize: 16, color: "#16a34a", marginTop: 3, fontWeight: 800 }}>4.6 ★ / 5.0</strong>
          </div>
          <div style={{ background: "#f8f8ff", border: "1px solid #ededf8", borderRadius: 9, padding: "10px 14px" }}>
            <span style={{ fontSize: 10.5, color: "#0056c3", fontWeight: 700, textTransform: "uppercase" }}>Tracked Volume</span>
            <strong style={{ display: "block", fontSize: 16, color: "#0056c3", marginTop: 3, fontWeight: 800 }}>4,062 Reviews</strong>
          </div>
        </div>

        <div style={{ display: "grid", gap: 10, maxHeight: "360px", overflowY: "auto", paddingRight: 4 }}>
          {topProducts.map((item) => (
            <div key={item.rank} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 14px", border: "1px solid #ededf8", borderRadius: 10, background: "#ffffff" }}>
              <div style={{ width: 28, height: 28, borderRadius: 6, background: "#f8faff", border: "1px solid #dfe4ef", color: "#0056c3", display: "grid", placeItems: "center", fontSize: 12, fontWeight: 800, flexShrink: 0 }}>
                {item.rank}
              </div>
              <div style={{ width: 44, height: 32, borderRadius: 6, overflow: "hidden", border: "1px solid #dfe4ef", background: "#f6f7fa", flexShrink: 0 }}>
                <img src={productImages[item.image]} alt={item.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <strong style={{ fontSize: 13.5, fontWeight: 800, color: "#10172f", display: "block" }}>{item.name}</strong>
                <span style={{ fontSize: 11, color: "#667085" }}>{item.count}</span>
              </div>
              <div style={{ fontSize: 12, fontWeight: 800, color: "#16a34a", background: "#f0fdf4", padding: "3px 8px", borderRadius: 5, border: "1px solid #dcfce7", flexShrink: 0 }}>
                {item.rating} ★
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 18, paddingTop: 14, borderTop: "1px solid #ededf8" }}>
          <span style={{ fontSize: 11.5, color: "#16a34a", fontWeight: 600, display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#16a34a", display: "inline-block" }} />
            Rankings refreshed across 30 days
          </span>
          <button className="modal-primary" type="button" onClick={() => { toast({ title: "Exported", message: "Top reviewed products exported to CSV." }); onClose(); }}>
            Export Rankings (CSV)
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

function RecentMerchantRepliesModal({ onClose, toast }) {
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
            <h2 style={{ fontSize: 19, fontWeight: 800, color: "#10172f", margin: 0 }}>Recent Merchant Replies & Responses</h2>
            <p style={{ fontSize: 12.5, color: "#667085", margin: "4px 0 0", fontWeight: 500 }}>Customer support responses and review resolutions by staff</p>
          </div>
          <button className="modal-close" type="button" onClick={onClose} title="Close" aria-label="Close"><FiX size={18} /></button>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, margin: "14px 0 16px" }}>
          <div style={{ background: "#f8faff", border: "1px solid #ededf8", borderRadius: 9, padding: "10px 14px" }}>
            <span style={{ fontSize: 10.5, color: "#667085", fontWeight: 700, textTransform: "uppercase" }}>Logged Replies</span>
            <strong style={{ display: "block", fontSize: 16, color: "#10172f", marginTop: 3, fontWeight: 800 }}>{recentReplies.length} Responses</strong>
          </div>
          <div style={{ background: "#f3fbf6", border: "1px solid #d4f3e1", borderRadius: 9, padding: "10px 14px" }}>
            <span style={{ fontSize: 10.5, color: "#16a34a", fontWeight: 700, textTransform: "uppercase" }}>Reply Rate</span>
            <strong style={{ display: "block", fontSize: 16, color: "#16a34a", marginTop: 3, fontWeight: 800 }}>87% Overall</strong>
          </div>
          <div style={{ background: "#f8f8ff", border: "1px solid #ededf8", borderRadius: 9, padding: "10px 14px" }}>
            <span style={{ fontSize: 10.5, color: "#0056c3", fontWeight: 700, textTransform: "uppercase" }}>Active Agents</span>
            <strong style={{ display: "block", fontSize: 16, color: "#0056c3", marginTop: 3, fontWeight: 800 }}>2 Staff</strong>
          </div>
        </div>

        <div style={{ display: "grid", gap: 10, maxHeight: "360px", overflowY: "auto", paddingRight: 4 }}>
          {recentReplies.map((item) => (
            <div key={item.product} style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "12px 14px", border: "1px solid #ededf8", borderRadius: 10, background: "#ffffff" }}>
              <div style={{ width: 44, height: 44, borderRadius: 6, overflow: "hidden", border: "1px solid #dfe4ef", background: "#f6f7fa", flexShrink: 0 }}>
                <img src={productImages[item.image]} alt={item.product} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <strong style={{ fontSize: 13, fontWeight: 800, color: "#10172f", display: "block" }}>{item.product}</strong>
                <span style={{ fontSize: 11, color: "#667085", display: "block", marginTop: 1 }}>{item.meta}</span>
                <p style={{ margin: "4px 0 0", fontSize: 11.5, color: "#4b5563", lineHeight: 1.4 }}>{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 18, paddingTop: 14, borderTop: "1px solid #ededf8" }}>
          <span style={{ fontSize: 11.5, color: "#16a34a", fontWeight: 600, display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#16a34a", display: "inline-block" }} />
            Replies synchronized with store storefront
          </span>
          <button className="modal-primary" type="button" onClick={() => { toast({ title: "Exported", message: "Recent merchant replies exported to CSV." }); onClose(); }}>
            Export Replies (CSV)
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ModerationNotesModal({ onClose, toast, onAddNote }) {
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
            <h2 style={{ fontSize: 19, fontWeight: 800, color: "#10172f", margin: 0 }}>Review Moderation Notes & Audit Log</h2>
            <p style={{ fontSize: 12.5, color: "#667085", margin: "4px 0 0", fontWeight: 500 }}>Internal team observations, quality alerts, and campaign feedback tracking</p>
          </div>
          <button className="modal-close" type="button" onClick={onClose} title="Close" aria-label="Close"><FiX size={18} /></button>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, margin: "14px 0 16px" }}>
          <div style={{ background: "#f8faff", border: "1px solid #ededf8", borderRadius: 9, padding: "10px 14px" }}>
            <span style={{ fontSize: 10.5, color: "#667085", fontWeight: 700, textTransform: "uppercase" }}>Logged Notes</span>
            <strong style={{ display: "block", fontSize: 16, color: "#10172f", marginTop: 3, fontWeight: 800 }}>{moderationNotes.length} Notes</strong>
          </div>
          <div style={{ background: "#f3fbf6", border: "1px solid #d4f3e1", borderRadius: 9, padding: "10px 14px" }}>
            <span style={{ fontSize: 10.5, color: "#16a34a", fontWeight: 700, textTransform: "uppercase" }}>Follow-up Status</span>
            <strong style={{ display: "block", fontSize: 16, color: "#16a34a", marginTop: 3, fontWeight: 800 }}>2 In Progress</strong>
          </div>
          <div style={{ background: "#f8f8ff", border: "1px solid #ededf8", borderRadius: 9, padding: "10px 14px" }}>
            <span style={{ fontSize: 10.5, color: "#0056c3", fontWeight: 700, textTransform: "uppercase" }}>Audit Sync</span>
            <strong style={{ display: "block", fontSize: 16, color: "#0056c3", marginTop: 3, fontWeight: 800 }}>100% OK</strong>
          </div>
        </div>

        <div style={{ display: "grid", gap: 10, maxHeight: "360px", overflowY: "auto", paddingRight: 4 }}>
          {moderationNotes.map((n) => {
            const Icon = n.icon;
            return (
              <div key={n.id} style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "12px 14px", border: "1px solid #ededf8", borderRadius: 10, background: "#ffffff" }}>
                <span className={`note-icon ${n.tone}`} style={{ flexShrink: 0 }}><Icon /></span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <strong style={{ fontSize: 13, fontWeight: 500, color: "#10172f", display: "block" }}>{n.title}</strong>
                  <span style={{ fontSize: 11, color: "#667085", display: "block", marginTop: 2, fontWeight: 400 }}>{n.date} · By {n.author}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 18, paddingTop: 14, borderTop: "1px solid #ededf8" }}>
          <button className="modal-secondary" type="button" onClick={onAddNote}>
            + Add New Note
          </button>
          <button className="modal-primary" type="button" onClick={() => { toast({ title: "Exported", message: "Moderation notes exported to CSV." }); onClose(); }}>
            Export Notes (CSV)
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ReviewsManagement() {
  const [desktopSidebarOpen, setDesktopSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [reviews, setReviews] = useState(initialReviews);
  const [tab, setTab] = useState("All Reviews");
  const [search, setSearch] = useState("");
  const [rating, setRating] = useState("All Ratings");
  const [product, setProduct] = useState("All Products");
  const [status, setStatus] = useState("All Statuses");
  const [dateFilter, setDateFilter] = useState("Last 7 Days");
  const [rowMenuOpenId, setRowMenuOpenId] = useState(null);

  const [drawer, setDrawer] = useState(null);
  const [replyReview, setReplyReview] = useState(null);
  const [deleteReviewTarget, setDeleteReviewTarget] = useState(null);
  const [moderationOpen, setModerationOpen] = useState(false);
  const [noteOpen, setNoteOpen] = useState(false);
  const [ratingModalOpen, setRatingModalOpen] = useState(false);
  const [flaggedModalOpen, setFlaggedModalOpen] = useState(false);
  const [sentimentModalOpen, setSentimentModalOpen] = useState(false);
  const [topProductsModalOpen, setTopProductsModalOpen] = useState(false);
  const [repliesModalOpen, setRepliesModalOpen] = useState(false);
  const [notesModalOpen, setNotesModalOpen] = useState(false);
  const [toast, setToast] = useState(null);

  const deleteReview = (target) => {
    setReviews((current) => current.filter((r) => r.id !== target.id));
    if (drawer?.id === target.id) setDrawer(null);
    setDeleteReviewTarget(null);
    showToast(`Review by ${target.reviewer} deleted.`);
  };

  const handleToggleMenu = () => {
    if (window.innerWidth <= 1050) {
      setMobileMenuOpen((prev) => !prev);
    } else {
      setDesktopSidebarOpen((prev) => !prev);
    }
  };

  const showToast = (message) => {
    setToast({ title: "Reviews Updated", message });
    setTimeout(() => setToast(null), 3000);
  };

  const filtered = useMemo(() => reviews.filter((review) => {
    const q = search.trim().toLowerCase();
    const searchOk = !q || review.reviewer.toLowerCase().includes(q) || review.product.toLowerCase().includes(q) || review.title.toLowerCase().includes(q) || review.email.toLowerCase().includes(q);
    const tabOk =
      tab === "All Reviews" ||
      (tab === "Pending" && review.status === "Pending") ||
      (tab === "Published" && review.status === "Published") ||
      (tab === "Flagged" && review.status === "Flagged") ||
      (tab === "Replied" && review.response === "Replied");
    const ratingOk = rating === "All Ratings" || review.rating === Number(rating.replace(/[^0-9]/g, ""));
    const productOk = product === "All Products" || review.product === product;
    const statusOk = status === "All Statuses" || review.status === status;
    return searchOk && tabOk && ratingOk && productOk && statusOk;
  }), [reviews, tab, search, rating, product, status]);

  const exportCSV = () => {
    const rows = [
      ["Reviewer", "Email", "Product", "SKU", "Rating", "Review Title", "Submitted", "Status", "Response"],
      ...filtered.map((r) => [r.reviewer, r.email, r.product, r.sku, r.rating, r.title, `${r.submittedDate} ${r.submittedTime}`, r.status, r.response])
    ];
    const csv = rows.map((row) => row.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(",")).join("\n");
    const url = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
    const a = document.createElement("a");
    a.href = url; a.download = "reviews.csv"; a.click();
    URL.revokeObjectURL(url);
    showToast("Reviews exported successfully.");
  };

  const approveReview = (id) => {
    setReviews((current) => current.map((r) => r.id === id ? { ...r, status: "Published" } : r));
    setDrawer((current) => current?.id === id ? { ...current, status: "Published" } : current);
    showToast("Review published.");
  };

  const flagReview = (id) => {
    setReviews((current) => current.map((r) => r.id === id ? { ...r, status: "Flagged" } : r));
    setDrawer((current) => current?.id === id ? { ...current, status: "Flagged" } : current);
    showToast("Review flagged for moderation.");
  };

  const saveReply = (id, reply) => {
    setReviews((current) => current.map((r) => r.id === id ? { ...r, response: "Replied", merchantReply: reply } : r));
    setDrawer((current) => current?.id === id ? { ...current, response: "Replied", merchantReply: reply } : current);
    setReplyReview(null);
    showToast("Merchant reply saved.");
  };

  const kpis = [
    ["Total Reviews", "2,836", "+18.7%", "vs last 7 days", "success", FiHelpCircle],
    ["Pending Approval", "142", "+12.1%", "vs last 7 days", "warning", FiClock],
    ["Average Rating", "4.4", "+0.2", "vs last 7 days", "warning", FiStar],
    ["Flagged Reviews", "27", "-8.0%", "vs last 7 days", "danger", FiFlag],
    ["Response Rate", "87%", "+5.4%", "vs last 7 days", "success", FiMessageSquare],
    ["Negative Reviews", "96", "-6.2%", "vs last 7 days", "danger", FiThumbsDown],
  ];

  const tabs = [
    ["All Reviews", 2836],
    ["Pending", 142],
    ["Published", 2654],
    ["Flagged", 27],
    ["Replied", 1985],
  ];

  return (
    <div className="reviews-scope">
      <style>{reviewsCss}</style>

      <div className="reviews-shell">
        <div className={`desktop-sidebar-wrapper ${!desktopSidebarOpen ? "is-closed" : ""}`}>
          <AdminSidebar activePage="Reviews" onClose={() => setDesktopSidebarOpen(false)} />
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <AdminSidebar activePage="Reviews" mobile onClose={() => setMobileMenuOpen(false)} />
          )}
        </AnimatePresence>

        <main className="reviews-main">
          <AdminTopbar onToggleMenu={handleToggleMenu} desktopSidebarOpen={desktopSidebarOpen} />

          <div className="reviews-content">
            {/* Page Header */}
            <div className="pagehead">
              <div>
                <h1>Reviews Management</h1>
                <p>Monitor, moderate, analyze, and respond to customer reviews across your products.</p>
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                <button className="secondarybtn" onClick={exportCSV}><FiDownload /> Export</button>
                <button className="primarybtn" onClick={() => setModerationOpen(true)}><FiShield /> Moderate</button>
              </div>
            </div>

            {/* KPI Section */}
            <section className="kpi-grid">
              {kpis.map((x) => (
                <KpiCard key={x[0]} item={x} />
              ))}
            </section>

            {/* Full Width Reviews Table Panel */}
            <section className="panel-section">
              <div className={`reviews-split ${drawer ? "has-selected" : ""}`}>
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
                        placeholder="Search reviews, reviewers, products..."
                      />
                    </label>

                    <MasterDropdown
                      options={[{ value: "All Ratings", label: "Rating: All" }, "5 Stars", "4 Stars", "3 Stars", "2 Stars", "1 Star"]}
                      value={rating}
                      onChange={setRating}
                    />

                    <MasterDropdown
                      options={[{ value: "All Products", label: "Product: All" }, "Linen Blend Shirt", "Leather Tote Bag", "Ceramic Vase Set", "Wireless Earbuds", "Vitamin C Serum", "Home Office Chair", "Scented Candle Set"]}
                      value={product}
                      onChange={setProduct}
                    />

                    <MasterDropdown
                      options={[{ value: "All Statuses", label: "Status: All" }, "Published", "Pending", "Flagged"]}
                      value={status}
                      onChange={setStatus}
                    />

                    <MasterDatePicker value={dateFilter} onChange={setDateFilter} rightAlign />

                    <button className="filterbtn" onClick={() => showToast("Filter options applied.")}>
                      <FiFilter /> Filters
                    </button>
                  </div>

                  {/* Desktop Table */}
                  <div className="table-scroll">
                    <table className="review-table">
                      <thead>
                        <tr>
                          <th>Reviewer</th>
                          <th>Product</th>
                          <th>Rating</th>
                          <th>Review Title</th>
                          <th>Submitted Date</th>
                          <th>Status</th>
                          <th>Response</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filtered.map((r) => (
                          <tr key={r.id} className={drawer?.id === r.id ? "selected" : ""}>
                            <td>
                              <div className="reviewer-cell">
                                <span className={`reviewer-avatar avatar-${r.avatarTone}`}>{r.initials}</span>
                                <div className="reviewer-copy">
                                  <strong>{r.reviewer}</strong>
                                  <span>{r.email}</span>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="product-cell">
                                <div className="product-thumb"><img src={productImages[r.productImage]} alt="" /></div>
                                <div className="product-copy">
                                  <strong>{r.product}</strong>
                                  <span>SKU: {r.sku}</span>
                                </div>
                              </div>
                            </td>
                            <td><RatingStars rating={r.rating} /></td>
                            <td>
                              <div className="review-copy">
                                <strong>{r.title}</strong>
                                <span>{r.text}</span>
                              </div>
                            </td>
                            <td>
                              <strong>{r.submittedDate}</strong>
                              <div style={{ fontSize: 11, color: "var(--admin-muted)" }}>{r.submittedTime}</div>
                            </td>
                            <td><StatusPill status={r.status} /></td>
                            <td><ResponsePill response={r.response} /></td>
                            <td>
                              <div className="rowactions">
                                <button
                                  title="View Details"
                                  className={drawer?.id === r.id ? "active-action" : ""}
                                  onClick={() => setDrawer(curr => curr?.id === r.id ? null : r)}
                                >
                                  <FiEye />
                                </button>
                                <div style={{ position: "relative" }}>
                                  <button title="More Actions" onClick={() => setRowMenuOpenId((curr) => (curr === r.id ? null : r.id))}>
                                    <FiMoreVertical />
                                  </button>
                                  <AnimatePresence>
                                    {rowMenuOpenId === r.id && (
                                      <RowMenu
                                        review={r}
                                        onView={setDrawer}
                                        onApprove={approveReview}
                                        onFlag={flagReview}
                                        onReply={setReplyReview}
                                        onDelete={setDeleteReviewTarget}
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
                        title={r.reviewer}
                        subtitle={r.email}
                        badge={<StatusPill status={r.status} />}
                        meta={[
                          { label: "Product", value: `${r.product} (${r.sku})` },
                          { label: "Rating", value: `${r.rating} ★ · ${r.title}` },
                          { label: "Date", value: `${r.submittedDate} · ${r.submittedTime}` },
                          { label: "Response", value: r.response },
                        ]}
                        actions={
                          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, width: "100%" }}>
                            <button
                              type="button"
                              className="mobile-table-card-action-btn"
                              onClick={() => setDrawer((curr) => (curr?.id === r.id ? null : r))}
                            >
                              <FiEye /> View Details
                            </button>
                            <button
                              type="button"
                              className="mobile-table-card-action-btn"
                              onClick={() => setReplyReview(r)}
                            >
                              <FiMessageSquare /> Reply
                            </button>
                          </div>
                        }
                      />
                    )}
                  />

                  {/* Table Footer */}
                  <div className="footerbar">
                    <span>Showing 1–{filtered.length} of {filtered.length} reviews</span>
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
                        title="Review Details"
                        onClose={() => setDrawer(null)}
                        onEdit={() => { setDrawer(null); setReplyReview(drawer); }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </section>

            {/* Performance & Summary Grid (Positioned Below Table) */}
            <section className="summary-grid">
              {/* Card 1: Rating Breakdown */}
              <section className="side-card">
                <div className="card-head">
                  <h3>Rating Breakdown</h3>
                  <button type="button" onClick={() => setRatingModalOpen(true)}>View all</button>
                </div>
                <div style={{ cursor: "pointer", flex: 1, display: "flex" }} onClick={() => setRatingModalOpen(true)}>
                  <MasterPieChart
                    centerTitle="TOTAL REVIEWS"
                    centerValue="2,836"
                    data={ratingBreakdown.map((item) => ({ label: item.label, count: item.count, percent: item.percent, color: item.color }))}
                    conicGradient="conic-gradient(#16a34a 0% 60.1%, #84cc16 60.1% 85.9%, #f59e0b 85.9% 94.5%, #f97316 94.5% 98.1%, #ef4444 98.1% 100%)"
                    shape="circle"
                    onItemClick={() => setRatingModalOpen(true)}
                  />
                </div>
              </section>

              {/* Card 2: Recent Flagged Reviews */}
              <section className="side-card">
                <div className="card-head">
                  <h3>Recent Flagged Reviews</h3>
                  <button type="button" onClick={() => setFlaggedModalOpen(true)}>View all</button>
                </div>
                <div className="flagged-list">
                  {recentFlagged.map((item) => (
                    <div className="flagged-row" key={`${item.name}-${item.product}`} onClick={() => setFlaggedModalOpen(true)}>
                      <span className="flagged-avatar">{item.initials}</span>
                      <div className="flagged-copy">
                        <strong>{item.name}</strong>
                        <span>{item.product}</span>
                      </div>
                      <div className="flagged-right">
                        <RatingStars rating={item.rating} compact />
                        <span className="flagged-date">{item.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Card 3: Review Sentiment Overview */}
              <section className="side-card">
                <div className="card-head">
                  <h3>Review Sentiment Overview</h3>
                  <button type="button" onClick={() => setSentimentModalOpen(true)}>View all</button>
                </div>
                <div className="sentiment-summary" style={{ cursor: "pointer" }} onClick={() => setSentimentModalOpen(true)}>
                  <div className="sentiment-summary-head">
                    <span>Sentiment</span>
                    <span style={{ textAlign: "right" }}>Reviews</span>
                    <span style={{ textAlign: "right" }}>Share</span>
                  </div>
                  {sentiment.map((item) => (
                    <div className="sentiment-summary-row" key={item.label}>
                      <div>
                        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                          <span style={{ width: 7, height: 7, borderRadius: "50%", background: item.color }} />
                          <span style={{ fontSize: 12, fontWeight: 500, color: "#10172f" }}>{item.label}</span>
                        </div>
                        <div className="sentiment-bar-wrap">
                          <i className="sentiment-bar" style={{ background: item.color, width: item.percent }} />
                        </div>
                      </div>
                      <span style={{ textAlign: "right", fontWeight: 500, fontSize: 11.5, color: "#10172f" }}>{item.count}</span>
                      <span style={{ textAlign: "right", fontWeight: 500, fontSize: 11.5, color: item.color }}>{item.percent}</span>
                    </div>
                  ))}
                </div>
                <div className="sentiment-stats">
                  <div className="mini-stat">
                    <span>Avg Response Time</span>
                    <div><strong>1.8 days</strong><em>↓ 0.5 days</em></div>
                  </div>
                  <div className="mini-stat">
                    <span>Merchant Replies</span>
                    <div><strong>1,985</strong><em>↑ 14.6%</em></div>
                  </div>
                </div>
              </section>
            </section>

            {/* Bottom Cards */}
            <section className="bottom-grid">
              {/* Card 4: Top Reviewed Products */}
              <section className="bottom-card">
                <div className="card-head">
                  <h3>Top Reviewed Products</h3>
                  <button type="button" onClick={() => setTopProductsModalOpen(true)}>View all</button>
                </div>
                <div className="product-ranking">
                  {topProducts.slice(0, 3).map((item) => (
                    <div className="ranking-row" key={item.rank} onClick={() => setTopProductsModalOpen(true)}>
                      <span className="rank-number">{item.rank}</span>
                      <span className="rank-thumb"><img src={productImages[item.image]} alt={item.name} /></span>
                      <div className="rank-info">
                        <strong>{item.name}</strong>
                        <small>{item.count}</small>
                      </div>
                      <span className="rank-rating">{item.rating} ★</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Card 5: Recent Merchant Replies */}
              <section className="bottom-card">
                <div className="card-head">
                  <h3>Recent Merchant Replies</h3>
                  <button type="button" onClick={() => setRepliesModalOpen(true)}>View all</button>
                </div>
                <div className="reply-list">
                  {recentReplies.map((item) => (
                    <div className="reply-row" key={item.product} onClick={() => setRepliesModalOpen(true)}>
                      <span className="reply-thumb"><img src={productImages[item.image]} alt={item.product} /></span>
                      <div className="reply-copy">
                        <strong>{item.product}</strong>
                        <span>{item.meta}</span>
                        <p>{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Card 6: Moderation Notes */}
              <section className="bottom-card">
                <div className="card-head">
                  <h3>Moderation Notes</h3>
                  <button type="button" onClick={() => setNoteOpen(true)}>+ Add Note</button>
                </div>
                <div className="note-list">
                  {moderationNotes.map((n) => {
                    const Icon = n.icon;
                    return (
                      <div className="note-row" key={n.id} onClick={() => setNotesModalOpen(true)}>
                        <span className={`note-icon ${n.tone}`}><Icon /></span>
                        <div className="note-copy">
                          <strong>{n.title}</strong>
                          <span>{n.date} · By {n.author}</span>
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

      {/* Detail Modals for 6 Cards */}
      <AnimatePresence>
        {ratingModalOpen && (
          <RatingBreakdownModal
            onClose={() => setRatingModalOpen(false)}
            toast={(t) => showToast(t.message || "Rating report exported.")}
          />
        )}
        {flaggedModalOpen && (
          <FlaggedReviewsModal
            onClose={() => setFlaggedModalOpen(false)}
            toast={(t) => showToast(t.message || "Flagged queue exported.")}
          />
        )}
        {sentimentModalOpen && (
          <SentimentOverviewModal
            onClose={() => setSentimentModalOpen(false)}
            toast={(t) => showToast(t.message || "Sentiment report exported.")}
          />
        )}
        {topProductsModalOpen && (
          <TopReviewedProductsModal
            onClose={() => setTopProductsModalOpen(false)}
            toast={(t) => showToast(t.message || "Top products exported.")}
          />
        )}
        {repliesModalOpen && (
          <RecentMerchantRepliesModal
            onClose={() => setRepliesModalOpen(false)}
            toast={(t) => showToast(t.message || "Merchant replies exported.")}
          />
        )}
        {notesModalOpen && (
          <ModerationNotesModal
            onClose={() => setNotesModalOpen(false)}
            toast={(t) => showToast(t.message || "Moderation notes exported.")}
            onAddNote={() => { setNotesModalOpen(false); setNoteOpen(true); }}
          />
        )}
      </AnimatePresence>

      {/* Reply Modal */}
      <AnimatePresence>
        {replyReview && (
          <ReplyModal
            review={replyReview}
            onClose={() => setReplyReview(null)}
            onSave={saveReply}
          />
        )}
      </AnimatePresence>

      {/* Moderation Queue Modal */}
      <AnimatePresence>
        {moderationOpen && (
          <ModerationModal
            reviews={reviews}
            onClose={() => setModerationOpen(false)}
            onPublishFlagged={() => {
              setModerationOpen(false);
              setTab("Flagged");
              setStatus("All Statuses");
              showToast("Flagged review queue opened.");
            }}
          />
        )}
      </AnimatePresence>

      {/* Note Modal */}
      <AnimatePresence>
        {noteOpen && (
          <NoteModal
            onClose={() => setNoteOpen(false)}
            onSave={(note) => { setNoteOpen(false); showToast("Moderation note added."); }}
          />
        )}
      </AnimatePresence>

      {/* Delete Review Caution Modal */}
      <AnimatePresence>
        {deleteReviewTarget && (
          <DeleteReviewModal
            review={deleteReviewTarget}
            onClose={() => setDeleteReviewTarget(null)}
            onConfirm={deleteReview}
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
