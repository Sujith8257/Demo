import React from "react";
import AnimatedCheckbox from "./AnimatedCheckbox";
import MobileTableCards, { MobileTableCard } from "./MobileTableCards";
import { FiEye, FiChevronRight, FiCheckCircle } from "react-icons/fi";

export const returnsTableCss = `
/* Master Returns Table Styles matching OrdersTable format */
.table-card {
  background: #ffffff;
  border: 1px solid rgba(194, 198, 213, .62);
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(25, 27, 35, .05);
  overflow: hidden;
}

.returns-table-wrapper {
  width: 100%;
  overflow-x: auto;
}

.returns-table-wrapper table {
  width: 100%;
  border-collapse: collapse;
  min-width: 1080px;
}

.returns-table-wrapper th {
  height: 44px;
  background: #f3f3fe;
  color: #191b23;
  text-align: left;
  font-size: 12.5px;
  font-weight: 800;
  border-bottom: 1px solid #ededf8;
  text-transform: uppercase;
  letter-spacing: .04em;
  padding: 0 14px;
  white-space: nowrap;
}
.returns-table-wrapper th:last-child, .returns-table-wrapper td:last-child {
  width: 130px;
  padding: 0 14px;
  text-align: center;
  border-top-right-radius: 10px;
}

.returns-table-wrapper tr {
  transition: background 0.18s ease;
}
.returns-table-wrapper tr.selected {
  background: #f0f5ff;
}

.returns-table-wrapper td {
  height: 62px;
  border-bottom: 1px solid #ededf8;
  font-size: 12.5px;
  font-weight: 500;
  color: #191B23;
  padding: 0 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: middle;
}

.returns-table-wrapper td strong {
  color: #191B23;
  font-weight: 500;
  font-size: 13px;
}

.returns-table-wrapper .id-col {
  color: #0056c3;
  font-weight: 800;
}

.returns-table-wrapper .check {
  width: 17px;
  height: 17px;
  cursor: pointer;
  accent-color: #004094;
}

.returns-table-wrapper .customer {
  display: flex;
  align-items: center;
  gap: 10px;
}

.returns-table-wrapper .customer .avatar {
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

.returns-table-wrapper .customer strong {
  display: block;
  font-size: 13px;
  color: #191B23;
  font-weight: 500;
}

.returns-table-wrapper .customer small {
  display: block;
  font-size: 11px;
  color: #191B23;
  font-weight: 500;
  margin-top: 1px;
}

.returns-table-wrapper .product-cell {
  display: flex;
  align-items: center;
  gap: 10px;
}

.returns-table-wrapper .pthumb {
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

.returns-table-wrapper .pmeta strong {
  display: block;
  font-size: 13px;
  color: #191B23;
  font-weight: 500;
}

.returns-table-wrapper .pmeta small {
  display: block;
  font-size: 11px;
  color: #737785;
  margin-top: 1px;
}

/* Status Badges */
.returns-table-wrapper .status {
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

.returns-table-wrapper .status.requested { background: #e7efff; color: #2b65c8; }
.returns-table-wrapper .status.pending-approval, .returns-table-wrapper .status.pending { background: #fff0d8; color: #d66c00; }
.returns-table-wrapper .status.approved { background: #def6e5; color: #138a42; }
.returns-table-wrapper .status.pickup-scheduled { background: #dfebff; color: #1764cf; }
.returns-table-wrapper .status.received { background: #ede8ff; color: #674ccd; }
.returns-table-wrapper .status.refunded { background: #def6e5; color: #138a42; }
.returns-table-wrapper .status.rejected { background: #ffe2df; color: #b12626; }

/* Action Buttons */
.returns-table-wrapper .rowactions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
}
.returns-table-wrapper .rowactions button {
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
.returns-table-wrapper .rowactions button:hover {
  background: #f3f3fe;
  border-color: #0056c3;
  color: #0056c3;
}
.returns-table-wrapper .rowactions button.active-action {
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
.mobile-cards .return-card {
  border: 1px solid #c2c6d5;
  border-radius: 10px;
  padding: 12px;
  background: #ffffff;
}
.mobile-cards .return-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}
.mobile-cards .return-meta {
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
  .returns-table-wrapper { display: none; }
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

const StatusPill = ({ value }) => {
  if (!value || value === "-") return <span style={{ color: "#191B23" }}>-</span>;
  const formattedClass = String(value).toLowerCase().replaceAll(" ", "-");
  return <span className={`status ${formattedClass}`}>{value}</span>;
};

export default function ReturnsTable({
  returns = [],
  selected = [],
  activeReturnId = null,
  onToggle = () => {},
  onViewDetails = () => {},
  showCheckbox = true,
  showActions = true,
  totalCount,
}) {
  const displayTotal = totalCount !== undefined ? totalCount : returns.length;

  return (
    <section className="table-card">
      <style>{returnsTableCss}</style>
      <div className="returns-table-wrapper">
        <table>
          <thead>
            <tr>
              {showCheckbox && <th style={{ width: 42 }}></th>}
              <th>Return ID</th>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Product</th>
              <th>Reason</th>
              <th>Requested On</th>
              <th>Return Status</th>
              <th>Refund Amount</th>
              <th>Refund Status</th>
              {showActions && <th>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {returns.map((r, i) => (
              <tr key={r.id} className={activeReturnId === r.id ? "selected" : ""}>
                {showCheckbox && (
                  <td>
                    <AnimatedCheckbox
                      checked={selected.includes(r.id)}
                      onChange={() => onToggle(r.id)}
                    />
                  </td>
                )}
                <td>
                  <span className="id-col">{r.id}</span>
                </td>
                <td>
                  <strong>{r.order}</strong>
                </td>
                <td>
                  <div className="customer">
                    <span className="avatar">
                      {r.customer
                        .split(" ")
                        .map((x) => x[0])
                        .join("")
                        .slice(0, 2)}
                    </span>
                    <div>
                      <strong>{r.customer}</strong>
                      <small>{r.email}</small>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="product-cell">
                    <div className="pthumb">{String(i + 1).padStart(2, "0")}</div>
                    <div className="pmeta">
                      <strong>{r.product}</strong>
                      <small>{r.category} · {r.variant}</small>
                    </div>
                  </div>
                </td>
                <td>
                  <strong>{r.reason}</strong>
                </td>
                <td>{r.requested}</td>
                <td>
                  <StatusPill value={r.status} />
                </td>
                <td>
                  <strong>₹{(r.refund || 0).toLocaleString("en-IN")}</strong>
                </td>
                <td>
                  <StatusPill value={r.refundStatus} />
                </td>
                {showActions && (
                  <td>
                    <div className="rowactions">
                      <button
                        title="View details"
                        className={activeReturnId === r.id ? "active-action" : ""}
                        onClick={() => onViewDetails(r)}
                      >
                        <FiEye />
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
         items={returns}
         renderItem={(r) => (
           <MobileTableCard
             key={r.id}
             title={r.id}
             badge={r.status}
             badgeStatus={r.status}
             meta={[
               { label: "Customer", value: r.customer },
               { label: "Order ID", value: r.order },
               { label: "Product", value: r.product },
               { label: "Reason", value: r.reason },
               { label: "Refund", value: `₹${(r.refund || 0).toLocaleString("en-IN")}` },
             ]}
             actionLabel="View Return Details"
             onAction={() => onViewDetails(r)}
           />
         )}
       />

      <div className="footerbar">
        <span>
          Showing 1–{returns.length} of {displayTotal} returns
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
