import React, { useState } from 'react';

const WRIST_PHOTOS = [
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgvijkqhCjQ_f5k1Sz-ml3B9nLdUsuB57S4KZWzBOdoQFruJUxjiGOOEY5FnBzjOuNxx1KVaI0mODa0EQC643MDxVvtUDpoRAkh06mkWDGRON0YZgzHPO7O_Vw4DmN1UXzL9yw6oeqkJFl1glxFZkxf_57h8aepO_ipjB8OQ7FRLQlXSfa4gpz7OLnAKg_CKNebA39L9Krb9ZoyPZjTT-G-oSnF6p_40bJOHGeW0v1TC3AaJou9Nm1eA',
    alt: 'Customer photo of the Aster watch resting beside an artisan brass fountain pen and distressed leather notebook in morning cafe light.'
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5Brv3kRQUwrFdvkEhyiEID_bEUHSnxNTHz9rDuf6QUIoak3xvGRzeaqOPXUqbG4pp82NbbWCL8NGX8CtvzKq7HyIJiRoX8HyFojrye_sx3hqeuRW2wmtFvkV3wO2ZS8SdwHMxgKmttkuYbTYORtrGp6XOdEgLEamJ2XYe6XHT-6i3IizbWtUBAK5Z4sDkr5BC0CT8ZjTM3oyHyY_OkYWugVLnbFEvobzllz5suye9WNhP62nbZviMmA',
    alt: 'Real buyer wrist shot outdoors showing the Aster blue sunray dial reflecting afternoon blue skies.'
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0kP1dr3YFdRj1p2JDAfCSxIL0iYBMFLZYmu2l84aGsGzsPRpYu-HAn2VyOLYuZckZKCJlh8ANcYoDgaY2coBONMZw0ZtcOlyNW2w59zSBe1bR08KIbRKKg840I3Ld8Vj5chNRfYmSeJ40LefPx3Xep2UU5YcaOMU4kEHbIIA6Ufu0HSpnYR2sXsGrN4Dt8IqWsDuNHJnGtiLlgpWIPatGL3iHVDZjDX4jN6totwBUbYmIQI5pdIH_fQ',
    alt: 'Customer unboxing picture capturing the dark navy presentation box with leather watch pouch on a light wooden desk.'
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8NYVdBWwMZtejcU_Vv1f0gySOyuiL4cE0y6jPaigFDpnfnjVT1LMCN43K3jhHkQgOzUVLI3icPzI7SRSgpWmwj6PcE7SITe9btuyH8hNUdnJ4A2qHQhxAoN3d1-94asBtGsLW0yzsi-UlMAoHulQ2-2-2MApE3G5vpogzJGliN8nziWG02QlQ-0Mc9mcq9ZDWklz8HDXy_6sfibiJBmhUFXx84zKK1JE_dRsjjlN0PSzC3SBLM9ZVTw',
    alt: 'Macro photo by user showing the luminous Super-LumiNova markers glowing electric blue in dimmed ambient lighting.'
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJC1WBrpCGkHP3s8PVT325u5LNa8px41NJKI8zO4W7P30lMiRjr1n-1AvH6eC334_f2MruYtqbGRtWe4Mp_piLV_PbZc3B6b5Ychc4IO5J-Bb1-ItKJ-_h47dEnseSNwC2Nk3lSUTKvUCfe1BH1ZDzKcgiVldsc51ErnCA2mDI8WLLP1bUXs27zX473l89iAqe2J2BidR_XGMPLHZqwiHs0AnmkPh9wjpuDiO57QTuZVr2lk_ewTg1Qw',
    alt: 'Wrist roll shot showing the vegetable tanned cognac leather band curving gracefully on a customer\'s wrist with tailored jacket.'
  }
];

