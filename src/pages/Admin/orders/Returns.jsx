import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import AdminSidebar from "../../../components/Admin/AdminSidebar";
import AdminTopbar from "../../../components/Admin/AdminTopbar";
import KpiCard from "../../../components/Admin/KpiCard";
import ReturnsTable from "../../../components/Admin/ReturnsTable";
import MasterDropdown from "../../../components/Admin/MasterDropdown";
import AnimatedCheckbox from "../../../components/Admin/AnimatedCheckbox";
import MasterDatePicker from "../../../components/Admin/MasterDatePicker";
import IntegrationDetailsDrawer from "../../../components/Admin/IntegrationDetailsDrawer";
import SearchableDatabaseSelect from "../../../components/Admin/SearchableDatabaseSelect";
import { fetchAllOrders } from "../../../data/mockDatabase";
import {
  FiAlertCircle, FiAlertTriangle, FiBarChart2, FiBell, FiBox, FiCalendar, FiCheck, FiCheckCircle,
  FiChevronDown, FiChevronLeft, FiChevronRight, FiClock, FiCreditCard, FiDownload,
  FiEdit2, FiEye, FiExternalLink, FiFilter, FiGift, FiHeadphones, FiHelpCircle, FiHome,
  FiImage, FiMenu, FiPackage, FiPhone, FiPlus, FiRefreshCw, FiRotateCcw, FiSearch,
  FiSettings, FiShoppingBag, FiStar, FiTag, FiTrendingDown, FiTrendingUp, FiTruck,
  FiUser, FiUsers, FiX, FiXCircle
} from "react-icons/fi";

