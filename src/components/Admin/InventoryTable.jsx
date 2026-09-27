import React from "react";
import AnimatedCheckbox from "./AnimatedCheckbox";
import { FiEye, FiRefreshCw, FiChevronRight } from "react-icons/fi";
import MobileTableCards, { MobileTableCard } from "./MobileTableCards";

export const inventoryTableCss = `
/* Master Inventory Table Styles matching OrdersTable format */
.table-card {
  background: #ffffff;
  border: 1px solid rgba(194, 198, 213, .62);
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(25, 27, 35, .05);
  overflow: hidden;
}

.inventory-table-wrapper {
  width: 100%;
  overflow-x: auto;
}

.inventory-table-wrapper table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  min-width: 1100px;
}

.inventory-table-wrapper th, .inventory-table-wrapper td { box-sizing: border-box; }
.inventory-table-wrapper thead tr { height: 44px; }
.inventory-table-wrapper tbody tr { height: 60px; box-sizing: border-box; }

.inventory-table-wrapper th {
  height: 44px;
  background: #f3f3fe;
  color: #191b23;
  text-align: left;
  font-size: 12px;
  font-weight: 800;
  border-bottom: 1px solid #ededf8;
  text-transform: uppercase;
  letter-spacing: .04em;
  padding: 0 18px;
  white-space: nowrap;
  vertical-align: middle;
}

.inventory-table-wrapper td {
  height: 60px;
  border-bottom: 1px solid #ededf8;
  font-size: 12.5px;
  font-weight: 500;
  color: #191B23;
  padding: 0 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: middle;
}

.inventory-table-wrapper th:first-child, .inventory-table-wrapper td:first-child { width: 48px; padding-left: 18px; padding-right: 8px; text-align: center; border-top-left-radius: 10px; }
.inventory-table-wrapper th:last-child, .inventory-table-wrapper td:last-child { width: 130px; padding: 0 14px; text-align: center; border-top-right-radius: 10px; }

.inventory-table-wrapper tr {
  transition: background 0.18s ease;
}
.inventory-table-wrapper tr.selected {
  background: #f0f5ff;
}

.inventory-table-wrapper td strong {
  color: #191B23;
  font-weight: 500;
  font-size: 13px;
}

.inventory-table-wrapper .check {
  width: 17px;
  height: 17px;
  cursor: pointer;
  accent-color: #004094;
}

.inventory-table-wrapper .product-cell {
  display: flex;
  align-items: center;
  gap: 10px;
}

.inventory-table-wrapper .pthumb {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: #f3f3fe;
  color: #0056c3;
  font-weight: 800;
  font-size: 12px;
  display: grid;
  place-items: center;
  flex-shrink: 0;
}

.inventory-table-wrapper .pmeta strong {
  display: block;
  font-size: 13px;
  color: #191B23;
  font-weight: 500;
}

.inventory-table-wrapper .pmeta small {
  display: block;
  font-size: 11px;
  color: #737785;
  margin-top: 1px;
}

.inventory-table-wrapper .numgood { color: #138a42; font-weight: 800; }
.inventory-table-wrapper .numwarn { color: #d66c00; font-weight: 800; }
.inventory-table-wrapper .numbad { color: #b12626; font-weight: 800; }

/* Status Badges */
.inventory-table-wrapper .status {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  padding: 0 12px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 800;
  white-space: nowrap;
}

.inventory-table-wrapper .status.in-stock { background: #def6e5; color: #138a42; }
.inventory-table-wrapper .status.low-stock { background: #fff0d8; color: #d66c00; }
.inventory-table-wrapper .status.out-of-stock { background: #ffe2df; color: #b12626; }
.inventory-table-wrapper .status.incoming { background: #dfebff; color: #1764cf; }
.inventory-table-wrapper .status.archived { background: #ececf2; color: #616674; }

/* Table Action Buttons */
.inventory-table-wrapper .rowactions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
}
.inventory-table-wrapper .rowactions button {
  width: 34px;
  height: 34px;
  border-radius: 8px;
  border: 1px solid #c2c6d5;
  background: #ffffff;
  color: #191b23;
  display: grid;
  place-items: center;
  font-size: 16px;
  cursor: pointer;
  transition: all .18s ease;
}
.inventory-table-wrapper .rowactions button:hover {
  background: #f3f3fe;
  border-color: #0056c3;
  color: #0056c3;
}
.inventory-table-wrapper .rowactions button.active-action {
  border-color: #0056c3;
  background: #f3f3fe;
  color: #0056c3;
}

@media(max-width: 980px) {
  .inventory-table-wrapper { display: none !important; }
}

.footerbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-top: 1px solid #ededf8;
  font-size: 12.5px;
  font-weight: 600;
  color: #191B23;
}
.footerbar .pagination {
  display: flex;
  gap: 4px;
}
.footerbar .pagination button {
  min-width: 32px;
  height: 32px;
  padding: 0 6px;
  border: 1px solid #c2c6d5;
  background: #ffffff;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
}
.footerbar .pagination button.active {
  background: #0056c3;
  color: #ffffff;
  border-color: #0056c3;
}
`;

