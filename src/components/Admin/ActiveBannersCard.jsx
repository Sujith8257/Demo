import React, { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export const activeBannersCardCss = `
.active-banners-panel {
  background: #ffffff;
  border: 1px solid rgba(194, 198, 213, .62);
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 4px 14px rgba(0,0,0,.06);
  display: flex;
  flex-direction: column;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
}

.active-banners-heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

.active-banners-heading h3 {
  margin: 0;
  font-size: 14px;
  font-weight: 800;
  color: #10172f;
  font-family: 'Manrope', system-ui, sans-serif;
}

.active-banners-action-btn {
  border: 0;
  background: transparent;
  color: #0056c3;
  font-size: 11.5px;
  font-weight: 800;
  cursor: pointer;
  padding: 0 4px;
  white-space: nowrap;
  transition: opacity .18s;
}
.active-banners-action-btn:hover {
  text-decoration: underline;
}

.active-banners-controls {
  display: flex;
  align-items: center;
  gap: 5px;
}

.active-banners-arrow-btn {
  width: 26px;
  height: 26px;
  border: 1px solid #c2c6d5;
  border-radius: 6px;
  background: #ffffff;
  display: grid;
  place-items: center;
  color: #191b23;
  font-size: 14px;
  cursor: pointer;
  transition: all .18s ease;
}
.active-banners-arrow-btn:hover {
  background: #f3f3fe;
  color: #0056c3;
  border-color: #0056c3;
}

.active-banner-slider {
  display: flex;
  gap: 14px;
  overflow-x: auto;
  scroll-behavior: smooth;
  margin: auto 0;
  padding: 10px 2px;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
}
.active-banner-slider::-webkit-scrollbar { display: none; }

.banner-box-card {
  min-width: 220px;
  width: 220px;
  flex-shrink: 0;
  scroll-snap-align: start;
  border: 1px solid #c2c6d5;
  border-radius: 12px;
  background: #ffffff;
  box-shadow: 0 3px 10px rgba(0,0,0,.04);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all .2s ease;
}
.banner-box-card:hover {
  border-color: #0056c3;
  box-shadow: 0 6px 16px rgba(0,0,0,.08);
  transform: translateY(-2px);
}

.banner-img-box {
  width: 100%;
  height: 105px;
  position: relative;
  overflow: hidden;
}
.banner-img-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.banner-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0,0,0,0.1), rgba(0,40,100,0.6));
}
.banner-tag {
  position: absolute;
  left: 10px;
  bottom: 30px;
  color: #ffffff;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: .02em;
  text-shadow: 0 1px 3px rgba(0,0,0,0.7);
}
.banner-shop-btn {
  position: absolute;
  left: 10px;
  bottom: 8px;
  height: 20px;
  border: 0;
  border-radius: 5px;
  padding: 0 8px;
  background: #ffffff;
  color: #004094;
  font-size: 9px;
  font-weight: 800;
  cursor: pointer;
}

.banner-details-container {
  padding: 10px 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  background: #fafbfe;
  flex: 1;
  border-top: 1px solid #ededf8;
}
.banner-title {
  font-size: 12.5px;
  font-weight: 800;
  color: #191b23;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
}
.banner-meta-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 2px;
}
.banner-meta-table td {
  padding: 3.5px 0;
  font-size: 11px;
  border-bottom: 1px dashed #ededf8;
  vertical-align: middle;
}
.banner-meta-table tr:last-child td {
  border-bottom: 0;
}
.banner-meta-table td:first-child {
  color: #424753;
  font-weight: 500;
}
.banner-meta-table td:last-child {
  text-align: right;
  font-weight: 700;
  color: #191b23;
}

.banner-status-pill {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  height: 20px;
  padding: 0 8px;
  border-radius: 999px;
  font-size: 10.5px;
  font-weight: 800;
  background: #def6e5;
  color: #138a42;
}
.banner-status-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: currentColor;
}
`;

const defaultBanners = [
  { name: "Summer Collection '26", img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80", date: "Till Aug 31, 2026", placement: "Hero Carousel", ctr: "4.8%", status: "Active", tag: "SUMMER COLLECTION" },
  { name: "Deal of the Week", img: "https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?auto=format&fit=crop&w=800&q=80", date: "Till Aug 25, 2026", placement: "Category Top", ctr: "3.5%", status: "Active", tag: "DEAL OF THE WEEK" },
  { name: "Weekend Sale", img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80", date: "Till Aug 23, 2026", placement: "Homepage Promo", ctr: "5.2%", status: "Active", tag: "UPTO 50% OFF" },
  { name: "New Tech Gadgets", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80", date: "Till Sep 05, 2026", placement: "Sidebar Banner", ctr: "2.9%", status: "Active", tag: "SPECIAL SALE" },
  { name: "Home Decor Mega Deal", img: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80", date: "Till Sep 10, 2026", placement: "Footer Banner", ctr: "3.1%", status: "Active", tag: "MEGA SALE" },
];

export default function ActiveBannersCard({
  title = "Active Banners",
  items = defaultBanners,
  actionLabel,
  onAction,
  className = "",
}) {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({ left: -220, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({ left: 220, behavior: "smooth" });
  };

  return (
    <section className={`active-banners-panel js-reveal ${className}`}>
      <style>{activeBannersCardCss}</style>
      <div className="active-banners-heading">
        <h3>{title}</h3>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {actionLabel && (
            <button className="active-banners-action-btn" onClick={onAction}>
              {actionLabel}
            </button>
          )}
          <div className="active-banners-controls">
            <button className="active-banners-arrow-btn" onClick={scrollLeft} title="Slide Left">
              <FiChevronLeft />
            </button>
            <button className="active-banners-arrow-btn" onClick={scrollRight} title="Slide Right">
              <FiChevronRight />
            </button>
          </div>
        </div>
      </div>

      <div className="active-banner-slider" ref={sliderRef}>
        {items.map((b) => (
          <article className="banner-box-card" key={b.id || b.name}>
            <div className="banner-img-box">
              <img src={b.img || b.image} alt={b.name || b.title} />
              <div className="banner-overlay" />
              <span className="banner-tag">{b.tag || b.subtitle || "FEATURED"}</span>
              <button type="button" className="banner-shop-btn">Shop Now</button>
            </div>
            <div className="banner-details-container">
              <strong className="banner-title" title={b.name || b.title}>{b.name || b.title}</strong>
              <table className="banner-meta-table">
                <tbody>
                  <tr>
                    <td>Status</td>
                    <td>
                      <span className="banner-status-pill">
                        <i className="banner-status-dot" />
                        {b.status || "Active"}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>Placement</td>
                    <td><strong>{b.placement || b.location || "Hero Banner"}</strong></td>
                  </tr>
                  <tr>
                    <td>Duration</td>
                    <td><span>{b.date || b.schedule || "Active"}</span></td>
                  </tr>
                  <tr>
                    <td>Click Rate</td>
                    <td><strong style={{ color: "#138a42" }}>{b.ctr || b.clickRate || "3.8% CTR"}</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
