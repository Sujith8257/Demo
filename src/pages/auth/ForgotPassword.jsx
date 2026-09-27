import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setError("Please provide a valid email address.");
      return;
    }
    setError("");
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleResend = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert(`A new reset link has been dispatched to ${email}`);
    }, 600);
  };

  return (
    <>
      <style>{`
        :root {
          --brand-900: #123b3a;
          --brand-100: #e2ebe8;
          --accent-500: #c7a66a;
          --accent-100: #fbf8f2;
          --surface-0: #ffffff;
          --surface-50: #f7f6f2;
          --text-900: #171d1c;
          --text-500: #5f6b69;
        }

        .forgot-page-root {
          width: 100%;
          max-width: 100%;
          min-height: 100vh;
          min-height: 100dvh;
          padding: 16px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin: 0 auto;
          background: var(--surface-50);
          box-sizing: border-box;
          overflow-x: hidden;
          position: relative;
          font-family: "Manrope", sans-serif;
          color: var(--text-900);
        }

        .forgot-card-container {
          width: 100%;
          max-width: 1020px;
          margin: auto !important;
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          background: var(--surface-0);
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(18, 59, 58, 0.08);
          border: 1px solid var(--brand-100);
          box-sizing: border-box;
        }

        /* LEFT PANEL */
        .forgot-left-panel {
          margin: 16px !important;
          padding: 28px 28px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border-radius: 20px;
          color: #ffffff;
          background: var(--brand-900);
          position: relative;
          overflow: hidden;
          min-width: 0;
          box-sizing: border-box;
        }

        .badge-champagne {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 5px 13px;
          border-radius: 9999px;
          background: rgba(199, 166, 106, 0.16);
          border: 1px solid rgba(199, 166, 106, 0.35);
          color: var(--accent-500);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          margin-bottom: 12px;
          width: fit-content;
        }

        .badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent-500);
          box-shadow: 0 0 8px rgba(199, 166, 106, 0.6);
        }

        .forgot-left-content h1 {
          font-size: clamp(24px, 2.8vw, 34px);
          line-height: 1.18;
          letter-spacing: -0.8px;
          font-weight: 800;
          margin-bottom: 12px;
          color: #ffffff;
        }

        .forgot-left-content p {
          font-size: 13px;
          line-height: 1.55;
          color: rgba(255, 255, 255, 0.82);
          font-weight: 400;
        }

        .forgot-image-wrapper {
          margin-top: 16px;
          flex: 1;
          min-height: 200px;
          border-radius: 18px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .forgot-image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .forgot-image-wrapper:hover img {
          transform: scale(1.03);
        }

        .image-overlay-badge {
          position: absolute;
          bottom: 14px;
          left: 14px;
          max-width: calc(100% - 28px);
          background: rgba(18, 59, 58, 0.9);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(199, 166, 106, 0.4);
          color: var(--accent-100);
          font-size: 11.5px;
          font-weight: 600;
          padding: 6px 12px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        /* RIGHT PANEL */
        .forgot-right-panel {
          padding: 28px 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 0;
          box-sizing: border-box;
        }

        .form-wrapper {
          width: 100%;
          max-width: 380px;
          margin: 0 auto;
          box-sizing: border-box;
        }

        .brand {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-bottom: 16px;
          cursor: pointer;
        }

        .brand-icon {
          color: var(--brand-900);
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: var(--brand-100);
        }

        .brand h2 {
          font-size: 21px;
          font-weight: 800;
          color: var(--text-900);
          letter-spacing: -0.5px;
        }

        .heading {
          text-align: center;
          margin-bottom: 16px;
        }

        .heading h1 {
          font-size: 24px;
          font-weight: 800;
          color: var(--text-900);
          letter-spacing: -0.5px;
          margin-bottom: 6px;
        }

        .heading p {
          font-size: 13px;
          color: var(--text-500);
          font-weight: 500;
          line-height: 1.5;
        }

        .forgot-form {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .input-container {
          position: relative;
          width: 100%;
        }

        .forgot-input {
          width: 100%;
          height: 48px;
          padding: 0 16px;
          background: var(--surface-50);
          border: 1px solid var(--brand-100);
          border-radius: 12px;
          outline: none;
          font-size: 13.5px;
          font-weight: 500;
          color: var(--text-900);
          box-sizing: border-box;
          transition: all 0.2s ease;
        }

        .forgot-input::placeholder {
          color: var(--text-500);
        }

        .forgot-input:hover {
          background: #f0eee8;
          border-color: #cbd8d3;
        }

        .forgot-input:focus {
          background: var(--surface-0);
          border-color: var(--brand-900);
          box-shadow: 0 0 0 3px rgba(18, 59, 58, 0.14);
        }

        .submit-btn {
          width: 100%;
          height: 48px;
          background: var(--brand-900);
          color: #ffffff;
          border: none;
          border-radius: 12px;
          font-size: 14.5px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 14px rgba(18, 59, 58, 0.2);
          margin-top: 4px;
        }

        .submit-btn:hover {
          background: #194e4d;
          transform: translateY(-1px);
          box-shadow: 0 6px 18px rgba(18, 59, 58, 0.28);
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }

        .success-box {
          background: #f2f7f5;
          border: 1px solid #b7d6ce;
          border-radius: 16px;
          padding: 24px 20px;
          text-align: center;
          margin-bottom: 16px;
        }

        .success-icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--brand-900);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 12px;
        }

        .success-title {
          font-size: 17px;
          font-weight: 800;
          color: var(--brand-900);
          margin-bottom: 6px;
        }

        .success-desc {
          font-size: 13px;
          color: var(--text-500);
          line-height: 1.55;
          margin-bottom: 14px;
        }

        .resend-btn {
          background: none;
          border: none;
          color: var(--brand-900);
          font-weight: 700;
          font-size: 12.5px;
          text-decoration: underline;
          cursor: pointer;
          padding: 0;
        }

        .resend-btn:hover {
          color: var(--accent-500);
        }

        .error-message {
          font-size: 12px;
          color: #b91c1c;
          background: #fef2f2;
          border: 1px solid #fecaca;
          padding: 8px 12px;
          border-radius: 8px;
          text-align: left;
        }

        .back-login-link {
          text-align: center;
          margin-top: 18px;
          font-size: 13px;
          color: var(--text-500);
        }

        .back-login-link a {
          color: var(--brand-900);
          font-weight: 700;
          text-decoration: none;
          transition: color 0.2s;
        }

        .back-login-link a:hover {
          color: var(--accent-500);
          text-decoration: underline;
        }

        @media (max-width: 1024px) {
          .forgot-card-container {
            grid-template-columns: 1fr;
            max-width: 480px;
            margin: 0 auto !important;
            border-radius: 24px;
          }
          .forgot-left-panel {
            display: none !important;
          }
          .forgot-right-panel {
            padding: 36px 24px;
          }
        }

        @media (max-width: 480px) {
          .forgot-page-root {
            padding: 16px 12px;
          }
          .forgot-card-container {
            border-radius: 20px;
          }
          .forgot-right-panel {
            padding: 28px 16px;
          }
        }
      `}</style>

      <div className="forgot-page-root">
        <div className="forgot-card-container">
          {/* LEFT PANEL */}
          <div className="forgot-left-panel">
            <div className="forgot-left-content">
              <div className="badge-champagne">
                <span className="badge-dot"></span>
                HAUTE HORLOGERIE & ATELIER
              </div>
              <h1>
                The Art of
                <br />
                Precision Time.
                <br />
                Amihive Watches
              </h1>
              <p>
                Encrypted patron recovery service safeguarding verified collectors and timepiece provenance.
              </p>
            </div>

            <div className="forgot-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80"
                alt="Amihive luxury mechanical timepiece"
              />
              <div className="image-overlay-badge">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <span>100% Certified Horology</span>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="forgot-right-panel">
            <div className="form-wrapper">
              {/* BRAND HEADER */}
              <div className="brand" onClick={() => navigate("/home")}>
                <div className="brand-icon">
                  <WatchIcon />
                </div>
                <h2>Amihive Watches</h2>
              </div>

              {!isSubmitted ? (
                <>
                  <div className="heading">
                    <h1>Reset Password</h1>
                    <p>
                      Enter your registered email address and we'll send you secure instructions to reset your account password.
                    </p>
                  </div>

                  <form className="forgot-form" onSubmit={handleSubmit}>
                    {error && <div className="error-message">{error}</div>}

                    <div className="input-container">
                      <input
                        className="forgot-input"
                        type="email"
                        name="email"
                        placeholder="Registered Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="email"
                        required
                      />
                    </div>

                    <button
                      className="submit-btn"
                      type="submit"
                      disabled={isLoading}
                    >
                      {isLoading ? "Dispatching Instructions..." : "Send Reset Link"}
                    </button>
                  </form>
                </>
              ) : (
                <div className="success-box">
                  <div className="success-icon-wrap">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div className="success-title">Check Your Inbox</div>
                  <div className="success-desc">
                    We've dispatched password reset instructions to <strong>{email}</strong>. Please check your inbox and spam folder.
                  </div>
                  <button
                    type="button"
                    className="resend-btn"
                    onClick={handleResend}
                    disabled={isLoading}
                  >
                    Didn't receive email? Click to resend
                  </button>
                </div>
              )}

              {/* NAVIGATION LINKS */}
              <div className="back-login-link">
                Remember your password? <Link to="/login">Sign In</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const WatchIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="7" />
    <polyline points="12 9 12 12 13.5 13.5" />
    <path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83" />
  </svg>
);
