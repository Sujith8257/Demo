import React from "react";

const chartCss = `
.master-pie-chart-wrap {
  display: flex;
  align-items: center;
  gap: 18px;
  margin: auto 0;
  padding: 8px 0;
  flex: 1;
  width: 100%;
}
.master-pie-donut {
  position: relative;
  flex: 0 0 auto;
  display: grid;
  place-items: center;
  border-radius: 50%;
  transition: transform 0.2s ease;
}
.master-pie-donut.oval {
  width: 105px;
  height: 140px;
}
.master-pie-donut.oval::after {
  content: "";
  position: absolute;
  inset: 24px 16px;
  border-radius: 50%;
  background: #ffffff;
}
.master-pie-donut.circle {
  width: 120px;
  height: 120px;
}
.master-pie-donut.circle::after {
  content: "";
  position: absolute;
  inset: 18px;
  border-radius: 50%;
  background: #ffffff;
}
.master-pie-donut-center {
  position: relative;
  z-index: 2;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.master-pie-donut-center span {
  display: block;
  font-size: 9px;
  font-weight: 900;
  color: #000000;
  text-transform: uppercase;
  letter-spacing: 0.02em;
}
.master-pie-donut-center strong {
  display: block;
  font-size: 11px;
  font-weight: 800;
  color: #000000;
  margin-top: 2px;
}
.master-pie-legend {
  display: grid;
  gap: 9px;
  flex: 1;
  min-width: 0;
}
.master-pie-legend-row {
  display: grid;
  grid-template-columns: 8px 1fr auto;
  gap: 8px;
  align-items: center;
  font-size: 11.5px;
  font-weight: 500;
  color: #000000;
  transition: opacity 0.15s ease;
}
.master-pie-legend-row.clickable {
  cursor: pointer;
}
.master-pie-legend-row.clickable:hover {
  opacity: 0.85;
}
.master-pie-legend-row i {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  display: inline-block;
  flex-shrink: 0;
}
.master-pie-label-wrap {
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: 0;
  overflow: hidden;
}
.master-pie-label-text {
  color: #000000;
  font-weight: 500;
  font-size: 11.5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.master-pie-count-badge {
  display: inline-flex;
  align-items: center;
  font-size: 10px;
  font-weight: 500;
  color: #000000;
  background: #f1f5f9;
  border: 1px solid #e2e8f0;
  padding: 0 5px;
  border-radius: 4px;
  white-space: nowrap;
  line-height: 16px;
  flex-shrink: 0;
}
.master-pie-values {
  text-align: right;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.master-pie-values strong {
  color: #000000;
  font-weight: 500;
  font-size: 11.5px;
  white-space: nowrap;
}

@media(max-width: 480px) {
  .master-pie-chart-wrap {
    gap: 12px;
  }
  .master-pie-donut.oval {
    width: 90px;
    height: 120px;
  }
  .master-pie-donut.oval::after {
    inset: 20px 14px;
  }
  .master-pie-donut.circle {
    width: 100px;
    height: 100px;
  }
  .master-pie-donut.circle::after {
    inset: 15px;
  }
}
`;

