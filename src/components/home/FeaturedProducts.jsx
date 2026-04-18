import ProductCard from "../product/ProductCard";
import { Link } from "react-router-dom";

const sampleProducts = [
  { id: 1, name: "Wireless Headphones", price: 1999, originalPrice: 3499, rating: 4.6, reviews: 542, image: "🎧", inStock: true },
  { id: 2, name: "Smart Watch Ultra", price: 4999, originalPrice: 8999, rating: 4.7, reviews: 328, image: "⌚", inStock: true },
  { id: 3, name: "Premium Camera", price: 24999, originalPrice: 39999, rating: 4.5, reviews: 189, image: "📷", inStock: true },
  { id: 4, name: "Running Shoes", price: 2499, originalPrice: 4999, rating: 4.4, reviews: 721, image: "👟", inStock: true },
  { id: 5, name: "Coffee Maker Pro", price: 3999, originalPrice: 6999, rating: 4.8, reviews: 456, image: "☕", inStock: true },
  { id: 6, name: "Gaming Mouse", price: 1499, originalPrice: 2999, rating: 4.6, reviews: 634, image: "🖱️", inStock: true }
];

function FeaturedProducts() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-5">
          <div>
            <h2 className="fw-bold" style={{ fontSize: "2.5rem", marginBottom: "5px" }}>
              ⭐ Featured Products
            </h2>
            <p className="text-muted" style={{ fontSize: "1rem" }}>Handpicked deals just for you</p>
          </div>
          <Link to="/public/product-listing" className="btn btn-outline-primary">
            View All →
          </Link>
        </div>

        <div className="row g-4">
          {sampleProducts.map((product) => (
            <div key={product.id} className="col-md-6 col-lg-4 col-xl-2">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* View More CTA */}
        <div className="text-center mt-5" style={{ padding: "40px 20px", background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", borderRadius: "12px", color: "white" }}>
          <h4 className="mb-3">Explore Thousands of Products</h4>
          <p className="mb-4 opacity-75">Find everything you need at unbeatable prices</p>
          <Link to="/public/product-listing" className="btn btn-light btn-lg">
            🛍️ Start Shopping
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;