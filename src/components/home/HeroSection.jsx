import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section
      className="text-white overflow-hidden"
      style={{
        minHeight: "85vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
        display: "flex",
        alignItems: "center",
        position: "relative",
      }}
    >
      {/* Animated background shapes */}
      <div style={{
        position: "absolute",
        width: "300px",
        height: "300px",
        borderRadius: "50%",
        background: "rgba(255,255,255,0.1)",
        top: "-100px",
        right: "-100px",
        animation: "float 6s ease-in-out infinite"
      }}></div>
      <div style={{
        position: "absolute",
        width: "200px",
        height: "200px",
        borderRadius: "50%",
        background: "rgba(255,255,255,0.05)",
        bottom: "-50px",
        left: "-50px",
        animation: "float 8s ease-in-out infinite"
      }}></div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(30px); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-30px); }
        }
      `}</style>

      <div className="container position-relative z-2">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 className="display-3 fw-bold mb-3" style={{ lineHeight: "1.2", animation: "fadeInUp 1s ease" }}>
              Your One-Stop Shop for Everything
            </h1>

            <p className="lead mb-4" style={{ fontSize: "1.3rem", opacity: "0.95", animation: "fadeInUp 1.2s ease" }}>
              ✨ Discover millions of products from trusted sellers • 🚚 Fast & reliable delivery • 💰 Unbeatable deals
            </p>

            <div className="d-flex gap-3 mb-4" style={{ animation: "fadeInUp 1.4s ease" }}>
              <Link to="/public/product-listing" className="btn btn-light btn-lg px-5" style={{ fontWeight: "600", boxShadow: "0 4px 12px rgba(0,0,0,0.2)" }}>
                🛍️ Shop Now
              </Link>
              <a href="#categories" className="btn btn-outline-light btn-lg px-5" style={{ fontWeight: "600" }}>
                📚 Browse Categories
              </a>
            </div>

            <div className="d-flex gap-4 flex-wrap" style={{ animation: "fadeInUp 1.6s ease", fontSize: "0.95rem" }}>
              <div>
                <p className="h5 mb-1">⭐ 4.8/5</p>
                <small>2.5M+ Reviews</small>
              </div>
              <div>
                <p className="h5 mb-1">🚚 Free Delivery</p>
                <small>On orders above ₹499</small>
              </div>
              <div>
                <p className="h5 mb-1">🔒 100% Safe</p>
                <small>Secure Checkout</small>
              </div>
            </div>
          </div>

          <div className="col-lg-6 d-none d-lg-block text-center">
            <div style={{
              fontSize: "200px",
              animation: "bounce 3s ease-in-out infinite",
            }}>
              🛍️
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;