export function parseItemData(item) {
  let label = "";
  let percent = "";
  let count = "";
  let color = "#10172f";

  if (Array.isArray(item)) {
    label = item[0] || "";
    const rawVal = String(item[1] || "");
    color = item.length >= 4 ? item[3] : item[2] || "#10172f";

    if (item.length >= 4) {
      percent = item[1] || "";
      count = item[2] || "";
    } else {
      const pctFirst = rawVal.match(/^(\d+(?:\.\d+)?%)\s*(?:\((.*?)\))?$/);
      const countFirst = rawVal.match(/^(.*?)\s*\((.*?%)\)$/);
      if (pctFirst) {
        percent = pctFirst[1];
        count = pctFirst[2] || "";
      } else if (countFirst) {
        count = countFirst[1];
        percent = countFirst[2];
      } else if (rawVal.includes("%")) {
        percent = rawVal;
      } else {
        count = rawVal;
      }
    }
  } else if (item && typeof item === "object") {
    label = item.label || item.name || "";
    color = item.color || "#10172f";

    if (item.percent) percent = String(item.percent);
    else if (item.percentage) percent = typeof item.percentage === "number" ? `${item.percentage}%` : String(item.percentage);

    if (item.count !== undefined) count = String(item.count);
    else if (item.orders !== undefined) count = String(item.orders);
    else if (item.amount !== undefined) count = String(item.amount);
    else if (item.value !== undefined) {
      const valStr = String(item.value);
      if (!percent && valStr.includes("%")) {
        const pctFirst = valStr.match(/^(\d+(?:\.\d+)?%)\s*(?:\((.*?)\))?$/);
        const countFirst = valStr.match(/^(.*?)\s*\((.*?%)\)$/);
        if (pctFirst) {
          percent = pctFirst[1];
          count = pctFirst[2] || "";
        } else if (countFirst) {
          count = countFirst[1];
          percent = countFirst[2];
        } else {
          percent = valStr;
        }
      } else if (percent && valStr !== percent) {
        count = valStr;
      } else if (!percent) {
        count = valStr;
      }
    }
  }

  if (typeof count === "string") {
    count = count.replace(/^\((.*)\)$/, "$1").trim();
  }

  if (percent && !percent.includes("%") && !isNaN(Number(percent))) {
    percent = `${percent}%`;
  }

  return { label, count, percent, color };
}

export default function MasterPieChart({
  data = [],
  centerTitle,
  centerLabel,
  centerValue,
  conicGradient,
  shape = "circle", // "circle" | "oval"
  donutWidth,
  donutHeight,
  className = "",
  style = {},
  onItemClick,
}) {
  const title = centerTitle || centerLabel || "Segments";

  const parsePercentage = (item) => {
    const { percent } = parseItemData(item);
    if (percent) {
      const match = percent.match(/(\d+(?:\.\d+)?)/);
      if (match) return parseFloat(match[1]);
    }
    return 0;
  };

  const computedGradient = React.useMemo(() => {
    if (conicGradient) return conicGradient;
    if (!data || data.length === 0) return "#7c4dff";

    let current = 0;
    const parts = data.map((item) => {
      const { color } = parseItemData(item);
      const pct = parsePercentage(item);
      const start = current;
      const end = current + pct;
      current = end;
      return `${color} ${start}% ${end}%`;
    });
    return `conic-gradient(${parts.join(", ")})`;
  }, [conicGradient, data]);

  const customDonutStyle = {};
  if (donutWidth) customDonutStyle.width = typeof donutWidth === "number" ? `${donutWidth}px` : donutWidth;
  if (donutHeight) customDonutStyle.height = typeof donutHeight === "number" ? `${donutHeight}px` : donutHeight;

  return (
    <div className={`master-pie-chart-wrap ${className}`} style={style}>
      <style>{chartCss}</style>
      <div
        className={`master-pie-donut ${shape}`}
        style={{ background: computedGradient, ...customDonutStyle }}
      >
        <div className="master-pie-donut-center">
          {title && <span>{title}</span>}
          {centerValue && <strong>{centerValue}</strong>}
        </div>
      </div>

      <div className="master-pie-legend">
        {data.map((item, idx) => {
          const { label, count, percent, color } = parseItemData(item);

          return (
            <div
              className={`master-pie-legend-row ${onItemClick ? "clickable" : ""}`}
              key={label || idx}
              onClick={() => onItemClick && onItemClick(item, idx)}
            >
              <i style={{ background: color }} />
              <div className="master-pie-label-wrap">
                <span className="master-pie-label-text">{label}</span>
                {count && <span className="master-pie-count-badge">{count}</span>}
              </div>
              <div className="master-pie-values">
                <strong>{percent}</strong>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
