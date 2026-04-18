import { Link } from "react-router-dom";

const categories = [
  { name: "Electronics", icon: "📱", color: "#667eea", count: "2.4K" },
  { name: "Fashion", icon: "👔", color: "#f093fb", count: "5.8K" },
  { name: "Home & Kitchen", icon: "🏠", color: "#4facfe", count: "3.2K" },
  { name: "Beauty & Care", icon: "💄", color: "#fa709a", count: "1.9K" },
  { name: "Sports & Outdoors", icon: "⚽", color: "#30cfd0", count: "2.1K" },
  { name: "Toys & Games", icon: "🎮", color: "#a8edea", count: "1.5K" }
];

function CategoryList() {
  return (
    <section id="categories" className="py-5" style={{ backgroundColor: "#f9f9f9" }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ fontSize: "2.5rem", marginBottom: "10px" }}>
            Shop by Category
          </h2>
          <p className="text-muted" style={{ fontSize: "1.1rem" }}>
            Browse through our wide range of products
          </p>
        </div>

        <div className="row g-4">
          {categories.map((cat, index) => (
            <div key={index} className="col-md-6 col-lg-4 col-xl-2">
              <Link to={`/products?category=${cat.name}`} className="text-decoration-none">
                <div
                  className="card h-100 border-0 shadow-sm text-center text-white transition"
                  style={{
                    background: `linear-gradient(135deg, ${cat.color} 0%, ${cat.color}dd 100%)`,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    minHeight: "180px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "20px"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
                  }}
                >
                  <div className="card-body d-flex flex-column align-items-center justify-content-center">
                    <div style={{ fontSize: "2.5rem", marginBottom: "10px" }}>{cat.icon}</div>
                    <h6 className="fw-bold mb-2" style={{ fontSize: "0.95rem" }}>{cat.name}</h6>
                    <small style={{ opacity: "0.9" }}>{cat.count} Products</small>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoryList;