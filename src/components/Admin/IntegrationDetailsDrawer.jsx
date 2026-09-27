import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiX,
  FiEye,
  FiEyeOff,
  FiCopy,
  FiPlay,
  FiChevronDown,
  FiCheckCircle,
  FiAlertTriangle,
  FiClock,
  FiShoppingBag,
  FiCreditCard,
  FiTruck,
  FiMail,
  FiMessageSquare,
  FiBarChart2,
  FiSearch,
  FiUser,
  FiShield,
  FiTag,
  FiPackage,
  FiLayers,
  FiImage,
  FiStar,
  FiRotateCcw,
} from "react-icons/fi";

const drawerCss = `
.detail-card-backdrop {
  display: contents;
}

@media (max-width: 980px) {
  .detail-card-backdrop {
    display: flex !important;
    position: fixed !important;
    inset: 0 !important;
    background: rgba(25, 27, 35, 0.55) !important;
    backdrop-filter: blur(4px) !important;
    z-index: 9999 !important;
    align-items: center !important;
    justify-content: center !important;
    padding: 16px !important;
    box-sizing: border-box !important;
  }
  .detail-card {
    position: relative !important;
    width: min(520px, 100%) !important;
    max-height: 88vh !important;
    overflow-y: auto !important;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25) !important;
    border-radius: 14px !important;
    background: #ffffff !important;
    animation: modalPop 0.22s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }
}

@keyframes modalPop {
  from {
    opacity: 0;
    transform: scale(0.94) translateY(10px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.detail-card {
  background: #ffffff;
  border: 1px solid #dfe4ef;
  border-radius: 12px;
  box-shadow: 0 4px 14px rgba(25, 35, 70, 0.055);
  padding: 20px;
  min-height: 480px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  font-family: Manrope, Inter, system-ui, -apple-system, sans-serif;
  color: #10172f;
  position: relative;
  z-index: 10;
  scrollbar-width: none !important;
  -ms-overflow-style: none !important;
}
.detail-card::-webkit-scrollbar,
.detail-card *::-webkit-scrollbar,
.detail-card-backdrop::-webkit-scrollbar,
.detail-card-backdrop *::-webkit-scrollbar {
  display: none !important;
  width: 0 !important;
  height: 0 !important;
}
.detail-card,
.detail-card * {
  box-sizing: border-box;
  scrollbar-width: none !important;
  -ms-overflow-style: none !important;
}
.detail-card-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}
.detail-card-head h3 {
  margin: 0;
  font-size: 15px;
  font-weight: 800;
  color: #10172f;
  letter-spacing: -0.01em;
}
.detail-brand {
  margin-top: 18px;
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 16px;
  background: #f8fafe;
  border: 1px solid #edf0f6;
  border-radius: 12px;
}
.detail-brand-icon {
  width: 52px;
  height: 52px;
  flex: 0 0 auto;
  border-radius: 12px;
  display: grid !important;
  place-items: center !important;
  place-content: center !important;
  background: #ffffff;
  border: 1px solid #dfe4ef;
  box-shadow: 0 4px 12px rgba(16, 24, 40, 0.06);
  padding: 0;
  overflow: hidden;
  font-size: 24px;
}
.detail-brand-icon svg {
  width: 26px !important;
  height: 26px !important;
  font-size: 26px !important;
  display: block !important;
  margin: auto !important;
}
.detail-brand strong {
  display: block;
  font-size: 15px;
  font-weight: 800;
  color: #10172f;
  line-height: 1.25;
}
.detail-brand span {
  display: block;
  margin-top: 3px;
  color: #667085;
  font-size: 11.5px;
  font-weight: 500;
  line-height: 1.3;
}
.detail-list {
  margin-top: 18px;
  display: grid;
  gap: 11px;
  flex: 1;
}
.detail-row {
  display: grid;
  grid-template-columns: 120px minmax(0, 1fr);
  gap: 10px;
  align-items: start;
}
.detail-row > span:first-child {
  color: #5a6680;
  font-size: 11.5px;
  font-weight: 600;
}
.detail-value {
  color: #26324d;
  font-size: 11.5px;
  line-height: 1.5;
  word-break: break-word;
  overflow-wrap: break-word;
  min-width: 0;
  font-weight: 500;
}
.badge-pill {
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  border-radius: 999px;
  background: #eef3ff;
  color: #0056c3;
  font-size: 11px;
  font-weight: 700;
}
.api-value {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
}
.api-value code {
  font-size: 11px;
  letter-spacing: 0.04em;
  background: #f3f5fb;
  padding: 2px 6px;
  border-radius: 6px;
  word-break: break-all;
  min-width: 0;
}
.inline-action {
  width: 26px;
  height: 26px;
  border: 0;
  border-radius: 6px;
  background: transparent;
  color: #516079;
  display: grid;
  place-items: center;
  cursor: pointer;
  flex-shrink: 0;
  transition: all 0.18s ease;
}
.inline-action:hover {
  background: #f4f6fa;
  color: #10172f;
}
.webhook {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
}
.webhook a {
  min-width: 0;
  color: #0056c3;
  text-decoration: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 11px;
  font-weight: 600;
}
.webhook a:hover {
  text-decoration: underline;
}
.sync-checks {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.sync-check {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 11px;
  background: #f8f9fe;
  padding: 3px 8px;
  border-radius: 6px;
  border: 1px solid #edf0f6;
  font-weight: 600;
}
.sync-check i {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #ddf7e6;
  color: #159543;
  display: grid;
  place-items: center;
  font-style: normal;
  font-size: 9px;
  font-weight: 900;
}
.detail-actions {
  display: grid !important;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.18fr) !important;
  gap: 10px !important;
  margin-top: 18px !important;
  align-items: center !important;
  width: 100% !important;
}
.detail-actions.single-btn {
  grid-template-columns: 1fr !important;
}
.detail-actions > * {
  min-width: 0 !important;
  width: 100% !important;
}
.detail-secondary,
.detail-primary {
  height: 40px !important;
  border-radius: 8px !important;
  padding: 0 14px !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 8px !important;
  font-family: 'Manrope', system-ui, -apple-system, sans-serif !important;
  font-size: 12.5px !important;
  font-weight: 700 !important;
  letter-spacing: -0.01em !important;
  cursor: pointer !important;
  transition: all 0.18s ease !important;
  outline: none !important;
  box-sizing: border-box !important;
  white-space: nowrap !important;
}
.detail-secondary {
  border: 1px solid #c2c6d5 !important;
  background: #ffffff !important;
  color: #191b23 !important;
  box-shadow: 0 2px 6px rgba(25, 27, 35, 0.05) !important;
}
.detail-secondary:hover,
.detail-secondary:active {
  background: #f3f3fe !important;
  border-color: #0056c3 !important;
  color: #0056c3 !important;
}
.detail-primary {
  border: 0 !important;
  background: #fd661d !important;
  color: #ffffff !important;
  box-shadow: 0 4px 10px rgba(253, 102, 29, 0.25) !important;
}
.detail-primary:hover,
.detail-primary:active {
  background: #e25510 !important;
  color: #ffffff !important;
}
.split-button {
  display: grid !important;
  grid-template-columns: minmax(0, 1fr) 38px !important;
  border-radius: 8px !important;
  overflow: hidden !important;
  background: #fd661d !important;
  position: relative !important;
  box-shadow: 0 4px 10px rgba(253, 102, 29, 0.25) !important;
  height: 40px !important;
}
.split-button .detail-primary {
  border-radius: 0 !important;
  box-shadow: none !important;
  height: 100% !important;
  padding: 0 10px !important;
}
.split-button > button:last-child {
  border: 0 !important;
  border-left: 1px solid rgba(255, 255, 255, 0.3) !important;
  background: #fd661d !important;
  color: #ffffff !important;
  display: grid !important;
  place-items: center !important;
  cursor: pointer !important;
  height: 100% !important;
  width: 38px !important;
  padding: 0 !important;
  transition: background 0.18s ease !important;
}
.split-button > button:last-child:hover,
.split-button > button:last-child:active {
  background: #e25510 !important;
  color: #ffffff !important;
}
.test-menu {
  position: absolute;
  right: 0;
  bottom: 46px;
  width: 190px;
  padding: 6px;
  border: 1px solid #dfe4ef;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 0 14px 35px rgba(16, 24, 40, 0.14);
  z-index: 25;
}
.test-menu button {
  width: 100%;
  height: 34px;
  border: 0;
  border-radius: 6px;
  background: transparent;
  text-align: left;
  padding: 0 10px;
  font-size: 11.5px;
  font-weight: 600;
  cursor: pointer;
}
.test-menu button:hover {
  background: #f5f7fb;
  color: #0056c3;
}
`;

