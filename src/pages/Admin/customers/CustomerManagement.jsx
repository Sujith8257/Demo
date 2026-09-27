import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import IntegrationDetailsDrawer from "../../../components/Admin/IntegrationDetailsDrawer";
import {
  FiAlertCircle,
  FiCalendar,
  FiChevronDown,
  FiDownload,
  FiFilter,
  FiMail,
  FiPhone,
  FiPlus,
  FiSearch,
  FiTrash2,
  FiUserCheck,
  FiUserPlus,
  FiUsers,
  FiX,
} from "react-icons/fi";

import AdminSidebar from "../../../components/Admin/AdminSidebar";
import AdminTopbar from "../../../components/Admin/AdminTopbar";
import AnimatedCheckbox from "../../../components/Admin/AnimatedCheckbox";
import CustomersTable from "../../../components/Admin/CustomersTable";
import KpiCard from "../../../components/Admin/KpiCard";
import MasterDropdown from "../../../components/Admin/MasterDropdown";
import MasterDatePicker from "../../../components/Admin/MasterDatePicker";
import CustomersByLocation from "../../../components/Admin/CustomersByLocation";
import MasterPieChart from "../../../components/Admin/MasterPieChart";
import { registerCustomer } from "../../../data/mockDatabase";

const initialCustomers = [
  { id: "CST-1001", name: "Ananya Sharma", email: "ananya.sharma@example.com", phone: "+91 98765 43210", segment: "VIP", spent: "₹1,45,200", orders: 24, joined: "Jan 14, 2024", status: "Active", avatar: "AS" },
  { id: "CST-1002", name: "Rahul Verma", email: "rahul.verma@example.com", phone: "+91 98123 45678", segment: "Repeat", spent: "₹82,400", orders: 12, joined: "Feb 02, 2024", status: "Active", avatar: "RV" },
  { id: "CST-1003", name: "Priya Nair", email: "priya.nair@example.com", phone: "+91 99887 76655", segment: "New", spent: "₹14,500", orders: 2, joined: "May 10, 2025", status: "Active", avatar: "PN" },
  { id: "CST-1004", name: "Siddharth Das", email: "siddharth.das@example.com", phone: "+91 97654 32109", segment: "VIP", spent: "₹2,10,000", orders: 38, joined: "Nov 20, 2023", status: "Active", avatar: "SD" },
  { id: "CST-1005", name: "Meera Kapoor", email: "meera.kapoor@example.com", phone: "+91 95432 10987", segment: "Inactive", spent: "₹6,800", orders: 1, joined: "Aug 05, 2024", status: "Inactive", avatar: "MK" },
  { id: "CST-1006", name: "Arjun Reddy", email: "arjun.reddy@example.com", phone: "+91 91234 56789", segment: "Repeat", spent: "₹64,300", orders: 9, joined: "Dec 12, 2023", status: "Active", avatar: "AR" },
  { id: "CST-1007", name: "Sneha Patel", email: "sneha.patel@example.com", phone: "+91 93456 78901", segment: "New", spent: "₹8,900", orders: 1, joined: "May 14, 2025", status: "Active", avatar: "SP" },
];

