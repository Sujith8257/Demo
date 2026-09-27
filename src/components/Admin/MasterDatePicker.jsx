import React, { useState, useRef, useEffect, useCallback } from "react";
import { FiCalendar, FiChevronDown, FiChevronLeft, FiChevronRight, FiCheck } from "react-icons/fi";

const datePickerCss = `
.master-date-picker {
  position: relative;
  display: inline-block;
  user-select: none;
  font-family: 'Manrope', system-ui, -apple-system, sans-serif !important;
  font-size: 12px !important;
  box-sizing: border-box !important;
}

/* ── Trigger Button ── */
.master-date-picker .master-date-trigger {
  height: 38px;
  background-color: #ffffff !important;
  border: 1px solid rgba(194, 198, 213, .8) !important;
  border-radius: 8px !important;
  padding: 0 12px !important;
  font-family: 'Manrope', system-ui, -apple-system, sans-serif !important;
  font-size: 12px !important;
  font-weight: 700 !important;
  color: #191b23 !important;
  display: inline-flex !important;
  align-items: center !important;
  gap: 8px !important;
  cursor: pointer !important;
  transition: all 180ms ease !important;
  white-space: nowrap !important;
  width: 100% !important;
  box-sizing: border-box !important;
  line-height: 1 !important;
  letter-spacing: 0 !important;
  text-transform: none !important;
}

.master-date-picker .master-date-trigger:hover {
  background-color: #f8f9fe !important;
  border-color: #0056c3 !important;
}

.master-date-picker .master-date-trigger.open {
  border-color: #0056c3 !important;
  box-shadow: 0 0 0 3px rgba(0, 86, 195, 0.12) !important;
}

/* ── Panel ── */
.master-date-panel {
  position: fixed;
  width: 320px;
  background-color: #ffffff !important;
  border: 1px solid #dfe4ef !important;
  border-radius: 12px !important;
  box-shadow: 0 16px 40px rgba(25, 27, 35, 0.18) !important;
  z-index: 99999 !important;
  padding: 14px !important;
  display: flex !important;
  flex-direction: column !important;
  gap: 12px !important;
  font-family: 'Manrope', system-ui, -apple-system, sans-serif !important;
  font-size: 12px !important;
  box-sizing: border-box !important;
  max-height: calc(100vh - 24px) !important;
  overflow-y: auto !important;
  scrollbar-width: none !important;
}

.master-date-panel::-webkit-scrollbar {
  display: none !important;
  width: 0 !important;
  height: 0 !important;
}

/* ── Presets ── */
.master-date-panel .master-date-presets {
  display: flex !important;
  flex-wrap: wrap !important;
  gap: 6px !important;
}

.master-date-panel .master-preset-btn {
  border: 1px solid #dfe4ef !important;
  background: #f4f6fb !important;
  color: #191b23 !important;
  border-radius: 7px !important;
  padding: 5px 10px !important;
  font-family: 'Manrope', system-ui, -apple-system, sans-serif !important;
  font-size: 11.5px !important;
  font-weight: 700 !important;
  cursor: pointer !important;
  transition: all 150ms ease !important;
  line-height: 1.4 !important;
  letter-spacing: 0 !important;
  text-transform: none !important;
  box-sizing: border-box !important;
}

.master-date-panel .master-preset-btn:hover {
  background: #eef3ff !important;
  border-color: #0056c3 !important;
  color: #0056c3 !important;
}

.master-date-panel .master-preset-btn.active {
  background: #0056c3 !important;
  color: #ffffff !important;
  border-color: #0056c3 !important;
  font-weight: 800 !important;
}

/* ── Calendar Header ── */
.master-date-panel .master-calendar-header {
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  padding: 0 2px !important;
}

.master-date-panel .master-calendar-header strong {
  font-family: 'Manrope', system-ui, -apple-system, sans-serif !important;
  font-size: 13.5px !important;
  font-weight: 800 !important;
  color: #191b23 !important;
  letter-spacing: -0.01em !important;
  line-height: 1.2 !important;
  text-transform: none !important;
  margin: 0 !important;
  padding: 0 !important;
  border: none !important;
  background: none !important;
}

.master-date-panel .master-calendar-nav {
  display: flex !important;
  gap: 4px !important;
}

.master-date-panel .master-nav-btn {
  width: 26px !important;
  height: 26px !important;
  border: 1px solid #dfe4ef !important;
  border-radius: 6px !important;
  background: #ffffff !important;
  display: grid !important;
  place-items: center !important;
  color: #191b23 !important;
  font-size: 13px !important;
  cursor: pointer !important;
  transition: all 150ms ease !important;
  padding: 0 !important;
  line-height: 1 !important;
}

.master-date-panel .master-nav-btn:hover {
  background: #f3f3fe !important;
  border-color: #0056c3 !important;
  color: #0056c3 !important;
}

/* ── Calendar Grid ── */
.master-date-panel .master-calendar-grid {
  display: grid !important;
  grid-template-columns: repeat(7, 1fr) !important;
  gap: 2px !important;
  text-align: center !important;
}

.master-date-panel .master-day-name {
  font-family: 'Manrope', system-ui, -apple-system, sans-serif !important;
  font-size: 10px !important;
  font-weight: 800 !important;
  color: #667085 !important;
  padding: 4px 0 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.04em !important;
  line-height: 1.4 !important;
}

.master-date-panel .master-day-cell {
  height: 30px !important;
  border-radius: 6px !important;
  font-family: 'Manrope', system-ui, -apple-system, sans-serif !important;
  font-size: 12px !important;
  font-weight: 600 !important;
  color: #191b23 !important;
  display: grid !important;
  place-items: center !important;
  cursor: pointer !important;
  transition: background 120ms ease, color 120ms ease !important;
  letter-spacing: 0 !important;
  text-transform: none !important;
  line-height: 1 !important;
  border: none !important;
  background: transparent !important;
  padding: 0 !important;
  margin: 0 !important;
  box-sizing: border-box !important;
}

.master-date-panel .master-day-cell.today:not(.selected) {
  border: 1.5px solid #0056c3 !important;
  color: #0056c3 !important;
  font-weight: 700 !important;
}

.master-date-panel .master-day-cell:hover:not(.empty):not(.selected) {
  background: #f3f3fe !important;
  color: #0056c3 !important;
}

.master-date-panel .master-day-cell.selected {
  background: #0056c3 !important;
  color: #ffffff !important;
  font-weight: 800 !important;
  border-radius: 6px !important;
  border: none !important;
}

.master-date-panel .master-day-cell.in-range {
  background: #eef4ff !important;
  color: #0056c3 !important;
  font-weight: 600 !important;
  border-radius: 0 !important;
  border: none !important;
}

.master-date-panel .master-day-cell.range-start {
  border-radius: 6px 0 0 6px !important;
}

.master-date-panel .master-day-cell.range-end {
  border-radius: 0 6px 6px 0 !important;
}

.master-date-panel .master-day-cell.empty {
  cursor: default !important;
  background: transparent !important;
  color: transparent !important;
  border: none !important;
}

/* ── Footer ── */
.master-date-panel .master-date-footer {
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  padding-top: 10px !important;
  border-top: 1px solid #ededf8 !important;
  margin: 0 !important;
}

.master-date-panel .master-date-clear {
  border: 0 !important;
  background: transparent !important;
  color: #667085 !important;
  font-family: 'Manrope', system-ui, -apple-system, sans-serif !important;
  font-size: 12px !important;
  font-weight: 700 !important;
  cursor: pointer !important;
  transition: color 150ms ease !important;
  padding: 0 !important;
  letter-spacing: 0 !important;
  text-transform: none !important;
  line-height: 1 !important;
}

.master-date-panel .master-date-clear:hover {
  color: #b12626 !important;
  text-decoration: underline !important;
}

.master-date-panel .master-date-apply {
  border: 0 !important;
  background: #0056c3 !important;
  color: #ffffff !important;
  border-radius: 7px !important;
  padding: 6px 14px !important;
  font-family: 'Manrope', system-ui, -apple-system, sans-serif !important;
  font-size: 12px !important;
  font-weight: 800 !important;
  cursor: pointer !important;
  display: inline-flex !important;
  align-items: center !important;
  gap: 5px !important;
  transition: background 150ms ease !important;
  letter-spacing: 0 !important;
  text-transform: none !important;
  line-height: 1.4 !important;
}

.master-date-panel .master-date-apply:hover {
  background: #004094 !important;
}

@media (max-width: 768px) {
  .master-date-panel {
    width: calc(100vw - 20px) !important;
    max-width: 320px !important;
  }
}
`;

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const DAY_NAMES = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

