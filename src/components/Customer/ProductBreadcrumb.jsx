import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductBreadcrumb({ items, productName = 'Aster No.04 Automatic Blue Dial' }) {
  const defaultItems = [
    { label: 'Home', to: '/home' },
    { label: 'Watches', to: '/home#watches' },
    { label: 'Automatic Watches', to: '/home#automatic' },
  ];

  const trail = items || defaultItems;

  return (
    <div className="w-full bg-surface-container-low/60 py-space-xs border-b border-surface-container/50">
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
        <nav className="flex items-center space-x-space-2xs text-on-surface-variant font-label text-label overflow-x-auto scrollbar-none py-0.5">
          {trail.map((crumb, idx) => (
            <React.Fragment key={idx}>
              <Link
                to={crumb.to}
                className="hover:text-primary transition-colors whitespace-nowrap"
              >
                {crumb.label}
              </Link>
              <span className="material-symbols-outlined text-[14px] text-outline shrink-0">
                chevron_right
              </span>
            </React.Fragment>
          ))}
          <span className="font-label-bold text-label-bold text-on-surface truncate">
            {productName}
          </span>
        </nav>
      </div>
    </div>
  );
}