const styles = String.raw`
.am-scope{
  --bg:#faf8ff;
  --card:#ffffff;
  --text:#10172f;
  --muted:#667085;
  --border:#dfe4ef;
  --line:#edf0f6;
  --orange:#fd661d;
  --orange-dark:#e05512;
  --blue:#0056c3;
  --purple:#7d4ff2;
  --green:#17a45b;
  --red:#e5484d;
  --shadow:0 4px 14px rgba(25,35,70,.055);

  min-height:100vh;
  background:var(--bg);
  color:var(--text);
  font-family:Manrope,system-ui,sans-serif;
}
.am-scope *{box-sizing:border-box}
.am-scope button,.am-scope input,.am-scope select{font:inherit}
.am-scope button{cursor:pointer}
.am-scope .admin-shell{display:flex;min-height:100vh;background:var(--bg)}
.am-scope .desktop-sidebar-wrapper{width:256px;min-width:256px;flex-shrink:0}
.am-scope .desktop-sidebar-wrapper.is-closed{display:none}
.am-scope .dashboard-main{flex:1;min-width:0}
.am-scope .page{padding:22px 28px 36px}
.am-scope .page-head{display:flex;justify-content:space-between;align-items:flex-start;gap:14px;margin-bottom:18px}
.am-scope .page-head h1{font-size:28px;letter-spacing:-.02em;font-weight:800;margin:0;color:#10172f}
.am-scope .page-head p{font-size:12px;margin:5px 0 0;color:var(--muted);font-weight:500}
.am-scope .date-btn{height:38px;padding:0 14px;border:1px solid var(--border);border-radius:8px;background:#fff;font-size:12px;font-weight:800;display:inline-flex;align-items:center;gap:8px;color:#10172f}

.am-scope .kpis{display:grid;grid-template-columns:repeat(5,1fr);gap:12px;margin-bottom:18px}
.am-scope .kpi{background:#fff;border:1px solid var(--border);border-radius:12px;padding:14px;display:flex;align-items:center;gap:12px;box-shadow:var(--shadow)}
.am-scope .kpi-ico{width:44px;height:44px;border-radius:10px;display:grid;place-items:center;font-size:20px;flex:0 0 auto}
.am-scope .kpi .label{font-size:11px;font-weight:700;color:#3c4660}
.am-scope .kpi .num{display:block;font-size:20px;font-weight:800;color:#10172f;margin-top:2px}
.am-scope .kpi .trend{font-size:10px;color:var(--green);font-weight:800;margin-top:4px;display:block}
.am-scope .kpi .trend em{font-style:normal;color:#7a8295;font-weight:500;margin-left:6px}
.am-scope .purple{background:#efe9ff;color:#7b4ef4}
.am-scope .green{background:#e3f8e8;color:#14a447}
.am-scope .blue{background:#e7efff;color:#0b63e8}
.am-scope .orange{background:#fff0e3;color:#f26b21}
.am-scope .red{background:#ffe8e9;color:#e53945}

.am-scope .card{background:#fff;border:1px solid var(--border);border-radius:12px;box-shadow:var(--shadow)}
.am-scope .tabs, .am-scope .tabs-row{display:flex;gap:2px;overflow-x:auto;padding:0 10px;border-bottom:1px solid var(--line);scrollbar-width:none}
.am-scope .tabs::-webkit-scrollbar, .am-scope .tabs-row::-webkit-scrollbar{display:none}
.am-scope .tab{height:44px;border:0;background:transparent;padding:0 12px;font-size:12px;font-weight:800;color:var(--text);position:relative;white-space:nowrap;cursor:pointer;display:inline-flex;align-items:center}
.am-scope .tab b{margin-left:5px;padding:3px 6px;border-radius:999px;background:#ededf8;font-size:10px;font-weight:800;color:#191b23}
.am-scope .tab.active{color:#0056c3}
.am-scope .tab.active b{background:#e7efff;color:#0056c3}
.am-scope .tab.active:after{content:"";position:absolute;left:8px;right:8px;bottom:0;height:2px;background:#0056c3}

.am-scope .filters, .am-scope .toolbar{padding:12px;display:flex;align-items:center;gap:8px;border-bottom:1px solid var(--line);flex-wrap:wrap}
.am-scope .field, .am-scope .search-box{height:38px;border:1px solid #c2c6d5;border-radius:8px;background:#fff;display:flex;align-items:center;gap:8px;padding:0 10px;font-size:12px;font-weight:800;color:#191b23}
.am-scope .field input, .am-scope .field select, .am-scope .search-box input{border:0;outline:0;width:100%;background:transparent;font-size:12px;font-weight:600;color:#191b23}
.am-scope .filterbtn{height:38px;border:1px solid #c2c6d5;background:#fff;border-radius:8px;padding:0 12px;display:flex;align-items:center;gap:7px;font-size:12px;font-weight:800;color:#191b23;cursor:pointer;transition:all 0.18s ease}
.am-scope .filterbtn:hover{background:#f8f9fe;border-color:#0056c3;color:#0056c3}
.am-scope .spacer{flex:1}
.am-scope .primary-btn{height:38px;padding:0 14px;border:0;border-radius:8px;background:var(--orange);color:#fff;font-size:12px;font-weight:800;display:inline-flex;align-items:center;gap:6px;box-shadow:0 4px 12px rgba(253,102,29,.22)}
.am-scope .outline-btn{height:38px;padding:0 12px;border:1px solid #c2c6d5;border-radius:8px;background:#fff;font-size:12px;font-weight:800;color:#191b23;display:inline-flex;align-items:center;gap:6px}
.am-scope .outline-btn:hover{background:#f8f9fe;border-color:#0056c3;color:#0056c3}

.am-scope .selbar, .am-scope .selection-bar{padding:10px 12px;background:#ffffff;border-bottom:1px solid var(--line);display:flex;align-items:center;gap:10px;font-size:12px}
.am-scope .selbar strong, .am-scope .selection-bar strong{font-size:12px;font-weight:800;color:#191b23}
.am-scope .selbar span, .am-scope .selection-bar span{font-size:11px;color:#667085;font-weight:500}
.am-scope .selbar .spacer, .am-scope .selection-bar .spacer{margin-left:auto}
.am-scope .clear, .am-scope .clear-btn{border:0;background:transparent;color:#0056c3;font-size:11px;font-weight:800;cursor:pointer;padding:0 4px}

.am-scope table{width:100%;border-collapse:collapse}
.am-scope th{height:44px;border-bottom:1px solid var(--border);text-align:left;padding:0 14px;color:#191b23;font-size:13px;font-weight:800;text-transform:uppercase;letter-spacing:.04em;white-space:nowrap;background:#f3f3fe}
.am-scope td{height:62px;border-bottom:1px solid var(--line);padding:0 14px;font-size:12.5px;font-weight:500;color:#191b23;white-space:nowrap;vertical-align:middle}

.am-scope .person{display:flex;align-items:center;gap:10px}
.am-scope .avatar{width:34px;height:34px;border-radius:50%;display:grid;place-items:center;font-size:11px;font-weight:800;color:#fff;background:#004094;flex-shrink:0}
.am-scope .person strong{display:block;font-size:13px;color:#191b23;font-weight:500}
.am-scope .person small{display:block;color:#191b23;font-size:11px;font-weight:500;margin-top:1px}
.am-scope .pill{display:inline-flex;align-items:center;justify-content:center;height:24px;padding:0 10px;border-radius:999px;font-size:11px;font-weight:800;white-space:nowrap}
.am-scope .vip{background:#eee5ff;color:#7649e9}
.am-scope .repeat{background:#fff0df;color:#f07413}
.am-scope .new{background:#e4efff;color:#1670e8}
.am-scope .inactive{background:#ffe8e9;color:#e53945}
.am-scope .split-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  align-items: start;
  margin-bottom: 18px;
  transition: grid-template-columns 0.25s ease;
}
.am-scope .split-container.has-selected {
  grid-template-columns: minmax(0, 1.62fr) minmax(330px, 0.78fr);
}
.am-scope th:last-child, .am-scope td:last-child { width: 130px; padding: 0 14px; text-align: center; border-top-right-radius: 10px; }
.am-scope .actions{display:flex;align-items:center;justify-content:center;gap:6px}
.am-scope .actions button{width:34px;height:34px;border-radius:8px;border:1px solid #c2c6d5;background:#ffffff;color:#191b23;display:grid;place-items:center;font-size:16px;cursor:pointer;transition:all .18s ease}
.am-scope .actions button:hover{background:#fff5f0;border-color:var(--orange);color:var(--orange);transform:translateY(-1px)}
.am-scope .actions button.delete-btn:hover{background:#ffe8e9;border-color:#e5484d;color:#e5484d}

.am-scope .table-foot{height:46px;padding:0 16px;display:flex;align-items:center;justify-content:space-between;border-top:1px solid var(--line)}
.am-scope .table-foot span{font-size:12px;font-weight:600;color:#191b23}
.am-scope .pages{display:flex;gap:4px}
.am-scope .pages button{min-width:32px;height:32px;padding:0 6px;border:1px solid #c2c6d5;background:#ffffff;border-radius:6px;font-size:12px;font-weight:700;cursor:pointer}
.am-scope .grid-main{display:block;margin-bottom:18px}
.am-scope .bottom-grid{display:grid;grid-template-columns:minmax(280px,1fr) minmax(280px,1fr) minmax(280px,1fr);gap:14px;margin-top:18px}
.am-scope .side-panel{padding:16px;display:flex;flex-direction:column}
.am-scope .panel-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:4px}
.am-scope .panel-head h3{font-size:14px;font-weight:800;margin:0;color:#10172f}
.am-scope .link-btn{border:0;background:transparent;color:#0056c3 !important;font-size:11.5px;font-weight:800;padding:0;cursor:pointer;display:inline-block;transition:color .18s ease}
.am-scope .link-btn:hover{color:#003882 !important;text-decoration:underline}
.am-scope .donut-wrap{display:flex;align-items:center;gap:18px;margin:auto 0;padding:8px 0;flex:1}
.am-scope .donut{width:105px;height:140px;border-radius:50%;background:conic-gradient(#7c4dff 0 26%,#ff6b00 26% 62%,#2d7deb 62% 86%,#10172f 86% 100%);position:relative;flex:0 0 auto;display:grid;place-items:center}
.am-scope .donut:after{content:"";position:absolute;inset:24px 16px;border-radius:50%;background:#fff}
.am-scope .donut-center{position:relative;z-index:2;text-align:center}
.am-scope .donut-center span{display:block;font-size:9px;font-weight:900;color:#10172f;text-transform:uppercase;letter-spacing:.02em}
.am-scope .donut-center strong{display:block;font-size:10px;font-weight:600;color:#10172f;margin-top:2px}
.am-scope .legend{display:grid;gap:10px;flex:1}
.am-scope .legend-row{display:grid;grid-template-columns:8px 1fr auto;gap:8px;align-items:center;font-size:11.5px;font-weight:600}
.am-scope .legend-row i{width:8px;height:8px;border-radius:50%}
.am-scope .legend-row span{color:#10172f;font-weight:600}
.am-scope .legend-row strong{color:#10172f;font-weight:500;font-size:11.5px}
.am-scope .signup-list{display:grid;gap:8px;margin-top:12px;max-height:185px;overflow-y:auto;scrollbar-width:none;-ms-overflow-style:none;padding-right:2px}
.am-scope .signup-list::-webkit-scrollbar{display:none;width:0;height:0}
.am-scope .signup-item{display:flex;align-items:center;gap:10px;padding:10px 12px;border:1px solid #ededf8;border-radius:9px;background:#ffffff;transition:all .18s ease;cursor:pointer}
.am-scope .signup-item:hover{background:#f8faff;border-color:#c2c6d5;box-shadow:0 2px 6px rgba(0,0,0,.04)}
.am-scope .mini-avatar{width:36px;height:36px;border:1px solid #dfe4ef;background:#e7efff;color:#0056c3;border-radius:8px;display:grid;place-items:center;font-size:12px;font-weight:800;flex-shrink:0}
.am-scope .signup-item .item-info strong{display:block;font-size:12px;font-weight:700;color:#10172f}
.am-scope .signup-item .item-info small{display:block;font-size:10.5px;color:#667085;margin-top:1px}
.am-scope .signup-right{margin-left:auto;text-align:right}
.am-scope .signup-right time{font-size:11px;color:#10172f;font-weight:700}

.am-scope .flag-list{display:grid;gap:8px;margin-top:12px}
.am-scope .flag{display:flex;align-items:center;gap:10px;padding:10px;border:1px solid var(--line);border-radius:9px;background:#f8f9fc}
.am-scope .flag strong{display:block;font-size:11.5px;font-weight:700}
.am-scope .flag small{display:block;font-size:10px;color:var(--muted)}
.am-scope .flag-status{margin-left:auto;font-size:10px;font-weight:800;padding:3px 8px;border-radius:99px}
.am-scope .need{background:#ffe8e9;color:#e5484d}
.am-scope .progress{background:#fff0e3;color:#fd661d}
.am-scope .follow{background:#e7efff;color:#0b63e8}

.am-scope .drawer-bg{position:fixed;inset:0;background:rgba(25,27,35,.55);backdrop-filter:blur(4px);z-index:120}
.am-scope .drawer{position:fixed;top:0;right:0;width:min(520px,100%);height:100vh;background:#fff;z-index:121;padding:24px;overflow-y:auto;box-shadow:-8px 0 32px rgba(0,0,0,.15)}
.am-scope .drawer-top{display:flex;align-items:flex-start;justify-content:space-between;padding-bottom:16px;border-bottom:1px solid var(--line)}
.am-scope .drawer-person{display:flex;gap:14px;align-items:center}
.am-scope .big-avatar{width:54px;height:54px;border-radius:50%;background:#004094;color:#fff;display:grid;place-items:center;font-size:18px;font-weight:800}
.am-scope .drawer-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:18px}
.am-scope .drawer-card{padding:12px;border:1px solid var(--line);border-radius:9px;background:#f8f9fc}
.am-scope .drawer-card small{display:block;font-size:10px;color:var(--muted);font-weight:700;text-transform:uppercase}
.am-scope .drawer-card strong{display:block;font-size:15px;font-weight:800;margin-top:2px}
.am-scope .drawer-section{margin-top:20px}
.am-scope .drawer-section h4{font-size:12px;font-weight:800;text-transform:uppercase;color:var(--muted);margin:0 0 10px}
.am-scope .info-row{display:flex;align-items:center;gap:10px;font-size:12.5px;color:#2c3448;margin-bottom:8px}
.am-scope .drawer-actions{display:flex;gap:10px;padding-top:16px;margin-top:24px;position:sticky;bottom:0;background:#fff;border-top:1px solid var(--line)}

.am-scope .modal-bg,
.am-scope .modalwrap { position: fixed; inset: 0; background: rgba(25,27,35,.55); backdrop-filter: blur(4px); z-index: 130; display: grid; place-items: center; padding: 16px; font-family: 'Manrope', system-ui, sans-serif; }
.am-scope .modal { background: #fff; border-radius: 12px; width: min(500px, 100%); padding: 20px; box-shadow: 0 20px 60px rgba(0,0,0,.2) }
.am-scope .mhead { display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #ededf8; padding-bottom: 12px; }
.am-scope .mhead h2 { margin: 0; font-size: 20px; font-weight: 800; color: #191b23; font-family: 'Manrope', system-ui, sans-serif; letter-spacing: -0.02em; }
.am-scope .formgrid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 14px; }
.am-scope .f { display: grid; gap: 6px; }
.am-scope .f.full { grid-column: 1/3; }
.am-scope .f label { font-size: 12px; font-weight: 800; color: #191b23; font-family: 'Manrope', system-ui, sans-serif; }
.am-scope .f input, .am-scope .f select, .am-scope .f textarea { width: 100%; border: 1px solid #c2c6d5; border-radius: 8px; background: #fff; padding: 10px; font-size: 13px; font-weight: 600; outline: none; font-family: 'Manrope', system-ui, sans-serif; }
.am-scope .mactions { display: flex; justify-content: flex-end; gap: 8px; margin-top: 16px; }
.am-scope .btn { height: 40px; border-radius: 9px; padding: 0 16px; display: inline-flex; align-items: center; justify-content: center; gap: 8px; font-size: 12.5px; font-weight: 800; cursor: pointer; transition: all .18s; font-family: 'Manrope', system-ui, sans-serif; }
.am-scope .btn.primary { border: 0; background: #fd661d; color: #fff; box-shadow: 0 4px 10px rgba(253,102,29,.25); }
.am-scope .btn.primary:hover { background: #e25510; }
.am-scope .btn.secondary { border: 1px solid #c2c6d5; background: #fff; color: #191b23; }
.am-scope .btn.secondary:hover { background: #f3f3fe; border-color: #0056c3; color: #0056c3; }

.am-scope .modal-field-dropdown { width: 100% !important; display: block !important; position: relative !important; }
.am-scope .modal-field-dropdown .master-dropdown-trigger { width: 100% !important; height: 38px !important; padding: 0 12px !important; border: 1px solid #c2c6d5 !important; border-radius: 8px !important; background: #fff !important; justify-content: space-between !important; font-size: 13px !important; font-weight: 600 !important; color: #191b23 !important; font-family: 'Manrope', system-ui, sans-serif !important; }
.am-scope .modal-field-dropdown .master-dropdown-trigger:hover { border-color: #0056c3 !important; }
.am-scope .modal-field-dropdown .master-dropdown-label { font-size: 13px !important; font-weight: 600 !important; color: #191b23 !important; font-family: 'Manrope', system-ui, sans-serif !important; }
.am-scope .modal-field-dropdown .master-dropdown-menu { width: 100% !important; max-height: 200px !important; overflow-y: auto !important; z-index: 99999 !important; box-shadow: 0 16px 40px rgba(16, 24, 40, 0.2) !important; }

.am-scope .close-btn {
  width: 34px;
  height: 34px;
  border: 1px solid #dfe4ef;
  border-radius: 8px;
  background: #f8faff;
  color: #667085;
  display: grid;
  place-items: center;
  cursor: pointer;
  padding: 0;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.am-scope .close-btn:hover,
.am-scope .close-btn:active,
.am-scope .close-btn:focus {
  background: #eff6ff;
  border-color: #93c5fd;
  color: #0056c3;
  transform: scale(1.06);
}

.am-scope .cancel-white-btn {
  height: 38px;
  border: 1px solid #dfe4ef;
  background: #ffffff;
  color: #10172f;
  font-size: 13px;
  font-weight: 700;
  border-radius: 8px;
  padding: 0 18px;
  cursor: pointer;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;
}
.am-scope .cancel-white-btn:hover {
  background: #f8f9fc;
  border-color: #10172f;
  transform: translateY(-1px);
}
.am-scope .danger-confirm-btn {
  height: 38px;
  border: 0;
  background: #e5484d;
  color: #ffffff;
  font-size: 13px;
  font-weight: 800;
  border-radius: 8px;
  padding: 0 18px;
  cursor: pointer;
}

.am-scope .toast{position:fixed;right:20px;bottom:20px;background:#10172f;color:#fff;padding:12px 18px;border-radius:8px;font-size:12px;font-weight:700;z-index:130;box-shadow:0 10px 30px rgba(0,0,0,.2)}

.am-scope .kpi-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(150px, 1fr));
  gap: 14px;
  margin-bottom: 18px;
}

@media(max-width:1200px){
  .am-scope .kpi-grid { grid-template-columns: repeat(3, 1fr); }
  .am-scope .kpis { grid-template-columns: repeat(3, 1fr); }
}

@media(max-width:1050px){
  .am-scope .desktop-sidebar-wrapper { display: none !important; }
}

@media(max-width:900px){
  .am-scope .page { padding: 16px 14px 28px; }
  .am-scope .kpi-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; }
  .am-scope .bottom-grid { grid-template-columns: 1fr; }
}

@media(max-width:650px){
  .am-scope .page {
    padding: 14px 10px 24px !important;
    max-width: 100vw;
    overflow-x: clip;
    box-sizing: border-box;
  }
  .am-scope .page-head {
    flex-direction: column !important;
    align-items: flex-start !important;
    gap: 10px !important;
    margin-bottom: 14px !important;
  }
  .am-scope .page-head h1 { font-size: 22px !important; }
  .am-scope .page-head p { font-size: 12px !important; margin-top: 2px !important; }
  .am-scope .page-head .primary-btn {
    height: 38px !important;
    padding: 0 14px !important;
    font-size: 12px !important;
  }
  .am-scope .kpi-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    gap: 8px !important;
    margin-bottom: 14px !important;
  }
  .am-scope .split-container {
    width: 100% !important;
    max-width: 100% !important;
    min-width: 0 !important;
    box-sizing: border-box !important;
    overflow: hidden !important;
  }
  .am-scope .table-card {
    width: 100% !important;
    max-width: 100% !important;
    min-width: 0 !important;
    box-sizing: border-box !important;
    overflow: hidden !important;
  }
  .am-scope .tabs,
  .am-scope .tabs-row {
    padding: 0 6px !important;
    gap: 2px !important;
  }
  .am-scope .tab {
    padding: 0 10px !important;
    font-size: 11.5px !important;
  }
  .am-scope .filters,
  .am-scope .toolbar {
    display: grid !important;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) !important;
    gap: 8px !important;
    padding: 10px 12px !important;
    width: 100% !important;
    box-sizing: border-box !important;
  }
  .am-scope .filters .field,
  .am-scope .search-box {
    grid-column: 1 / -1 !important;
    width: 100% !important;
    max-width: 100% !important;
    height: 38px !important;
    box-sizing: border-box !important;
  }
  .am-scope .filters .field input,
  .am-scope .search-box input { font-size: 12px !important; }
  .am-scope .filters .master-dropdown,
  .am-scope .toolbar .master-dropdown {
    width: 100% !important;
    min-width: 0 !important;
    display: block !important;
    box-sizing: border-box !important;
  }
  .am-scope .filters .master-dropdown-trigger,
  .am-scope .toolbar .master-dropdown-trigger {
    width: 100% !important;
    min-width: 0 !important;
    height: 38px !important;
    padding: 0 10px !important;
    justify-content: space-between !important;
    font-size: 11.5px !important;
    box-sizing: border-box !important;
  }
  .am-scope .filters .master-dropdown-label,
  .am-scope .toolbar .master-dropdown-label {
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    white-space: nowrap !important;
    font-size: 11.5px !important;
  }
  .am-scope .filters .spacer,
  .am-scope .toolbar .spacer { display: none !important; }
  .am-scope .filters .filterbtn,
  .am-scope .filters .outline-btn,
  .am-scope .toolbar .outline-btn {
    width: 100% !important;
    min-width: 0 !important;
    height: 38px !important;
    padding: 0 10px !important;
    font-size: 11.5px !important;
    justify-content: center !important;
    box-sizing: border-box !important;
  }
  .am-scope .selbar,
  .am-scope .selection-bar {
    padding: 8px 12px !important;
    font-size: 11px !important;
    flex-wrap: wrap !important;
    gap: 8px !important;
    box-sizing: border-box !important;
  }
  .am-scope .selbar .spacer,
  .am-scope .selection-bar .spacer { display: none !important; }
  .am-scope .drawer {
    width: 100% !important;
    padding: 16px !important;
  }
  .am-scope .modal-bg,
  .am-scope .modalwrap {
    padding: 12px 10px !important;
  }
  .am-scope .modal {
    width: calc(100vw - 20px) !important;
    max-width: 100% !important;
    padding: 16px 14px !important;
    max-height: 88vh !important;
    overflow-y: auto !important;
    box-sizing: border-box !important;
  }
  .am-scope .formgrid {
    grid-template-columns: 1fr !important;
    gap: 10px !important;
  }
  .am-scope .f.full {
    grid-column: auto !important;
  }
  .am-scope .mactions {
    flex-direction: column-reverse !important;
    gap: 8px !important;
  }
  .am-scope .mactions button,
  .am-scope .mactions .btn {
    width: 100% !important;
    justify-content: center !important;
  }
  .am-scope .bottom-grid {
    grid-template-columns: 1fr !important;
    gap: 12px !important;
  }
}
`;

