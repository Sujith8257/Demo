import React from "react";
import { FiChevronRight } from "react-icons/fi";

export const mobileTableCardsCss = `
.mobile-table-cards-wrap {
  display: none;
  padding: 12px;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
}

.mobile-table-card {
  border: 1px solid #c2c6d5;
  border-radius: 10px;
  padding: 14px 14px 12px;
  background: #ffffff;
  transition: all 0.18s cubic-bezier(0.16, 1, 0.3, 1);
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  min-width: 0;
  font-family: 'Manrope', system-ui, sans-serif;
}

.mobile-table-card:hover {
  border-color: #0056c3;
  box-shadow: 0 4px 14px rgba(0, 86, 195, 0.08);
}

.mobile-table-card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  gap: 8px;
  min-width: 0;
}

.mobile-table-card-identity {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
}

.mobile-table-card-avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #004094;
  color: #ffffff;
  display: grid;
  place-items: center;
  font-size: 11px;
  font-weight: 800;
  flex-shrink: 0;
}

.mobile-table-card-title-group {
  min-width: 0;
}

.mobile-table-card-title {
  display: block;
  font-size: 15px;
  font-weight: 800;
  color: #191b23;
  letter-spacing: -0.02em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: 'Manrope', system-ui, sans-serif;
}

.mobile-table-card-subtitle {
  display: block;
  font-size: 11.5px;
  color: #667085;
  font-weight: 600;
  margin-top: 1px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mobile-table-card-badge {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  padding: 0 12px;
  border-radius: 999px;
  font-size: 11.5px;
  font-weight: 800;
  white-space: nowrap;
  font-family: 'Manrope', system-ui, sans-serif;
  background: #edf0f5;
  color: #495057;
}

.mobile-table-card-badge.pending,
.mobile-table-card-badge.pending-approval,
.mobile-table-card-badge.processing,
.mobile-table-card-badge.scheduled,
.mobile-table-card-badge.low-stock { background: #fff0d8; color: #d66c00; }
.mobile-table-card-badge.shipped,
.mobile-table-card-badge.pickup-scheduled,
.mobile-table-card-badge.requested,
.mobile-table-card-badge.incoming { background: #dfebff; color: #1764cf; }
.mobile-table-card-badge.delivered,
.mobile-table-card-badge.approved,
.mobile-table-card-badge.refunded,
.mobile-table-card-badge.paid,
.mobile-table-card-badge.active,
.mobile-table-card-badge.published,
.mobile-table-card-badge.verified,
.mobile-table-card-badge.in-stock { background: #def6e5; color: #138a42; }
.mobile-table-card-badge.cancelled,
.mobile-table-card-badge.failed,
.mobile-table-card-badge.rejected,
.mobile-table-card-badge.inactive,
.mobile-table-card-badge.out-of-stock { background: #ffe2df; color: #b12626; }
.mobile-table-card-badge.received { background: #ede8ff; color: #674ccd; }
.mobile-table-card-badge.draft { background: #efe8ff; color: #7a4cdb; }
.mobile-table-card-badge.archived { background: #edf0f5; color: #667085; }
.mobile-table-card-badge.packed { background: #e9e3ff; color: #6651c9; }
.mobile-table-card-badge.out-for-delivery { background: #e2f3ff; color: #0f6c9f; }
.mobile-table-card-badge.ready-for-pickup { background: #e8f4ff; color: #1764cf; }
.mobile-table-card-badge.vip { background: #eee5ff; color: #7649e9; }
.mobile-table-card-badge.repeat { background: #fff0df; color: #f07413; }
.mobile-table-card-badge.new { background: #e4efff; color: #1670e8; }

.mobile-table-card-meta {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 6px 14px;
  font-size: 12.5px;
  margin-bottom: 12px;
  font-family: 'Manrope', system-ui, sans-serif;
}

.mobile-table-card-meta-label {
  color: #191b23;
  font-weight: 600;
  font-size: 12.5px;
}

.mobile-table-card-meta-value {
  color: #191b23;
  font-weight: 500;
  font-size: 12.5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mobile-table-card-action-btn {
  width: 100% !important;
  height: 34px !important;
  border: 1px solid #c2c6d5 !important;
  background: #ffffff !important;
  border-radius: 7px !important;
  font-family: 'Manrope', system-ui, sans-serif !important;
  font-weight: 700 !important;
  font-size: 11.5px !important;
  color: #191b23 !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 6px !important;
  cursor: pointer !important;
  transition: all 0.18s ease !important;
  box-shadow: none !important;
}

.mobile-table-card-action-btn:hover,
.mobile-table-card-action-btn:active {
  background: #f8f9fe !important;
  border-color: #0056c3 !important;
  color: #0056c3 !important;
}

.mobile-table-card-actions-group {
  display: flex;
  gap: 8px;
  width: 100%;
}

@media(max-width: 980px) {
  .mobile-table-cards-wrap { display: flex !important; }
}
`;

