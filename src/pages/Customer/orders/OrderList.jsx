import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BottomNav from '../../../components/Customer/BottomNav';

const NAV_GROUPS = [
  {
    label: 'Account Settings',
    icon: 'person',
    items: [
      { id: 'profile', label: 'Profile Information', route: '/profile' },
      { id: 'addresses', label: 'Manage Addresses', route: '/profile' },
      { id: 'pan', label: 'PAN Card Information', route: '/profile' },
    ],
  },
  {
    label: 'My Orders',
    icon: 'shopping_bag',
    id: 'orders',
    route: '/orders',
    active: true,
    isGroupButton: true,
  },
  {
    label: 'Payments',
    icon: 'account_balance_wallet',
    items: [
      { id: 'gift_cards', label: 'Gift Cards', badge: '₹0', route: '/profile' },
      { id: 'saved_upi', label: 'Saved UPI', route: '/profile' },
      { id: 'saved_cards', label: 'Saved Cards', route: '/profile' },
    ],
  },
  {
    label: 'My Stuff',
    icon: 'folder',
    items: [
      { id: 'coupons', label: 'My Coupons', route: '/profile' },
      { id: 'reviews', label: 'My Reviews & Ratings', route: '/profile' },
      { id: 'notifications', label: 'All Notifications', route: '/profile' },
      { id: 'wishlist', label: 'My Wishlist', route: '/profile' },
    ],
  },
];

