import React from "react";
import { FiTrendingUp, FiTrendingDown, FiAlertTriangle } from "react-icons/fi";

export const kpiCardCss = `
/* Master Standardized KPI Grid & Cards matching reference image */
.kpi-grid {
  display: grid;
  grid-template-columns: repeat(6, minmax(145px, 1fr));
  gap: 12px;
  margin-bottom: 24px;
}

@media (max-width: 1400px) {
  .kpi-grid {
    grid-template-columns: repeat(3, minmax(150px, 1fr));
  }
}

@media (max-width: 640px) {
  .kpi-grid {
    grid-template-columns: repeat(2, 1fr) !important;
    gap: 10px !important;
  }
  .kpi-card {
    padding: 12px 10px !important;
    min-height: 88px !important;
    border-radius: 12px !important;
  }
  .kpi-label {
    font-size: 12px !important;
  }
  .kpi-value {
    font-size: 16px !important;
  }
  .kpi-icon {
    width: 26px !important;
    height: 26px !important;
    font-size: 14px !important;
    border-radius: 6px !important;
  }
  .kpi-card small {
    font-size: 9.5px !important;
  }
}

.kpi-card {
  min-height: 98px;
  border: 1px solid rgba(194, 198, 213, .65);
  border-radius: 14px;
  background: #ffffff;
  padding: 14px 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  box-shadow: 0 4px 14px rgba(25, 27, 35, .04);
  font-family: 'Manrope', system-ui, sans-serif;
  transition: transform .18s ease, box-shadow .18s ease;
  overflow: hidden;
}
.kpi-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(25, 27, 35, .09);
}

/* Heading: sits alone on top */
.kpi-label {
  display: block;
  font-size: 18px;
  color: #12141c;
  font-weight: 800;
  letter-spacing: -.01em;
  line-height: 1.25;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
}

/* Row below heading: icon + value side by side */
.kpi-main-row {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  min-width: 0;
}

.kpi-icon {
  width: 28px;
  height: 28px;
  border-radius: 7px;
  display: grid;
  place-items: center;
  font-size: 15px;
  flex-shrink: 0;
  transition: transform .15s ease;
}
.kpi-card:hover .kpi-icon {
  transform: scale(1.05);
}

/* Soft Colored Background Tiles for Card Icons */
.tone-trust .kpi-icon, .tone-blue .kpi-icon { background: #e3edff; color: #0056c3; }
.tone-purple .kpi-icon { background: #eadfff; color: #7157d9; }
.tone-warning .kpi-icon, .tone-orange .kpi-icon { background: #fff0d7; color: #d77a00; }
.tone-success .kpi-icon, .tone-green .kpi-icon { background: #ddf6e4; color: #0b6b1d; }
.tone-danger .kpi-icon, .tone-red .kpi-icon { background: #ffdad6; color: #D32F2F; }
.tone-action .kpi-icon { background: #ffdbce; color: #fd661d; }

/* Value: Scaled dynamically to fit 100% inside container */
.kpi-value {
  display: block;
  font-size: 17px;
  font-weight: 600;
  color: #191B23;
  line-height: 1.15;
  letter-spacing: -.02em;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
  flex: 1;
}

/* Trend: sits at the bottom */
.kpi-card small {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 4px;
  font-size: 11px;
  font-weight: 700;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
}
.kpi-card small em {
  font-style: normal;
  color: #6b7280;
  font-weight: 500;
  margin-left: 2px;
}
.kpi-card small.positive { color: #0b9e43; }
.kpi-card small.negative { color: #D32F2F; }
.kpi-card small.warning-text { color: #d77a00; }
.kpi-card small.neutral { color: #6b7280; }
`;

export default function KpiCard(props) {
  // Support both item array [label, value, trend, caption, tone, Icon] or named props
  let label, value, trend, caption, tone, Icon;

  if (props.item && Array.isArray(props.item)) {
    [label, value, trend, caption, tone, Icon] = props.item;
  } else {
    ({ label, title, value, trend, caption, tone = "trust", icon: Icon } = props);
    label = label || title;
  }

  const isDanger = tone === "danger" || tone === "red";
  const isWarning = tone === "warning";
  const isNegativeTrend = trend && String(trend).startsWith("-");
  const isPositiveTrend = trend && String(trend).startsWith("+");

  const trendClass = isNegativeTrend || isDanger
    ? "negative"
    : isPositiveTrend
    ? "positive"
    : isWarning
    ? "warning-text"
    : "neutral";

  return (
    <article className={`kpi-card tone-${tone} js-reveal`}>
      <style>{kpiCardCss}</style>
      <span className="kpi-label">{label}</span>
      <div className="kpi-main-row">
        {Icon && (
          <span className="kpi-icon">
            <Icon />
          </span>
        )}
        <strong className="kpi-value">{value}</strong>
      </div>
      {(trend || caption) && (
        <small className={trendClass}>
          {isDanger ? (
            <FiAlertTriangle />
          ) : isNegativeTrend ? (
            <FiTrendingDown />
          ) : (
            <FiTrendingUp />
          )}
          {trend}
          {caption && <em>{caption}</em>}
        </small>
      )}
    </article>
  );
}
