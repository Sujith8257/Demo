// Centralized mock database for Customers and Orders
// Provides real-time query, search, and synchronized updates across Orders and Returns management

export const initialCustomers = [
  { id: "CST-1001", name: "Priya Sharma", email: "priya@gmail.com", phone: "+91 98765 43210", address: "12 Lake View Road, Hyderabad, Telangana 500081", segment: "VIP", spent: "₹1,45,200", orders: 24, joined: "Jan 14, 2024", status: "Active", avatar: "PS" },
  { id: "CST-1002", name: "Arjun Mehta", email: "arjun@gmail.com", phone: "+91 98234 56789", address: "45 Hill Road, Bandra West, Mumbai, Maharashtra 400050", segment: "Repeat", spent: "₹82,400", orders: 12, joined: "Feb 02, 2024", status: "Active", avatar: "AM" },
  { id: "CST-1003", name: "Sneha Iyer", email: "sneha@gmail.com", phone: "+91 96543 21876", address: "88 Jubilee Hills, Road No. 36, Hyderabad, Telangana 500033", segment: "New", spent: "₹14,500", orders: 2, joined: "May 10, 2025", status: "Active", avatar: "SI" },
  { id: "CST-1004", name: "Karan Verma", email: "karan@gmail.com", phone: "+91 91234 56780", address: "102 Sector 17, Chandigarh, Punjab 160017", segment: "Repeat", spent: "₹64,300", orders: 9, joined: "Dec 12, 2023", status: "Active", avatar: "KV" },
  { id: "CST-1005", name: "Ananya Rao", email: "ananya@gmail.com", phone: "+91 99887 65432", address: "24 Palace Road, Vasanth Nagar, Bengaluru, Karnataka 560001", segment: "VIP", spent: "₹2,10,000", orders: 38, joined: "Nov 20, 2023", status: "Active", avatar: "AR" },
  { id: "CST-1006", name: "Rohit Kapoor", email: "rohit@gmail.com", phone: "+91 98450 98765", address: "50 Golf Links, New Delhi, Delhi 110003", segment: "Inactive", spent: "₹6,800", orders: 1, joined: "Aug 05, 2024", status: "Inactive", avatar: "RK" },
  { id: "CST-1007", name: "Neha Pathak", email: "neha@gmail.com", phone: "+91 98760 11223", address: "14 SG Highway, Bodakdev, Ahmedabad, Gujarat 380054", segment: "New", spent: "₹8,900", orders: 1, joined: "May 14, 2025", status: "Active", avatar: "NP" },
  { id: "CST-1008", name: "Vikram Singh", email: "vikram@gmail.com", phone: "+91 97123 45678", address: "77 Civil Lines, Jaipur, Rajasthan 302006", segment: "VIP", spent: "₹1,18,500", orders: 16, joined: "Mar 18, 2024", status: "Active", avatar: "VS" },
  { id: "CST-1009", name: "Sujith Kumar", email: "sujith@gmail.com", phone: "+91 98765 12340", address: "10 Indiranagar 100ft Rd, Bengaluru, Karnataka 560038", segment: "VIP", spent: "₹1,80,000", orders: 20, joined: "Jan 10, 2024", status: "Active", avatar: "SK" },
  { id: "CST-1010", name: "Riya Patel", email: "riya.patel@gmail.com", phone: "+91 98234 56789", address: "18 Marine Drive, Mumbai, Maharashtra 400020", segment: "Repeat", spent: "₹52,100", orders: 7, joined: "Apr 05, 2024", status: "Active", avatar: "RP" }
];