function DefaultBrandIcon({ brand, item }) {
  if (brand) {
    switch (brand) {
      case "shopify":
        return <FiShoppingBag color="#95bf47" />;
      case "stripe":
        return <FiCreditCard color="#635bff" />;
      case "shiprocket":
        return <FiTruck color="#ff6b00" />;
      case "klaviyo":
        return <FiMail color="#222222" />;
      case "intercom":
        return <FiMessageSquare color="#1f8ded" />;
      case "ga4":
        return <FiBarChart2 color="#f9ab00" />;
      case "meta":
        return <FiSearch color="#0081fb" />;
      default:
        return <FiShoppingBag color="#0056c3" />;
    }
  }

  if (item?.reason || item?.order || String(item?.id || "").startsWith("#RTN")) return <FiRotateCcw color="#0056c3" />;
  if (item?.rating !== undefined || item?.reviewer) return <FiStar color="#f5a000" />;
  if (item?.placement || item?.image !== undefined) return <FiImage color="#fd661d" />;
  if (item?.code || item?.discount !== undefined) return <FiTag color="#fd661d" />;
  if (item?.sku || item?.available !== undefined || item?.warehouse) return <FiPackage color="#0056c3" />;
  if (item?.email || item?.phone || item?.role || item?.segment) return <FiUser color="#0056c3" />;
  if (item?.criteria || item?.share || item?.growth) return <FiLayers color="#7c4dff" />;
  if (item?.permissions) return <FiShield color="#0056c3" />;
  if (item?.amount || item?.gateway) return <FiCreditCard color="#0b6b1d" />;
  if (item?.customers !== undefined) return <FiLayers color="#7c4dff" />;
  if (String(item?.id || "").startsWith("#AMH") || item?.payment || item?.shipping) return <FiShoppingBag color="#0056c3" />;

  return <FiShoppingBag color="#0056c3" />;
}