const allRecentSignups = [
  { name: "Sujith", email: "sujith@gmail.com", phone: "+91 98765 12340", time: "Just now", initials: "S", method: "Google", location: "Bengaluru, KA", device: "Mobile App (iOS)", status: "Verified" },
  { name: "Riya Patel", email: "riya.patel@gmail.com", phone: "+91 98234 56789", time: "2 hours ago", initials: "RP", method: "Email", location: "Mumbai, MH", device: "Chrome (MacOS)", status: "Verified" },
  { name: "Aditya Joshi", email: "aditya.joshi@outlook.com", phone: "+91 97123 45678", time: "5 hours ago", initials: "AJ", method: "Apple", location: "Pune, MH", device: "Safari (iOS)", status: "Verified" },
  { name: "Sneha Rao", email: "sneha.rao@gmail.com", phone: "+91 96543 21876", time: "7 hours ago", initials: "SR", method: "Google", location: "Hyderabad, TS", device: "Chrome (Windows)", status: "Verified" },
  { name: "Vikram Malhotra", email: "vikram.m@yahoo.com", phone: "+91 98450 98765", time: "9 hours ago", initials: "VM", method: "Email", location: "Delhi NCR", device: "Android App", status: "Active" },
  { name: "Ananya Sharma", email: "ananya.s@gmail.com", phone: "+91 99887 65432", time: "12 hours ago", initials: "AS", method: "Google", location: "Jaipur, RJ", device: "Mobile App (iOS)", status: "Verified" },
  { name: "Karan Verma", email: "karan.v@gmail.com", phone: "+91 91234 56780", time: "1 day ago", initials: "KV", method: "Email", location: "Chandigarh, PB", device: "Firefox (Windows)", status: "Active" },
  { name: "Pooja Mehta", email: "pooja.mehta@hotmail.com", phone: "+91 98760 11223", time: "1 day ago", initials: "PM", method: "Apple", location: "Ahmedabad, GJ", device: "Safari (MacOS)", status: "Verified" },
];