export default function Orders() {
  const navigate = useNavigate();

  const [orders, setOrders] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [orderSearch, setOrderSearch] = useState('');
  const [timeFilter, setTimeFilter] = useState('past 6 months');
  const [activeTab, setActiveTab] = useState('Orders');

  const [headerVisible, setHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // ============================================================
  // FETCH ORDERS FROM BACKEND
  // ============================================================
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        setError('');

        const response = await fetch(
          'http://127.0.0.1:8080/api/orders',
          {
            method: 'GET',
            credentials: 'include',
          }
        );

        if (response.status === 401) {
          navigate('/login');
          return;
        }

        if (!response.ok) {
          throw new Error('Failed to fetch orders');
        }

        const data = await response.json();

        console.log('Orders received from backend:', data);

        setOrders(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error('Error fetching orders:', err);
        setError('Unable to load your orders. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [navigate]);

  // ============================================================
  // HEADER SCROLL
  // ============================================================
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      setHeaderVisible(
        currentY < lastScrollY || currentY < 80
      );

      setLastScrollY(currentY);
    };

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  // ============================================================
  // GLOBAL SEARCH
  // ============================================================
  const handleGlobalSearch = (e) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      navigate(
        `/products?q=${encodeURIComponent(searchQuery.trim())}`
      );
    }
  };

  // ============================================================
  // FILTER ORDERS
  // ============================================================
  const filteredOrders = orders.filter((order) => {
    const status = order.status?.toUpperCase();

    // Not Yet Shipped
    if (activeTab === 'Not Yet Shipped') {
      return (
        status === 'PLACED' ||
        status === 'PROCESSING' ||
        status === 'SHIPPED'
      );
    }

    // Buy Again
    if (activeTab === 'Buy Again') {
      return status === 'DELIVERED';
    }

    // Search orders
    if (orderSearch.trim()) {
      const q = orderSearch.toLowerCase();

      return (
        String(order.id)
          .toLowerCase()
          .includes(q) ||
        order.items?.some((item) =>
          item.product?.name
            ?.toLowerCase()
            .includes(q)
        )
      );
    }

    return true;
  });

  // ============================================================
  // FORMAT DATE
  // ============================================================
  const formatOrderDate = (date) => {
    if (!date) return '';

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
      return date;
    }

    return parsedDate.toLocaleDateString(
      'en-IN',
      {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      }
    );
  };

  // ============================================================
  // STATUS TEXT
  // ============================================================
  const getStatusText = (status) => {
    switch (status?.toUpperCase()) {
      case 'DELIVERED':
        return 'Delivered';

      case 'CANCELLED':
        return 'Cancelled';

      case 'SHIPPED':
        return 'Shipped';

      case 'PROCESSING':
        return 'Processing';

      case 'RETURNED':
        return 'Returned';

      case 'PLACED':
        return 'Order Placed';

      default:
        return status || 'Order Placed';
    }
  };

  // ============================================================
  // STATUS DETAIL
  // ============================================================
  const getStatusDetail = (status) => {
    switch (status?.toUpperCase()) {
      case 'DELIVERED':
        return 'Package was delivered successfully.';

      case 'CANCELLED':
        return 'Order was cancelled.';

      case 'SHIPPED':
        return 'Your package has been shipped.';

      case 'PROCESSING':
        return 'Your order is being processed.';

      case 'RETURNED':
        return 'The order has been returned.';

      case 'PLACED':
        return 'Your order has been placed successfully.';

      default:
        return 'Your order is being processed.';
    }
  };

  // ============================================================
  // RENDER
  // ============================================================
  return (
    <div className="bg-[#F1F3F6] text-on-background min-h-screen flex flex-col font-sans antialiased">

      {/* ======================================================
          HEADER
      ====================================================== */}
      <header
        className={`bg-gradient-to-r from-primary via-[#1d4ed8] to-[#1e40af] text-on-primary w-full z-50 fixed top-0 left-0 right-0 border-b border-white/10 shadow-lg transition-transform duration-300 ease-in-out ${
          headerVisible
            ? 'translate-y-0'
            : '-translate-y-full'
        }`}
      >
        <div className="flex flex-col w-full max-w-7xl mx-auto">

          <div className="flex justify-between items-center px-4 py-2 text-[11px] font-medium border-b border-white/10 hidden md:flex opacity-80">
            <div className="flex gap-6">
              <a
                className="hover:text-promo transition-colors"
                href="#"
              >
                Become a Seller
              </a>

              <Link
                className="hover:text-promo transition-colors"
                to="/orders"
              >
                Track Order
              </Link>

              <a
                className="hover:text-promo transition-colors"
                href="#"
              >
                24/7 Support
              </a>
            </div>

            <div className="flex gap-4 items-center">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">
                  local_shipping
                </span>

                Free Shipping on Orders ₹49,999+
              </span>
            </div>
          </div>

          <div className="flex justify-between items-center w-full px-4 md:px-8 py-4 gap-4 md:gap-8">

            <Link
              className="text-2xl font-black text-white tracking-tighter shrink-0 flex items-center gap-2 group"
              to="/home"
            >
              <div className="bg-white text-primary p-1.5 rounded-lg group-hover:rotate-12 transition-transform shadow-md">
                <span className="material-symbols-outlined text-2xl block">
                  hub
                </span>
              </div>

              <span className="font-headline group-hover:tracking-wide transition-all duration-300">
                Amihive
              </span>
            </Link>

            <div className="flex-grow max-w-2xl block">
              <div className="relative w-full group">

                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px] pointer-events-none">
                  search
                </span>

                <input
                  className="w-full pl-11 pr-14 py-2.5 rounded-full text-on-background bg-white border-none focus:ring-2 focus:ring-promo outline-none shadow-md text-sm font-body transition-all"
                  placeholder="Search for products, brands and more..."
                  type="text"
                  value={searchQuery}
                  onChange={(e) =>
                    setSearchQuery(e.target.value)
                  }
                  onKeyDown={handleGlobalSearch}
                />

                <button
                  onClick={() =>
                    searchQuery.trim() &&
                    navigate(
                      `/products?q=${encodeURIComponent(
                        searchQuery.trim()
                      )}`
                    )
                  }
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 w-9 h-9 bg-primary text-white rounded-full hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all flex items-center justify-center shadow-md"
                >
                  <span className="material-symbols-outlined text-lg">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-8 shrink-0">

              <Link
                className="flex flex-col items-center gap-0.5 group"
                to="/profile"
              >
                <span className="material-symbols-outlined text-white group-hover:scale-110 group-hover:text-promo transition-transform">
                  person
                </span>

                <span className="text-[11px] font-bold uppercase tracking-tighter">
                  Profile
                </span>
              </Link>

              <a
                className="flex flex-col items-center gap-0.5 group"
                href="#"
              >
                <span className="material-symbols-outlined text-white group-hover:scale-110 group-hover:text-promo transition-transform">
                  favorite
                </span>

                <span className="text-[11px] font-bold uppercase tracking-tighter">
                  Wishlist
                </span>
              </a>

              <Link
                className="flex flex-col items-center gap-0.5 group relative"
                to="/cart"
              >
                <div className="relative">
                  <span
                    className="material-symbols-outlined text-white group-hover:scale-110 group-hover:text-promo transition-transform"
                    style={{
                      fontVariationSettings: "'FILL' 1",
                    }}
                  >
                    shopping_cart
                  </span>

                  <span className="absolute -top-2 -right-2 bg-tertiary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-primary">
                    2
                  </span>
                </div>

                <span className="text-[11px] font-bold uppercase tracking-tighter">
                  Cart
                </span>
              </Link>

            </div>
          </div>
        </div>
      </header>

      {/* ======================================================
          MAIN
      ====================================================== */}
      <div className="pt-24 md:pt-[180px] pb-28 md:pb-12 flex flex-1 max-w-7xl mx-auto w-full px-4 md:px-8 gap-6 items-start">

        {/* ==================================================
            SIDE NAV
        ================================================== */}
        <aside className="hidden lg:flex flex-col w-64 shrink-0 sticky top-[176px]">

          <div className="bg-white p-4 rounded-t-xl shadow-sm border-b border-outline-variant flex items-center gap-4">

            <div className="w-12 h-12 rounded-full overflow-hidden bg-primary flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-white text-2xl">
                person
              </span>
            </div>

            <div className="overflow-hidden">
              <p className="text-[11px] text-outline font-medium">
                Hello,
              </p>

              <h2 className="font-headline font-bold text-sm text-on-surface truncate">
                Gunasekaran S
              </h2>
            </div>
          </div>

          <div className="bg-white rounded-b-xl shadow-sm flex flex-col py-2">

            {NAV_GROUPS.map((group, gi) => (
              <div
                key={gi}
                className={`px-4 py-2 ${
                  gi < NAV_GROUPS.length - 1
                    ? 'border-b border-outline-variant/30'
                    : ''
                }`}
              >

                {group.isGroupButton ? (
                  <button
                    onClick={() =>
                      navigate(group.route || '/orders')
                    }
                    className="flex items-center justify-between w-full py-2 transition-colors text-left text-[#2874F0] font-bold bg-blue-50 -mx-4 px-4 border-l-4 border-[#2874F0]"
                  >
                    <div className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-[#2874F0]">
                      <span className="material-symbols-outlined text-[18px]">
                        {group.icon}
                      </span>

                      {group.label}
                    </div>

                    <span className="material-symbols-outlined text-[16px]">
                      chevron_right
                    </span>
                  </button>
                ) : (
                  <>
                    <div className="flex items-center gap-3 py-2 text-xs font-black uppercase tracking-widest text-on-surface">
                      <span className="material-symbols-outlined text-[18px]">
                        {group.icon}
                      </span>

                      {group.label}
                    </div>

                    <nav className="flex flex-col ml-8 gap-0.5 mt-1">

                      {group.items.map((item, ii) => (
                        <button
                          key={ii}
                          onClick={() =>
                            navigate(item.route || '/profile')
                          }
                          className="flex justify-between items-center py-1.5 text-sm text-on-surface-variant hover:text-[#2874F0] transition-colors text-left w-full"
                        >
                          {item.label}

                          {item.badge && (
                            <span className="text-[#388E3C] font-bold text-xs">
                              {item.badge}
                            </span>
                          )}
                        </button>
                      ))}

                    </nav>
                  </>
                )}
              </div>
            ))}

            <div className="px-4 py-4">
              <button
                onClick={() => navigate('/login')}
                className="flex items-center gap-3 text-sm font-bold text-on-surface hover:text-primary transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">
                  power_settings_new
                </span>

                Logout
              </button>
            </div>

          </div>
        </aside>

        {/* ==================================================
            CONTENT
        ================================================== */}
        <main className="flex-1 flex flex-col gap-6 w-full min-w-0">

          <div className="bg-white rounded-xl border border-outline-variant/40 p-6 shadow-sm flex flex-col gap-5">

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">

              <h1 className="text-2xl font-headline font-bold text-on-surface">
                Your Orders
              </h1>

              <div className="flex items-center gap-2">

                <div className="relative flex-grow sm:flex-grow-0">

                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-lg">
                    search
                  </span>

                  <input
                    className="w-full sm:w-64 pl-9 pr-4 py-2 border border-outline-variant/40 rounded-lg bg-surface-container-low text-sm text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    placeholder="Search all orders"
                    type="text"
                    value={orderSearch}
                    onChange={(e) =>
                      setOrderSearch(e.target.value)
                    }
                  />
                </div>

                <button
                  className="bg-[#2E3038] hover:bg-[#191B23] text-white px-5 py-2 rounded-lg font-bold text-xs uppercase tracking-wider transition-colors shrink-0 shadow-sm"
                >
                  Search Orders
                </button>

              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-outline-variant/30 pt-4 gap-4">

              <div className="flex gap-6 text-sm font-medium">

                {[
                  'Orders',
                  'Buy Again',
                  'Not Yet Shipped',
                ].map((tab) => {

                  const isActive = activeTab === tab;

                  return (
                    <button
                      key={tab}
                      onClick={() =>
                        setActiveTab(tab)
                      }
                      className={`pb-1 transition-all relative ${
                        isActive
                          ? 'text-[#2874F0] font-bold border-b-2 border-[#2874F0]'
                          : 'text-outline hover:text-primary'
                      }`}
                    >
                      {tab}
                    </button>
                  );
                })}

              </div>

              <div className="flex items-center gap-2 text-sm text-on-surface-variant">

                <span className="font-bold text-on-surface">
                  {filteredOrders.length} orders
                </span>

                placed in

                <select
                  value={timeFilter}
                  onChange={(e) =>
                    setTimeFilter(e.target.value)
                  }
                  className="border border-outline-variant/40 rounded-lg bg-surface-container-low px-3 py-1.5 text-sm text-on-surface focus:border-primary outline-none cursor-pointer font-medium"
                >
                  <option value="past 6 months">
                    past 6 months
                  </option>

                  <option value="2026">
                    2026
                  </option>

                  <option value="2025">
                    2025
                  </option>

                  <option value="2024">
                    2024
                  </option>
                </select>

              </div>
            </div>
          </div>

          {/* ==================================================
              ORDER CARDS
          ================================================== */}
          <div className="flex flex-col gap-6">

            {loading && (
              <div className="bg-white rounded-xl border border-outline-variant p-12 text-center">

                <span className="material-symbols-outlined text-5xl mb-2 animate-spin">
                  progress_activity
                </span>

                <p className="font-bold text-base text-on-surface">
                  Loading your orders...
                </p>

              </div>
            )}

            {!loading && error && (
              <div className="bg-white rounded-xl border border-red-200 p-12 text-center">

                <span className="material-symbols-outlined text-5xl mb-2 text-red-500">
                  error
                </span>

                <p className="font-bold text-base text-red-600">
                  {error}
                </p>

                <button
                  onClick={() =>
                    window.location.reload()
                  }
                  className="mt-4 bg-primary text-white px-5 py-2 rounded-lg text-sm font-bold"
                >
                  Try Again
                </button>

              </div>
            )}

            {!loading &&
              !error &&
              filteredOrders.length === 0 && (
                <div className="bg-white rounded-xl border border-outline-variant p-12 text-center text-outline">

                  <span className="material-symbols-outlined text-5xl mb-2">
                    package_2
                  </span>

                  <p className="font-bold text-base text-on-surface">
                    No orders found
                  </p>

                  <p className="text-xs mt-1">
                    Try adjusting your search or tab selection.
                  </p>

                </div>
              )}

            {!loading &&
              !error &&
              filteredOrders.map((order) => {

                const status =
                  order.status?.toUpperCase();

                return (
                  <div
                    key={order.id}
                    className={`bg-white rounded-xl border border-outline-variant overflow-hidden shadow-sm ${
                      status === 'CANCELLED'
                        ? 'opacity-80'
                        : ''
                    }`}
                  >

                    {/* ORDER HEADER */}
                    <div className="bg-[#F2F3FE] px-6 py-4 border-b border-outline-variant flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">

                      <div className="flex flex-wrap gap-8 sm:gap-12">

                        <div>
                          <p className="text-on-surface uppercase font-extrabold mb-0.5 tracking-wider">
                            Order Placed
                          </p>

                          <p className="text-on-surface font-semibold">
                            {formatOrderDate(
                              order.orderDate
                            )}
                          </p>
                        </div>

                        <div>
                          <p className="text-on-surface uppercase font-extrabold mb-0.5 tracking-wider">
                            Total
                          </p>

                          <p className="text-on-surface font-bold">
                            ₹
                            {Number(
                              order.totalAmount || 0
                            ).toLocaleString('en-IN')}
                          </p>
                        </div>

                        <div>
                          <p className="text-on-surface uppercase font-extrabold mb-0.5 tracking-wider">
                            Ship To
                          </p>

                          <p className="text-[#2874F0] font-semibold">
                            {order.shippingFullName ||
                              'Delivery Address'}
                          </p>
                        </div>

                      </div>

                      <div className="sm:text-right flex flex-col sm:items-end gap-1">

                        <p className="text-on-surface uppercase font-extrabold tracking-wider">
                          Order # {order.id}
                        </p>

                        <div className="flex items-center gap-3">

                          <button
                            onClick={() =>
                              navigate(
                                `/orders/${order.id}`
                              )
                            }
                            className="text-primary hover:underline font-medium"
                          >
                            View order details
                          </button>

                          <span className="text-outline-variant">
                            |
                          </span>

                          <button
                            className="text-primary hover:underline font-medium"
                          >
                            Invoice
                          </button>

                        </div>
                      </div>
                    </div>

                    {/* ORDER BODY */}
                    <div className="p-6 flex flex-col md:flex-row gap-6">

                      <div className="flex-1">

                        {/* STATUS */}
                        <div className="mb-4">

                          <h3
                            className={`text-base font-headline font-bold mb-0.5 flex items-center gap-1.5 ${
                              status === 'DELIVERED'
                                ? 'text-on-surface'
                                : status === 'CANCELLED' ||
                                  status === 'RETURNED'
                                ? 'text-[#D32F2F]'
                                : 'text-[#388E3C]'
                            }`}
                          >

                            {(status === 'CANCELLED' ||
                              status === 'RETURNED') && (
                              <span className="material-symbols-outlined text-lg">
                                cancel
                              </span>
                            )}

                            {getStatusText(status)}

                          </h3>

                          <p className="text-on-surface-variant text-xs">
                            {getStatusDetail(status)}
                          </p>

                        </div>

                        {/* ITEMS */}
                        {order.items?.map((item) => (
                          <div
                            key={item.id}
                            className="flex gap-5 items-start"
                          >

                            <div className="w-24 h-24 bg-surface-container flex-shrink-0 rounded-lg border border-outline-variant/30 overflow-hidden">

                              {item.product?.imageUrl ? (
                                <img
                                  className={`w-full h-full object-cover ${
                                    status === 'CANCELLED'
                                      ? 'grayscale'
                                      : ''
                                  }`}
                                  src={item.product.imageUrl}
                                  alt={
                                    item.product?.name ||
                                    'Product'
                                  }
                                  onError={(e) => {
                                    e.currentTarget.style.display =
                                      'none';
                                  }}
                                />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center">
                                  <span className="material-symbols-outlined text-3xl text-outline">
                                    image
                                  </span>
                                </div>
                              )}

                            </div>

                            <div className="flex-1">

                              <p
                                className={`font-bold line-clamp-2 text-sm mb-1 ${
                                  status === 'CANCELLED'
                                    ? 'text-on-surface-variant line-through'
                                    : 'text-primary'
                                }`}
                              >
                                {item.product?.name ||
                                  'Product'}
                              </p>

                              <p className="text-on-surface-variant text-xs mb-1">
                                Quantity: {item.quantity}
                              </p>

                              <p className="text-on-surface font-bold text-sm">
                                ₹
                                {Number(
                                  item.price || 0
                                ).toLocaleString('en-IN')}
                              </p>

                              <div className="flex flex-wrap gap-2 mt-3">

                                {status === 'DELIVERED' && (
                                  <button
                                    className="bg-[#E0F2FE] hover:bg-[#BAE6FD] text-[#0284C7] border border-[#0284C7]/30 px-4 py-2 rounded-lg font-bold text-xs transition-colors flex items-center gap-1.5 shadow-sm"
                                  >
                                    <span className="material-symbols-outlined text-base">
                                      autorenew
                                    </span>

                                    Buy It Again
                                  </button>
                                )}

                                <button
                                  className="bg-white hover:bg-surface-container-low text-on-surface border border-outline-variant px-4 py-2 rounded-lg font-bold text-xs transition-colors shadow-sm"
                                >
                                  View your item
                                </button>

                              </div>
                            </div>
                          </div>
                        ))}

                      </div>

                      {/* ACTIONS */}
                      <div className="w-full md:w-56 flex flex-col gap-2 border-t md:border-t-0 md:border-l border-outline-variant pt-4 md:pt-0 md:pl-6 shrink-0">

                        {(status === 'DELIVERED' ||
                          status === 'PLACED' ||
                          status === 'PROCESSING' ||
                          status === 'SHIPPED') && (
                          <>
                            <button
                              onClick={() =>
                                navigate(
                                  `/track/${order.id}`
                                )
                              }
                              className={`w-full px-4 py-2 rounded-lg font-bold text-xs transition-colors shadow-sm text-center ${
                                status === 'DELIVERED'
                                  ? 'bg-white hover:bg-surface-container-low border border-outline-variant text-on-surface'
                                  : 'bg-[#FD661D] hover:bg-orange-600 text-white'
                              }`}
                            >
                              Track package
                            </button>
                          </>
                        )}

                        {status === 'DELIVERED' && (
                          <>
                            <button className="w-full bg-white hover:bg-surface-container-low border border-outline-variant px-4 py-2 rounded-lg text-xs font-semibold text-on-surface shadow-sm">
                              Return or replace items
                            </button>

                            <button className="w-full bg-white hover:bg-surface-container-low border border-outline-variant px-4 py-2 rounded-lg text-xs font-semibold text-on-surface shadow-sm">
                              Share receipt
                            </button>

                            <button className="w-full bg-white hover:bg-surface-container-low border border-outline-variant px-4 py-2 rounded-lg text-xs font-semibold text-on-surface shadow-sm mt-auto">
                              Write a product review
                            </button>
                          </>
                        )}

                        {(status === 'PLACED' ||
                          status === 'PROCESSING' ||
                          status === 'SHIPPED') && (
                          <>
                            <button className="w-full bg-white hover:bg-surface-container-low border border-outline-variant px-4 py-2 rounded-lg text-xs font-semibold text-on-surface shadow-sm">
                              Cancel items
                            </button>

                            <button className="w-full bg-white hover:bg-surface-container-low border border-outline-variant px-4 py-2 rounded-lg text-xs font-semibold text-on-surface shadow-sm">
                              Change delivery address
                            </button>
                          </>
                        )}

                        {status === 'CANCELLED' && (
                          <div className="flex items-center justify-center h-full py-4 text-center">
                            <p className="text-xs text-on-surface-variant">
                              Order was cancelled by the buyer.
                            </p>
                          </div>
                        )}

                        {status === 'RETURNED' && (
                          <div className="flex items-center justify-center h-full py-4 text-center">
                            <p className="text-xs text-on-surface-variant">
                              This order has been returned.
                            </p>
                          </div>
                        )}

                      </div>
                    </div>
                  </div>
                );
              })}

          </div>
        </main>
      </div>

      <BottomNav />

      {/* FOOTER */}
      <footer className="hidden md:block bg-[#172337] text-gray-300 w-full mt-auto">

        <div className="max-w-7xl mx-auto w-full px-4 md:px-8 py-10">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-gray-700/50 pb-8">

            <div className="col-span-2 md:col-span-1 flex flex-col gap-2">

              <Link
                className="text-xl font-bold text-white flex items-center gap-2"
                to="/home"
              >
                <span className="material-symbols-outlined">
                  hub
                </span>

                Amihive Ecom
              </Link>

              <p className="text-xs text-gray-400 mt-1">
                Your trusted destination for premium workspace gear and professional equipment.
              </p>

            </div>

            <div className="flex flex-col gap-2">

              <h4 className="font-bold text-white text-xs uppercase tracking-wider">
                Get to Know Us
              </h4>

              {[
                'About Us',
                'Careers',
                'Corporate Information',
              ].map((l) => (
                <a
                  key={l}
                  className="text-xs text-gray-400 hover:text-white"
                  href="#"
                >
                  {l}
                </a>
              ))}

            </div>

            <div className="flex flex-col gap-2">

              <h4 className="font-bold text-white text-xs uppercase tracking-wider">
                Let Us Help You
              </h4>

              {[
                'Contact Us',
                'Returns & Refunds',
                'Help Centre',
              ].map((l) => (
                <a
                  key={l}
                  className="text-xs text-gray-400 hover:text-white"
                  href="#"
                >
                  {l}
                </a>
              ))}

            </div>

            <div className="flex flex-col gap-2">

              <h4 className="font-bold text-white text-xs uppercase tracking-wider">
                Policies
              </h4>

              {[
                'Privacy Policy',
                'Terms of Use',
              ].map((l) => (
                <a
                  key={l}
                  className="text-xs text-gray-400 hover:text-white"
                  href="#"
                >
                  {l}
                </a>
              ))}

            </div>

          </div>

          <div className="flex justify-between items-center text-xs text-gray-500 pt-8">
            <span>
              © 2024 Amihive Ecom. All rights reserved.
            </span>
          </div>

        </div>
      </footer>
    </div>
  );
}