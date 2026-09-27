import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BottomNav from '../../../components/Customer/BottomNav';

const API_BASE = 'http://127.0.0.1:8080/api';

const MOCK_ORDERS = [
  {
    id: 'OD48291039482',
    date: '12 Aug 2026',
    status: 'Delivered',
    statusColor: 'text-[#388E3C] bg-green-50 border-green-200',
    total: 28999,
    items: [
      {
        name: 'Ergonomic Office Setup Bundle',
        variant: 'Color: Midnight Black | Size: Standard Desk',
        price: 28999,
        image:
          'https://lh3.googleusercontent.com/aida/AP1WRLuw6P6iMcLTKYhbLjv4Qr59v0I9S3Q4pdYQH4i-Qj9mMs_8sp00kbShHTHmN2UtBMn6TvKV_IfbW3QMUHmh0rGLqukQoLjhoLhCqGkNMnWht6Tw-cU_3vwauyF4VXXVsPOrOFXiYQtOUbyfzc2H92E7sY0uY44W3aXnpj61wFkhHVJ2LjJW73TGOg4GC9s65M2zl6vUapmqbI0QdBewvnUVHCE0xUpMT-nFGtwXT8pVDiZfx8jk84K1ag',
      },
    ],
  },
  {
    id: 'OD19283746501',
    date: '04 Aug 2026',
    status: 'Delivered',
    statusColor: 'text-[#388E3C] bg-green-50 border-green-200',
    total: 10999,
    items: [
      {
        name: 'Premium Audio Set — Studio Headphones & Smart Speaker',
        variant: 'Color: Titanium | Style: Wireless',
        price: 10999,
        image:
          'https://lh3.googleusercontent.com/aida/AP1WRLusPjF5stjY7w0zgfx53eItR5r0jNfKTUQlbK2dW929kJvxSTgz-3jqYkppdFSPAcvNaZQxdHu3fAXLWRBEQU7UEqdcJx3MJbI63HLo1k1EcyDrUajR0agBjnE1NLKEuhOgsks9okfLPjDggiLKrakTjxqsF2G1vuPqob3b0fgyLrnEdqU8K_MFSJ_GvBQP2u6jFhVR8PSYHsXh1JIV8DAzfIzXJEsN9LvRwqgLSit1nb20dKbANbggcps',
      },
    ],
  },
];

const FOOTER_COLS = [
  {
    title: 'About',
    links: ['Contact Us', 'About Us', 'Careers', 'Corporate Information'],
  },
  {
    title: 'Help',
    links: ['Payments', 'Shipping', 'Cancellation & Returns', 'FAQ'],
  },
  {
    title: 'Consumer Policy',
    links: ['Privacy Policy', 'Terms Of Use', 'Security', 'Sitemap'],
  },
];

const EMPTY_ADDRESS = {
  fullName: '',
  mobile: '',
  address: '',
  city: '',
  state: '',
  pincode: '',
};