function CustomerDrawer({ customer, onClose, onToggleStatus, onPromptDelete, toast }) {
  if (!customer) return null;
  return (
    <div className="drawer-bg" onClick={onClose}>
      <motion.div className="drawer" initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} onClick={e => e.stopPropagation()}>
        <div className="drawer-top">
          <div className="drawer-person">
            <div className="big-avatar">{customer.avatar}</div>
            <div>
              <h2 style={{ margin: 0, fontSize: 18, fontWeight: 800 }}>{customer.name}</h2>
              <span className={`pill ${customer.segment.toLowerCase()}`} style={{ marginTop: 6 }}>{customer.segment}</span>
            </div>
          </div>
          <button className="outline-btn" style={{ width: 34, height: 34, padding: 0 }} onClick={onClose}><FiX size={16} /></button>
        </div>

        <div className="drawer-grid">
          <div className="drawer-card"><small>Total Spent</small><strong>{customer.spent}</strong></div>
          <div className="drawer-card"><small>Total Orders</small><strong>{customer.orders} orders</strong></div>
          <div className="drawer-card"><small>Status</small><strong style={{ color: customer.status === "Active" ? "#159a43" : "#e53945" }}>{customer.status}</strong></div>
          <div className="drawer-card"><small>Joined</small><strong>{customer.joined}</strong></div>
        </div>

        <div className="drawer-section">
          <h4>Contact Details</h4>
          <div className="info-row"><FiMail color="#0056c3" /> {customer.email}</div>
          <div className="info-row"><FiPhone color="#0056c3" /> {customer.phone}</div>
        </div>

        <div className="drawer-actions">
          <button className="outline-btn" style={{ flex: 1 }} onClick={() => { onToggleStatus(customer.id); toast(`Status toggled for ${customer.name}`); }}>
            {customer.status === "Active" ? "Set Inactive" : "Set Active"}
          </button>
          <button className="primary-btn" style={{ background: "#e5484d" }} onClick={() => { onClose(); onPromptDelete(customer); }}>
            <FiTrash2 /> Delete
          </button>
        </div>
      </motion.div>
    </div>
  );
}

