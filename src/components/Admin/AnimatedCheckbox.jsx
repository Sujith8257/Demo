import React from "react";

const checkboxCss = `
.ios-checkbox {
  --checkbox-size: 18px;
  --checkbox-color: #0056c3;
  --checkbox-bg: #dbeafe;
  --checkbox-border: #c2c6d5;

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  vertical-align: middle;
}

.ios-checkbox input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  margin: 0;
}

.ios-checkbox .checkbox-wrapper {
  position: relative;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: 5px;
  transition: transform 0.2s ease;
  display: block;
}

.ios-checkbox .checkbox-bg {
  position: absolute;
  inset: 0;
  border-radius: 5px;
  border: 1.5px solid var(--checkbox-border);
  background: white;
  transition: all 0.2s ease;
}

.ios-checkbox .checkbox-icon {
  position: absolute;
  inset: 0;
  margin: auto;
  width: 80%;
  height: 80%;
  color: white;
  transform: scale(0);
  transition: all 0.2s ease;
}

.ios-checkbox .check-path {
  stroke-dasharray: 40;
  stroke-dashoffset: 40;
  transition: stroke-dashoffset 0.3s ease 0.1s;
}

/* Checked State */
.ios-checkbox input:checked + .checkbox-wrapper .checkbox-bg {
  background: var(--checkbox-color);
  border-color: var(--checkbox-color);
}

.ios-checkbox input:checked + .checkbox-wrapper .checkbox-icon {
  transform: scale(1);
}

.ios-checkbox input:checked + .checkbox-wrapper .check-path {
  stroke-dashoffset: 0;
}

/* Hover Effects */
.ios-checkbox:hover .checkbox-wrapper {
  transform: scale(1.08);
}

/* Active Animation */
.ios-checkbox:active .checkbox-wrapper {
  transform: scale(0.92);
}

/* Focus Styles */
.ios-checkbox input:focus + .checkbox-wrapper .checkbox-bg {
  box-shadow: 0 0 0 3px var(--checkbox-bg);
}

/* Bounce Animation */
@keyframes ios-checkbox-bounce {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.15);
  }
}

.ios-checkbox input:checked + .checkbox-wrapper {
  animation: ios-checkbox-bounce 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
`;

let styleInjected = false;
function injectStyles() {
  if (styleInjected || typeof document === "undefined") return;
  const styleEl = document.createElement("style");
  styleEl.textContent = checkboxCss;
  document.head.appendChild(styleEl);
  styleInjected = true;
}

export default function AnimatedCheckbox({
  checked,
  onChange,
  disabled,
  className = "",
  id,
  name,
  ariaLabel,
}) {
  injectStyles();

  return (
    <label className={`ios-checkbox ${className}`}>
      <input
        type="checkbox"
        checked={!!checked}
        onChange={onChange}
        disabled={disabled}
        id={id}
        name={name}
        aria-label={ariaLabel}
      />
      <div className="checkbox-wrapper">
        <div className="checkbox-bg" />
        <svg className="checkbox-icon" viewBox="0 0 24 24" fill="none">
          <path
            className="check-path"
            d="M4 12L10 18L20 6"
            stroke="currentColor"
            strokeWidth={3.2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </label>
  );
}