const returnsCss = `
.returns-scope {
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
  --admin-purple: #7157d9;
  --admin-shadow: 0 4px 14px rgba(0,0,0,.06);
}

.returns-split {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  align-items: start;
  margin-bottom: 18px;
  transition: grid-template-columns 0.25s ease;
}
.returns-split.has-selected {
  grid-template-columns: minmax(0, 1.62fr) minmax(330px, 0.78fr);
}

.returns-scope * { box-sizing: border-box; }
.returns-shell { min-height: 100vh; display: flex; background: var(--admin-surface); color: var(--admin-text); font-family: 'Manrope', system-ui, sans-serif; }
.returns-main { flex: 1; min-width: 0; display: flex; flex-direction: column; }
.returns-content { padding: 24px 28px 36px; }

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
  .returns-content { padding: 16px 14px 28px !important; }
  .pagehead { flex-direction: column !important; align-items: flex-start !important; gap: 12px !important; margin-bottom: 16px !important; }
  .pagehead h1 { font-size: 24px !important; }
  .pagehead p { font-size: 13px !important; line-height: 1.4 !important; }
  .pagehead > div:last-child { display: flex !important; flex-wrap: wrap !important; gap: 8px !important; width: 100% !important; }
  .primarybtn, .secondarybtn { height: 38px !important; padding: 0 14px !important; font-size: 12px !important; }
}

.btn { height: 40px; border-radius: 9px; padding: 0 14px; display: inline-flex; align-items: center; justify-content: center; gap: 8px; font-size: 12px; font-weight: 800; cursor: pointer; transition: all .18s; }
.btn.primary { border: 0; background: var(--admin-orange); color: #fff; }
.btn.secondary { border: 1px solid var(--admin-outline); background: #fff; color: var(--admin-text); }
.btn.danger { border: 1px solid #f3b3ad; background: #fff; color: var(--admin-red); }

.panel { background: #fff; border: 1px solid var(--admin-outline); border-radius: 10px; box-shadow: 0 4px 12px rgba(25,27,35,.05); overflow: hidden; }
.tabs { display: flex; gap: 2px; overflow-x: auto; padding: 0 10px; border-bottom: 1px solid var(--admin-surface-mid); scrollbar-width: none !important; -ms-overflow-style: none !important; }
.tabs::-webkit-scrollbar { display: none !important; width: 0 !important; height: 0 !important; }
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

.tablewrap { overflow-x: auto; scrollbar-width: none !important; -ms-overflow-style: none !important; }
.tablewrap::-webkit-scrollbar { display: none !important; width: 0 !important; height: 0 !important; }
table { width: 100%; border-collapse: collapse; min-width: 1080px; }
thead { background: #f3f3fe; }
th { height: 44px; padding: 0 14px; border-bottom: 1px solid #ededf8; text-align: left; font-size: 13px; font-weight: 800; color: #191b23; text-transform: uppercase; letter-spacing: .04em; white-space: nowrap; }
td { height: 62px; padding: 0 14px; border-bottom: 1px solid #ededf8; font-size: 12.5px; font-weight: 500; color: #191b23; vertical-align: middle; }
td strong { color: #191b23; font-weight: 500; }
.id { color: #0056c3; font-weight: 800; }
.customer, .product { display: flex; align-items: center; gap: 10px; }
.customer .avatar { width: 34px; height: 34px; font-size: 11px; font-weight: 800; background: #004094; color: #ffffff; border-radius: 50%; display: grid; place-items: center; flex-shrink: 0; }
.meta strong { display: block; font-size: 13px; color: #191b23; font-weight: 500; }
.meta small { display: block; font-size: 11px; color: #191b23; font-weight: 500; margin-top: 1px; }
.pthumb { width: 34px; height: 34px; border-radius: 50%; background: #004094; display: grid; place-items: center; color: #ffffff; font-weight: 800; font-size: 11px; flex-shrink: 0; }
.pmeta strong { display: block; font-size: 13px; color: #191b23; font-weight: 500; }
.pmeta small { display: block; margin-top: 1px; font-size: 11px; color: #191b23; font-weight: 500; }

.status { display: inline-flex; align-items: center; justify-content: center; height: 24px; padding: 0 12px; border-radius: 999px; font-size: 11px; font-weight: 800; white-space: nowrap; }
.status.requested { background: #e7efff; color: #2b65c8; }
.status.pending-approval, .status.pending { background: #fff0d8; color: #d66c00; }
.status.approved { background: #e1f6e8; color: #168447; }
.status.pickup-scheduled { background: #e3edff; color: #2864c8; }
.status.received { background: #ede8ff; color: #674ccd; }
.status.refunded { background: #dff6e6; color: #168447; }
.status.rejected { background: #ffe2df; color: #b32626; }
.actions { display: flex; gap: 6px; }
.actions button { width: 34px; height: 34px; border: 1px solid #c2c6d5; border-radius: 8px; background: #ffffff; color: #191b23; display: grid; place-items: center; font-size: 16px; cursor: pointer; transition: all .18s ease; }
.actions button:hover { background: #fff5f0; border-color: #fd661d; color: #fd661d; }
.pagination { display: flex; align-items: center; justify-content: space-between; padding: 12px 14px; }
.pagination span { font-size: 12px; font-weight: 600; color: var(--admin-muted); }
.pages { display: flex; gap: 5px; }
.pages button { width: 34px; height: 34px; border: 1px solid var(--admin-outline); background: #fff; border-radius: 7px; font-size: 12px; font-weight: 700; cursor: pointer; }
.pages button.active { background: var(--admin-primary-2); color: #fff; border-color: var(--admin-primary-2); }

.bottom { display: grid; grid-template-columns: 1.15fr 1fr; gap: 16px; margin-top: 18px; }
.bottom-card { background: #ffffff; border: 1px solid var(--admin-outline); border-radius: 12px; padding: 18px 20px; box-shadow: var(--admin-shadow); display: flex; flex-direction: column; }
.bottom-card-head { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; margin-bottom: 14px; }
.bottom-card-head h3 { margin: 0; font-size: 15px; font-weight: 800; color: var(--admin-text); }
.bottom-card-head p { margin: 3px 0 0; font-size: 12px; color: #667085; font-weight: 500; }
.link-btn { border: 0; background: transparent; color: var(--admin-primary-2); font-size: 12px; font-weight: 800; padding: 0; cursor: pointer; display: inline-flex; align-items: center; gap: 5px; transition: color .18s; }
.link-btn:hover { text-decoration: underline; color: var(--admin-primary); }
.policy-list { display: grid; gap: 9px; }
.policy-item { display: flex; align-items: flex-start; gap: 10px; padding: 10px 12px; border: 1px solid var(--admin-surface-mid); border-radius: 9px; background: #ffffff; transition: all .18s ease; }
.policy-item:hover { background: #f8faff; border-color: var(--admin-outline); }
.policy-ico { width: 24px; height: 24px; border-radius: 50%; background: #e3f8e8; color: #16a34a; display: grid; place-items: center; font-size: 13px; flex-shrink: 0; margin-top: 1px; }
.policy-text strong { display: block; font-size: 12px; font-weight: 700; color: var(--admin-text); }
.policy-text span { display: block; font-size: 11px; color: #667085; font-weight: 500; margin-top: 2px; }
.reasons-list { display: grid; gap: 11px; }
.reason-row { display: grid; gap: 5px; }
.reason-meta { display: flex; justify-content: space-between; align-items: center; font-size: 12px; }
.reason-meta strong { font-weight: 700; color: var(--admin-text); }
.reason-meta span { font-weight: 800; font-size: 11.5px; }
.reason-track { height: 7px; border-radius: 999px; background: var(--admin-surface-mid); overflow: hidden; }
.reason-bar { height: 100%; border-radius: 999px; }
.insight-box { margin-top: 14px; padding: 10px 12px; background: #f3f3fe; border-radius: 8px; font-size: 11.5px; font-weight: 600; color: #004094; display: flex; align-items: center; gap: 8px; }

@media(max-width: 900px) {
  .bottom { grid-template-columns: 1fr; }
}

.overlay { position: fixed; inset: 0; background: rgba(25,27,35,.55); backdrop-filter: blur(4px); z-index: 90; }
.drawer { position: absolute; right: 0; top: 0; width: min(540px, 100%); height: 100%; background: #fff; overflow-y: auto; padding: 20px; box-shadow: -8px 0 32px rgba(0,0,0,.15); }
.dhead { display: flex; justify-content: space-between; align-items: flex-start; gap: 10px; padding-bottom: 14px; border-bottom: 1px solid var(--admin-surface-mid); }
.dhead h2 { margin: 0; font-size: 22px; font-weight: 800; color: var(--admin-text); }
.dtitle { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
.dtabs { display: flex; gap: 18px; border-bottom: 1px solid var(--admin-surface-mid); margin-bottom: 14px; }
.dtabs button { height: 40px; border: 0; background: transparent; font-size: 12px; font-weight: 800; color: var(--admin-muted); position: relative; cursor: pointer; }
.dtabs button.active { color: var(--admin-primary-2); }
.dtabs button.active:after { content: ""; position: absolute; left: 0; right: 0; bottom: 0; height: 2px; background: var(--admin-primary-2); }
.section { padding: 14px 0; border-bottom: 1px solid var(--admin-surface-mid); }
.section h3 { margin: 0 0 10px; font-size: 13.5px; font-weight: 800; color: var(--admin-text); }
.ccard { display: flex; align-items: center; gap: 10px; }
.ccard .avatar { width: 38px; height: 38px; }
.ccard strong { font-size: 13px; font-weight: 800; color: var(--admin-text); }
.ccard small { display: block; margin-top: 3px; font-size: 11px; color: var(--admin-muted); font-weight: 500; }
.infogrid { display: grid; grid-template-columns: repeat(3,1fr); gap: 8px; margin-top: 10px; }
.info { border: 1px solid var(--admin-surface-mid); background: var(--admin-surface-low); border-radius: 8px; padding: 10px; }
.info span { font-size: 11px; color: var(--admin-text); font-weight: 800; }
.info strong { display: block; margin-top: 3px; font-size: 12.5px; color: var(--admin-muted); font-weight: 500; }
.productline { display: grid; grid-template-columns: 54px 1fr auto; gap: 10px; align-items: center; }
.productline .pthumb { width: 54px; height: 58px; }
.productline strong { font-size: 13px; font-weight: 500; color: var(--admin-muted); }
.productline small { display: block; margin-top: 3px; font-size: 11px; color: var(--admin-text); font-weight: 800; }
.kv { display: grid; grid-template-columns: 150px 1fr; gap: 8px 12px; }
.kv span { font-size: 12px; color: var(--admin-text); font-weight: 800; }
.kv strong { font-size: 12.5px; color: var(--admin-muted); font-weight: 500; }
.evidence { display: flex; gap: 8px; flex-wrap: wrap; }
.evidence div, .evidence button { width: 78px; height: 68px; border-radius: 8px; }
.evidence div { background: var(--admin-surface-low); display: grid; place-items: center; color: var(--admin-primary-2); font-size: 11px; font-weight: 800; border: 1px solid var(--admin-surface-mid); }
.evidence button { border: 1px dashed var(--admin-primary-2); background: #fff; color: var(--admin-primary-2); font-size: 11px; font-weight: 800; cursor: pointer; }
.refundgrid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
.refundgrid div { border: 1px solid var(--admin-surface-mid); background: var(--admin-surface-low); border-radius: 8px; padding: 10px; }
.refundgrid span { font-size: 11px; color: var(--admin-text); font-weight: 800; }
.refundgrid strong { display: block; margin-top: 3px; font-size: 13px; color: var(--admin-muted); font-weight: 500; }
.timeline { display: grid; gap: 11px; }
.trow { display: grid; grid-template-columns: 18px 1fr; gap: 8px; }
.tdot { width: 10px; height: 10px; border-radius: 50%; background: #fff; border: 2px solid var(--admin-outline); margin-top: 2px; position: relative; }
.trow.done .tdot { background: var(--admin-primary-2); border-color: var(--admin-primary-2); }
.trow:not(:last-child) .tdot:after { content: ""; position: absolute; left: 3px; top: 11px; width: 2px; height: 26px; background: var(--admin-surface-high); }
.trow strong { display: block; font-size: 12px; font-weight: 800; color: var(--admin-text); }
.trow small { font-size: 11px; color: var(--admin-muted); font-weight: 500; }
.dactions { position: sticky; bottom: 0; background: #fff; padding-top: 14px; display: flex; gap: 8px; }

.modalwrap { position: fixed; inset: 0; background: rgba(25,27,35,.55); backdrop-filter: blur(4px); z-index: 100; display: grid; place-items: center; padding: 16px; }
.modal { width: min(620px, 100%); max-height: 90vh; overflow-y: auto; background: #fff; border-radius: 12px; box-shadow: 0 18px 50px rgba(25,27,35,.12); padding: 18px; border: 1px solid var(--admin-outline); }
.mhead { display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--admin-surface-mid); padding-bottom: 12px; }
.mhead h2 { margin: 0; font-size: 20px; font-weight: 800; color: var(--admin-text); }
.formgrid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 14px; }
.f { display: grid; gap: 6px; }
.f label { font-size: 12px; font-weight: 800; color: var(--admin-text); }
.f input, .f select { width: 100%; border: 1px solid var(--admin-outline); border-radius: 8px; background: #fff; padding: 10px; font-size: 13px; font-weight: 600; outline: none; }
.mactions { display: flex; justify-content: flex-end; gap: 8px; margin-top: 16px; }
.create-return-modal { overflow: visible !important; }
.modal-field-dropdown { width: 100% !important; display: block !important; position: relative !important; }
.modal-field-dropdown .master-dropdown-trigger { width: 100% !important; height: 39px !important; padding: 0 12px !important; border: 1px solid var(--admin-outline) !important; border-radius: 8px !important; background: #fff !important; justify-content: space-between !important; font-size: 13px !important; font-weight: 500 !important; color: var(--admin-text) !important; }
.modal-field-dropdown .master-dropdown-trigger:hover { border-color: var(--admin-primary-2) !important; }
.modal-field-dropdown .master-dropdown-menu { width: 100% !important; max-height: 200px !important; overflow-y: auto !important; z-index: 9999 !important; box-shadow: 0 12px 36px rgba(25, 27, 35, 0.2) !important; }

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
.toast { position: fixed; right: 18px; bottom: 18px; z-index: 120; background: var(--admin-text); color: #fff; border-radius: 99px; padding: 12px 14px; box-shadow: 0 18px 50px rgba(25,27,35,.12); font-size: 12px; font-weight: 600; display: flex; align-items: center; gap: 8px; }

@media(min-width:1050px){ .topbar .menu-toggle-btn.desktop-hidden { display: none; } }
@media(max-width:1050px){ .desktop-sidebar-wrapper{display:none!important;} }

@media(max-width:650px){
  .returns-scope .returns-content {
    padding: 14px 10px 24px !important;
    max-width: 100vw;
    overflow-x: clip;
    box-sizing: border-box;
  }
  .returns-scope .pagehead {
    flex-direction: column !important;
    align-items: flex-start !important;
    gap: 10px !important;
    margin-bottom: 14px !important;
  }
  .returns-scope .pagehead h1 { font-size: 22px !important; }
  .returns-scope .pagehead p { font-size: 12px !important; margin-top: 2px !important; }
  .returns-scope .pagehead > div:last-child {
    display: flex !important;
    flex-wrap: wrap !important;
    gap: 8px !important;
    width: 100% !important;
  }
  .returns-scope .primarybtn,
  .returns-scope .secondarybtn {
    height: 38px !important;
    padding: 0 14px !important;
    font-size: 12px !important;
    flex: 1 1 auto !important;
    justify-content: center !important;
  }
  .returns-scope .kpi-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    gap: 8px !important;
    margin-bottom: 14px !important;
  }
  .returns-scope .returns-split {
    width: 100% !important;
    max-width: 100% !important;
    min-width: 0 !important;
    box-sizing: border-box !important;
    overflow: hidden !important;
  }
  .returns-scope .panel {
    width: 100% !important;
    max-width: 100% !important;
    min-width: 0 !important;
    box-sizing: border-box !important;
    overflow: hidden !important;
  }
  .returns-scope .tabs {
    padding: 0 6px !important;
    gap: 2px !important;
  }
  .returns-scope .tab {
    padding: 0 10px !important;
    font-size: 11.5px !important;
  }
  .returns-scope .filters {
    display: grid !important;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) !important;
    gap: 8px !important;
    padding: 10px 12px !important;
    width: 100% !important;
    box-sizing: border-box !important;
  }
  .returns-scope .filters .field:first-child {
    grid-column: 1 / -1 !important;
    width: 100% !important;
    max-width: none !important;
    height: 38px !important;
    box-sizing: border-box !important;
  }
  .returns-scope .filters .master-dropdown,
  .returns-scope .filters .master-date-picker {
    width: 100% !important;
    min-width: 0 !important;
    display: block !important;
    box-sizing: border-box !important;
  }
  .returns-scope .filters .master-dropdown-trigger,
  .returns-scope .filters .master-date-picker-trigger {
    width: 100% !important;
    min-width: 0 !important;
    height: 38px !important;
    padding: 0 10px !important;
    justify-content: space-between !important;
    font-size: 11.5px !important;
    box-sizing: border-box !important;
  }
  .returns-scope .filters .master-dropdown-label {
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    white-space: nowrap !important;
    font-size: 11.5px !important;
  }
  .returns-scope .filters .filterbtn {
    width: 100% !important;
    min-width: 0 !important;
    height: 38px !important;
    padding: 0 10px !important;
    font-size: 11.5px !important;
    justify-content: center !important;
    box-sizing: border-box !important;
  }
  .returns-scope .selbar {
    padding: 8px 12px !important;
    font-size: 11px !important;
    flex-wrap: wrap !important;
    gap: 8px !important;
    box-sizing: border-box !important;
  }
  .returns-scope .selbar .spacer { display: none !important; }
  .returns-scope .bottom {
    grid-template-columns: 1fr !important;
    gap: 12px !important;
  }
  .returns-scope .bottom-card {
    padding: 14px 14px 16px !important;
  }
  .returns-scope .bottom-card-head {
    display: flex !important;
    align-items: flex-start !important;
    justify-content: space-between !important;
    gap: 10px !important;
    margin-bottom: 12px !important;
  }
  .returns-scope .bottom-card-head h3 {
    font-size: 14px !important;
  }
  .returns-scope .bottom-card-head p {
    font-size: 11px !important;
    line-height: 1.35 !important;
  }
  .returns-scope .link-btn {
    padding: 5px 10px !important;
    background: #eff6ff !important;
    border: 1px solid #bfdbfe !important;
    border-radius: 6px !important;
    font-size: 11.5px !important;
    font-weight: 800 !important;
    color: #0056c3 !important;
    white-space: nowrap !important;
    flex-shrink: 0 !important;
    gap: 4px !important;
  }
  .returns-scope .bottom-card-head span {
    white-space: nowrap !important;
    flex-shrink: 0 !important;
    font-size: 10.5px !important;
    font-weight: 800 !important;
    padding: 4px 9px !important;
    display: inline-flex !important;
    align-items: center !important;
    border-radius: 999px !important;
  }
  .returns-scope .modalwrap {
    padding: 12px 10px !important;
  }
  .returns-scope .modal {
    width: calc(100vw - 20px) !important;
    max-width: 100% !important;
    padding: 14px 12px !important;
    max-height: 88vh !important;
    overflow-y: auto !important;
    -webkit-overflow-scrolling: touch !important;
    box-sizing: border-box !important;
  }
  .returns-scope .mhead h2 {
    font-size: 18px !important;
  }
  .returns-scope .formgrid {
    grid-template-columns: 1fr !important;
    gap: 10px !important;
  }
  .returns-scope .mactions {
    flex-direction: column-reverse !important;
    gap: 8px !important;
  }
  .returns-scope .mactions button,
  .returns-scope .mactions .btn {
    width: 100% !important;
    justify-content: center !important;
    height: 38px !important;
    font-size: 12.5px !important;
  }
  .returns-scope .db-fetch-header {
    flex-direction: column !important;
    align-items: flex-start !important;
    gap: 4px !important;
    width: 100% !important;
    max-width: 100% !important;
    box-sizing: border-box !important;
  }
  .returns-scope .db-fetch-label {
    width: 100% !important;
    max-width: 100% !important;
    font-size: 11.5px !important;
    word-break: break-word !important;
    overflow-wrap: break-word !important;
  }
  .returns-scope .db-fetch-badge-success {
    font-size: 10.5px !important;
    width: auto !important;
    max-width: 100% !important;
    white-space: normal !important;
    word-break: break-word !important;
  }
}
`;

