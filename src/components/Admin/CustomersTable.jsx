import React from "react";
import AnimatedCheckbox from "./AnimatedCheckbox";
import { FiEye, FiTrash2, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import MobileTableCards, { MobileTableCard } from "./MobileTableCards";

export const customersTableCss = `
.customers-table-wrapper {
  width: 100%;
  overflow-x: auto;
}

.customers-table-wrapper table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  min-width: 980px;
}

.customers-table-wrapper th, .customers-table-wrapper td { box-sizing: border-box; }
.customers-table-wrapper thead tr { height: 44px; }
.customers-table-wrapper tbody tr { height: 60px; box-sizing: border-box; }

.customers-table-wrapper th {
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

.customers-table-wrapper td {
  height: 60px;
  border-bottom: 1px solid #ededf8;
  font-size: 12.5px;
  font-weight: 500;
  color: #191b23;
  padding: 0 18px;
  white-space: nowrap;
  vertical-align: middle;
}

.customers-table-wrapper th:first-child, .customers-table-wrapper td:first-child { width: 48px; padding-left: 18px; padding-right: 8px; text-align: center; border-top-left-radius: 10px; }
.customers-table-wrapper th:last-child, .customers-table-wrapper td:last-child { width: 130px; padding: 0 14px; text-align: center; border-top-right-radius: 10px; }

.customers-table-wrapper tr {
  transition: background 0.18s ease;
}
.customers-table-wrapper tr.selected {
  background: #f0f5ff;
}

.customers-table-wrapper td strong {
  color: #191b23;
  font-weight: 500;
  font-size: 13px;
}

.customers-table-wrapper .check {
  width: 17px;
  height: 17px;
  accent-color: #004094;
  cursor: pointer;
}

.customers-table-wrapper .person {
  display: flex;
  align-items: center;
  gap: 10px;
}

.customers-table-wrapper .avatar {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 11px;
  font-weight: 800;
  color: #ffffff;
  background: #004094;
  flex-shrink: 0;
}

.customers-table-wrapper .person strong {
  display: block;
  font-size: 13px;
  color: #191b23;
  font-weight: 500;
}

.customers-table-wrapper .person small {
  display: block;
  color: #191b23;
  font-size: 11px;
  font-weight: 500;
  margin-top: 1px;
}

.customers-table-wrapper .pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  padding: 0 10px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 800;
  white-space: nowrap;
}

.customers-table-wrapper .vip {
  background: #eee5ff;
  color: #7649e9;
}

.customers-table-wrapper .repeat {
  background: #fff0df;
  color: #f07413;
}

.customers-table-wrapper .new {
  background: #e4efff;
  color: #1670e8;
}

.customers-table-wrapper .inactive {
  background: #ffe8e9;
  color: #e53945;
}

.customers-table-wrapper .active-status {
  background: #ddf7e4;
  color: #159a43;
}

.customers-table-wrapper .actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
}

.customers-table-wrapper .actions button {
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

.customers-table-wrapper .actions button:hover {
  background: #f3f3fe;
  border-color: #0056c3;
  color: #0056c3;
}

.customers-table-wrapper .actions button.active-action {
  border-color: #0056c3;
  background: #f3f3fe;
  color: #0056c3;
}

.customers-table-wrapper .actions button.delete-btn:hover {
  background: #ffe8e9;
  border-color: #e5484d;
  color: #e5484d;
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

/* Mobile Card View (Matching Order Management Pattern) */
.customers-mobile-cards {
  display: none;
  padding: 12px;
  flex-direction: column;
  gap: 10px;
}
.customers-mobile-cards .customer-card {
  border: 1px solid #c2c6d5;
  border-radius: 10px;
  padding: 14px;
  background: #ffffff;
  transition: all 0.18s ease;
}
.customers-mobile-cards .customer-card:hover {
  border-color: #0056c3;
  box-shadow: 0 4px 14px rgba(0, 86, 195, 0.08);
}
.customers-mobile-cards .customer-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.customers-mobile-cards .customer-title {
  display: flex;
  align-items: center;
  gap: 10px;
}
.customers-mobile-cards .customer-title .avatar {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: #004094;
  color: #ffffff;
  display: grid;
  place-items: center;
  font-size: 11.5px;
  font-weight: 800;
  flex-shrink: 0;
}
.customers-mobile-cards .customer-title strong {
  display: block;
  font-size: 14px;
  font-weight: 800;
  color: #191b23;
}
.customers-mobile-cards .customer-title .customer-id {
  display: block;
  font-size: 11px;
  color: #667085;
  font-weight: 600;
  margin-top: 1px;
}
.customers-mobile-cards .customer-meta {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 5px 12px;
  font-size: 12px;
  margin-bottom: 12px;
}
.customers-mobile-cards .customer-meta span {
  color: #191b23;
  font-weight: 600;
}
.customers-mobile-cards .customer-meta b {
  color: #191b23;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.customers-mobile-cards .customer-meta b.status-active {
  color: #159a43;
}
.customers-mobile-cards .customer-meta b.status-inactive {
  color: #e53945;
}
.customers-mobile-cards button.view-customer-btn {
  width: 100%;
  height: 36px;
  border: 1px solid #c2c6d5;
  background: #ffffff;
  border-radius: 8px;
  font-weight: 700;
  font-size: 12px;
  color: #191b23;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  cursor: pointer;
  transition: all 0.18s ease;
}
.customers-mobile-cards button.view-customer-btn:hover,
.customers-mobile-cards button.view-customer-btn:active {
  background: #eff6ff;
  border-color: #93c5fd;
  color: #0056c3;
}

@media (max-width: 980px) {
  .customers-table-wrapper { display: none !important; }
  .customers-mobile-cards { display: flex !important; }
}

@media (max-width: 650px) {
  .customers-table-foot {
    flex-direction: column;
    gap: 8px;
    height: auto;
    padding: 12px;
    align-items: flex-start;
  }
  .customers-table-foot .pages {
    width: 100%;
    justify-content: flex-start;
    overflow-x: auto;
    padding-bottom: 2px;
  }
}
`;

export default function CustomersTable({
  customers = [],
  selected = [],
  activeCustomerId = null,
  onToggleSelect = () => {},
  onSelectAll = () => {},
  onView = () => {},
  onDelete = () => {},
}) {
  return (
    <>
      <style>{customersTableCss}</style>
      <div className="customers-table-wrapper">
        <table>
          <thead>
            <tr>
              <th style={{ width: 42 }}>
                <AnimatedCheckbox
                  checked={customers.length > 0 && selected.length === customers.length}
                  onChange={(e) => onSelectAll(e.target.checked)}
                />
              </th>
              <th>Customer</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Segment</th>
              <th>Orders</th>
              <th>Total Spent</th>
              <th>Last Order</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((c) => (
              <tr key={c.id} className={activeCustomerId === c.id ? "selected" : ""}>
                <td>
                  <AnimatedCheckbox
                    checked={selected.includes(c.id)}
                    onChange={() => onToggleSelect(c.id)}
                  />
                </td>
                <td>
                  <div className="person">
                    <span className="avatar">
                      {c.name.split(" ").map((x) => x[0]).join("").slice(0, 2)}
                    </span>
                    <div>
                      <strong>{c.name}</strong>
                      <small>Joined {c.joined}</small>
                    </div>
                  </div>
                </td>
                <td>{c.email}</td>
                <td>{c.phone}</td>
                <td>
                  <span className={`pill ${c.segment.toLowerCase()}`}>
                    {c.segment}
                  </span>
                </td>
                <td>
                  <strong>{c.orders}</strong>
                </td>
                <td>
                  <strong>₹{typeof c.spent === "number" ? c.spent.toLocaleString("en-IN") : c.spent}</strong>
                </td>
                <td>{c.last || c.joined}</td>
                <td>
                  <span className={`pill ${c.status === "Active" ? "active-status" : "inactive"}`}>
                    {c.status}
                  </span>
                </td>
                <td>
                  <div className="actions">
                    <button
                      onClick={() => onView(c)}
                      title="View customer"
                      className={activeCustomerId === c.id ? "active-action" : ""}
                    >
                      <FiEye />
                    </button>
                    {onDelete && (
                      <button onClick={() => onDelete(c)} title="Delete customer" className="delete-btn">
                        <FiTrash2 />
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <MobileTableCards
        items={customers}
        renderItem={(c) => (
          <MobileTableCard
            key={c.id}
            title={`#${c.id.replace(/^#/, "")}`}
            badge={c.segment}
            badgeStatus={c.segment}
            meta={[
              { label: "Customer", value: c.name },
              { label: "Total", value: `₹${typeof c.spent === "number" ? c.spent.toLocaleString("en-IN") : c.spent}` },
              { label: "Orders", value: c.orders },
              { label: "Payment", value: c.status === "Active" ? "Paid" : "Pending" },
              { label: "Date", value: c.joined },
            ]}
            actionLabel="View Customer"
            onAction={() => onView(c)}
          />
        )}
      />

      <div className="footerbar">
        <span>
          Showing 1–{customers.length} of 1248 customers
        </span>
        <div className="pagination">
          <button>‹</button>
          <button className="active">1</button>
          <button>2</button>
          <button>3</button>
          <button>›</button>
        </div>
      </div>
    </>
  );
}