function AddCustomerModal({ onClose, onAdd }) {
  const [f, setF] = useState({ name: "", email: "", phone: "+91 ", segment: "New" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!f.name || !f.email) return;
    onAdd({
      ...f,
      id: `CST-${Date.now().toString().slice(-4)}`,
      orders: 0,
      spent: "₹0",
      joined: "Just now",
      status: "Active",
      avatar: f.name
        .split(" ")
        .map((x) => x[0])
        .join("")
        .slice(0, 2)
        .toUpperCase(),
    });
  };

  return (
    <motion.div
      className="modalwrap"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.form
        className="modal"
        initial={{ y: 18, scale: 0.98 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: 18, scale: 0.98 }}
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit}
        style={{ width: "min(500px, 100%)", padding: 20, overflow: "visible" }}
      >
        <div className="mhead">
          <h2>Add New Customer</h2>
          <button type="button" className="close-btn" onClick={onClose}>
            <FiX size={16} />
          </button>
        </div>

        <div className="formgrid">
          <div className="f full">
            <label>Full Name</label>
            <input
              value={f.name}
              onChange={(e) => setF({ ...f, name: e.target.value })}
              placeholder="e.g. Sujith Kumar"
              required
            />
          </div>
          <div className="f full">
            <label>Email Address</label>
            <input
              type="email"
              value={f.email}
              onChange={(e) => setF({ ...f, email: e.target.value })}
              placeholder="e.g. sujith@example.com"
              required
            />
          </div>
          <div className="f">
            <label>Phone Number</label>
            <input
              value={f.phone}
              onChange={(e) => setF({ ...f, phone: e.target.value })}
              placeholder="+91 98765 43210"
            />
          </div>
          <div className="f">
            <label>Customer Segment</label>
            <MasterDropdown
              options={["New", "Regular", "VIP", "Inactive"]}
              value={f.segment}
              onChange={(val) => setF((prev) => ({ ...prev, segment: val }))}
              className="modal-field-dropdown"
            />
          </div>
        </div>

        <div className="mactions">
          <button type="button" className="btn secondary" onClick={onClose}>
            Cancel
          </button>
          <button type="submit" className="btn primary">
            <FiPlus /> Add Customer
          </button>
        </div>
      </motion.form>
    </motion.div>
  );
}