const initial = [
  {id:"#RTN12548",order:"#AMH1250",customer:"Priya Sharma",email:"priya@gmail.com",product:"Linen Blend Shirt",variant:"M / White",category:"Men > Shirts",reason:"Size too small",requested:"May 18, 2025 10:24 AM",status:"Pending Approval",refund:2549,refundStatus:"Pending"},
  {id:"#RTN12547",order:"#AMH1249",customer:"Arjun Mehta",email:"arjun@gmail.com",product:"Leather Tote Bag",variant:"Brown",category:"Bags > Tote",reason:"Not as described",requested:"May 18, 2025 09:45 AM",status:"Pickup Scheduled",refund:1299,refundStatus:"-"},
  {id:"#RTN12546",order:"#AMH1248",customer:"Sneha Iyer",email:"sneha@gmail.com",product:"Ceramic Vase Set",variant:"Set of 3",category:"Home > Decor",reason:"Received damaged",requested:"May 17, 2025 01:15 PM",status:"Received",refund:3199,refundStatus:"Pending"},
  {id:"#RTN12545",order:"#AMH1247",customer:"Karan Verma",email:"karan@gmail.com",product:"Wireless Earbuds",variant:"Black",category:"Electronics > Audio",reason:"Not working",requested:"May 17, 2025 04:40 PM",status:"Approved",refund:899,refundStatus:"Pending"},
  {id:"#RTN12544",order:"#AMH1246",customer:"Ananya Rao",email:"ananya@gmail.com",product:"Vitamin C Serum",variant:"30ml",category:"Beauty > Skincare",reason:"Changed my mind",requested:"May 17, 2025 05:20 PM",status:"Refunded",refund:1199,refundStatus:"Refunded"},
  {id:"#RTN12543",order:"#AMH1245",customer:"Rohit Kapoor",email:"rohit@gmail.com",product:"Cotton Bedsheet",variant:"King / Grey",category:"Home > Bedding",reason:"Wrong item sent",requested:"May 16, 2025 03:35 PM",status:"Rejected",refund:1599,refundStatus:"-"},
  {id:"#RTN12542",order:"#AMH1244",customer:"Neha Pathak",email:"neha@gmail.com",product:"Scented Candle",variant:"Lavender",category:"Home > Fragrance",reason:"Product leaked",requested:"May 16, 2025 03:22 PM",status:"Received",refund:649,refundStatus:"Pending"},
  {id:"#RTN12541",order:"#AMH1243",customer:"Vikram Singh",email:"vikram@gmail.com",product:"Running Shoes",variant:"UK 9 / Black",category:"Footwear > Men",reason:"Size too large",requested:"May 16, 2025 02:10 PM",status:"Requested",refund:2799,refundStatus:"-"}
];