function DefaultStatusBadge({ status }) {
  if (!status || status === "-") return null;

  let Icon = FiCheckCircle;
  let bg = "#def6e5";
  let color = "#138a42";

  const lower = String(status).toLowerCase();

  if (
    lower.includes("active") ||
    lower.includes("connected") ||
    lower.includes("success") ||
    lower.includes("in stock") ||
    lower.includes("in-stock") ||
    lower.includes("published") ||
    lower.includes("approved") ||
    lower.includes("delivered") ||
    lower.includes("paid") ||
    lower.includes("refunded") ||
    lower.includes("vip") ||
    lower.includes("repeat")
  ) {
    Icon = FiCheckCircle;
    bg = "#def6e5";
    color = "#138a42";
  } else if (
    lower.includes("sync") ||
    lower.includes("pending") ||
    lower.includes("processing") ||
    lower.includes("pickup") ||
    lower.includes("received") ||
    lower.includes("scheduled") ||
    lower.includes("low stock") ||
    lower.includes("low-stock") ||
    lower.includes("new") ||
    lower.includes("requested")
  ) {
    Icon = FiClock;
    bg = "#fff0d8";
    color = "#d66c00";
  } else if (
    lower.includes("error") ||
    lower.includes("fail") ||
    lower.includes("out of stock") ||
    lower.includes("out-of-stock") ||
    lower.includes("flagged") ||
    lower.includes("rejected") ||
    lower.includes("cancelled") ||
    lower.includes("archived")
  ) {
    Icon = FiAlertTriangle;
    bg = "#ffe8eb";
    color = "#D32F2F";
  } else if (
    lower.includes("pause") ||
    lower.includes("inactive") ||
    lower.includes("draft") ||
    lower.includes("custom") ||
    lower.includes("system") ||
    lower.includes("shipped")
  ) {
    Icon = FiClock;
    bg = "#efe8ff";
    color = "#704fd0";
  }

  return (
    <span
      className="status-badge"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 5,
        padding: "3px 10px",
        borderRadius: 999,
        fontSize: 11,
        fontWeight: 800,
        background: bg,
        color: color,
      }}
    >
      <Icon size={12} />
      {status}
    </span>
  );
}