const StatusPill = ({ value }) => {
  if (!value) return null;
  const formattedClass = String(value).toLowerCase().replaceAll(" ", "-");
  return <span className={`status ${formattedClass}`}>{value}</span>;
};

export default function InventoryTable({
  inventory = [],
  selected = [],
  activeItemId = null,
  onToggle = () => {},
  onViewDetails = () => {},
  onAdjustStock,
  showCheckbox = true,
  showActions = true,
  totalCount,
}) {
  const displayTotal = totalCount !== undefined ? totalCount : inventory.length;

  return (
    <section className="table-card">
      <style>{inventoryTableCss}</style>
      <div className="inventory-table-wrapper">
        <table>
          <thead>
            <tr>
              {showCheckbox && <th style={{ width: 42 }}></th>}
              <th>Product</th>
              <th>SKU</th>
              <th>Category</th>
              <th>Available</th>
              <th>Reserved</th>
              <th>Incoming</th>
              <th>Reorder Level</th>
              <th>Supplier</th>
              <th>Last Updated</th>
              <th>Status</th>
              {showActions && <th>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {inventory.map((x, i) => {
              const stockClass =
                x.available <= 0
                  ? "numbad"
                  : x.available <= x.reorder
                  ? "numwarn"
                  : "numgood";
              return (
                <tr key={x.id} className={activeItemId === x.id ? "selected" : ""}>
                  {showCheckbox && (
                    <td>
                      <AnimatedCheckbox
                        checked={selected.includes(x.id)}
                        onChange={() => onToggle(x.id)}
                      />
                    </td>
                  )}
                  <td>
                    <div className="product-cell">
                      <div className="pthumb">{String(i + 1).padStart(2, "0")}</div>
                      <div className="pmeta">
                        <strong>{x.product}</strong>
                        <small>{x.variant}</small>
                      </div>
                    </div>
                  </td>
                  <td>
                    <strong>{x.sku}</strong>
                  </td>
                  <td>{x.category}</td>
                  <td>
                    <span className={stockClass}>{x.available}</span>
                  </td>
                  <td>
                    <strong>{x.reserved}</strong>
                  </td>
                  <td>
                    <strong>{x.incoming}</strong>
                  </td>
                  <td>
                    <strong>{x.reorder}</strong>
                  </td>
                  <td>
                    <strong>{x.supplier}</strong>
                  </td>
                  <td>{x.updated}</td>
                  <td>
                    <StatusPill value={x.status} />
                  </td>
                  {showActions && (
                    <td>
                      <div className="rowactions">
                        <button
                          title="View details"
                          className={activeItemId === x.id ? "active-action" : ""}
                          onClick={() => onViewDetails(x)}
                        >
                          <FiEye />
                        </button>
                        {onAdjustStock && (
                          <button
                            title="Adjust stock"
                            onClick={() => onAdjustStock(x)}
                          >
                            <FiRefreshCw />
                          </button>
                        )}
                      </div>
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <MobileTableCards
        items={inventory}
        renderItem={(x) => (
          <MobileTableCard
            key={x.id}
            title={x.sku || `#INV-${x.id}`}
            badge={x.status}
            badgeStatus={x.status}
            meta={[
              { label: "Product", value: x.variant ? `${x.product} (${x.variant})` : x.product },
              { label: "Category", value: x.category },
              { label: "Available", value: `${x.available} in stock` },
              { label: "Reserved", value: `${x.reserved} units` },
              { label: "Incoming", value: `${x.incoming} units` },
              { label: "Reorder Level", value: `${x.reorder}` },
              { label: "Supplier", value: x.supplier },
              { label: "Updated", value: x.updated },
            ]}
            actionLabel="View Product Details"
            onAction={() => onViewDetails(x)}
          />
        )}
      />

      <div className="footerbar">
        <span>
          Showing 1–{inventory.length} of {displayTotal} products
        </span>
        <div className="pagination">
          <button>‹</button>
          <button className="active">1</button>
          <button>2</button>
          <button>3</button>
          <button>›</button>
        </div>
      </div>
    </section>
  );
}