const tabs = ["All","Requested","Approved","Pickup Scheduled","Received","Refunded","Rejected"];
const reasons = ["All Reasons","Size too small","Size too large","Not as described","Received damaged","Not working","Changed my mind","Wrong item sent","Product leaked"];
const cats = ["All Categories","Men > Shirts","Bags > Tote","Home > Decor","Electronics > Audio","Beauty > Skincare","Home > Bedding","Home > Fragrance","Footwear > Men"];

const Status = ({value}) => !value || value === "-" ? <span style={{color:"var(--admin-muted)"}}>-</span> : <span className={`status ${value.toLowerCase().replaceAll(" ","-")}`}>{value}</span>;

function Drawer({item,onClose,onUpdate,toast}){
  const [tab,setTab]=useState("Details");
  const steps=["Requested","Approved","Pickup Scheduled","Received","Inspected","Refunded"];
  const done={Requested:0,"Pending Approval":0,Approved:1,"Pickup Scheduled":2,Received:3,Refunded:5,Rejected:0}[item.status]??0;
  const upd=(status,refundStatus=item.refundStatus)=>{onUpdate(item.id,{status,refundStatus});toast(`Return ${item.id} updated to ${status}.`)};

  return <motion.div className="overlay" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={onClose}>
    <motion.aside className="drawer" initial={{x:"100%"}} animate={{x:0}} exit={{x:"100%"}} transition={{duration:.25}} onClick={e=>e.stopPropagation()}>
      <div className="dhead">
        <div className="dtitle"><h2>Return {item.id}</h2><Status value={item.status}/></div>
        <button className="menu-toggle-btn" onClick={onClose}><FiX/></button>
      </div>

      <div className="dtabs">
        {["Details","Activity"].map(x=><button key={x} className={tab===x?"active":""} onClick={()=>setTab(x)}>{x}</button>)}
      </div>

      {tab==="Details" ? (
        <>
          <div className="section">
            <h3>Customer</h3>
            <div className="ccard">
              <span className="avatar">{item.customer.split(" ").map(x=>x[0]).join("").slice(0,2)}</span>
              <div><strong>{item.customer}</strong><small>{item.email} · +91 98765 43210</small></div>
              <button className="btn secondary" style={{marginLeft:"auto",height:32}}>View Profile</button>
            </div>
            <div className="infogrid">
              <div className="info"><span>Order ID</span><strong>{item.order}</strong></div>
              <div className="info"><span>Order Date</span><strong>May 18, 2025</strong></div>
              <div className="info"><span>Payment Method</span><strong>Razorpay</strong></div>
            </div>
          </div>

          <div className="section">
            <h3>Product</h3>
            <div className="productline">
              <div className="pthumb">01</div>
              <div><strong>{item.product}</strong><small>{item.variant}</small><small>{item.category}</small></div>
              <strong>₹{item.refund.toLocaleString("en-IN")}</strong>
            </div>
          </div>

          <div className="section">
            <h3>Return Details</h3>
            <div className="kv">
              <span>Reason</span><strong>{item.reason}</strong>
              <span>Additional Context</span><strong>Customer supplied return notes for review.</strong>
              <span>Requested On</span><strong>{item.requested}</strong>
              <span>Preferred Refund</span><strong>Original Payment Method</strong>
            </div>
          </div>

          <div className="section">
            <h3>Evidence Photos</h3>
            <div className="evidence">
              <div>Front</div>
              <div>Label</div>
              <div>Packaging</div>
              <button onClick={()=>toast("Evidence upload action opened.")}><FiPlus/> Add</button>
            </div>
          </div>

          <div className="section">
            <h3>Refund Summary</h3>
            <div className="refundgrid">
              <div><span>Refund Amount</span><strong>₹{item.refund.toLocaleString("en-IN")}</strong></div>
              <div><span>Shipping Fee</span><strong>₹0</strong></div>
              <div><span>Total Refund</span><strong style={{color:"#168447"}}>₹{item.refund.toLocaleString("en-IN")}</strong></div>
            </div>
          </div>

          <div className="section">
            <h3>Return Timeline</h3>
            <div className="timeline">
              {steps.map((step,i)=><div className={`trow ${i<=done?"done":""}`} key={step}>
                <div className="tdot"/>
                <div><strong>{step}</strong><small>{i<=done?(i===0?item.requested:"Completed"):"Pending"}</small></div>
              </div>)}
            </div>
          </div>
        </>
      ) : (
        <div className="section">
          <h3>Activity Log</h3>
          <div className="timeline">
            {["Return request created","Customer details verified","Automated policy check passed"].map((x,i)=><div className="trow done" key={x}>
              <div className="tdot"/>
              <div><strong>{x}</strong><small>{i===0?item.requested:"System activity"}</small></div>
            </div>)}
          </div>
        </div>
      )}

      <div className="dactions">
        <button className="btn danger" onClick={()=>upd("Rejected","-")}><FiXCircle/> Reject Return</button>
        <button className="btn primary" onClick={()=>upd("Approved","Pending")}><FiCheck/> Approve Return</button>
      </div>
    </motion.aside>
  </motion.div>
}

