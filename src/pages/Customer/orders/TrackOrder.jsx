import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import BottomNav from '../../../components/Customer/BottomNav';

export default function TrackOrder() {
  const navigate = useNavigate();
  const { orderId } = useParams();

  const [searchQuery, setSearchQuery] = useState('');

  const [headerVisible, setHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // ============================================================
  // FETCH TRACKING INFORMATION
  // ============================================================
  useEffect(() => {
    const fetchTracking = async () => {
      try {
        setLoading(true);
        setError('');

        if (!orderId) {
          setError('Order ID is missing.');
          return;
        }

        const response = await fetch(
          `http://127.0.0.1:8080/api/orders/${orderId}/tracking`,
          {
            method: 'GET',
            credentials: 'include',
          }
        );

        if (response.status === 401) {
          navigate('/login');
          return;
        }

        if (response.status === 404) {
          setError('Order not found.');
          return;
        }

        if (!response.ok) {
          throw new Error('Failed to fetch tracking information');
        }

        const data = await response.json();

        console.log(
          'Tracking information received from backend:',
          data
        );

        setOrder(data);
      } catch (err) {
        console.error(
          'Error fetching tracking information:',
          err
        );

        setError(
          'Unable to load tracking information. Please try again.'
        );
      } finally {
        setLoading(false);
      }
    };

    fetchTracking();
  }, [orderId, navigate]);

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
        `/products?q=${encodeURIComponent(
          searchQuery.trim()
        )}`
      );
    }
  };

  // ============================================================
  // FORMAT DATE
  // ============================================================
  const formatDate = (date) => {
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
  // STATUS
  // ============================================================
  const getStatusText = (status) => {
    switch (status?.toUpperCase()) {
      case 'DELIVERED':
        return 'Delivered';

      case 'SHIPPED':
        return 'Shipped';

      case 'PROCESSING':
        return 'Processing';

      case 'PLACED':
        return 'Order Placed';

      case 'RETURNED':
        return 'Returned';

      case 'CANCELLED':
        return 'Cancelled';

      default:
        return status || 'Order Status';
    }
  };

  // ============================================================
  // CREATE TRACKING STEPS FROM BACKEND STATUS
  // ============================================================
  const getTrackingSteps = (status) => {
    const currentStatus =
      status?.toUpperCase();

    const steps = [
      {
        label: 'Order Placed',
        desc: 'Your order has been placed successfully.',
        icon: 'receipt_long',
        statuses: [
          'PLACED',
          'PROCESSING',
          'SHIPPED',
          'DELIVERED',
        ],
      },
      {
        label: 'Packed',
        desc: 'Item packed at seller warehouse.',
        icon: 'inventory_2',
        statuses: [
          'PROCESSING',
          'SHIPPED',
          'DELIVERED',
        ],
      },
      {
        label: 'Shipped',
        desc: 'Handed over to courier partner.',
        icon: 'local_shipping',
        statuses: [
          'SHIPPED',
          'DELIVERED',
        ],
      },
      {
        label: 'Out for Delivery',
        desc: 'Courier partner is on the way.',
        icon: 'delivery_dining',
        statuses: [
          'OUT_FOR_DELIVERY',
          'DELIVERED',
        ],
      },
      {
        label: 'Delivered',
        desc: 'Package handed to customer.',
        icon: 'package_2',
        statuses: [
          'DELIVERED',
        ],
      },
    ];

    return steps.map((step) => ({
      ...step,
      done: step.statuses.includes(currentStatus),
    }));
  };

  // ============================================================
  // CALCULATE CURRENT TRACKING STEP
  // ============================================================
  const getCurrentStep = (status) => {
    switch (status?.toUpperCase()) {
      case 'PLACED':
        return 1;

      case 'PROCESSING':
        return 2;

      case 'SHIPPED':
        return 3;

      case 'OUT_FOR_DELIVERY':
        return 4;

      case 'DELIVERED':
        return 5;

      default:
        return 1;
    }
  };

  // ============================================================
  // LOADING SCREEN
  // ============================================================
  if (loading) {
    return (
      <div className="min-h-screen bg-[#F1F3F6] flex items-center justify-center">

        <div className="bg-white rounded-xl shadow-sm border border-outline-variant p-12 text-center">

          <span className="material-symbols-outlined text-5xl animate-spin mb-3">
            progress_activity
          </span>

          <p className="font-bold text-on-surface">
            Loading tracking information...
          </p>

        </div>

      </div>
    );
  }

  // ============================================================
  // ERROR SCREEN
  // ============================================================
  if (error || !order) {
    return (
      <div className="min-h-screen bg-[#F1F3F6] flex items-center justify-center px-4">

        <div className="bg-white rounded-xl shadow-sm border border-red-200 p-10 text-center max-w-md w-full">

          <span className="material-symbols-outlined text-5xl text-red-500 mb-3">
            error
          </span>

          <h2 className="text-lg font-bold text-on-surface">
            Unable to load order
          </h2>

          <p className="text-sm text-on-surface-variant mt-2">
            {error || 'Tracking information is unavailable.'}
          </p>

          <div className="flex justify-center gap-3 mt-6">

            <button
              onClick={() => navigate('/orders')}
              className="bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-bold"
            >
              Back to Orders
            </button>

            <button
              onClick={() => window.location.reload()}
              className="bg-white border border-outline-variant px-5 py-2.5 rounded-lg text-sm font-bold"
            >
              Try Again
            </button>

          </div>

        </div>

      </div>
    );
  }

  // ============================================================
  // BACKEND DATA
  // ============================================================

  const status =
    order.status?.toUpperCase();

  const trackingSteps =
    getTrackingSteps(status);

  const currentStep =
    getCurrentStep(status);

  const items =
    order.items ||
    order.orderItems ||
    [];

  // These names support the likely TrackingResponse fields.
  const trackingId =
    order.trackingId ||
    order.trackingNumber ||
    order.awbNumber ||
    'Not assigned';

  const courier =
    order.courier ||
    order.courierName ||
    order.deliveryPartner ||
    'Not assigned';

  const shipTo =
    order.shippingFullName ||
    order.fullName ||
    order.shipTo ||
    'Customer';

  const total =
    Number(
      order.totalAmount ||
      order.total ||
      0
    );

  const orderDate =
    order.orderDate ||
    order.date ||
    order.createdAt;

  const address =
    order.address ||
    order.shippingAddress ||
    {};

  // ============================================================
  // RENDER
  // ============================================================
  return (
    <div className="bg-[#F1F3F6] text-on-background min-h-screen flex flex-col font-sans antialiased">

      {/* ======================================================
          HEADER
      ====================================================== */}
      <header
        className={`hidden md:block bg-gradient-to-r from-primary via-[#1d4ed8] to-[#1e40af] text-on-primary w-full z-50 fixed top-0 left-0 right-0 border-b border-white/10 shadow-lg transition-transform duration-300 ease-in-out ${
          headerVisible
            ? 'translate-y-0'
            : '-translate-y-full'
        }`}
      >

        <div className="flex flex-col w-full max-w-7xl mx-auto">

          <div className="flex justify-between items-center px-4 py-2 text-[11px] font-medium border-b border-white/10 opacity-80">

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

              <div className="bg-white text-primary p-1.5 rounded-lg shadow-md">

                <span className="material-symbols-outlined text-2xl block">
                  hub
                </span>

              </div>

              <span className="font-headline">
                Amihive
              </span>

            </Link>

            <div className="flex-grow max-w-2xl">

              <div className="relative w-full">

                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">
                  search
                </span>

                <input
                  className="w-full pl-11 pr-14 py-2.5 rounded-full text-on-background bg-white border-none focus:ring-2 focus:ring-promo outline-none shadow-md text-sm"
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
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 w-9 h-9 bg-primary text-white rounded-full flex items-center justify-center shadow-md"
                >
                  <span className="material-symbols-outlined text-lg">
                    arrow_forward
                  </span>
                </button>

              </div>

            </div>

            <div className="hidden md:flex items-center gap-8">

              <Link
                className="flex flex-col items-center gap-0.5"
                to="/profile"
              >

                <span className="material-symbols-outlined text-white">
                  person
                </span>

                <span className="text-[11px] font-bold uppercase">
                  Profile
                </span>

              </Link>

              <Link
                className="flex flex-col items-center gap-0.5 relative"
                to="/cart"
              >

                <span className="material-symbols-outlined text-white">
                  shopping_cart
                </span>

                <span className="text-[11px] font-bold uppercase">
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
      <main className="pt-4 md:pt-[180px] pb-28 md:pb-12 flex flex-1 max-w-7xl mx-auto w-full px-4 md:px-8 gap-6 items-start flex-col lg:flex-row">

        {/* ==================================================
            LEFT
        ================================================== */}
        <div className="w-full flex-1 flex flex-col gap-5">

          {/* BACK */}
          <div>

            <button
              onClick={() => navigate('/orders')}
              className="inline-flex items-center gap-2 text-xs font-bold text-primary bg-white px-3 py-1.5 rounded-lg shadow-sm border border-outline-variant/30 hover:bg-surface-container-low"
            >

              <span className="material-symbols-outlined text-sm">
                arrow_back
              </span>

              Back to Orders

            </button>

          </div>

          {/* STATUS CARD */}
          <div className="bg-white rounded-xl shadow-sm border border-outline-variant/30 overflow-hidden">

            <div className="p-5 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-gradient-to-r from-[#FD661D] to-[#FB641B]">

              <div>

                <p className="text-[11px] font-bold uppercase tracking-widest text-white/80">
                  Order #{order.id}
                </p>

                <h1 className="text-xl md:text-2xl font-headline font-bold text-white mt-1">
                  {getStatusText(status)}
                </h1>

              </div>

              <div className="flex items-center gap-3">

                <div className="bg-white/15 backdrop-blur-sm rounded-xl px-4 py-3 text-white">

                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/70">
                    Tracking ID
                  </p>

                  <p className="text-sm font-bold mt-0.5">
                    {trackingId}
                  </p>

                </div>

                <div className="bg-white/15 backdrop-blur-sm rounded-xl px-4 py-3 text-white">

                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/70">
                    Courier
                  </p>

                  <p className="text-sm font-bold mt-0.5">
                    {courier}
                  </p>

                </div>

              </div>

            </div>

            {/* TRACKING TIMELINE */}
            <div className="p-5 md:p-8">

              <div className="flex flex-col md:flex-row md:justify-between">

                {trackingSteps.map((step, i) => {

                  const isDone =
                    i < currentStep;

                  const isCurrent =
                    i === currentStep - 1;

                  const isFuture =
                    i >= currentStep;

                  return (
                    <React.Fragment key={step.label}>

                      <div className="flex md:flex-col items-center gap-3 md:gap-2 md:flex-1 md:text-center">

                        <div
                          className={`relative flex items-center justify-center w-10 h-10 rounded-full shrink-0 ${
                            isDone || isCurrent
                              ? 'bg-[#388E3C] text-white'
                              : 'bg-surface-container-low text-outline'
                          }`}
                        >

                          <span className="material-symbols-outlined text-[20px]">

                            {isDone || isCurrent
                              ? 'check'
                              : step.icon}

                          </span>

                          {i < trackingSteps.length - 1 && (
                            <span
                              className={`hidden md:block absolute left-10 top-1/2 -translate-y-1/2 w-[calc(100%-3rem)] h-1 rounded-full ${
                                i < currentStep
                                  ? 'bg-[#388E3C]'
                                  : 'bg-outline-variant'
                              }`}
                            />
                          )}

                        </div>

                        <div className="md:mt-3 text-left md:text-center min-w-0">

                          <p
                            className={`text-xs md:text-sm font-bold ${
                              isDone || isCurrent
                                ? 'text-on-surface'
                                : 'text-outline'
                            }`}
                          >
                            {step.label}
                          </p>

                          <p
                            className={`text-[11px] hidden md:block mt-1 ${
                              isFuture
                                ? 'text-outline'
                                : 'text-on-surface-variant'
                            }`}
                          >
                            {step.desc}
                          </p>

                        </div>

                      </div>

                      {i < trackingSteps.length - 1 && (
                        <div className="md:hidden ml-5 w-0.5 min-h-6 bg-outline-variant" />
                      )}

                    </React.Fragment>
                  );
                })}

              </div>

              {/* MOBILE DESCRIPTIONS */}
              <div className="mt-5 border-t border-outline-variant/20 pt-4 md:hidden">

                {trackingSteps.map((step, i) => (

                  <div
                    key={step.label}
                    className={`flex items-start gap-2 py-1.5 ${
                      i >= currentStep
                        ? 'opacity-50'
                        : ''
                    }`}
                  >

                    <span className="material-symbols-outlined text-[16px] text-[#388E3C] mt-0.5">
                      {i < currentStep
                        ? 'check_circle'
                        : step.icon}
                    </span>

                    <div>

                      <p className="text-xs font-bold text-on-surface">
                        {step.label}
                      </p>

                      <p className="text-[11px] text-on-surface-variant">
                        {step.desc}
                      </p>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

          {/* ITEMS */}
          <div className="bg-white rounded-xl shadow-sm border border-outline-variant/30 overflow-hidden">

            <div className="p-4 md:p-5 border-b border-outline-variant/20 flex items-center justify-between">

              <h2 className="text-sm md:text-base font-headline font-bold text-on-surface">
                Items in this order
              </h2>

              <Link
                to={`/orders/${order.id}`}
                className="text-xs font-bold text-primary hover:underline"
              >
                View order details
              </Link>

            </div>

            {items.length === 0 ? (

              <div className="p-8 text-center text-sm text-outline">
                No item information available.
              </div>

            ) : (

              items.map((item) => {

                const product =
                  item.product || {};

                const itemName =
                  product.name ||
                  item.name ||
                  item.title ||
                  'Product';

                const itemImage =
                  product.imageUrl ||
                  item.image ||
                  '';

                const quantity =
                  item.quantity ||
                  item.qty ||
                  1;

                const price =
                  Number(
                    item.price ||
                    product.price ||
                    0
                  );

                return (
                  <div
                    key={item.id}
                    className="p-4 md:p-5 flex flex-col sm:flex-row gap-4"
                  >

                    <div className="w-20 h-20 md:w-24 md:h-24 bg-surface-container-low rounded-lg p-1.5 border border-outline-variant/20 shrink-0 overflow-hidden">

                      {itemImage ? (

                        <img
                          src={itemImage}
                          alt={itemName}
                          className="w-full h-full object-contain"
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

                    <div className="flex-grow min-w-0">

                      <h3 className="text-sm font-semibold text-on-surface leading-snug">
                        {itemName}
                      </h3>

                      <p className="text-xs text-on-surface-variant mt-1.5">
                        Qty: {quantity}
                      </p>

                      <div className="flex items-center gap-2 mt-2">

                        <span className="text-sm font-bold text-on-surface">
                          ₹
                          {price.toLocaleString(
                            'en-IN'
                          )}
                        </span>

                        <span className="text-[11px] font-bold text-[#388E3C] bg-green-50 px-2 py-0.5 rounded border border-green-100">
                          Need help?
                        </span>

                      </div>

                      <div className="flex flex-wrap gap-2 mt-3">

                        <button className="bg-white hover:bg-surface-container-low border border-outline-variant px-4 py-2 rounded-lg text-xs font-semibold text-on-surface shadow-sm">
                          Return or replace items
                        </button>

                        <button className="bg-white hover:bg-surface-container-low border border-outline-variant px-4 py-2 rounded-lg text-xs font-semibold text-on-surface shadow-sm">
                          Share receipt
                        </button>

                      </div>

                    </div>

                  </div>
                );
              })

            )}

          </div>

        </div>

        {/* ==================================================
            RIGHT COLUMN
        ================================================== */}
        <div className="w-full lg:w-80 flex flex-col gap-5 shrink-0">

          {/* DELIVERY ADDRESS */}
          <div className="bg-white rounded-xl shadow-sm border border-outline-variant/30 overflow-hidden">

            <div className="p-4 border-b border-outline-variant/20 flex items-center gap-2">

              <span className="material-symbols-outlined text-primary text-[20px]">
                location_on
              </span>

              <h3 className="text-sm font-headline font-bold text-on-surface">
                Delivery Address
              </h3>

            </div>

            <div className="p-4">

              <p className="text-sm font-bold text-on-surface">
                {shipTo}
              </p>

              {address.line1 && (
                <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                  {address.line1}
                </p>
              )}

              {address.line2 && (
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  {address.line2}
                </p>
              )}

              {address.city && (
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  {address.city}
                  {address.state
                    ? `, ${address.state}`
                    : ''}
                  {address.pincode
                    ? ` - ${address.pincode}`
                    : ''}
                </p>
              )}

              {address.phone && (
                <p className="text-xs text-on-surface-variant mt-1">
                  {address.phone}
                </p>
              )}

              <button className="w-full mt-3 bg-white hover:bg-surface-container-low border border-outline-variant px-4 py-2 rounded-lg text-xs font-semibold text-on-surface shadow-sm">
                Change delivery address
              </button>

            </div>

          </div>

          {/* SUMMARY */}
          <div className="bg-white rounded-xl shadow-sm border border-outline-variant/30 overflow-hidden">

            <div className="p-4 border-b border-outline-variant/20">

              <h3 className="text-sm font-headline font-bold text-on-surface">
                Order Summary
              </h3>

            </div>

            <div className="p-4 flex flex-col gap-2.5 text-sm">

              <div className="flex justify-between">

                <span className="text-on-surface-variant">
                  Order Date
                </span>

                <span className="font-bold text-on-surface">
                  {formatDate(orderDate)}
                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-on-surface-variant">
                  Items
                </span>

                <span className="font-bold text-on-surface">
                  {items.length}
                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-on-surface-variant">
                  Order Total
                </span>

                <span className="font-bold text-on-surface">
                  ₹{total.toLocaleString('en-IN')}
                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-on-surface-variant">
                  Payment
                </span>

                <span className="font-bold text-[#388E3C]">
                  Paid on delivery
                </span>

              </div>

              <div className="border-t border-outline-variant/20 pt-2.5 flex justify-between">

                <span className="font-bold text-on-surface">
                  Total
                </span>

                <span className="font-bold text-[#2874F0]">
                  ₹{total.toLocaleString('en-IN')}
                </span>

              </div>

            </div>

          </div>

          {/* HELP */}
          <div className="bg-white rounded-xl shadow-sm border border-outline-variant/30 overflow-hidden p-4">

            <h3 className="text-sm font-headline font-bold text-on-surface mb-1">
              Need help?
            </h3>

            <p className="text-xs text-on-surface-variant mb-3">
              Contact our support team for any delivery queries.
            </p>

            <div className="flex flex-col gap-2">

              <button className="w-full bg-[#2874F0] hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-2">

                <span className="material-symbols-outlined text-[16px]">
                  headset_mic
                </span>

                Chat with us

              </button>

              <button className="w-full bg-white hover:bg-surface-container-low border border-outline-variant px-4 py-2.5 rounded-lg text-xs font-semibold text-on-surface">
                Call us on 1800 419 1415
              </button>

            </div>

          </div>

        </div>

      </main>

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

                <span className="material-symbols-outlined text-white">
                  hub
                </span>

                Amihive Ecom

              </Link>

              <p className="text-xs text-gray-400 mt-1">
                Your trusted destination for premium workspace gear and professional equipment.
              </p>

            </div>

            <div className="flex flex-col gap-2">

              <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-1">
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

              <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-1">
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

              <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-1">
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