function EditCustomerModal({ customer, onClose, onSave }) {
  const [form, setForm] = useState({
    name: customer.name || "",
    email: customer.email || "",
    phone: customer.phone || "",
    segment: customer.segment || "New",
    status: customer.status || "Active",
    spent: customer.spent || "₹0",
    orders: customer.orders || 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    onSave({
      ...customer,
      ...form,
      orders: Number(form.orders),
      avatar: form.name
        .split(" ")
        .map((x) => x[0])
        .join("")
        .slice(0, 2)
        .toUpperCase(),
    });
  };

  return (
    <motion.div
      className="modalwrap"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.form
        className="modal"
        initial={{ y: 18, scale: 0.98 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: 18, scale: 0.98 }}
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit}
        style={{ width: "min(640px, 100%)", padding: 20, overflow: "visible" }}
      >
        <div className="mhead">
          <h2>Edit Configuration · {customer.name}</h2>
          <button type="button" className="outline-btn" style={{ width: 32, height: 32, padding: 0 }} onClick={onClose}>
            <FiX />
          </button>
        </div>

        <div className="formgrid">
          <div className="f">
            <label>Full Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="e.g. Sudeep Sharma"
              required
            />
          </div>
          <div className="f">
            <label>Phone Number</label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
            />
          </div>
          <div className="f full">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="name@email.com"
              required
            />
          </div>
          <div className="f">
            <label>Customer Segment</label>
            <MasterDropdown
              options={["VIP", "Repeat", "New", "Inactive"]}
              value={form.segment}
              onChange={(val) => setForm((prev) => ({ ...prev, segment: val }))}
              className="modal-field-dropdown"
            />
          </div>
          <div className="f">
            <label>Account Status</label>
            <MasterDropdown
              options={["Active", "Inactive"]}
              value={form.status}
              onChange={(val) => setForm((prev) => ({ ...prev, status: val }))}
              className="modal-field-dropdown"
            />
          </div>
          <div className="f">
            <label>Total Orders</label>
            <input
              type="number"
              min="0"
              name="orders"
              value={form.orders}
              onChange={handleChange}
            />
          </div>
          <div className="f">
            <label>Total Spent</label>
            <input
              name="spent"
              value={form.spent}
              onChange={handleChange}
              placeholder="₹0"
            />
          </div>
        </div>

        <div className="mactions">
          <button type="button" className="btn secondary" onClick={onClose}>
            Cancel
          </button>
          <button className="btn primary">
            Save Configuration
          </button>
        </div>
      </motion.form>
    </motion.div>
  );
}