const INITIAL_REVIEWS = [
  {
    id: 1,
    author: 'Arjun Krishnamurthy',
    initials: 'AK',
    avatarBg: 'bg-primary-fixed text-on-primary-fixed',
    badge: 'Verified AMIHIVE Collector · Bought 40mm Cognac',
    time: 'Reviewed 12 days ago',
    rating: 5,
    title: 'Unrivaled dial depth for this price bracket',
    body: 'I own pieces from Swiss legacy brands costing five times more, but the Aster No.04 has genuinely dominated my wrist time over the last fortnight. The Miyota 9015 sweep is buttery smooth, running at approximately +4 seconds per day on my desk timekeeper. The leather strap arrived supple right out of the box with zero stiff break-in required. Exemplary packaging too.',
    response: {
      author: 'AMIHIVE Studio Horologist Response',
      text: 'Thank you, Arjun! The +4s rate reflects the multi-position regulation our team performs prior to sealing. Wear it in good health!'
    },
    helpfulCount: 34,
    tags: ['photos', '5star', 'accuracy', 'strap']
  },
  {
    id: 2,
    author: 'Nalini Mehta',
    initials: 'NM',
    avatarBg: 'bg-secondary-fixed text-on-secondary-fixed',
    badge: 'Verified AMIHIVE Collector · Bought 38mm Blue',
    time: 'Reviewed 3 weeks ago',
    rating: 5,
    title: 'Sublime proportions for slender wrists',
    body: 'Delighted they introduced the 38mm option. Most automatic mechanicals are oversized bricks nowadays, but this sits flat and effortlessly slides under my silk shirt cuffs. The domed sapphire adds that warm vintage curve without causing reflection glare.',
    helpfulCount: 18,
    tags: ['photos', '5star', 'strap']
  }
];

const FILTER_CHIPS = [
  { id: 'all', label: 'All Reviews (96)' },
  { id: 'photos', label: 'With Photos (38)' },
  { id: '5star', label: '5 Stars (71)' },
  { id: 'strap', label: 'Strap Quality (24)' },
  { id: 'accuracy', label: 'Daily Accuracy (19)' },
];

