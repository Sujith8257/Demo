import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const BottomNav = () => {
  const location = useLocation();
  
  const navItems = [
    { label: 'Home', icon: 'home', path: '/home' },
    { label: 'Orders', icon: 'shopping_bag', path: '/orders' },
    { label: 'Cart', icon: 'shopping_cart', path: '/cart', badge: 3 },
    { label: 'Profile', icon: 'person', path: '/profile' },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-outline-variant z-[100] px-4 py-2 flex justify-around items-center shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <Link
            key={item.label}
            to={item.path}
            className={`flex flex-col items-center gap-1 transition-colors ${
              isActive ? 'text-primary' : 'text-on-surface-variant'
            }`}
          >
            <div className="relative">
              <span 
                className="material-symbols-outlined text-[24px]"
                style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}
              >
                {item.icon}
              </span>
              {item.badge && (
                <span className="absolute -top-1.5 -right-2 bg-tertiary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white">
                  {item.badge}
                </span>
              )}
            </div>
            <span className="text-[10px] font-medium">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default BottomNav;
