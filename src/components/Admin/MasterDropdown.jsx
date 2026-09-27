import React, { useState, useRef, useEffect } from "react";

export const masterDropdownCss = `
/* Master Dropdown Component Styles matching exact reference image */
.master-dropdown {
  position: relative;
  display: inline-block;
  width: fit-content;
  user-select: none;
  font-family: 'Manrope', system-ui, sans-serif;
}

.master-dropdown.full-width,
.master-dropdown[style*="100%"] {
  display: block;
  width: 100%;
}

.master-dropdown.open {
  position: relative !important;
  z-index: 99999 !important;
}

.master-dropdown-trigger {
  height: 34px;
  background-color: #ffffff;
  border: 1px solid rgba(194, 198, 213, .8);
  border-radius: 8px;
  padding: 0 12px;
  font-size: 12px;
  font-weight: 800;
  color: #191b23;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  cursor: pointer;
  transition: all 180ms ease;
  white-space: nowrap;
}

.master-dropdown.full-width .master-dropdown-trigger,
.master-dropdown[style*="100%"] .master-dropdown-trigger {
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
}

.master-dropdown-trigger:hover {
  background-color: #f8f9fe;
  border-color: #0056c3;
}

.master-dropdown-trigger.open {
  border-color: #0056c3;
  box-shadow: 0 0 0 3px rgba(0, 86, 195, 0.12);
}

.master-dropdown-label {
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 800;
  color: #191b23;
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.master-dropdown-arrow {
  width: 10px;
  height: 10px;
  fill: #191b23;
  flex-shrink: 0;
  transition: transform 200ms ease;
}

.master-dropdown-trigger.open .master-dropdown-arrow {
  transform: rotate(180deg);
}

.master-dropdown-menu {
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  min-width: 160px;
  background-color: #ffffff;
  border: 1px solid rgba(194, 198, 213, .8);
  border-radius: 9px;
  box-shadow: 0 16px 40px rgba(25, 27, 35, 0.24);
  z-index: 999999 !important;
  padding: 4px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transform: translateY(-6px);
  transition: opacity 180ms ease, transform 180ms ease, visibility 180ms;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.master-dropdown.full-width .master-dropdown-menu,
.master-dropdown[style*="100%"] .master-dropdown-menu {
  width: 100%;
  min-width: 100%;
  box-sizing: border-box;
}

.master-dropdown-menu::-webkit-scrollbar {
  display: none;
  width: 0;
  height: 0;
}

.master-dropdown-menu.right-align {
  left: auto;
  right: 0;
}

.master-dropdown.open .master-dropdown-menu {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  transform: translateY(0);
}

.master-dropdown-option {
  border-radius: 6px;
  padding: 8px 12px;
  font-size: 12px;
  font-weight: 700;
  color: #191B23;
  cursor: pointer;
  transition: background-color 150ms ease, color 150ms ease;
  white-space: nowrap;
}

.master-dropdown-option:hover {
  background-color: #f3f3fe;
  color: #0056c3;
}

.master-dropdown-option.selected {
  background-color: #e7efff;
  color: #004094;
  font-weight: 800;
}
`;

export default function MasterDropdown({
  options = [],
  value,
  onChange = () => {},
  placeholder = "Select option",
  staticLabel,
  prefixIcon: PrefixIcon,
  rightAlign = false,
  fullWidth = false,
  className = "",
  style,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (option) => {
    if (typeof option === "object" && typeof option.action === "function") {
      option.action();
    } else {
      const optionValue = typeof option === "object" ? option.value : option;
      onChange(optionValue);
    }
    setIsOpen(false);
  };

  const getLabel = () => {
    if (staticLabel) return staticLabel;
    if (value === undefined || value === null || value === "") {
      return placeholder;
    }
    const found = options.find(
      (opt) => (typeof opt === "object" ? opt.value : opt) === value
    );
    if (!found) return String(value);
    return typeof found === "object" ? found.label : found;
  };

  return (
    <div
      className={`master-dropdown ${isOpen ? "open" : ""} ${fullWidth ? "full-width" : ""} ${className}`}
      ref={dropdownRef}
      style={{
        ...style,
        position: "relative",
        zIndex: isOpen ? 99999 : (style?.zIndex || "auto"),
      }}
    >
      <style>{masterDropdownCss}</style>
      <div
        className={`master-dropdown-trigger ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="master-dropdown-label">
          {PrefixIcon && <PrefixIcon style={{ fontSize: 13, flexShrink: 0 }} />}
          {getLabel()}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="master-dropdown-arrow"
        >
          <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
        </svg>
      </div>

      <div className={`master-dropdown-menu ${rightAlign ? "right-align" : ""}`}>
        {options.map((opt, i) => {
          const optValue = typeof opt === "object" ? opt.value : opt;
          const optLabel = typeof opt === "object" ? opt.label : opt;
          const isSelected = !staticLabel && optValue === value;

          return (
            <div
              key={optValue || i}
              className={`master-dropdown-option ${
                isSelected ? "selected" : ""
              }`}
              onClick={() => handleSelect(opt)}
            >
              {optLabel}
            </div>
          );
        })}
      </div>
    </div>
  );
}
