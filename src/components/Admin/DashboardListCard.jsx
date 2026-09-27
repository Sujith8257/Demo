import React, { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export const dashboardListCardCss = `
/* Dashboard List Card Component Styles */
.dashboard-list-panel {
  background: #ffffff;
  border: 1px solid rgba(194, 198, 213, .62);
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 4px 14px rgba(0,0,0,.06);
  overflow: hidden;
}

.dashboard-list-heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

.dashboard-list-heading h3 {
  margin: 0;
  font-size: 14px;
  font-weight: 800;
  color: #10172f;
  font-family: 'Manrope', system-ui, sans-serif;
}

.dashboard-list-action-btn {
  border: 0;
  background: transparent;
  color: #0056c3;
  font-size: 11.5px;
  font-weight: 800;
  cursor: pointer;
  padding: 0 4px;
  white-space: nowrap;
}
.dashboard-list-action-btn:hover {
  text-decoration: underline;
}

.dashboard-slider-controls {
  display: flex;
  align-items: center;
  gap: 5px;
}

.dashboard-slider-arrow {
  width: 26px;
  height: 26px;
  border: 1px solid #c2c6d5;
  border-radius: 6px;
  background: #ffffff;
  display: grid;
  place-items: center;
  color: #191b23;
  font-size: 14px;
  cursor: pointer;
  transition: all .18s ease;
}

.dashboard-slider-arrow:hover {
  background: #f3f3fe;
  color: #0056c3;
  border-color: #0056c3;
}

.dashboard-rotate-90 {
  transform: rotate(90deg);
}

.dashboard-list-scroll {
  max-height: 250px;
  overflow-y: auto;
  scroll-behavior: smooth;
  margin-top: 10px;
  scrollbar-width: none;
  -ms-overflow-style: none;
  padding-right: 0;
}

.dashboard-list-scroll::-webkit-scrollbar {
  display: none;
  width: 0;
  height: 0;
}

.dashboard-list-grid {
  display: grid;
  gap: 8px;
}

.dashboard-list-row {
  width: 100%;
  min-height: 48px;
  border: 1px solid #ededf8;
  border-radius: 9px;
  background: #ffffff;
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto auto;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  text-align: left;
  cursor: pointer;
  transition: all .18s ease;
}

.dashboard-list-row:hover {
  background: #f8faff;
  border-color: #c2c6d5;
  box-shadow: 0 2px 6px rgba(0,0,0,.04);
}

.dashboard-list-icon {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: #f3f3fe;
  color: #0056c3;
  display: grid;
  place-items: center;
  font-size: 13px;
  font-weight: 800;
  flex-shrink: 0;
}

.dashboard-list-meta {
  min-width: 0;
}

.dashboard-list-meta strong {
  display: block;
  font-size: 12px;
  font-weight: 500;
  color: #191b23;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.dashboard-list-meta small {
  display: block;
  font-size: 10px;
  color: #424753;
  margin-top: 2px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.dashboard-list-value {
  font-size: 12px;
  font-weight: 500;
  color: #191b23;
  white-space: nowrap;
}

.dashboard-list-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 22px;
  padding: 0 10px;
  border-radius: 999px;
  font-size: 10.5px;
  font-weight: 800;
  white-space: nowrap;
}

.dashboard-list-badge.success { background: #def6e5; color: #138a42; }
.dashboard-list-badge.pending { background: #fff0d8; color: #d66c00; }
.dashboard-list-badge.refunded { background: #dfebff; color: #1764cf; }
.dashboard-list-badge.danger { background: #ffe2df; color: #b12626; }
`;

export default function DashboardListCard({
  title = "",
  items = [],
  renderItem,
  onItemClick = () => {},
  actionLabel,
  onAction,
  className = "",
}) {
  const sliderRef = useRef(null);

  const scrollUp = () => {
    sliderRef.current?.scrollBy({ top: -90, behavior: "smooth" });
  };

  const scrollDown = () => {
    sliderRef.current?.scrollBy({ top: 90, behavior: "smooth" });
  };

  return (
    <section className={`dashboard-list-panel js-reveal ${className}`}>
      <style>{dashboardListCardCss}</style>
      <div className="dashboard-list-heading">
        <h3>{title}</h3>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {actionLabel && (
            <button className="dashboard-list-action-btn" onClick={onAction}>
              {actionLabel}
            </button>
          )}
          <div className="dashboard-slider-controls">
            <button
              className="dashboard-slider-arrow"
              onClick={scrollUp}
              title="Scroll Up"
            >
              <FiChevronLeft className="dashboard-rotate-90" />
            </button>
            <button
              className="dashboard-slider-arrow"
              onClick={scrollDown}
              title="Scroll Down"
            >
              <FiChevronRight className="dashboard-rotate-90" />
            </button>
          </div>
        </div>
      </div>

      <div className="dashboard-list-scroll" ref={sliderRef}>
        <div className="dashboard-list-grid">
          {items.map((item, index) => {
            if (renderItem) {
              return renderItem(item, index);
            }

            const {
              id,
              icon: Icon,
              iconText,
              iconStyle,
              title: itemTitle,
              subtitle,
              value,
              valueStyle,
              status,
              statusType,
            } = item;

            return (
              <button
                className="dashboard-list-row"
                key={id || itemTitle || index}
                onClick={() => onItemClick(item, index)}
              >
                {Icon ? (
                  <span className={`dashboard-list-icon ${iconStyle || ""}`}>
                    <Icon />
                  </span>
                ) : iconText !== undefined ? (
                  <span className={`dashboard-list-icon ${iconStyle || ""}`}>
                    {iconText}
                  </span>
                ) : null}

                <div className="dashboard-list-meta">
                  <strong>{itemTitle}</strong>
                  {subtitle && <small>{subtitle}</small>}
                </div>

                {value !== undefined && (
                  <b className="dashboard-list-value" style={valueStyle}>
                    {value}
                  </b>
                )}

                {status && (
                  <span
                    className={`dashboard-list-badge ${
                      statusType || String(status).toLowerCase()
                    }`}
                  >
                    {status}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
