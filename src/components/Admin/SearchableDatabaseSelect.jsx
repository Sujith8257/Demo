import React, { useState, useRef, useEffect } from "react";
import { FiSearch, FiX, FiCheck, FiChevronDown } from "react-icons/fi";

export const searchableSelectCss = `
.db-search-select-wrap {
  position: relative;
  width: 100%;
  font-family: 'Manrope', system-ui, sans-serif;
}

.db-search-select-trigger {
  width: 100%;
  height: 42px;
  border: 1px solid #c2c6d5;
  border-radius: 9px;
  background: #ffffff;
  padding: 0 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  cursor: pointer;
  box-sizing: border-box;
  transition: all 0.18s ease;
  font-size: 13px;
  font-weight: 600;
  color: #191b23;
}

.db-search-select-trigger:hover {
  border-color: #0056c3;
  background: #f8f9fe;
}

.db-search-select-trigger.is-open {
  border-color: #0056c3;
  box-shadow: 0 0 0 3px rgba(0, 86, 195, 0.12);
}

.db-search-select-trigger-text {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
  text-align: left;
}

.db-search-select-trigger-text.placeholder {
  color: #737785;
  font-weight: 500;
}

.db-search-select-badge {
  font-size: 10.5px;
  font-weight: 800;
  background: #def6e5;
  color: #138a42;
  padding: 2px 7px;
  border-radius: 999px;
  white-space: nowrap;
  flex-shrink: 0;
}

.db-search-select-dropdown {
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  background: #ffffff;
  border: 1px solid rgba(194, 198, 213, 0.9);
  border-radius: 10px;
  box-shadow: 0 18px 45px rgba(25, 27, 35, 0.22);
  z-index: 99999 !important;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  animation: dbSelectFadeIn 0.18s cubic-bezier(0.16, 1, 0.3, 1);
  box-sizing: border-box;
}

@keyframes dbSelectFadeIn {
  from { opacity: 0; transform: translateY(-4px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Search bar matching Roles & Permissions search style */
.db-search-input-box {
  display: flex;
  align-items: center;
  gap: 8px;
  height: 38px;
  border: 1px solid #c2c6d5;
  border-radius: 8px;
  background: #ffffff;
  padding: 0 10px;
  box-sizing: border-box;
}

.db-search-input-box:focus-within {
  border-color: #0056c3;
  box-shadow: 0 0 0 2.5px rgba(0, 86, 195, 0.12);
}

.db-search-input-box svg {
  color: #667085;
  font-size: 15px;
  flex-shrink: 0;
}

.db-search-input-box input {
  border: 0;
  outline: 0;
  width: 100%;
  background: transparent;
  font-size: 12.5px;
  font-weight: 600;
  color: #191b23;
  font-family: inherit;
}

.db-search-clear-btn {
  border: 0;
  background: transparent;
  padding: 2px;
  display: grid;
  place-items: center;
  cursor: pointer;
  color: #737785;
  border-radius: 4px;
}

.db-search-clear-btn:hover {
  color: #191b23;
  background: #ededf8;
}

.db-search-list {
  max-height: 220px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 2px 0;
}

.db-search-item {
  padding: 8px 10px;
  border-radius: 7px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  transition: all 0.15s ease;
  box-sizing: border-box;
}

.db-search-item:hover {
  background: #f3f3fe;
}

.db-search-item.selected {
  background: #e7efff;
}

.db-search-item-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  flex: 1;
}

.db-search-item-primary {
  font-size: 12.5px;
  font-weight: 800;
  color: #191b23;
  display: flex;
  align-items: center;
  gap: 6px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.db-search-item-primary .order-code {
  color: #0056c3;
}

.db-search-item-secondary {
  font-size: 11px;
  color: #667085;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.db-search-no-results {
  padding: 14px 10px;
  text-align: center;
  font-size: 12px;
  color: #737785;
  font-weight: 600;
}

@media (max-width: 640px) {
  .db-search-select-trigger {
    height: 40px;
    padding: 0 10px;
    font-size: 12px;
  }
  .db-search-select-badge {
    font-size: 9.5px;
    padding: 1.5px 6px;
  }
  .db-search-select-dropdown {
    padding: 6px;
    border-radius: 9px;
    box-shadow: 0 14px 35px rgba(25, 27, 35, 0.28);
  }
  .db-search-input-box {
    height: 36px;
    padding: 0 8px;
  }
  .db-search-input-box input {
    font-size: 12px;
  }
  .db-search-list {
    max-height: 180px;
    -webkit-overflow-scrolling: touch;
  }
  .db-search-item {
    padding: 7px 8px;
  }
  .db-search-item-primary {
    font-size: 12px;
    white-space: normal;
    word-break: break-word;
    flex-wrap: wrap;
    line-height: 1.35;
  }
  .db-search-item-secondary {
    font-size: 10.5px;
    white-space: normal;
    word-break: break-word;
    line-height: 1.35;
  }
}
`;

