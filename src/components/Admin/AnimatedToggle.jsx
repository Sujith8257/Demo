import React from "react";

const toggleCss = `
.animated-toggle-wrapper {
  display: inline-block;
  user-select: none;
  vertical-align: middle;
}

.animated-toggle-wrapper .switch {
  font-size: 13.5px;
  position: relative;
  display: inline-block;
  width: 3.5em;
  height: 2em;
}

.animated-toggle-wrapper .switch input {
  opacity: 0;
  width: 0;
  height: 0;
  position: absolute;
}

.animated-toggle-wrapper .slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(182, 182, 182);
  transition: 0.4s;
  border-radius: 10px;
}

.animated-toggle-wrapper .slider:before {
  position: absolute;
  content: "";
  height: 1.4em;
  width: 1.4em;
  border-radius: 8px;
  left: 0.3em;
  bottom: 0.3em;
  transform: rotate(270deg);
  background-color: rgb(255, 255, 255);
  transition: 0.4s;
}

.animated-toggle-wrapper .switch input:checked + .slider {
  background-color: #0056C3;
}

.animated-toggle-wrapper .switch input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

.animated-toggle-wrapper .switch input:checked + .slider:before {
  transform: translateX(1.5em);
}

.animated-toggle-wrapper .switch input:disabled + .slider {
  cursor: not-allowed;
  opacity: 0.55;
}
`;

export default function AnimatedToggle({
  checked = false,
  onChange = () => {},
  label = "Toggle switch",
  disabled = false,
  className = "",
  style,
}) {
  return (
    <div className={`animated-toggle-wrapper ${className}`} style={style}>
      <style>{toggleCss}</style>
      <label className="switch">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          disabled={disabled}
          aria-label={label}
        />
        <span className="slider" />
      </label>
    </div>
  );
}