function formatDisplayDate(d) {
  return `${MONTH_NAMES[d.getMonth()].slice(0, 3)} ${d.getDate()}, ${d.getFullYear()}`;
}

function getPresetRange(preset) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  switch (preset) {
    case "Today":
      return [new Date(today), new Date(today)];
    case "Yesterday":
      return [new Date(yesterday), new Date(yesterday)];
    case "Last 7 Days": {
      const start = new Date(today);
      start.setDate(today.getDate() - 6);
      return [start, new Date(today)];
    }
    case "Last 30 Days": {
      const start = new Date(today);
      start.setDate(today.getDate() - 29);
      return [start, new Date(today)];
    }
    case "This Month": {
      const start = new Date(today.getFullYear(), today.getMonth(), 1);
      const end = new Date(today.getFullYear(), today.getMonth() + 1, 0);
      return [start, end];
    }
    default:
      return [null, null];
  }
}

export default function MasterDatePicker({
  value,
  onChange = () => {},
  placeholder = "Filter by Date",
  rightAlign = false,
  className = "",
  singleDate = false,
}) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [isOpen, setIsOpen] = useState(false);
  const [preset, setPreset] = useState(singleDate ? "" : "Last 7 Days");
  const [startDate, setStartDate] = useState(() => {
    if (singleDate) return null;
    const [s] = getPresetRange("Last 7 Days");
    return s;
  });
  const [endDate, setEndDate] = useState(() => {
    if (singleDate) return null;
    const [, e] = getPresetRange("Last 7 Days");
    return e;
  });
  const [hoverDate, setHoverDate] = useState(null);
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [panelPos, setPanelPos] = useState({ top: 0, left: 0 });

  const triggerRef = useRef(null);
  const panelRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        triggerRef.current && !triggerRef.current.contains(e.target) &&
        panelRef.current && !panelRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Position the panel dynamically and clamp safely to viewport
  const updatePosition = useCallback(() => {
    if (!triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    const panelWidth = 320;
    const panelHeight = panelRef.current ? panelRef.current.offsetHeight : 390;

    let left = rightAlign ? rect.right - panelWidth : rect.left;
    if (left + panelWidth > window.innerWidth - 12) {
      left = window.innerWidth - panelWidth - 12;
    }
    if (left < 12) left = 12;

    const spaceBelow = window.innerHeight - rect.bottom - 12;
    const spaceAbove = rect.top - 12;

    let top;
    // Prefer below if there's enough space or if space below is greater than space above
    if (spaceBelow >= panelHeight || spaceBelow >= spaceAbove) {
      top = rect.bottom + 6;
      // Clamp so it never extends below screen
      if (top + panelHeight > window.innerHeight - 12) {
        top = Math.max(12, window.innerHeight - panelHeight - 12);
      }
    } else {
      // Position above
      top = rect.top - panelHeight - 6;
      // Clamp so it never goes off-screen at top
      if (top < 12) {
        top = 12;
      }
    }

    setPanelPos({ top, left });
  }, [rightAlign]);

  useEffect(() => {
    if (!isOpen) return;
    updatePosition();
    const handleEvents = () => updatePosition();
    window.addEventListener("resize", handleEvents);
    window.addEventListener("scroll", handleEvents, true);
    return () => {
      window.removeEventListener("resize", handleEvents);
      window.removeEventListener("scroll", handleEvents, true);
    };
  }, [isOpen, updatePosition]);

  useEffect(() => {
    if (isOpen) {
      requestAnimationFrame(updatePosition);
    }
  }, [isOpen, updatePosition, viewMonth, viewYear, preset]);

  const presets = singleDate
    ? ["Today", "Tomorrow", "In 7 Days", "In 30 Days"]
    : ["Today", "Yesterday", "Last 7 Days", "Last 30 Days", "This Month"];

  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const firstDayOfWeek = new Date(viewYear, viewMonth, 1).getDay(); // 0=Sun

  const handlePresetClick = (p) => {
    setPreset(p);
    if (singleDate) {
      const t = new Date(today);
      if (p === "Today") { setStartDate(new Date(t)); }
      else if (p === "Tomorrow") { const d = new Date(t); d.setDate(d.getDate() + 1); setStartDate(d); }
      else if (p === "In 7 Days") { const d = new Date(t); d.setDate(d.getDate() + 7); setStartDate(d); }
      else if (p === "In 30 Days") { const d = new Date(t); d.setDate(d.getDate() + 30); setStartDate(d); }
    } else {
      const [s, e] = getPresetRange(p);
      setStartDate(s);
      setEndDate(e);
      if (s) { setViewYear(s.getFullYear()); setViewMonth(s.getMonth()); }
    }
  };

  const handleDayClick = (day) => {
    const clicked = new Date(viewYear, viewMonth, day);
    if (singleDate) {
      setStartDate(clicked);
      setPreset("");
      return;
    }
    if (!startDate || (startDate && endDate)) {
      setStartDate(clicked);
      setEndDate(null);
      setPreset("");
    } else {
      if (clicked < startDate) {
        setEndDate(startDate);
        setStartDate(clicked);
      } else {
        setEndDate(clicked);
      }
      setPreset("");
    }
  };

  const handleApply = () => {
    if (singleDate) {
      if (startDate) onChange(formatDisplayDate(startDate));
      else onChange(placeholder);
    } else {
      if (startDate && endDate) {
        if (startDate.getTime() === endDate.getTime()) {
          onChange(formatDisplayDate(startDate));
        } else {
          onChange(`${formatDisplayDate(startDate)} – ${formatDisplayDate(endDate)}`);
        }
      } else if (preset) {
        onChange(preset);
      }
    }
    setIsOpen(false);
  };

  const handleClear = () => {
    setStartDate(null);
    setEndDate(null);
    setPreset("");
    onChange(singleDate ? "" : "All Time");
    setIsOpen(false);
  };

  const getDisplayText = () => {
    if (value && typeof value === "string" && value !== "All Time" && value !== "") return value;
    if (singleDate) {
      if (startDate) return formatDisplayDate(startDate);
      return placeholder;
    }
    if (startDate && endDate) {
      if (startDate.getTime() === endDate.getTime()) return formatDisplayDate(startDate);
      return `${formatDisplayDate(startDate)} – ${formatDisplayDate(endDate)}`;
    }
    if (preset) return preset;
    return placeholder;
  };

  const isSameDay = (a, b) => a && b && a.getDate() === b.getDate() && a.getMonth() === b.getMonth() && a.getFullYear() === b.getFullYear();

  const getDayClasses = (day) => {
    const d = new Date(viewYear, viewMonth, day);
    const isToday = isSameDay(d, today);
    const isStart = startDate && isSameDay(d, startDate);
    const isEnd = endDate && isSameDay(d, endDate);
    const isSelected = isStart || isEnd;

    let inRange = false;
    const compareEnd = endDate || (hoverDate && startDate && !endDate ? hoverDate : null);
    if (!singleDate && startDate && compareEnd) {
      const lo = startDate < compareEnd ? startDate : compareEnd;
      const hi = startDate < compareEnd ? compareEnd : startDate;
      inRange = d > lo && d < hi;
    }

    return [
      "master-day-cell",
      isSelected ? "selected" : "",
      inRange ? "in-range" : "",
      isStart && !singleDate && (endDate || hoverDate) ? "range-start" : "",
      isEnd && !singleDate ? "range-end" : "",
      isToday && !isSelected ? "today" : "",
    ].filter(Boolean).join(" ");
  };

  const prevMonth = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1); }
    else setViewMonth(m => m - 1);
  };

  const nextMonth = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1); }
    else setViewMonth(m => m + 1);
  };

  return (
    <div className={`master-date-picker ${className}`} style={{ display: "inline-block", position: "relative" }}>
      <style>{datePickerCss}</style>
      <div
        ref={triggerRef}
        className={`master-date-trigger ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(prev => !prev)}
      >
        <FiCalendar style={{ color: "#0056c3", fontSize: 14, flexShrink: 0 }} />
        <span style={{ flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{getDisplayText()}</span>
        <FiChevronDown style={{ fontSize: 13, color: "#667085", flexShrink: 0 }} />
      </div>

      {isOpen && (
        <div
          ref={panelRef}
          className="master-date-panel"
          style={{ top: panelPos.top, left: panelPos.left }}
          onClick={e => e.stopPropagation()}
        >
          {/* Presets */}
          <div className="master-date-presets">
            {presets.map((p) => (
              <button
                key={p}
                className={`master-preset-btn ${preset === p ? "active" : ""}`}
                onClick={() => handlePresetClick(p)}
              >
                {p}
              </button>
            ))}
          </div>

          {/* Month Navigation */}
          <div className="master-calendar-header">
            <strong>{MONTH_NAMES[viewMonth]} {viewYear}</strong>
            <div className="master-calendar-nav">
              <button className="master-nav-btn" onClick={prevMonth} title="Previous Month">
                <FiChevronLeft />
              </button>
              <button className="master-nav-btn" onClick={nextMonth} title="Next Month">
                <FiChevronRight />
              </button>
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="master-calendar-grid">
            {DAY_NAMES.map((d) => (
              <div key={d} className="master-day-name">{d}</div>
            ))}

            {/* Empty padding cells */}
            {Array.from({ length: firstDayOfWeek }).map((_, i) => (
              <div key={`pad-${i}`} className="master-day-cell empty" />
            ))}

            {/* Day cells */}
            {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => (
              <div
                key={day}
                className={getDayClasses(day)}
                onClick={() => handleDayClick(day)}
                onMouseEnter={() => {
                  if (!singleDate && startDate && !endDate) {
                    setHoverDate(new Date(viewYear, viewMonth, day));
                  }
                }}
                onMouseLeave={() => setHoverDate(null)}
              >
                {day}
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="master-date-footer">
            <button className="master-date-clear" onClick={handleClear}>
              Clear
            </button>
            <button className="master-date-apply" onClick={handleApply}>
              <FiCheck /> {singleDate ? "Select Date" : "Apply Range"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