export default function ProductReviewsSection() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [reviews, setReviews] = useState(INITIAL_REVIEWS);
  const [votedReviews, setVotedReviews] = useState({});
  const [reviewModalOpen, setReviewModalOpen] = useState(false);
  const [newReview, setNewReview] = useState({ name: '', rating: 5, title: '', comment: '' });
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 2500);
  };

  const handleHelpful = (id) => {
    if (votedReviews[id]) return;
    setVotedReviews((prev) => ({ ...prev, [id]: true }));
    setReviews((prev) =>
      prev.map((r) => (r.id === id ? { ...r, helpfulCount: r.helpfulCount + 1 } : r))
    );
    showToast('Marked as helpful. Thank you!');
  };

  const handleReport = (id) => {
    showToast('Review reported for moderation.');
  };

  const handleAddReview = (e) => {
    e.preventDefault();
    if (!newReview.name || !newReview.title || !newReview.comment) return;
    const item = {
      id: Date.now(),
      author: newReview.name,
      initials: newReview.name.substring(0, 2).toUpperCase(),
      avatarBg: 'bg-primary-fixed text-on-primary-fixed',
      badge: 'Verified Buyer · Recent Purchase',
      time: 'Just now',
      rating: newReview.rating,
      title: newReview.title,
      body: newReview.comment,
      helpfulCount: 0,
      tags: [newReview.rating === 5 ? '5star' : 'all']
    };
    setReviews([item, ...reviews]);
    setReviewModalOpen(false);
    setNewReview({ name: '', rating: 5, title: '', comment: '' });
    showToast('Review submitted successfully!');
  };

  const filteredReviews = reviews.filter((r) => {
    if (activeFilter === 'all') return true;
    return r.tags?.includes(activeFilter);
  });

  return (
    <section className="w-full py-space-3xl bg-surface" id="reviews-section">
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-space-md">
          <div className="space-y-space-2xs">
            <span className="font-label-bold text-label-bold text-primary tracking-widest uppercase">
              COLLECTOR VOICES
            </span>
            <h2 className="font-headline-1 text-headline-1 text-on-surface">
              Ratings &amp; Verified Reviews
            </h2>
            <p className="font-body-regular text-body-regular text-on-surface-variant">
              Real unedited impressions from owners across India and worldwide.
            </p>
          </div>
          <button
            onClick={() => setReviewModalOpen(true)}
            className="px-space-md py-space-xs rounded-lg bg-surface-container-low text-on-surface font-body-bold text-body-bold hover:bg-surface-container hover:shadow-sm transition-all self-start md:self-auto flex items-center gap-space-xs border border-surface-container/60"
          >
            <span className="material-symbols-outlined text-[18px]">rate_review</span>
            <span>Write a Collector Review</span>
          </button>
        </div>

        {/* Rating Breakdown Bento */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg mb-space-xl items-center bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm border border-surface-container/60">
          {/* Score Column */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center p-space-md text-center border-b lg:border-b-0 lg:border-r border-surface-container">
            <span className="font-headline-1 text-[56px] leading-tight text-on-surface font-bold">
              4.7
            </span>
            <div className="flex items-center gap-1 text-[#FF9F00] my-space-2xs">
              <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>star_half</span>
            </div>
            <span className="font-body-bold text-body-bold text-on-surface">
              Based on 284 genuine ratings
            </span>
            <span className="font-caption text-caption text-[#388E3C] font-semibold mt-1">
              94% of collectors recommend this watch
            </span>
          </div>

          {/* Rating Histogram Bars */}
          <div className="lg:col-span-8 flex flex-col space-y-space-xs pl-0 lg:pl-space-md">
            {[
              { star: 5, pct: '74%', color: 'bg-[#388E3C]' },
              { star: 4, pct: '18%', color: 'bg-[#388E3C]' },
              { star: 3, pct: '5%', color: 'bg-[#FF9F00]' },
              { star: 2, pct: '2%', color: 'bg-[#FD661D]' },
              { star: 1, pct: '1%', color: 'bg-[#ba1a1a]' },
            ].map((bar) => (
              <div key={bar.star} className="flex items-center gap-space-sm font-label text-label">
                <span className="w-12 text-on-surface font-label-bold flex items-center gap-1">
                  {bar.star} <span className="material-symbols-outlined text-[14px]">star</span>
                </span>
                <div className="flex-1 h-2.5 rounded-full bg-surface-container overflow-hidden">
                  <div className={`h-full ${bar.color} rounded-full`} style={{ width: bar.pct }}></div>
                </div>
                <span className="w-10 text-right text-on-surface-variant font-bold">{bar.pct}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Real Customer Photos Row */}
        <div className="space-y-space-xs mb-space-xl">
          <div className="flex items-center justify-between">
            <span className="font-body-bold text-body-bold text-on-surface">
              Collector Wrist Checks (38 Photos)
            </span>
            <a href="#reviews-section" className="font-label-bold text-label-bold text-primary hover:underline">
              See full collector album →
            </a>
          </div>
          <div className="flex md:grid md:grid-cols-5 gap-space-xs overflow-x-auto pb-2 scrollbar-none">
            {WRIST_PHOTOS.map((photo, i) => (
              <div
                key={i}
                className="w-28 h-28 sm:w-36 sm:h-36 md:w-auto md:h-auto md:aspect-square shrink-0 rounded-xl overflow-hidden shadow-sm hover:opacity-95 hover:scale-[1.02] transition-all cursor-pointer bg-surface-container"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Review Filter Chips */}
        <div className="flex items-center gap-space-xs overflow-x-auto pb-space-xs mb-space-lg scrollbar-none">
          {FILTER_CHIPS.map((chip) => {
            const isSelected = activeFilter === chip.id;
            return (
              <button
                key={chip.id}
                onClick={() => setActiveFilter(chip.id)}
                className={`px-space-sm py-1.5 rounded-full font-label-bold text-label-bold whitespace-nowrap transition-all ${
                  isSelected
                    ? 'bg-primary text-on-primary shadow-sm'
                    : 'bg-surface-container-low text-on-surface hover:bg-surface-container'
                }`}
              >
                {chip.label}
              </button>
            );
          })}
        </div>

        {/* Verified Reviews Feed */}
        <div className="space-y-space-md">
          {filteredReviews.map((r) => (
            <div
              key={r.id}
              className="bg-surface-container-lowest p-space-md md:p-space-lg rounded-2xl shadow-sm space-y-space-xs border border-surface-container/60"
            >
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-space-xs">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-body-bold ${r.avatarBg}`}
                  >
                    {r.initials}
                  </div>
                  <div>
                    <div className="font-body-bold text-body-bold text-on-surface">{r.author}</div>
                    <div className="flex items-center gap-1 text-[#388E3C] font-caption text-caption">
                      <span className="material-symbols-outlined text-[14px]">verified</span>
                      <span>{r.badge}</span>
                    </div>
                  </div>
                </div>
                <span className="font-caption text-caption text-outline">{r.time}</span>
              </div>

              <div className="flex items-center gap-1 text-[#388E3C] flex-wrap">
                {[...Array(r.rating)].map((_, idx) => (
                  <span
                    key={idx}
                    className="material-symbols-outlined text-[18px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                ))}
                <span className="text-on-surface font-body-bold text-body-bold ml-2">
                  {r.title}
                </span>
              </div>

              <p className="font-body-regular text-body-regular text-on-surface-variant leading-relaxed">
                {r.body}
              </p>

              {/* Artisan Merchant Direct Reply */}
              {r.response && (
                <div className="bg-surface-container-low p-space-sm rounded-xl space-y-1 border border-surface-container/50">
                  <div className="flex items-center gap-1 font-label-bold text-label-bold text-primary">
                    <span className="material-symbols-outlined text-[16px]">reply</span>
                    <span>{r.response.author}</span>
                  </div>
                  <p className="font-caption text-caption text-on-surface-variant leading-relaxed">
                    {r.response.text}
                  </p>
                </div>
              )}

              <div className="flex items-center gap-space-md pt-space-2xs text-on-surface-variant font-caption text-caption">
                <button
                  onClick={() => handleHelpful(r.id)}
                  disabled={votedReviews[r.id]}
                  className={`flex items-center gap-1 transition-colors ${
                    votedReviews[r.id]
                      ? 'text-primary font-bold'
                      : 'hover:text-primary'
                  }`}
                >
                  <span className="material-symbols-outlined text-[16px]">thumb_up</span>
                  <span>Helpful ({r.helpfulCount})</span>
                </button>
                <button
                  onClick={() => handleReport(r.id)}
                  className="hover:text-primary transition-colors"
                >
                  Report
                </button>
              </div>
            </div>
          ))}

          {filteredReviews.length === 0 && (
            <div className="text-center py-12 bg-surface-container-lowest rounded-2xl p-6">
              <p className="text-on-surface-variant font-body-regular">
                No reviews found for this filter.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Write Review Modal */}
      {reviewModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setReviewModalOpen(false)}
        >
          <div
            className="bg-surface-container-lowest max-w-lg w-full rounded-2xl p-6 shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-2 border-b border-surface-container">
              <h3 className="font-headline-3 text-on-surface">Write a Collector Review</h3>
              <button
                onClick={() => setReviewModalOpen(false)}
                className="p-1 rounded-full hover:bg-surface-container"
              >
                <span className="material-symbols-outlined text-[22px]">close</span>
              </button>
            </div>

            <form onSubmit={handleAddReview} className="space-y-3">
              <div>
                <label className="block text-caption font-bold mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Anand V."
                  className="w-full h-10 px-3 rounded-lg bg-surface-container-low border border-surface-container text-body-regular focus:outline-none focus:ring-2 focus:ring-primary"
                  value={newReview.name}
                  onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-caption font-bold mb-1">Rating</label>
                <div className="flex gap-1 text-[#FF9F00]">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setNewReview({ ...newReview, rating: s })}
                      className="p-1"
                    >
                      <span
                        className="material-symbols-outlined text-[24px]"
                        style={{ fontVariationSettings: s <= newReview.rating ? "'FILL' 1" : "'FILL' 0" }}
                      >
                        star
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-caption font-bold mb-1">Headline</label>
                <input
                  type="text"
                  required
                  placeholder="Summarize your impression"
                  className="w-full h-10 px-3 rounded-lg bg-surface-container-low border border-surface-container text-body-regular focus:outline-none focus:ring-2 focus:ring-primary"
                  value={newReview.title}
                  onChange={(e) => setNewReview({ ...newReview, title: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-caption font-bold mb-1">Your Thoughts</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Detail your experience with the craftsmanship, dial finish, and comfort..."
                  className="w-full p-3 rounded-lg bg-surface-container-low border border-surface-container text-body-regular focus:outline-none focus:ring-2 focus:ring-primary"
                  value={newReview.comment}
                  onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setReviewModalOpen(false)}
                  className="px-4 py-2 rounded-lg bg-surface-container text-on-surface font-label-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 rounded-lg bg-primary text-on-primary font-label-bold shadow"
                >
                  Submit Review
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 bg-inverse-surface text-inverse-on-surface text-body-bold px-4 py-2.5 rounded-xl shadow-xl animate-fade-in flex items-center gap-2">
          <span className="material-symbols-outlined text-[#388E3C] text-[20px]">check_circle</span>
          <span>{toastMessage}</span>
        </div>
      )}
    </section>
  );
}
