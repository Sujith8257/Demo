import React from "react";
import AnimatedCheckbox from "./AnimatedCheckbox";
import { FiEye, FiRefreshCw, FiChevronRight } from "react-icons/fi";
import MobileTableCards, { MobileTableCard } from "./MobileTableCards";

export const ordersTableCss = `
/* Master Orders Table Styles */
.table-card {
  background: #ffffff;
  border: 1px solid rgba(194, 198, 213, .62);
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(25, 27, 35, .05);
  overflow: hidden;
}

.orders-table-wrapper {
  width: 100%;
  overflow-x: auto;
}

.orders-table-wrapper table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  min-width: 840px;
}

.orders-table-wrapper th, .orders-table-wrapper td { box-sizing: border-box; }
.orders-table-wrapper thead tr { height: 44px; }
.orders-table-wrapper tbody tr { height: 60px; box-sizing: border-box; }

.orders-table-wrapper th {
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

.orders-table-wrapper td {
  height: 60px;
  border-bottom: 1px solid #ededf8;
  font-size: 12.5px;
  font-weight: 500;
  color: #191b23;
  padding: 0 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: middle;
}

.orders-table-wrapper th:first-child, .orders-table-wrapper td:first-child { width: 48px; padding-left: 18px; padding-right: 8px; text-align: center; }
.orders-table-wrapper th:last-child, .orders-table-wrapper td:last-child { width: 130px; padding: 0 14px; text-align: center; }

.orders-table-wrapper tr {
  transition: background 0.18s ease;
}
.orders-table-wrapper tr.selected {
  background: #f0f5ff;
}

.orders-table-wrapper td strong {
  color: #191b23;
  font-weight: 500;
  font-size: 13px;
}

.orders-table-wrapper .check {
  width: 17px;
  height: 17px;
  cursor: pointer;
  accent-color: #004094;
}

.orders-table-wrapper .customer {
  display: flex;
  align-items: center;
  gap: 10px;
}

.orders-table-wrapper .customer .avatar {
  width: 34px;
  height: 34px;
  font-size: 11px;
  font-weight: 800;
  border-radius: 50%;
  background: #004094;
  color: #ffffff;
  display: grid;
  place-items: center;
  flex-shrink: 0;
}

.orders-table-wrapper .customer strong {
  display: block;
  font-size: 13px;
  color: #191b23;
  font-weight: 500;
}

.orders-table-wrapper .customer small {
  display: block;
  font-size: 11px;
  color: #191b23;
  font-weight: 500;
  margin-top: 1px;
}

/* Status Badges */
.orders-table-wrapper .status {
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
.orders-table-wrapper .status.pending, .orders-table-wrapper .status.processing { background: #fff0d8; color: #d66c00; }
.orders-table-wrapper .status.shipped { background: #dfebff; color: #1764cf; }
.orders-table-wrapper .status.delivered, .orders-table-wrapper .status.paid { background: #def6e5; color: #138a42; }
.orders-table-wrapper .status.cancelled, .orders-table-wrapper .status.failed { background: #ffe2df; color: #b12626; }
.orders-table-wrapper .status.refunded { background: #e6e9ff; color: #4e57b5; }
.orders-table-wrapper .status.packed { background: #e9e3ff; color: #6651c9; }
.orders-table-wrapper .status.out-for-delivery { background: #e2f3ff; color: #0f6c9f; }
.orders-table-wrapper .status.ready-for-pickup { background: #e8f4ff; color: #1764cf; }

/* Table Action Buttons */
.orders-table-wrapper .rowactions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
}
.orders-table-wrapper .rowactions button {
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
.orders-table-wrapper .rowactions button:hover {
  background: #f3f3fe;
  border-color: #0056c3;
  color: #0056c3;
}
.orders-table-wrapper .rowactions button.active-action {
  border-color: #0056c3;
  background: #f3f3fe;
  color: #0056c3;
}

/* Mobile Card View */
.mobile-cards {
  display: none;
  padding: 12px;
  flex-direction: column;
  gap: 10px;
}
.mobile-cards .order-card {
  border: 1px solid #c2c6d5;
  border-radius: 10px;
  padding: 12px;
  background: #ffffff;
}
.mobile-cards .order-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}
.mobile-cards .order-meta {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 4px 12px;
  font-size: 11.5px;
  margin-bottom: 10px;
}
.mobile-cards button {
  width: 100%;
  height: 34px;
  border: 1px solid #c2c6d5;
  background: #ffffff;
  border-radius: 7px;
  font-weight: 700;
  font-size: 11.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  cursor: pointer;
}

@media(max-width: 980px) {
  .orders-table-wrapper { display: none; }
  .mobile-cards { display: flex; }
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
@media (max-width: 650px) {
  .footerbar {
    flex-direction: column !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 10px !important;
    padding: 14px 12px !important;
    text-align: center !important;
  }
  .footerbar > span {
    display: block !important;
    width: 100% !important;
    text-align: center !important;
    font-size: 11.5px !important;
    color: #667085 !important;
    margin: 0 !important;
  }
  .footerbar .pagination {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 6px !important;
    width: 100% !important;
  }
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

export default function OrdersTable({
  orders = [],
  selected = [],
  activeOrderId = null,
  onToggle = () => {},
  onViewDetails = () => {},
  onUpdateStatus = () => {},
  showCheckbox = true,
  showActions = true,
  totalCount,
}) {
  const displayTotal = totalCount !== undefined ? totalCount : orders.length;

  return (
    <section className="table-card">
      <style>{ordersTableCss}</style>
      <div className="orders-table-wrapper">
        <table>
          <thead>
            <tr>
              {showCheckbox && <th style={{ width: 42 }}></th>}
              <th>Order ID</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Items</th>
              <th>Total</th>
              <th>Payment</th>
              <th>Status</th>
              <th>Shipping</th>
              {showActions && <th>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <tr key={o.id} className={activeOrderId === o.id ? "selected" : ""}>
                {showCheckbox && (
                  <td>
                    <AnimatedCheckbox
                      checked={selected.includes(o.id)}
                      onChange={() => onToggle(o.id)}
                    />
                  </td>
                )}
                <td>
                  <strong>{o.id}</strong>
                </td>
                <td>
                  <div className="customer">
                    <span className="avatar">
                      {o.customer
                        .split(" ")
                        .map((x) => x[0])
                        .join("")
                        .slice(0, 2)}
                    </span>
                    <div>
                      <strong>{o.customer}</strong>
                      <small>{o.email}</small>
                    </div>
                  </div>
                </td>
                <td>{o.date}</td>
                <td>{o.items}</td>
                <td>
                  <strong>{o.total}</strong>
                </td>
                <td>
                  <span className={`status ${(o.payment || "").toLowerCase()}`}>
                    {o.payment}
                  </span>
                </td>
                <td>
                  <span
                    className={`status ${(o.status || "")
                      .toLowerCase()
                      .replaceAll(" ", "-")}`}
                  >
                    {o.status}
                  </span>
                </td>
                <td>{o.shipping}</td>
                {showActions && (
                  <td>
                    <div className="rowactions">
                      <button
                        title="View details"
                        className={activeOrderId === o.id ? "active-action" : ""}
                        onClick={() => onViewDetails(o)}
                      >
                        <FiEye />
                      </button>
                      <button
                        title="Update status"
                        onClick={() => onUpdateStatus(o)}
                      >
                        <FiRefreshCw />
                      </button>
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <MobileTableCards
        items={orders}
        renderItem={(o) => (
          <MobileTableCard
            key={o.id}
            title={o.id}
            badge={o.status}
            badgeStatus={o.status}
            meta={[
              { label: "Customer", value: o.customer },
              { label: "Total", value: o.total },
              { label: "Payment", value: o.payment },
              { label: "Date", value: o.date },
            ]}
            actionLabel="View Order"
            onAction={() => onViewDetails(o)}
          />
        )}
      />

      <div className="footerbar">
        <span>
          Showing 1–{orders.length} of {displayTotal} orders
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