export default function Profile() {
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState('');
  const [headerVisible, setHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [activeTab, setActiveTab] = useState('profile');

  // Logged-in user
  const [userId, setUserId] = useState(null);

  // Profile information
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('male');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const [birthday, setBirthday] = useState('');

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // Profile editing
  const [editing, setEditing] = useState({
    name: false,
    email: false,
    mobile: false,
    address: false,
    city: false,
    pincode: false,
  });

  // =========================================================
  // ADDRESS STATES
  // =========================================================

  const [addresses, setAddresses] = useState([]);
  const [addressLoading, setAddressLoading] = useState(false);

  const [showAddressForm, setShowAddressForm] = useState(false);

  const [editingAddressId, setEditingAddressId] = useState(null);

  const [addressForm, setAddressForm] = useState(EMPTY_ADDRESS);

  const [addressSaving, setAddressSaving] = useState(false);

  // =========================================================
  // LOAD PROFILE
  // =========================================================

  useEffect(() => {
    fetch(`${API_BASE}/users/profile`, {
      credentials: 'include',
    })
      .then(res => {
        if (!res.ok) {
          throw new Error('Not logged in');
        }

        return res.json();
      })
      .then(data => {
        console.log('Profile data:', data);

        setUserId(data.id);

        const nameParts = (data.name || '').trim().split(/\s+/);

        setFirstName(nameParts[0] || '');
        setLastName(nameParts.slice(1).join(' ') || '');

        setEmail(data.email || '');
        setMobile(data.mobile || '');

        setAddress(data.address || '');
        setCity(data.city || '');
        setPincode(data.pincode || '');

        if (data.gender) {
          setGender(data.gender.toLowerCase());
        }

        if (data.birthday) {
          setBirthday(data.birthday);
        }

        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading profile:', error);
        setLoading(false);
      });
  }, []);

  // =========================================================
  // LOAD ADDRESSES
  // =========================================================

  useEffect(() => {
    if (!userId) {
      return;
    }

    fetchAddresses();
  }, [userId]);

  const fetchAddresses = async () => {
    try {
      setAddressLoading(true);

      const response = await fetch(
        `${API_BASE}/addresses/user/${userId}`,
        {
          method: 'GET',
          credentials: 'include',
        }
      );

      if (!response.ok) {
        throw new Error('Failed to load addresses');
      }

      const data = await response.json();

      console.log('Addresses:', data);

      setAddresses(data);
    } catch (error) {
      console.error('Error loading addresses:', error);
    } finally {
      setAddressLoading(false);
    }
  };

  // =========================================================
  // HEADER SCROLL
  // =========================================================

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setHeaderVisible(
        currentScrollY < lastScrollY || currentScrollY < 80
      );

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  // =========================================================
  // SEARCH
  // =========================================================

  const handleSearch = e => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      navigate(
        `/products?q=${encodeURIComponent(searchQuery.trim())}`
      );
    }
  };

  // =========================================================
  // PROFILE SAVE
  // =========================================================

  const saveProfile = async field => {
    try {
      setSaving(true);

      const fullName = `${firstName} ${lastName}`.trim();

      const response = await fetch(
        `${API_BASE}/users/profile`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify({
            name: fullName,
            email: email,
            mobile: mobile,
            address: address,
            city: city,
            pincode: pincode,
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to update profile');
      }

      const updatedUser = await response.json();

      const nameParts = (updatedUser.name || '')
        .trim()
        .split(/\s+/);

      setFirstName(nameParts[0] || '');
      setLastName(nameParts.slice(1).join(' ') || '');

      setEmail(updatedUser.email || '');
      setMobile(updatedUser.mobile || '');
      setAddress(updatedUser.address || '');
      setCity(updatedUser.city || '');
      setPincode(updatedUser.pincode || '');

      setEditing(prev => ({
        ...prev,
        [field]: false,
      }));
    } catch (error) {
      console.error('Error saving profile:', error);

      alert(
        'Failed to update profile. Please try again.'
      );
    } finally {
      setSaving(false);
    }
  };

  const toggleEdit = field => {
    if (editing[field]) {
      saveProfile(field);
    } else {
      setEditing(prev => ({
        ...prev,
        [field]: true,
      }));
    }
  };

  // =========================================================
  // ADDRESS FORM
  // =========================================================

  const handleAddressChange = e => {
    const { name, value } = e.target;

    setAddressForm(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const openAddAddressForm = () => {
    setEditingAddressId(null);

    setAddressForm({
      fullName: '',
      mobile: '',
      address: '',
      city: '',
      state: '',
      pincode: '',
    });

    setShowAddressForm(true);
  };

  const openEditAddressForm = selectedAddress => {
    setEditingAddressId(selectedAddress.id);

    setAddressForm({
      fullName: selectedAddress.fullName || '',
      mobile: selectedAddress.mobile || '',
      address: selectedAddress.address || '',
      city: selectedAddress.city || '',
      state: selectedAddress.state || '',
      pincode: selectedAddress.pincode || '',
    });

    setShowAddressForm(true);
  };

  const closeAddressForm = () => {
    setShowAddressForm(false);
    setEditingAddressId(null);

    setAddressForm(EMPTY_ADDRESS);
  };

  // =========================================================
  // SAVE ADDRESS
  // =========================================================

  const saveAddress = async e => {
    e.preventDefault();

    if (!userId) {
      alert('User session not found. Please login again.');
      return;
    }

    try {
      setAddressSaving(true);

      let url = '';
      let method = '';

      if (editingAddressId) {
        url = `${API_BASE}/addresses/${editingAddressId}`;
        method = 'PUT';
      } else {
        url = `${API_BASE}/addresses/user/${userId}`;
        method = 'POST';
      }

      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(addressForm),
      });

      if (!response.ok) {
        const errorText = await response.text();

        console.error(
          'Address save failed:',
          errorText
        );

        throw new Error('Failed to save address');
      }

      const savedAddress = await response.json();

      console.log('Address saved:', savedAddress);

      if (editingAddressId) {
        setAddresses(prev =>
          prev.map(item =>
            item.id === editingAddressId
              ? savedAddress
              : item
          )
        );
      } else {
        setAddresses(prev => [
          ...prev,
          savedAddress,
        ]);
      }

      closeAddressForm();

      alert(
        editingAddressId
          ? 'Address updated successfully.'
          : 'Address added successfully.'
      );
    } catch (error) {
      console.error('Error saving address:', error);

      alert(
        'Failed to save address. Please try again.'
      );
    } finally {
      setAddressSaving(false);
    }
  };

  // =========================================================
  // DELETE ADDRESS
  // =========================================================

  const deleteAddress = async addressId => {
    const confirmed = window.confirm(
      'Are you sure you want to delete this address?'
    );

    if (!confirmed) {
      return;
    }

    try {
      const response = await fetch(
        `${API_BASE}/addresses/${addressId}`,
        {
          method: 'DELETE',
          credentials: 'include',
        }
      );

      if (!response.ok) {
        throw new Error('Failed to delete address');
      }

      setAddresses(prev =>
        prev.filter(address => address.id !== addressId)
      );

      alert('Address deleted successfully.');
    } catch (error) {
      console.error('Error deleting address:', error);

      alert(
        'Failed to delete address. Please try again.'
      );
    }
  };

  // =========================================================
  // NAVIGATION
  // =========================================================

  const navGroups = [
    {
      label: 'Account Settings',
      icon: 'person',
      items: [
        {
          id: 'profile',
          label: 'Profile Information',
        },
        {
          id: 'addresses',
          label: 'Manage Addresses',
        },
        {
          id: 'pan',
          label: 'PAN Card Information',
        },
      ],
    },

    {
      label: 'My Orders',
      icon: 'shopping_bag',
      id: 'orders',
      isGroupButton: true,
    },

    {
      label: 'Payments',
      icon: 'account_balance_wallet',
      items: [
        {
          id: 'gift_cards',
          label: 'Gift Cards',
          badge: '₹0',
        },
        {
          id: 'saved_upi',
          label: 'Saved UPI',
        },
        {
          id: 'saved_cards',
          label: 'Saved Cards',
        },
      ],
    },

    {
      label: 'My Stuff',
      icon: 'folder',
      items: [
        {
          id: 'coupons',
          label: 'My Coupons',
        },
        {
          id: 'reviews',
          label: 'My Reviews & Ratings',
        },
        {
          id: 'notifications',
          label: 'All Notifications',
        },
        {
          id: 'wishlist',
          label: 'My Wishlist',
        },
      ],
    },
  ];

  const quickActions = [
    {
      id: 'orders',
      icon: 'local_shipping',
      title: 'My Orders',
      desc: 'Track, return, or buy things again',
    },
    {
      id: 'profile',
      icon: 'lock',
      title: 'Login & Security',
      desc: 'Edit login, name, and mobile number',
    },
    {
      id: 'addresses',
      icon: 'location_on',
      title: 'Your Addresses',
      desc: 'Edit addresses for orders and gifts',
    },
    {
      id: 'payments',
      icon: 'payments',
      title: 'Payment Options',
      desc: 'Edit or add payment methods',
    },
  ];

  // =========================================================
  // LOADING
  // =========================================================

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <span className="material-symbols-outlined text-4xl animate-spin">
            progress_activity
          </span>

          <p className="mt-3 text-sm">
            Loading profile...
          </p>
        </div>
      </div>
    );
  }

  // =========================================================
  // UI
  // =========================================================

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-sans antialiased">

      {/* =====================================================
          HEADER
      ====================================================== */}

      <header
        className={`bg-primary text-on-primary w-full z-50 fixed top-0 left-0 right-0 border-b border-white/10 shadow-lg transition-transform duration-300 ease-in-out ${
          headerVisible
            ? 'translate-y-0'
            : '-translate-y-full'
        }`}
      >
        <div className="flex flex-col w-full max-w-7xl mx-auto">

          <div className="hidden md:flex justify-between items-center px-4 py-1.5 text-[11px] font-medium border-b border-white/10 opacity-80">
            <div className="flex gap-6">

              <a
                className="hover:text-yellow-300 transition-colors"
                href="#"
              >
                Become a Seller
              </a>

              <Link
                className="hover:text-yellow-300 transition-colors"
                to="/orders"
              >
                Track Order
              </Link>

              <a
                className="hover:text-yellow-300 transition-colors"
                href="#"
              >
                24/7 Support
              </a>

            </div>

            <span className="flex items-center gap-1">

              <span className="material-symbols-outlined text-[14px]">
                local_shipping
              </span>

              Free Shipping on Orders ₹49,999+

            </span>
          </div>

          <div className="flex justify-between items-center w-full px-4 md:px-8 py-4 gap-4 md:gap-8">

            <Link
              to="/home"
              className="text-2xl font-black text-white tracking-tighter shrink-0 flex items-center gap-2 group"
            >

              <div className="bg-white text-primary p-1.5 rounded-lg group-hover:rotate-12 transition-transform shadow-md">

                <span className="material-symbols-outlined text-2xl block">
                  hub
                </span>

              </div>

              <span className="font-headline">
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
                  onChange={e =>
                    setSearchQuery(e.target.value)
                  }
                  onKeyDown={handleSearch}
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
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 w-9 h-9 bg-primary text-white rounded-full hover:bg-blue-700 transition-all flex items-center justify-center shadow-md"
                >
                  <span className="material-symbols-outlined text-lg">
                    arrow_forward
                  </span>
                </button>

              </div>

            </div>

            <div className="hidden md:flex items-center gap-8 shrink-0">

              <Link
                to="/profile"
                className="flex flex-col items-center gap-0.5 group"
              >

                <span
                  className="material-symbols-outlined text-white group-hover:scale-110 transition-transform"
                  style={{
                    fontVariationSettings: "'FILL' 1",
                  }}
                >
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

                <span className="material-symbols-outlined text-white group-hover:scale-110 transition-transform">
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

                  <span className="material-symbols-outlined text-white group-hover:scale-110 transition-transform">
                    shopping_cart
                  </span>

                  <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-primary">
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

      {/* =====================================================
          MAIN
      ====================================================== */}

      <div className="pt-24 md:pt-[180px] pb-32 md:pb-12 flex-1 max-w-7xl mx-auto w-full px-4 md:px-8 flex gap-6 items-start">

        {/* ===================================================
            SIDEBAR
        ==================================================== */}

        <aside className="hidden lg:flex flex-col w-64 shrink-0 sticky top-[176px]">

          <div className="bg-surface p-4 rounded-t-lg shadow-sm border-b border-outline-variant flex items-center gap-4">

            <div className="w-12 h-12 rounded-full overflow-hidden bg-primary flex items-center justify-center shrink-0">

              <span
                className="material-symbols-outlined text-white text-3xl"
                style={{
                  fontVariationSettings: "'FILL' 1",
                }}
              >
                person
              </span>

            </div>

            <div className="overflow-hidden">

              <p className="text-[11px] text-outline font-medium">
                Hello,
              </p>

              <h2 className="font-headline font-bold text-sm text-on-surface truncate">

                {firstName || lastName
                  ? `${firstName} ${lastName}`.trim()
                  : 'Guest User'}

              </h2>

            </div>

          </div>

          <div className="bg-surface rounded-b-lg shadow-sm flex flex-col py-2">

            {navGroups.map((group, gi) => (
              <div
                key={gi}
                className={`px-4 py-2 ${
                  gi < navGroups.length - 1
                    ? 'border-b border-outline-variant/30'
                    : ''
                }`}
              >

                {group.isGroupButton ? (

                  <button
                    onClick={() =>
                      navigate('/orders')
                    }
                    className={`flex items-center justify-between w-full py-2 transition-colors group text-left ${
                      activeTab === group.id
                        ? 'text-[#2874F0] font-bold bg-blue-50 -mx-4 px-4 border-l-4 border-[#2874F0]'
                        : 'text-on-surface hover:text-[#2874F0]'
                    }`}
                  >

                    <div className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-on-surface">

                      <span className="material-symbols-outlined text-[18px] text-on-surface">
                        {group.icon}
                      </span>

                      {group.label}

                    </div>

                    <span className="material-symbols-outlined text-[16px] text-on-surface">
                      chevron_right
                    </span>

                  </button>

                ) : (

                  <>

                    <div className="flex items-center gap-3 py-2 text-xs font-black uppercase tracking-widest text-on-surface">

                      <span className="material-symbols-outlined text-[18px] text-on-surface">
                        {group.icon}
                      </span>

                      {group.label}

                    </div>

                    <nav className="flex flex-col ml-8 gap-0.5 mt-1">

                      {group.items.map(item => {

                        const isActive =
                          activeTab === item.id;

                        return (
                          <button
                            key={item.id}
                            onClick={() =>
                              setActiveTab(item.id)
                            }
                            className={`flex justify-between items-center py-1.5 text-sm transition-colors text-left w-full ${
                              isActive
                                ? 'text-[#2874F0] font-bold bg-blue-50 -mx-4 px-4 border-l-4 border-[#2874F0]'
                                : 'text-on-surface-variant hover:text-[#2874F0]'
                            }`}
                          >

                            {item.label}

                            {item.badge && (
                              <span className="text-[#388E3C] font-bold text-xs">
                                {item.badge}
                              </span>
                            )}

                          </button>
                        );
                      })}

                    </nav>

                  </>

                )}

              </div>
            ))}

            {/* Logout */}

            <div className="px-4 py-3">

              <button
                onClick={() => {
                  fetch(
                    `${API_BASE}/users/logout`,
                    {
                      method: 'POST',
                      credentials: 'include',
                    }
                  ).finally(() => {
                    window.location.href =
                      '/login';
                  });
                }}
                className="flex items-center gap-3 w-full py-2 text-xs font-bold uppercase tracking-widest text-on-surface hover:text-red-600 transition-colors"
              >

                <span className="material-symbols-outlined text-[18px]">
                  power_settings_new
                </span>

                Logout

              </button>

            </div>

          </div>

        </aside>

        {/* ===================================================
            MAIN CONTENT
        ==================================================== */}

        <main className="flex-1 flex flex-col gap-6 w-full min-w-0">

          {/* Welcome */}

          <section className="bg-surface rounded-lg shadow-sm p-6 w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-4">

            <div>

              <h1 className="text-2xl font-headline font-bold text-on-surface">
                Your Account
              </h1>

              <p className="text-sm text-on-surface-variant mt-1 flex items-center gap-2">

                Premium Member

                <span
                  className="material-symbols-outlined text-orange-500 text-[16px]"
                  style={{
                    fontVariationSettings: "'FILL' 1",
                  }}
                >
                  star
                </span>

              </p>

            </div>

            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-bold text-sm transition-all shadow-sm">
              Upgrade Plan
            </button>

          </section>

          {/* Quick Actions */}

          <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">

            {quickActions.map(qa => (

              <div
                key={qa.id}
                onClick={() => {

                  if (qa.id === 'orders') {
                    navigate('/orders');
                  } else {
                    setActiveTab(qa.id);
                  }

                }}
                className={`bg-surface rounded-lg p-4 flex items-start gap-4 border transition-all cursor-pointer shadow-sm ${
                  activeTab === qa.id
                    ? 'border-[#2874F0] ring-1 ring-[#2874F0]'
                    : 'border-outline-variant/40 hover:border-[#2874F0]'
                }`}
              >

                <div className="w-11 h-11 shrink-0 bg-blue-50 rounded-full flex items-center justify-center text-[#2874F0]">

                  <span className="material-symbols-outlined text-[26px]">
                    {qa.icon}
                  </span>

                </div>

                <div>

                  <h3 className="font-headline font-bold text-sm text-on-surface">
                    {qa.title}
                  </h3>

                  <p className="text-xs text-outline mt-1 line-clamp-2">
                    {qa.desc}
                  </p>

                </div>

              </div>

            ))}

          </section>

          {/* =================================================
              ORDERS
          ================================================== */}

          {activeTab === 'orders' ? (

            <section className="bg-surface rounded-lg shadow-sm w-full flex flex-col overflow-hidden">

              <div className="p-6 border-b border-outline-variant/40 flex justify-between items-center">

                <h2 className="text-xl font-headline font-bold text-on-surface">
                  My Orders
                </h2>

                <span className="text-xs font-bold text-outline uppercase tracking-wider">
                  {MOCK_ORDERS.length} Orders Placed
                </span>

              </div>

              <div className="p-6 flex flex-col gap-6">

                {MOCK_ORDERS.map(order => (

                  <div
                    key={order.id}
                    className="border border-outline-variant/30 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
                  >

                    <div className="bg-surface-container-low px-5 py-3 border-b border-outline-variant/20 flex flex-wrap justify-between items-center gap-4 text-xs font-medium text-on-surface-variant">

                      <div className="flex gap-6">

                        <div>

                          <span className="block text-[10px] uppercase font-bold text-outline tracking-wider">
                            ORDER PLACED
                          </span>

                          <span className="font-bold text-on-surface">
                            {order.date}
                          </span>

                        </div>

                        <div>

                          <span className="block text-[10px] uppercase font-bold text-outline tracking-wider">
                            TOTAL
                          </span>

                          <span className="font-bold text-on-surface">
                            ₹{order.total.toLocaleString('en-IN')}
                          </span>

                        </div>

                      </div>

                      <div className="flex items-center gap-3">

                        <span className="text-[11px] font-mono font-bold text-outline">
                          #{order.id}
                        </span>

                        <span
                          className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${order.statusColor}`}
                        >
                          {order.status}
                        </span>

                      </div>

                    </div>

                    <div className="p-5 flex flex-col gap-4">

                      {order.items.map((item, idx) => (

                        <div
                          key={idx}
                          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
                        >

                          <div className="flex gap-4 items-center">

                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-16 h-16 object-cover rounded-lg border border-outline-variant/20 shrink-0"
                            />

                            <div>

                              <h4 className="font-bold text-sm text-on-surface hover:text-primary transition-colors cursor-pointer">
                                {item.name}
                              </h4>

                              <p className="text-xs text-outline mt-0.5">
                                {item.variant}
                              </p>

                              <span className="font-bold text-sm text-on-surface mt-1 block">
                                ₹{item.price.toLocaleString('en-IN')}
                              </span>

                            </div>

                          </div>

                          <div className="flex sm:flex-col gap-2 shrink-0 w-full sm:w-auto">

                            <button
                              onClick={() =>
                                navigate('/orders')
                              }
                              className="flex-1 sm:flex-none px-4 py-2 bg-primary text-white rounded-lg font-bold text-xs hover:bg-blue-700 transition-colors"
                            >
                              Track Order
                            </button>

                            <button className="flex-1 sm:flex-none px-4 py-2 border border-outline-variant/40 text-on-surface rounded-lg font-bold text-xs hover:bg-surface-container-low transition-colors">
                              View Details
                            </button>

                          </div>

                        </div>

                      ))}

                    </div>

                  </div>

                ))}

              </div>

            </section>

          ) : activeTab === 'addresses' ? (

            /* =================================================
               ADDRESSES
            ================================================== */

            <section className="bg-surface rounded-lg shadow-sm w-full flex flex-col">

              <div className="p-6 border-b border-outline-variant/40 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">

                <div>

                  <h2 className="text-xl font-headline font-bold text-on-surface">
                    Saved Addresses
                  </h2>

                  <p className="text-xs text-outline mt-1">
                    Manage your delivery addresses
                  </p>

                </div>

                <button
                  onClick={openAddAddressForm}
                  className="px-4 py-2 bg-[#2874F0] text-white rounded-lg text-xs font-bold hover:bg-blue-700 transition-colors"
                >
                  + Add New Address
                </button>

              </div>

              {/* ADDRESS FORM */}

              {showAddressForm && (

                <div className="p-6 border-b border-outline-variant/40 bg-blue-50/30">

                  <div className="flex justify-between items-center mb-5">

                    <h3 className="text-lg font-bold text-on-surface">

                      {editingAddressId
                        ? 'Edit Address'
                        : 'Add New Address'}

                    </h3>

                    <button
                      onClick={closeAddressForm}
                      className="text-outline hover:text-red-600"
                    >
                      <span className="material-symbols-outlined">
                        close
                      </span>
                    </button>

                  </div>

                  <form
                    onSubmit={saveAddress}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  >

                    {/* Full Name */}

                    <div>

                      <label className="block text-xs font-bold mb-1">
                        Full Name
                      </label>

                      <input
                        type="text"
                        name="fullName"
                        value={addressForm.fullName}
                        onChange={handleAddressChange}
                        required
                        className="w-full h-10 px-3 border border-outline-variant rounded-lg text-sm bg-white outline-none focus:border-primary"
                        placeholder="Full Name"
                      />

                    </div>

                    {/* Mobile */}

                    <div>

                      <label className="block text-xs font-bold mb-1">
                        Mobile Number
                      </label>

                      <input
                        type="tel"
                        name="mobile"
                        value={addressForm.mobile}
                        onChange={handleAddressChange}
                        required
                        className="w-full h-10 px-3 border border-outline-variant rounded-lg text-sm bg-white outline-none focus:border-primary"
                        placeholder="Mobile Number"
                      />

                    </div>

                    {/* Address */}

                    <div className="md:col-span-2">

                      <label className="block text-xs font-bold mb-1">
                        Address
                      </label>

                      <textarea
                        name="address"
                        value={addressForm.address}
                        onChange={handleAddressChange}
                        required
                        rows="3"
                        className="w-full px-3 py-2 border border-outline-variant rounded-lg text-sm bg-white outline-none focus:border-primary resize-none"
                        placeholder="House No, Street, Area"
                      />

                    </div>

                    {/* City */}

                    <div>

                      <label className="block text-xs font-bold mb-1">
                        City
                      </label>

                      <input
                        type="text"
                        name="city"
                        value={addressForm.city}
                        onChange={handleAddressChange}
                        required
                        className="w-full h-10 px-3 border border-outline-variant rounded-lg text-sm bg-white outline-none focus:border-primary"
                        placeholder="City"
                      />

                    </div>

                    {/* State */}

                    <div>

                      <label className="block text-xs font-bold mb-1">
                        State
                      </label>

                      <input
                        type="text"
                        name="state"
                        value={addressForm.state}
                        onChange={handleAddressChange}
                        required
                        className="w-full h-10 px-3 border border-outline-variant rounded-lg text-sm bg-white outline-none focus:border-primary"
                        placeholder="State"
                      />

                    </div>

                    {/* Pincode */}

                    <div>

                      <label className="block text-xs font-bold mb-1">
                        Pincode
                      </label>

                      <input
                        type="text"
                        name="pincode"
                        value={addressForm.pincode}
                        onChange={handleAddressChange}
                        required
                        maxLength="6"
                        className="w-full h-10 px-3 border border-outline-variant rounded-lg text-sm bg-white outline-none focus:border-primary"
                        placeholder="Pincode"
                      />

                    </div>

                    {/* Buttons */}

                    <div className="md:col-span-2 flex justify-end gap-3 mt-2">

                      <button
                        type="button"
                        onClick={closeAddressForm}
                        className="px-5 py-2 border border-outline-variant rounded-lg text-sm font-bold hover:bg-white"
                      >
                        Cancel
                      </button>

                      <button
                        type="submit"
                        disabled={addressSaving}
                        className="px-5 py-2 bg-[#2874F0] text-white rounded-lg text-sm font-bold hover:bg-blue-700 disabled:opacity-50"
                      >
                        {addressSaving
                          ? 'Saving...'
                          : editingAddressId
                          ? 'Update Address'
                          : 'Save Address'}
                      </button>

                    </div>

                  </form>

                </div>

              )}

              {/* ADDRESS LIST */}

              <div className="p-6">

                {addressLoading ? (

                  <div className="flex flex-col items-center justify-center py-12">

                    <span className="material-symbols-outlined text-4xl animate-spin text-primary">
                      progress_activity
                    </span>

                    <p className="text-sm text-outline mt-3">
                      Loading addresses...
                    </p>

                  </div>

                ) : addresses.length === 0 ? (

                  <div className="flex flex-col items-center justify-center py-12 border border-dashed border-outline-variant rounded-lg">

                    <span className="material-symbols-outlined text-5xl text-outline">
                      location_off
                    </span>

                    <h3 className="font-bold text-sm mt-3">
                      No saved addresses
                    </h3>

                    <p className="text-xs text-outline mt-1">
                      Add an address for faster checkout.
                    </p>

                    <button
                      onClick={openAddAddressForm}
                      className="mt-4 px-5 py-2 bg-[#2874F0] text-white rounded-lg text-xs font-bold"
                    >
                      Add Address
                    </button>

                  </div>

                ) : (

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    {addresses.map((savedAddress, index) => (

                      <div
                        key={savedAddress.id}
                        className="border border-outline-variant/40 rounded-lg p-5 flex flex-col gap-2 relative hover:border-[#2874F0] transition-colors"
                      >

                        {/* Default badge */}

                        {index === 0 && (
                          <span className="absolute top-4 right-4 bg-[#2874F0] text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                            Default
                          </span>
                        )}

                        <h4 className="font-bold text-sm text-on-surface pr-16">
                          {savedAddress.fullName}
                        </h4>

                        <p className="text-xs text-on-surface-variant leading-relaxed">
                          {savedAddress.address}
                        </p>

                        <p className="text-xs text-on-surface-variant">
                          {savedAddress.city},{' '}
                          {savedAddress.state}{' '}
                          - {savedAddress.pincode}
                        </p>

                        <p className="text-xs font-bold text-on-surface mt-2">
                          Mobile: {savedAddress.mobile}
                        </p>

                        {/* ACTIONS */}

                        <div className="flex gap-3 mt-4 pt-3 border-t border-outline-variant/30">

                          <button
                            onClick={() =>
                              openEditAddressForm(
                                savedAddress
                              )
                            }
                            className="flex items-center gap-1 text-[#2874F0] text-xs font-bold hover:underline"
                          >

                            <span className="material-symbols-outlined text-[16px]">
                              edit
                            </span>

                            Edit

                          </button>

                          <button
                            onClick={() =>
                              deleteAddress(
                                savedAddress.id
                              )
                            }
                            className="flex items-center gap-1 text-red-600 text-xs font-bold hover:underline"
                          >

                            <span className="material-symbols-outlined text-[16px]">
                              delete
                            </span>

                            Delete

                          </button>

                        </div>

                      </div>

                    ))}

                  </div>

                )}

              </div>

            </section>

          ) : (

            /* =================================================
               PROFILE INFORMATION
            ================================================== */

            <section className="bg-surface rounded-lg shadow-sm w-full flex flex-col">

              <div className="p-6 border-b border-outline-variant/40 flex justify-between items-center">

                <h2 className="text-xl font-headline font-bold text-on-surface">
                  Personal Information
                </h2>

              </div>

              <div className="p-6 md:p-8 flex flex-col gap-7 max-w-3xl">

                {/* Full Name */}

                <div className="flex flex-col sm:flex-row sm:items-center gap-3">

                  <h3 className="font-bold text-sm text-on-surface w-32 shrink-0">
                    Full Name
                  </h3>

                  <div className="flex flex-1 gap-3">

                    <input
                      className="flex-1 h-10 px-3 bg-surface-container-low border border-outline-variant/40 rounded-lg text-sm text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none disabled:bg-surface-container-high transition-colors"
                      disabled={!editing.name}
                      type="text"
                      value={firstName}
                      onChange={e =>
                        setFirstName(e.target.value)
                      }
                      placeholder="First Name"
                    />

                    <input
                      className="flex-1 h-10 px-3 bg-surface-container-low border border-outline-variant/40 rounded-lg text-sm text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none disabled:bg-surface-container-high transition-colors"
                      disabled={!editing.name}
                      type="text"
                      value={lastName}
                      onChange={e =>
                        setLastName(e.target.value)
                      }
                      placeholder="Last Name"
                    />

                  </div>

                  <button
                    onClick={() =>
                      toggleEdit('name')
                    }
                    className="text-primary font-bold text-sm hover:underline px-2 shrink-0"
                  >
                    {editing.name
                      ? saving
                        ? 'Saving...'
                        : 'Save'
                      : 'Edit'}
                  </button>

                </div>

                {/* Gender */}

                <div className="flex flex-col sm:flex-row sm:items-center gap-3">

                  <h3 className="font-bold text-sm text-on-surface w-32 shrink-0">
                    Your Gender
                  </h3>

                  <div className="flex gap-6">

                    {['male', 'female'].map(g => (

                      <label
                        key={g}
                        className="flex items-center gap-2 cursor-pointer"
                      >

                        <input
                          type="radio"
                          name="gender"
                          value={g}
                          checked={gender === g}
                          onChange={() =>
                            setGender(g)
                          }
                          className="w-4 h-4 text-primary focus:ring-primary accent-primary"
                        />

                        <span className="text-sm text-on-surface-variant capitalize">
                          {g}
                        </span>

                      </label>

                    ))}

                  </div>

                </div>

                {/* Email */}

                <div className="flex flex-col sm:flex-row sm:items-center gap-3">

                  <h3 className="font-bold text-sm text-on-surface w-32 shrink-0">
                    Email Address
                  </h3>

                  <input
                    className="flex-1 h-10 px-3 bg-surface-container-low border border-outline-variant/40 rounded-lg text-sm text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none disabled:bg-surface-container-high transition-colors"
                    disabled={!editing.email}
                    type="email"
                    value={email}
                    onChange={e =>
                      setEmail(e.target.value)
                    }
                  />

                  <button
                    onClick={() =>
                      toggleEdit('email')
                    }
                    className="text-primary font-bold text-sm hover:underline px-2 shrink-0"
                  >
                    {editing.email
                      ? saving
                        ? 'Saving...'
                        : 'Save'
                      : 'Edit'}
                  </button>

                </div>

                {/* Mobile */}

                <div className="flex flex-col sm:flex-row sm:items-center gap-3">

                  <h3 className="font-bold text-sm text-on-surface w-32 shrink-0">
                    Mobile Number
                  </h3>

                  <input
                    className="flex-1 h-10 px-3 bg-surface-container-low border border-outline-variant/40 rounded-lg text-sm text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none disabled:bg-surface-container-high transition-colors"
                    disabled={!editing.mobile}
                    type="tel"
                    value={mobile}
                    onChange={e =>
                      setMobile(e.target.value)
                    }
                  />

                  <button
                    onClick={() =>
                      toggleEdit('mobile')
                    }
                    className="text-primary font-bold text-sm hover:underline px-2 shrink-0"
                  >
                    {editing.mobile
                      ? saving
                        ? 'Saving...'
                        : 'Save'
                      : 'Edit'}
                  </button>

                </div>

                {/* Danger Zone */}

                <div className="pt-5 mt-2 border-t border-outline-variant/40 flex flex-col items-start gap-3">

                  <button className="text-primary font-bold text-sm hover:underline">
                    Deactivate Account
                  </button>

                  <button className="text-red-600 font-bold text-sm hover:underline">
                    Delete Account
                  </button>

                </div>

              </div>

            </section>

          )}

        </main>

      </div>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer className="hidden md:block bg-[#172337] text-gray-300 w-full mt-auto">

        <div className="max-w-7xl mx-auto w-full px-4 md:px-8 py-12 flex flex-col gap-8">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-gray-700/50 pb-10">

            {FOOTER_COLS.map((col, i) => (

              <div
                key={i}
                className="flex flex-col gap-3"
              >

                <h4 className="text-gray-400 font-bold text-xs uppercase tracking-widest mb-1">
                  {col.title}
                </h4>

                {col.links.map(l => (

                  <a
                    key={l}
                    className="text-xs text-gray-500 hover:text-gray-200 transition-colors"
                    href="#"
                  >
                    {l}
                  </a>

                ))}

              </div>

            ))}

            <div className="flex flex-col gap-3">

              <h4 className="text-gray-400 font-bold text-xs uppercase tracking-widest mb-1">
                Social
              </h4>

              <div className="flex gap-4">

                {[
                  'share',
                  'photo_camera',
                  'play_circle',
                ].map(icon => (

                  <a
                    key={icon}
                    href="#"
                    className="text-gray-500 hover:text-gray-200 transition-colors"
                  >

                    <span className="material-symbols-outlined">
                      {icon}
                    </span>

                  </a>

                ))}

              </div>

            </div>

          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-3">

            <Link
              to="/home"
              className="font-headline font-bold text-white text-lg"
            >
              Amihive Ecom
            </Link>

            <span className="text-xs text-gray-500">
              © 2024 Amihive Ecom. All rights reserved.
            </span>

          </div>

        </div>

      </footer>

      {/* Mobile Navigation */}

      <BottomNav />

    </div>
  );
}