function DetailRow({ label, children }) {
  if (children === undefined || children === null || children === "") return null;
  return (
    <div className="detail-row">
      <span>{label}</span>
      <div className="detail-value">{children}</div>
    </div>
  );
}

export default function IntegrationDetailsDrawer({
  integration,
  item,
  title = "Details",
  editLabel: customEditLabel,
  onClose,
  onEdit,
  onTest,
  onToast,
  BrandIconComponent,
  StatusComponent,
  extraRows,
}) {
  const [showApi, setShowApi] = useState(false);
  const [testMenuOpen, setTestMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= 980 : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 980);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const targetItem = integration || item;
  if (!targetItem) return null;

  const itemName =
    targetItem.name ||
    targetItem.product ||
    targetItem.code ||
    targetItem.title ||
    targetItem.reviewer ||
    targetItem.id ||
    "Details";

  const itemSubtitle =
    targetItem.subtitle ||
    targetItem.sku ||
    targetItem.customer ||
    targetItem.email ||
    targetItem.category ||
    targetItem.role ||
    targetItem.placement ||
    targetItem.discount ||
    "";

  const itemDescription =
    targetItem.description ||
    targetItem.text ||
    targetItem.summary ||
    targetItem.review ||
    "";

  const itemStatus = targetItem.status;

  const masked = targetItem.apiKey
    ? targetItem.apiKey.replace(/.(?=.{4})/g, "•")
    : "••••••••••••••••";
  const BrandIcon = BrandIconComponent || DefaultBrandIcon;
  const StatusBadge = StatusComponent || DefaultStatusBadge;

  const editLabel =
    customEditLabel ||
    (targetItem.sku
      ? "Adjust / Edit Stock"
      : targetItem.reason || targetItem.order || String(targetItem.id || "").startsWith("#RTN")
      ? "Update Return Status"
      : String(targetItem.id || "").startsWith("#AMH") || targetItem.payment || targetItem.shipping
      ? "Update Order Status"
      : targetItem.code
      ? "Edit Coupon"
      : targetItem.rating !== undefined
      ? "Reply / Edit"
      : targetItem.placement
      ? "Edit Banner"
      : targetItem.criteria
      ? "Edit Segment"
      : "Edit Configuration");

  const drawerContent = (
    <div className="detail-card-backdrop" onClick={onClose}>
      <aside className="card detail-card" onClick={(e) => e.stopPropagation()}>
        <style>{drawerCss}</style>
        <div className="detail-card-head">
        <div>
          <h3>{targetItem.name ? `${targetItem.name} Details` : title}</h3>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <StatusBadge status={itemStatus} />
          {onClose && (
            <button
              className="modal-close"
              type="button"
              onClick={onClose}
              title="Close details"
              aria-label="Close details"
            >
              <FiX size={16} />
            </button>
          )}
        </div>
      </div>

      <div className="detail-brand">
        <span className="detail-brand-icon">
          <BrandIcon brand={targetItem.brand} item={targetItem} />
        </span>
        <div style={{ minWidth: 0, flex: 1 }}>
          <strong>{itemName}</strong>
          {itemSubtitle && <span>{itemSubtitle}</span>}
        </div>
      </div>

      <div className="detail-list">
        {itemDescription && (
          <DetailRow label={targetItem.rating !== undefined ? "Review Text" : "Description"}>
            {itemDescription}
          </DetailRow>
        )}

        {/* Product / Inventory Specific Fields */}
        {targetItem.sku && (
          <DetailRow label="SKU">
            <code style={{ background: "#f3f5fb", padding: "2px 6px", borderRadius: 4, fontWeight: 700 }}>
              {targetItem.sku}
            </code>
          </DetailRow>
        )}
        {targetItem.category && <DetailRow label="Category">{targetItem.category}</DetailRow>}
        {targetItem.brand && <DetailRow label="Brand">{targetItem.brand}</DetailRow>}
        {targetItem.brandVariant && (
          <DetailRow label="Brand Variant">
            <span style={{ background: "#fef3c7", color: "#92400e", border: "1px solid #fde68a", padding: "2px 8px", borderRadius: 6, fontSize: 11, fontWeight: 700 }}>
              {targetItem.brandVariant}
            </span>
          </DetailRow>
        )}
        {targetItem.colors && targetItem.colors.length > 0 && (
          <DetailRow label="Available Colors">
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", alignItems: "center" }}>
              {targetItem.colors.map((c, i) => (
                <span
                  key={i}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 5,
                    padding: "3px 8px",
                    borderRadius: 999,
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    fontSize: 11,
                    fontWeight: 600
                  }}
                >
                  <span
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      backgroundColor: typeof c === "string" ? c : c.hex,
                      border: "1px solid rgba(0,0,0,0.15)"
                    }}
                  />
                  {typeof c === "string" ? c : c.name}
                </span>
              ))}
            </div>
          </DetailRow>
        )}
        {targetItem.sizes && targetItem.sizes.length > 0 && (
          <DetailRow label="Sizes / Options">
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {targetItem.sizes.map((sz, i) => (
                <span
                  key={i}
                  style={{
                    padding: "2px 8px",
                    borderRadius: 6,
                    background: "#f1f5f9",
                    border: "1px solid #cbd5e1",
                    fontSize: 11,
                    fontWeight: 700,
                    color: "#334155"
                  }}
                >
                  {sz}
                </span>
              ))}
            </div>
          </DetailRow>
        )}
        {targetItem.variants && targetItem.variants.length > 0 && (
          <DetailRow label="Variant Breakdown">
            <div style={{ width: "100%", overflowX: "auto", marginTop: 4 }}>
              <table style={{ width: "100%", fontSize: 11, borderCollapse: "collapse", border: "1px solid #e2e8f0" }}>
                <thead>
                  <tr style={{ background: "#f8fafc" }}>
                    <th style={{ padding: "4px 8px", textAlign: "left", borderBottom: "1px solid #e2e8f0", fontSize: 10 }}>Variant</th>
                    <th style={{ padding: "4px 8px", textAlign: "left", borderBottom: "1px solid #e2e8f0", fontSize: 10 }}>SKU</th>
                    <th style={{ padding: "4px 8px", textAlign: "right", borderBottom: "1px solid #e2e8f0", fontSize: 10 }}>Stock</th>
                    <th style={{ padding: "4px 8px", textAlign: "right", borderBottom: "1px solid #e2e8f0", fontSize: 10 }}>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {targetItem.variants.map((v, i) => (
                    <tr key={i} style={{ borderBottom: "1px solid #f1f5f9" }}>
                      <td style={{ padding: "4px 8px", fontWeight: 600 }}>{v.name}</td>
                      <td style={{ padding: "4px 8px", color: "#64748b" }}>{v.sku || "-"}</td>
                      <td style={{ padding: "4px 8px", textAlign: "right", fontWeight: 700 }}>{v.stock}</td>
                      <td style={{ padding: "4px 8px", textAlign: "right" }}>₹{v.price ? Number(v.price).toLocaleString("en-IN") : "-"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </DetailRow>
        )}
        {targetItem.variant && <DetailRow label="Catalog Route">{targetItem.variant}</DetailRow>}
        {targetItem.price !== undefined && (
          <DetailRow label="Unit Price">
            <strong style={{ color: "#191b23", fontSize: 13 }}>
              ₹{typeof targetItem.price === "number" ? targetItem.price.toLocaleString("en-IN") : targetItem.price}
            </strong>
          </DetailRow>
        )}
        {targetItem.available !== undefined && (
          <DetailRow label="Available Stock">
            <strong
              style={{
                color:
                  targetItem.available <= 0
                    ? "#e5484d"
                    : targetItem.available <= (targetItem.reorder || 10)
                    ? "#d66c00"
                    : "#138a42",
              }}
            >
              {targetItem.available} units
            </strong>
          </DetailRow>
        )}
        {targetItem.reserved !== undefined && (
          <DetailRow label="Reserved Units">{targetItem.reserved} units</DetailRow>
        )}
        {targetItem.incoming !== undefined && (
          <DetailRow label="Incoming Stock">{targetItem.incoming} units</DetailRow>
        )}
        {targetItem.reorder !== undefined && (
          <DetailRow label="Reorder Level">{targetItem.reorder} units</DetailRow>
        )}
        {targetItem.warehouse && <DetailRow label="Warehouse">{targetItem.warehouse}</DetailRow>}
        {targetItem.supplier && <DetailRow label="Supplier">{targetItem.supplier}</DetailRow>}
        {targetItem.tags && targetItem.tags.length > 0 && (
          <DetailRow label="Product Tags">
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {targetItem.tags.map((t) => (
                <span className="badge-pill" key={t}>{t}</span>
              ))}
            </div>
          </DetailRow>
        )}
        {targetItem.updated && <DetailRow label="Last Updated">{targetItem.updated}</DetailRow>}

        {/* Customer Specific Fields */}
        {targetItem.email && <DetailRow label="Email Address">{targetItem.email}</DetailRow>}
        {targetItem.phone && <DetailRow label="Phone Number">{targetItem.phone}</DetailRow>}
        {targetItem.segment && (
          <DetailRow label="Segment">
            <span className="badge-pill">{targetItem.segment}</span>
          </DetailRow>
        )}
        {targetItem.spent !== undefined && <DetailRow label="Total Spent">{targetItem.spent}</DetailRow>}
        {targetItem.orders !== undefined && (
          <DetailRow label="Total Orders">{targetItem.orders} orders</DetailRow>
        )}
        {targetItem.joined && <DetailRow label="Joined Date">{targetItem.joined}</DetailRow>}
        {targetItem.last && <DetailRow label="Last Order">{targetItem.last}</DetailRow>}

        {/* Segment Specific Fields */}
        {targetItem.type && (
          <DetailRow label="Segment Type">
            <span className="badge-pill">{targetItem.type}</span>
          </DetailRow>
        )}
        {targetItem.customers !== undefined && (
          <DetailRow label="Total Customers">
            {targetItem.customers.toLocaleString("en-IN")} customers
          </DetailRow>
        )}
        {targetItem.share && <DetailRow label="Audience Share">{targetItem.share}</DetailRow>}
        {targetItem.criteria && <DetailRow label="Criteria">{targetItem.criteria}</DetailRow>}
        {targetItem.growth && <DetailRow label="Growth Trend">{targetItem.growth}</DetailRow>}

        {/* Banner Specific Fields */}
        {targetItem.placement && <DetailRow label="Placement">{targetItem.placement}</DetailRow>}
        {targetItem.device && <DetailRow label="Target Device">{targetItem.device}</DetailRow>}
        {targetItem.schedule && <DetailRow label="Schedule">{targetItem.schedule}</DetailRow>}
        {targetItem.impressions !== undefined && (
          <DetailRow label="Impressions">{targetItem.impressions.toLocaleString("en-IN")}</DetailRow>
        )}
        {targetItem.clicks !== undefined && (
          <DetailRow label="Clicks">{targetItem.clicks.toLocaleString("en-IN")}</DetailRow>
        )}
        {targetItem.ctr !== undefined && (
          <DetailRow label="Performance CTR">
            <strong style={{ color: "#138a42" }}>
              {typeof targetItem.ctr === "number" ? `${targetItem.ctr.toFixed(1)}%` : targetItem.ctr}
            </strong>
          </DetailRow>
        )}
        {(targetItem.targetUrl || targetItem.link) && (
          <DetailRow label="Target URL">
            <a
              href={targetItem.targetUrl || targetItem.link}
              target="_blank"
              rel="noreferrer"
              style={{ color: "#0056c3", textDecoration: "none" }}
            >
              {targetItem.targetUrl || targetItem.link}
            </a>
          </DetailRow>
        )}

        {/* Coupon Specific Fields */}
        {targetItem.code && (
          <DetailRow label="Coupon Code">
            <code style={{ background: "#eef3ff", color: "#0056c3", padding: "2px 6px", borderRadius: 4, fontWeight: 800 }}>
              {targetItem.code}
            </code>
          </DetailRow>
        )}
        {targetItem.discount && <DetailRow label="Discount Value">{targetItem.discount}</DetailRow>}
        {(targetItem.used !== undefined || targetItem.usage !== undefined) && (
          <DetailRow label="Usage Count">
            {targetItem.used !== undefined
              ? `${targetItem.used.toLocaleString("en-IN")} / ${
                  targetItem.limit ? targetItem.limit.toLocaleString("en-IN") : "∞"
                }`
              : targetItem.usage}
          </DetailRow>
        )}
        {(targetItem.minOrder !== undefined || targetItem.minSpend !== undefined) && (
          <DetailRow label="Min. Order Value">
            ₹{(targetItem.minOrder || targetItem.minSpend).toLocaleString("en-IN")}
          </DetailRow>
        )}
        {targetItem.start && targetItem.end && (
          <DetailRow label="Validity Period">{`${targetItem.start} – ${targetItem.end}`}</DetailRow>
        )}
        {targetItem.expiry && <DetailRow label="Expiry Date">{targetItem.expiry}</DetailRow>}

        {/* Review Specific Fields */}
        {targetItem.rating !== undefined && (
          <DetailRow label="Rating">
            <span style={{ color: "#f5a000", fontSize: 13, letterSpacing: 1 }}>
              {"★".repeat(targetItem.rating)}
              {"☆".repeat(Math.max(0, 5 - targetItem.rating))}
            </span>
            <span style={{ marginLeft: 6, fontWeight: 700 }}>({targetItem.rating}/5)</span>
          </DetailRow>
        )}
        {(targetItem.submittedDate || targetItem.date) && (
          <DetailRow label="Submitted On">
            {targetItem.submittedDate || targetItem.date} {targetItem.submittedTime || ""}
          </DetailRow>
        )}
        {targetItem.response && (
          <DetailRow label="Store Response">
            <span className="badge-pill">{targetItem.response}</span>
          </DetailRow>
        )}

        {/* Order Specific Fields */}
        {targetItem.items && targetItem.total ? (
          <>
            {targetItem.id && (
              <DetailRow label="Order ID">
                <code style={{ background: "#f3f5fb", padding: "2px 6px", borderRadius: 4, fontWeight: 700 }}>
                  {targetItem.id}
                </code>
              </DetailRow>
            )}
            {targetItem.customer && <DetailRow label="Customer">{targetItem.customer}</DetailRow>}
            {targetItem.email && <DetailRow label="Email Address">{targetItem.email}</DetailRow>}
            {targetItem.items && <DetailRow label="Ordered Items">{targetItem.items}</DetailRow>}
            {targetItem.total && (
              <DetailRow label="Order Total">
                <strong style={{ color: "#191b23", fontSize: 13 }}>{targetItem.total}</strong>
              </DetailRow>
            )}
            {targetItem.payment && (
              <DetailRow label="Payment Status">
                <span className="badge-pill">{targetItem.payment}</span>
              </DetailRow>
            )}
            {targetItem.shipping && <DetailRow label="Shipping Method">{targetItem.shipping}</DetailRow>}
            <DetailRow label="Delivery Address">
              {targetItem.address || "12 Lake View Road, Hyderabad, Telangana 500081"}
            </DetailRow>
            {targetItem.date && <DetailRow label="Order Date">{targetItem.date}</DetailRow>}
            <DetailRow label="Tracking ID">
              <code style={{ background: "#f3f5fb", padding: "2px 6px", borderRadius: 4, fontWeight: 700 }}>
                {targetItem.tracking || "TRK-98234120"}
              </code>
            </DetailRow>
            {targetItem.internalNote && <DetailRow label="Order Note">{targetItem.internalNote}</DetailRow>}
          </>
        ) : (
          <>
            {targetItem.total && <DetailRow label="Order Total"><strong>{targetItem.total}</strong></DetailRow>}
            {targetItem.items && <DetailRow label="Ordered Items">{targetItem.items}</DetailRow>}
            {targetItem.payment && <DetailRow label="Payment Status"><span className="badge-pill">{targetItem.payment}</span></DetailRow>}
            {targetItem.paymentMethod && <DetailRow label="Payment Method">{targetItem.paymentMethod}</DetailRow>}
            {targetItem.shipping && <DetailRow label="Shipping Method">{targetItem.shipping}</DetailRow>}
            {targetItem.address && <DetailRow label="Delivery Address">{targetItem.address}</DetailRow>}
            {targetItem.date && <DetailRow label="Order Date">{targetItem.date}</DetailRow>}
            {targetItem.tracking && <DetailRow label="Tracking ID"><code>{targetItem.tracking}</code></DetailRow>}
            {targetItem.internalNote && <DetailRow label="Order Note">{targetItem.internalNote}</DetailRow>}
          </>
        )}

        {/* Return Specific Fields */}
        {targetItem.order && <DetailRow label="Original Order"><code>{targetItem.order}</code></DetailRow>}
        {targetItem.reason && <DetailRow label="Return Reason">{targetItem.reason}</DetailRow>}
        {targetItem.refund !== undefined && (
          <DetailRow label="Refund Amount">
            <strong style={{ color: "#168447" }}>
              ₹{typeof targetItem.refund === "number" ? targetItem.refund.toLocaleString("en-IN") : targetItem.refund}
            </strong>
          </DetailRow>
        )}
        {targetItem.refundStatus && targetItem.refundStatus !== "-" && (
          <DetailRow label="Refund Status">
            <span className="badge-pill">{targetItem.refundStatus}</span>
          </DetailRow>
        )}
        {targetItem.requested && <DetailRow label="Requested Date">{targetItem.requested}</DetailRow>}

        {/* Integration Specific Fields */}
        {targetItem.connectedOn && <DetailRow label="Connected On">{targetItem.connectedOn}</DetailRow>}
        {targetItem.createdOn && <DetailRow label="Created On">{targetItem.createdOn}</DetailRow>}
        {targetItem.created && <DetailRow label="Created On">{targetItem.created}</DetailRow>}

        {targetItem.apiKey && (
          <DetailRow label="API Key">
            <div className="api-value">
              <code>{showApi ? targetItem.apiKey : masked}</code>
              <button
                className="inline-action"
                type="button"
                onClick={() => setShowApi((v) => !v)}
                aria-label={showApi ? "Hide API key" : "Show API key"}
              >
                {showApi ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </DetailRow>
        )}

        {targetItem.webhook && (
          <DetailRow label="Webhook URL">
            <div className="webhook">
              <a href={targetItem.webhook} target="_blank" rel="noreferrer">
                {targetItem.webhook}
              </a>
              <button
                className="inline-action"
                type="button"
                onClick={async () => {
                  try {
                    await navigator.clipboard.writeText(targetItem.webhook);
                    if (onToast) onToast("Webhook URL copied.");
                  } catch {
                    if (onToast) onToast("Webhook URL ready to copy.");
                  }
                }}
                aria-label="Copy webhook URL"
              >
                <FiCopy />
              </button>
            </div>
          </DetailRow>
        )}

        {targetItem.frequency && <DetailRow label="Sync Frequency">{targetItem.frequency}</DetailRow>}
        {targetItem.lastSyncPrimary && (
          <DetailRow label="Last Sync">{`${targetItem.lastSyncPrimary} (${
            targetItem.lastSyncSecondary || ""
          })`}</DetailRow>
        )}
        {targetItem.amount && <DetailRow label="Amount">{targetItem.amount}</DetailRow>}

        {targetItem.dataSync && (
          <DetailRow label="Data Sync">
            <div className="sync-checks">
              {targetItem.dataSync.map((item) => (
                <span className="sync-check" key={item}>
                  <i>✓</i>
                  {item}
                </span>
              ))}
            </div>
          </DetailRow>
        )}

        {extraRows}
      </div>

      <div className={`detail-actions ${!onTest ? "single-btn" : ""}`}>
        {onEdit && (
          <button className="detail-secondary" type="button" onClick={() => onEdit(targetItem)}>
            {editLabel}
          </button>
        )}

        {onTest && (
          <div className="split-button">
            <button className="detail-primary" type="button" onClick={() => onTest(targetItem, "full")}>
              <FiPlay /> Test Connection
            </button>
            <button
              type="button"
              onClick={() => setTestMenuOpen((v) => !v)}
              aria-label="More test options"
            >
              <FiChevronDown />
            </button>

            <AnimatePresence>
              {testMenuOpen && (
                <motion.div
                  className="test-menu"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                >
                  <button
                    type="button"
                    onClick={() => {
                      setTestMenuOpen(false);
                      onTest(targetItem, "auth");
                    }}
                  >
                    Test Authentication
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setTestMenuOpen(false);
                      onTest(targetItem, "webhook");
                    }}
                  >
                    Test Webhook
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setTestMenuOpen(false);
                      onTest(targetItem, "sync");
                    }}
                  >
                    Run Test Sync
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </aside>
  </div>
  );

  if (isMobile && typeof document !== "undefined") {
    return createPortal(drawerContent, document.body);
  }

  return drawerContent;
}