/**
 * SearchableDatabaseSelect
 * Searchable dropdown component with live query filter matching the search bar in Roles & Permissions
 */
export default function SearchableDatabaseSelect({
  type = "order", // "order" | "customer"
  items = [],
  value = "",
  placeholder = "Select or search...",
  onSelect = () => {},
  className = "",
  style = {},
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const wrapRef = useRef(null);
  const searchInputRef = useRef(null);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Auto-focus search input when opened
  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  const filtered = items.filter((item) => {
    const q = query.trim().toLowerCase();
    if (!q) return true;

    if (type === "order") {
      return (
        (item.id && item.id.toLowerCase().includes(q)) ||
        (item.customer && item.customer.toLowerCase().includes(q)) ||
        (item.email && item.email.toLowerCase().includes(q)) ||
        (item.product && item.product.toLowerCase().includes(q))
      );
    } else {
      return (
        (item.name && item.name.toLowerCase().includes(q)) ||
        (item.email && item.email.toLowerCase().includes(q)) ||
        (item.phone && item.phone.toLowerCase().includes(q)) ||
        (item.id && item.id.toLowerCase().includes(q))
      );
    }
  });

  const selectedItem = items.find((it) =>
    type === "order" ? it.id === value : it.name === value || it.id === value
  );

  const getDisplayLabel = () => {
    if (selectedItem) {
      if (type === "order") {
        return `${selectedItem.id} — ${selectedItem.customer} (${selectedItem.product})`;
      }
      return `${selectedItem.name} · ${selectedItem.email}`;
    }
    return value || placeholder;
  };

  return (
    <div className={`db-search-select-wrap ${className}`} style={style} ref={wrapRef}>
      <style>{searchableSelectCss}</style>

      {/* Trigger Button */}
      <button
        type="button"
        className={`db-search-select-trigger ${isOpen ? "is-open" : ""}`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className={`db-search-select-trigger-text ${!selectedItem && !value ? "placeholder" : ""}`}>
          {getDisplayLabel()}
        </span>

        {selectedItem && (
          <span className="db-search-select-badge">✓ Database</span>
        )}

        <FiChevronDown
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.18s ease",
            color: "#667085",
            fontSize: 14,
            flexShrink: 0,
          }}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="db-search-select-dropdown">
          {/* Search Box - Matches Roles & Permissions Filter Bar */}
          <div className="db-search-input-box">
            <FiSearch />
            <input
              ref={searchInputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={
                type === "order"
                  ? "Search Order ID, Customer, or Product..."
                  : "Search Customer name, email, or phone..."
              }
            />
            {query && (
              <button
                type="button"
                className="db-search-clear-btn"
                onClick={() => setQuery("")}
                title="Clear query"
              >
                <FiX size={13} />
              </button>
            )}
          </div>

          {/* List of items */}
          <div className="db-search-list">
            {filtered.length > 0 ? (
              filtered.map((item) => {
                const isSelected =
                  type === "order"
                    ? item.id === value
                    : item.name === value || item.id === value;

                return (
                  <div
                    key={item.id}
                    className={`db-search-item ${isSelected ? "selected" : ""}`}
                    onClick={() => {
                      onSelect(item);
                      setIsOpen(false);
                      setQuery("");
                    }}
                  >
                    <div className="db-search-item-info">
                      {type === "order" ? (
                        <>
                          <div className="db-search-item-primary">
                            <span className="order-code">{item.id}</span>
                            <span>·</span>
                            <span>{item.customer}</span>
                          </div>
                          <div className="db-search-item-secondary">
                            {item.product} {item.variant ? `(${item.variant})` : ""} · {item.total || `₹${(item.amount || 0).toLocaleString("en-IN")}`} · {item.status}
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="db-search-item-primary">
                            <span>{item.name}</span>
                            {item.segment && (
                              <span style={{ fontSize: 10, color: "#0056c3", background: "#e7efff", padding: "1px 6px", borderRadius: 4 }}>
                                {item.segment}
                              </span>
                            )}
                          </div>
                          <div className="db-search-item-secondary">
                            {item.email} {item.phone ? `· ${item.phone}` : ""}
                          </div>
                        </>
                      )}
                    </div>

                    {isSelected && <FiCheck color="#0056c3" size={14} />}
                  </div>
                );
              })
            ) : (
              <div className="db-search-no-results">
                No matching {type === "order" ? "orders" : "customers"} found in database.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
