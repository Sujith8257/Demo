import React from "react";
import DashboardListCard from "./DashboardListCard";

const defaultLowStockData = [
  ["Linen Blend Shirt", "AMH-FS-001", 3],
  ["Leather Tote Bag", "AMH-BG-002", 5],
  ["Ceramic Vase Set", "AMH-HM-015", 7],
  ["Wireless Earbuds", "AMH-EL-010", 8],
  ["Vitamin C Serum", "AMH-BY-020", 9],
  ["Mechanical Keyboard", "AMH-EL-034", 4],
  ["Smart Watch Band", "AMH-WT-008", 2],
  ["Ergonomic Mouse Pad", "AMH-AC-012", 6],
  ["Cotton Canvas Apron", "AMH-FS-042", 3],
  ["Minimalist Desk Lamp", "AMH-HM-088", 1],
];

export default function LowStockCard({
  title = "Low Stock Items",
  items,
  onItemClick,
  actionLabel,
  onAction,
  onRestock,
  className = "",
}) {
  const sourceItems = items || defaultLowStockData;

  const formattedItems = sourceItems.map((item, index) => {
    if (Array.isArray(item)) {
      const [name, sku, count] = item;
      return {
        id: sku || index,
        iconText: String(index + 1).padStart(2, "0"),
        title: name,
        subtitle: `SKU: ${sku}`,
        value: `${count} left`,
        valueStyle: { color: "var(--admin-red, #D32F2F)", fontWeight: 700 },
      };
    }
    if (item && typeof item === "object") {
      const count = item.available !== undefined ? item.available : item.inventory !== undefined ? item.inventory : item.value;
      return {
        id: item.id || item.sku || index,
        iconText: String(index + 1).padStart(2, "0"),
        title: item.product || item.name || item.title || "Product",
        subtitle: item.sku ? `SKU: ${item.sku}` : item.subtitle || "",
        value: typeof count === "number" ? `${count} left` : count,
        valueStyle: { color: "var(--admin-red, #D32F2F)", fontWeight: 700 },
      };
    }
    return item;
  });

  return (
    <DashboardListCard
      title={title}
      items={formattedItems}
      onItemClick={onItemClick}
      actionLabel={actionLabel}
      onAction={onAction || onRestock}
      className={className}
    />
  );
}