function CreateModal({onClose,onCreate}){
  const [f,setF]=useState({order:"",customer:"",email:"",product:"",variant:"",category:"Men > Shirts",reason:"Size too small",refund:""});
  const [dbOrders] = useState(() => fetchAllOrders());
  const [selectedOrder, setSelectedOrder] = useState(null);

  const change=e=>setF({...f,[e.target.name]:e.target.value});

  const handleSelectOrder = (order) => {
    setSelectedOrder(order);
    setF(prev => ({
      ...prev,
      order: order.id,
      customer: order.customer || prev.customer,
      email: order.email || prev.email,
      product: order.product || prev.product,
      variant: order.variant || prev.variant,
      category: order.category || prev.category,
      refund: order.amount || (Number(String(order.total || "").replace(/\D/g, "")) || prev.refund)
    }));
  };

  const submit=e=>{
    e.preventDefault();
    if(!f.customer||!f.product||!f.refund)return;
    onCreate({
      id:`#RTN${Math.floor(13000+Math.random()*8000)}`,
      order:f.order || "#AMH1250",
      customer:f.customer,
      email:f.email||"customer@email.com",
      product:f.product,
      variant:f.variant||"Standard",
      category:f.category,
      reason:f.reason,
      requested:new Date().toLocaleString("en-IN"),
      status:"Requested",
      refund:Number(f.refund),
      refundStatus:"-"
    });
  };

  const categoryOptions = cats.slice(1);
  const reasonOptions = reasons.slice(1);

  return (
    <motion.div className="modalwrap" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={onClose}>
      <motion.form className="modal create-return-modal" initial={{y:20,scale:.98}} animate={{y:0,scale:1}} exit={{y:20,scale:.98}} onClick={e=>e.stopPropagation()} onSubmit={submit}>
        <div className="mhead"><h2>Create Return</h2><button type="button" className="menu-toggle-btn" onClick={onClose}><FiX/></button></div>
        <div className="formgrid">
          {/* Order Search & Fetch Field */}
          <div className="f" style={{ gridColumn: "1 / -1" }}>
            <div className="db-fetch-header">
              <label className="db-fetch-label">
                Order ID <span className="db-fetch-hint">(Fetch from Orders Database)</span>
              </label>
              {selectedOrder && (
                <span className="db-fetch-badge-success">
                  ✓ Auto-fetched from {selectedOrder.id}
                </span>
              )}
            </div>
            <SearchableDatabaseSelect
              type="order"
              items={dbOrders}
              value={f.order}
              placeholder="Search by Order ID / customer name"
              onSelect={handleSelectOrder}
            />
          </div>

          <div className="f">
            <label>Order ID</label>
            <input name="order" value={f.order} onChange={change} placeholder="#AMH1250" required />
          </div>

          <div className="f">
            <label>Customer Name</label>
            <input name="customer" value={f.customer} onChange={change} placeholder="Customer Name" required />
          </div>

          <div className="f">
            <label>Email</label>
            <input type="email" name="email" value={f.email} onChange={change} placeholder="customer@example.com" />
          </div>

          <div className="f">
            <label>Product</label>
            <input name="product" value={f.product} onChange={change} placeholder="Product Name" required />
          </div>

          <div className="f">
            <label>Variant</label>
            <input name="variant" value={f.variant} onChange={change} placeholder="e.g. M / White" />
          </div>

          <div className="f">
            <label>Category</label>
            <MasterDropdown
              options={categoryOptions}
              value={f.category}
              onChange={(val) => setF((prev) => ({ ...prev, category: val }))}
              className="modal-field-dropdown"
            />
          </div>

          <div className="f">
            <label>Reason</label>
            <MasterDropdown
              options={reasonOptions}
              value={f.reason}
              onChange={(val) => setF((prev) => ({ ...prev, reason: val }))}
              className="modal-field-dropdown"
            />
          </div>

          <div className="f">
            <label>Refund Amount (₹)</label>
            <input type="number" name="refund" value={f.refund} onChange={change} placeholder="e.g. 2549" required />
          </div>
        </div>
        <div className="mactions">
          <button type="button" className="btn secondary" onClick={onClose}>Cancel</button>
          <button className="btn primary"><FiPlus/> Create Return</button>
        </div>
      </motion.form>
    </motion.div>
  );
}