/**
 * MobileTableCard - Standalone responsive card component representing a single row
 */
export function MobileTableCard({
  title,
  subtitle,
  avatar,
  badge,
  badgeStatus,
  meta = [],
  actionLabel,
  onAction,
  actions,
  children,
  className = "",
  style = {},
}) {
  const normalizedBadgeClass = typeof badgeStatus === "string"
    ? `mobile-table-card-badge ${badgeStatus.toLowerCase().replace(/[^a-z0-9]/g, "-")}`
    : typeof badge === "string"
    ? `mobile-table-card-badge ${badge.toLowerCase().replace(/[^a-z0-9]/g, "-")}`
    : "mobile-table-card-badge";

  return (
    <article className={`mobile-table-card ${className}`} style={style}>
      <div className="mobile-table-card-top">
        <div className="mobile-table-card-identity">
          {avatar && (
            typeof avatar === "string" ? (
              <span className="mobile-table-card-avatar">{avatar}</span>
            ) : (
              avatar
            )
          )}
          <div className="mobile-table-card-title-group">
            {title && <strong className="mobile-table-card-title">{title}</strong>}
            {subtitle && <span className="mobile-table-card-subtitle">{subtitle}</span>}
          </div>
        </div>

        {badge && (
          typeof badge === "string" ? (
            <span className={normalizedBadgeClass}>{badge}</span>
          ) : (
            badge
          )
        )}
      </div>

      {meta && meta.length > 0 && (
        <div className="mobile-table-card-meta">
          {meta.map((item, idx) => {
            const isArray = Array.isArray(item);
            const label = isArray ? item[0] : item.label;
            const value = isArray ? item[1] : item.value;
            const valueClass = isArray ? "" : item.className || "";

            return (
              <React.Fragment key={idx}>
                <span className="mobile-table-card-meta-label">{label}:</span>
                <span className={`mobile-table-card-meta-value ${valueClass}`}>{value}</span>
              </React.Fragment>
            );
          })}
        </div>
      )}

      {children}

      {actions ? (
        <div className="mobile-table-card-actions-group">{actions}</div>
      ) : onAction && actionLabel ? (
        <button
          type="button"
          className="mobile-table-card-action-btn"
          onClick={onAction}
        >
          {actionLabel} <FiChevronRight />
        </button>
      ) : null}
    </article>
  );
}

/**
 * MobileTableCards - Responsive list container component for mobile table views
 */
export default function MobileTableCards({
  items = [],
  renderItem,
  children,
  className = "",
  style = {},
}) {
  return (
    <>
      <style>{mobileTableCardsCss}</style>
      <div className={`mobile-table-cards-wrap ${className}`} style={style}>
        {renderItem && items ? items.map((item, idx) => renderItem(item, idx)) : children}
      </div>
    </>
  );
}