function RecentSignupsModal({ onClose, toast }) {
  return (
    <div className="modalwrap" onClick={onClose}>
      <motion.div
        className="modal"
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 12 }}
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: 640,
          width: "95%",
          padding: "24px 26px",
          maxHeight: "88vh",
          display: "flex",
          flexDirection: "column",
          borderRadius: 14,
        }}
      >
        <div className="mhead" style={{ paddingBottom: 12 }}>
          <div>
            <h2 style={{ fontSize: 19, fontWeight: 800, color: "#191b23", margin: 0 }}>
              Recent Signups
            </h2>
            <p style={{ fontSize: 12.5, color: "#667085", margin: "4px 0 0", fontWeight: 500 }}>
              Showing {allRecentSignups.length} newly registered customer accounts
            </p>
          </div>
          <button
            type="button"
            className="close-btn"
            onClick={onClose}
            title="Close"
            aria-label="Close"
          >
            <FiX size={18} />
          </button>
        </div>

        {/* Quick summary metrics */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, margin: "14px 0 16px" }}>
          <div style={{ background: "#f8faff", border: "1px solid #ededf8", borderRadius: 9, padding: "10px 14px" }}>
            <span style={{ fontSize: 10.5, color: "#667085", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.02em" }}>New Today</span>
            <strong style={{ display: "block", fontSize: 16, color: "#191b23", marginTop: 3, fontWeight: 800 }}>8 Users</strong>
          </div>
          <div style={{ background: "#f3fbf6", border: "1px solid #d4f3e1", borderRadius: 9, padding: "10px 14px" }}>
            <span style={{ fontSize: 10.5, color: "#16a34a", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.02em" }}>Verification</span>
            <strong style={{ display: "block", fontSize: 16, color: "#16a34a", marginTop: 3, fontWeight: 800 }}>100% Passed</strong>
          </div>
          <div style={{ background: "#f8f8ff", border: "1px solid #ededf8", borderRadius: 9, padding: "10px 14px" }}>
            <span style={{ fontSize: 10.5, color: "#0056c3", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.02em" }}>Top Channel</span>
            <strong style={{ display: "block", fontSize: 16, color: "#0056c3", marginTop: 3, fontWeight: 800 }}>Google (50%)</strong>
          </div>
        </div>

        {/* Signups List */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            display: "grid",
            gap: 10,
            paddingRight: 6,
            maxHeight: "380px",
          }}
        >
          {allRecentSignups.map((s) => (
            <div
              key={s.email}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                padding: "12px 14px",
                border: "1px solid #ededf8",
                borderRadius: 10,
                background: "#ffffff",
                transition: "all .18s ease",
              }}
            >
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 10,
                  background: "#e7efff",
                  border: "1px solid #c2c6d5",
                  color: "#004094",
                  display: "grid",
                  placeItems: "center",
                  fontSize: 13.5,
                  fontWeight: 800,
                  flexShrink: 0,
                }}
              >
                {s.initials}
              </div>

              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                  <strong style={{ fontSize: 13.5, fontWeight: 700, color: "#191b23" }}>{s.name}</strong>
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 800,
                      padding: "2px 7px",
                      borderRadius: 999,
                      background: s.status === "Verified" ? "#e3f8e8" : "#f3f3fe",
                      color: s.status === "Verified" ? "#16a34a" : "#0056c3",
                    }}
                  >
                    {s.status}
                  </span>
                </div>
                <div style={{ display: "flex", gap: 10, marginTop: 4, flexWrap: "wrap", fontSize: 11.5, color: "#667085" }}>
                  <span>{s.email}</span>
                  {s.phone && <span>· {s.phone}</span>}
                  {s.location && <span>· 📍 {s.location}</span>}
                </div>
                {s.device && (
                  <div style={{ fontSize: 10.5, color: "#8c95a6", marginTop: 2, fontWeight: 500 }}>
                    Device: {s.device}
                  </div>
                )}
              </div>

              <div style={{ textAlign: "right", flexShrink: 0 }}>
                <span style={{ display: "block", fontSize: 11.5, fontWeight: 600, color: "#191b23" }}>{s.time}</span>
                <span
                  style={{
                    display: "inline-block",
                    fontSize: 10,
                    color: "#0056c3",
                    background: "#e7efff",
                    fontWeight: 800,
                    padding: "3px 7px",
                    borderRadius: 4,
                    marginTop: 4,
                  }}
                >
                  via {s.method}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 18,
            paddingTop: 14,
            borderTop: "1px solid #ededf8",
          }}
        >
          <span style={{ fontSize: 11.5, color: "#16a34a", fontWeight: 600, display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#16a34a", display: "inline-block" }} />
            Real-time feed active
          </span>
          <button
            className="btn primary"
            onClick={() => {
              toast("Signups log exported to CSV.");
              onClose();
            }}
          >
            Export CSV
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default function CustomerManagement() {
  const navigate = useNavigate();
  const [customers, setCustomers] = useState(initialCustomers);
  const [tab, setTab] = useState("All Customers");
  const [search, setSearch] = useState("");
  const [segment, setSegment] = useState("All Segments");
  const [status, setStatus] = useState("All Statuses");
  const [dateFilter, setDateFilter] = useState("Last 7 Days");
  const [selected, setSelected] = useState([]);
  const [drawer, setDrawer] = useState(null);
  const [addOpen, setAddOpen] = useState(false);
  const [editCustomer, setEditCustomer] = useState(null);
  const [deleteCaution, setDeleteCaution] = useState(null);
  const [signupsModalOpen, setSignupsModalOpen] = useState(false);
  const [toast, setToast] = useState("");
  const [desktopSidebarOpen, setDesktopSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const notify = (msg) => {
    setToast(msg);
    clearTimeout(window.__cstToast);
    window.__cstToast = setTimeout(() => setToast(""), 2200);
  };

  const handleToggleMenu = () => {
    if (window.innerWidth < 1050) setMobileMenuOpen(prev => !prev);
    else setDesktopSidebarOpen(prev => !prev);
  };

  const handleSaveCustomer = (updatedCustomer) => {
    setCustomers((prev) =>
      prev.map((c) => (c.id === updatedCustomer.id ? updatedCustomer : c))
    );
    if (drawer && drawer.id === updatedCustomer.id) {
      setDrawer(updatedCustomer);
    }
    setEditCustomer(null);
    notify(`Customer ${updatedCustomer.name} configuration updated successfully.`);
  };

  const filtered = customers.filter(c => {
    if (tab === "New" && c.segment !== "New") return false;
    if (tab === "Repeat" && c.segment !== "Repeat") return false;
    if (tab === "VIP" && c.segment !== "VIP") return false;
    if (tab === "Inactive" && c.status !== "Inactive") return false;
    if (segment !== "All Segments" && c.segment !== segment) return false;
    if (status !== "All Statuses" && c.status !== status) return false;
    if (search) {
      const q = search.toLowerCase();
      return c.name.toLowerCase().includes(q) || c.email.toLowerCase().includes(q) || c.phone.includes(q);
    }
    return true;
  });

  const toggleSelect = (id) => {
    setSelected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const toggleStatus = (id) => {
    setCustomers(prev => prev.map(c => c.id === id ? { ...c, status: c.status === "Active" ? "Inactive" : "Active" } : c));
  };

  const promptDeleteCustomer = (customer) => {
    setDeleteCaution(customer);
  };

  const confirmDeleteCustomer = () => {
    if (!deleteCaution) return;
    setCustomers(prev => prev.filter(c => c.id !== deleteCaution.id));
    setSelected(prev => prev.filter(id => id !== deleteCaution.id));
    notify(`Customer ${deleteCaution.name} deleted.`);
    setDeleteCaution(null);
    if (drawer && drawer.id === deleteCaution.id) setDrawer(null);
  };

  const exportCSV = () => {
    const list = selected.length > 0 ? customers.filter(c => selected.includes(c.id)) : filtered;
    const csv = [["ID", "Name", "Email", "Phone", "Segment", "Spent", "Orders", "Joined", "Status"]]
      .concat(list.map(c => [c.id, c.name, c.email, c.phone, c.segment, c.spent, c.orders, c.joined, c.status]))
      .map(row => row.map(v => `"${String(v).replaceAll('"', '""')}"`).join(",")).join("\n");

    const url = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = "customers.csv";
    a.click();
    URL.revokeObjectURL(url);
    notify(`Exported ${list.length} customer records.`);
  };

  const kpis = [
    ["Total Customers", "12,842", "+14.2%", "vs last 7 days", "purple", FiUsers],
    ["Active Customers", "11,050", "+9.8%", "vs last 7 days", "green", FiUserCheck],
    ["New Customers", "1,245", "+18.4%", "vs last 7 days", "blue", FiUserPlus],
    ["Avg. Customer Spend", "₹4,250", "+5.2%", "vs last 7 days", "orange", FiUsers],
    ["Support Tickets", "42", "-12.5%", "vs last 7 days", "red", FiAlertCircle],
  ];

  return (
    <div className="am-scope">
      <style>{styles}</style>
      <div className="admin-shell">
        {desktopSidebarOpen && (
          <div className="desktop-sidebar-wrapper">
            <AdminSidebar activePage="Customers" onClose={() => setDesktopSidebarOpen(false)} />
          </div>
        )}
        <AnimatePresence>
          {mobileMenuOpen && (
            <AdminSidebar activePage="Customers" mobile onClose={() => setMobileMenuOpen(false)} />
          )}
        </AnimatePresence>

        <main className="dashboard-main">
          <AdminTopbar onToggleMenu={handleToggleMenu} desktopSidebarOpen={desktopSidebarOpen} />

          <div className="page">
            <div className="page-head js-reveal">
              <div><h1>Customers</h1><p>Manage and understand your customer relationships.</p></div>
              <button className="primary-btn" onClick={() => setAddOpen(true)}><FiPlus /> Add Customer</button>
            </div>

            <section className="kpi-grid js-reveal">
              {kpis.map(x => <KpiCard key={x[0]} item={x} />)}
            </section>

            {/* Main Split Table & Side Card Container */}
            <div className={`split-container ${drawer ? "has-selected" : ""}`} style={{ marginBottom: 18 }}>
              <section className="card table-card js-reveal" style={{ margin: 0 }}>
                <div className="tabs">
                  {[
                    ["All Customers", 12842],
                    ["New", 1245],
                    ["Repeat", 4657],
                    ["VIP", 2345],
                    ["Inactive", 1792]
                  ].map(([x, count]) => (
                    <button
                      className={`tab ${tab === x ? "active" : ""}`}
                      key={x}
                      onClick={() => setTab(x)}
                    >
                      {x} <b>{count.toLocaleString("en-IN")}</b>
                    </button>
                  ))}
                </div>

                <div className="filters">
                  <label className="field search-field">
                    <FiSearch style={{ color: "#667085", flexShrink: 0 }} />
                    <input
                      placeholder="Search customers..."
                      value={search}
                      onChange={e => setSearch(e.target.value)}
                    />
                  </label>
                  <MasterDropdown
                    options={["All Segments", "New", "Repeat", "VIP", "Inactive"]}
                    value={segment}
                    onChange={setSegment}
                  />
                  <MasterDropdown
                    options={["All Statuses", "Active", "Inactive"]}
                    value={status}
                    onChange={setStatus}
                  />
                  <MasterDatePicker
                    value={dateFilter}
                    onChange={setDateFilter}
                  />
                  <button className="filterbtn" onClick={() => notify("Filters applied.")}>
                    <FiFilter /> Filters
                  </button>
                  <button className="filterbtn" onClick={exportCSV}>
                    <FiDownload /> Export
                  </button>
                </div>

                <div className="selbar">
                  <AnimatedCheckbox
                    checked={filtered.length > 0 && selected.length === filtered.length}
                    onChange={e => setSelected(e.target.checked ? filtered.map(x => x.id) : [])}
                  />
                  <strong>{selected.length} selected</strong>
                  <span>Select all {filtered.length} on this page</span>
                  <div className="spacer" />
                  <button
                    className="clear"
                    onClick={() => selected.length > 0 ? setSelected([]) : notify("No customers selected.")}
                  >
                    Clear selection
                  </button>
                  <MasterDropdown
                    staticLabel="Bulk Actions"
                    rightAlign
                    options={[
                      { label: "Export selected CSV", action: exportCSV },
                      { label: "Clear selection", action: () => setSelected([]) }
                    ]}
                  />
                </div>
                <CustomersTable
                  customers={filtered}
                  selected={selected}
                  activeCustomerId={drawer?.id}
                  onToggleSelect={toggleSelect}
                  onSelectAll={(b) => setSelected(b ? filtered.map(x => x.id) : [])}
                  onView={(c) => setDrawer(curr => curr?.id === c.id ? null : c)}
                  onEdit={(c) => setEditCustomer(c)}
                  onDelete={promptDeleteCustomer}
                />
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
                      title="Customer Details"
                      editLabel="Edit Configuration"
                      onClose={() => setDrawer(null)}
                      onEdit={(c) => setEditCustomer(c)}
                      onToast={notify}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Bottom 3 Cards Row below Table */}
            <div className="bottom-grid js-reveal">
              {/* Card 1: Top Customer Segments */}
              <section className="card side-panel">
                <div className="panel-head">
                  <h3>Top Customer Segments</h3>
                  <button type="button" className="link-btn" onClick={() => navigate("/segments")}>View all</button>
                </div>
                <MasterPieChart
                  centerTitle="Segments"
                  centerValue="12,842"
                  data={[
                    ["VIP", "26% (3,345)", "#7c4dff"],
                    ["Repeat", "36% (4,624)", "#ff6b00"],
                    ["New", "24% (3,081)", "#2d7deb"],
                    ["Inactive", "14% (1,792)", "#10172f"]
                  ]}
                  conicGradient="conic-gradient(#7c4dff 0 26%, #ff6b00 26% 62%, #2d7deb 62% 86%, #10172f 86% 100%)"
                  shape="circle"
                />
              </section>

              {/* Card 2: Recent Signups */}
              <section className="card side-panel">
                <div className="panel-head">
                  <h3>Recent Signups</h3>
                  <button type="button" className="link-btn" onClick={() => setSignupsModalOpen(true)}>View all</button>
                </div>
                <div className="signup-list">
                  {[
                    ["Sujith", "sujith@gmail.com", "Just now", "S"],
                    ["Riya Patel", "riya.patel@gmail.com", "2h ago", "RP"],
                    ["Aditya Joshi", "aditya.joshi@outlook.com", "5h ago", "AJ"],
                    ["Sneha Rao", "sneha.rao@gmail.com", "7h ago", "SR"],
                    ["Vikram Malhotra", "vikram.m@yahoo.com", "9h ago", "VM"],
                    ["Ananya Sharma", "ananya.s@gmail.com", "12h ago", "AS"],
                    ["Karan Verma", "karan.v@gmail.com", "1d ago", "KV"],
                    ["Pooja Mehta", "pooja.mehta@hotmail.com", "1d ago", "PM"]
                  ].map(([n, e, t, i]) => (
                    <div className="signup-item" key={n}>
                      <div className="mini-avatar">{i}</div>
                      <div className="item-info">
                        <strong>{n}</strong>
                        <small>{e}</small>
                      </div>
                      <div className="signup-right">
                        <time>{t}</time>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Card 3: Customers by Location */}
              <section className="card side-panel">
                <CustomersByLocation />
              </section>
            </div>
          </div>
        </main>
      </div>

      {/* Add Customer Modal */}
      <AnimatePresence>
        {addOpen && <AddCustomerModal onClose={() => setAddOpen(false)} onAdd={(nc) => { setCustomers([nc, ...customers]); registerCustomer(nc); setAddOpen(false); notify("New customer added."); }} />}
      </AnimatePresence>

      {/* Edit Customer Configuration Modal */}
      <AnimatePresence>
        {editCustomer && (
          <EditCustomerModal
            customer={editCustomer}
            onClose={() => setEditCustomer(null)}
            onSave={handleSaveCustomer}
          />
        )}
      </AnimatePresence>

      {/* Recent Signups Popup Modal */}
      <AnimatePresence>
        {signupsModalOpen && (
          <RecentSignupsModal
            onClose={() => setSignupsModalOpen(false)}
            toast={notify}
          />
        )}
      </AnimatePresence>

      {/* Delete Caution Confirmation Modal */}
      <AnimatePresence>
        {deleteCaution && (
          <div className="modalwrap" onClick={() => setDeleteCaution(null)}>
            <motion.div
              className="modal"
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              onClick={e => e.stopPropagation()}
              style={{ maxWidth: 440, padding: 24, textAlign: "center" }}
            >
              <div style={{
                width: 52, height: 52, borderRadius: "50%", background: "#ffe8e9", color: "#e5484d",
                display: "grid", placeItems: "center", fontSize: 24, margin: "0 auto 16px"
              }}>
                <FiAlertCircle />
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: "#10172f", margin: "0 0 8px" }}>
                Delete Caution
              </h3>
              <p style={{ fontSize: 13, color: "#47516b", margin: "0 0 20px", lineHeight: 1.5 }}>
                Are you sure you are gonna delete the <strong>{deleteCaution.name}</strong> customer details?
              </p>
              <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
                <button
                  className="cancel-white-btn"
                  style={{ flex: 1 }}
                  onClick={() => setDeleteCaution(null)}
                >
                  Cancel
                </button>
                <button
                  className="danger-confirm-btn"
                  style={{ flex: 1 }}
                  onClick={confirmDeleteCustomer}
                >
                  Confirm
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Toast Notification */}
      <AnimatePresence>
        {toast && <motion.div className="toast" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 12 }}>{toast}</motion.div>}
      </AnimatePresence>
    </div>
  );
}