const defaultPolicyData = {
  windowDays: "7",
  windowDesc: "Return window is 7 days from delivery date for most items.",
  condition: "Products must be unused, unwashed and in original condition.",
  packaging: "Original packaging, tags and labels must remain intact.",
  exceptions: "Custom-made, hygiene, and perishable items are non-returnable.",
  reversePickup: "Free doorstep reverse pickup scheduled within 24–48 hours."
};

function EditPolicyModal({ policy, onClose, onSave }) {
  const [f, setF] = useState(policy);
  const change = (e) => setF({ ...f, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    onSave(f);
  };

  return (
    <motion.div className="modalwrap" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.form className="modal" initial={{ y: 20, scale: 0.98 }} animate={{ y: 0, scale: 1 }} exit={{ y: 20, scale: 0.98 }} onClick={(e) => e.stopPropagation()} onSubmit={submit}>
        <div className="mhead">
          <h2>Edit Return Policy</h2>
          <button type="button" className="menu-toggle-btn" onClick={onClose}><FiX /></button>
        </div>
        <div className="formgrid">
          <div className="f">
            <label>Return Window (Days)</label>
            <input name="windowDays" value={f.windowDays} onChange={change} placeholder="e.g. 7" required />
          </div>
          <div className="f">
            <label>Reverse Pickup Timeline</label>
            <input name="reversePickup" value={f.reversePickup} onChange={change} placeholder="e.g. Free reverse pickup within 24-48 hrs" required />
          </div>
          <div className="f" style={{ gridColumn: "1 / 3" }}>
            <label>Return Window Summary</label>
            <input name="windowDesc" value={f.windowDesc} onChange={change} placeholder="e.g. Return window is 7 days from delivery date." required />
          </div>
          <div className="f" style={{ gridColumn: "1 / 3" }}>
            <label>Product Condition Requirement</label>
            <textarea
              name="condition"
              value={f.condition}
              onChange={change}
              rows={2}
              style={{ width: "100%", border: "1px solid var(--admin-outline)", borderRadius: "8px", padding: "10px", fontSize: "13px", fontWeight: 600, outline: "none", fontFamily: "inherit", resize: "vertical" }}
              required
            />
          </div>
          <div className="f" style={{ gridColumn: "1 / 3" }}>
            <label>Packaging & Tags Requirement</label>
            <textarea
              name="packaging"
              value={f.packaging}
              onChange={change}
              rows={2}
              style={{ width: "100%", border: "1px solid var(--admin-outline)", borderRadius: "8px", padding: "10px", fontSize: "13px", fontWeight: 600, outline: "none", fontFamily: "inherit", resize: "vertical" }}
              required
            />
          </div>
          <div className="f" style={{ gridColumn: "1 / 3" }}>
            <label>Exceptions & Non-Returnable Items</label>
            <textarea
              name="exceptions"
              value={f.exceptions}
              onChange={change}
              rows={2}
              style={{ width: "100%", border: "1px solid var(--admin-outline)", borderRadius: "8px", padding: "10px", fontSize: "13px", fontWeight: 600, outline: "none", fontFamily: "inherit", resize: "vertical" }}
              required
            />
          </div>
        </div>
        <div className="mactions">
          <button type="button" className="btn secondary" onClick={onClose}>Cancel</button>
          <button type="submit" className="btn primary"><FiCheck /> Save Policy</button>
        </div>
      </motion.form>
    </motion.div>
  );
}

export default function ReturnsManagement(){
  const [desktopSidebarOpen, setDesktopSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [data,setData]=useState(initial);
  const [policy, setPolicy] = useState(defaultPolicyData);
  const [policyModalOpen, setPolicyModalOpen] = useState(false);
  const [tab,setTab]=useState("All");
  const [search,setSearch]=useState("");
  const [reason,setReason]=useState("All Reasons");
  const [refundStatus,setRefundStatus]=useState("All");
  const [cat,setCat]=useState("All Categories");
  const [dateFilter,setDateFilter]=useState("Last 7 Days");
  const [selected,setSelected]=useState([]);
  const [drawer,setDrawer]=useState(null);
  const [create,setCreate]=useState(false);
  const [quick,setQuick]=useState(false);
  const [toast,setToast]=useState("");

  const showToast=m=>{setToast(m);setTimeout(()=>setToast(""),2400)};
  const filtered=useMemo(()=>data.filter(x=>{
    const q=search.trim().toLowerCase();
    return (tab==="All"||x.status===tab)&&(!q||[x.id,x.order,x.customer,x.email,x.product,x.reason].some(v=>String(v).toLowerCase().includes(q)))&&(reason==="All Reasons"||x.reason===reason)&&(refundStatus==="All"||x.refundStatus===refundStatus)&&(cat==="All Categories"||x.category===cat);
  }),[data,tab,search,reason,refundStatus,cat]);

  const counts=Object.fromEntries(tabs.map(t=>[t,t==="All"?data.length:data.filter(x=>x.status===t).length]));
  const kpis=[["Total Returns","1,248","+10.2%","vs last 7 days","blue",FiRotateCcw],["Pending Approval","126","+12.5%","vs last 7 days","orange",FiClock],["Pickup Scheduled","82","+9.4%","vs last 7 days","blue",FiTruck],["Received","64","+7.3%","vs last 7 days","purple",FiPackage],["Refund Pending","38","-4.1%","vs last 7 days","red",FiAlertTriangle],["Refunded","878","+16.6%","vs last 7 days","green",FiCheckCircle]];

  const update=(id,patch)=>{setData(d=>d.map(x=>x.id===id?{...x,...patch}:x));setDrawer(d=>d?.id===id?{...d,...patch}:d)};
  const bulk=status=>{setData(d=>d.map(x=>selected.includes(x.id)?{...x,status}:x));showToast(`${selected.length} return(s) updated to ${status}.`);setSelected([])};

  const handleToggleMenu = () => {
    if (window.innerWidth < 1050) {
      setMobileMenuOpen(prev => !prev);
    } else {
      setDesktopSidebarOpen(prev => !prev);
    }
  };

  const exportCsv=()=>{
    const rows=[["Return ID","Order ID","Customer","Product","Reason","Status","Refund"],...filtered.map(x=>[x.id,x.order,x.customer,x.product,x.reason,x.status,x.refund])];
    const csv=rows.map(r=>r.map(v=>`"${String(v).replaceAll('"','""')}"`).join(",")).join("\n");
    const blob=new Blob([csv],{type:"text/csv"});
    const url=URL.createObjectURL(blob);
    const a=document.createElement("a");
    a.href=url;
    a.download="returns.csv";
    a.click();
    URL.revokeObjectURL(url);
    showToast("Returns exported successfully.");
  };

  return (
    <div className="returns-scope">
      <style>{returnsCss}</style>
      <div className="returns-shell">
        <div className={`desktop-sidebar-wrapper ${!desktopSidebarOpen ? "is-closed" : ""}`}>
          <AdminSidebar activePage="Returns" onClose={() => setDesktopSidebarOpen(false)} />
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
              <AdminSidebar activePage="Returns" mobile onClose={() => setMobileMenuOpen(false)} />
            </div>
          )}
        </AnimatePresence>

        <main className="returns-main">
          <AdminTopbar onToggleMenu={handleToggleMenu} desktopSidebarOpen={desktopSidebarOpen} />

          <div className="returns-content">
            <div className="pagehead">
              <div>
                <h1>Return Orders Management</h1>
                <p>Manage return requests, approvals, pickups, inspections, and refunds seamlessly.</p>
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                <button className="secondarybtn" onClick={exportCsv}><FiDownload/> Export</button>
                <button className="secondarybtn" onClick={() => selected.length ? bulk("Approved") : showToast("Select one or more returns to approve.")}><FiCheckCircle/> Approve Return</button>
                <button className="primarybtn" onClick={() => setCreate(true)}><FiPlus/> Create Return</button>
              </div>
            </div>

            <section className="kpi-grid">
              {kpis.map(x=><KpiCard item={x} key={x[0]}/>)}
            </section>

            <div className={`returns-split ${drawer ? "has-selected" : ""}`}>
              <section className="panel">
                <div className="tabs">
                  {tabs.map(x=><button className={`tab ${tab===x?"active":""}`} onClick={()=>setTab(x)} key={x}>{x}<b>{x==="All"?"1,248":counts[x]}</b></button>)}
                </div>

                <div className="filters">
                  <label className="field search-field"><FiSearch/><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search return ID, order ID, customer..."/></label>
                  <MasterDropdown options={reasons} value={reason} onChange={setReason} />
                  <MasterDropdown options={["All", "Pending", "Refunded", "-"]} value={refundStatus} onChange={setRefundStatus} />
                  <MasterDatePicker value={dateFilter} onChange={setDateFilter} />
                  <MasterDropdown options={cats} value={cat} onChange={setCat} />
                  <button className="filterbtn" onClick={()=>showToast("Additional filters ready.")}><FiFilter/> Filters</button>
                </div>

                <div className="selbar">
                  <AnimatedCheckbox checked={filtered.length>0&&selected.length===filtered.length} onChange={e=>setSelected(e.target.checked?filtered.map(x=>x.id):[])}/>
                  <strong>{selected.length} selected</strong><span>Select all {filtered.length} on this page</span>
                  <div className="spacer"/>
                  <button className="clear" onClick={()=>selected.length>0?setSelected([]):showToast("No items are currently selected.")}>Clear selection</button>
                  <MasterDropdown
                    staticLabel="Bulk Actions"
                    rightAlign
                    options={[
                      {
                        label: "Approve selected",
                        action: () => {
                          if (selected.length === 0) showToast("Please select items first.");
                          else bulk("Approved");
                        },
                      },
                      {
                        label: "Mark received",
                        action: () => {
                          if (selected.length === 0) showToast("Please select items first.");
                          else bulk("Received");
                        },
                      },
                      {
                        label: "Reject selected",
                        action: () => {
                          if (selected.length === 0) showToast("Please select items first.");
                          else bulk("Rejected");
                        },
                      },
                      {
                        label: "Clear selection",
                        action: () => {
                          if (selected.length === 0) showToast("No items are currently selected.");
                          else setSelected([]);
                        },
                      },
                    ]}
                  />
                </div>

                <div style={{ marginTop: 14 }}>
                  <ReturnsTable
                    returns={filtered}
                    selected={selected}
                    activeReturnId={drawer?.id}
                    onToggle={(id) => setSelected(s => s.includes(id) ? s.filter(v => v !== id) : [...s, id])}
                    onViewDetails={(item) => setDrawer(curr => curr?.id === item.id ? null : item)}
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
                      title="Return Details"
                      onClose={() => setDrawer(null)}
                      onEdit={() => {
                        const nextStatus = drawer.status === "Approved" ? "Received" : drawer.status === "Received" ? "Refunded" : "Approved";
                        const nextRefund = nextStatus === "Refunded" ? "Refunded" : "Pending";
                        update(drawer.id, { status: nextStatus, refundStatus: nextRefund });
                        showToast(`Return ${drawer.id} updated to ${nextStatus}.`);
                      }}
                      onToast={showToast}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <section className="bottom">
              {/* Card 1: Return Policy */}
              <article className="bottom-card">
                <div className="bottom-card-head">
                  <div>
                    <h3>Return Policy</h3>
                    <p>Active store return rules & reviewer guidelines</p>
                  </div>
                  <button
                    type="button"
                    className="link-btn"
                    onClick={() => setPolicyModalOpen(true)}
                  >
                    <FiEdit2 size={13} /> Edit Policy
                  </button>
                </div>
                <div className="policy-list">
                  <div className="policy-item">
                    <div className="policy-ico"><FiCheck /></div>
                    <div className="policy-text">
                      <strong>{policy.windowDays} Days Return Window</strong>
                      <span>{policy.windowDesc}</span>
                    </div>
                  </div>
                  <div className="policy-item">
                    <div className="policy-ico"><FiCheck /></div>
                    <div className="policy-text">
                      <strong>Condition Requirement</strong>
                      <span>{policy.condition}</span>
                    </div>
                  </div>
                  <div className="policy-item">
                    <div className="policy-ico"><FiCheck /></div>
                    <div className="policy-text">
                      <strong>Packaging & Labels</strong>
                      <span>{policy.packaging}</span>
                    </div>
                  </div>
                  <div className="policy-item">
                    <div className="policy-ico" style={{ background: "#fff0df", color: "#fd661d" }}><FiAlertCircle /></div>
                    <div className="policy-text">
                      <strong>Non-Returnable Exceptions</strong>
                      <span>{policy.exceptions}</span>
                    </div>
                  </div>
                  <div className="policy-item">
                    <div className="policy-ico" style={{ background: "#e7efff", color: "#0056c3" }}><FiTruck /></div>
                    <div className="policy-text">
                      <strong>Reverse Logistics SLA</strong>
                      <span>{policy.reversePickup}</span>
                    </div>
                  </div>
                </div>
              </article>

              {/* Card 2: Top Return Reasons */}
              <article className="bottom-card">
                <div className="bottom-card-head">
                  <div>
                    <h3>Top Return Reasons</h3>
                    <p>Breakdown by frequency & volume this period</p>
                  </div>
                  <span style={{
                    fontSize: "11px",
                    fontWeight: 800,
                    color: "#0056c3",
                    background: "#e7efff",
                    padding: "3px 8px",
                    borderRadius: "999px"
                  }}>
                    Last 7 Days
                  </span>
                </div>
                <div className="reasons-list">
                  {[
                    { reason: "Size issues", pct: 32, count: "399 returns", color: "#0056c3" },
                    { reason: "Not as described", pct: 21, count: "262 returns", color: "#fd661d" },
                    { reason: "Received damaged", pct: 19, count: "237 returns", color: "#e5484d" },
                    { reason: "Changed my mind", pct: 15, count: "187 returns", color: "#7c4dff" },
                    { reason: "Other reasons", pct: 13, count: "163 returns", color: "#6b7280" }
                  ].map((item) => (
                    <div className="reason-row" key={item.reason}>
                      <div className="reason-meta">
                        <strong>{item.reason} <small style={{ color: "#667085", fontWeight: 500, marginLeft: 4 }}>({item.count})</small></strong>
                        <span style={{ color: item.color }}>{item.pct}%</span>
                      </div>
                      <div className="reason-track">
                        <div
                          className="reason-bar"
                          style={{ width: `${item.pct}%`, background: item.color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="insight-box">
                  <FiHelpCircle size={15} style={{ flexShrink: 0 }} />
                  <span>Size mismatches represent 32% of total returns. Consider adding fitting guides.</span>
                </div>
              </article>
            </section>
          </div>
        </main>
      </div>

      <AnimatePresence>{create && <CreateModal onClose={()=>setCreate(false)} onCreate={x=>{setData(d=>[x,...d]);setCreate(false);showToast("Return created successfully.")}}/>}</AnimatePresence>
      <AnimatePresence>{policyModalOpen && <EditPolicyModal policy={policy} onClose={()=>setPolicyModalOpen(false)} onSave={p => { setPolicy(p); setPolicyModalOpen(false); showToast("Return policy updated successfully."); }}/>}</AnimatePresence>
      <AnimatePresence>{toast && <motion.div className="toast" initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} exit={{opacity:0,y:12}}><FiCheckCircle/>{toast}</motion.div>}</AnimatePresence>
    </div>
  );
}
