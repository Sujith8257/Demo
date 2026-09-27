import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import BottomNav from '../../../components/Customer/BottomNav';

const TRENDING_SEARCHES = [
  'iPhone 15',
  'Samsung Galaxy',
  'Nova X12 Pro',
  'Wireless Earbuds',
  'Smart Watch',
  'Office Chair',
  'Men Sneakers',
  'Laptop Backpack',
];

const SUGGESTIONS = [
  'Mobiles',
  'Laptops',
  'Headphones',
  'Bluetooth Speakers',
  'Smart Watches',
  'Tablets',
  'Televisions',
  'Cameras',
];

const QUICK_LINKS = [
  { icon: 'smartphone', label: 'Mobiles' },
  { icon: 'laptop_mac', label: 'Laptops' },
  { icon: 'headphones', label: 'Audio' },
  { icon: 'watch', label: 'Wearables' },
  { icon: 'tv', label: 'TV & Home' },
  { icon: 'sports_soccer', label: 'Sports' },
  { icon: 'checkroom', label: 'Fashion' },
  { icon: 'kitchen', label: 'Appliances' },
];

export default function Search() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [recent, setRecent] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
    try {
      setRecent(JSON.parse(localStorage.getItem('amihive_recent_searches') || '[]'));
    } catch {
      setRecent([]);
    }
  }, []);

  const doSearch = (term) => {
    const q = (term ?? query).trim();
    if (!q) return;
    const next = [q, ...recent.filter(r => r !== q)].slice(0, 6);
    setRecent(next);
    try {
      localStorage.setItem('amihive_recent_searches', JSON.stringify(next));
    } catch { /* ignore */ }
    navigate(`/products?q=${encodeURIComponent(q)}`);
  };

  const clearRecent = () => {
    setRecent([]);
    try {
      localStorage.removeItem('amihive_recent_searches');
    } catch { /* ignore */ }
  };

  return (
    <div className="bg-[#F1F3F6] text-on-background min-h-screen flex flex-col font-sans antialiased">

      {/* ── Header ── */}
      <header className="bg-primary text-on-primary w-full z-50 fixed top-0 left-0 right-0 border-b border-white/10 shadow-lg">
        <div className="flex items-center gap-3 px-4 md:px-8 py-3 w-full max-w-7xl mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="text-white flex items-center justify-center p-1 shrink-0"
          >
            <span className="material-symbols-outlined text-2xl">arrow_back</span>
          </button>

          <div className="flex-grow">
            <div className="relative w-full group">
              <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px] pointer-events-none">search</span>
              <input
                ref={inputRef}
                className="w-full pl-10 pr-12 py-2.5 rounded-full text-on-background bg-white border-none focus:ring-2 focus:ring-promo outline-none shadow-md text-sm font-body transition-all"
                placeholder="Search for products, brands and more..."
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && doSearch()}
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 w-8 h-8 text-on-surface-variant hover:bg-surface-container-low rounded-full flex items-center justify-center transition-colors"
                >
                  <span className="material-symbols-outlined text-lg">close</span>
                </button>
              )}
            </div>
          </div>

          <button
            onClick={() => doSearch()}
            className="text-white font-bold text-sm shrink-0 px-1"
          >
            Search
          </button>
        </div>
      </header>

      {/* ── Main ── */}
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 md:px-8 pt-20 pb-28 md:pb-12 flex flex-col gap-6">

        {query.trim() ? (
          /* ── Live Suggestions ── */
          <section className="bg-surface rounded-lg shadow-sm overflow-hidden">
            <p className="px-4 py-3 text-xs font-bold uppercase tracking-widest text-outline border-b border-outline-variant/40">
              Suggestions
            </p>
            <div className="flex flex-col">
              {SUGGESTIONS.map((s, i) => (
                <button
                  key={i}
                  onClick={() => doSearch(s)}
                  className="flex items-center gap-3 px-4 py-3 text-sm text-on-surface hover:bg-surface-container-low transition-colors border-b border-outline-variant/20 last:border-b-0"
                >
                  <span className="material-symbols-outlined text-[18px] text-outline">search</span>
                  {s}
                </button>
              ))}
            </div>
          </section>
        ) : (
          <>
            {/* ── Recent Searches ── */}
            {recent.length > 0 && (
              <section className="bg-surface rounded-lg shadow-sm overflow-hidden">
                <div className="px-4 py-3 flex justify-between items-center border-b border-outline-variant/40">
                  <p className="text-xs font-bold uppercase tracking-widest text-outline">Recent Searches</p>
                  <button onClick={clearRecent} className="text-xs font-bold text-primary hover:underline">Clear</button>
                </div>
                <div className="flex flex-col">
                  {recent.map((r, i) => (
                    <button
                      key={i}
                      onClick={() => doSearch(r)}
                      className="flex items-center gap-3 px-4 py-3 text-sm text-on-surface hover:bg-surface-container-low transition-colors border-b border-outline-variant/20 last:border-b-0"
                    >
                      <span className="material-symbols-outlined text-[18px] text-outline">history</span>
                      {r}
                      <span className="material-symbols-outlined text-[16px] text-outline ml-auto">north_west</span>
                    </button>
                  ))}
                </div>
              </section>
            )}

            {/* ── Quick Category Links ── */}
            <section className="bg-surface rounded-lg shadow-sm overflow-hidden">
              <div className="px-4 py-3 border-b border-outline-variant/40">
                <p className="text-xs font-bold uppercase tracking-widest text-outline">Quick Links</p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-outline-variant/20">
                {QUICK_LINKS.map((l, i) => (
                  <button
                    key={i}
                    onClick={() => doSearch(l.label)}
                    className="bg-surface flex flex-col items-center gap-2 py-6 px-2 hover:bg-surface-container-low transition-colors"
                  >
                    <span className="w-12 h-12 rounded-full bg-blue-50 text-primary flex items-center justify-center">
                      <span className="material-symbols-outlined text-[26px]" style={{ fontVariationSettings: "'FILL' 1" }}>{l.icon}</span>
                    </span>
                    <span className="text-xs font-semibold text-on-surface">{l.label}</span>
                  </button>
                ))}
              </div>
            </section>

            {/* ── Trending Searches ── */}
            <section className="bg-surface rounded-lg shadow-sm p-4">
              <p className="text-xs font-bold uppercase tracking-widest text-outline mb-3">
                <span className="material-symbols-outlined text-[14px] align-text-bottom mr-1">local_fire_department</span>
                Trending Searches
              </p>
              <div className="flex flex-wrap gap-2">
                {TRENDING_SEARCHES.map((t, i) => (
                  <button
                    key={i}
                    onClick={() => doSearch(t)}
                    className="px-3 py-1.5 rounded-full bg-surface-container-low text-sm font-medium text-on-surface hover:bg-primary hover:text-white transition-colors"
                  >
                    {t}
                  </button>
                ))}
              </div>
            </section>

            {/* ── Browse All ── */}
            <Link
              to="/products"
              className="bg-primary text-white rounded-lg py-3 font-bold text-sm text-center hover:bg-blue-700 transition-colors shadow-sm"
            >
              Browse All Products
            </Link>
          </>
        )}
      </main>

      {/* Mobile Navigation */}
      <BottomNav />
    </div>
  );
}