export const initialOrders = [
  {
    id: "#AMH1250",
    orderId: "#AMH1250",
    date: "19 Aug 2026",
    customer: "Priya Sharma",
    email: "priya@gmail.com",
    phone: "+91 98765 43210",
    address: "12 Lake View Road, Hyderabad, Telangana 500081",
    product: "Linen Blend Shirt",
    variant: "M / White",
    category: "Men > Shirts",
    amount: 2549,
    total: "₹2,549",
    items: "2 items",
    payment: "Paid",
    paymentMethod: "Razorpay",
    status: "Processing",
    shipping: "Standard"
  },
  {
    id: "#AMH1249",
    orderId: "#AMH1249",
    date: "19 Aug 2026",
    customer: "Arjun Mehta",
    email: "arjun@gmail.com",
    phone: "+91 98234 56789",
    address: "45 Hill Road, Bandra West, Mumbai, Maharashtra 400050",
    product: "Leather Tote Bag",
    variant: "Brown",
    category: "Bags > Tote",
    amount: 1299,
    total: "₹1,299",
    items: "1 item",
    payment: "Paid",
    paymentMethod: "UPI",
    status: "Shipped",
    shipping: "Express"
  },
  {
    id: "#AMH1248",
    orderId: "#AMH1248",
    date: "18 Aug 2026",
    customer: "Sneha Iyer",
    email: "sneha@gmail.com",
    phone: "+91 96543 21876",
    address: "88 Jubilee Hills, Road No. 36, Hyderabad, Telangana 500033",
    product: "Ceramic Vase Set",
    variant: "Set of 3",
    category: "Home > Decor",
    amount: 3199,
    total: "₹3,199",
    items: "3 items",
    payment: "Paid",
    paymentMethod: "Credit Card",
    status: "Delivered",
    shipping: "Standard"
  },
  {
    id: "#AMH1247",
    orderId: "#AMH1247",
    date: "18 Aug 2026",
    customer: "Karan Verma",
    email: "karan@gmail.com",
    phone: "+91 91234 56780",
    address: "102 Sector 17, Chandigarh, Punjab 160017",
    product: "Wireless Earbuds",
    variant: "Black",
    category: "Electronics > Audio",
    amount: 899,
    total: "₹899",
    items: "1 item",
    payment: "Pending",
    paymentMethod: "COD",
    status: "Pending",
    shipping: "COD"
  },
  {
    id: "#AMH1246",
    orderId: "#AMH1246",
    date: "18 Aug 2026",
    customer: "Ananya Rao",
    email: "ananya@gmail.com",
    phone: "+91 99887 65432",
    address: "24 Palace Road, Vasanth Nagar, Bengaluru, Karnataka 560001",
    product: "Vitamin C Serum",
    variant: "30ml",
    category: "Beauty > Skincare",
    amount: 1199,
    total: "₹1,199",
    items: "1 item",
    payment: "Paid",
    paymentMethod: "Razorpay",
    status: "Delivered",
    shipping: "Standard"
  },
  {
    id: "#AMH1245",
    orderId: "#AMH1245",
    date: "17 Aug 2026",
    customer: "Rohit Kapoor",
    email: "rohit@gmail.com",
    phone: "+91 98450 98765",
    address: "50 Golf Links, New Delhi, Delhi 110003",
    product: "Cotton Bedsheet",
    variant: "King / Grey",
    category: "Home > Bedding",
    amount: 1599,
    total: "₹1,599",
    items: "2 items",
    payment: "Refunded",
    paymentMethod: "Net Banking",
    status: "Cancelled",
    shipping: "Standard"
  },
  {
    id: "#AMH1244",
    orderId: "#AMH1244",
    date: "17 Aug 2026",
    customer: "Neha Pathak",
    email: "neha@gmail.com",
    phone: "+91 98760 11223",
    address: "14 SG Highway, Bodakdev, Ahmedabad, Gujarat 380054",
    product: "Scented Candle",
    variant: "Lavender",
    category: "Home > Fragrance",
    amount: 649,
    total: "₹649",
    items: "1 item",
    payment: "Paid",
    paymentMethod: "UPI",
    status: "Delivered",
    shipping: "Standard"
  },
  {
    id: "#AMH1243",
    orderId: "#AMH1243",
    date: "16 Aug 2026",
    customer: "Vikram Singh",
    email: "vikram@gmail.com",
    phone: "+91 97123 45678",
    address: "77 Civil Lines, Jaipur, Rajasthan 302006",
    product: "Running Shoes",
    variant: "UK 9 / Black",
    category: "Footwear > Men",
    amount: 2799,
    total: "₹2,799",
    items: "1 item",
    payment: "Paid",
    paymentMethod: "Credit Card",
    status: "Delivered",
    shipping: "Standard"
  }
];

// In-memory synced registries
let currentCustomers = [...initialCustomers];
let currentOrders = [...initialOrders];

export function fetchAllCustomers(query = "") {
  const q = (query || "").trim().toLowerCase();
  if (!q) return [...currentCustomers];
  return currentCustomers.filter(
    (c) =>
      c.name.toLowerCase().includes(q) ||
      c.email.toLowerCase().includes(q) ||
      (c.phone && c.phone.toLowerCase().includes(q)) ||
      c.id.toLowerCase().includes(q)
  );
}

export function fetchAllOrders(query = "") {
  const q = (query || "").trim().toLowerCase();
  if (!q) return [...currentOrders];
  return currentOrders.filter(
    (o) =>
      o.id.toLowerCase().includes(q) ||
      o.customer.toLowerCase().includes(q) ||
      o.email.toLowerCase().includes(q) ||
      (o.product && o.product.toLowerCase().includes(q))
  );
}

export function fetchOrderByOrderId(orderId) {
  if (!orderId) return null;
  const cleanId = orderId.trim().toUpperCase();
  return currentOrders.find((o) => o.id.toUpperCase() === cleanId) || null;
}

export function fetchCustomerByName(name) {
  if (!name) return null;
  const clean = name.trim().toLowerCase();
  return currentCustomers.find((c) => c.name.toLowerCase() === clean) || null;
}

export function registerOrder(newOrder) {
  currentOrders = [newOrder, ...currentOrders];
}

export function registerCustomer(newCustomer) {
  currentCustomers = [newCustomer, ...currentCustomers];
}
